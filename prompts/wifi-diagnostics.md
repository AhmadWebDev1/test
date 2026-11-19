I am experiencing slow speeds and intermittent drops on my Wi-Fi network. Act as a network engineer and help me diagnose and fix the issue step by step.

Execution Rules:
- Run diagnostic commands directly on my machine. Do NOT move to the next phase until you clearly present the current phase's results and get my approval.
- When router admin access is needed, explicitly ask me for the router password (and username if required). Never save or log credentials to any file.
- Before applying any router setting change that may restart Wi-Fi or drop the connection, present the proposed changes and wait for my confirmation.

1. Connection Check & Fault Isolation (LAN vs. WAN):
- Measure latency (Ping), jitter, and packet loss to both the Default Gateway (router) and an external server (1.1.1.1) using 20 packets each.
- Test DNS resolution speed and stability.
- Inspect the current Wi-Fi connection on this machine: active band (2.4GHz vs. 5GHz), signal strength (RSSI/dBm), link speed, and encryption type.

2. Local Network & Interference Analysis:
- Identify the router's IP address and determine its model/vendor (e.g., FRITZ!Box, TP-Link, etc.).
- Scan neighboring Wi-Fi networks to identify congested radio channels and recommend the cleanest available channel.
- Scan devices currently connected to the local network to spot IoT devices or background bandwidth hogs, and check latency to wireless clients.

3. Router Login & Configuration Audit:
- Open the router's admin interface (via browser automation or available control interface) and ask me for login credentials.
- Once logged in, audit and report the current state of:
  * Smart Connect / Band Steering: Is it enabled and forcing devices onto the slower 2.4GHz band?
  * SSID Separation: Is the 5GHz network separated with its own SSID from 2.4GHz?
  * Encryption: Is it set to WPA2-AES or WPA3 (and not legacy TKIP)?
  * Radio Settings: Current Wi-Fi channels and channel width (e.g., 80MHz/160MHz).

4. Optimization & Final Verification:
- After my approval, apply the optimal settings on the router (separate 5GHz and 2.4GHz SSIDs, enforce WPA2-AES/WPA3, and set optimal channels/channel width).
- Guide me to connect my primary devices (laptop, phone) to the 5GHz network and isolate slower/IoT devices on 2.4GHz.
- Re-run Step 1 tests and compare before-and-after results (ping, jitter, packet loss, and link speed) to confirm improvement.
