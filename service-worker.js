self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', e => {
  // 簡易的にネットワーク対応
});
