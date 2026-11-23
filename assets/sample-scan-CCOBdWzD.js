var e=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE nmaprun>
<?xml-stylesheet href="file:///usr/bin/../share/nmap/nmap.xsl" type="text/xsl"?>
<!-- Bundled sample scan: synthetic lab network (8 hosts). Not a scan of a real network. -->
<nmaprun scanner="nmap" args="nmap -sS -sV -sC -O --traceroute -oA ejemplo 192.168.56.0/24" start="1794218400" startstr="Mon Nov  9 10:00:00 2026" version="7.95" xmloutputversion="1.05">
<scaninfo type="syn" protocol="tcp" numservices="1000" services="1,3-4,6-7,9,13,17,19-26"/>
<verbose level="0"/>
<debugging level="0"/>
<hosthint><status state="up" reason="arp-response" reason_ttl="0"/>
<address addr="192.168.56.1" addrtype="ipv4"/>
<address addr="0A:00:27:00:00:01" addrtype="mac"/>
<hostnames>
</hostnames>
</hosthint>
<host starttime="1794218401" endtime="1794218460"><status state="up" reason="arp-response" reason_ttl="0"/>
<address addr="192.168.56.1" addrtype="ipv4"/>
<address addr="0A:00:27:00:00:01" addrtype="mac" vendor="TP-Link Technologies"/>
<hostnames>
<hostname name="gateway.lab" type="PTR"/>
</hostnames>
<ports><extraports state="closed" count="998">
<extrareasons reason="reset" count="998" proto="tcp" ports="1-52,54-79,81-65535"/>
</extraports>
<port protocol="tcp" portid="53"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="domain" product="dnsmasq" version="2.89" method="probed" conf="10"><cpe>cpe:/a:thekelleys:dnsmasq:2.89</cpe></service><script id="dns-nsid" output="&#xa;  bind.version: dnsmasq-2.89"><elem key="bind.version">dnsmasq-2.89</elem>
<\/script></port>
<port protocol="tcp" portid="80"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="http" product="lighttpd" version="1.4.69" method="probed" conf="10"><cpe>cpe:/a:lighttpd:lighttpd:1.4.69</cpe></service><script id="http-title" output="Router - Login"><elem key="title">Router - Login</elem>
<\/script><script id="http-server-header" output="lighttpd/1.4.69"><elem>lighttpd/1.4.69</elem>
<\/script></port>
</ports>
<os><portused state="open" proto="tcp" portid="53"/>
<osmatch name="OpenWrt 21.02 (Linux 5.4)" accuracy="100" line="68553">
<osclass type="WAP" vendor="Linux" osfamily="Linux" osgen="5.X" accuracy="100"><cpe>cpe:/o:linux:linux_kernel:5.4</cpe></osclass>
</osmatch>
</os>
<uptime seconds="1296000" lastboot="Sun Oct 25 10:00:00 2026"/>
<distance value="1"/>
<trace>
<hop ttl="1" ipaddr="192.168.56.1" rtt="0.41" host="gateway.lab"/>
</trace>
<times srtt="410" rttvar="120" to="100000"/>
</host>
<host starttime="1794218401" endtime="1794218460"><status state="up" reason="arp-response" reason_ttl="0"/>
<address addr="192.168.56.10" addrtype="ipv4"/>
<address addr="08:00:27:AA:10:10" addrtype="mac" vendor="Oracle VirtualBox virtual NIC"/>
<hostnames>
<hostname name="dc01.lab" type="PTR"/>
</hostnames>
<ports><extraports state="filtered" count="993">
<extrareasons reason="no-response" count="993" proto="tcp" ports="1-52"/>
</extraports>
<port protocol="tcp" portid="53"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="domain" product="Simple DNS Plus" ostype="Windows" method="probed" conf="10"><cpe>cpe:/o:microsoft:windows</cpe></service></port>
<port protocol="tcp" portid="88"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="kerberos-sec" product="Microsoft Windows Kerberos" extrainfo="server time: 2026-11-09 10:00:21Z" ostype="Windows" method="probed" conf="10"><cpe>cpe:/a:microsoft:kerberos</cpe><cpe>cpe:/o:microsoft:windows</cpe></service></port>
<port protocol="tcp" portid="135"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="msrpc" product="Microsoft Windows RPC" ostype="Windows" method="probed" conf="10"><cpe>cpe:/o:microsoft:windows</cpe></service></port>
<port protocol="tcp" portid="139"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="netbios-ssn" product="Microsoft Windows netbios-ssn" ostype="Windows" method="probed" conf="10"><cpe>cpe:/o:microsoft:windows</cpe></service></port>
<port protocol="tcp" portid="389"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="ldap" product="Microsoft Windows Active Directory LDAP" extrainfo="Domain: lab.local, Site: Default-First-Site-Name" hostname="DC01" ostype="Windows" method="probed" conf="10"><cpe>cpe:/o:microsoft:windows</cpe></service></port>
<port protocol="tcp" portid="445"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="microsoft-ds" method="table" conf="3"/></port>
<port protocol="tcp" portid="3389"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="ms-wbt-server" product="Microsoft Terminal Services" ostype="Windows" tunnel="ssl" method="probed" conf="10"><cpe>cpe:/o:microsoft:windows</cpe></service><script id="ssl-cert" output="Subject: commonName=dc01.lab.local&#xa;Not valid before: 2026-08-01T00:00:00&#xa;Not valid after:  2027-01-31T00:00:00"><table key="subject">
<elem key="commonName">dc01.lab.local</elem>
</table>
<table key="issuer">
<elem key="commonName">dc01.lab.local</elem>
</table>
<table key="validity">
<elem key="notBefore">2026-08-01T00:00:00</elem>
<elem key="notAfter">2027-01-31T00:00:00</elem>
</table>
<elem key="sig_algo">sha256WithRSAEncryption</elem>
<\/script></port>
</ports>
<os><portused state="open" proto="tcp" portid="53"/>
<osmatch name="Microsoft Windows Server 2019" accuracy="96" line="88521">
<osclass type="general purpose" vendor="Microsoft" osfamily="Windows" osgen="2019" accuracy="96"><cpe>cpe:/o:microsoft:windows_server_2019</cpe></osclass>
</osmatch>
<osmatch name="Microsoft Windows 10 1809" accuracy="93" line="71234">
<osclass type="general purpose" vendor="Microsoft" osfamily="Windows" osgen="10" accuracy="93"><cpe>cpe:/o:microsoft:windows_10:1809</cpe></osclass>
</osmatch>
</os>
<distance value="1"/>
<hostscript><script id="smb2-security-mode" output="&#xa;  3:1:1: &#xa;    Message signing enabled and required"><table key="3:1:1">
<elem>Message signing enabled and required</elem>
</table>
<\/script><script id="smb2-time" output="&#xa;  date: 2026-11-09T10:00:40&#xa;  start_date: N/A"><elem key="date">2026-11-09T10:00:40</elem>
<elem key="start_date">N/A</elem>
<\/script></hostscript><trace>
<hop ttl="1" ipaddr="192.168.56.10" rtt="0.52" host="dc01.lab"/>
</trace>
<times srtt="520" rttvar="150" to="100000"/>
</host>
<host starttime="1794218401" endtime="1794218460"><status state="up" reason="arp-response" reason_ttl="0"/>
<address addr="192.168.56.20" addrtype="ipv4"/>
<address addr="08:00:27:BB:20:20" addrtype="mac" vendor="Oracle VirtualBox virtual NIC"/>
<hostnames>
<hostname name="web01.lab" type="PTR"/>
</hostnames>
<ports><extraports state="closed" count="995">
<extrareasons reason="reset" count="995" proto="tcp" ports="1-21"/>
</extraports>
<port protocol="tcp" portid="22"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="ssh" product="OpenSSH" version="8.9p1 Ubuntu 3ubuntu0.10" extrainfo="Ubuntu Linux; protocol 2.0" ostype="Linux" method="probed" conf="10"><cpe>cpe:/a:openbsd:openssh:8.9p1</cpe><cpe>cpe:/o:linux:linux_kernel</cpe></service><script id="ssh-hostkey" output="&#xa;  256 3a:5b:1c:9d:11:22:33:44:55:66:77:88:99:aa:bb:cc (ECDSA)&#xa;  256 de:ad:be:ef:00:11:22:33:44:55:66:77:88:99:aa:bb (ED25519)"><table>
<elem key="type">ecdsa-sha2-nistp256</elem>
<elem key="bits">256</elem>
<elem key="fingerprint">3a5b1c9d112233445566778899aabbcc</elem>
</table>
<table>
<elem key="type">ssh-ed25519</elem>
<elem key="bits">256</elem>
<elem key="fingerprint">deadbeef00112233445566778899aabb</elem>
</table>
<\/script></port>
<port protocol="tcp" portid="80"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="http" product="Apache httpd" version="2.4.52" extrainfo="(Ubuntu)" method="probed" conf="10"><cpe>cpe:/a:apache:http_server:2.4.52</cpe></service><script id="http-title" output="Intranet &amp; Wiki"><elem key="title">Intranet &amp; Wiki</elem>
<\/script><script id="http-server-header" output="Apache/2.4.52 (Ubuntu)"><elem>Apache/2.4.52 (Ubuntu)</elem>
<\/script></port>
<port protocol="tcp" portid="443"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="http" product="nginx" version="1.18.0" extrainfo="Ubuntu" ostype="Linux" tunnel="ssl" method="probed" conf="10"><cpe>cpe:/a:igor_sysoev:nginx:1.18.0</cpe><cpe>cpe:/o:linux:linux_kernel</cpe></service><script id="ssl-cert" output="Subject: commonName=web01.lab&#xa;Not valid before: 2024-01-01T00:00:00&#xa;Not valid after:  2025-01-01T00:00:00"><table key="subject">
<elem key="commonName">web01.lab</elem>
</table>
<table key="issuer">
<elem key="commonName">web01.lab</elem>
</table>
<table key="validity">
<elem key="notBefore">2024-01-01T00:00:00</elem>
<elem key="notAfter">2025-01-01T00:00:00</elem>
</table>
<\/script></port>
<port protocol="tcp" portid="3306"><state state="filtered" reason="no-response" reason_ttl="0"/><service name="mysql" method="table" conf="3"/></port>
<port protocol="tcp" portid="8080"><state state="closed" reason="reset" reason_ttl="64"/><service name="http-proxy" method="table" conf="3"/></port>
</ports>
<os><portused state="open" proto="tcp" portid="22"/>
<portused state="closed" proto="tcp" portid="1"/>
<osmatch name="Linux 5.15" accuracy="98" line="67250">
<osclass type="general purpose" vendor="Linux" osfamily="Linux" osgen="5.X" accuracy="98"><cpe>cpe:/o:linux:linux_kernel:5.15</cpe></osclass>
</osmatch>
</os>
<uptime seconds="86400" lastboot="Sun Nov  8 10:00:00 2026"/>
<distance value="1"/>
<trace>
<hop ttl="1" ipaddr="192.168.56.20" rtt="0.38" host="web01.lab"/>
</trace>
<times srtt="380" rttvar="100" to="100000"/>
</host>
<host starttime="1794218401" endtime="1794218460"><status state="up" reason="arp-response" reason_ttl="0"/>
<address addr="192.168.56.30" addrtype="ipv4"/>
<address addr="00:1B:78:CC:30:30" addrtype="mac" vendor="Hewlett Packard"/>
<hostnames>
</hostnames>
<ports><extraports state="closed" count="996">
<extrareasons reason="reset" count="996" proto="tcp" ports="1-79"/>
</extraports>
<port protocol="tcp" portid="80"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="http" product="HP LaserJet printer http config" devicetype="printer" method="probed" conf="10"/><script id="http-title" output="HP LaserJet Pro M404dn"><elem key="title">HP LaserJet Pro M404dn</elem>
<\/script></port>
<port protocol="tcp" portid="515"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="printer" method="table" conf="3"/></port>
<port protocol="tcp" portid="631"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="ipp" product="HP LaserJet ippd" devicetype="printer" method="probed" conf="10"/></port>
<port protocol="tcp" portid="9100"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="jetdirect" method="table" conf="3"/></port>
</ports>
<os><portused state="open" proto="tcp" portid="80"/>
<osmatch name="HP LaserJet Pro M404 printer" accuracy="94" line="35120">
<osclass type="printer" vendor="HP" osfamily="embedded" accuracy="94"><cpe>cpe:/h:hp:laserjet_pro_m404</cpe></osclass>
</osmatch>
</os>
<distance value="1"/>
<trace>
<hop ttl="1" ipaddr="192.168.56.30" rtt="1.20"/>
</trace>
<times srtt="1200" rttvar="400" to="100000"/>
</host>
<host starttime="1794218401" endtime="1794218460"><status state="up" reason="arp-response" reason_ttl="0"/>
<address addr="192.168.56.40" addrtype="ipv4"/>
<address addr="08:00:27:DD:40:40" addrtype="mac" vendor="Oracle VirtualBox virtual NIC"/>
<hostnames>
</hostnames>
<ports><extraports state="filtered" count="1000">
<extrareasons reason="no-response" count="1000" proto="tcp" ports="1-65535"/>
</extraports>
</ports>
<distance value="1"/>
<times srtt="900" rttvar="300" to="100000"/>
</host>
<host starttime="1794218401" endtime="1794218460"><status state="up" reason="arp-response" reason_ttl="0"/>
<address addr="192.168.56.50" addrtype="ipv4"/>
<address addr="08:00:27:EE:50:50" addrtype="mac" vendor="Oracle VirtualBox virtual NIC"/>
<hostnames>
<hostname name="legacy-fs.lab" type="PTR"/>
</hostnames>
<ports><extraports state="closed" count="996">
<extrareasons reason="reset" count="996" proto="tcp" ports="1-20"/>
</extraports>
<port protocol="tcp" portid="21"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="ftp" product="Microsoft ftpd" ostype="Windows" method="probed" conf="10"><cpe>cpe:/a:microsoft:ftp_service</cpe><cpe>cpe:/o:microsoft:windows</cpe></service><script id="ftp-anon" output="Anonymous FTP login allowed (FTP code 230)&#xa;01-15-25  09:12AM       &lt;DIR&gt;          backups&#xa;03-02-25  04:40PM                 1824 notas.txt"/></port>
<port protocol="tcp" portid="135"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="msrpc" product="Microsoft Windows RPC" ostype="Windows" method="probed" conf="10"><cpe>cpe:/o:microsoft:windows</cpe></service></port>
<port protocol="tcp" portid="139"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="netbios-ssn" product="Microsoft Windows netbios-ssn" ostype="Windows" method="probed" conf="10"><cpe>cpe:/o:microsoft:windows</cpe></service></port>
<port protocol="tcp" portid="445"><state state="open" reason="syn-ack" reason_ttl="128"/><service name="microsoft-ds" product="Microsoft Windows 7 - 10 microsoft-ds" extrainfo="workgroup: LAB" hostname="LEGACY-FS" ostype="Windows" method="probed" conf="10"><cpe>cpe:/o:microsoft:windows</cpe></service></port>
</ports>
<os><portused state="open" proto="tcp" portid="21"/>
<osmatch name="Microsoft Windows 7 SP1" accuracy="97" line="80112">
<osclass type="general purpose" vendor="Microsoft" osfamily="Windows" osgen="7" accuracy="97"><cpe>cpe:/o:microsoft:windows_7::sp1</cpe></osclass>
</osmatch>
</os>
<distance value="1"/>
<hostscript><script id="smb-vuln-ms17-010" output="&#xa;  VULNERABLE:&#xa;  Remote Code Execution vulnerability in Microsoft SMBv1 servers (ms17-010)&#xa;    State: VULNERABLE&#xa;    IDs:  CVE:CVE-2017-0143&#xa;    Risk factor: HIGH&#xa;    Disclosure date: 2017-03-14"><table key="CVE-2017-0143">
<elem key="title">Remote Code Execution vulnerability in Microsoft SMBv1 servers (ms17-010)</elem>
<elem key="state">VULNERABLE</elem>
<table key="ids">
<elem>CVE:CVE-2017-0143</elem>
</table>
</table>
<\/script><script id="smb-os-discovery" output="&#xa;  OS: Windows 7 Professional 7601 Service Pack 1&#xa;  Computer name: LEGACY-FS&#xa;  Workgroup: LAB"><elem key="os">Windows 7 Professional 7601 Service Pack 1</elem>
<elem key="server">LEGACY-FS</elem>
<elem key="workgroup">LAB</elem>
<\/script></hostscript><trace>
<hop ttl="1" ipaddr="192.168.56.50" rtt="0.61" host="legacy-fs.lab"/>
</trace>
<times srtt="610" rttvar="200" to="100000"/>
</host>
<host starttime="1794218401" endtime="1794218460"><status state="up" reason="arp-response" reason_ttl="0"/>
<address addr="192.168.56.70" addrtype="ipv4"/>
<address addr="08:00:27:FF:70:70" addrtype="mac" vendor="Oracle VirtualBox virtual NIC"/>
<hostnames>
<hostname name="db01.lab" type="PTR"/>
</hostnames>
<ports><extraports state="closed" count="996">
<extrareasons reason="reset" count="996" proto="tcp" ports="1-21"/>
</extraports>
<port protocol="tcp" portid="22"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="ssh" product="OpenSSH" version="8.2p1 Ubuntu 4ubuntu0.11" extrainfo="Ubuntu Linux; protocol 2.0" ostype="Linux" method="probed" conf="10"><cpe>cpe:/a:openbsd:openssh:8.2p1</cpe><cpe>cpe:/o:linux:linux_kernel</cpe></service></port>
<port protocol="tcp" portid="3306"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="mysql" product="MySQL" version="8.0.33-0ubuntu0.20.04.2" method="probed" conf="10"><cpe>cpe:/a:mysql:mysql:8.0.33-0ubuntu0.20.04.2</cpe></service><script id="mysql-info" output="&#xa;  Protocol: 10&#xa;  Version: 8.0.33-0ubuntu0.20.04.2&#xa;  Thread ID: 41&#xa;  Status: Autocommit"><elem key="Protocol">10</elem>
<elem key="Version">8.0.33-0ubuntu0.20.04.2</elem>
<\/script></port>
<port protocol="tcp" portid="5432"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="postgresql" product="PostgreSQL DB" version="12.9 - 12.16" method="probed" conf="10"><cpe>cpe:/a:postgresql:postgresql:12</cpe></service></port>
<port protocol="tcp" portid="6379"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="redis" product="Redis key-value store" version="5.0.7" method="probed" conf="10"><cpe>cpe:/a:redislabs:redis:5.0.7</cpe></service></port>
</ports>
<os><portused state="open" proto="tcp" portid="22"/>
<osmatch name="Linux 5.4" accuracy="98" line="67001">
<osclass type="general purpose" vendor="Linux" osfamily="Linux" osgen="5.X" accuracy="98"><cpe>cpe:/o:linux:linux_kernel:5.4</cpe></osclass>
</osmatch>
</os>
<uptime seconds="2592000" lastboot="Sat Oct 10 10:00:00 2026"/>
<distance value="1"/>
<trace>
<hop ttl="1" ipaddr="192.168.56.70" rtt="0.44" host="db01.lab"/>
</trace>
<times srtt="440" rttvar="110" to="100000"/>
</host>
<host starttime="1794218401" endtime="1794218460"><status state="up" reason="arp-response" reason_ttl="0"/>
<address addr="192.168.56.80" addrtype="ipv4"/>
<address addr="44:19:B6:80:80:80" addrtype="mac" vendor="Hangzhou Hikvision Digital Technology"/>
<hostnames>
<hostname name="cam-entrada.lab" type="PTR"/>
</hostnames>
<ports><extraports state="closed" count="997">
<extrareasons reason="reset" count="997" proto="tcp" ports="1-22"/>
</extraports>
<port protocol="tcp" portid="23"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="telnet" product="BusyBox telnetd" method="probed" conf="10"><cpe>cpe:/a:busybox:busybox</cpe></service></port>
<port protocol="tcp" portid="80"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="http" product="Hikvision Network Video Recorder http admin" devicetype="webcam" method="probed" conf="10"/><script id="http-title" output="Site doesn&apos;t have a title (text/html)."><\/script></port>
<port protocol="tcp" portid="554"><state state="open" reason="syn-ack" reason_ttl="64"/><service name="rtsp" product="Hikvision 7513 POE IP camera rtspd" devicetype="webcam" method="probed" conf="10"/></port>
</ports>
<os><portused state="open" proto="tcp" portid="23"/>
<osmatch name="Linux 3.10 (embedded)" accuracy="92" line="65010">
<osclass type="webcam" vendor="Linux" osfamily="Linux" osgen="3.X" accuracy="92"><cpe>cpe:/o:linux:linux_kernel:3.10</cpe></osclass>
</osmatch>
</os>
<distance value="1"/>
<trace>
<hop ttl="1" ipaddr="192.168.56.80" rtt="2.10" host="cam-entrada.lab"/>
</trace>
<times srtt="2100" rttvar="700" to="100000"/>
</host>
<runstats><finished time="1794218460" timestr="Mon Nov  9 10:01:00 2026" summary="Nmap done at Mon Nov  9 10:01:00 2026; 256 IP addresses (8 hosts up) scanned in 60.25 seconds" elapsed="60.25" exit="success"/><hosts up="8" down="248" total="256"/>
</runstats>
</nmaprun>
`;export{e as default};