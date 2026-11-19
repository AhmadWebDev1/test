I am experiencing slow speeds, high latency, or intermittent drops on my Wi-Fi network. Act as a network engineer and help me diagnose and fix the issue step by step using an evidence-based approach.

Execution & Safety Rules:
- Default to **read-only diagnosis** first. Do NOT move to the next phase until you clearly present the current phase's evidence, likely fault layer, and get my approval.
- Run diagnostic commands directly on my machine. Avoid blind or universal tweaks (such as disabling IPv6, forcing a specific channel, or changing DNS) unless backed by measurement evidence.
- When router admin access is needed, open the router interface and explicitly ask me for login credentials (or let me enter them directly in the UI). **Never** save, log, or repeat passwords, tokens, or sensitive identifiers in files.
- Before applying any router change:
  1. Record the current values (for rollback).
  2. Warn me if the change will restart Wi-Fi or drop connected devices.
  3. Apply **one reversible setting group at a time** and wait for my confirmation.
- Never modify WAN credentials, VLANs, bridge mode, DHCP, firewall, remote administration, or router firmware.

1. Connection Check & Fault Isolation (LAN vs. WAN):
- Measure latency (Ping), jitter, and packet loss to both the Default Gateway (router) and an external server (`1.1.1.1`) using 30–50 packets each.
- Test DNS resolution speed/stability and basic HTTPS reachability over IPv4 (and IPv6 if active).
- Inspect the current Wi-Fi interface on this machine: active band (2.4GHz / 5GHz / 6GHz), signal strength (RSSI/dBm), link speed, and active encryption type.
- Conclude whether the issue is likely on the local Wi-Fi, client device, DNS, or ISP/WAN layer.

2. Local Network & Interference Analysis:
- Identify the router's IP address and determine its model/vendor (e.g., FRITZ!Box, TP-Link, etc.).
- Scan neighboring Wi-Fi networks to identify congested radio channels (including DFS considerations on 5GHz) and recommend the cleanest available channel.
- Scan devices currently connected to the local network to spot IoT devices or background bandwidth hogs, and check latency to wireless clients.

3. Router Login & Configuration Audit (Read-Only):
- Open the router's admin interface (via browser automation or available control interface) and ask me for login credentials.
- Once logged in, audit and report the current state (and save current values as rollback baselines):
  * **Smart Connect / Band Steering:** Is it enabled and forcing devices onto the slower 2.4GHz band?
  * **SSID Separation:** Is the 5GHz network separated with its own SSID from 2.4GHz?
  * **Encryption:** Is it set to WPA2-AES or WPA3 (and not legacy TKIP)?
  * **Radio Settings:** Current Wi-Fi channels, channel width (e.g., 40MHz/80MHz/160MHz), and any active features causing instability (e.g., aggressive power saving, MLO/TWT compatibility issues).

4. Authorized Optimization & Verification:
- Propose the smallest evidence-backed change first (e.g., separating 5GHz/2.4GHz, enforcing WPA2-AES/WPA3, or adjusting channel/width).
- After my approval, apply the change, verify it persisted, and guide me to connect primary devices (laptop, phone) to 5GHz while isolating slower/IoT devices on 2.4GHz.
- Re-run Step 1 tests and compare before-and-after metrics (ping, jitter, packet loss, and link speed). If the change does not improve stability, offer to roll back to the recorded baseline values.
