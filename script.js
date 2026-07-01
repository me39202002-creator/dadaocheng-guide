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
        snack: { zh: "小吃飲品", en: "Snacks & Drinks", ja: "軽食・飲み物", ko: "간식 및 음료" } 
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

// 獲取 Google 試算表資料
async function fetchShopsData() {
    try {
        // 🌟 這裡請貼上你剛剛「建立新版本」後拿到的 Apps Script 網址
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbyPN0_5dJN-8pG56ja9KlrIEQoMlV3QQZnIv60TQnL72Z3mx4pR7OLWV_336BEA_gH-/exec';
        
        const response = await fetch(scriptUrl); 
        if (!response.ok) throw new Error('網路回應錯誤');
        
        const rawData = await response.json();
        
        // 呼叫智慧翻譯機，把試算表格式轉成網頁格式
        shopsData = transformSheetData(rawData);
        
        displayLatestTimeFromData(shopsData);
        updateUI(); 
    } catch (error) {
        console.error("載入資料失敗:", error);
        shopGrid.innerHTML = `<p style="text-align:center; color:red;">讀取資料庫發生錯誤，請按 F12 查看控制台。</p>`;
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

// 渲染篩選按鈕
function renderFilters() {
    filterBar.innerHTML = '';
    const categories = ['all', 'coffee', 'tea', 'craft', 'pastry', 'medicine', 'snack'];
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${currentFilter === cat ? 'active' : ''}`;
        btn.textContent = uiTranslations.filters[cat][currentLang];
        btn.onclick = () => {
            currentFilter = cat;
            renderFilters();
            renderCards();
        };
        filterBar.appendChild(btn);
    });
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
        
        const searchQuery = encodeURIComponent(shop.title[currentLang] + ' ' + shop.address[currentLang]);
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;
        
        card.innerHTML = `
            <div class="shop-category">${uiTranslations.filters[shop.category] ? uiTranslations.filters[shop.category][currentLang] : shop.category}</div>
            <h3 class="shop-title">${shop.title[currentLang]}</h3>
            <p class="shop-description">${shop.description ? shop.description[currentLang] : ''}</p>
            <div class="shop-info">
                <span>📍</span>
                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 4px;">
                    ${shop.address[currentLang]}
                </a>
            </div>
            <div class="shop-info">
                <span>⏰</span>
                <span>${shop.hours[currentLang]}</span>
            </div>
        `;
        shopGrid.appendChild(card);
    });
}

// 自動從資料庫中比對出最新的時間
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