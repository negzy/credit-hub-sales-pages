import { NextRequest, NextResponse } from "next/server";
import { validateUnlock, buildSetCookiePaid } from "@/lib/vault-access";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = typeof body.password === "string" ? body.password.trim() : (typeof body.code === "string" ? body.code.trim() : "");
    if (!password) {
      return NextResponse.json({ success: false, error: "Password is required" }, { status: 400 });
    }

    const { valid, tier } = await validateUnlock(password);
    if (!valid || tier !== "paid") {
      return NextResponse.json({ success: false, error: "Invalid password" }, { status: 400 });
    }

    const res = NextResponse.json({ success: true, tier: "paid" });
    res.headers.set("Set-Cookie", buildSetCookiePaid());
    return res;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
