My computer is running low on disk space. Act as a senior systems storage engineer and help me find what is consuming storage on my machine (Windows, macOS, or Linux), classify every large item by safety and regenerability, and reclaim space only with my explicit approval.

Execution & Safety Rules:
- Zero silent deletions: NEVER delete, truncate, prune, or move any file or folder without showing its exact path, size, purpose, and getting my explicit confirmation for that specific item.
- Complete the read-only discovery and classification first. Do NOT move to the next phase until you clearly present the current phase's results and get my approval.
- Keep output concise: present clean summaries and ranked lists, and never flood the chat with raw terminal dumps.
- Prefer official native cleanup tools (docker image prune, npm cache clean, brew cleanup, apt autoremove/clean, journalctl --vacuum-size, Windows Storage Sense / DISM) over raw recursive deletes whenever available.
- Privilege & mount boundaries: Never escalate privileges (sudo / Run as Administrator) without my approval—suppress permission-denied noise during scans instead. Stay on local filesystems (one-file-system mode), avoid scanning network mounts, and do not trigger downloads of cloud-only placeholders (OneDrive/iCloud).
- Never touch OS kernel/boot files, active databases without backups, .git history folders, SSH/GPG keys, password stores, or personal documents/photos/videos unless I explicitly ask to inspect them.

1. Volume & Top-Level Storage Map (Read-Only):
- Drive/Mount Overview: List all mounted local drives/partitions with total size, used space, free space, and percentage used.
- Top-Level Directory Breakdown: Scan the home directory and root/OS drive using bounded depth first (e.g., max depth 2 or 3) so the scan finishes quickly without hanging on deep node_modules trees, then drill down only into the largest directories (excluding virtual filesystems like /proc, /sys, /dev, /run).
- Large Single Files: Find the top 15 individual files larger than 500 MB (e.g., forgotten .iso, .zip, .tar.gz, .vhdx, .dmg, database dumps, or giant log files).
- Present a clean summary of total used vs. free space and the top space hogs by path and size, then ask for approval to proceed to Step 2.

2. Hidden Storage, Snapshots & Cache Inspection (Read-Only):
- Hidden Snapshots: Check for space reserved by system snapshots (Timeshift, Btrfs/ZFS snapshots on Linux, APFS local snapshots on macOS, or Windows Shadow Copies / System Restore).
- Containers & VMs: Inspect Docker (docker system df), WSL2 virtual disks (ext4.vhdx), Android Studio / Xcode simulators, and VM images.
- Package & Build Caches: Check node_modules in inactive projects, npm/pnpm/yarn caches, pip/uv caches, cargo/target, Gradle/Maven caches, and Flutter/Dart build artifacts.
- OS Package Managers & Logs: Check apt/dnf/pacman/brew caches, old Snap revisions or unused Flatpak runtimes, systemd journal size (journalctl --disk-usage), /var/log, and Windows Update / crash dump caches.
- App Caches & Trash: Check OS temp folders, old installer packages, browser/IDE caches (VS Code, JetBrains), and space sitting in Trash / Recycle Bin.

3. Safety Classification & Approval Gate:
- Group all findings into three strict tiers:
  * Tier 1 (Safe & Regenerable): Zero data loss; automatically recreated if needed (package caches, build folders, dangling Docker images, Trash).
  * Tier 2 (Review First): Safe only if no longer needed (old node_modules in archived repos, .iso/.dmg/.exe installers, old logs, unused Docker volumes, old system snapshots).
  * Tier 3 (Do Not Touch): Personal data, source code, .env files, active databases, or OS internals.
- List each candidate item with: Number, Exact Path, Size, Tier, and Exact Cleanup Command. (If a large log file is actively held open by a running process, note that it must be truncated or rotated safely rather than deleted blindly.)
- Wait for me to approve specific numbered items or a specific Tier before executing anything.

4. Authorized Cleanup & Before/After Verification:
- Warn clearly if an approved action is irreversible (e.g., emptying Trash, pruning unused Docker volumes, or deleting snapshots) vs. regenerable.
- Execute only the approved cleanup items one by one, reporting space freed after each step.
- Re-run the Step 1 drive overview and present a Before vs. After comparison (total GB freed, new free space, and new percentage available).
