var defaultCacheName = 'red2fred2-todo-1',
    cacheName = 'red2fred2-todo-'

self.addEventListener('install', function(event) {
  
  var version = 1
  caches.keys().then(function(keyList) {
    keyList.forEach(function(item) {
      var itemVersion = parseInt(item.split('-')[2])
      caches.delete(cacheName + itemVersion)
      if(itemVersion > version) version = itemVersion
    })
  })
  .then(function() {
   
    //if no cache exists
    if(version === undefined) version = 0
    //if one does
    else {
      cacheName += version + 1
      console.log(cacheName)
    }
  })
  .then(function() {
    event.waitUntil(caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(['/'])
      })
    )
  })
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) return response
      else return fetch(event.request)
    })
  )
})
