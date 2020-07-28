'use strict';

const cacheName = 'v1';

const cacheAssets = [
  'index.html',
  '/css/style-min.css',
  '/js/aria-role-min.js',
  '/js/header-fix-min.js',
  '/js/menu-min.js',
  '/js/no-js-min.js',
  '/js/slider-min.js'
];

self.addEventListener('install', function (evt) {
  console.log('Service Worker installed');
  evt.waitUntil(
    caches
    .open(cacheName)
    .then(function (cache) {
      console.log('Service Worker: Caching Files');
      cache.addAll(cacheAssets);
    })
    .then(function () {
      return self.skipWaiting();
    })
  );
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
    fetch(evt.request).catch(function () {
      return caches.match(evt.request);
    })
  );
});
