Act as a senior Windows systems engineer. Safely audit and clean pre-installed bloatware, ads/telemetry, and startup clutter on this Windows 10/11 PC using transparent, native PowerShell and `winget` commands with strictly reversible changes.

Execution & Agent Guardrails:
- Read-only first: Run ONLY read-only inspection commands in Phase 1. Do NOT modify any app, service, scheduled task, or registry key until I explicitly approve numbered items.
- Hard Stops: STOP and wait for my explicit reply after Phase 1, after Phase 2, and after each approved category in Phase 4. Never auto-proceed to the next phase.
- Privilege boundary: First check whether the current shell is elevated. Do NOT silently trigger UAC or `Start-Process -Verb RunAs`. Ask my explicit approval before running any command that requires Administrator privileges.
- No black-box scripts: Never run remote or third-party debloat scripts (e.g., `irm ... | iex`). Use only readable, native PowerShell or `winget` commands.
- Keep context clean: Filter command outputs inside PowerShell (e.g., `Select-Object`, `Where-Object`) and present concise summaries/tables only—never dump raw `Get-AppxPackage`, `winget`, or registry outputs into chat.
- Mandatory backup before any change: Before applying the first approved change, create and verify a Windows System Restore Point (note Windows' 24-hour cooldown if triggered; do not silently bypass it without asking) and export all affected registry keys to a timestamped `.reg` backup folder at `$env:USERPROFILE\Documents\WinDebloatBackup_YYYYMMDD_HHMM`, showing the exact path.
- Never-touch zones: NEVER disable or remove Windows Defender/Security, Windows Update core services, Store/`.NET`/VC++ runtimes, BitLocker, network/firewall services, or OEM/hardware drivers.

Phase 1 — Bloatware & Clutter Inventory (Read-Only):
1. Check Windows edition/build, whether the current shell is Admin, and whether System Protection (System Restore) is enabled on `C:`.
2. Inspect non-system AppX packages (`Get-AppxPackage`) and Win32 OEM/trialware programs (`winget list` / uninstall registry keys).
3. Read current UI ad/clutter registry/policy values:
   - Start Menu & Settings suggestions (`ContentDeliveryManager`) and Bing web search in Start
   - Lock screen tips & Windows Spotlight promos
   - Background apps, Edge Startup Boost, Widgets, News feeds, and Copilot sidebar (if present)
4. List user startup items and third-party/OEM scheduled updater tasks running at logon.
5. Present a clean summary, ask which features I actively use (OneDrive, Xbox/Gaming, Microsoft Store, Edge, Widgets), and STOP.

Phase 2 — Three-Tier Classification:
Group every candidate into 3 strict tiers:
- Tier 1 (Safe & Reversible): Zero OS impact (Start/Lock screen ads, unused bundled apps like News, Solitaire, Clipchamp, promo apps).
- Tier 2 (Review First): Safe only if unused (OneDrive auto-start, Xbox Game Bar/apps, Widgets, Edge Startup Boost, OEM utilities, Bing Start search).
- Tier 3 (Do Not Touch): Defender, Windows Update, `.NET`/VC++ runtimes, Store framework, hardware drivers.

Present a numbered table with: `# | Item Name | Current State | Tier | Impact | Exact Rollback Method`. Ask me to reply with the exact numbers I approve from Tiers 1–2 (never Tier 3), and STOP.

Phase 3 — Backup Gate:
Once I approve specific items:
1. Create and verify a System Restore Point (if System Protection is off on `C:`, ask to enable it first).
2. Export every registry path that will be modified to `$env:USERPROFILE\Documents\WinDebloatBackup_YYYYMMDD_HHMM` and confirm the files exist.

Phase 4 — Authorized Execution & Verification:
1. Apply approved changes one category at a time (e.g., UI ads first, then unused apps) using:
   - `Remove-AppxPackage` (current user only; do NOT strip provisioned packages unless I explicitly ask)
   - `winget uninstall` (approved Win32 trialware)
   - `Set-ItemProperty` (UI/ad toggles)
2. Verify stability after each category and STOP for my confirmation before the next group.
3. At the end, report a Before vs. After summary:
   - Startup/background items disabled
   - AppX & Win32 packages removed
   - Change in RAM usage and background process count
   - Exact `.reg` backup folder path + one-line commands to restore any removed app or setting.
