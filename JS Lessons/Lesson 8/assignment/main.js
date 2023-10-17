(async () => {
  if ('serviceWorker' in navigator) {
    try {
      const worker = await navigator.serviceWorker.register('./sw.js', {
        scope: '/',
      });
      console.log('Service Worker Registered');
    } catch (e) {
      console.log(e.message);
    }
  }
})();
