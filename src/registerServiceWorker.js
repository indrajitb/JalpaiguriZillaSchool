export default () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(function () {


          // setTimeout(() => {
          //   if ('Notification' in window && 'serviceWorker' in navigator) {
          //     askForNotificationPermission();

          //   }

          // }, 10000);
          
          })
          .catch(function(err) {
            console.log(err);
          });
      }
}
