// 防範 XSS 的字串跳脫函式
function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
// 介面翻譯字典
const uiTranslations = {
    title: { zh: "大稻埕特色店家", en: "Datong Featured Shops", ja: "大稲埕の名店", ko: "다다오청 특색 매장" },
    filters: {
        all: { zh: "全部", en: "All", ja: "すべて", ko: "전체" },
        coffee: { zh: "咖啡", en: "Coffee", ja: "コーヒー", ko: "커피" },
        tea: { zh: "茶館", en: "Tea House", ja: "茶館", ko: "다과점" },
        craft: { zh: "文創選物", en: "Crafts", ja: "クラフト", ko: "크래프트" },
        pastry: { zh: "傳統糕餅", en: "Pastry", ja: "伝統菓子", ko: "전통 과자" },
        medicine: { zh: "中藥行", en: "Medicine", ja: "漢方薬局", ko: "한약방" },
        restaurant: { zh: "餐廳", en: "Restaurant", ja: "レストラン", ko: "레스토랑" },
        snack: { zh: "小吃飲品", en: "Snacks & Drinks", ja: "軽食・飲み物", ko: "간식 및 음료" },
        
        // 👉 請務必確保有加入這兩行，少一行都會導致讀不到 'zh' 而白畫面
        bar: { zh: "酒吧", en: "Bar", ja: "バー", ko: "바" },
        culture: { zh: "文化", en: "Culture", ja: "文化", ko: "문화" }
    }
};

let currentLang = 'zh';
let currentFilter = 'all';
let shopsData = [];

// DOM 元素
const langSelect = document.getElementById('lang-select');
const filterBar = document.getElementById('filter-bar');
const shopGrid = document.getElementById('shop-grid');
const siteTitle = document.getElementById('site-title');

// 監聽器設定
function setupEventListeners() {
    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        document.documentElement.lang = currentLang;
        updateUI();
    });
}

