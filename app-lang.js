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
        badge_tra: "火車訂票",
        
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
        desc_line: "台灣人最依賴的通訊軟體。許多大稻埕的在地店家都用 LINE 接受訂位或客服詢問。",
        desc_tra: "台灣鐵路官方APP。查詢列車時刻表、線上訂票，並可使用手機電子票進站。",

        cat_exchange: "💵 現金提款與換匯指南 (Cash & Currency Exchange)",
        desc_exchange_intro: "雖然大稻埕許多特色店家已經支援電子支付或信用卡，但傳統小吃、布市、中藥行，以及悠遊卡 (EasyCard) 儲值通常仍只收取現金。以下是獲取新台幣最方便的方式：",
        title_atm: "🏧 24 小時便利商店跨國提款 (International ATMs)",
        desc_atm_intro: "台灣的便利商店密度極高，是外國旅客領取現金最方便的管道。",
        atm_li_1: "哪裡可以領？ 尋找 7-ELEVEN (內建中國信託 ATM) 或 全家便利商店 (內建國泰世華/台新銀行 ATM)。大稻埕周邊步行 3 分鐘內絕對找得到。",
        atm_li_2: "支援卡別： 機台上若貼有 Visa, Mastercard, PLUS, Cirrus, UnionPay (銀聯) 等標誌，即可使用國外提款卡領取新台幣 (TWD)。",
        atm_li_3: "介面語言： ATM 均提供英文 (English)、日文 (日本語)、韓文 (한국어) 等多國語言。",
        atm_li_4: "手續費： 台灣本地銀行通常會收取單筆約 NT$100 的設備手續費（您的發卡銀行可能還會收取跨國手續費，建議一次領取足夠金額）。",
        title_dcc: "⚠️ 【重要提醒！避免匯率陷阱 (Avoid DCC Trap)】",
        desc_dcc: "當您在 ATM 提款或商店刷卡時，如果螢幕詢問您要使用「您的母國貨幣」還是「新台幣 (TWD)」結帳，請務必選擇「新台幣 (TWD) / 本地貨幣」！若選擇母國貨幣（即動態貨幣轉換 DCC），ATM 將會使用極差的匯率計算，您可能會因此多付 3%~8% 的隱藏費用。",
        title_bank: "💱 實體銀行換匯 (Currency Exchange at Banks)",
        desc_bank_intro: "如果您手邊持有外幣現鈔 (如美金、日圓、歐元) 需要兌換成新台幣，迪化街上就有提供外匯業務的實體銀行：",
        bank_li_1: "第一銀行 (First Bank) 大稻埕分行： 台北市大同區迪化街 1 段 63 號 (霞海城隍廟斜對面)。",
        bank_li_2: "營業時間： 平日 (週一至週五) 09:00 - 15:30。週末與國定假日休息。",
        bank_li_3: "注意事項： 在台灣的銀行辦理任何換匯業務，絕對必須出示護照正本 (Passport)，請務必隨身攜帶。此為雙語分行，溝通十分方便。",
        title_machine: "💡 旅客專屬：自助外幣兌換機 (Currency Exchange Machine)",
        desc_machine: "為了因應大稻埕龐大的觀光人潮，如果您急需小額現金又逢銀行下班時間，可以尋找自助兌幣機（例如：新光銀行 台外幣兌換機）。部分據點設有無需台灣銀行帳戶即可操作的兌換機，支援美金、日幣等主流貨幣直接兌換新台幣，依照螢幕指示掃描護照即可完成。",
    
        nav_emergency: "🚨 緊急協助",
        intro_emer_title: "🚨 緊急聯絡與醫療協助",
        intro_emer_desc: "台灣是非常安全的旅遊國家，但若遇到突發的身體不適或遺失物品，請不要慌張，以下資源可以隨時提供多國語言的協助：",
        title_hotline: "📞 24 小時免費求助熱線 (24/7 Toll-Free Hotlines)",
        hotline_1_name: "外國人在臺生活諮詢熱線 (Foreigners in Taiwan Hotline)：",
        hotline_1_desc: "服務：提供中、英、日等 7 國語言服務。無論是簽證問題、遺失護照、生活求助或遭遇緊急狀況，都可以撥打此專線尋求指引。",
        hotline_2_name: "24 小時旅遊諮詢熱線 (Tourist Information Hotline)：",
        hotline_2_desc: "服務：由台灣觀光署提供，支援中、英、日、韓語。若在旅途中遇到溝通障礙或需要即時的旅遊指引，可以隨時撥打。",
        hotline_3_name: "緊急報警與救護 (Police & Ambulance)：",
        hotline_3_desc: "(註：接通後若無法用中文溝通，可說出 'English' 要求英文協助)",
        title_hospital: "🏥 鄰近雙語醫療資源 (Nearby Hospitals)",
        desc_hospital_intro: "若在大稻埕周邊感到身體不適需要就醫，最近且具備完善外語溝通能力的大型醫院是：",
        hosp_li_1: "<strong>臺北市立聯合醫院 中興院區 (Taipei City Hospital - Zhongxing Branch)</strong>",
        hosp_li_2: "<strong>距離：</strong> 位於大稻埕商圈南側，步行或搭乘計程車約 5-10 分鐘即可抵達。",
        hosp_li_4: "<strong>特色：</strong> 為公立大型綜合醫院，設有急診室 (Emergency Room)，醫師與護理人員皆具備基礎至進階的英語溝通能力。",
        title_police: "👮 大稻埕周邊警察局 (Local Police Stations)",
        hosp_li_3: "<strong>地址：</strong> <a href='https://www.google.com/maps/search/?api=1&query=臺北市立聯合醫院中興院區' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>台北市大同區鄭州路 145 號 📍</a>",
        pol_li_1: "<strong>民生西路派出所：</strong> 靠近迪化街北段與大稻埕碼頭 (<a href='https://www.google.com/maps/search/?api=1&query=台北市政府警察局大同分局民生西路派出所' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>台北市大同區保安街 47-1 號 📍</a>)",
        pol_li_2: "<strong>延平派出所：</strong> 靠近迪化街南段與永樂市場 (<a href='https://www.google.com/maps/search/?api=1&query=台北市政府警察局大同分局延平派出所' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>台北市大同區延平北路 1 段 86 號 📍</a>)",


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
        badge_tra: "TRA Tickets",

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
        desc_line: "The most popular messaging app in Taiwan. Many local shops use it for reservations.",
        desc_tra: "Official Taiwan Railways app. Check train schedules, book tickets online, and use your phone as an e-ticket to enter the station.",
    
        cat_exchange: "💵 Cash & Currency Exchange Guide",
        desc_exchange_intro: "While many specialty shops in Dadaocheng accept e-payments or credit cards, traditional food stalls, fabric markets, traditional medicine shops, and EasyCard top-ups often still require cash. Here are the most convenient ways to get New Taiwan Dollars (TWD):",
        title_atm: "🏧 24-Hour International ATMs at Convenience Stores",
        desc_atm_intro: "Taiwan has a very high density of convenience stores, making them the easiest way for foreign travelers to withdraw cash.",
        atm_li_1: "Where to find: Look for 7-ELEVEN (CTBC Bank ATM) or FamilyMart (Cathay United / Taishin Bank ATM). You can easily find one within a 3-minute walk around Dadaocheng.",
        atm_li_2: "Supported Cards: If the ATM displays logos like Visa, Mastercard, PLUS, Cirrus, or UnionPay, you can use your overseas debit/credit card to withdraw TWD.",
        atm_li_3: "Languages: All ATMs provide multilingual interfaces, including English, Japanese, and Korean.",
        atm_li_4: "Fees: Local Taiwanese banks usually charge an equipment fee of about NT$100 per transaction (your home bank may also charge an international transaction fee, so it is recommended to withdraw a sufficient amount at once).",
        title_dcc: "⚠️ Important: Avoid the DCC Trap!",
        desc_dcc: "When withdrawing cash at an ATM or paying by card at a store, if the screen asks whether you want to be charged in 'Your Home Currency' or 'New Taiwan Dollars (TWD)', ALWAYS choose 'New Taiwan Dollars (TWD) / Local Currency'! If you choose your home currency (Dynamic Currency Conversion - DCC), a very poor exchange rate will be applied, and you may end up paying 3%~8% in hidden fees.",
        title_bank: "💱 Currency Exchange at Physical Banks",
        desc_bank_intro: "If you have foreign cash (e.g., USD, JPY, EUR) and need to exchange it for TWD, there are physical banks on Dihua Street that offer foreign exchange services:",
        bank_li_1: "First Bank (Dadaocheng Branch): No. 63, Sec. 1, Dihua St., Datong Dist., Taipei City (diagonally opposite the Xiahai City God Temple).",
        bank_li_2: "Hours: Weekdays (Mon-Fri) 09:00 - 15:30. Closed on weekends and national holidays.",
        bank_li_3: "Note: To process any currency exchange at a bank in Taiwan, you MUST present your original passport. Please carry it with you. This is a bilingual branch, so communication is easy.",
        title_machine: "💡 For Travelers: Self-Service Currency Exchange Machines",
        desc_machine: "To accommodate the large number of tourists in Dadaocheng, if you need a small amount of cash after banking hours, look for self-service currency exchange machines (e.g., Shin Kong Bank Currency Exchange Machine). Some locations have machines that do not require a Taiwanese bank account. They support direct exchange of major currencies like USD and JPY into TWD. Just follow the on-screen instructions and scan your passport.",
    
        nav_emergency: "🚨 Emergency",
        intro_emer_title: "🚨 Emergency & Medical Assistance",
        intro_emer_desc: "Taiwan is a very safe country for travel, but if you encounter sudden illness or lose your belongings, please don't panic. The following resources offer multilingual assistance at any time:",
        title_hotline: "📞 24/7 Toll-Free Hotlines",
        hotline_1_name: "Foreigners in Taiwan Hotline:",
        hotline_1_desc: "Services: Available in 7 languages including English and Japanese. Whether you have visa issues, lost a passport, need daily life assistance, or face an emergency, you can call this hotline for guidance.",
        hotline_2_name: "Tourist Information Hotline:",
        hotline_2_desc: "Services: Provided by the Taiwan Tourism Administration, supporting English, Japanese, and Korean. Call anytime for communication issues or immediate travel guidance.",
        hotline_3_name: "Police & Ambulance:",
        hotline_3_desc: "(Note: If you cannot communicate in Chinese after connecting, simply say 'English' to request English assistance)",
        title_hospital: "🏥 Nearby Bilingual Hospitals",
        desc_hospital_intro: "If you feel unwell around Dadaocheng and need medical attention, the nearest large hospital with excellent foreign language capabilities is:",
        hosp_li_1: "<strong>Taipei City Hospital - Zhongxing Branch</strong>",
        hosp_li_2: "<strong>Distance:</strong> Located on the south side of the Dadaocheng area, about a 5-10 minute walk or taxi ride.",
        hosp_li_4: "<strong>Features:</strong> A large public general hospital with an Emergency Room. Doctors and nurses have basic to advanced English communication skills.",
        title_police: "👮 Local Police Stations",
        
        hosp_li_3: "<strong>Address:</strong> <a href='https://www.google.com/maps/search/?api=1&query=Taipei+City+Hospital+Zhongxing+Branch' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>No. 145, Zhengzhou Rd., Datong Dist., Taipei City 📍</a>",
        pol_li_1: "<strong>Minsheng West Rd. Police Station:</strong> Near the north end of Dihua St. and Dadaocheng Wharf (<a href='https://www.google.com/maps/search/?api=1&query=Minsheng+West+Road+Police+Station+Taipei' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>No. 47-1, Bao'an St., Datong Dist., Taipei City 📍</a>)",
        pol_li_2: "<strong>Yanping Police Station:</strong> Near the south end of Dihua St. and Yongle Market (<a href='https://www.google.com/maps/search/?api=1&query=Yanping+Police+Station+Taipei' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>No. 86, Sec. 1, Yanping N. Rd., Datong Dist., Taipei City 📍</a>)",


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
        badge_tra: "台湾鉄道予約",
        
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
        desc_line: "台湾で最も使われている通信アプリ。多くのお店がLINEで予約や問い合わせを受け付けています。",
        desc_tra: "台湾鉄道の公式アプリ。列車時刻表を確認し、オンラインで切符を予約できます。スマートフォンで電子切符を使用して駅に入ることができます。",
    
        cat_exchange: "💵 現金引き出しと両替ガイド",
        desc_exchange_intro: "大稲埕の多くの専門店では電子決済やクレジットカードが使えますが、伝統的な屋台、布市場、漢方薬局、そして悠遊カード（EasyCard）のチャージには依然として現金が必要です。台湾ドル（TWD）を手に入れる最も便利な方法は以下の通りです。",
        title_atm: "🏧 コンビニの24時間対応国際ATM",
        desc_atm_intro: "台湾はコンビニの密度が非常に高く、外国人旅行者が現金を引き出すのに最も便利な場所です。",
        atm_li_1: "どこにある？ 7-ELEVEN（中国信託銀行ATM）またはファミリーマート（国泰世華/台新銀行ATM）を探してください。大稲埕周辺なら徒歩3分以内で確実に見つかります。",
        atm_li_2: "対応カード： ATMにVisa、Mastercard、PLUS、Cirrus、UnionPay（銀聯）などのマークがあれば、海外のキャッシュカードで台湾ドル（TWD）を引き出せます。",
        atm_li_3: "対応言語： 全てのATMで英語、日本語、韓国語などの多言語インターフェースが利用可能です。",
        atm_li_4: "手数料： 台湾の現地銀行は通常、1回につき約100元のATM利用手数料を徴収します（カード発行会社からも海外利用手数料が請求される場合があるため、一度に十分な額を引き出すことをお勧めします）。",
        title_dcc: "⚠️ 【重要】DCC（動的通貨換算）の罠に注意！",
        desc_dcc: "ATMでの引き出しや店舗でのクレジットカード決済時、画面で「自国通貨」または「台湾ドル（TWD）」のどちらで決済するか聞かれた場合は、必ず「台湾ドル（TWD）/ 現地通貨」を選択してください！自国通貨を選択すると（DCC決済）、非常に悪い為替レートが適用され、3%〜8%の隠れた手数料を余分に支払うことになります。",
        title_bank: "💱 銀行窓口での外貨両替",
        desc_bank_intro: "手持ちの外貨（米ドル、日本円、ユーロなど）を台湾ドルに両替する必要がある場合、迪化街には外貨両替業務を行っている銀行があります。",
        bank_li_1: "第一銀行（大稲埕支店）： 台北市大同区迪化街1段63号（霞海城隍廟の斜め向かい）。",
        bank_li_2: "営業時間： 平日（月〜金）09:00 - 15:30。土日祝日は休業。",
        bank_li_3: "注意事項： 台湾の銀行で両替を行う場合、必ず「パスポートの原本」を提示する必要があります。忘れずに携帯してください。この支店はバイリンガル対応なので安心です。",
        title_machine: "💡 旅行者向け：外貨自動両替機",
        desc_machine: "大稲埕を訪れる多くの観光客に対応するため、銀行の営業時間外に少額の現金が必要な場合は、外貨自動両替機（例：新光銀行 外貨両替機）を探してみてください。一部の設置場所では台湾の銀行口座がなくても操作可能で、米ドルや日本円などの主要通貨を直接台湾ドルに両替できます。画面の指示に従い、パスポートをスキャンするだけで完了します。",
    
        nav_emergency: "🚨 緊急サポート",
        intro_emer_title: "🚨 緊急連絡先と医療サポート",
        intro_emer_desc: "台湾は非常に安全な旅行先ですが、急な体調不良や落とし物をした場合でも慌てないでください。以下の窓口では多言語でサポートを提供しています。",
        title_hotline: "📞 24時間無料ヘルプライン",
        hotline_1_name: "外国人生活相談ホットライン：",
        hotline_1_desc: "サービス：日本語や英語など7か国語に対応。ビザの問題、パスポートの紛失、生活上の相談、または緊急事態に直面した際のアドバイスを受けられます。",
        hotline_2_name: "24時間旅行相談ホットライン：",
        hotline_2_desc: "サービス：台湾観光署が提供しており、日本語、英語、韓国語に対応。旅行中の言葉の壁や緊急の案内が必要な際にいつでも電話できます。",
        hotline_3_name: "警察と救急車：",
        hotline_3_desc: "（注：電話が繋がった後、中国語での会話が難しい場合は「Japanese」または「English」と伝えてサポートを求めてください）",
        title_hospital: "🏥 近隣の多言語対応病院",
        desc_hospital_intro: "大稲埕周辺で体調を崩し、受診が必要な場合、最も近くて外国語対応が充実している総合病院はこちらです：",
        hosp_li_1: "<strong>台北市立聯合病院 中興院区</strong>",
        hosp_li_2: "<strong>アクセス：</strong> 大稲埕エリアの南側に位置し、徒歩またはタクシーで約5〜10分で到着します。",
        hosp_li_4: "<strong>特徴：</strong> 公立の大型総合病院で、救急外来（ER）を備えています。医師や看護師は基礎から上級レベルの英語コミュニケーション能力を持っています。",
        title_police: "👮 大稲埕周辺の警察署（派出所）",
        hosp_li_3: "<strong>住所：</strong> <a href='https://www.google.com/maps/search/?api=1&query=臺北市立聯合醫院中興院區' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>台北市大同区鄭州路145号 📍</a>",
        pol_li_1: "<strong>民生西路派出所：</strong> 迪化街の北側・大稲埕碼頭近く（<a href='https://www.google.com/maps/search/?api=1&query=台北市政府警察局大同分局民生西路派出所' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>台北市大同区保安街47-1号 📍</a>）",
        pol_li_2: "<strong>延平派出所：</strong> 迪化街の南側・永楽市場近く（<a href='https://www.google.com/maps/search/?api=1&query=台北市政府警察局大同分局延平派出所' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>台北市大同区延平北路1段86号 📍</a>）",


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
        badge_tra: "일반 기차 예매",
        
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
        desc_line: "대만에서 가장 많이 쓰이는 메신저. 많은 현지 상점이 LINE으로 예약과 문의를 받습니다.",
        desc_tra: "대만 철도청(TRA) 공식 앱입니다. 기차 시간표 조회, 온라인 티켓 예매가 가능하며, 스마트폰 전자 티켓으로 개찰구를 통과할 수 있습니다.",
    
        cat_exchange: "💵 현금 인출 및 환전 가이드",
        desc_exchange_intro: "다다오청의 많은 특색 있는 상점들이 전자 결제나 신용카드를 지원하지만, 전통 노점상, 원단 시장, 한약방 및 이지카드(EasyCard) 충전에는 여전히 현금이 필요합니다. 대만 달러(TWD)를 구하는 가장 편리한 방법은 다음과 같습니다.",
        title_atm: "🏧 24시간 편의점 해외 ATM",
        desc_atm_intro: "대만은 편의점 밀집도가 매우 높아 외국인 여행객이 현금을 인출하기에 가장 편리한 곳입니다.",
        atm_li_1: "어디서 인출하나요? 7-ELEVEN(CTBC 은행 ATM) 또는 패밀리마트(캐세이 유나이티드/타이신 은행 ATM)를 찾으세요. 다다오청 주변에서 도보 3분 이내에 쉽게 찾을 수 있습니다.",
        atm_li_2: "지원 카드: 기기에 Visa, Mastercard, PLUS, Cirrus, UnionPay(은련) 등의 마크가 부착되어 있다면 해외 체크카드/신용카드로 대만 달러(TWD)를 인출할 수 있습니다.",
        atm_li_3: "지원 언어: 모든 ATM은 영어, 일본어, 한국어 등 다국어 인터페이스를 제공합니다.",
        atm_li_4: "수수료: 대만 현지 은행은 보통 건당 약 NT$100의 기기 수수료를 부과합니다(발급 은행에서 해외 이용 수수료를 추가로 부과할 수 있으므로 한 번에 충분한 금액을 인출하는 것을 권장합니다).",
        title_dcc: "⚠️ [중요] DCC(해외원화결제) 함정 주의!",
        desc_dcc: "ATM 현금 인출이나 매장 카드 결제 시, 화면에 '자국 통화'로 결제할지 '대만 달러(TWD)'로 결제할지 묻는다면 반드시 '대만 달러(TWD) / 현지 통화'를 선택하세요! 자국 통화를 선택하면(DCC 적용) 매우 불리한 환율이 적용되어 3%~8%의 숨겨진 수수료를 추가로 지불하게 될 수 있습니다.",
        title_bank: "💱 은행 창구 환전",
        desc_bank_intro: "보유하고 있는 외화 현찰(미국 달러, 일본 엔화, 유로화 등)을 대만 달러로 환전해야 하는 경우, 디화제에 외환 업무를 제공하는 은행이 있습니다.",
        bank_li_1: "제일은행(First Bank) 다다오청 지점: 타이베이시 다퉁구 디화제 1단 63호 (하해성황묘 대각선 맞은편)",
        bank_li_2: "영업시간: 평일(월~금) 09:00 - 15:30. 주말 및 공휴일 휴무.",
        bank_li_3: "주의사항: 대만의 은행에서 환전 업무를 처리할 때는 반드시 여권 원본을 제시해야 합니다. 꼭 소지하시기 바랍니다. 이 지점은 이중 언어 서비스를 지원하여 의사소통이 편리합니다.",
        title_machine: "💡 여행객 맞춤: 무인 외화 환전기",
        desc_machine: "다다오청의 많은 관광객을 위해, 은행 영업시간 외에 소액의 현금이 급히 필요한 경우 무인 환전기(예: 신광은행 외화 환전기)를 찾아보세요. 일부 기기는 대만 은행 계좌 없이도 조작할 수 있으며, 미국 달러, 일본 엔화 등 주요 통화를 대만 달러로 바로 환전할 수 있습니다. 화면의 지시에 따라 여권을 스캔하면 완료됩니다.",
    
        nav_emergency: "🚨 긴급 지원",
        intro_emer_title: "🚨 긴급 연락처 및 의료 지원",
        intro_emer_desc: "대만은 매우 안전한 여행지이지만, 갑작스러운 컨디션 난조나 물건 분실 시 당황하지 마세요. 다음 기관에서 다국어 지원 서비스를 제공하고 있습니다.",
        title_hotline: "📞 24시간 무료 지원 핫라인",
        hotline_1_name: "외국인 대만 생활 상담 핫라인:",
        hotline_1_desc: "서비스: 한국어, 영어, 일본어 등 7개 국어 서비스 제공. 비자 문제, 여권 분실, 생활 지원 또는 긴급 상황 발생 시 이 핫라인에 전화하여 안내를 받을 수 있습니다.",
        hotline_2_name: "24시간 관광 상담 핫라인:",
        hotline_2_desc: "서비스: 대만 관광청에서 제공하며 한국어, 영어, 일본어를 지원합니다. 여행 중 의사소통에 어려움을 겪거나 즉각적인 여행 안내가 필요할 때 언제든 전화할 수 있습니다.",
        hotline_3_name: "경찰 및 구급차:",
        hotline_3_desc: "(참고: 연결 후 중국어로 소통하기 어렵다면 'English' 또는 'Korean'이라고 말하여 도움을 요청하세요)",
        title_hospital: "🏥 인근 다국어 지원 병원",
        desc_hospital_intro: "다다오청 주변에서 몸이 불편하여 병원 진료가 필요한 경우, 외국어 소통이 원활하고 가장 가까운 대형 병원은 다음과 같습니다:",
        hosp_li_1: "<strong>타이베이 시립 연합병원 중싱 원구 (Taipei City Hospital - Zhongxing Branch)</strong>",
        hosp_li_2: "<strong>거리:</strong> 다다오청 상권 남쪽에 위치하며, 도보 또는 택시로 약 5~10분 거리에 있습니다.",
        
        hosp_li_4: "<strong>특징:</strong> 응급실(ER)을 갖춘 공립 대형 종합병원입니다. 의사와 간호사 모두 기초 및 심화 수준의 영어 소통 능력을 갖추고 있습니다.",
        title_police: "👮 다다오청 주변 경찰서 (파출소)",
        hosp_li_3: "<strong>주소:</strong> <a href='https://www.google.com/maps/search/?api=1&query=臺北市立聯合醫院中興院區' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>타이베이시 다퉁구 정저우루 145호 📍</a>",
        pol_li_1: "<strong>민성시루 파출소:</strong> 디화제 북단 및 다다오청 부두 근처 (<a href='https://www.google.com/maps/search/?api=1&query=台北市政府警察局大同分局民生西路派出所' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>타이베이시 다퉁구 바오안제 47-1호 📍</a>)",
        pol_li_2: "<strong>옌핑 파출소:</strong> 디화제 남단 및 융러 시장 근처 (<a href='https://www.google.com/maps/search/?api=1&query=台北市政府警察局大同分局延平派出所' target='_blank' style='color: #2980b9; text-decoration: underline; white-space: nowrap;'>타이베이시 다퉁구 옌핑베이루 1단 86호 📍</a>)",


    }
};
// 安全的 localStorage 操作
function safeSetItem(key, value) {
    try {
        safeSetItem(key, value);
    } catch (e) {
        console.warn('localStorage 不可用:', e);
    }
}

