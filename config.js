// ==========================================
// config.js - 2026 暑假九州初體驗
// Generated from: 2026暑假九州初體驗.kmz
// Updated: 2026-07-21 依新版 KMZ 更新行程（新增 ORIX 取車、小倉駿河屋/薩莉亞、
//          大野城/春日白水挖寶、Mina天神移至 Day4、Day5 駿河屋博多丸井店）
// ==========================================

// 1. APP 基本設定
window.TRIP_ID = "2026-kyushu-0807";
window.APP_TITLE = "2026 九州初體驗";
window.APP_LOGO = "logo.jpg";
window.DEFAULT_CURRENCY = "JPY";

window.CURRENCY_OPTIONS = [
  { code: "JPY", symbol: "¥", label: "日幣" },
  { code: "TWD", symbol: "NT$", label: "台幣" },
  { code: "USD", symbol: "$", label: "美金" },
];

window.STAY_OPTIONS = ["0 min","30 min","1 hr","1.5 hr","2 hr","2.5 hr","3 hr","4 hr","5 hr","Overnight","-"];

// 2. 主行程資料
window.RAW_KML_DATA = [
  {
    dayId: "day1", date: "8/7 (五)", title: "福岡→北九州", themeColor: "bg-[#E4C2C1]",
    spots: [
      { sid: "sp001", name: "福岡國際機場", lat: 33.5849988, lon: 130.4490906, desc: "JX840 星宇航空 桃園09:35出發 → 13:05抵達福岡。入境+領行李後前往 ORIX 取車。", mapCode: "", driveTime: "", ticket: { adult: 0, child: 0 } },
      { sid: "sp002", name: "ＯＲＩＸ國際線店", lat: 33.582242, lon: 130.442429, desc: "ORIX 租車福岡機場國際線店，取車出發。", mapCode: "", driveTime: "接駁/步行", ticket: { adult: 0, child: 0 } },
      { sid: "sp003", name: "Yamaya Factory Terrace", lat: 33.6319684, lon: 130.5209968, desc: "明太子工廠見學＋直賣所。營業 10:00~17:00", mapCode: "55 752 414*52", driveTime: "國道19分、縣道22分", ticket: { adult: 0, child: 0 } },
      { sid: "sp004", name: "BOOKOFF + Hard Off", lat: 33.6545076, lon: 130.4923254, desc: "福岡挖寶第一站。", mapCode: "13 569 130*24", driveTime: "9分", ticket: { adult: 0, child: 0 } },
      { sid: "sp005", name: "ハードオフ福岡中間店", lat: 33.8180129, lon: 130.7162195, desc: "Hard Off 福岡中間店。", mapCode: "68 536 695*78", driveTime: "40分", ticket: { adult: 0, child: 0 } },
      { sid: "sp006", name: "ART 新田川小倉酒店", lat: 33.879354, lon: 130.880973, desc: "北九州小倉住宿。", mapCode: "16 466 090*23", driveTime: "27分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day2", date: "8/8 (六)", title: "小倉→久留米→佐賀", themeColor: "bg-[#A9BFA8]",
    spots: [
      { sid: "sp036", name: "小倉城", lat: 33.8853, lon: 130.8735, desc: "🏯 小倉城天守閣。8月開館 9:00-20:00（入場至 19:30），年中無休。停車：勝山公園地下駐車場（16 465 520*08，首小時200円，之後每20分100円）。入場料以現場公告為準（令和8年4月起調整）。", mapCode: "16 465 520*08", driveTime: "5分", ticket: { adult: 500, child: 150 } },
      { sid: "sp008", name: "有的有的停車場", lat: 33.8879913, lon: 130.885649, desc: "あるあるCity 停車場，營業 11:00 開始。", mapCode: "16 496 103*00", driveTime: "5分", ticket: { adult: 0, child: 0 } },
      { sid: "sp009", name: "駿河屋 小倉AruaruCity店", lat: 33.8876455, lon: 130.884624, desc: "🧸 絕版 LEGO 救星！中古動漫/絕版模型霸主，AruaruCity 2F/4F，小倉站前步行可達。", mapCode: "", driveTime: "步行1分", ticket: { adult: 0, child: 0 } },
      { sid: "sp010", name: "薩莉亞 小倉站前AruaruCity店", lat: 33.8874016, lon: 130.884736, desc: "午餐：Saizeriya 小倉站前 AruaruCity 店。", mapCode: "", driveTime: "同棟", ticket: { adult: 0, child: 0 } },
      { sid: "sp037", name: "九州國立博物館", lat: 33.5182175, lon: 130.5384608, desc: "🏛 九州國立博物館（太宰府市石坂4-7-2）。9:30-17:00（末入館 16:30），週一休（8/8 週六正常開館）。★特別展「氷河期展〜人類が見た4万年前の世界〜」2026/7/18-9/27 展出中，8/8(六)夜間開館至 19:00（入館至 18:30）。特別展一般 ¥2,000（前售 ¥1,800）、高大生 ¥1,000（前售 ¥800）、小中生 ¥600（前售 ¥400）。太宰府IC 下交流道約 10 分，館外停車場每次 ¥500。", mapCode: "55 334 716*41", driveTime: "1小時", ticket: { adult: 2000, child: 600 } },
      { sid: "sp011", name: "BOOKOFF 大野城三笠川店", lat: 33.5468162, lon: 130.4828346, desc: "大野城 BOOKOFF，旁邊有超市。", mapCode: "13 178 249*77", driveTime: "15分", ticket: { adult: 0, child: 0 } },
      { sid: "sp012", name: "Hard Off & Hobby Off 春日白水店", lat: 33.5092061, lon: 130.4496045, desc: "春日白水 Hard Off + Hobby Off，有樂高！", mapCode: "13 024 636*17", driveTime: "16分", ticket: { adult: 0, child: 0 } },
      { sid: "sp014", name: "BOOKOFF上津久留米店", lat: 33.2849572, lon: 130.5110566, desc: "久留米 BOOKOFF。", mapCode: "37 406 708*24", driveTime: "30分", ticket: { adult: 0, child: 0 } },
      { sid: "sp016", name: "APA酒店 佐賀站南口", lat: 33.2629778, lon: 130.2996529, desc: "佐賀站旁住宿。旁邊停車場1泊1,000円(41 532 501*11)", mapCode: "87 351 127*20", driveTime: "45分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day3", date: "8/9 (日)", title: "佐賀→佐世保", themeColor: "bg-[#A2C4C9]",
    spots: [
      { sid: "sp017", name: "佐賀熱氣球博物館", lat: 33.2524136, lon: 130.3004143, desc: "佐賀國際熱氣球節常設展。", mapCode: "87 291 789*40", driveTime: "", ticket: { adult: 0, child: 0 } },
      { sid: "sp018", name: "BOOKOFF PLUS 佐賀南部繞道店", lat: 33.2390376, lon: 130.3007156, desc: "大型 BOOKOFF。", mapCode: "87 261 250*14", driveTime: "6分", ticket: { adult: 0, child: 0 } },
      { sid: "sp015", name: "Hard Off 佐賀店", lat: 33.2212552, lon: 130.3077721, desc: "佐賀 Hard Off。", mapCode: "87 202 126*02", driveTime: "4分", ticket: { adult: 0, child: 0 } },
      { sid: "sp019", name: "BOOKOFF Saga Nabeshima", lat: 33.2652133, lon: 130.2718048, desc: "鍋島 BOOKOFF。", mapCode: "87 347 386*40", driveTime: "15分", ticket: { adult: 0, child: 0 } },
      { sid: "sp020", name: "佐賀縣立宇宙科學館 夢銀河", lat: 33.1791421, lon: 130.035404, desc: "互動體驗型宇宙科學館。", mapCode: "104 349 105*75", driveTime: "35分", ticket: { adult: 0, child: 0 } },
      { sid: "sp022", name: "未確認生物UMA展（島瀬美術センター）", lat: 33.17277, lon: 129.72066, desc: "UMA 未確認生物展 8/1~8/31 無休。10:00-18:00（17:30 最後入館）。大人當日1,500円/前售1,300円、國高中生1,000円、小學生以下免費。等身大模型+拍照區，可手機拍照。距飯店步行5分。", mapCode: "", driveTime: "45分", ticket: { adult: 1500, child: 0 } },
      { sid: "sp023", name: "佐世保中央飯店", lat: 33.1702927, lon: 129.7231849, desc: "佐世保市區住宿。", mapCode: "89 027 031*61", driveTime: "步行5分", ticket: { adult: 0, child: 0 } },
      { sid: "sp024", name: "おもちゃのあおき 四ヶ町アーケード本島店", lat: 33.17091, lon: 129.72166, desc: "老字號玩具店，四ヶ町商店街拱廊內，飯店旁。晚餐後散步順逛。", mapCode: "", driveTime: "步行2分", ticket: { adult: 0, child: 0 } },
      { sid: "sp021", name: "Hard Off Sasebo", lat: 33.1586631, lon: 129.7642449, desc: "佐世保 Hard Off。", mapCode: "307 556 599*63", driveTime: "開車8分（可選，營業至20:00）", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day4", date: "8/10 (一)", title: "佐世保→博多", themeColor: "bg-[#E8D595]",
    spots: [
      { sid: "sp025", name: "九十九島水族館 海洋kirara", lat: 33.1614464, lon: 129.6790753, desc: "以水母聞名的九十九島水族館。", mapCode: "307 546 892*73", driveTime: "13分", ticket: { adult: 0, child: 0 } },
      { sid: "sp026", name: "BOOKOFF AcrossPlaza佐世保", lat: 33.1595916, lon: 129.74322, desc: "佐世保大型 BOOKOFF。", mapCode: "307 554 673*13", driveTime: "16分", ticket: { adult: 0, child: 0 } },
      { sid: "sp027", name: "すき家 35號佐世保大和店", lat: 33.1590673, lon: 129.7513796, desc: "午餐：すき家牛丼，AcrossPlaza 旁。", mapCode: "", driveTime: "3分", ticket: { adult: 0, child: 0 } },
      { sid: "sp028", name: "伊萬里夢Misaki公園（滑草）", lat: 33.3469052, lon: 129.8502744, desc: "伊萬里滑草親子設施。", mapCode: "458 357 219*57", driveTime: "50分", ticket: { adult: 0, child: 0 } },
      { sid: "sp029", name: "BOOKOFF Karatsu Store", lat: 33.4400913, lon: 129.9643643, desc: "唐津 BOOKOFF。", mapCode: "182 370 389*11", driveTime: "27分", ticket: { adult: 0, child: 0 } },
      { sid: "sp030", name: "Times停車場（BOOKOFF旁）", lat: 33.5942146, lon: 130.3988619, desc: "13 318 784*18 再往前。停車後步行至天神 BOOKOFF。", mapCode: "13 318 784*18", driveTime: "約60分", ticket: { adult: 0, child: 0 } },
      { sid: "sp031", name: "BOOKOFF SUPER BAZAAR Mina天神", lat: 33.5929742, lon: 130.3983736, desc: "九州最大 BOOKOFF，天神挖寶！", mapCode: "", driveTime: "步行1分", ticket: { adult: 0, child: 0 } },
      { sid: "sp032", name: "新大谷特約停車場 Grand Parking", lat: 33.5835175, lon: 130.4066823, desc: "博多新大谷飯店特約停車場（Tsukigime Parking）。", mapCode: "", driveTime: "12分", ticket: { adult: 0, child: 0 } },
      { sid: "sp033", name: "博多新大谷飯店", lat: 33.5830614, lon: 130.4063095, desc: "博多站旁高級飯店。特約停車場：Grand Parking", mapCode: "13 289 511*86", driveTime: "步行4分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day5", date: "8/11 (二)", title: "博多→回家", themeColor: "bg-[#D4A5A5]",
    spots: [
      { sid: "sp034", name: "駿河屋 博多丸井店", lat: 33.5888254, lon: 130.4199115, desc: "🧸 市區最後補刀！動漫/模型/玩具地毯式二手店，博多站正對面 OIOI 6F。", mapCode: "", driveTime: "步行", ticket: { adult: 0, child: 0 } },
      { sid: "sp035", name: "福岡國際機場", lat: 33.5849988, lon: 130.4490906, desc: "還車 → JX841 14:25 出發 → 15:45 抵達桃園", mapCode: "", driveTime: "", ticket: { adult: 0, child: 0 } },
    ],
  },
];

// 3. 願望清單（pocket_list + 二手玩具隱藏店）
window.WISHLIST_DATA = [
  { name: "BOOKOFF SUPER BAZAAR Mina Tenjin", lat: 33.5929742, lon: 130.3983736, desc: "九州最大 BOOKOFF（已排入 8/10 行程）。", mapCode: "" },
  { name: "BOOKOFF PLUS 佐賀南部繞道店", lat: 33.2390376, lon: 130.3007156, desc: "佐賀大型 BOOKOFF（已排入 8/9 行程）。", mapCode: "87 261 250*14" },
  { name: "BOOKOFF 大野城三笠川店", lat: 33.5468162, lon: 130.4828346, desc: "大野城三笠川 BOOKOFF（已排入 8/8 行程），旁邊有超市。", mapCode: "13 178 249*77" },
  { name: "BOOKOFF（北九州）", lat: 33.8870499, lon: 130.8417523, desc: "北九州備選 BOOKOFF 分店。", mapCode: "" },
  { name: "BOOKOFF Iizuka（飯塚）", lat: 33.6247411, lon: 130.66996, desc: "飯塚 BOOKOFF，旁邊有すき家。", mapCode: "" },
  { name: "超級 2nd STREET 箱崎店", lat: 33.6201387, lon: 130.4178439, desc: "🧸 隱藏店：BALMUDA 二手家電機率極高！全日本少數 Super 級旗艦店，龐大生活/廚房家電專區。機場→北九州必經（東區）。", mapCode: "" },
  { name: "BOOKOFF SUPER BAZAAR 樂市街道久留米店", lat: 33.319644, lon: 130.5427305, desc: "🧸🔌 隱藏店：雙料重裝！最高規格綜合百貨型巨型店，二手樂高積木牆＋家電專區數倍大。久留米市區，往上津店順路。", mapCode: "" },
  { name: "マンガ倉庫 佐賀店", lat: 33.2560195, lon: 130.3177367, desc: "🧸 隱藏店：九州最強複合二手店！巨大玩具/公仔/懷舊盒組專區。佐賀市區國道208旁，非常順路。", mapCode: "" },
  { name: "Mandarake 福岡店", lat: 33.5901007, lon: 130.3940327, desc: "🧸 隱藏店：骨董/絕版玩具終極聖殿。天神大名區，最後一天市區步行可到。", mapCode: "" },
];

// 4. 備用餐廳（すき家）
window.BACKUP_RESTAURANTS = [
  { name: "すき家 小倉北神岳店", lat: 33.8722504, lon: 130.892075, mapCode: "" },
  { name: "すき家 佐賀本庄店", lat: 33.2391727, lon: 130.2991893, mapCode: "" },
  { name: "すき家 35號佐世保大和店", lat: 33.1590673, lon: 129.7513796, mapCode: "" },
];

// 5. 航班資訊
window.FLIGHT_INFO = {
  outbound: {
    flight: "JX840",
    airline: "星宇航空 STARLUX",
    aircraft: "A330-900neo",
    from: "TPE 桃園 T1",
    to: "FUK 福岡 國際航廈",
    dep: "09:35",
    arr: "13:05",
    date: "8/7 (五)",
    duration: "2h30m",
  },
  inbound: {
    flight: "JX841",
    airline: "星宇航空 STARLUX",
    aircraft: "A330-900neo",
    from: "FUK 福岡 國際航廈",
    to: "TPE 桃園 T1",
    dep: "14:25",
    arr: "15:45",
    date: "8/11 (二)",
    duration: "2h30m",
  },
  baggage: {
    cabin: "經濟艙",
    checkedPerPerson: "2件 × 23kg",
    checkedSizeLimit: "三邊總和 ≤ 158cm",
    carryOnPerPerson: "手提1件 + 個人物品1件，共 ≤ 7kg",
    carryOnSizeLimit: "55×40×20cm",
    family: [
      { type: "成人", count: 4, checkedPieces: 8, checkedKg: 184 },
      { type: "兒童(佔位)", count: 2, checkedPieces: 4, checkedKg: 92 },
    ],
    totalCheckedPieces: 12,
    totalCheckedKg: 276,
    totalCarryOnKg: 42,
    note: "同訂位代號旅客可共享託運額度。回程 BOOKOFF 戰利品記得預留空間！",
    source: "星宇航空官網 2026 年規定",
  },
};

// 6. 住宿資訊
window.HOTEL_INFO = [
  { day: "8/7", name: "ART 新田川小倉酒店", location: "北九州小倉", desc: "小倉站周邊商務飯店", lat: 33.879354, lon: 130.880973, mapCode: "16 466 090*23",
    jpName: "アートホテル小倉ニュータガワ", zip: "〒802-0082", jpAddress: "福岡県北九州市小倉北区古船場町3-46", tel: "093-521-7000" },
  { day: "8/8", name: "APA酒店 佐賀站南口", location: "佐賀市", desc: "佐賀站旁 APA 商務飯店", lat: 33.2629778, lon: 130.2996529, mapCode: "87 351 127*20",
    jpName: "アパホテル〈佐賀駅南口〉", zip: "〒840-0801", jpAddress: "佐賀県佐賀市駅前中央1-164", tel: "0952-25-1111" },
  { day: "8/9", name: "佐世保中央飯店", location: "佐世保市", desc: "佐世保市區住宿", lat: 33.1702927, lon: 129.7231849, mapCode: "89 027 031*61",
    jpName: "アートホテル佐世保セントラル（旧セントラルホテル佐世保）", zip: "〒857-0872", jpAddress: "長崎県佐世保市上京町3番2号", tel: "0956-25-0001",
    note: "停車位不可預約，附近私人停車場每日 ¥1,000。房型 Japanese Western Style Room（2 單人床＋3 日式床舖），含早餐。訂房人 Chen Jung Fang。" },
  { day: "8/10", name: "博多新大谷飯店", location: "福岡博多", desc: "博多站旁高級飯店", lat: 33.5830614, lon: 130.4063095, mapCode: "13 289 511*86",
    jpName: "ホテルニューオータニ博多", zip: "〒810-0004", jpAddress: "福岡県福岡市中央区渡辺通1-1-2", tel: "092-714-1111" },
];

// 6-1. 出發前／臨櫃核對清單
window.CHECKLIST = [
  {
    id: "docs",
    title: "證件文件（缺一不可，租車櫃檯會逐項檢查）",
    icon: "🛂",
    items: [
      { id: "passport", text: "台灣護照正本（每人一本，效期 6 個月以上）", critical: true },
      { id: "license", text: "台灣汽車駕照【正本】（主駕與副駕都要帶，確認未過期）", critical: true },
      { id: "jptrans", text: "駕照【日文譯本】（監理所申請的 A4 紙）※ 國際駕照在日本不通用", critical: true },
      { id: "creditcard", text: "主駕本人名下信用卡（租車付款用，不可用他人卡）", critical: true },
      { id: "rentalvoucher", text: "ORIX 租車預約確認憑證（截圖或列印）", critical: true },
      { id: "eticket", text: "星宇 JX840／JX841 電子機票、訂位代號" },
      { id: "hotelvoucher", text: "四晚飯店訂房確認信（截圖存離線）" },
      { id: "insurance", text: "旅遊平安險／不便險保單號碼與客服電話" },
      { id: "visitjapan", text: "Visit Japan Web 入境／海關 QR Code（先截圖）" },
      { id: "copies", text: "護照影本或翻拍（與正本分開放）" },
    ],
  },
  {
    id: "drive",
    title: "自駕相關",
    icon: "🚗",
    items: [
      { id: "mapcode", text: "本 App 可離線開啟（各景點 MapCode 都在裡面）" },
      { id: "etc", text: "確認是否加租 ETC 卡（高速公路過路費）" },
      { id: "childseat", text: "確認兒童安全座椅數量（日本 6 歲以下強制）", critical: true },
      { id: "phoneholder", text: "手機支架、車用充電線（Type-C／Lightning）" },
      { id: "parkingcash", text: "停車場零錢（很多機器只吃 100 円硬幣與千円鈔）" },
    ],
  },
  {
    id: "money",
    title: "金錢與通訊",
    icon: "💴",
    items: [
      { id: "jpy", text: "日圓現金（BOOKOFF、停車場、小店多為現金）" },
      { id: "cards", text: "信用卡 2 張以上（分開放，避免單卡被鎖）" },
      { id: "esim", text: "eSIM／網路吃到飽（出發前先裝好、確認可切換）" },
      { id: "powerbank", text: "行動電源（須手提上機，不可託運）", critical: true },
      { id: "plug", text: "日本插座為 A 型 100V，帶延長線／多孔充電器" },
    ],
  },
  {
    id: "life",
    title: "生活與孩子",
    icon: "🧳",
    items: [
      { id: "meds", text: "常備藥（暈車、腸胃、退燒、OK繃）" },
      { id: "raingear", text: "雨具（8 月九州多雷陣雨與颱風）" },
      { id: "cooling", text: "防曬、涼感巾、補水電解質（8 月非常熱）" },
      { id: "snacks", text: "孩子的零食與水壺" },
      { id: "bags", text: "空的摺疊行李袋／購物袋（裝 BOOKOFF 戰利品）" },
      { id: "luggagescale", text: "行李秤（回程託運 23kg 限重）" },
    ],
  },
  {
    id: "return",
    title: "回程當天（8/11）",
    icon: "✈️",
    items: [
      { id: "fuel", text: "還車前加滿油，保留加油收據", critical: true },
      { id: "carcheck", text: "車內最後巡一次（後車廂、置物箱、椅背袋）" },
      { id: "returntime", text: "12:00 前抵達 ORIX 國際線店還車" },
      { id: "taxfree", text: "免稅單據備妥（海關可能查驗）" },
    ],
  },
];

// 7. 租車資訊
window.CAR_RENTAL_INFO = {
  company: "ORIX 租車（オリックスレンタカー）",
  pickupDate: "8/7 (五)",
  pickupTime: "13:30",
  pickupLocation: "ＯＲＩＸ國際線店（福岡機場國際航廈旁）",
  returnDate: "8/11 (二)",
  returnTime: "12:00",
  returnLocation: "ＯＲＩＸ國際線店（福岡機場國際航廈旁）",
  carType: "待確認",
  note: "導航請使用 MapCode",
};
const e = React.createElement;
window.Icons = {
  Plane: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M2 12h5" }),
      e("path", { d: "M13 12h3" }),
      e("path", {
        d: "M19.74 7.33a2.3 2.3 0 0 1 2.93 2.93l-3.33 3.33a2.3 2.3 0 0 1-3.25 0l-7.34-7.34a2.3 2.3 0 0 1 0-3.25l3.33-3.33z",
      }),
      e("path", { d: "M14.66 14.66 9 22H2l2.5-9" }),
      e("path", { d: "M7 17l-5 5" })
    ),
  Smile: (p) =>
    e(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p },
      e("circle", { cx: 12, cy: 12, r: 10 }),
      e("path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }),
      e("line", { x1: 9, x2: 9.01, y1: 9, y2: 9 }),
      e("line", { x1: 15, x2: 15.01, y1: 9, y2: 9 })
    ),
  List: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("line", { x1: 8, x2: 21, y1: 6, y2: 6 }), e("line", { x1: 8, x2: 21, y1: 12, y2: 12 }), e("line", { x1: 8, x2: 21, y1: 18, y2: 18 }), e("line", { x1: 3, x2: 3.01, y1: 6, y2: 6 }), e("line", { x1: 3, x2: 3.01, y1: 12, y2: 12 }), e("line", { x1: 3, x2: 3.01, y1: 18, y2: 18 })),
  LayoutGrid: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { width: 7, height: 7, x: 3, y: 3, rx: 1 }), e("rect", { width: 7, height: 7, x: 14, y: 3, rx: 1 }), e("rect", { width: 7, height: 7, x: 14, y: 14, rx: 1 }), e("rect", { width: 7, height: 7, x: 3, y: 14, rx: 1 })),
  Calculator: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { width: 16, height: 20, x: 4, y: 2, rx: 2 }), e("line", { x1: 8, x2: 16, y1: 6, y2: 6 }), e("line", { x1: 16, x2: 16, y1: 14, y2: 18 }), e("path", { d: "M16 10h.01" }), e("path", { d: "M12 10h.01" }), e("path", { d: "M8 10h.01" }), e("path", { d: "M12 14h.01" }), e("path", { d: "M8 14h.01" }), e("path", { d: "M12 18h.01" }), e("path", { d: "M8 18h.01" })),
  Clock: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("circle", { cx: 12, cy: 12, r: 10 }), e("polyline", { points: "12 6 12 12 16 14" })),
  Wallet: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4" }), e("path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5" }), e("path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z" })),
  MapPin: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), e("circle", { cx: 12, cy: 10, r: 3 })),
  Ticket: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), e("path", { d: "M13 5v2" }), e("path", { d: "M13 17v2" }), e("path", { d: "M13 11v2" })),
  X: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M18 6 6 18" }), e("path", { d: "m6 6 12 12" })),
  Settings: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), e("circle", { cx: 12, cy: 12, r: 3 })),
  Search: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("circle", { cx: 11, cy: 11, r: 8 }), e("path", { d: "m21 21-4.3-4.3" })),
  Navigation: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("polygon", { points: "3 11 22 2 13 21 11 13 3 11" })),
  ArrowDown: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m6 9 6 6 6-6" })),
  Mail: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { width: 20, height: 16, x: 2, y: 4, rx: 2 }), e("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })),
  Car: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }), e("circle", { cx: 7, cy: 17, r: 2 }), e("path", { d: "M9 17h6" }), e("circle", { cx: 17, cy: 17, r: 2 })),
  Footprints: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" }), e("path", { d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" })),
  Hotel: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M10 22v-6.57" }), e("path", { d: "M12 11h.01" }), e("path", { d: "M12 7h.01" }), e("path", { d: "M14 15.43V22" }), e("path", { d: "M15 16a5 5 0 0 0-6 0" }), e("path", { d: "M16 11h.01" }), e("path", { d: "M16 7h.01" }), e("path", { d: "M8 11h.01" }), e("path", { d: "M8 7h.01" }), e("rect", { x: 4, y: 2, width: 16, height: 20, rx: 2 })),
  Store: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" }), e("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }), e("path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }), e("path", { d: "M2 7h20" }), e("path", { d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" })),
  Fuel: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("line", { x1: 3, x2: 15, y1: 22, y2: 22 }), e("line", { x1: 4, x2: 14, y1: 9, y2: 9 }), e("path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }), e("path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" })),
  Shield: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })),
  Bot: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M12 8V4H8" }), e("rect", { width: 16, height: 12, x: 4, y: 8, rx: 2 }), e("path", { d: "M2 14h2" }), e("path", { d: "M20 14h2" }), e("path", { d: "M15 13v2" }), e("path", { d: "M9 13v2" })),
  Camera: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }), e("circle", { cx: 12, cy: 13, r: 3 })),
  Image: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }), e("circle", { cx: 9, cy: 9, r: 2 }), e("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })),
  ShoppingBag: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }), e("path", { d: "M3 6h18" }), e("path", { d: "M16 10a4 4 0 0 1-8 0" })),
  Coffee: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M10 2v2" }), e("path", { d: "M14 2v2" }), e("path", { d: "M16 8a1 1 0 0 1 1 1v5.917a3 3 0 0 1-2.556 2.967l-.476.07A7.06 7.06 0 0 1 13 18H9a7.06 7.06 0 0 1-.968-.046l-.476-.07A3 3 0 0 1 5 14.917V9a1 1 0 0 1 1-1Z" }), e("path", { d: "M16 8h2a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1-2.5 2.5H16" }), e("path", { d: "M6 2v2" }), e("path", { d: "M4 22h16" })),
  Loader2: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })),
  Map: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" }), e("line", { x1: 9, x2: 9, y1: 3, y2: 18 }), e("line", { x1: 15, x2: 15, y1: 6, y2: 21 })),
  AlertTriangle: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), e("path", { d: "M12 9v4" }), e("path", { d: "M12 17h.01" })),
  Star: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })),
  Heart: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" })),
  Compass: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("circle", { cx: 12, cy: 12, r: 10 }), e("polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" })),
  Sparkles: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }), e("path", { d: "M5 3v4" }), e("path", { d: "M19 17v4" }), e("path", { d: "M3 5h4" }), e("path", { d: "M17 19h4" })),
  Edit: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })),
  Utensils: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }), e("path", { d: "M7 2v20" }), e("path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })),
  LocateFixed: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("line", { x1: 2, x2: 5, y1: 12, y2: 12 }), e("line", { x1: 19, x2: 22, y1: 12, y2: 12 }), e("line", { x1: 12, x2: 12, y1: 2, y2: 5 }), e("line", { x1: 12, x2: 12, y1: 19, y2: 22 }), e("circle", { cx: 12, cy: 12, r: 7 }), e("circle", { cx: 12, cy: 12, r: 3 })),
  ShoppingBasket: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "m5 11 4-7" }), e("path", { d: "m19 11-4-7" }), e("path", { d: "M2 11h20" }), e("path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" }), e("path", { d: "m9 11 1 9" }), e("path", { d: "m15 11-1 9" })),
  Gift: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("rect", { x: 3, y: 8, width: 18, height: 4, rx: 1 }), e("path", { d: "M12 8v13" }), e("path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" })),
  Plus: (p) => e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p }, e("path", { d: "M5 12h14" }), e("path", { d: "M12 5v14" })),
};

