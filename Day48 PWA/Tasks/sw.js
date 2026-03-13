// const filesToCache = ['index.html', 'page1.html', 'CSS/style.css']

const filesToCache = [
    './index.html',
    './page1.html',
    './Pages/page2.html',
    './offline.html',
    './wrong-route.html',
    './CSS/style.css',
    './CSS/page1.css',
    './CSS/page2.css',
    './JS/main.js',
    './JS/page1.js',
    './JS/page2.js'
]

const staticCacheDB = 'Pages';

self.addEventListener('install', event => {
    console.log("service worker installing", event)
    self.skipWaiting()
    event.waitUntil(
        caches.open(staticCacheDB)
        .then(cache => {
            return cache.addAll(filesToCache)
        })
        .catch(err => {
            console.log(err)
        })
    )
})

self.addEventListener('activate', event => {
    console.log("service worker activating", event)

    event.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(keys =>
                Promise.all(keys
                    .filter(key => key !== staticCacheDB)
                    .map(key => caches.delete(key))
                )
            )
        ])
    )
})

self.addEventListener('fetch', event => {
    console.log('fetch request', event.request.url)

    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(async networkResponse => {
                    if (networkResponse.status === 404) {
                        const cachedWrongUrl = await caches.match('./wrong-route.html');
                        if (cachedWrongUrl) return cachedWrongUrl;

                        return new Response(
                            '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Wrong URL</title><h1>Wrong url</h1><p><a href="/index.html">Go to Home Page</a></p>',
                            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
                        );
                    }

                    const responseClone = networkResponse.clone();
                    const cache = await caches.open(staticCacheDB);
                    cache.put(event.request, responseClone);
                    return networkResponse;
                })
                .catch(async () => {
                    const cachedPage = await caches.match(event.request, { ignoreSearch: true });
                    if (cachedPage) return cachedPage;

                    const cachedOffline = await caches.match('./offline.html');
                    if (cachedOffline) return cachedOffline;

                    return new Response(
                        '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><h1>You are working offline</h1><p><a href="/index.html">Go to Home Page</a></p>',
                        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
                    );
                })
        )
        return;
    }

    if (event.request.method !== 'GET') {
        event.respondWith(fetch(event.request))
        return;
    }

    const url = new URL(event.request.url);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        return;
    }

    if (url.origin !== self.location.origin) {
        event.respondWith(fetch(event.request))
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log('found request in cache DB')
                    return response
                }
                console.log('connect to server', event.request.url)
                return fetch(event.request).then(async networkResponse => {
                    if (!networkResponse || !networkResponse.ok) return networkResponse;
                    const responseClone = networkResponse.clone();
                    const cache = await caches.open(staticCacheDB);
                    cache.put(event.request, responseClone);
                    return networkResponse;
                })
            })
            .catch(err => {
                console.log(err);
                return Response.error();
            })
    )
})