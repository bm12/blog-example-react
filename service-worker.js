const CACHE_NAME = 'v3.1.25';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([
      'https://picsum.photos',
    ])),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map((cacheName) => {
        if (CACHE_NAME !== cacheName) {
          console.log('Deleting out of date cache:', cacheName);
          return caches.delete(cacheName);
        }
      }),
    )),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) console.log('Response from cache', event.request);
        else console.log('not cached ', event.request);

        return response || fetch(event.request)
          .then((fetchResponse) => {
            const fetchResponseClone = fetchResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                // if (request.method === 'GET' && request.url.indexOf('__webpack_hmr') === -1) {
                cache.put(event.request, fetchResponseClone);
                // }
              });

            return fetchResponse;
          });
      }),
  );
});
