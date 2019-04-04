function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const { serviceWorker } = navigator;
    serviceWorker.register('/serviceWorker.js', { scope: '/' }).then((reg) => {
      if (reg.installing) {
        console.log('service worker installing');
      } else if (reg.waiting) {
        console.log('service worker waiting');
      }else if (reg.active) {
        console.log('Service worker active');
      }

    }).catch(function (error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }

}

export default registerServiceWorker;
