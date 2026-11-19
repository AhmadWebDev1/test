# fix-with-ai

A modular, open-source collection of **evidence-based diagnostic prompts**, **lean AI agent protocols**, **curated skills**, and **on-demand engineering workflows** — built to troubleshoot real-world tech problems and streamline software engineering safely.

> Designed to work seamlessly with **Antigravity**, **Claude Code**, **OpenCode**, **Cursor**, and any agent that reads Markdown instructions.

## Repository Structure

```text
fix-with-ai/
├── agents/          # Lean always-loaded agent protocol (AGENTS.md)
├── prompts/         # Safe, evidence-based diagnostic & maintenance prompts
├── skills/          # Modular agent skills, references, and audit scripts
│   └── apex-ui-ux/  # UI/UX design & frontend engineering skill
└── workflows/       # On-demand engineering playbooks (debugging, review, security)
```

## Diagnostic & Maintenance Prompts (`prompts/`)

Every prompt follows a strict **read-only diagnosis first -> evidence-based plan -> reversible change with approval** rule.

| Prompt | What It Solves | Direct Link |
| :--- | :--- | :--- |
| **Wi-Fi Diagnostics** | Isolate slow speed, high latency, packet loss, and router interference | [wifi-diagnostics.md](prompts/wifi-diagnostics.md) |
| **PC Health Audit** | Find what is actually causing slowdowns, loud fans, or high RAM/CPU usage | [pc-health-audit.md](prompts/pc-health-audit.md) |
| **Disk Space Detective** | Map storage hogs safely and classify cleanup items before deleting anything | [disk-space-detective.md](prompts/disk-space-detective.md) |
| **Safe Windows Debloat** | Remove bloatware and UI ads using transparent PowerShell with backups | [windows-debloat-safe.md](prompts/windows-debloat-safe.md) |
| **Email Cleanup Organizer** | Triage, label, and organize an overloaded inbox systematically | [email-cleanup-organizer.md](prompts/email-cleanup-organizer.md) |

## On-Demand Workflows (`workflows/`)

Loaded only when needed to keep context windows lean and token costs low.

| Workflow | What It Covers | Direct Link |
| :--- | :--- | :--- |
| **Debugging Loop** | 6-phase red-before-green loop for hard bugs, flakes, and performance regressions | [debugging-loop.md](workflows/debugging-loop.md) |
| **Code Review & PRs** | Two-axis diff review (Spec vs. Standards), audit formats, PR & commit templates | [code-review.md](workflows/code-review.md) |
| **Security Audit** | Evidence-backed SAST/DAST checkup for injections, IDOR, SSRF, secrets, and LLM risks | [security-audit.md](workflows/security-audit.md) |

## Agent Protocols (`agents/`)

- **[AGENTS.md](agents/AGENTS.md):** A lean (~72 lines) senior engineering protocol focused on tool discovery, autonomy, simplicity, surgical diffs, vertical-slice TDD, and safety guardrails — pointing to `workflows/` for heavy tasks.

## Modular Skills (`skills/`)

- **[apex-ui-ux](skills/apex-ui-ux/SKILL.md):** UI/UX design and frontend engineering skill with design tokens, motion guidelines, view-transition recipes, and automated UI audit/snapshot scripts (`audit-ui.mjs`, `snapshot.mjs`).

## Quick Start

1. **Run a diagnostic prompt:** Open any file in [prompts/](prompts/), click **Raw**, copy the content, and paste it into your AI agent or terminal assistant.
2. **Adopt the lean agent protocol:** Copy [agents/AGENTS.md](agents/AGENTS.md) into the root of your project as `AGENTS.md` (and copy [workflows/](workflows/) alongside it for on-demand playbooks).
3. **Install a skill:** Copy any folder from [skills/](skills/) into your agent's skills directory (e.g. `.agents/skills/`).

## Follow & Contribute

- Follow the build-in-public demos and Reels on Instagram: [@\_ahmad.al.khatib\_](https://www.instagram.com/_ahmad.al.khatib_/)
- Found an improvement or want to add a diagnostic prompt? Open an issue or submit a Pull Request.

## License

MIT — see the [LICENSE](LICENSE) file for details.
