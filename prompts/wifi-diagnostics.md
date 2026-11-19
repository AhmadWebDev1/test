I am experiencing slow speeds, high latency, or intermittent drops on my Wi-Fi network. Act as a network engineer and help me diagnose and fix the issue step by step using evidence-based measurements and strictly reversible changes.

Execution & Safety Rules:
- Default to read-only diagnosis first. Do NOT move to the next phase until you clearly present the current phase's evidence, likely fault layer, and get my approval.
- Run diagnostic commands directly on my machine. Avoid blind or universal tweaks (such as disabling IPv6, forcing a specific channel, or changing DNS) unless backed by measurement evidence.
- Keep output concise: present clean summaries and ranked lists instead of flooding the chat with raw terminal dumps.
- When router admin access is needed, open the router interface and explicitly ask me for login credentials (or let me enter them directly in the UI). Never save, log, or repeat passwords, tokens, or sensitive identifiers in files.
- Before applying any device or router change:
  * Record the current values (for rollback).
  * Warn me if the change will restart Wi-Fi or disconnect devices.
  * Let me choose whether to apply all approved fixes or pick specific numbered items, applying one reversible setting group at a time.
- Never modify WAN credentials, VLANs, bridge mode, DHCP, firewall, remote administration, or router firmware.

1. Speed Baseline & Fault Isolation (LAN vs. WAN):
- Ask me for my paid ISP plan speed (Mbps), then run a real download/upload speed test and calculate what percentage of my paid speed I am actually getting.
- Measure latency (Ping), jitter, and packet loss to both the Default Gateway (router) and an external server (1.1.1.1) using 30-50 packets each.
- Benchmark current DNS resolution speed/stability (compare against 1.1.1.1 and 8.8.8.8) and test basic HTTPS reachability over IPv4 (and IPv6 if active).
- Conclude whether the issue is likely on the local device, Wi-Fi link, DNS, or ISP/WAN layer.

2. Local Device & Wi-Fi Adapter Audit (Read-Only):
- Inspect the current Wi-Fi interface on this machine: active band (2.4GHz / 5GHz / 6GHz), signal strength (RSSI/dBm), link speed, and active encryption type.
- Check local Wi-Fi adapter settings that limit speed (e.g., Preferred Band, Throughput Booster, Roaming Aggressiveness, or Wi-Fi Power Saving mode on Windows/Linux/macOS).
- Inspect active network connections and background apps on this machine to spot local bandwidth hogs (e.g., browsers, cloud sync, or updaters holding many active connections).

3. Local Network, Devices & Interference Analysis (Read-Only):
- Identify the router's IP address and determine its model/vendor (e.g., FRITZ!Box, TP-Link, etc.).
- Scan neighboring Wi-Fi networks to identify congested radio channels (including DFS considerations on 5GHz) and recommend the cleanest available channel.
- List all devices currently connected to the local network, flag any unknown or suspicious devices alongside IoT/bandwidth hogs, and ask me which devices are known and which (if any) should be blocked.

4. Router Login & Configuration Audit (Read-Only):
- Open the router's admin interface (via browser automation or available control interface) and ask me for login credentials.
- Once logged in, audit and report the current state (and save current values as rollback baselines):
  * Smart Connect / Band Steering: Is it enabled and forcing devices onto the slower 2.4GHz band?
  * SSID Separation: Is the 5GHz network separated with its own SSID from 2.4GHz?
  * Encryption: Is it set to WPA2-AES or WPA3 (and not legacy TKIP)?
  * Radio Settings: Current Wi-Fi channels, channel width (40MHz/80MHz/160MHz), and any active features causing instability (e.g., aggressive power saving, MLO/TWT compatibility issues).

5. Authorized Optimization & Before/After Verification:
- Present a numbered list of evidence-backed fixes across both my device (e.g., Preferred Band to 5GHz, disabling Wi-Fi power saving, faster DNS if benchmarked slower) and the router (e.g., separating 5GHz/2.4GHz, enforcing WPA2-AES/WPA3, switching to a clean channel, blocking any unwanted devices I flagged).
- Wait for my approval (let me approve all or select specific numbers), apply changes in safe reversible groups, and guide me to connect primary devices (laptop, phone) to 5GHz while isolating slower/IoT devices on 2.4GHz.
- Re-run Step 1 (Speed Test + Ping/Jitter/Packet Loss + Link Speed) and present a clear Before vs. After comparison (including new % of paid plan speed). If any change reduces stability, offer immediate rollback to the recorded baseline values.
