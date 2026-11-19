#!/usr/bin/env node

/**
 * APEX UI/UX Automated Slop Linter & Craftsmanship Checker
 * Scans HTML, JSX, TSX, and CSS files for AI slop anti-patterns.
 * 
 * Usage:
 *   node audit-ui.mjs <file-or-directory-path>
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const target = process.argv[2];

if (!target) {
  console.log("Usage: node audit-ui.mjs <path-to-file-or-dir>");
  process.exit(1);
}

const VIOLATIONS = [
  {
    id: "GRADIENT_TEXT",
    pattern: /(bg-clip-text|text-transparent.*bg-gradient|background-clip:\s*text)/i,
    severity: "🔴 CRITICAL",
    message: "Gradient text detected. Use solid, high-contrast typography.",
    fix: "Replace with text-zinc-100 or solid color token."
  },
  {
    id: "EMOJI_UI",
    pattern: /[\u{1F300}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u,
    severity: "🔴 CRITICAL",
    message: "Emoji used in UI markup. Emojis make interfaces look like synthetic AI slop.",
    fix: "Replace with consistent line icons (e.g., Lucide 16px/18px with 1.5px stroke)."
  },
  {
    id: "PURPLE_GLOW",
    pattern: /(shadow-\[0_0_.*(purple|violet|indigo|fuchsia).*\]|box-shadow:.*(purple|violet|rgba\(147|rgba\(139))/i,
    severity: "🔴 CRITICAL",
    message: "Neon or purple glow halo detected.",
    fix: "Remove glow. Use 1px hairlines (border-white/10) and surface luminescence steps."
  },
  {
    id: "TRANSITION_ALL_LAYOUT",
    pattern: /(transition-all|transition:\s*all)/i,
    severity: "🟡 WARNING",
    message: "transition-all animates layout properties and causes frame drops.",
    fix: "Specify compositor properties only: transition-[transform,opacity]."
  },
  {
    id: "NON_LOGICAL_PROPERTIES",
    pattern: /\b(ml-|mr-|pl-|pr-|left-|right-)\d+/i,
    severity: "🟡 WARNING",
    message: "Physical directional classes break automatic RTL/LTR internationalization.",
    fix: "Use logical properties: ms- (margin-start), me- (margin-end), ps-, pe-, start-, end-."
  },
  {
    id: "UNCHECKED_TRACKING",
    pattern: /(tracking-widest\s+uppercase|uppercase\s+tracking-widest)/i,
    severity: "🔵 NIT",
    message: "Uppercase tracked text detected. Avoid shouting labels.",
    fix: "Use sentence case with tracking-normal or slight tracking-tight on headings."
  }
];

function checkFile(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const findings = [];

  lines.forEach((line, index) => {
    const lineNum = index + 1;
    for (const rule of VIOLATIONS) {
      if (rule.pattern.test(line)) {
        findings.push({
          line: lineNum,
          rule: rule.id,
          severity: rule.severity,
          message: rule.message,
          fix: rule.fix,
          snippet: line.trim().slice(0, 100)
        });
      }
    }
  });

  return findings;
}

function scan(currentPath) {
  const stat = statSync(currentPath);
  if (stat.isFile()) {
    const ext = extname(currentPath);
    if ([".html", ".jsx", ".tsx", ".vue", ".svelte", ".css"].includes(ext)) {
      return [{ file: currentPath, findings: checkFile(currentPath) }];
    }
    return [];
  }

  let results = [];
  const entries = readdirSync(currentPath);
  for (const entry of entries) {
    if (["node_modules", ".git", ".next", "dist", "build"].includes(entry)) continue;
    const full = join(currentPath, entry);
    results = results.concat(scan(full));
  }
  return results;
}

console.log(`\n🔍 [APEX UI/UX] Running craft & anti-slop audit on: ${target}\n`);
const allResults = scan(target);
let totalIssues = 0;

allResults.forEach(({ file, findings }) => {
  if (findings.length > 0) {
    console.log(`\n📄 ${file}`);
    findings.forEach(f => {
      totalIssues++;
      console.log(`  Line ${f.line}: ${f.severity} [${f.rule}]`);
      console.log(`    Problem : ${f.message}`);
      console.log(`    Fix     : ${f.fix}`);
      console.log(`    Code    : ${f.snippet}`);
    });
  }
});

console.log(`\n======================================================`);
if (totalIssues === 0) {
  console.log(`✅ [APEX UI/UX] Pristine! Zero slop violations detected.`);
} else {
  console.log(`⚠️  [APEX UI/UX] Total craft violations found: ${totalIssues}`);
}
console.log(`======================================================\n`);
