import robotsParser from "robots-parser";
import * as cheerio from "cheerio";
import { prisma } from "./db";

const RATE_LIMIT_MS = 2500;
const USER_AGENT = "FundingIntelligenceVault/1.0 (compatible; +https://thecredithub.io/vault)";

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function getRobots(url: string) {
  const origin = new URL(url).origin;
  const robotsUrl = `${origin}/robots.txt`;
  try {
    const res = await fetch(robotsUrl, { headers: { "User-Agent": USER_AGENT } });
    const text = await res.text();
    return robotsParser(robotsUrl, text);
  } catch {
    return robotsParser(robotsUrl, "");
  }
}

export async function isAllowedByRobots(url: string): Promise<boolean> {
  const robots = await getRobots(url);
  return robots.isAllowed(url, USER_AGENT) ?? true;
}

export interface ScrapeResult {
  url: string;
  status: "success" | "blocked" | "failed";
  message?: string;
  data?: { title?: string; snippets?: string[]; links?: string[] };
}

async function fetchWithCache(url: string): Promise<{ html: string; fromCache: boolean }> {
  const cached = await prisma.scrapeCache.findUnique({ where: { url } });
  if (cached && cached.html && cached.status === "success") {
    return { html: cached.html, fromCache: true };
  }
  const allowed = await isAllowedByRobots(url);
  if (!allowed) {
    await prisma.scrapeCache.upsert({
      where: { url },
      create: { url, status: "blocked", message: "Disallowed by robots.txt" },
      update: { status: "blocked", message: "Disallowed by robots.txt" },
    });
    throw new Error("Blocked by robots.txt");
  }
  await sleep(RATE_LIMIT_MS);
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  await prisma.scrapeCache.upsert({
    where: { url },
    create: { url, html: html.slice(0, 200000), status: "success" },
    update: { html: html.slice(0, 200000), status: "success", fetchedAt: new Date() },
  });
  return { html, fromCache: false };
}

export async function scrapeDoctorOfCredit(): Promise<ScrapeResult> {
  const url = "https://www.doctorofcredit.com/";
  try {
    const { html } = await fetchWithCache(url);
    const $ = cheerio.load(html);
    const snippets: string[] = [];
    const links: string[] = [];
    $("article a, .post a").each((_, el) => {
      const href = $(el).attr("href");
      const text = $(el).text().trim();
      if (href && (href.includes("bureau") || href.includes("pull") || href.includes("business") || href.includes("credit"))) {
        links.push(href);
      }
      if (text && (text.toLowerCase().includes("bureau") || text.toLowerCase().includes("pull"))) {
        snippets.push(text.slice(0, 200));
      }
    });
    return {
      url,
      status: "success",
      data: {
        title: $("title").text().trim(),
        snippets: snippets.slice(0, 20),
        links: Array.from(new Set(links)).slice(0, 30),
      },
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    const isBlocked = message.includes("robots") || message.includes("Blocked");
    await prisma.scrapeCache.upsert({
      where: { url },
      create: { url, status: isBlocked ? "blocked" : "failed", message },
      update: { status: isBlocked ? "blocked" : "failed", message },
    });
    await prisma.scrapeLog.create({
      data: { source: "doctorofcredit", url, status: isBlocked ? "blocked" : "failed", message },
    });
    return { url, status: isBlocked ? "blocked" : "failed", message };
  }
}

export async function scrapeFicoForums(): Promise<ScrapeResult> {
  const url = "https://ficoforums.myfico.com/t5/Business-Credit/Chase-Ink-Vendor-Category-Data-Points/td-p/6761194";
  try {
    const allowed = await isAllowedByRobots(url);
    if (!allowed) {
      await prisma.scrapeLog.create({
        data: { source: "ficoforums", url, status: "blocked", message: "Disallowed by robots.txt" },
      });
      return { url, status: "blocked", message: "Disallowed by robots.txt" };
    }
    const { html } = await fetchWithCache(url);
    const $ = cheerio.load(html);
    const snippets: string[] = [];
    $(".lia-message-body-content, .MessageBody").each((_, el) => {
      const text = $(el).text().trim();
      if (text && (text.includes("bureau") || text.includes("pull") || text.includes("data point"))) {
        snippets.push(text.slice(0, 300));
      }
    });
    await prisma.scrapeLog.create({
      data: {
        source: "ficoforums",
        url,
        status: "success",
        payload: JSON.stringify({ snippetCount: snippets.length }),
      },
    });
    return {
      url,
      status: "success",
      data: { title: $("title").text().trim(), snippets: snippets.slice(0, 15) },
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    await prisma.scrapeLog.create({
      data: { source: "ficoforums", url: url, status: "failed", message },
    });
    return { url, status: "failed", message };
  }
}

export async function runAllScrapes(): Promise<ScrapeResult[]> {
  const results: ScrapeResult[] = [];
  results.push(await scrapeDoctorOfCredit());
  await sleep(RATE_LIMIT_MS);
  results.push(await scrapeFicoForums());
  return results;
}