// 9. 購物清單
window.SHOPPING_LIST = [
  { id: "s1", name: "LEGO Ninjago 70654", category: "toys", keywords: ["BOOKOFF","Hard Off","Hobby Off","Off House","ハードオフ","ブックオフ","オフハウス","ホビーオフ","SUPER BAZAAR","Mina天神","トイザらス","おもちゃ","リサイクル"], icon: "🧱", note: "忍者系列飛行船，已絕版，二手找", bought: false },
  { id: "s2", name: "太田胃散", category: "medicine", keywords: ["藥妝","ドラッグストア","マツモトキヨシ","ウエルシア","サンドラッグ","コスモス","ツルハ","スギ薬局","ダイコクドラッグ"], icon: "💊", note: "家庭常備藥，大罐裝最划算", bought: false },
  { id: "s3", name: "DARIYA SALON de PRO 5號 白髮染髮霜", category: "cosmetics", keywords: ["藥妝","ドラッグストア","マツモトキヨシ","ウエルシア","サンドラッグ","コスモス","ツルハ","スギ薬局","ダイコクドラッグ"], icon: "💇", note: "快速染髮系列，5號自然棕", bought: false },
  { id: "s4", name: "二手 BALMUDA 微波烤箱", category: "electronics", keywords: ["Hard Off","BOOKOFF","ハードオフ","ブックオフ","Off House","オフハウス","SUPER BAZAAR","Mina天神","リサイクル","セカンドストリート"], icon: "🔌", note: "The Range 或 The Toaster，看品相再買", bought: false },
];

