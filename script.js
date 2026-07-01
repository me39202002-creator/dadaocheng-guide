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
        // 智囊團修正：移除 HTML 標籤，改為標準的物件屬性，並補上各國翻譯
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

// 初始化
async function init() {
    setupEventListeners();
    await fetchShopsData();
    updateUI();
}

// 監聽器設定
function setupEventListeners() {
    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        document.documentElement.lang = currentLang; // 更新 HTML lang 屬性
        updateUI();
    });
}

// 獲取 JSON 資料
async function fetchShopsData() {
    try {
        const response = await fetch('data.json');
        shopsData = await response.json();
    } catch (error) {
        console.error("載入資料失敗:", error);
        shopGrid.innerHTML = `<p>資料載入失敗，請確認是否使用 Live Server 開啟。</p>`;
    }
}

// 更新整個介面 (語言切換時觸發)
function updateUI() {
    // 1. 更新標題
    siteTitle.textContent = uiTranslations.title[currentLang];
    
    // 2. 重新渲染篩選按鈕
    renderFilters();
    
    // 3. 重新渲染卡片
    renderCards();
}

// 渲染篩選按鈕
function renderFilters() {
    filterBar.innerHTML = '';
    // 智囊團修正：在陣列的最後補上 'snack'
    const categories = ['all', 'coffee', 'tea', 'craft', 'pastry', 'medicine', 'snack'];
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${currentFilter === cat ? 'active' : ''}`;
        btn.textContent = uiTranslations.filters[cat][currentLang];
        btn.onclick = () => {
            currentFilter = cat;
            renderFilters(); // 更新按鈕 active 狀態
            renderCards();   // 更新下方卡片
        };
        filterBar.appendChild(btn);
    });
}

// 渲染店家卡片
function renderCards() {
    shopGrid.innerHTML = '';
    
    // 篩選資料
    const filteredShops = currentFilter === 'all' 
        ? shopsData 
        : shopsData.filter(shop => shop.category === currentFilter);

    // 生成卡片 HTML
    filteredShops.forEach(shop => {
        const card = document.createElement('div');
        card.className = 'shop-card';
        
        // 智囊團修正：補上缺失的 $ 符號，並替換為正確的 Google Maps 搜尋 API 網址
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.title[currentLang] + ' ' + shop.address[currentLang])}`;
        
        card.innerHTML = `
            <div class="shop-category">${uiTranslations.filters[shop.category][currentLang]}</div>
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

// 啟動程式
init();