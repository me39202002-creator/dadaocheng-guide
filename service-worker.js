const CACHE_NAME = 'dadaocheng-guide-v1';

// 這裡列出所有需要被「離線記憶」的檔案
const urlsToCache = [
    './',
    './index.html',
    './apps-guide.html',
    './emergency.html',
    './style.css',
    './script.js',
    './app-lang.js',
    './data.json',
    './favicon.png'
];

// 1. 安裝階段：把上述檔案通通抓進快取 (Cache) 裡
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('檔案快取成功！');
                return cache.addAll(urlsToCache);
            })
    );
});

// 2. 啟用階段：清除舊版本的快取
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // 如果快取名稱不在白名單中，就刪除它
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('刪除舊快取:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 3. 攔截請求階段：實作「快取優先，網路備援，並動態更新快取」策略
self.addEventListener('fetch', event => {
    // 關鍵修正：永遠不要快取 service-worker.js 檔案本身。
    // 如果我們快取了這個檔案，瀏覽器將無法偵測到新版本的 Service Worker，從而導致更新失敗或無限迴圈。
    if (event.request.url.includes('service-worker.js')) {
        return; // 讓瀏覽器使用其預設的網路行為處理
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 快取命中 - 直接回傳快取中的資源
                if (response) {
                    return response;
                }

                // 快取未命中 - 透過網路請求資源
                return fetch(event.request).then(
                    networkResponse => {
                        // 檢查是否為有效的回應
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // 將成功獲取的資源複製一份存入快取
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return networkResponse;
                    }
                );
            })
    );
});

// 4. 監聽來自客戶端(網頁)的訊息
self.addEventListener('message', event => {
    // 如果收到的訊息是要求 service worker 跳過等待，立即啟用
    if (event.data && event.data.action === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});