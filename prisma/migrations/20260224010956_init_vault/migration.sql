-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "primaryBureau" TEXT NOT NULL,
    "bureausPulled" TEXT NOT NULL,
    "products" TEXT NOT NULL,
    "approvalFactors" TEXT NOT NULL,
    "notes" TEXT,
    "sourceLinks" TEXT NOT NULL,
    "lastVerifiedAt" DATETIME,
    "tags" TEXT NOT NULL,
    "state" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "VaultAccess" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "code" TEXT NOT NULL,
    "tier" TEXT NOT NULL,
    "redeemedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ScrapeCache" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "html" TEXT,
    "status" TEXT NOT NULL,
    "message" TEXT,
    "fetchedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ScrapeLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "source" TEXT NOT NULL,
    "url" TEXT,
    "status" TEXT NOT NULL,
    "message" TEXT,
    "payload" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "Institution_primaryBureau_idx" ON "Institution"("primaryBureau");

-- CreateIndex
CREATE INDEX "Institution_type_idx" ON "Institution"("type");

-- CreateIndex
CREATE UNIQUE INDEX "VaultAccess_code_key" ON "VaultAccess"("code");

-- CreateIndex
CREATE INDEX "VaultAccess_code_idx" ON "VaultAccess"("code");

-- CreateIndex
CREATE INDEX "VaultAccess_tier_idx" ON "VaultAccess"("tier");

-- CreateIndex
CREATE UNIQUE INDEX "ScrapeCache_url_key" ON "ScrapeCache"("url");