function safeGetItem(key, defaultValue) {
    try {
        return safeGetItem(key) || defaultValue;
    } catch (e) {
        console.warn('localStorage 不可用:', e);
        return defaultValue;
    }
}


// 2. 執行語言替換的函數
function changeLanguage(lang) {
    // 找出所有帶有 data-i18n 屬性的標籤
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        // 如果字典檔裡有對應的翻譯，就替換文字
        if (i18n[lang] && i18n[lang][key]) {
            // 🌟 已經將 textContent 改成 innerHTML
            el.innerHTML = i18n[lang][key];
        }
    });

    // 確保下拉選單的值跟著改變
    document.getElementById('lang-select').value = lang;
    
    // 🌟 關鍵：將選擇的語言存入 localStorage，讓換頁時可以記住設定
    safeSetItem('preferredLanguage', lang);
}

// 3. 頁面載入時的初始化設定
document.addEventListener('DOMContentLoaded', () => {
    // 檢查瀏覽器是否已經有記住的語言設定，沒有的話預設為繁體中文 (zh)
    const savedLang = safeGetItem('preferredLanguage') || 'zh';
    changeLanguage(savedLang);

    // 監聽下拉選單的改變事件
    document.getElementById('lang-select').addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });
    // ==========================================
// PWA Service Worker 註冊 (讓網站支援離線讀取)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // 指定剛剛建立的 service-worker.js
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('PWA ServiceWorker 註冊成功！範圍是:', registration.scope);
            })
            .catch(err => {
                console.log('PWA ServiceWorker 註冊失敗:', err);
            });
    });
}
});