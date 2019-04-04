const CACHE_NAME = 'v3.1.34';

self.addEventListener('install', function onInstall(event) {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([
      '/static/media/Lato-Bold.44dfe8cc.ttf',
      '/static/media/Lato-Light.5b761f2d.ttf',
      '/static/media/Lato-Regular.7f690e50.ttf',
    ])),
  );
});

self.addEventListener('activate', function onActivate(event) {
  self.clients.claim();

  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName !== CACHE_NAME) {
          console.log('Deleting out of date cache:', cacheName);
          return caches.delete(cacheName);
        }
      }),
    )),
  );
});

self.addEventListener('fetch', function onFetch(event) {
  const { request } = event;

  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          fetchAndCacheResource(request.clone());
          return response;
        }

        return fetch(request)
          .then((fetchResponse) => {
            const fetchResponseClone = fetchResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, fetchResponseClone);
              });

            return fetchResponse;
          });
      }),
  );
});

async function fetchAndCacheResource(request) {
  const response = await fetch(request);

  if (response.status >= 400) return;

  const cache = await caches.open(CACHE_NAME);

  cache.put(request, response);
}
