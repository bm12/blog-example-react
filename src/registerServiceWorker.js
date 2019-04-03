function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const { serviceWorker } = navigator;
    serviceWorker.register('/service-worker.js', { scope: '/' }).then((reg) => {

      if (reg.active) {
        console.log('Service worker active');
      } else {
        // serviceWorker.oncontrollerchange = function() {
        //   switch (serviceWorker.controller.state) {
        //     case 'activated': {
        //       serviceWorker.controller.postMessage()
        //       break;
        //     }

        //     default: break;
        //   }
        // }
      }

    }).catch(function (error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });

    serviceWorker.ready.then((reg) => {
      console.log('worker ready', reg);
    });
  }

}

export default registerServiceWorker;
