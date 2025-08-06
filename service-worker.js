const CACHE_NAME = 'todo-pwa-v1';  
const urlsToCache = [
    './index.html',
    './style.css',
    './manifest.json',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request) 
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});
