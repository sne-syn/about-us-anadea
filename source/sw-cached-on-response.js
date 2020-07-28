'use strict';

const cacheName = 'v2';

self.addEventListener('install', function () {
  console.log('Service Worker installed');
});

self.addEventListener('activate', function (evt) {
  console.log('Service Worker activated');
  // remove unwanted caches
  evt.waitUntil(
    caches.keys()
    .then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cache) {
          if (cache !== cacheName) {
            console.log('Service Worker: clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', function (evt) {
  console.log('Service Worker: Fetching');
  evt.respondWith(
    fetch(evt.request)
    .then(function (res) {
      // make clone of response
      const resClone = res.clone();
      // opne cache
      caches
        .open(cacheName)
        .then(function (cache) {
          // add response to cache
          cache.put(evt.request, resClone);
        });
      return res;
    }).catch(function (err) {
      return caches.match(evt.request);
    })
    .then(function (res) {
      return res;
    })
  );
});