// 安全讀取 localStorage
function safeGetItem(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSetItem(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { console.warn('localStorage 寫入失敗:', e); }
}

// 獲取資料（優先從 GAS，失敗則用本地 data.json，最後用 localStorage 快取）
async function fetchShopsData() {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyPN0_5dJN-8pG56ja9KlrIEQoMlV3QQZnIv60TQnL72Z3mx4pR7OLWV_336BEA_gH-/exec';
    const cacheKey = 'dadaocheng_shops_data';
    const cacheTimeKey = 'dadaocheng_shops_time';
    const CACHE_DURATION = 3600000; // 1 小時（毫秒）

    let hasDisplayed = false;

    // 嘗試用資料渲染畫面
    function tryRender(data, source) {
        if (!data || !Array.isArray(data) || data.length === 0) return false;
        shopsData = transformSheetData(data);
        if (shopsData.length === 0) return false;
        displayLatestTimeFromData(shopsData);
        updateUI();
        console.log(`✅ 使用 ${source} 資料渲染，共 ${shopsData.length} 筆`);
        hasDisplayed = true;
        return true;
    }

    // ========== 步驟 1：檢查 localStorage 快取（含過期判斷）==========
    const cachedDataStr = safeGetItem(cacheKey);
    const cachedTimeStr = safeGetItem(cacheTimeKey);
    const now = Date.now();
    const cacheValid = cachedDataStr && cachedTimeStr && (now - parseInt(cachedTimeStr)) < CACHE_DURATION;

    if (cacheValid) {
        try {
            const cachedData = JSON.parse(cachedDataStr);
            tryRender(cachedData, 'localStorage 快取');
        } catch (e) {
            console.warn('快取資料解析失敗:', e);
        }
    }

    // 如果沒有有效快取，先顯示載入中
    if (!hasDisplayed) {
        shopGrid.innerHTML = `<p style="text-align:center; color:#666; padding:40px 0;">📡 載入店家資料中...</p>`;
    }

    // ========== 步驟 2：嘗試從 GAS 取得最新資料 ==========
    let gasData = null;
    try {
        const response = await fetch(scriptUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        gasData = await response.json();

        // 成功取得，更新快取
        safeSetItem(cacheKey, JSON.stringify(gasData));
        safeSetItem(cacheTimeKey, String(now));

        // 用新資料更新畫面
        tryRender(gasData, 'Google Sheets');
        return;

    } catch (gasError) {
        console.warn('GAS 載入失敗:', gasError.message);
    }

    // ========== 步驟 3：GAS 失敗，嘗試本地 data.json ==========
    if (!hasDisplayed) {
        try {
            const localResponse = await fetch('data.json');
            if (localResponse.ok) {
                const localData = await localResponse.json();
                if (tryRender(localData, '本地 data.json')) {
                    safeSetItem(cacheKey, JSON.stringify(localData));
                    safeSetItem(cacheTimeKey, String(now));
                    return;
                }
            }
        } catch (localError) {
            console.warn('本地 data.json 載入失敗:', localError.message);
        }
    }

    // ========== 步驟 4：全部失敗，嘗試過期快取（最後手段）==========
    if (!hasDisplayed && cachedDataStr) {
        try {
            const expiredData = JSON.parse(cachedDataStr);
            if (tryRender(expiredData, '過期快取')) {
                console.log('⚠️ 使用過期快取資料（網路可能離線）');
                return;
            }
        } catch (e) {
            console.warn('過期快取解析失敗:', e);
        }
    }

    // ========== 步驟 5：完全無法取得資料 ==========
    if (!hasDisplayed) {
        shopGrid.innerHTML = `
            <div style="text-align:center; padding:40px 20px; color:#666;">
                <p style="font-size:1.2rem; margin-bottom:10px;">😅 暫時無法載入資料</p>
                <p>請檢查網路連線，或稍後再試。</p>
                <button onclick="location.reload()" style="margin-top:20px; padding:10px 20px; border-radius:20px; border:1px solid var(--primary-color); background:transparent; color:var(--primary-color); cursor:pointer;">重新整理</button>
            </div>
        `;
    }
}

// 🧠 智慧翻譯機：將試算表的平面欄位，轉換成網頁需要的立體多國語言結構
function transformSheetData(data) {
    if (!Array.isArray(data)) return [];

    return data.map((row, index) => {
        // 小幫手：模糊搜尋試算表的欄位名稱 (防呆機制)
        const getCol = (keywords) => {
            const key = Object.keys(row).find(k => keywords.some(kw => k.toLowerCase().includes(kw.toLowerCase())));
            return key ? row[key] : '';
        };

        return {
            id: index,
            category: getCol(['category', '分類']) || 'all',
            title: {
                zh: getCol(['title (zh)', '店名']),
                en: getCol(['title (en)']),
                ja: getCol(['title (ja)']),
                ko: getCol(['title (ko)'])
            },
            address: {
                zh: getCol(['address (zh)', '地址']),
                en: getCol(['address (en)']),
                ja: getCol(['address (ja)']),
                ko: getCol(['address (ko)'])
            },
            hours: {
                zh: getCol(['hours (zh)', '營業時間']),
                en: getCol(['hours (en)']),
                ja: getCol(['hours (ja)']),
                ko: getCol(['hours (ko)'])
            },
            description: {
                zh: getCol(['description (zh)', '簡介']),
                en: getCol(['description (en)']),
                ja: getCol(['description (ja)']),
                ko: getCol(['description (ko)'])
            },
            UpdateTime: getCol(['updatetime', '更新時間'])
        };
    }).filter(shop => shop.title.zh !== ''); // 過濾掉沒有店名的空白行
}

// 更新整個介面
function updateUI() {
    siteTitle.textContent = uiTranslations.title[currentLang];
    renderFilters();
    renderCards();
}
// 渲染篩選下拉選單
function renderFilters() {
    filterBar.innerHTML = '';
    // 包含您剛剛新增的 bar 與 culture
    const categories = ['all', 'coffee', 'tea', 'restaurant', 'craft', 'pastry', 'medicine', 'snack', 'bar', 'culture'];

    // 建立下拉選單 (select) 元素
    const select = document.createElement('select');
    select.className = 'category-select';
    
    // 當選單選項改變時觸發
    select.addEventListener('change', (e) => {
        currentFilter = e.target.value;
        renderCards(); // 只需要重新渲染卡片，不需要重新渲染整個選單
    });

    // 建立選單內的各個選項 (option)
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        // 根據目前語言取得對應的翻譯文字
        option.textContent = uiTranslations.filters[cat][currentLang];
        
        // 標記目前被選取的分類
        if (currentFilter === cat) {
            option.selected = true;
        }
        
        select.appendChild(option);
    });

    // 將下拉選單加入到畫面中
    filterBar.appendChild(select);
}

