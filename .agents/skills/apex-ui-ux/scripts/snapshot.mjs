#!/usr/bin/env node

/**
 * APEX UI/UX Snapshot & Viewport Verification Tool
 * Captures clean, high-resolution snapshots of local or remote interfaces.
 * 
 * Usage:
 *   node snapshot.mjs <url> <output-image.png> [--dark | --light] [--mobile | --desktop]
 */

import { existsSync } from "node:fs";

const args = process.argv.slice(2);
const url = args[0];
const out = args[1] || "snapshot.png";

if (!url) {
  console.log("Usage: node snapshot.mjs <url> [output.png] [--dark|--light] [--mobile|--desktop]");
  process.exit(1);
}

const isDark = args.includes("--dark") || (!args.includes("--light"));
const isMobile = args.includes("--mobile");
const viewport = isMobile ? { width: 390, height: 844 } : { width: 1440, height: 900 };

async function run() {
  let pw;
  try {
    pw = await import("playwright");
  } catch {
    try {
      pw = await import("playwright-core");
    } catch {
      console.error("Playwright not found. Install it with: npm install -D playwright");
      process.exit(1);
    }
  }

  const { chromium } = pw;
  console.log(`📸 Launching browser for: ${url} (${viewport.width}x${viewport.height}, ${isDark ? "dark" : "light"})...`);
  
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport,
    colorScheme: isDark ? "dark" : "light",
    deviceScaleFactor: 2
  });

  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  await page.screenshot({ path: out, fullPage: false });
  console.log(`✅ Snapshot saved to: ${out}`);

  await browser.close();
}

run().catch(err => {
  console.error("❌ Snapshot failed:", err.message);
  process.exit(1);
});
