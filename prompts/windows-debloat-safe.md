I want to safely clean up pre-installed bloatware, background ads/telemetry, and unnecessary startup clutter on my Windows 10/11 PC. Act as a senior Windows systems engineer and guide me step by step using transparent, native commands and strictly reversible changes.

Execution & Safety Rules:
- Default to a read-only audit first. Complete the full inventory and safety classification before modifying any app, service, scheduled task, or registry key, and wait for my approval between phases.
- Never run black-box remote scripts (such as `irm ... | iex` or third-party debloaters). Use only transparent, native PowerShell or `winget` commands that I can read and reverse.
- Keep output concise: present clean summaries and numbered lists, and never flood the chat with raw `Get-AppxPackage` or registry dumps.
- Privilege boundary: Do NOT escalate to Administrator privileges during the read-only audit unless required, and always ask for my explicit approval before running elevated commands.
- Mandatory backup before changes: Before applying the first approved change, create a Windows System Restore Point (and verify it actually succeeded, noting Windows' 24-hour restore-point cooldown if applicable) and export all affected registry keys to a timestamped `.reg` backup file.
- Apply one reversible category at a time (e.g., UI ads first, then unused apps), verify stability, and wait for my confirmation.
- Never-touch zones: Do NOT disable or remove Windows Defender / Microsoft Security, Windows Update core services, Microsoft Store runtime / `.NET` / VC++ redistributables, BitLocker, network/firewall services, or hardware/OEM drivers.

1. System & Bloatware Inventory (Read-Only):
- OS Edition & Restore Readiness: Check Windows edition/build and whether System Protection (System Restore) is enabled on `C:`.
- Pre-Installed AppX & Win32 OEM Apps: Inspect non-system `Get-AppxPackage` entries and installed Win32 programs (`winget list` / registry uninstall keys) to spot trialware, OEM promos, or unused bundled apps.
- UI Ads, Suggestions & Background Clutter: Read current registry/policy values for:
  * Start Menu & Settings suggested content / ads (`ContentDeliveryManager`) and Bing web search in Start Menu
  * Lock screen tips & Windows Spotlight promos
  * Background apps, Edge Startup Boost, Widgets, News feeds, and Copilot/AI sidebar toggles (if present)
- Startup & Scheduled Bloat: List user startup items and third-party/OEM scheduled updater tasks running at logon.
- Present the findings cleanly without changing anything yet, and ask which features I actually use (e.g., OneDrive, Xbox/Gaming, Microsoft Store, Edge, Widgets) before classifying items.

2. Three-Tier Safety Classification:
- Group every candidate item into three strict tiers:
  * Tier 1 (Safe & Reversible): Zero OS impact; easily re-enabled or reinstalled (Start Menu ads/suggestions, Lock screen tips, unused bundled apps like News, Solitaire, Clipchamp, or promo apps).
  * Tier 2 (Review First): Safe only if I do not rely on the feature (OneDrive auto-start/sync, Xbox Game Bar/apps, Widgets, Edge background boost, OEM helper utilities, Bing Start Menu search).
  * Tier 3 (Do Not Touch): Core OS stability, security, or app runtime dependencies (Windows Defender, Windows Update, `.NET` / VC++ runtimes, Store framework, audio/GPU/network drivers).
- List each candidate with: Number, Item Name, Current State, Tier, Impact, and Exact Rollback Method.

3. Pre-Change Backup & Approval Gate:
- Ask me to approve specific numbered items from Tier 1 and Tier 2 (never Tier 3).
- Before executing any approved item:
  * Create and verify a System Restore Point (if System Protection is turned off, notify me and offer to enable it first).
  * Export affected registry paths to a timestamped `.reg` backup file in a dedicated backup folder on Desktop or Documents, and show me the exact path.

4. Authorized Debloat & Before/After Verification:
- Execute only the approved changes one group at a time using transparent native commands (`Remove-AppxPackage` for the current user without stripping provisioned OS core unless requested, `winget uninstall` for approved Win32 trialware, and `Set-ItemProperty` for UI/ad toggles).
- Present a Before vs. After summary:
  * Number of background/startup items disabled
  * AppX and Win32 bloat packages removed
  * Change in RAM usage and background process count
  * Exact location of the `.reg` backup file and one-line commands to restore any removed app or setting if needed.