// 渲染店家卡片
function renderCards() {
    shopGrid.innerHTML = '';

    const filteredShops = currentFilter === 'all' 
        ? shopsData 
        : shopsData.filter(shop => shop.category === currentFilter);

    filteredShops.forEach(shop => {
        if (!shop || !shop.title || !shop.title[currentLang]) return; 

        const card = document.createElement('div');
        card.className = 'shop-card';

        // 🌟 1. 將外部變數取出來，並統一使用 escapeHTML 進行跳脫保護
        const safeTitle = escapeHTML(shop.title[currentLang]);
        const safeAddress = escapeHTML(shop.address[currentLang]);
        const safeHours = escapeHTML(shop.hours[currentLang]);
        
        // 處理分類文字的安全防護
        const rawCategory = uiTranslations.filters[shop.category] ? uiTranslations.filters[shop.category][currentLang] : shop.category;
        const safeCategory = escapeHTML(rawCategory);

        // 處理簡介的安全防護
        const desc = shop.description && shop.description[currentLang] 
            ? escapeHTML(shop.description[currentLang]) 
            : '';

        // 🌟 2. 處理網址 (URL 需要使用 encodeURIComponent，這不受 HTML 跳脫影響)
        const searchQuery = encodeURIComponent(shop.title[currentLang] + ' ' + shop.address[currentLang]);
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;

        // 🌟 3. 將已經「消毒」過的安全變數 (safe 字首) 塞進 HTML 結構中
        card.innerHTML = `
            <div class="shop-category">${safeCategory}</div>
            <h3 class="shop-title">${safeTitle}</h3>
            ${desc ? `<p class="shop-description">${desc}</p>` : ''}
            <div class="shop-info">
                <span>📍</span>
                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 4px;">
                    ${safeAddress}
                </a>
            </div>
            <div class="shop-info">
                <span>⏰</span>
                <span>${safeHours}</span>
            </div>
        `;
        shopGrid.appendChild(card);
    });
}

// 自動從資料庫中比對出最新的時間 (加入時間格式美化)
function displayLatestTimeFromData(data) {
    let latestTime = "";

    // 找出最新時間的字串
    data.forEach(shop => {
        if (shop.UpdateTime && shop.UpdateTime > latestTime) {
            latestTime = shop.UpdateTime;
        }
    });

    const displayEl = document.getElementById('time-display');
    if (displayEl && latestTime !== "") {
        // 將電腦原始時間轉換成 JavaScript 的 Date 物件
        const dateObj = new Date(latestTime);

        // 確保這是一個有效的時間
        if (!isNaN(dateObj.getTime())) {
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dateObj.getDate()).padStart(2, '0');
            const hours = String(dateObj.getHours()).padStart(2, '0');
            const minutes = String(dateObj.getMinutes()).padStart(2, '0');

            // 組裝成我們想要的格式
            displayEl.textContent = `${year}/${month}/${day} ${hours}:${minutes}`;
        } else {
            // 如果轉換失敗，就顯示原本試算表抓到的文字
            displayEl.textContent = latestTime;
        }
    }
}

// 啟動程式
async function init() {
    setupEventListeners();
    await fetchShopsData();
}

init();