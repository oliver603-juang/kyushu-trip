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
    dayId: "day1", date: "8/7 (四)", title: "福岡→北九州", themeColor: "bg-[#E4C2C1]", defaultStart: "13:05",
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
    dayId: "day2", date: "8/8 (五)", title: "小倉→久留米→佐賀", themeColor: "bg-[#A9BFA8]",
    spots: [
      { name: "TOTO博物館", lat: 33.8722021, lon: 130.8721104, desc: "TOTO 衛浴品牌博物館。營業 10:00-17:00", mapCode: "16 434 268*63", driveTime: "9分", ticket: { adult: 0, child: 0 } },
      { name: "有的有的停車場", lat: 33.8879913, lon: 130.885649, desc: "あるあるCity 停車場，營業 11:00 開始。", mapCode: "16 496 103*00", driveTime: "9分", ticket: { adult: 0, child: 0 } },
      { name: "駿河屋 小倉AruaruCity店", lat: 33.8876455, lon: 130.884624, desc: "🧸 絕版 LEGO 救星！中古動漫/絕版模型霸主，AruaruCity 2F/4F，小倉站前步行可達。", mapCode: "", driveTime: "步行1分", ticket: { adult: 0, child: 0 } },
      { name: "薩莉亞 小倉站前AruaruCity店", lat: 33.8874016, lon: 130.884736, desc: "午餐：Saizeriya 小倉站前 AruaruCity 店。", mapCode: "", driveTime: "同棟", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF 大野城三笠川店", lat: 33.5468162, lon: 130.4828346, desc: "大野城 BOOKOFF，旁邊有超市。", mapCode: "13 178 249*77", driveTime: "1小時", ticket: { adult: 0, child: 0 } },
      { name: "Hard Off & Hobby Off 春日白水店", lat: 33.5092061, lon: 130.4496045, desc: "春日白水 Hard Off + Hobby Off，有樂高！", mapCode: "13 024 636*17", driveTime: "16分", ticket: { adult: 0, child: 0 } },
      { name: "撒隆巴斯藥物博物館", lat: 33.3978309, lon: 130.5111389, desc: "久光製藥歷史博物館。", mapCode: "37 826 318*07", driveTime: "27分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF上津久留米店", lat: 33.2849572, lon: 130.5110566, desc: "久留米 BOOKOFF。", mapCode: "37 406 708*24", driveTime: "25分", ticket: { adult: 0, child: 0 } },
      { name: "Hard Off 佐賀店", lat: 33.2212552, lon: 130.3077721, desc: "佐賀 Hard Off。", mapCode: "87 202 126*02", driveTime: "37分", ticket: { adult: 0, child: 0 } },
      { name: "APA酒店 佐賀站南口", lat: 33.2629778, lon: 130.2996529, desc: "佐賀站旁住宿。旁邊停車場1泊1,000円(41 532 501*11)", mapCode: "87 351 127*20", driveTime: "10分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day3", date: "8/9 (六)", title: "佐賀→佐世保", themeColor: "bg-[#A2C4C9]",
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
    dayId: "day4", date: "8/10 (日)", title: "佐世保→博多", themeColor: "bg-[#E8D595]",
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
    dayId: "day5", date: "8/11 (一)", title: "博多→回家", themeColor: "bg-[#D4A5A5]",
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
    date: "8/7 (四)",
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
    date: "8/11 (一)",
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
  pickupDate: "8/7 (四)",
  pickupTime: "13:30",
  pickupLocation: "ＯＲＩＸ國際線店（福岡機場國際航廈旁）",
  returnDate: "8/11 (一)",
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

// 11. 預計算連鎖店繞路距離（由 chain-calculator v4.1 產生，Places API New）
// 產生時間：2026/7/21
// 增量：新算 4 段、沿用 18 段、短程留空 5 段
// 優化：languageCode=ja, includedType過濾, 動態分段搜尋, 負數修正, 座標導航
window.CHAIN_ROUTES = {
  "福岡國際機場→ＯＲＩＸ國際線店": {
    "d1": null,
    "stores": []
  },
  "ＯＲＩＸ國際線店→Yamaya Factory Terrace": {
    "d1": 19085,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 粕屋仲原店",
        "d2": 13057,
        "detour": 0,
        "lat": 33.6109439,
        "lng": 130.4589404
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 粕屋仲原店",
        "d2": 13057,
        "detour": 0,
        "lat": 33.6104848,
        "lng": 130.4565942
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 二又瀬店",
        "d2": 13057,
        "detour": 0,
        "lat": 33.6076677,
        "lng": 130.4416459
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 志免町店",
        "d2": 18034,
        "detour": 0,
        "lat": 33.5881667,
        "lng": 130.4778414
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー須恵店",
        "d2": 15060,
        "detour": 0,
        "lat": 33.5961144,
        "lng": 130.5043716
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 19554,
        "detour": 469,
        "lat": 33.5818374,
        "lng": 130.4389876
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 26256,
        "detour": 7171,
        "lat": 33.5926385,
        "lng": 130.3838095
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
        "branch": "すき家 福岡土井店",
        "d2": 11607,
        "detour": 6148,
        "lat": 33.6351165,
        "lng": 130.4620117
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 粕屋仲原店",
        "d2": 15303,
        "detour": 9844,
        "lat": 33.6106395,
        "lng": 130.4585456
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 二又瀬店",
        "d2": 18082,
        "detour": 12623,
        "lat": 33.6076677,
        "lng": 130.4416459
      }
    ]
  },
  "BOOKOFF + Hard Off→ハードオフ福岡中間店": {
    "d1": 37457,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ３号線宗像店",
        "d2": 38059,
        "detour": 602,
        "lat": 33.786,
        "lng": 130.5551
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "わくわく広場 イオンモール福津店",
        "d2": 39696,
        "detour": 2239,
        "lat": 33.7528301,
        "lng": 130.4935126
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー古賀中央店",
        "d2": 41598,
        "detour": 4141,
        "lat": 33.7338473,
        "lng": 130.475048
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 200号直方店",
        "d2": 49582,
        "detour": 12125,
        "lat": 33.751797,
        "lng": 130.7389489
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋（松のや併設）飯塚片島店",
        "d2": 50599,
        "detour": 13142,
        "lat": 33.6446045,
        "lng": 130.6850202
      }
    ]
  },
  "ハードオフ福岡中間店→ART 新田川小倉酒店": {
    "d1": 20210,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 八幡東枝光店",
        "d2": 21594,
        "detour": 1384,
        "lat": 33.8775629,
        "lng": 130.8136019
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 穴生店",
        "d2": 23204,
        "detour": 2994,
        "lat": 33.858806,
        "lng": 130.742959
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ３号線黒崎西店",
        "d2": 23535,
        "detour": 3325,
        "lat": 33.8637804,
        "lng": 130.7491766
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "西鉄ストア スピナ戸畑店",
        "d2": 23895,
        "detour": 3685,
        "lat": 33.899002,
        "lng": 130.83996
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 八幡東ナフコ店",
        "d2": 27121,
        "detour": 6911,
        "lat": 33.8702451,
        "lng": 130.8004596
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 小倉南方店",
        "d2": 29249,
        "detour": 9039,
        "lat": 33.8322603,
        "lng": 130.8624109
      }
    ]
  },
  "TOTO博物館→有的有的停車場": {
    "d1": 3372,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 小倉京町店",
        "d2": 3358,
        "detour": 0,
        "lat": 33.885505,
        "lng": 130.8810278
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 三萩野店",
        "d2": 3372,
        "detour": 0,
        "lat": 33.872218,
        "lng": 130.8768778
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 小倉駅前店（松のや併設）",
        "d2": 3587,
        "detour": 215,
        "lat": 33.886175,
        "lng": 130.880862
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 北九州リバーウォーク店",
        "d2": 4573,
        "detour": 1201,
        "lat": 33.885809,
        "lng": 130.8754882
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 小倉北神岳店",
        "d2": 5516,
        "detour": 2144,
        "lat": 33.8722926,
        "lng": 130.8921533
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "（株）西鉄ストア スピナ戸畑店惣菜・東洋食品",
        "d2": 12847,
        "detour": 9475,
        "lat": 33.899002,
        "lng": 130.83996
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 149341,
        "detour": 145969,
        "lat": 33.5818374,
        "lng": 130.4389876
      }
    ]
  },
  "有的有的停車場→駿河屋 小倉AruaruCity店": {
    "d1": null,
    "stores": []
  },
  "駿河屋 小倉AruaruCity店→薩莉亞 小倉站前AruaruCity店": {
    "d1": null,
    "stores": []
  },
  "薩莉亞 小倉站前AruaruCity店→BOOKOFF 大野城三笠川店": {
    "d1": 75022,
    "stores": [
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 飯塚太郎丸店",
        "d2": 72137,
        "detour": 0,
        "lat": 33.6082664,
        "lng": 130.6704054
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 千代店",
        "d2": 75457,
        "detour": 435,
        "lat": 33.8104022,
        "lng": 130.7440468
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 小倉片野店（松のや併設）",
        "d2": 75466,
        "detour": 444,
        "lat": 33.8624587,
        "lng": 130.8809677
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 粕屋仲原店",
        "d2": 75811,
        "detour": 789,
        "lat": 33.6109439,
        "lng": 130.4589404
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 八幡下上津役店",
        "d2": 77587,
        "detour": 2565,
        "lat": 33.8251228,
        "lng": 130.7439961
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "（株）西鉄ストア スピナ戸畑店惣菜・東洋食品",
        "d2": 79378,
        "detour": 4356,
        "lat": 33.899002,
        "lng": 130.83996
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン穂波店 １Ｆｍｉｘ−Ｏ",
        "d2": 81742,
        "detour": 6720,
        "lat": 33.6370709,
        "lng": 130.6738584
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 82053,
        "detour": 7031,
        "lat": 33.5818374,
        "lng": 130.4389876
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
        "lng": 130.4789216
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
        "lng": 130.4596816
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大野城横峰店(松のや併設)",
        "d2": 10741,
        "detour": 3913,
        "lat": 33.5058883,
        "lng": 130.4749602
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "ザ・ビッグ 南福岡店",
        "d2": 11395,
        "detour": 4567,
        "lat": 33.5521388,
        "lng": 130.456402
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 18159,
        "detour": 11331,
        "lat": 33.5818374,
        "lng": 130.4389876
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー呉服町店",
        "d2": 25167,
        "detour": 18339,
        "lat": 33.5979522,
        "lng": 130.4102669
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 33062,
        "detour": 26234,
        "lat": 33.5926385,
        "lng": 130.3838095
      }
    ]
  },
  "Hard Off & Hobby Off 春日白水店→撒隆巴斯藥物博物館": {
    "d1": 20419,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 春日惣利店",
        "d2": 20478,
        "detour": 59,
        "lat": 33.5110074,
        "lng": 130.4691777
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 筑紫野店",
        "d2": 20539,
        "detour": 120,
        "lat": 33.4959122,
        "lng": 130.5082012
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 大野城横峰店(松のや併設)",
        "d2": 21678,
        "detour": 1259,
        "lat": 33.5058883,
        "lng": 130.4749602
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 南バイパス太宰府店",
        "d2": 23992,
        "detour": 3573,
        "lat": 33.5017948,
        "lng": 130.5315365
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー鳥栖店",
        "d2": 27405,
        "detour": 6986,
        "lat": 33.3739395,
        "lng": 130.5096822
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 42389,
        "detour": 21970,
        "lat": 33.5818374,
        "lng": 130.4389876
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 57291,
        "detour": 36872,
        "lat": 33.5926385,
        "lng": 130.3838095
      }
    ]
  },
  "撒隆巴斯藥物博物館→BOOKOFF上津久留米店": {
    "d1": 19848,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 西鉄久留米駅前店",
        "d2": 16731,
        "detour": 0,
        "lat": 33.3139092,
        "lng": 130.5234014
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 久留米市役所前店",
        "d2": 14792,
        "detour": 0,
        "lat": 33.319049,
        "lng": 130.5072282
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 久留米通町店",
        "d2": 14736,
        "detour": 0,
        "lat": 33.31874,
        "lng": 130.510379
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー鳥栖店",
        "d2": 15446,
        "detour": 0,
        "lat": 33.3739395,
        "lng": 130.5096822
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 国分店",
        "d2": 21197,
        "detour": 1349,
        "lat": 33.2971986,
        "lng": 130.534184
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "わいわいファーム イオン小郡店",
        "d2": 27692,
        "detour": 7844,
        "lat": 33.4087585,
        "lng": 130.564828
      }
    ]
  },
  "BOOKOFF上津久留米店→Hard Off 佐賀店": {
    "d1": 25894,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 佐賀環状東通り店",
        "d2": 27723,
        "detour": 1829,
        "lat": 33.2539335,
        "lng": 130.3209977
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 28768,
        "detour": 2874,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 34号吉野ヶ里店",
        "d2": 31178,
        "detour": 5284,
        "lat": 33.3211228,
        "lng": 130.390927
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 佐賀北店",
        "d2": 36260,
        "detour": 10366,
        "lat": 33.284007,
        "lng": 130.2842115
      }
    ]
  },
  "Hard Off 佐賀店→APA酒店 佐賀站南口": {
    "d1": 5300,
    "stores": [
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 5712,
        "detour": 412,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "ザ・ビッグ多布施店",
        "d2": 6493,
        "detour": 1193,
        "lat": 33.2565616,
        "lng": 130.2920807
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 佐賀本庄店",
        "d2": 7083,
        "detour": 1783,
        "lat": 33.2391727,
        "lng": 130.2991893
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 南佐賀店",
        "d2": 8097,
        "detour": 2797,
        "lat": 33.2137855,
        "lng": 130.3085132
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０８号線佐賀大学前店",
        "d2": 8582,
        "detour": 3282,
        "lat": 33.2396045,
        "lng": 130.287591
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
        "lng": 130.2920807
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 5724,
        "detour": 3035,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０８号線佐賀大学前店",
        "d2": 6025,
        "detour": 3336,
        "lat": 33.2396045,
        "lng": 130.287591
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 大財店",
        "d2": 6595,
        "detour": 3906,
        "lat": 33.263213,
        "lng": 130.3083551
      }
    ]
  },
  "BOOKOFF PLUS 佐賀南部繞道店→BOOKOFF Saga Nabeshima": {
    "d1": 5996,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０８号線佐賀大学前店",
        "d2": 6099,
        "detour": 103,
        "lat": 33.2396045,
        "lng": 130.287591
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "ザ・ビッグ多布施店",
        "d2": 6210,
        "detour": 214,
        "lat": 33.2565616,
        "lng": 130.2920807
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 7285,
        "detour": 1289,
        "lat": 33.262122,
        "lng": 130.303406
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 大財店",
        "d2": 8620,
        "detour": 2624,
        "lat": 33.263213,
        "lng": 130.3083551
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 佐賀本庄店",
        "d2": 8832,
        "detour": 2836,
        "lat": 33.2391727,
        "lng": 130.2991893
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
        "d2": 28955,
        "detour": 132,
        "lat": 33.2165765,
        "lng": 130.1621306
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ３４号線佐賀店",
        "d2": 29997,
        "detour": 1174,
        "lat": 33.272813,
        "lng": 130.276234
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
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 佐賀北店",
        "d2": 41136,
        "detour": 12313,
        "lat": 33.284007,
        "lng": 130.2842115
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 佐賀大財店（松のや併設）",
        "d2": 45172,
        "detour": 16349,
        "lat": 33.262122,
        "lng": 130.303406
      }
    ]
  },
  "佐賀縣立宇宙科學館 夢銀河→Hard Off Sasebo": {
    "d1": 31616,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ３５号線佐世保大塔店",
        "d2": 31616,
        "detour": 0,
        "lat": 33.1502922,
        "lng": 129.7805164
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 卸本町店",
        "d2": 31470,
        "detour": 0,
        "lat": 33.1516955,
        "lng": 129.7701648
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 34483,
        "detour": 2867,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 34号武雄店",
        "d2": 36058,
        "detour": 4442,
        "lat": 33.1956671,
        "lng": 130.0308674
      }
    ]
  },
  "未確認生物UMA展（島瀬美術センター）→佐世保中央飯店": {
    "d1": null,
    "stores": []
  },
  "Hard Off Sasebo→未確認生物UMA展（島瀬美術センター）": {
    "d1": 6517,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 35号佐世保大和店",
        "d2": 6537,
        "detour": 20,
        "lat": 33.1590673,
        "lng": 129.7513796
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 佐世保下京店",
        "d2": 6566,
        "detour": 49,
        "lat": 33.1675549,
        "lng": 129.7238342
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 7337,
        "detour": 820,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 卸本町店",
        "d2": 7831,
        "detour": 1314,
        "lat": 33.1516955,
        "lng": 129.7701648
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
        "d2": 9711,
        "detour": 1933,
        "lat": 33.1590673,
        "lng": 129.7513796
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 10801,
        "detour": 3023,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 卸本町店",
        "d2": 18163,
        "detour": 10385,
        "lat": 33.1516955,
        "lng": 129.7701648
      }
    ]
  },
  "佐世保中央飯店→おもちゃのあおき 四ヶ町アーケード本島店": {
    "d1": null,
    "stores": []
  },
  "BOOKOFF AcrossPlaza佐世保→すき家 35號佐世保大和店": {
    "d1": null,
    "stores": []
  },
  "すき家 35號佐世保大和店→伊萬里夢Misaki公園（滑草）": {
    "d1": 38029,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ３５号線佐世保大塔店",
        "d2": 36532,
        "detour": 0,
        "lat": 33.1502922,
        "lng": 129.7805164
      },
      {
        "name": "イオン",
        "icon": "🛒",
        "cat": "超市",
        "branch": "イオン 佐世保白岳店",
        "d2": 36780,
        "detour": 0,
        "lat": 33.1512966,
        "lng": 129.7475773
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 瀬戸越店",
        "d2": 37321,
        "detour": 0,
        "lat": 33.2086717,
        "lng": 129.7340562
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 202号伊万里店",
        "d2": 38030,
        "detour": 1,
        "lat": 33.2619825,
        "lng": 129.8588674
      }
    ]
  },
  "伊萬里夢Misaki公園（滑草）→BOOKOFF Karatsu Store": {
    "d1": 23432,
    "stores": [
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０４号線唐津店",
        "d2": 27256,
        "detour": 3824,
        "lat": 33.4492,
        "lng": 129.9736
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 唐津栄町店",
        "d2": 28762,
        "detour": 5330,
        "lat": 33.4461,
        "lng": 129.9792818
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 伊万里店",
        "d2": 35023,
        "detour": 11591,
        "lat": 33.2749939,
        "lng": 129.8920494
      }
    ]
  },
  "BOOKOFF Karatsu Store→Times停車場（BOOKOFF旁）": {
    "d1": 52438,
    "stores": [
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー 有田店",
        "d2": 51937,
        "detour": 0,
        "lat": 33.5558057,
        "lng": 130.3333055
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡小田部店",
        "d2": 53187,
        "detour": 749,
        "lat": 33.5681652,
        "lng": 130.3306934
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 福重店",
        "d2": 53314,
        "detour": 876,
        "lat": 33.568082,
        "lng": 130.3150501
      },
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 唐津栄町店",
        "d2": 53948,
        "detour": 1510,
        "lat": 33.4461,
        "lng": 129.9792818
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 ２０２号線今宿店",
        "d2": 54595,
        "detour": 2157,
        "lat": 33.5819754,
        "lng": 130.262309
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア長浜店",
        "d2": 55118,
        "detour": 2680,
        "lat": 33.5926385,
        "lng": 130.3838095
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 周船寺店（松のや併設）",
        "d2": 55186,
        "detour": 2748,
        "lat": 33.574372,
        "lng": 130.249748
      }
    ]
  },
  "Times停車場（BOOKOFF旁）→BOOKOFF SUPER BAZAAR Mina天神": {
    "d1": null,
    "stores": []
  },
  "BOOKOFF SUPER BAZAAR Mina天神→新大谷特約停車場 Grand Parking": {
    "d1": null,
    "stores": []
  },
  "新大谷特約停車場 Grand Parking→博多新大谷飯店": {
    "d1": null,
    "stores": []
  },
  "駿河屋 博多丸井店→福岡國際機場": {
    "d1": null,
    "stores": [
      {
        "name": "すき家",
        "icon": "🥩",
        "cat": "丼飯",
        "branch": "すき家 博多駅前四丁目店",
        "d2": 7053,
        "detour": 0,
        "lat": 33.5862974,
        "lng": 130.4170379
      },
      {
        "name": "松屋",
        "icon": "🍛",
        "cat": "丼飯",
        "branch": "松屋 博多駅前通り店",
        "d2": 6352,
        "detour": 0,
        "lat": 33.589803,
        "lng": 130.413782
      },
      {
        "name": "業務スーパー",
        "icon": "📦",
        "cat": "超市",
        "branch": "業務スーパー 博多せんしょう店",
        "d2": 6765,
        "detour": 0,
        "lat": 33.603074,
        "lng": 130.412061
      },
      {
        "name": "西友",
        "icon": "🟢",
        "cat": "超市",
        "branch": "サニー博多住吉店",
        "d2": 7072,
        "detour": 0,
        "lat": 33.5831369,
        "lng": 130.417514
      },
      {
        "name": "ロピア",
        "icon": "🥩",
        "cat": "超市",
        "branch": "ロピア 博多ヨドバシ店",
        "d2": 6476,
        "detour": 0,
        "lat": 33.5879076,
        "lng": 130.4215863
      },
      {
        "name": "吉野家",
        "icon": "🐂",
        "cat": "丼飯",
        "branch": "吉野家 博多デイトスアネックス店",
        "d2": 7693,
        "detour": 111,
        "lat": 33.590776,
        "lng": 130.4215928
      },
      {
        "name": "なか卯",
        "icon": "🐔",
        "cat": "丼飯",
        "branch": "なか卯 福岡半道橋店",
        "d2": 8748,
        "detour": 1166,
        "lat": 33.5818374,
        "lng": 130.4389876
      }
    ]
  }
};
