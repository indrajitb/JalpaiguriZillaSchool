importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js"
  );
  
  // if (workbox) {
  //   workbox.setConfig({
  //     debug: true,
  //   });
  
  //   const { registerRoute } = workbox.routing;
  //   const { StaleWhileRevalidate } = workbox.strategies;
  //   const { ExpirationPlugin } = workbox.expiration;
  
  //   registerRoute(
  //     /.*(?:googleapis|gstatic)\.com.*$/,
  //     new StaleWhileRevalidate({
  //       cacheName: "google-assets",
  //       plugins: [
  //         new ExpirationPlugin({
  //           maxEntries: 10,
  //           maxAgeSeconds: 60 * 60 * 24 * 7, // keep assets for 7 days
  //         }),
  //       ],
  //     })
  //   );

  //     // cache JavaScript bundles from script tags in the index.html
  //   registerRoute(
  //       ({ request }) =>
  //       request.destination === "script" || request.destination === "style",
  //       new StaleWhileRevalidate({
  //       cacheName: "static-resources",
  //       })
  //   );

  //   // intercept routes from our app/domain and return cached response if exists, otherwise return appshell
  // registerRoute(
  //   (args) => {
  //     const hostname = args.url.hostname;

  //     const isComingFromOurDomain =
  //       hostname.includes("localhost") || hostname.includes("jalpaigurizillaschool.in");

  //     return isComingFromOurDomain;
  //   },
  //   async (args) => {
  //     const requestedPathname = args.url.pathname;

  //     const cachedResponse = await caches.match(
  //       workbox.precaching.getCacheKeyForURL(requestedPathname) // cache things like other assets from our domain (logo.svg etc)
  //     );

  //     if (cachedResponse) {
  //       return cachedResponse;
  //     } else {
  //       const appShell = workbox.precaching.getCacheKeyForURL("/index.html");
  //       return await caches.match(appShell);
  //     }
  //   }
  // );
  
  //   workbox.precaching.precacheAndRoute([{"revision":"86e2376f36b4b36ac73964935cd55d6d","url":"assets/icon/app-icon-144x144.png"},{"revision":"d17d79b56453584b0ef1da48f651c3d2","url":"assets/icon/app-icon-192x192.png"},{"revision":"bbf4e0dea29edfabf9a3cd8e3fc23f1f","url":"assets/icon/app-icon-256x256.png"},{"revision":"fc335f13bcebcbdf9f11bd7831ba6d36","url":"assets/icon/app-icon-384x384.png"},{"revision":"882815245088f9e7b6e64949bfc84c30","url":"assets/icon/app-icon-48x48.png"},{"revision":"fab11c03360ff2a86b0a2914fa609c7d","url":"assets/icon/app-icon-512x512.png"},{"revision":"5deddf5f21e64f1cd25a9e901aac7ca1","url":"assets/icon/app-icon-64x64.png"},{"revision":"820b1ceddc4b43d4d09e570a3d66351b","url":"assets/icon/favicon.png"},{"revision":"820b1ceddc4b43d4d09e570a3d66351b","url":"assets/icon/icon.png"},{"revision":"820b1ceddc4b43d4d09e570a3d66351b","url":"assets/icon/logo.png"},{"revision":"820b1ceddc4b43d4d09e570a3d66351b","url":"assets/logo.png"},{"revision":"3aef30b30af9cc0b38688f0940f162a6","url":"assets/placeholder.png"},{"revision":"e535ce83da20a4b7719ca3d45195ebd5","url":"assets/shapes.svg"},{"revision":"a4c6ef4db879521a4200dea6b7e69573","url":"google1174466e063c6161.html"},{"revision":"de89e834f712f77363ed9a41a2214465","url":"index.html"},{"revision":"51402968884fa15f143a8dfc0d41a8cd","url":"manifest.json"},{"revision":"57f0f86ca1c103ce0da48a942d6b990d","url":"workbox-97ee8b27.js"}]);

  // } else {
  //   console.log("workbox failed.");
  // }

  self.addEventListener("beforeinstallprompt", (event) => {
    event.prompt();
  
    event.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "dismissed") {
        console.log("user declined install to home screen.");
      } else {
        console.log("user accepted install to home screen.");
      }
    });
    return false;
  });


// self.addEventListener('activate', function (event) {
//     console.log('[Service Worker] Activating Service Worker ....', event);
//     event.waitUntil(
//       caches.keys()
//         .then(function (keyList) {
//           return Promise.all(keyList.map(function (key) {
//             // if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
//               console.log('[Service Worker] Removing old cache.', key);
//               return caches.delete(key);
//             // }
//           }));
//         })
//     );
//     return self.clients.claim();
//   });


//Listen for push notifications
self.addEventListener('push', function(event) {
  console.log('Push Notification received', event);

  var data = {title: 'New!', content: 'Something new happened!', openUrl: '/', tag: 'notification'};

  if (event.data) {
    data = JSON.parse(event.data.text());
  }

  var options = {
    body: data.content,
    icon: '/assets/icon/logo.png',
    badge: '/assets/icon/logo.png',
    tag: data.tag,
    data: {
      url: data.openUrl
    }
  };

  //Wait until the notification is shown
  event.waitUntil(
    //self.registration is the browser part of the Service Worker. The main part of the SW
    //is running in the background.
    self.registration.showNotification(data.title, options)
  );
});

//Respond to notification click event
self.addEventListener('notificationclick', function(event) {
  var notification = event.notification;
  var action = event.action;

  console.log(notification);

  if (action === 'confirm') {
    console.log('Confirm was chosen');
    notification.close();
  } else {
    console.log(action);
    event.waitUntil(
      clients.matchAll()
        .then(function(clis) {
          var client = clis.find(function(c) {
            return c.visibilityState === 'visible';
          });

          //The page/window is already open
          if (client !== undefined) {
            client.navigate(notification.data.url);
            client.focus();
          } else {
            //The page/window is nt open, so open a new one
            clients.openWindow(notification.data.url);
          }
          notification.close();
        })
    );
  }
});

self.addEventListener('notificationclose', function(event) {
  console.log('Notification was closed', event);
});
