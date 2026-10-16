/* Địa chỉ cũ của Mắt Biển AI: tự gỡ bản cài cũ (xoá bộ nhớ đệm, huỷ đăng ký) để mở trang chuyển hướng sang địa chỉ mới. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const ds = await self.clients.matchAll({ type: 'window' });
    ds.forEach((c) => c.navigate('https://vonguyenbao.github.io/mat-bien-ai/'));
  })());
});
