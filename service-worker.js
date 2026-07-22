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

// 2. 攔截請求階段：當旅客開啟網頁時，先看快取有沒有，有就直接給，達成離線瀏覽
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 如果快取裡有這個檔案，就直接回傳 (即使沒網路也會通)
                if (response) {
                    return response;
                }
                // 如果快取沒有，就正常透過網路去抓
                return fetch(event.request);
            })
    );
});