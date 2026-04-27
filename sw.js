// Nombre del cache (opcional para control de versiones)
const cacheName = 'marcela-v1';

// Evento de instalación
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

// Evento de activación
self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activado');
});

// Evento Fetch (necesario para que Chrome permita la instalación)
self.addEventListener('fetch', (e) => {
  // Por ahora, solo deja que las peticiones pasen normalmente
  e.respondWith(fetch(e.request));
});