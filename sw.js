// Service Worker mínimo do RUMO.
// PROPOSITALMENTE não armazena nada em cache — apenas repassa as requisições
// direto para a rede (fetch normal). O único objetivo dele aqui é satisfazer
// o critério de "app instalável" de algumas versões do Chrome/Android, sem
// correr o risco de alguém abrir uma versão desatualizada do sistema.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
