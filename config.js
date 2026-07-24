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
// 收據共享相簿（Google Photos 共享連結；家人上傳收據 → 記帳時批次入帳）。留空字串則隱藏按鈕
window.SHARED_ALBUM_URL = "https://photos.app.goo.gl/qbkwKxxKwtpWoXuj6";
// 消費記錄雲端同步（Firebase Realtime Database；多裝置全家帳）。留空字串停用同步
window.FIREBASE_DB_URL = "https://phonics-app-28eac-default-rtdb.europe-west1.firebasedatabase.app";

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
      { name: "福岡國際機場", lat: 33.5849988, lon: 130.4490906, desc: "JX840 星宇航空 桃園09:35出發 → 13:05抵達福岡。入境+領行李後前往 ORIX 取車。", mapCode: "", driveTime: "", ticket: { adult: 0, child: 0 } },
      { name: "ＯＲＩＸ國際線店", lat: 33.582242, lon: 130.442429, desc: "ORIX 租車福岡機場國際線店，取車出發。", mapCode: "", driveTime: "接駁/步行", ticket: { adult: 0, child: 0 } },
      { name: "Yamaya Factory Terrace", lat: 33.6319684, lon: 130.5209968, desc: "明太子工廠見學＋直賣所。營業 10:00~17:00", mapCode: "55 752 414*52", driveTime: "國道19分、縣道22分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF + Hard Off", lat: 33.6545076, lon: 130.4923254, desc: "福岡挖寶第一站。", mapCode: "13 569 130*24", driveTime: "9分", ticket: { adult: 0, child: 0 } },
      { name: "ハードオフ福岡中間店", lat: 33.8180129, lon: 130.7162195, desc: "Hard Off 福岡中間店。", mapCode: "68 536 695*78", driveTime: "40分", ticket: { adult: 0, child: 0 } },
      { name: "ART 新田川小倉酒店", lat: 33.879354, lon: 130.880973, desc: "北九州小倉住宿。", mapCode: "16 466 090*23", driveTime: "27分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day2", date: "8/8 (六)", title: "小倉→久留米→佐賀", themeColor: "bg-[#A9BFA8]",
    spots: [
      { name: "TOTO博物館", lat: 33.8722021, lon: 130.8721104, desc: "TOTO 衛浴品牌博物館。營業 10:00-17:00", mapCode: "16 434 268*63", driveTime: "9分", ticket: { adult: 0, child: 0 } },
      { name: "有的有的停車場", lat: 33.8879913, lon: 130.885649, desc: "あるあるCity 停車場，營業 11:00 開始。", mapCode: "16 496 103*00", driveTime: "9分", ticket: { adult: 0, child: 0 } },
      { name: "駿河屋 小倉AruaruCity店", lat: 33.8876455, lon: 130.884624, desc: "🧸 絕版 LEGO 救星！中古動漫/絕版模型霸主，AruaruCity 2F/4F，小倉站前步行可達。", mapCode: "", driveTime: "步行1分", ticket: { adult: 0, child: 0 } },
      { name: "薩莉亞 小倉站前AruaruCity店", lat: 33.8874016, lon: 130.884736, desc: "午餐：Saizeriya 小倉站前 AruaruCity 店。", mapCode: "", driveTime: "同棟", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF 大野城三笠川店", lat: 33.5468162, lon: 130.4828346, desc: "大野城 BOOKOFF，旁邊有超市。", mapCode: "13 178 249*77", driveTime: "1小時", ticket: { adult: 0, child: 0 } },
      { name: "九州國立博物館", lat: 33.5182578, lon: 130.5381224, desc: "太宰府 九州國立博物館。9:30-17:00（16:30 最後入館）；金・土夜間開館至 20:00（19:30 最後入館，行前再確認）。8/8 週六有開。常設展（文化交流展）大人 700 円、高中以下免費，特別展另計。", mapCode: "", driveTime: "20分", ticket: { adult: 700, child: 0 } },
      { name: "Hard Off & Hobby Off 春日白水店", lat: 33.5092061, lon: 130.4496045, desc: "春日白水 Hard Off + Hobby Off，有樂高！", mapCode: "13 024 636*17", driveTime: "25分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF上津久留米店", lat: 33.2849572, lon: 130.5110566, desc: "久留米 BOOKOFF。", mapCode: "37 406 708*24", driveTime: "25分", ticket: { adult: 0, child: 0 } },
      { name: "Hard Off 佐賀店", lat: 33.2212552, lon: 130.3077721, desc: "佐賀 Hard Off。", mapCode: "87 202 126*02", driveTime: "37分", ticket: { adult: 0, child: 0 } },
      { name: "APA酒店 佐賀站南口", lat: 33.2629778, lon: 130.2996529, desc: "佐賀站旁住宿。旁邊停車場1泊1,000円(41 532 501*11)", mapCode: "87 351 127*20", driveTime: "10分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day3", date: "8/9 (日)", title: "佐賀→佐世保", themeColor: "bg-[#A2C4C9]",
    spots: [
      { name: "佐賀熱氣球博物館", lat: 33.2524136, lon: 130.3004143, desc: "佐賀國際熱氣球節常設展。", mapCode: "87 291 789*40", driveTime: "", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF PLUS 佐賀南部繞道店", lat: 33.2390376, lon: 130.3007156, desc: "大型 BOOKOFF。", mapCode: "87 261 250*14", driveTime: "6分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF Saga Nabeshima", lat: 33.2652133, lon: 130.2718048, desc: "鍋島 BOOKOFF。", mapCode: "87 347 386*40", driveTime: "11分", ticket: { adult: 0, child: 0 } },
      { name: "佐賀縣立宇宙科學館 夢銀河", lat: 33.1791421, lon: 130.035404, desc: "互動體驗型宇宙科學館。", mapCode: "104 349 105*75", driveTime: "37分", ticket: { adult: 0, child: 0 } },
      { name: "Hard Off Sasebo", lat: 33.1586631, lon: 129.7642449, desc: "佐世保 Hard Off。", mapCode: "307 556 599*63", driveTime: "32分", ticket: { adult: 0, child: 0 } },
      { name: "未確認生物UMA展（島瀬美術センター）", lat: 33.17277, lon: 129.72066, desc: "UMA 未確認生物展 8/1~8/31 無休。10:00-18:00（17:30 最後入館）。大人當日1,500円/前售1,300円、國高中生1,000円、小學生以下免費。等身大模型+拍照區，可手機拍照。距飯店步行5分。", mapCode: "", driveTime: "10分", ticket: { adult: 1500, child: 0 } },
      { name: "佐世保中央飯店", lat: 33.1702927, lon: 129.7231849, desc: "佐世保市區住宿。", mapCode: "89 027 031*61", driveTime: "步行5分", ticket: { adult: 0, child: 0 } },
      { name: "おもちゃのあおき 四ヶ町アーケード本島店", lat: 33.17091, lon: 129.72166, desc: "老字號玩具店，四ヶ町商店街拱廊內，飯店旁。晚餐後散步順逛。", mapCode: "", driveTime: "步行2分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day4", date: "8/10 (一)", title: "佐世保→博多", themeColor: "bg-[#E8D595]",
    spots: [
      { name: "九十九島水族館 海洋kirara", lat: 33.1614464, lon: 129.6790753, desc: "以水母聞名的九十九島水族館。", mapCode: "307 546 892*73", driveTime: "13分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF AcrossPlaza佐世保", lat: 33.1595916, lon: 129.74322, desc: "佐世保大型 BOOKOFF。", mapCode: "307 554 673*13", driveTime: "16分", ticket: { adult: 0, child: 0 } },
      { name: "すき家 35號佐世保大和店", lat: 33.1590673, lon: 129.7513796, desc: "午餐：すき家牛丼，AcrossPlaza 旁。", mapCode: "", driveTime: "3分", ticket: { adult: 0, child: 0 } },
      { name: "伊萬里夢Misaki公園（滑草）", lat: 33.3469052, lon: 129.8502744, desc: "伊萬里滑草親子設施。", mapCode: "458 357 219*57", driveTime: "50分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF Karatsu Store", lat: 33.4400913, lon: 129.9643643, desc: "唐津 BOOKOFF。", mapCode: "182 370 389*11", driveTime: "27分", ticket: { adult: 0, child: 0 } },
      { name: "Times停車場（BOOKOFF旁）", lat: 33.5942146, lon: 130.3988619, desc: "13 318 784*18 再往前。停車後步行至天神 BOOKOFF。", mapCode: "13 318 784*18", driveTime: "約60分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF SUPER BAZAAR Mina天神", lat: 33.5929742, lon: 130.3983736, desc: "九州最大 BOOKOFF，天神挖寶！", mapCode: "", driveTime: "步行1分", ticket: { adult: 0, child: 0 } },
      { name: "新大谷特約停車場 Grand Parking", lat: 33.5835175, lon: 130.4066823, desc: "博多新大谷飯店特約停車場（Tsukigime Parking）。", mapCode: "", driveTime: "12分", ticket: { adult: 0, child: 0 } },
      { name: "博多新大谷飯店", lat: 33.5830614, lon: 130.4063095, desc: "博多站旁高級飯店。特約停車場：Grand Parking", mapCode: "13 289 511*86", driveTime: "步行4分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day5", date: "8/11 (二)", title: "博多→回家", themeColor: "bg-[#D4A5A5]",
    spots: [
      { name: "駿河屋 博多丸井店", lat: 33.5888254, lon: 130.4199115, desc: "🧸 市區最後補刀！動漫/模型/玩具地毯式二手店，博多站正對面 OIOI 6F。", mapCode: "", driveTime: "步行", ticket: { adult: 0, child: 0 } },
      { name: "福岡國際機場", lat: 33.5849988, lon: 130.4490906, desc: "還車 → JX841 14:25 出發 → 15:45 抵達桃園", mapCode: "", driveTime: "", ticket: { adult: 0, child: 0 } },
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
  { name: "北九州市立自然歷史博物館（いのちのたび）", lat: 33.869201, lon: 130.8085394, desc: "恐龍骨架聞名的自然史博物館，八幡東區。候補景點（原冰河期展場館）。", mapCode: "" },
  { name: "撒隆巴斯藥物博物館", lat: 33.3978309, lon: 130.5111389, desc: "久光製藥歷史博物館（原 8/8 行程，已改列候補）。", mapCode: "37 826 318*07" },
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
  { day: "8/7", name: "ART 新田川小倉酒店", location: "北九州小倉", desc: "小倉站周邊商務飯店", lat: 33.879354, lon: 130.880973, mapCode: "16 466 090*23" },
  { day: "8/8", name: "APA酒店 佐賀站南口", location: "佐賀市", desc: "佐賀站旁 APA 商務飯店", lat: 33.2629778, lon: 130.2996529, mapCode: "87 351 127*20" },
  { day: "8/9", name: "佐世保中央飯店", location: "佐世保市", desc: "佐世保市區住宿", lat: 33.1702927, lon: 129.7231849, mapCode: "89 027 031*61" },
  { day: "8/10", name: "博多新大谷飯店", location: "福岡博多", desc: "博多站旁高級飯店", lat: 33.5830614, lon: 130.4063095, mapCode: "13 289 511*86" },
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

// 11. 沿途連鎖店（calculator v5，KMZ v4 行程 29 段全量）
// detour=真實繞路公尺、detourMin=真實繞路分鐘、open/close=行程當日營業時間
window.CHAIN_ROUTES = {
 "福岡國際機場→ＯＲＩＸ國際線店": {
  "d1": 1191,
  "min": 4,
  "stores": [
   {
    "name": "なか卯",
    "icon": "🐔",
    "cat": "丼飯",
    "branch": "なか卯 福岡半道橋店",
    "d2": 1593,
    "detour": 402,
    "detourMin": 2,
    "lat": 33.5818374,
    "lng": 130.43898760000002,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 福岡空港国際ターミナルビル店",
    "d2": 2590,
    "detour": 1399,
    "detourMin": 4,
    "lat": 33.5845919,
    "lng": 130.4443192,
    "open": "07:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 博多半道橋店",
    "d2": 2439,
    "detour": 1248,
    "detourMin": 6,
    "lat": 33.578486399999996,
    "lng": 130.4396598,
    "open": "09:00",
    "close": "23:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 東光寺店",
    "d2": 4007,
    "detour": 2816,
    "detourMin": 10,
    "lat": 33.5753817,
    "lng": 130.43645510000002,
    "open": "00:00",
    "close": "24:00"
   }
  ]
 },
 "ＯＲＩＸ國際線店→Yamaya Factory Terrace": {
  "d1": 18958,
  "min": 24,
  "stores": [
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０１号線篠栗店",
    "d2": 18958,
    "detour": 0,
    "detourMin": 0,
    "lat": 33.627868,
    "lng": 130.504676,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "なか卯",
    "icon": "🐔",
    "cat": "丼飯",
    "branch": "なか卯 福岡半道橋店",
    "d2": 19151,
    "detour": 193,
    "detourMin": 1,
    "lat": 33.5818374,
    "lng": 130.43898760000002,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー呉服町店",
    "d2": 19775,
    "detour": 817,
    "detourMin": 4,
    "lat": 33.5979522,
    "lng": 130.41026689999998,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー東比恵店",
    "d2": 18516,
    "detour": 0,
    "detourMin": 4,
    "lat": 33.590001900000004,
    "lng": 130.4301168,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 博多半道橋店",
    "d2": 20061,
    "detour": 1103,
    "detourMin": 5,
    "lat": 33.578486399999996,
    "lng": 130.4396598,
    "open": "09:00",
    "close": "23:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 福岡志免店",
    "d2": 17625,
    "detour": 0,
    "detourMin": 6,
    "lat": 33.5827684,
    "lng": 130.48892379999998,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 福岡箱崎店（マイカリー食堂併設）",
    "d2": 19736,
    "detour": 778,
    "detourMin": 6,
    "lat": 33.614498999999995,
    "lng": 130.414108,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 博多せんしょう店",
    "d2": 19678,
    "detour": 720,
    "detourMin": 6,
    "lat": 33.603074,
    "lng": 130.412061,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 城浜団地店",
    "d2": 22683,
    "detour": 3725,
    "detourMin": 6,
    "lat": 33.6496919,
    "lng": 130.4251108,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 篠栗店",
    "d2": 20933,
    "detour": 1975,
    "detourMin": 6,
    "lat": 33.621235899999995,
    "lng": 130.5118522,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 博多BP店",
    "d2": 14356,
    "detour": 0,
    "detourMin": 7,
    "lat": 33.6239051,
    "lng": 130.4391494,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 福岡西月隈店",
    "d2": 24023,
    "detour": 5065,
    "detourMin": 7,
    "lat": 33.569403,
    "lng": 130.4521303,
    "open": "04:00",
    "close": "24:00"
   }
  ]
 },
 "Yamaya Factory Terrace→BOOKOFF + Hard Off": {
  "d1": 5459,
  "min": 12,
  "stores": [
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０１号線篠栗店",
    "d2": 6557,
    "detour": 1098,
    "detourMin": 2,
    "lat": 33.627868,
    "lng": 130.504676,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "(合)西友 福岡東ＤＣ",
    "d2": 8961,
    "detour": 3502,
    "detourMin": 6,
    "lat": 33.6310861,
    "lng": 130.4818572,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 篠栗店",
    "d2": 9391,
    "detour": 3932,
    "detourMin": 9,
    "lat": 33.621235899999995,
    "lng": 130.5118522,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 福岡土井店",
    "d2": 11679,
    "detour": 6220,
    "detourMin": 14,
    "lat": 33.635116499999995,
    "lng": 130.4620117,
    "open": "04:00",
    "close": "24:00"
   }
  ]
 },
 "BOOKOFF + Hard Off→ハードオフ福岡中間店": {
  "d1": 37372,
  "min": 44,
  "stores": [
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオンなかま店",
    "d2": 39555,
    "detour": 2183,
    "detourMin": 6,
    "lat": 33.8228039,
    "lng": 130.7231905,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０１号線篠栗店",
    "d2": 46895,
    "detour": 9523,
    "detourMin": 7,
    "lat": 33.627868,
    "lng": 130.504676,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー古賀中央店",
    "d2": 41806,
    "detour": 4434,
    "detourMin": 9,
    "lat": 33.7338473,
    "lng": 130.475048,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー古賀店",
    "d2": 42775,
    "detour": 5403,
    "detourMin": 11,
    "lat": 33.7364986,
    "lng": 130.4717536,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 篠栗店",
    "d2": 49022,
    "detour": 11650,
    "detourMin": 13,
    "lat": 33.621235899999995,
    "lng": 130.5118522,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "ロピア 福岡新宮店",
    "d2": 42546,
    "detour": 5174,
    "detourMin": 14,
    "lat": 33.7041357,
    "lng": 130.4552899,
    "open": "10:00",
    "close": "20:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 福岡土井店",
    "d2": 49049,
    "detour": 11677,
    "detourMin": 15,
    "lat": 33.635116499999995,
    "lng": 130.4620117,
    "open": "04:00",
    "close": "24:00"
   }
  ]
 },
 "ハードオフ福岡中間店→ART 新田川小倉酒店": {
  "d1": 19921,
  "min": 28,
  "stores": [
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 211号八幡西店",
    "d2": 21321,
    "detour": 1400,
    "detourMin": 5,
    "lat": 33.8346534,
    "lng": 130.75709519999998,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオンなかま店",
    "d2": 20869,
    "detour": 948,
    "detourMin": 6,
    "lat": 33.8228039,
    "lng": 130.7231905,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 永犬丸店",
    "d2": 21579,
    "detour": 1658,
    "detourMin": 6,
    "lat": 33.8426973,
    "lng": 130.7300881,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 八幡下上津役店",
    "d2": 21968,
    "detour": 2047,
    "detourMin": 7,
    "lat": 33.825122799999995,
    "lng": 130.7439961,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 １０号線片野店",
    "d2": 20788,
    "detour": 867,
    "detourMin": 8,
    "lat": 33.865778999999996,
    "lng": 130.882698,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ３号線黒崎西店",
    "d2": 23246,
    "detour": 3325,
    "detourMin": 8,
    "lat": 33.863780399999996,
    "lng": 130.7491766,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 穴生店",
    "d2": 23096,
    "detour": 3175,
    "detourMin": 8,
    "lat": 33.858806,
    "lng": 130.74295899999998,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "ロピア 北九州リバーウォーク店",
    "d2": 22073,
    "detour": 2152,
    "detourMin": 9,
    "lat": 33.885809,
    "lng": 130.8754882,
    "open": "10:00",
    "close": "20:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 八幡東枝光店",
    "d2": 21594,
    "detour": 1673,
    "detourMin": 10,
    "lat": 33.8775629,
    "lng": 130.81360189999998,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 小倉片野店（松のや併設）",
    "d2": 21203,
    "detour": 1282,
    "detourMin": 10,
    "lat": 33.8624587,
    "lng": 130.88096769999999,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 千代店",
    "d2": 24825,
    "detour": 4904,
    "detourMin": 10,
    "lat": 33.8104022,
    "lng": 130.7440468,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 3号黒崎店",
    "d2": 24796,
    "detour": 4875,
    "detourMin": 11,
    "lat": 33.8650313,
    "lng": 130.75681989999998,
    "open": "04:00",
    "close": "24:00"
   }
  ]
 },
 "TOTO博物館→有的有的停車場": {
  "d1": 3372,
  "min": 11,
  "stores": [
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 三萩野店",
    "d2": 3373,
    "detour": 1,
    "detourMin": 0,
    "lat": 33.872218,
    "lng": 130.8768778,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 チャチャタウン小倉店",
    "d2": 3717,
    "detour": 345,
    "detourMin": 3,
    "lat": 33.8829304,
    "lng": 130.8885292,
    "open": "08:00",
    "close": "23:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "ロピア 北九州リバーウォーク店",
    "d2": 3898,
    "detour": 526,
    "detourMin": 3,
    "lat": 33.885809,
    "lng": 130.8754882,
    "open": "10:00",
    "close": "20:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 小倉京町店",
    "d2": 3358,
    "detour": 0,
    "detourMin": 4,
    "lat": 33.885505,
    "lng": 130.8810278,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "マックスバリュエクスプレス小倉駅店",
    "d2": 3187,
    "detour": 0,
    "detourMin": 4,
    "lat": 33.8864853,
    "lng": 130.882175,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 小倉駅前店（松のや併設）",
    "d2": 3400,
    "detour": 28,
    "detourMin": 5,
    "lat": 33.886175,
    "lng": 130.880862,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 １０号線片野店",
    "d2": 5490,
    "detour": 2118,
    "detourMin": 6,
    "lat": 33.865778999999996,
    "lng": 130.882698,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 小倉北神岳店",
    "d2": 5516,
    "detour": 2144,
    "detourMin": 7,
    "lat": 33.8722926,
    "lng": 130.8921533,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 小倉北西港店",
    "d2": 8333,
    "detour": 4961,
    "detourMin": 8,
    "lat": 33.8986622,
    "lng": 130.8567243,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ３号線小倉清水店",
    "d2": 6857,
    "detour": 3485,
    "detourMin": 8,
    "lat": 33.8728644,
    "lng": 130.8594628,
    "open": "08:00",
    "close": "23:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 小倉片野店（松のや併設）",
    "d2": 6204,
    "detour": 2832,
    "detourMin": 9,
    "lat": 33.8624587,
    "lng": 130.88096769999999,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 3号小倉北到津店",
    "d2": 9285,
    "detour": 5913,
    "detourMin": 10,
    "lat": 33.8739578,
    "lng": 130.8511853,
    "open": "04:00",
    "close": "24:00"
   }
  ]
 },
 "有的有的停車場→駿河屋 小倉AruaruCity店": {
  "d1": 106,
  "min": 0,
  "stores": []
 },
 "駿河屋 小倉AruaruCity店→薩莉亞 小倉站前AruaruCity店": {
  "d1": 283,
  "min": 2,
  "stores": []
 },
 "薩莉亞 小倉站前AruaruCity店→BOOKOFF 大野城三笠川店": {
  "d1": 75022,
  "min": 66,
  "stores": [
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 チャチャタウン小倉店",
    "d2": 75425,
    "detour": 403,
    "detourMin": 3,
    "lat": 33.8829304,
    "lng": 130.8885292,
    "open": "08:00",
    "close": "23:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 鞍手ＰＡ下り線店",
    "d2": 75041,
    "detour": 19,
    "detourMin": 3,
    "lat": 33.7749378,
    "lng": 130.69076099999998,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 小倉駅前店（松のや併設）",
    "d2": 77191,
    "detour": 2169,
    "detourMin": 4,
    "lat": 33.886175,
    "lng": 130.880862,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 小倉北神岳店",
    "d2": 76244,
    "detour": 1222,
    "detourMin": 5,
    "lat": 33.8722926,
    "lng": 130.8921533,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 三萩野店",
    "d2": 75171,
    "detour": 149,
    "detourMin": 5,
    "lat": 33.872218,
    "lng": 130.8768778,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 １０号線片野店",
    "d2": 75199,
    "detour": 177,
    "detourMin": 6,
    "lat": 33.865778999999996,
    "lng": 130.882698,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "ロピア 北九州リバーウォーク店",
    "d2": 75720,
    "detour": 698,
    "detourMin": 6,
    "lat": 33.885809,
    "lng": 130.8754882,
    "open": "10:00",
    "close": "20:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 千代店",
    "d2": 75458,
    "detour": 436,
    "detourMin": 6,
    "lat": 33.8104022,
    "lng": 130.7440468,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 3号小倉北到津店",
    "d2": 76821,
    "detour": 1799,
    "detourMin": 7,
    "lat": 33.8739578,
    "lng": 130.8511853,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 小倉北西港店",
    "d2": 80020,
    "detour": 4998,
    "detourMin": 8,
    "lat": 33.8986622,
    "lng": 130.8567243,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ３号線小倉清水店",
    "d2": 78667,
    "detour": 3645,
    "detourMin": 8,
    "lat": 33.8728644,
    "lng": 130.8594628,
    "open": "08:00",
    "close": "23:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 小倉片野店（松のや併設）",
    "d2": 75641,
    "detour": 619,
    "detourMin": 8,
    "lat": 33.8624587,
    "lng": 130.88096769999999,
    "open": "00:00",
    "close": "24:00"
   }
  ]
 },
 "BOOKOFF上津久留米店→Hard Off 佐賀店": {
  "d1": 25893,
  "min": 39,
  "stores": [
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー久留米南店",
    "d2": 26322,
    "detour": 429,
    "detourMin": 6,
    "lat": 33.2811848,
    "lng": 130.48104949999998,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐賀店",
    "d2": 27082,
    "detour": 1189,
    "detourMin": 8,
    "lat": 33.222774199999996,
    "lng": 130.3082781,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン 大木店",
    "d2": 28457,
    "detour": 2564,
    "detourMin": 13,
    "lat": 33.220774999999996,
    "lng": 130.4475803,
    "open": "09:00",
    "close": "22:00"
   }
  ]
 },
 "Hard Off 佐賀店→APA酒店 佐賀站南口": {
  "d1": 5124,
  "min": 12,
  "stores": [
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐賀店",
    "d2": 5212,
    "detour": 88,
    "detourMin": 4,
    "lat": 33.222774199999996,
    "lng": 130.3082781,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 佐賀大財店（松のや併設）",
    "d2": 6016,
    "detour": 892,
    "detourMin": 6,
    "lat": 33.262122,
    "lng": 130.303406,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 大財店",
    "d2": 7172,
    "detour": 2048,
    "detourMin": 7,
    "lat": 33.263213,
    "lng": 130.3083551,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "マックスバリュ南佐賀店",
    "d2": 7404,
    "detour": 2280,
    "detourMin": 8,
    "lat": 33.2417604,
    "lng": 130.3156581,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 佐賀環状東通り店",
    "d2": 8572,
    "detour": 3448,
    "detourMin": 9,
    "lat": 33.253933499999995,
    "lng": 130.3209977,
    "open": "05:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 佐賀環状東通り店駐車場",
    "d2": 8572,
    "detour": 3448,
    "detourMin": 9,
    "lat": 33.2538002,
    "lng": 130.3209953
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 佐賀本庄店",
    "d2": 7342,
    "detour": 2218,
    "detourMin": 10,
    "lat": 33.2391727,
    "lng": 130.2991893,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 南佐賀店",
    "d2": 8096,
    "detour": 2972,
    "detourMin": 10,
    "lat": 33.2137855,
    "lng": 130.3085132,
    "open": "08:30",
    "close": "19:30"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０８号線佐賀大学前店",
    "d2": 8681,
    "detour": 3557,
    "detourMin": 11,
    "lat": 33.2396045,
    "lng": 130.287591,
    "open": "00:00",
    "close": "24:00"
   }
  ]
 },
 "佐賀熱氣球博物館→BOOKOFF PLUS 佐賀南部繞道店": {
  "d1": 2689,
  "min": 7,
  "stores": [
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 佐賀本庄店",
    "d2": 2937,
    "detour": 248,
    "detourMin": 2,
    "lat": 33.2391727,
    "lng": 130.2991893,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０８号線佐賀大学前店",
    "d2": 6182,
    "detour": 3493,
    "detourMin": 8,
    "lat": 33.2396045,
    "lng": 130.287591,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "マックスバリュ南佐賀店",
    "d2": 4837,
    "detour": 2148,
    "detourMin": 8,
    "lat": 33.2417604,
    "lng": 130.3156581,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐賀店",
    "d2": 7567,
    "detour": 4878,
    "detourMin": 10,
    "lat": 33.222774199999996,
    "lng": 130.3082781,
    "open": "09:00",
    "close": "22:00"
   }
  ]
 },
 "BOOKOFF PLUS 佐賀南部繞道店→BOOKOFF Saga Nabeshima": {
  "d1": 5995,
  "min": 15,
  "stores": [
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０８号線佐賀大学前店駐車場",
    "d2": 6074,
    "detour": 79,
    "detourMin": 0,
    "lat": 33.239474099999995,
    "lng": 130.28772619999998
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０８号線佐賀大学前店",
    "d2": 8103,
    "detour": 2108,
    "detourMin": 4,
    "lat": 33.2396045,
    "lng": 130.287591,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 佐賀大財店（松のや併設）",
    "d2": 6851,
    "detour": 856,
    "detourMin": 5,
    "lat": 33.262122,
    "lng": 130.303406,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐賀店",
    "d2": 9535,
    "detour": 3540,
    "detourMin": 5,
    "lat": 33.222774199999996,
    "lng": 130.3082781,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 佐賀本庄店",
    "d2": 8801,
    "detour": 2806,
    "detourMin": 6,
    "lat": 33.2391727,
    "lng": 130.2991893,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ３４号線佐賀店",
    "d2": 8992,
    "detour": 2997,
    "detourMin": 6,
    "lat": 33.272813,
    "lng": 130.276234,
    "open": "05:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 大財店",
    "d2": 8494,
    "detour": 2499,
    "detourMin": 8,
    "lat": 33.263213,
    "lng": 130.3083551,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 南佐賀店",
    "d2": 12680,
    "detour": 6685,
    "detourMin": 9,
    "lat": 33.2137855,
    "lng": 130.3085132,
    "open": "08:30",
    "close": "19:30"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 佐賀環状東通り店",
    "d2": 10666,
    "detour": 4671,
    "detourMin": 10,
    "lat": 33.253933499999995,
    "lng": 130.3209977,
    "open": "05:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 佐賀環状東通り店駐車場",
    "d2": 10665,
    "detour": 4670,
    "detourMin": 10,
    "lat": 33.2538002,
    "lng": 130.3209953
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 34号小城三日月店",
    "d2": 16878,
    "detour": 10883,
    "detourMin": 13,
    "lat": 33.2622674,
    "lng": 130.2310522,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 34号佐賀高木瀬店",
    "d2": 10085,
    "detour": 4090,
    "detourMin": 13,
    "lat": 33.2756877,
    "lng": 130.2997354,
    "open": "04:00",
    "close": "24:00"
   }
  ]
 },
 "BOOKOFF Saga Nabeshima→佐賀縣立宇宙科學館 夢銀河": {
  "d1": 28823,
  "min": 46,
  "stores": [
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 34号小城三日月店",
    "d2": 29011,
    "detour": 188,
    "detourMin": 0,
    "lat": 33.2622674,
    "lng": 130.2310522,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 263号佐賀大和IC店",
    "d2": 40439,
    "detour": 11616,
    "detourMin": 0,
    "lat": 33.3017798,
    "lng": 130.279888,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン江北店",
    "d2": 29735,
    "detour": 912,
    "detourMin": 0,
    "lat": 33.2164575,
    "lng": 130.16239400000003,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ３４号線佐賀店",
    "d2": 29996,
    "detour": 1173,
    "detourMin": 1,
    "lat": 33.272813,
    "lng": 130.276234,
    "open": "05:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 佐賀北店",
    "d2": 41106,
    "detour": 12283,
    "detourMin": 1,
    "lat": 33.284006999999995,
    "lng": 130.2842115,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 34号佐賀高木瀬店",
    "d2": 43311,
    "detour": 14488,
    "detourMin": 5,
    "lat": 33.2756877,
    "lng": 130.2997354,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "生鮮&業務スーパー 多久店",
    "d2": 45668,
    "detour": 16845,
    "detourMin": 7,
    "lat": 33.2906919,
    "lng": 130.10480859999998,
    "open": "09:00",
    "close": "20:30"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 佐賀大財店（松のや併設）",
    "d2": 45225,
    "detour": 16402,
    "detourMin": 10,
    "lat": 33.262122,
    "lng": 130.303406,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０８号線佐賀大学前店",
    "d2": 38170,
    "detour": 9347,
    "detourMin": 14,
    "lat": 33.2396045,
    "lng": 130.287591,
    "open": "00:00",
    "close": "24:00"
   }
  ]
 },
 "佐賀縣立宇宙科學館 夢銀河→Hard Off Sasebo": {
  "d1": 31615,
  "min": 36,
  "stores": [
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ３５号線佐世保大塔店",
    "d2": 31616,
    "detour": 1,
    "detourMin": 0,
    "lat": 33.150292199999996,
    "lng": 129.78051639999998,
    "open": "09:00",
    "close": "23:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン大塔ショッピングセンター",
    "d2": 31586,
    "detour": 0,
    "detourMin": 0,
    "lat": 33.1485451,
    "lng": 129.7799872,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 卸本町店",
    "d2": 31548,
    "detour": 0,
    "detourMin": 0,
    "lat": 33.151695499999995,
    "lng": 129.7701648,
    "open": "09:00",
    "close": "20:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 34号武雄店",
    "d2": 36157,
    "detour": 4542,
    "detourMin": 8,
    "lat": 33.1956671,
    "lng": 130.0308674,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐世保白岳ショッピングセンター",
    "d2": 35417,
    "detour": 3802,
    "detourMin": 8,
    "lat": 33.1511936,
    "lng": 129.7475078,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 佐世保下京店",
    "d2": 40584,
    "detour": 8969,
    "detourMin": 13,
    "lat": 33.1675549,
    "lng": 129.7238342,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 波佐見店",
    "d2": 34721,
    "detour": 3106,
    "detourMin": 13,
    "lat": 33.1359056,
    "lng": 129.8919607,
    "open": "09:00",
    "close": "20:00"
   }
  ]
 },
 "Hard Off Sasebo→未確認生物UMA展（島瀬美術センター）": {
  "d1": 9903,
  "min": 17,
  "stores": [
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐世保四ヶ町店",
    "d2": 6587,
    "detour": 0,
    "detourMin": 0,
    "lat": 33.1717058,
    "lng": 129.721194,
    "open": "10:00",
    "close": "19:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ３５号線佐世保大塔店",
    "d2": 9903,
    "detour": 0,
    "detourMin": 1,
    "lat": 33.150292199999996,
    "lng": 129.78051639999998,
    "open": "09:00",
    "close": "23:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 佐世保下京店",
    "d2": 7074,
    "detour": 0,
    "detourMin": 2,
    "lat": 33.1675549,
    "lng": 129.7238342,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 卸本町店",
    "d2": 7895,
    "detour": 0,
    "detourMin": 2,
    "lat": 33.151695499999995,
    "lng": 129.7701648,
    "open": "09:00",
    "close": "20:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "マックスバリュ佐世保島瀬店",
    "d2": 7256,
    "detour": 0,
    "detourMin": 3,
    "lat": 33.171276399999996,
    "lng": 129.7205382,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 35号佐世保大和店",
    "d2": 9652,
    "detour": 0,
    "detourMin": 7,
    "lat": 33.1590673,
    "lng": 129.7513796,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン 佐世保白岳店",
    "d2": 8601,
    "detour": 0,
    "detourMin": 7,
    "lat": 33.1512966,
    "lng": 129.7475773,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐世保白岳ショッピングセンター",
    "d2": 8600,
    "detour": 0,
    "detourMin": 7,
    "lat": 33.1511936,
    "lng": 129.7475078,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン大塔ショッピングセンター",
    "d2": 10544,
    "detour": 641,
    "detourMin": 8,
    "lat": 33.1485451,
    "lng": 129.7799872,
    "open": "09:00",
    "close": "22:00"
   }
  ]
 },
 "未確認生物UMA展（島瀬美術センター）→佐世保中央飯店": {
  "d1": 447,
  "min": 2,
  "stores": []
 },
 "佐世保中央飯店→おもちゃのあおき 四ヶ町アーケード本島店": {
  "d1": 383,
  "min": 2,
  "stores": []
 },
 "九十九島水族館 海洋kirara→BOOKOFF AcrossPlaza佐世保": {
  "d1": 7778,
  "min": 18,
  "stores": [
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 佐世保下京店",
    "d2": 8272,
    "detour": 494,
    "detourMin": 2,
    "lat": 33.1675549,
    "lng": 129.7238342,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "マックスバリュ佐世保島瀬店",
    "d2": 8796,
    "detour": 1018,
    "detourMin": 3,
    "lat": 33.171276399999996,
    "lng": 129.7205382,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐世保四ヶ町店",
    "d2": 8828,
    "detour": 1050,
    "detourMin": 3,
    "lat": 33.1717058,
    "lng": 129.721194,
    "open": "10:00",
    "close": "19:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン 佐世保白岳店",
    "d2": 11719,
    "detour": 3941,
    "detourMin": 11,
    "lat": 33.1512966,
    "lng": 129.7475773,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐世保白岳ショッピングセンター",
    "d2": 11719,
    "detour": 3941,
    "detourMin": 11,
    "lat": 33.1511936,
    "lng": 129.7475078,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 35号佐世保大和店",
    "d2": 13099,
    "detour": 5321,
    "detourMin": 12,
    "lat": 33.1590673,
    "lng": 129.7513796,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ３５号線佐世保大塔店",
    "d2": 18134,
    "detour": 10356,
    "detourMin": 12,
    "lat": 33.150292199999996,
    "lng": 129.78051639999998,
    "open": "09:00",
    "close": "23:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 卸本町店",
    "d2": 18228,
    "detour": 10450,
    "detourMin": 14,
    "lat": 33.151695499999995,
    "lng": 129.7701648,
    "open": "09:00",
    "close": "20:00"
   }
  ]
 },
 "BOOKOFF AcrossPlaza佐世保→すき家 35號佐世保大和店": {
  "d1": 1076,
  "min": 4,
  "stores": [
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 35号佐世保大和店",
    "d2": 1979,
    "detour": 903,
    "detourMin": 4,
    "lat": 33.1590673,
    "lng": 129.7513796,
    "open": "04:00",
    "close": "24:00"
   }
  ]
 },
 "すき家 35號佐世保大和店→伊萬里夢Misaki公園（滑草）": {
  "d1": 35490,
  "min": 57,
  "stores": [
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 35号佐世保大和店",
    "d2": 35490,
    "detour": 0,
    "detourMin": 0,
    "lat": 33.1590673,
    "lng": 129.7513796,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ３５号線佐世保大塔店",
    "d2": 35491,
    "detour": 1,
    "detourMin": 0,
    "lat": 33.150292199999996,
    "lng": 129.78051639999998,
    "open": "09:00",
    "close": "23:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 卸本町店",
    "d2": 35293,
    "detour": 0,
    "detourMin": 0,
    "lat": 33.151695499999995,
    "lng": 129.7701648,
    "open": "09:00",
    "close": "20:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン 佐世保白岳店",
    "d2": 36931,
    "detour": 1441,
    "detourMin": 2,
    "lat": 33.1512966,
    "lng": 129.7475773,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン佐世保白岳ショッピングセンター",
    "d2": 36931,
    "detour": 1441,
    "detourMin": 2,
    "lat": 33.1511936,
    "lng": 129.7475078,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 佐世保下京店",
    "d2": 41195,
    "detour": 5705,
    "detourMin": 3,
    "lat": 33.1675549,
    "lng": 129.7238342,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン大塔ショッピングセンター",
    "d2": 38542,
    "detour": 3052,
    "detourMin": 4,
    "lat": 33.1485451,
    "lng": 129.7799872,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 204号佐世保田原店",
    "d2": 38924,
    "detour": 3434,
    "detourMin": 10,
    "lat": 33.2080609,
    "lng": 129.7191977,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 波佐見店",
    "d2": 45399,
    "detour": 9909,
    "detourMin": 14,
    "lat": 33.1359056,
    "lng": 129.8919607,
    "open": "09:00",
    "close": "20:00"
   }
  ]
 },
 "伊萬里夢Misaki公園（滑草）→BOOKOFF Karatsu Store": {
  "d1": 23431,
  "min": 28,
  "stores": [
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０４号線唐津店",
    "d2": 27190,
    "detour": 3759,
    "detourMin": 11,
    "lat": 33.4492,
    "lng": 129.9736,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 唐津栄町店",
    "d2": 28762,
    "detour": 5331,
    "detourMin": 12,
    "lat": 33.4457641,
    "lng": 129.97939560000003,
    "open": "04:00",
    "close": "24:00"
   }
  ]
 },
 "BOOKOFF Karatsu Store→Times停車場（BOOKOFF旁）": {
  "d1": 51203,
  "min": 59,
  "stores": [
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 202号唐津鏡店",
    "d2": 51203,
    "detour": 0,
    "detourMin": 0,
    "lat": 33.4363678,
    "lng": 130.0148699,
    "open": "07:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオンショッパーズ福岡店",
    "d2": 51203,
    "detour": 0,
    "detourMin": 0,
    "lat": 33.593967,
    "lng": 130.39834,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 天神店",
    "d2": 51823,
    "detour": 620,
    "detourMin": 2,
    "lat": 33.592352399999996,
    "lng": 130.3977746,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 ２０４号線唐津店",
    "d2": 52553,
    "detour": 1350,
    "detourMin": 3,
    "lat": 33.4492,
    "lng": 129.9736,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン唐津ショッピングセンター",
    "d2": 51668,
    "detour": 465,
    "detourMin": 3,
    "lat": 33.4367608,
    "lng": 130.0123792,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 唐津栄町店",
    "d2": 52713,
    "detour": 1510,
    "detourMin": 4,
    "lat": 33.4457641,
    "lng": 129.97939560000003,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 福岡赤坂店",
    "d2": 52926,
    "detour": 1723,
    "detourMin": 6,
    "lat": 33.589380999999996,
    "lng": 130.390278,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン福岡伊都店",
    "d2": 52742,
    "detour": 1539,
    "detourMin": 7,
    "lat": 33.5774672,
    "lng": 130.2582205,
    "open": "09:00",
    "close": "23:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオンモール福岡伊都",
    "d2": 52142,
    "detour": 939,
    "detourMin": 7,
    "lat": 33.577435099999995,
    "lng": 130.2582809,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "ロピア長浜店",
    "d2": 53588,
    "detour": 2385,
    "detourMin": 7,
    "lat": 33.5926385,
    "lng": 130.38380949999998,
    "open": "10:00",
    "close": "20:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "トラストパーク ロピア長浜店",
    "d2": 53714,
    "detour": 2511,
    "detourMin": 7,
    "lat": 33.5929892,
    "lng": 130.38385599999998,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 糸島店",
    "d2": 55488,
    "detour": 4285,
    "detourMin": 8,
    "lat": 33.5466927,
    "lng": 130.17417129999998,
    "open": "06:00",
    "close": "23:30"
   }
  ]
 },
 "Times停車場（BOOKOFF旁）→BOOKOFF SUPER BAZAAR Mina天神": {
  "d1": 307,
  "min": 2,
  "stores": []
 },
 "BOOKOFF SUPER BAZAAR Mina天神→新大谷特約停車場 Grand Parking": {
  "d1": 1467,
  "min": 6,
  "stores": [
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家×はなまるうどん ミーナ天神店",
    "d2": 1471,
    "detour": 4,
    "detourMin": 1,
    "lat": 33.592919,
    "lng": 130.398336,
    "open": "07:00",
    "close": "21:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "マックスバリュエクスプレス渡辺通3丁目店",
    "d2": 1580,
    "detour": 113,
    "detourMin": 1,
    "lat": 33.5855105,
    "lng": 130.40561110000002,
    "open": "07:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 天神南駅東店",
    "d2": 1633,
    "detour": 166,
    "detourMin": 2,
    "lat": 33.589030699999995,
    "lng": 130.4038856,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 春吉店",
    "d2": 1896,
    "detour": 429,
    "detourMin": 3,
    "lat": 33.5893,
    "lng": 130.4046,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー渡辺通店",
    "d2": 1966,
    "detour": 499,
    "detourMin": 3,
    "lat": 33.5821241,
    "lng": 130.4068149,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 福岡天神３丁目店",
    "d2": 2067,
    "detour": 600,
    "detourMin": 4,
    "lat": 33.591557,
    "lng": 130.395773,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "マックスバリュエクスプレス住吉4丁目店",
    "d2": 2399,
    "detour": 932,
    "detourMin": 4,
    "lat": 33.5828541,
    "lng": 130.4104245,
    "open": "07:00",
    "close": "24:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 天神店",
    "d2": 2603,
    "detour": 1136,
    "detourMin": 5,
    "lat": 33.592352399999996,
    "lng": 130.3977746,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 春吉店",
    "d2": 2229,
    "detour": 762,
    "detourMin": 5,
    "lat": 33.5843351,
    "lng": 130.4089294,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 福岡舞鶴店",
    "d2": 2953,
    "detour": 1486,
    "detourMin": 6,
    "lat": 33.5910359,
    "lng": 130.3929233,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 福岡赤坂店",
    "d2": 3383,
    "detour": 1916,
    "detourMin": 7,
    "lat": 33.589380999999996,
    "lng": 130.390278,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 天神サザン通り店",
    "d2": 2283,
    "detour": 816,
    "detourMin": 7,
    "lat": 33.5896805,
    "lng": 130.3970234,
    "open": "00:00",
    "close": "24:00"
   }
  ]
 },
 "新大谷特約停車場 Grand Parking→博多新大谷飯店": {
  "d1": 261,
  "min": 2,
  "stores": []
 },
 "駿河屋 博多丸井店→福岡國際機場": {
  "d1": 3476,
  "min": 13,
  "stores": [
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 博多駅南店",
    "d2": 3477,
    "detour": 1,
    "detourMin": 0,
    "lat": 33.586853999999995,
    "lng": 130.42307399999999,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "なか卯",
    "icon": "🐔",
    "cat": "丼飯",
    "branch": "なか卯 福岡半道橋店",
    "d2": 4301,
    "detour": 825,
    "detourMin": 2,
    "lat": 33.5818374,
    "lng": 130.43898760000002,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 福岡博多駅南店",
    "d2": 4293,
    "detour": 817,
    "detourMin": 3,
    "lat": 33.575617300000005,
    "lng": 130.42810699999998,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "ロピア 博多ヨドバシ店",
    "d2": 3796,
    "detour": 320,
    "detourMin": 3,
    "lat": 33.5879076,
    "lng": 130.4215863,
    "open": "10:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 博多半道橋店",
    "d2": 4318,
    "detour": 842,
    "detourMin": 3,
    "lat": 33.578486399999996,
    "lng": 130.4396598,
    "open": "09:00",
    "close": "23:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー東比恵店",
    "d2": 4194,
    "detour": 718,
    "detourMin": 3,
    "lat": 33.590001900000004,
    "lng": 130.4301168,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 博多駅前四丁目店",
    "d2": 4302,
    "detour": 826,
    "detourMin": 4,
    "lat": 33.5862974,
    "lng": 130.4170379,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー駅南店",
    "d2": 3899,
    "detour": 423,
    "detourMin": 4,
    "lat": 33.5822158,
    "lng": 130.4266027,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 東光寺店",
    "d2": 5443,
    "detour": 1967,
    "detourMin": 5,
    "lat": 33.5753817,
    "lng": 130.43645510000002,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー呉服町店",
    "d2": 6722,
    "detour": 3246,
    "detourMin": 6,
    "lat": 33.5979522,
    "lng": 130.41026689999998,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー美野島店",
    "d2": 5573,
    "detour": 2097,
    "detourMin": 8,
    "lat": 33.576327299999996,
    "lng": 130.4194445,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 博多せんしょう店",
    "d2": 8051,
    "detour": 4575,
    "detourMin": 9,
    "lat": 33.603074,
    "lng": 130.412061,
    "open": "09:00",
    "close": "21:00"
   }
  ]
 },
 "BOOKOFF 大野城三笠川店→九州國立博物館": {
  "d1": 10975,
  "min": 22,
  "stores": [
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 南バイパス太宰府店",
    "d2": 13724,
    "detour": 2749,
    "detourMin": 1,
    "lat": 33.5017948,
    "lng": 130.5315365,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 大野城店",
    "d2": 11464,
    "detour": 489,
    "detourMin": 2,
    "lat": 33.5331714,
    "lng": 130.4838488,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン乙金ショッピングセンター",
    "d2": 12000,
    "detour": 1025,
    "detourMin": 3,
    "lat": 33.545687,
    "lng": 130.4968281,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン二日市店",
    "d2": 13119,
    "detour": 2144,
    "detourMin": 6,
    "lat": 33.5025733,
    "lng": 130.51885199999998,
    "open": "08:00",
    "close": "22:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 筑紫野永岡店",
    "d2": 16824,
    "detour": 5849,
    "detourMin": 8,
    "lat": 33.4820788,
    "lng": 130.5447485,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン筑紫野店",
    "d2": 20376,
    "detour": 9401,
    "detourMin": 8,
    "lat": 33.4812818,
    "lng": 130.5260706,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン大野城ショッピングセンター",
    "d2": 12616,
    "detour": 1641,
    "detourMin": 8,
    "lat": 33.537919699999996,
    "lng": 130.47557989999999,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー白木原店",
    "d2": 12846,
    "detour": 1871,
    "detourMin": 8,
    "lat": 33.528666199999996,
    "lng": 130.4819989,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 太宰府向佐野店",
    "d2": 13541,
    "detour": 2566,
    "detourMin": 9,
    "lat": 33.5078524,
    "lng": 130.4955928,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 向佐野店",
    "d2": 13485,
    "detour": 2510,
    "detourMin": 9,
    "lat": 33.5063921,
    "lng": 130.4964054,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 筑紫野店",
    "d2": 17530,
    "detour": 6555,
    "detourMin": 13,
    "lat": 33.4959122,
    "lng": 130.5082012,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 南福岡店",
    "d2": 19436,
    "detour": 8461,
    "detourMin": 15,
    "lat": 33.550793399999996,
    "lng": 130.4575405,
    "open": "09:00",
    "close": "21:00"
   }
  ]
 },
 "九州國立博物館→Hard Off & Hobby Off 春日白水店": {
  "d1": 13160,
  "min": 37,
  "stores": [
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 春日惣利店",
    "d2": 13463,
    "detour": 303,
    "detourMin": 0,
    "lat": 33.5110074,
    "lng": 130.4691777,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 太宰府向佐野店",
    "d2": 14669,
    "detour": 1509,
    "detourMin": 0,
    "lat": 33.5078524,
    "lng": 130.4955928,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 筑紫野永岡店",
    "d2": 17474,
    "detour": 4314,
    "detourMin": 0,
    "lat": 33.4820788,
    "lng": 130.5447485,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 南バイパス太宰府店",
    "d2": 16492,
    "detour": 3332,
    "detourMin": 0,
    "lat": 33.5017948,
    "lng": 130.5315365,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 大野城店",
    "d2": 15460,
    "detour": 2300,
    "detourMin": 0,
    "lat": 33.5331714,
    "lng": 130.4838488,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 大野城横峰店(松のや併設)",
    "d2": 14640,
    "detour": 1480,
    "detourMin": 0,
    "lat": 33.505888299999995,
    "lng": 130.4749602,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン筑紫野店",
    "d2": 16955,
    "detour": 3795,
    "detourMin": 0,
    "lat": 33.4812818,
    "lng": 130.5260706,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "マックスバリュエクスプレス二日市店",
    "d2": 15269,
    "detour": 2109,
    "detourMin": 0,
    "lat": 33.4927663,
    "lng": 130.5182602,
    "open": "07:00",
    "close": "23:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "ロピア 福岡白水店",
    "d2": 13575,
    "detour": 415,
    "detourMin": 0,
    "lat": 33.5081218,
    "lng": 130.44986500000002,
    "open": "10:00",
    "close": "20:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 筑紫野店",
    "d2": 16942,
    "detour": 3782,
    "detourMin": 0,
    "lat": 33.4959122,
    "lng": 130.5082012,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 向佐野店",
    "d2": 14121,
    "detour": 961,
    "detourMin": 0,
    "lat": 33.5063921,
    "lng": 130.4964054,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー春日店",
    "d2": 13627,
    "detour": 467,
    "detourMin": 0,
    "lat": 33.5162638,
    "lng": 130.47063359999999,
    "open": "00:00",
    "close": "24:00"
   }
  ]
 },
 "Hard Off & Hobby Off 春日白水店→BOOKOFF上津久留米店": {
  "d1": 38208,
  "min": 47,
  "stores": [
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 春日惣利店",
    "d2": 36185,
    "detour": 0,
    "detourMin": 3,
    "lat": 33.5110074,
    "lng": 130.4691777,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "すき家",
    "icon": "🥩",
    "cat": "丼飯",
    "branch": "すき家 太宰府向佐野店",
    "d2": 36133,
    "detour": 0,
    "detourMin": 4,
    "lat": 33.5078524,
    "lng": 130.4955928,
    "open": "04:00",
    "close": "24:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー白木原店",
    "d2": 38289,
    "detour": 81,
    "detourMin": 4,
    "lat": 33.528666199999996,
    "lng": 130.4819989,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "吉野家",
    "icon": "🐂",
    "cat": "丼飯",
    "branch": "吉野家 大野城店",
    "d2": 39151,
    "detour": 943,
    "detourMin": 5,
    "lat": 33.5331714,
    "lng": 130.4838488,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "松屋",
    "icon": "🍛",
    "cat": "丼飯",
    "branch": "松屋 大野城横峰店(松のや併設)",
    "d2": 37386,
    "detour": 0,
    "detourMin": 5,
    "lat": 33.505888299999995,
    "lng": 130.4749602,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "ロピア 福岡白水店",
    "d2": 38620,
    "detour": 412,
    "detourMin": 5,
    "lat": 33.5081218,
    "lng": 130.44986500000002,
    "open": "10:00",
    "close": "20:00"
   },
   {
    "name": "ロピア",
    "icon": "🥩",
    "cat": "超市",
    "branch": "ロピア 春日ナフコ店",
    "d2": 36256,
    "detour": 0,
    "detourMin": 5,
    "lat": 33.5123633,
    "lng": 130.4635475,
    "open": "10:00",
    "close": "20:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 筑紫野店",
    "d2": 36314,
    "detour": 0,
    "detourMin": 5,
    "lat": 33.4959122,
    "lng": 130.5082012,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "業務超市",
    "icon": "📦",
    "cat": "超市",
    "branch": "業務スーパー 向佐野店",
    "d2": 36116,
    "detour": 0,
    "detourMin": 5,
    "lat": 33.5063921,
    "lng": 130.4964054,
    "open": "09:00",
    "close": "21:00"
   },
   {
    "name": "SEIYU",
    "icon": "🟢",
    "cat": "超市",
    "branch": "サニー春日店",
    "d2": 38989,
    "detour": 781,
    "detourMin": 6,
    "lat": 33.5162638,
    "lng": 130.47063359999999,
    "open": "00:00",
    "close": "24:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン筑紫野店",
    "d2": 37622,
    "detour": 0,
    "detourMin": 8,
    "lat": 33.4812818,
    "lng": 130.5260706,
    "open": "09:00",
    "close": "22:00"
   },
   {
    "name": "AEON",
    "icon": "🛒",
    "cat": "超市",
    "branch": "イオン大野城ショッピングセンター",
    "d2": 40025,
    "detour": 1817,
    "detourMin": 8,
    "lat": 33.537919699999996,
    "lng": 130.47557989999999,
    "open": "09:00",
    "close": "22:00"
   }
  ]
 }
};

