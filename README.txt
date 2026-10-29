SOCK TD PWA — GITHUB PAGES INSTALLATION

1. Unzip this package.
2. Upload socktd.html, manifest.webmanifest, sw.js, and the entire icons folder to the SAME folder in your GitHub Pages repository (SOCK.games root if your URL is /SOCK.games/socktd.html).
3. Commit the changes and wait for GitHub Pages to deploy.
4. Open https://socktdev.github.io/SOCK.games/socktd.html and refresh.
5. Android Chrome/Edge: browser menu > Install app / Add to Home screen.
   iPhone Safari: Share > Add to Home Screen.
   Desktop Chrome/Edge: Install icon in address bar or browser menu.

NOTE: This PWA can open cached game files offline after first successful online load. PeerJS, Metered TURN, and other external online services need internet. External CDN scripts may not be available offline.

Updating: Replace the files on GitHub Pages. The service worker uses network-first caching, so fresh pages are preferred when online.
