/**
 * vnmap service worker (VN-DIST-002, docs/specs/distribution.md). Written by hand, with no
 * dependencies. The build (vite.config.ts, `pwaPlugin`) replaces the two placeholders below
 * and writes the result as sw.js next to index.html.
 *
 * - Install: stores the exact list of files of the build in a cache named after the version.
 *   It does not take over by itself: a new version waits until the page asks for it
 *   (`skip-waiting`), after the user accepted the update and the project was saved.
 * - Fetch: answers GET requests of its own origin from that cache first, and leaves any other
 *   origin alone. Navigations get index.html. Nothing else is stored: scans and projects stay
 *   in IndexedDB, and files read by the user never go through here.
 * - Activate: deletes the caches of previous versions.
 */

/* global self, caches, URL, Request, fetch, __VNMAP_FILES__ */
const CACHE = "vnmap-0.18.0-d60ca043dc91";
/** Paths relative to the scope of the worker, which is the folder of index.html. */
const FILES = ["assets/MapView-BJDgLO8d.js","assets/cveBase.worker-LPKyUL04.js","assets/index-BXsG5M-W.js","assets/index-sTIbEv46.css","assets/parse.worker-BQ-gM-6I.js","assets/sample-scan-CCOBdWzD.js","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-192.png","icons/icon-maskable-512.png","index.html","manifest.webmanifest"];
const PREFIX = 'vnmap-';

const scopeUrl = (path) => new URL(path, self.registration.scope).href;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      // `reload` skips the HTTP cache, so the files stored are exactly those of this version.
      .then((cache) =>
        cache.addAll(FILES.map((path) => new Request(scopeUrl(path), { cache: 'reload' }))),
      ),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter((name) => name.startsWith(PREFIX) && name !== CACHE)
            .map((name) => caches.delete(name)),
        ),
      )
      // The first version takes the open pages at once: nothing is reloaded for it.
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'skip-waiting') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (!url.href.startsWith(self.registration.scope)) return;

  const key = request.mode === 'navigate' ? scopeUrl('index.html') : url.origin + url.pathname;
  event.respondWith(
    caches
      .open(CACHE)
      .then((cache) => cache.match(key))
      .then((cached) => cached || fetch(request)),
  );
});