// 10. 沿途連鎖店快速搜尋（v3：移除九州無店的 4 間）
window.CHAIN_STORES = [
  { cat: "丼飯", name: "すき家", icon: "🥩", query: "すき家" },
  { cat: "丼飯", name: "吉野家", icon: "🐂", query: "吉野家" },
  { cat: "丼飯", name: "松屋", icon: "🍛", query: "松屋+牛丼" },
  { cat: "丼飯", name: "なか卯", icon: "🐔", query: "なか卯" },
  { cat: "超市", name: "AEON", icon: "🛒", query: "イオン+AEON+MaxValu" },
  { cat: "超市", name: "ロピア", icon: "🥩", query: "ロピア+LOPIA" },
  { cat: "超市", name: "業務超市", icon: "📦", query: "業務スーパー" },
  { cat: "超市", name: "SEIYU", icon: "🟢", query: "西友+SEIYU" },
];

// 11. 預計算連鎖店繞路距離（由 chain-calculator v4.2 產生，Places API New）
// 產生時間：2026/8/8 上午12:51:22
// 增量：新算 30 段、沿用 0 段、短程留空 0 段、清除孤兒 9 段
// 優化：languageCode=ja, includedType過濾, 動態分段搜尋, 負數修正, 座標導航
window.CHAIN_ROUTES = {
  "福岡國際機場→ＯＲＩＸ國際線店": {
    "d1": 1191,
    "stores": [
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 1592,
        "detour": 401,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 博多半道橋店",
        "d2": 2558,
        "detour": 1367,
        "lat": 33.578486399999996,
        "lng": 130.4396598
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 東光寺店",
        "d2": 3095,
        "detour": 1904,
        "lat": 33.5753817,
        "lng": 130.43645510000002
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 福岡博多駅南店",
        "d2": 4534,
        "detour": 3343,
        "lat": 33.575617300000005,
        "lng": 130.42810699999998
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 博多駅南店",
        "d2": 5694,
        "detour": 4503,
        "lat": 33.586853999999995,
        "lng": 130.42307399999999
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー博多住吉店",
        "d2": 8224,
        "detour": 7033,
        "lat": 33.5831369,
        "lng": 130.41751399999998
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール福岡",
        "d2": 13870,
        "detour": 12679,
        "lat": 33.5970724,
        "lng": 130.480909
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 17594,
        "detour": 16403,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "ＯＲＩＸ國際線店→Yamaya Factory Terrace": {
    "d1": 18958,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 粕屋仲原店",
        "d2": 12940,
        "detour": 0,
        "lat": 33.610943899999995,
        "lng": 130.4589404
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 粕屋仲原店",
        "d2": 12940,
        "detour": 0,
        "lat": 33.6104848,
        "lng": 130.45659419999998
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 吉塚店",
        "d2": 18829,
        "detour": 0,
        "lat": 33.6066407,
        "lng": 130.4233243
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール福岡",
        "d2": 14672,
        "detour": 0,
        "lat": 33.5970724,
        "lng": 130.480909
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 志免町店",
        "d2": 17396,
        "detour": 0,
        "lat": 33.588166699999995,
        "lng": 130.4778414
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 19151,
        "detour": 193,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー呉服町店",
        "d2": 20025,
        "detour": 1067,
        "lat": 33.5979522,
        "lng": 130.41026689999998
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 25814,
        "detour": 6856,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "Yamaya Factory Terrace→BOOKOFF + Hard Off": {
    "d1": 5459,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０１号線篠栗店",
        "d2": 6557,
        "detour": 1098,
        "lat": 33.627868,
        "lng": 130.504676
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 粕屋仲原店",
        "d2": 15224,
        "detour": 9765,
        "lat": 33.610943899999995,
        "lng": 130.4589404
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 粕屋仲原店",
        "d2": 15354,
        "detour": 9895,
        "lat": 33.6106395,
        "lng": 130.4585456
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール福岡",
        "d2": 15774,
        "detour": 10315,
        "lat": 33.5970724,
        "lng": 130.480909
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 福岡箱崎店（マイカリー食堂併設）",
        "d2": 26583,
        "detour": 21124,
        "lat": 33.614498999999995,
        "lng": 130.414108
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー呉服町店",
        "d2": 29560,
        "detour": 24101,
        "lat": 33.5979522,
        "lng": 130.41026689999998
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 33549,
        "detour": 28090,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 36904,
        "detour": 31445,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      }
    ]
  },
  "BOOKOFF + Hard Off→ハードオフ福岡中間店": {
    "d1": 37134,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ３号線宗像店",
        "d2": 37973,
        "detour": 839,
        "lat": 33.786,
        "lng": 130.55509999999998
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール福津",
        "d2": 38085,
        "detour": 951,
        "lat": 33.753409999999995,
        "lng": 130.4941102
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 宗像赤間店",
        "d2": 40037,
        "detour": 2903,
        "lat": 33.8092381,
        "lng": 130.5658081
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー古賀中央店",
        "d2": 41275,
        "detour": 4141,
        "lat": 33.7338473,
        "lng": 130.475048
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 飯塚片島店",
        "d2": 50605,
        "detour": 13471,
        "lat": 33.6446045,
        "lng": 130.6850202
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 飯塚太郎丸店",
        "d2": 51836,
        "detour": 14702,
        "lat": 33.6082664,
        "lng": 130.6704054
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー呉服町店",
        "d2": 64679,
        "detour": 27545,
        "lat": 33.5979522,
        "lng": 130.41026689999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 72023,
        "detour": 34889,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      }
    ]
  },
  "ハードオフ福岡中間店→ART 新田川小倉酒店": {
    "d1": 19916,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 八幡東枝光店",
        "d2": 21580,
        "detour": 1664,
        "lat": 33.8775629,
        "lng": 130.81360189999998
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 穴生店",
        "d2": 22910,
        "detour": 2994,
        "lat": 33.858806,
        "lng": 130.74295899999998
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ３号線黒崎西店",
        "d2": 23241,
        "detour": 3325,
        "lat": 33.863780399999996,
        "lng": 130.7491766
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "（株）西鉄ストア スピナ戸畑店惣菜・東洋食品",
        "d2": 23883,
        "detour": 3967,
        "lat": 33.899001999999996,
        "lng": 130.83996
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール八幡東",
        "d2": 26057,
        "detour": 6141,
        "lat": 33.8705133,
        "lng": 130.8108267
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 八幡東ナフコ店",
        "d2": 26827,
        "detour": 6911,
        "lat": 33.8702451,
        "lng": 130.80045959999998
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 小倉南方店",
        "d2": 29236,
        "detour": 9320,
        "lat": 33.8322603,
        "lng": 130.8624109
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 128283,
        "detour": 108367,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      }
    ]
  },
  "小倉城→有的有的停車場": {
    "d1": 2099,
    "stores": [
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 北九州リバーウォーク店",
        "d2": 2104,
        "detour": 5,
        "lat": 33.885809,
        "lng": 130.8754882
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 小倉京町店",
        "d2": 2151,
        "detour": 52,
        "lat": 33.885505,
        "lng": 130.8810278
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 小倉駅前店（松のや併設）",
        "d2": 2581,
        "detour": 482,
        "lat": 33.886175,
        "lng": 130.880862
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 三萩野店",
        "d2": 5126,
        "detour": 3027,
        "lat": 33.872218,
        "lng": 130.8768778
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 小倉北神岳店",
        "d2": 6070,
        "detour": 3971,
        "lat": 33.8722926,
        "lng": 130.8921533
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "（株）西鉄ストア スピナ戸畑店惣菜・東洋食品",
        "d2": 9342,
        "detour": 7243,
        "lat": 33.899001999999996,
        "lng": 130.83996
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール八幡東",
        "d2": 21460,
        "detour": 19361,
        "lat": 33.8705133,
        "lng": 130.8108267
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 149714,
        "detour": 147615,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      }
    ]
  },
  "有的有的停車場→駿河屋 小倉AruaruCity店": {
    "d1": 106,
    "stores": [
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 小倉駅前店（松のや併設）",
        "d2": 2076,
        "detour": 1970,
        "lat": 33.886175,
        "lng": 130.880862
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 小倉京町店",
        "d2": 2088,
        "detour": 1982,
        "lat": 33.885505,
        "lng": 130.8810278
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 北九州リバーウォーク店",
        "d2": 3841,
        "detour": 3735,
        "lat": 33.885809,
        "lng": 130.8754882
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 小倉北神岳店",
        "d2": 5401,
        "detour": 5295,
        "lat": 33.8722926,
        "lng": 130.8921533
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 小倉大畠店",
        "d2": 6568,
        "detour": 6462,
        "lat": 33.874361,
        "lng": 130.89910290000003
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "（株）西鉄ストア スピナ戸畑店惣菜・東洋食品",
        "d2": 11472,
        "detour": 11366,
        "lat": 33.899001999999996,
        "lng": 130.83996
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール八幡東",
        "d2": 22015,
        "detour": 21909,
        "lat": 33.8705133,
        "lng": 130.8108267
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 152232,
        "detour": 152126,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      }
    ]
  },
  "駿河屋 小倉AruaruCity店→薩莉亞 小倉站前AruaruCity店": {
    "d1": 283,
    "stores": [
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 小倉駅前店（松のや併設）",
        "d2": 1896,
        "detour": 1613,
        "lat": 33.886175,
        "lng": 130.880862
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 小倉京町店",
        "d2": 2112,
        "detour": 1829,
        "lat": 33.885505,
        "lng": 130.8810278
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 北九州リバーウォーク店",
        "d2": 3925,
        "detour": 3642,
        "lat": 33.885809,
        "lng": 130.8754882
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 小倉北神岳店",
        "d2": 5249,
        "detour": 4966,
        "lat": 33.8722926,
        "lng": 130.8921533
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 小倉大畠店",
        "d2": 6416,
        "detour": 6133,
        "lat": 33.874361,
        "lng": 130.89910290000003
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "（株）西鉄ストア スピナ戸畑店惣菜・東洋食品",
        "d2": 11384,
        "detour": 11101,
        "lat": 33.899001999999996,
        "lng": 130.83996
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール八幡東",
        "d2": 17111,
        "detour": 16828,
        "lat": 33.8705133,
        "lng": 130.8108267
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 152173,
        "detour": 151890,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      }
    ]
  },
  "薩莉亞 小倉站前AruaruCity店→九州國立博物館": {
    "d1": 81820,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 200号直方店",
        "d2": 68756,
        "detour": 0,
        "lat": 33.751797,
        "lng": 130.7389489
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 もちだんご村ＭＡＬＬ店",
        "d2": 68525,
        "detour": 0,
        "lat": 33.738074,
        "lng": 130.74522
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 飯塚片島店",
        "d2": 68710,
        "detour": 0,
        "lat": 33.6446045,
        "lng": 130.6850202
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン穂波店 １Ｆｍｉｘ−Ｏ",
        "d2": 68353,
        "detour": 0,
        "lat": 33.6370709,
        "lng": 130.6738584
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 桂川店",
        "d2": 68041,
        "detour": 0,
        "lat": 33.5891829,
        "lng": 130.6723712
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 飯塚太郎丸店",
        "d2": 68780,
        "detour": 0,
        "lat": 33.6082664,
        "lng": 130.6704054
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "（株）西鉄ストア スピナ戸畑店惣菜・東洋食品",
        "d2": 86176,
        "detour": 4356,
        "lat": 33.899001999999996,
        "lng": 130.83996
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 92989,
        "detour": 11169,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      }
    ]
  },
  "九州國立博物館→BOOKOFF 大野城三笠川店": {
    "d1": 11092,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 大野城店",
        "d2": 11994,
        "detour": 902,
        "lat": 33.5331714,
        "lng": 130.4838488
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン乙金ショッピングセンター",
        "d2": 12181,
        "detour": 1089,
        "lat": 33.545687,
        "lng": 130.4968281
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 太宰府向佐野店",
        "d2": 13684,
        "detour": 2592,
        "lat": 33.5078524,
        "lng": 130.4955928
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大野城横峰店(松のや併設)",
        "d2": 16096,
        "detour": 5004,
        "lat": 33.505888299999995,
        "lng": 130.4749602
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 筑紫野店",
        "d2": 17796,
        "detour": 6704,
        "lat": 33.4959122,
        "lng": 130.5082012
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 24131,
        "detour": 13039,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー呉服町店",
        "d2": 31139,
        "detour": 20047,
        "lat": 33.5979522,
        "lng": 130.41026689999998
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 39034,
        "detour": 27942,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "BOOKOFF 大野城三笠川店→Hard Off & Hobby Off 春日白水店": {
    "d1": 6828,
    "stores": [
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 大野城曙町店",
        "d2": 7117,
        "detour": 289,
        "lat": 33.5326966,
        "lng": 130.47892160000004
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン大野城ショッピングセンター",
        "d2": 7155,
        "detour": 327,
        "lat": 33.537919699999996,
        "lng": 130.47557989999999
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 春日惣利店",
        "d2": 7463,
        "detour": 635,
        "lat": 33.5110074,
        "lng": 130.4691777
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 春日宝町店",
        "d2": 7549,
        "detour": 721,
        "lat": 33.5331623,
        "lng": 130.45968159999998
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大野城横峰店(松のや併設)",
        "d2": 10741,
        "detour": 3913,
        "lat": 33.505888299999995,
        "lng": 130.4749602
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 18159,
        "detour": 11331,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー呉服町店",
        "d2": 25167,
        "detour": 18339,
        "lat": 33.5979522,
        "lng": 130.41026689999998
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 33062,
        "detour": 26234,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "Hard Off & Hobby Off 春日白水店→BOOKOFF上津久留米店": {
    "d1": 38207,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 34号鳥栖店",
        "d2": 34741,
        "detour": 0,
        "lat": 33.382892999999996,
        "lng": 130.5093202
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 鳥栖本町店",
        "d2": 34719,
        "detour": 0,
        "lat": 33.378798599999996,
        "lng": 130.50728759999998
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 久留米通町店",
        "d2": 34582,
        "detour": 0,
        "lat": 33.31874,
        "lng": 130.510379
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール筑紫野",
        "d2": 38136,
        "detour": 0,
        "lat": 33.481517,
        "lng": 130.5276451
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー鳥栖店",
        "d2": 35478,
        "detour": 0,
        "lat": 33.3739395,
        "lng": 130.5096822
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 国分店",
        "d2": 39556,
        "detour": 1349,
        "lat": 33.2971986,
        "lng": 130.53418399999998
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 69730,
        "detour": 31523,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 73189,
        "detour": 34982,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      }
    ]
  },
  "BOOKOFF上津久留米店→APA酒店 佐賀站南口": {
    "d1": 23715,
    "stores": [
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 23769,
        "detour": 54,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 34号吉野ヶ里店",
        "d2": 26937,
        "detour": 3222,
        "lat": 33.3211228,
        "lng": 130.390927
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 久留米市役所前店",
        "d2": 27242,
        "detour": 3527,
        "lat": 33.319049,
        "lng": 130.50722820000001
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 南佐賀店",
        "d2": 30950,
        "detour": 7235,
        "lat": 33.2137855,
        "lng": 130.3085132
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー鳥栖店",
        "d2": 46912,
        "detour": 23197,
        "lat": 33.3739395,
        "lng": 130.5096822
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール佐賀大和",
        "d2": 50111,
        "detour": 26396,
        "lat": 33.303252199999996,
        "lng": 130.2809868
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 115022,
        "detour": 91307,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 127117,
        "detour": 103402,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      }
    ]
  },
  "佐賀熱氣球博物館→BOOKOFF PLUS 佐賀南部繞道店": {
    "d1": 2689,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 佐賀本庄店",
        "d2": 2721,
        "detour": 32,
        "lat": 33.2391727,
        "lng": 130.2991893
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "ザ・ビッグ多布施店",
        "d2": 4148,
        "detour": 1459,
        "lat": 33.2565616,
        "lng": 130.29208069999999
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 5723,
        "detour": 3034,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０８号線佐賀大学前店",
        "d2": 6024,
        "detour": 3335,
        "lat": 33.2396045,
        "lng": 130.287591
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 大財店",
        "d2": 6592,
        "detour": 3903,
        "lat": 33.263213,
        "lng": 130.3083551
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー鳥栖店",
        "d2": 63625,
        "detour": 60936,
        "lat": 33.3739395,
        "lng": 130.5096822
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 137458,
        "detour": 134769,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 149554,
        "detour": 146865,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      }
    ]
  },
  "BOOKOFF PLUS 佐賀南部繞道店→Hard Off 佐賀店": {
    "d1": 2404,
    "stores": [
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン佐賀店",
        "d2": 2504,
        "detour": 100,
        "lat": 33.222774199999996,
        "lng": 130.3082781
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 佐賀本庄店",
        "d2": 5241,
        "detour": 2837,
        "lat": 33.2391727,
        "lng": 130.2991893
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 南佐賀店",
        "d2": 5376,
        "detour": 2972,
        "lat": 33.2137855,
        "lng": 130.3085132
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０８号線佐賀大学前店",
        "d2": 8598,
        "detour": 6194,
        "lat": 33.2396045,
        "lng": 130.287591
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 8906,
        "detour": 6502,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー鳥栖店",
        "d2": 59732,
        "detour": 57328,
        "lat": 33.3739395,
        "lng": 130.5096822
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 141719,
        "detour": 139315,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 153815,
        "detour": 151411,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      }
    ]
  },
  "Hard Off 佐賀店→BOOKOFF Saga Nabeshima": {
    "d1": 7272,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０８号線佐賀大学前店",
        "d2": 7297,
        "detour": 25,
        "lat": 33.2396045,
        "lng": 130.287591
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン佐賀店",
        "d2": 7372,
        "detour": 100,
        "lat": 33.222774199999996,
        "lng": 130.3082781
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 9163,
        "detour": 1891,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 佐賀本庄店",
        "d2": 9943,
        "detour": 2671,
        "lat": 33.2391727,
        "lng": 130.2991893
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 南佐賀店",
        "d2": 10492,
        "detour": 3220,
        "lat": 33.2137855,
        "lng": 130.3085132
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー鳥栖店",
        "d2": 69046,
        "detour": 61774,
        "lat": 33.3739395,
        "lng": 130.5096822
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 139301,
        "detour": 132029,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 151397,
        "detour": 144125,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      }
    ]
  },
  "BOOKOFF Saga Nabeshima→佐賀縣立宇宙科學館 夢銀河": {
    "d1": 28823,
    "stores": [
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "ザ・ビッグ江北店",
        "d2": 28954,
        "detour": 131,
        "lat": 33.216576499999995,
        "lng": 130.16213059999998
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 34号小城三日月店",
        "d2": 30043,
        "detour": 1220,
        "lat": 33.2622674,
        "lng": 130.2310522
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０８号線佐賀大学前店",
        "d2": 37895,
        "detour": 9072,
        "lat": 33.2396045,
        "lng": 130.287591
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 佐賀北店",
        "d2": 41135,
        "detour": 12312,
        "lat": 33.284006999999995,
        "lng": 130.2842115
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 45171,
        "detour": 16348,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー鳥栖店",
        "d2": 97441,
        "detour": 68618,
        "lat": 33.3739395,
        "lng": 130.5096822
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 158028,
        "detour": 129205,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 170124,
        "detour": 141301,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      }
    ]
  },
  "佐賀縣立宇宙科學館 夢銀河→未確認生物UMA展（島瀬美術センター）": {
    "d1": 36280,
    "stores": [
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 36403,
        "detour": 123,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 卸本町店",
        "d2": 36858,
        "detour": 578,
        "lat": 33.151695499999995,
        "lng": 129.7701648
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ３５号線佐世保大塔店",
        "d2": 37009,
        "detour": 729,
        "lat": 33.150292199999996,
        "lng": 129.78051639999998
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 202号伊万里店",
        "d2": 50994,
        "detour": 14714,
        "lat": 33.2619825,
        "lng": 129.8588674
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大村店/松のや 大村店",
        "d2": 101399,
        "detour": 65119,
        "lat": 32.9346941,
        "lng": 129.93686890000004
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー 長崎駅店",
        "d2": 160377,
        "detour": 124097,
        "lat": 32.751343399999996,
        "lng": 129.8709753
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 186177,
        "detour": 149897,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 217853,
        "detour": 181573,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "未確認生物UMA展（島瀬美術センター）→佐世保中央飯店": {
    "d1": 447,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 佐世保下京店",
        "d2": 1508,
        "detour": 1061,
        "lat": 33.1675549,
        "lng": 129.7238342
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 35号佐世保大和店",
        "d2": 7848,
        "detour": 7401,
        "lat": 33.1590673,
        "lng": 129.7513796
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 8128,
        "detour": 7681,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 卸本町店",
        "d2": 13384,
        "detour": 12937,
        "lat": 33.151695499999995,
        "lng": 129.7701648
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大村店/松のや 大村店",
        "d2": 123606,
        "detour": 123159,
        "lat": 32.9346941,
        "lng": 129.93686890000004
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー 長崎駅店",
        "d2": 182583,
        "detour": 182136,
        "lat": 32.751343399999996,
        "lng": 129.8709753
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 185334,
        "detour": 184887,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 253024,
        "detour": 252577,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "佐世保中央飯店→おもちゃのあおき 四ヶ町アーケード本島店": {
    "d1": 383,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 佐世保下京店",
        "d2": 928,
        "detour": 545,
        "lat": 33.1675549,
        "lng": 129.7238342
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 35号佐世保大和店",
        "d2": 7269,
        "detour": 6886,
        "lat": 33.1590673,
        "lng": 129.7513796
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 7549,
        "detour": 7166,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 卸本町店",
        "d2": 12804,
        "detour": 12421,
        "lat": 33.151695499999995,
        "lng": 129.7701648
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大村店/松のや 大村店",
        "d2": 123150,
        "detour": 122767,
        "lat": 32.9346941,
        "lng": 129.93686890000004
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー 長崎駅店",
        "d2": 182128,
        "detour": 181745,
        "lat": 32.751343399999996,
        "lng": 129.8709753
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 184878,
        "detour": 184495,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 252568,
        "detour": 252185,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "おもちゃのあおき 四ヶ町アーケード本島店→Hard Off Sasebo": {
    "d1": 5254,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 35号佐世保大和店",
        "d2": 5274,
        "detour": 20,
        "lat": 33.1590673,
        "lng": 129.7513796
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 佐世保下京店",
        "d2": 5328,
        "detour": 74,
        "lat": 33.1675549,
        "lng": 129.7238342
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 6074,
        "detour": 820,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 卸本町店",
        "d2": 7856,
        "detour": 2602,
        "lat": 33.151695499999995,
        "lng": 129.7701648
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大村店/松のや 大村店",
        "d2": 121276,
        "detour": 116022,
        "lat": 32.9346941,
        "lng": 129.93686890000004
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー 長崎駅店",
        "d2": 180254,
        "detour": 175000,
        "lat": 32.751343399999996,
        "lng": 129.8709753
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 183004,
        "detour": 177750,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 250694,
        "detour": 245440,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "九十九島水族館 海洋kirara→BOOKOFF AcrossPlaza佐世保": {
    "d1": 7778,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 佐世保下京店",
        "d2": 7818,
        "detour": 40,
        "lat": 33.1675549,
        "lng": 129.7238342
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 35号佐世保大和店",
        "d2": 9695,
        "detour": 1917,
        "lat": 33.1590673,
        "lng": 129.7513796
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 10785,
        "detour": 3007,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 卸本町店",
        "d2": 18144,
        "detour": 10366,
        "lat": 33.151695499999995,
        "lng": 129.7701648
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大村店/松のや 大村店",
        "d2": 128918,
        "detour": 121140,
        "lat": 32.9346941,
        "lng": 129.93686890000004
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー 長崎駅店",
        "d2": 187896,
        "detour": 180118,
        "lat": 32.751343399999996,
        "lng": 129.8709753
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 190646,
        "detour": 182868,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 258336,
        "detour": 250558,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "BOOKOFF AcrossPlaza佐世保→すき家 35號佐世保大和店": {
    "d1": 1076,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 35号佐世保大和店",
        "d2": 1173,
        "detour": 97,
        "lat": 33.1590673,
        "lng": 129.7513796
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 3202,
        "detour": 2126,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 佐世保下京店",
        "d2": 5623,
        "detour": 4547,
        "lat": 33.1675549,
        "lng": 129.7238342
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 卸本町店",
        "d2": 6708,
        "detour": 5632,
        "lat": 33.151695499999995,
        "lng": 129.7701648
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大村店/松のや 大村店",
        "d2": 119670,
        "detour": 118594,
        "lat": 32.9346941,
        "lng": 129.93686890000004
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー 長崎駅店",
        "d2": 178648,
        "detour": 177572,
        "lat": 32.751343399999996,
        "lng": 129.8709753
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 181398,
        "detour": 180322,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 249088,
        "detour": 248012,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "すき家 35號佐世保大和店→伊萬里夢Misaki公園（滑草）": {
    "d1": 35490,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 202号伊万里店",
        "d2": 35490,
        "detour": 0,
        "lat": 33.2619825,
        "lng": 129.8588674
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 35738,
        "detour": 248,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 瀬戸越店",
        "d2": 38943,
        "detour": 3453,
        "lat": 33.2086717,
        "lng": 129.7340562
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 佐世保下京店",
        "d2": 41194,
        "detour": 5704,
        "lat": 33.1675549,
        "lng": 129.7238342
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大村店/松のや 大村店",
        "d2": 105756,
        "detour": 70266,
        "lat": 32.9346941,
        "lng": 129.93686890000004
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 152268,
        "detour": 116778,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー 長崎駅店",
        "d2": 183337,
        "detour": 147847,
        "lat": 32.751343399999996,
        "lng": 129.8709753
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 195653,
        "detour": 160163,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "伊萬里夢Misaki公園（滑草）→BOOKOFF Karatsu Store": {
    "d1": 23431,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０４号線唐津店",
        "d2": 27255,
        "detour": 3824,
        "lat": 33.4492,
        "lng": 129.9736
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 唐津栄町店",
        "d2": 28761,
        "detour": 5330,
        "lat": 33.4457641,
        "lng": 129.97939560000003
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン唐津ショッピングセンター",
        "d2": 32255,
        "detour": 8824,
        "lat": 33.4367608,
        "lng": 130.0123792
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 伊万里店",
        "d2": 35023,
        "detour": 11592,
        "lat": 33.2749939,
        "lng": 129.8920494
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 112407,
        "detour": 88976,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 113434,
        "detour": 90003,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー 有田店",
        "d2": 116637,
        "detour": 93206,
        "lat": 33.5558057,
        "lng": 130.3333055
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 132519,
        "detour": 109088,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      }
    ]
  },
  "BOOKOFF Karatsu Store→Times停車場（BOOKOFF旁）": {
    "d1": 51207,
    "stores": [
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 51957,
        "detour": 750,
        "lat": 33.568165199999996,
        "lng": 130.3306934
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール福岡伊都",
        "d2": 51989,
        "detour": 782,
        "lat": 33.577435099999995,
        "lng": 130.2582809
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 福重店",
        "d2": 52083,
        "detour": 876,
        "lat": 33.568082,
        "lng": 130.3150501
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０４号線唐津店",
        "d2": 52558,
        "detour": 1351,
        "lat": 33.4492,
        "lng": 129.9736
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー九大学研都市店",
        "d2": 53166,
        "detour": 1959,
        "lat": 33.57977410000001,
        "lng": 130.2532684
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 53572,
        "detour": 2365,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 周船寺店（松のや併設）",
        "d2": 53955,
        "detour": 2748,
        "lat": 33.574372,
        "lng": 130.24974799999998
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 202号福岡周船寺店",
        "d2": 55923,
        "detour": 4716,
        "lat": 33.572430499999996,
        "lng": 130.2418937
      }
    ]
  },
  "Times停車場（BOOKOFF旁）→BOOKOFF SUPER BAZAAR Mina天神": {
    "d1": 307,
    "stores": [
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 天神店",
        "d2": 1056,
        "detour": 749,
        "lat": 33.592352399999996,
        "lng": 130.3977746
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 天神サザン通り店",
        "d2": 2179,
        "detour": 1872,
        "lat": 33.5896805,
        "lng": 130.3970234
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 天神南駅東店",
        "d2": 2411,
        "detour": 2104,
        "lat": 33.589030699999995,
        "lng": 130.4038856
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 3379,
        "detour": 3072,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー呉服町店",
        "d2": 3607,
        "detour": 3300,
        "lat": 33.5979522,
        "lng": 130.41026689999998
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 博多せんしょう店",
        "d2": 4359,
        "detour": 4052,
        "lat": 33.603074,
        "lng": 130.412061
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "カルディコーヒーファーム イオンスタイル笹丘店",
        "d2": 9838,
        "detour": 9531,
        "lat": 33.5649827,
        "lng": 130.3768418
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 15099,
        "detour": 14792,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      }
    ]
  },
  "BOOKOFF SUPER BAZAAR Mina天神→新大谷特約停車場 Grand Parking": {
    "d1": 1467,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 天神南駅東店",
        "d2": 1997,
        "detour": 530,
        "lat": 33.589030699999995,
        "lng": 130.4038856
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 天神サザン通り店",
        "d2": 2283,
        "detour": 816,
        "lat": 33.5896805,
        "lng": 130.3970234
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 春吉店",
        "d2": 2287,
        "detour": 820,
        "lat": 33.5843351,
        "lng": 130.4089294
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 天神店",
        "d2": 2635,
        "detour": 1168,
        "lat": 33.592352399999996,
        "lng": 130.3977746
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー呉服町店",
        "d2": 3960,
        "detour": 2493,
        "lat": 33.5979522,
        "lng": 130.41026689999998
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 4897,
        "detour": 3430,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 9005,
        "detour": 7538,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "カルディコーヒーファーム イオンスタイル笹丘店",
        "d2": 9360,
        "detour": 7893,
        "lat": 33.5649827,
        "lng": 130.3768418
      }
    ]
  },
  "新大谷特約停車場 Grand Parking→博多新大谷飯店": {
    "d1": 261,
    "stores": [
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 春吉店",
        "d2": 1310,
        "detour": 1049,
        "lat": 33.5843351,
        "lng": 130.4089294
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 天神南駅東店",
        "d2": 1705,
        "detour": 1444,
        "lat": 33.589030699999995,
        "lng": 130.4038856
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 春吉店",
        "d2": 1969,
        "detour": 1708,
        "lat": 33.5893,
        "lng": 130.4046
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 博多駅前通り店",
        "d2": 2846,
        "detour": 2585,
        "lat": 33.589802999999996,
        "lng": 130.413782
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー博多住吉店",
        "d2": 2993,
        "detour": 2732,
        "lat": 33.5831369,
        "lng": 130.41751399999998
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 6376,
        "detour": 6115,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 8596,
        "detour": 8335,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "カルディコーヒーファーム イオンスタイル笹丘店",
        "d2": 9418,
        "detour": 9157,
        "lat": 33.5649827,
        "lng": 130.3768418
      }
    ]
  },
  "駿河屋 博多丸井店→福岡國際機場": {
    "d1": 3476,
    "stores": [
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 博多駅南店",
        "d2": 3476,
        "detour": 0,
        "lat": 33.586853999999995,
        "lng": 130.42307399999999
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 3973,
        "detour": 497,
        "lat": 33.5818374,
        "lng": 130.43898760000002
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 福岡博多駅南店",
        "d2": 4292,
        "detour": 816,
        "lat": 33.575617300000005,
        "lng": 130.42810699999998
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 博多半道橋店",
        "d2": 4437,
        "detour": 961,
        "lat": 33.578486399999996,
        "lng": 130.4396598
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 東光寺店",
        "d2": 4531,
        "detour": 1055,
        "lat": 33.5753817,
        "lng": 130.43645510000002
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー博多住吉店",
        "d2": 5351,
        "detour": 1875,
        "lat": 33.5831369,
        "lng": 130.41751399999998
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 13781,
        "detour": 10305,
        "lat": 33.5926385,
        "lng": 130.38380949999998
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオンモール福岡",
        "d2": 14097,
        "detour": 10621,
        "lat": 33.5970724,
        "lng": 130.480909
      }
    ]
  }
};
