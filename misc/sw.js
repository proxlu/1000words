// version: 0.1
// alterar versao para atualizar no dispositivo do usuario

var CACHE_NAME = 'arbsoft-cache-v1';
var urlsToCache = [
	'/favicon.ico',
];

self.addEventListener('install', function(event) {
	self.skipWaiting();
	
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				//console.log('Opened cache');
				return cache.addAll(urlsToCache);
			})
	);
});

self.addEventListener('activate', function(event) {
	var cacheWhitelist = ['arbsoft-cache-v1'];

	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

self.addEventListener('fetch', function(event) {
	var request = event.request;
	
	if (request.method === 'GET') {
		/*event.respondWith(
			caches.match(event.request)
				.then(function(response) {
					// Cache hit - return response
					if (response) {
						return response;
					}

					return fetch(event.request);

					// Faz cache de todas as pÃ¡ginas visitadas
					// Para utilizar comentar cÃ³digo acima "return fetch(event.request);"

					// IMPORTANT: Clone the request. A request is a stream and
					// can only be consumed once. Since we are consuming this
					// once by cache and once by the browser for fetch, we need
					// to clone the response.
					var fetchRequest = event.request.clone();

					return fetch(fetchRequest).then(
						function(response) {
							// Check if we received a valid response
							if(!response || response.status !== 200 || response.type !== 'basic') {
								return response;
							}

							// IMPORTANT: Clone the response. A response is a stream
							// and because we want the browser to consume the response
							// as well as the cache consuming the response, we need
							// to clone it so we have two streams.
							var responseToCache = response.clone();

							caches.open(CACHE_NAME)
								.then(function(cache) {
									cache.put(event.request, responseToCache);
								});

							return response;
						}
					);
				})
		);*/
	}
});
