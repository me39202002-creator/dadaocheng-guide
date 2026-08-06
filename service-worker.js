const CACHE_NAME = 'dadaocheng-guide-v5'; // 每次更新網站內容時，手動增加此版本號

// 🌟 關鍵修正：使用 CACHE_NAME 作為 Service Worker 的靜態版本 ID
// 這能確保在同一次部署中，所有 SW 實例都共享同一個 ID，從而避免開發時的重複更新。
const SW_ID = CACHE_NAME;

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

// 3. 攔截請求階段：實作混合快取策略
self.addEventListener('fetch', event => {
    // 永遠不要快取 service-worker.js 檔案本身，以確保更新機制正常
    if (event.request.url.includes('service-worker.js')) {
        return;
    }

    // 策略 1: 對於 HTML 頁面導航請求，採用「網路優先」策略
    // 這能確保使用者在線上時總能看到最新的頁面，解決更新迴圈問題
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // 網路請求成功，複製一份回應存入快取，然後回傳原始回應
                    // 這樣做可以確保快取中的頁面永遠是使用者看到的最新版本
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        // 關鍵：將最新的 HTML 頁面也存入快取
                        cache.put(event.request, responseToCache);
                    });
                    // 將原始回應傳給瀏覽器
                    return response; 
                })
                .catch(() => {
                    // 網路請求失敗 (離線)，從快取中尋找備用頁面
                    return caches.match(event.request);
                })
        );
        return;
    }

    // 策略 2: 對於 CSS, JS, 圖片等靜態資源，採用「快取優先」策略
    // 這能最大化離線效能與載入速度
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // 快取命中，直接回傳
            if (cachedResponse) {
                return cachedResponse;
            }
            // 快取未命中，從網路請求，並存入快取供下次使用
            return fetch(event.request).then(
                networkResponse => {
                    // 關鍵修正：只快取有效的 http/https 回應
                    // 避免快取 chrome-extension:// 或其他不支援的協議
                    if (!networkResponse || networkResponse.status !== 200 || !networkResponse.url.startsWith('http')) {
                        return networkResponse;
                    }

                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
        })
    );
});

// 4. 監聽來自客戶端(網頁)的訊息
self.addEventListener('message', event => {
    // 動作 1: 如果收到的訊息是要求 service worker 跳過等待，立即啟用
    if (event.data && event.data.action === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    // 🌟 2. 動作 2: 如果收到的是查詢 ID 的請求，則回傳自己的 ID
    if (event.data && event.data.action === 'GET_SW_ID') {
        event.ports[0].postMessage({ sw_id: SW_ID });
    }
});