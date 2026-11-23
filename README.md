# vnmap

**See what your nmap scan found.** vnmap is a web application that helps you build nmap
commands and turns their output into a map of the network, a prioritized list of what stands out
and the next command to run.

It runs entirely in your browser: scan files never leave your machine, and the application never
scans anything itself.

[Live demo](https://apiraces-hiberuscom.github.io/vnmap/) ·
[Download](https://github.com/apiraces-hiberuscom/vnmap/releases/latest) ·
[Español](README.es.md)

## What this repository is

This repository publishes vnmap as it runs: the compiled application, minified but not
obfuscated, and a portable copy for computers without internet access. The JavaScript in the
[`gh-pages`](https://github.com/apiraces-hiberuscom/vnmap/tree/gh-pages) branch and in each
release is exactly what your browser executes. The source code is kept in a separate repository.

## Three ways to use it

| Way               | Best for                                                    | Needs                                    |
| ----------------- | ----------------------------------------------------------- | ---------------------------------------- |
| **Online demo**   | Trying it, everyday use with internet                       | A browser                                |
| **Installed app** | Opening it like any other app, also offline                 | Chrome or Edge                           |
| **Portable copy** | A computer with no internet, such as a test machine on site | A browser (and `python3` on Linux/macOS) |

### Online demo

Open <https://apiraces-hiberuscom.github.io/vnmap/> and click **Try the sample scan**, or drop
your own nmap output (`-oX`, `-oG` or `-oN`) into the page.

### Install it as an app

In Chrome or Edge, open the demo (or a running portable copy) and choose **Use offline ›
Install** in the sidebar footer, or the install icon in the address bar. The installed app opens
in its own window and works without a connection. When a new version is published, it tells you
and updates only when you accept.

Firefox on the desktop cannot install web apps: use the portable copy. In Safari on macOS, use
**File › Add to Dock**.

### Portable copy

Download `vnmap-<version>-portable.zip` and `SHA256SUMS` from the
[latest release](https://github.com/apiraces-hiberuscom/vnmap/releases/latest).

**Windows**

1. Unblock the ZIP, since it came from the internet: right-click it › **Properties** › tick
   **Unblock** › **OK**. Or, in PowerShell:
   ```powershell
   Unblock-File .\vnmap-*-portable.zip
   ```
2. Extract it and open the `vnmap-<version>` folder.
3. Double-click `vnmap.cmd`.

The launcher uses the PowerShell that comes with Windows. It needs no administrator rights and
does not change the system execution policy: it only bypasses it for that one process.

**Linux and macOS**

```bash
unzip vnmap-*-portable.zip
./vnmap-*/vnmap.sh
```

It needs `python3`, which most systems have. Without it, the launcher explains how to serve the
`app/` folder with any static web server.

**What the launcher does**

- Serves the `app/` folder at <http://127.0.0.1:47821/>, on that computer only: it is not
  reachable from the network.
- Opens your default browser there, and stops with `Ctrl+C` or by closing its window.
- Answers only `GET` and `HEAD` for files inside `app/`: no directory listing, nothing outside.
- Downloads nothing, writes nothing outside its folder and needs no administrator rights.

If port 47821 is in use, it stops and says so. `--port <n>` chooses another one, but each address
has its own project store (see below), so keep using the same port.

## Verify the download

Compare the SHA-256 of the ZIP with the one in `SHA256SUMS`:

```powershell
# Windows (PowerShell): the hash must match the one in SHA256SUMS
Get-FileHash .\vnmap-*-portable.zip -Algorithm SHA256
```

```bash
sha256sum -c SHA256SUMS         # Linux
shasum -a 256 -c SHA256SUMS     # macOS
```

## Moving projects between copies

Projects are saved in the browser, and browsers keep them separately for each address. The demo
and the portable copy (and the portable copy on another port) therefore do not see each other's
projects. To move a project, open **Project management › Portability** and use **Export
project** in one copy and **Import project** in the other.

## Privacy

- **No network requests.** Everything is parsed and stored in your browser. A strict Content
  Security Policy (`connect-src 'none'`) enforces it: the page cannot send your data anywhere.
- **Scan content is always shown as text**, never interpreted as HTML.
- **It never runs nmap.** It only writes commands and reads the files you give it.
- The only links that leave the application (the download and the optional support link) are
  ordinary links you choose to follow.

## Responsible use

Scan only systems you own or are explicitly authorized to test. Scanning networks without
permission can be illegal.

vnmap is an independent project. It is not affiliated with or endorsed by the Nmap Project.

## Problems and suggestions

Open an [issue](https://github.com/apiraces-hiberuscom/vnmap/issues). Please do not attach real
scan results: they describe someone's network.

## License

Created by **Alejandro Piraces Perez**. Released under the [MIT License](LICENSE).