// 12. 真實車程（calculator v5，Routes API 交通感知，KMZ v4 行程 29 段全量）
window.DRIVE_TIMES = {
 "福岡國際機場→ＯＲＩＸ國際線店": {
  "min": 4,
  "km": 1.2,
  "dep": "08/07 14:35"
 },
 "ＯＲＩＸ國際線店→Yamaya Factory Terrace": {
  "min": 24,
  "km": 19,
  "dep": "08/07 16:16"
 },
 "Yamaya Factory Terrace→BOOKOFF + Hard Off": {
  "min": 12,
  "km": 5.5,
  "dep": "08/07 18:10"
 },
 "BOOKOFF + Hard Off→ハードオフ福岡中間店": {
  "min": 44,
  "km": 37.4,
  "dep": "08/07 19:55"
 },
 "ハードオフ福岡中間店→ART 新田川小倉酒店": {
  "min": 28,
  "km": 19.9,
  "dep": "08/07 22:16"
 },
 "TOTO博物館→有的有的停車場": {
  "min": 11,
  "km": 3.4,
  "dep": "08/08 10:30"
 },
 "有的有的停車場→駿河屋 小倉AruaruCity店": {
  "min": 0,
  "km": 0.1,
  "dep": "08/08 10:43"
 },
 "駿河屋 小倉AruaruCity店→薩莉亞 小倉站前AruaruCity店": {
  "min": 2,
  "km": 0.3,
  "dep": "08/08 12:23"
 },
 "薩莉亞 小倉站前AruaruCity店→BOOKOFF 大野城三笠川店": {
  "min": 66,
  "km": 75,
  "dep": "08/08 14:03"
 },
 "BOOKOFF上津久留米店→Hard Off 佐賀店": {
  "min": 39,
  "km": 25.9,
  "dep": "08/08 22:50"
 },
 "Hard Off 佐賀店→APA酒店 佐賀站南口": {
  "min": 12,
  "km": 5.1,
  "dep": "08/08 23:59"
 },
 "佐賀熱氣球博物館→BOOKOFF PLUS 佐賀南部繞道店": {
  "min": 7,
  "km": 2.7,
  "dep": "08/09 10:30"
 },
 "BOOKOFF PLUS 佐賀南部繞道店→BOOKOFF Saga Nabeshima": {
  "min": 15,
  "km": 6,
  "dep": "08/09 12:12"
 },
 "BOOKOFF Saga Nabeshima→佐賀縣立宇宙科學館 夢銀河": {
  "min": 46,
  "km": 28.8,
  "dep": "08/09 13:58"
 },
 "佐賀縣立宇宙科學館 夢銀河→Hard Off Sasebo": {
  "min": 36,
  "km": 31.6,
  "dep": "08/09 16:14"
 },
 "Hard Off Sasebo→未確認生物UMA展（島瀬美術センター）": {
  "min": 17,
  "km": 9.9,
  "dep": "08/09 18:32"
 },
 "未確認生物UMA展（島瀬美術センター）→佐世保中央飯店": {
  "min": 2,
  "km": 0.4,
  "dep": "08/09 20:19"
 },
 "佐世保中央飯店→おもちゃのあおき 四ヶ町アーケード本島店": {
  "min": 2,
  "km": 0.4,
  "dep": "08/09 22:00"
 },
 "九十九島水族館 海洋kirara→BOOKOFF AcrossPlaza佐世保": {
  "min": 18,
  "km": 7.8,
  "dep": "08/10 10:30"
 },
 "BOOKOFF AcrossPlaza佐世保→すき家 35號佐世保大和店": {
  "min": 4,
  "km": 1.1,
  "dep": "08/10 12:19"
 },
 "すき家 35號佐世保大和店→伊萬里夢Misaki公園（滑草）": {
  "min": 57,
  "km": 35.5,
  "dep": "08/10 14:00"
 },
 "伊萬里夢Misaki公園（滑草）→BOOKOFF Karatsu Store": {
  "min": 28,
  "km": 23.4,
  "dep": "08/10 16:14"
 },
 "BOOKOFF Karatsu Store→Times停車場（BOOKOFF旁）": {
  "min": 59,
  "km": 51.2,
  "dep": "08/10 18:16"
 },
 "Times停車場（BOOKOFF旁）→BOOKOFF SUPER BAZAAR Mina天神": {
  "min": 2,
  "km": 0.3,
  "dep": "08/10 19:32"
 },
 "BOOKOFF SUPER BAZAAR Mina天神→新大谷特約停車場 Grand Parking": {
  "min": 6,
  "km": 1.5,
  "dep": "08/10 21:12"
 },
 "新大谷特約停車場 Grand Parking→博多新大谷飯店": {
  "min": 2,
  "km": 0.3,
  "dep": "08/10 21:24"
 },
 "駿河屋 博多丸井店→福岡國際機場": {
  "min": 13,
  "km": 3.5,
  "dep": "08/11 10:30"
 },
 "BOOKOFF 大野城三笠川店→九州國立博物館": {
  "min": 22,
  "km": 11,
  "dep": "08/08 16:40"
 },
 "九州國立博物館→Hard Off & Hobby Off 春日白水店": {
  "min": 37,
  "km": 13.2,
  "dep": "08/08 18:30"
 },
 "Hard Off & Hobby Off 春日白水店→BOOKOFF上津久留米店": {
  "min": 47,
  "km": 38.2,
  "dep": "08/08 20:30"
 }
};
// 停車緩衝分鐘（app 加在真實車程上，可調）
window.DRIVE_BUFFER_MIN = 5;
