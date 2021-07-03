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
  
  //   workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

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
