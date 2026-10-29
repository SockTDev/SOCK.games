// Sock TD PWA: network-first for game updates, offline fallback for app shell.
const CACHE = 'sock-td-pwa-v1';
const SHELL = ['./socktd.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin)return;
 if(!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 event.respondWith(fetch(req).then(response=>{
   if(response.ok && response.type==='basic'){
     const copy=response.clone();
     event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)));
   }
   return response;
 }).catch(async()=>await caches.match(req,{ignoreSearch:true}) || (req.mode==='navigate'?await caches.match('./socktd.html'):Response.error())));
});
