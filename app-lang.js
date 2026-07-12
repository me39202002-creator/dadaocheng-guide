// 1. 定義四國語言的 JSON 字典檔
const i18n = {
    zh: {
        site_title: "大稻埕導覽指南",
        nav_shops: "特色店家",
        nav_apps: "必備APP推薦",
        intro_title: "外國旅客必備數位工具",
        intro_desc: "讓您的台灣之旅更順暢！以下為您整理出在台灣最實用的交通、美食與生活 APP。",
        
        // 分類標題
        cat_nav: "🗺️ 地圖與綜合導航 (Maps & Navigation)",
        cat_transit: "🚆 大眾運輸與火車 (Public Transit & Trains)",
        cat_ride: "🚕 叫車與單車租借 (Ride-hailing & Bike Sharing)",
        cat_ticket: "🎟️ 票券預訂與行程 (Tickets & Itineraries)",
        cat_comm: "💬 翻譯與在地通訊 (Translation & Communication)",
        
        // 標籤 (Badges)
        badge_nav: "綜合導航",
        badge_travel: "旅遊指南",
        badge_bus: "公車動態",
        badge_mrt: "捷運路網",
        badge_hsr: "高鐵訂票",
        badge_taxi: "叫車服務",
        badge_bike: "共享單車",
        badge_ticket: "票券預訂",
        badge_tour: "在地體驗",
        badge_translate: "語言翻譯",
        badge_comm: "通訊軟體",
        
        // APP 描述 (Descriptions)
        desc_gmaps: "在台灣找路、查詢公車與捷運路線最準確的工具。強烈建議搭配街景功能使用。",
        desc_navitime: "NAVITIME 專為訪台旅客設計，提供離線地圖、轉乘資訊與熱門景點指南。",
        desc_busplus: "全台公車動態精準預測，等公車必備神器，介面乾淨好用。",
        desc_mrtgo: "提供台北捷運路線圖、票價查詢及首末班車時間，在複雜的車站內不迷路。",
        desc_texpress: "台灣高鐵官方APP。手機直接買票，進站只需刷手機條碼，跨縣市移動超方便。",
        desc_uber: "在台灣的介面與國外完全相同。綁定信用卡扣款，不用擔心語言不通或被繞路。",
        desc_youbike: "查詢最近的腳踏車租借站與剩餘車輛。在大稻埕小巷弄穿梭的最佳交通工具！",
        desc_klook: "預訂高鐵外國人優惠票、景點門票與上網 SIM 卡，價格通常比現場買便宜。",
        desc_kkday: "報名在地導覽、手作課程或是包車一日遊的最佳平台，支援多國語言客服。",
        desc_translate: "遇到沒有英文菜單的傳統小吃店時，開啟「相機即時翻譯」功能就能輕鬆點餐。",
        desc_line: "台灣人最依賴的通訊軟體。許多大稻埕的在地店家都用 LINE 接受訂位或客服詢問。"
    },
    en: {
        site_title: "Dadaocheng Guide",
        nav_shops: "Local Shops",
        nav_apps: "Essential Apps",
        intro_title: "Essential Digital Tools for Travelers",
        intro_desc: "Make your trip to Taiwan smoother! Here are the most useful apps for transportation and lifestyle.",
        
        cat_nav: "🗺️ Maps & Navigation",
        cat_transit: "🚆 Public Transit & Trains",
        cat_ride: "🚕 Ride-hailing & Bike Sharing",
        cat_ticket: "🎟️ Tickets & Itineraries",
        cat_comm: "💬 Translation & Communication",
        
        badge_nav: "Navigation",
        badge_travel: "Travel Guide",
        badge_bus: "Bus Tracker",
        badge_mrt: "MRT Network",
        badge_hsr: "HSR Tickets",
        badge_taxi: "Ride-hailing",
        badge_bike: "Bike Sharing",
        badge_ticket: "Ticket Booking",
        badge_tour: "Local Tours",
        badge_translate: "Translation",
        badge_comm: "Messaging",
        
        desc_gmaps: "The most accurate tool for navigating routes. Street view is highly recommended.",
        desc_navitime: "Designed for visitors to Taiwan, offering offline maps, transit info, and attraction guides.",
        desc_busplus: "Accurate real-time bus tracking across Taiwan. A must-have for taking the bus.",
        desc_mrtgo: "Provides Taipei MRT route maps, fare inquiries, and first/last train times.",
        desc_texpress: "Official Taiwan HSR app. Buy tickets directly on your phone and scan the barcode to enter.",
        desc_uber: "Same interface as abroad. Pay with your linked card, no need to worry about language barriers.",
        desc_youbike: "Find nearby bike stations and available bikes. The best way to explore Dadaocheng!",
        desc_klook: "Book HSR foreigner discount tickets, attraction passes, and SIM cards. Often cheaper than on-site.",
        desc_kkday: "The best platform to book local tours, workshops, or private chartered day trips.",
        desc_translate: "Use the 'instant camera translation' feature to easily order food at traditional eateries.",
        desc_line: "The most popular messaging app in Taiwan. Many local shops use it for reservations."
    },
    ja: {
        site_title: "大稲埕ガイド",
        nav_shops: "おすすめのお店",
        nav_apps: "必須アプリ",
        intro_title: "外国人旅行者必携のデジタルツール",
        intro_desc: "台湾旅行をよりスムーズに！交通や生活に役立つ便利なアプリをまとめました。",
        
        cat_nav: "🗺️ マップ＆総合ナビ",
        cat_transit: "🚆 公共交通機関＆鉄道",
        cat_ride: "🚕 配車＆レンタサイクル",
        cat_ticket: "🎟️ チケット予約＆ツアー",
        cat_comm: "💬 翻訳＆コミュニケーション",
        
        badge_nav: "ナビゲーション",
        badge_travel: "旅行ガイド",
        badge_bus: "バス運行情報",
        badge_mrt: "MRT路線図",
        badge_hsr: "新幹線予約",
        badge_taxi: "配車サービス",
        badge_bike: "シェアサイクル",
        badge_ticket: "チケット予約",
        badge_tour: "現地体験",
        badge_translate: "翻訳",
        badge_comm: "通信アプリ",
        
        desc_gmaps: "道案内やルート検索に最も正確なツール。ストリートビューの活用がおすすめです。",
        desc_navitime: "訪台旅行者向けに特化。オフラインマップや乗換案内、人気スポットガイドを提供。",
        desc_busplus: "台湾全土のバスの到着時間を正確に予測。バス移動に欠かせない神アプリです。",
        desc_mrtgo: "台北MRTの路線図、運賃、始発・終電時間を調べられ、駅構内でも迷いません。",
        desc_texpress: "台湾新幹線の公式アプリ。スマホで予約・決済し、QRコードで直接改札を通れます。",
        desc_uber: "海外と同じインターフェース。言葉の壁やぼったくりの心配がなく安心です。",
        desc_youbike: "最寄りのステーションと利用可能な自転車を検索。大稲埕の路地裏散策に最適！",
        desc_klook: "外国人向け新幹線割引チケットやSIMカードの予約に。現地購入よりお得なことが多いです。",
        desc_kkday: "現地ツアーや手作り体験、貸切チャーターを予約できる最適なプラットフォーム。",
        desc_translate: "英語メニューのない伝統的な食堂でも、「カメラ翻訳」機能を使えば簡単に注文できます。",
        desc_line: "台湾で最も使われている通信アプリ。多くのお店がLINEで予約や問い合わせを受け付けています。"
    },
    ko: {
        site_title: "다다오청 가이드",
        nav_shops: "추천 상점",
        nav_apps: "필수 앱",
        intro_title: "외국인 여행객 필수 디지털 도구",
        intro_desc: "대만 여행을 더욱 순조롭게! 교통 및 생활에 유용한 필수 앱을 정리했습니다.",
        
        cat_nav: "🗺️ 지도 및 내비게이션",
        cat_transit: "🚆 대중교통 및 기차",
        cat_ride: "🚕 택시 호출 및 자전거",
        cat_ticket: "🎟️ 티켓 예약 및 일정",
        cat_comm: "💬 번역 및 현지 통신",
        
        badge_nav: "내비게이션",
        badge_travel: "여행 가이드",
        badge_bus: "버스 정보",
        badge_mrt: "MRT 노선",
        badge_hsr: "고속철도 예매",
        badge_taxi: "택시 호출",
        badge_bike: "공유 자전거",
        badge_ticket: "티켓 예약",
        badge_tour: "현지 체험",
        badge_translate: "언어 번역",
        badge_comm: "메신저",
        
        desc_gmaps: "대만에서 길을 찾고 경로를 조회하는 데 가장 정확한 도구입니다.",
        desc_navitime: "방문객을 위해 설계되었으며 오프라인 지도, 환승 정보 및 명소 가이드를 제공합니다.",
        desc_busplus: "대만 전역의 버스 도착 시간을 정확히 예측합니다. 버스 이용 시 필수 앱입니다.",
        desc_mrtgo: "타이베이 MRT 노선도, 요금, 첫차/막차 시간을 제공하여 역에서 길을 잃지 않게 돕습니다.",
        desc_texpress: "대만 고속철도 공식 앱입니다. 휴대폰으로 바로 표를 사고 바코드로 탑승하세요.",
        desc_uber: "해외와 동일한 인터페이스. 신용카드 결제로 언어 장벽이나 바가지 요금 걱정이 없습니다.",
        desc_youbike: "가까운 자전거 대여소와 남은 자전거 수를 확인하세요. 다다오청 골목을 누비는 최고의 수단입니다!",
        desc_klook: "고속철도 외국인 할인 표, 명소 입장권, SIM 카드를 예약하세요. 현장 구매보다 저렴합니다.",
        desc_kkday: "현지 투어, 수공예 클래스, 일일 대절 택시를 예약하기 가장 좋은 플랫폼입니다.",
        desc_translate: "영어 메뉴가 없는 식당에서 '카메라 즉시 번역' 기능을 켜면 쉽게 주문할 수 있습니다.",
        desc_line: "대만에서 가장 많이 쓰이는 메신저. 많은 현지 상점이 LINE으로 예약과 문의를 받습니다."
    }
};

// 2. 執行語言替換的函數
function changeLanguage(lang) {
    // 找出所有帶有 data-i18n 屬性的標籤
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        // 如果字典檔裡有對應的翻譯，就替換文字
        if (i18n[lang] && i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });

    // 確保下拉選單的值跟著改變
    document.getElementById('lang-select').value = lang;
    
    // 🌟 關鍵：將選擇的語言存入 localStorage，讓換頁時可以記住設定
    localStorage.setItem('preferredLanguage', lang);
}

// 3. 頁面載入時的初始化設定
document.addEventListener('DOMContentLoaded', () => {
    // 檢查瀏覽器是否已經有記住的語言設定，沒有的話預設為繁體中文 (zh)
    const savedLang = localStorage.getItem('preferredLanguage') || 'zh';
    changeLanguage(savedLang);

    // 監聽下拉選單的改變事件
    document.getElementById('lang-select').addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });
});