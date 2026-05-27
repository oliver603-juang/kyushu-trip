// ==========================================
// config.js - 2026 暑假九州初體驗
// Generated from: 2026暑假九州初體驗.kmz
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

window.STAY_OPTIONS = ["30 min","1 hr","1.5 hr","2 hr","2.5 hr","3 hr","4 hr","5 hr","Overnight","-"];

// 2. 主行程資料
window.RAW_KML_DATA = [
  {
    dayId: "day1", date: "8/7 (四)", title: "福岡→北九州", themeColor: "bg-[#E4C2C1]",
    spots: [
      { name: "臺灣桃園國際機場", lat: 25.0804884, lon: 121.2311579, desc: "JX840 星宇航空 09:35 出發", mapCode: "", driveTime: "", ticket: { adult: 0, child: 0 } },
      { name: "福岡國際機場", lat: 33.5849988, lon: 130.4490906, desc: "JX840 抵達 13:05，入境＋取車", mapCode: "", driveTime: "", ticket: { adult: 0, child: 0 } },
      { name: "Yamaya Factory Terrace", lat: 33.6319684, lon: 130.5209968, desc: "明太子工廠見學＋直賣所。營業 10:00~17:00", mapCode: "55 752 414*52", driveTime: "國道19分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF + Hard Off", lat: 33.6545076, lon: 130.4923254, desc: "福岡挖寶第一站。", mapCode: "13 569 130*24", driveTime: "9分", ticket: { adult: 0, child: 0 } },
      { name: "ハードオフ福岡中間店", lat: 33.8180129, lon: 130.7158762, desc: "Hard Off 福岡中間店。", mapCode: "68 536 695*78", driveTime: "40分", ticket: { adult: 0, child: 0 } },
      { name: "ART 新田川小倉酒店", lat: 33.879354, lon: 130.880973, desc: "北九州小倉住宿。", mapCode: "16 466 090*23", driveTime: "27分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day2", date: "8/8 (五)", title: "久留米→佐賀", themeColor: "bg-[#A9BFA8]",
    spots: [
      { name: "TOTO博物館", lat: 33.8722021, lon: 130.8721104, desc: "TOTO 衛浴品牌博物館。營業 10:00-17:00", mapCode: "16 434 268*63", driveTime: "9分", ticket: { adult: 0, child: 0 } },
      { name: "Hard Off Fukuoka Yukuhashi", lat: 33.7296929, lon: 130.9658656, desc: "行橋 Hard Off。", mapCode: "96 836 155*78", driveTime: "35分", ticket: { adult: 0, child: 0 } },
      { name: "撒隆巴斯藥物博物館", lat: 33.3978309, lon: 130.5111389, desc: "久光製藥歷史博物館。", mapCode: "37 826 318*07", driveTime: "1小時18分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF上津久留米店", lat: 33.2849572, lon: 130.5110566, desc: "久留米 BOOKOFF。", mapCode: "37 406 708*24", driveTime: "25分", ticket: { adult: 0, child: 0 } },
      { name: "Hard Off 佐賀店", lat: 33.2212552, lon: 130.3077721, desc: "佐賀 Hard Off。", mapCode: "87 202 126*02", driveTime: "37分", ticket: { adult: 0, child: 0 } },
      { name: "APA酒店 佐賀站南口", lat: 33.2629778, lon: 130.2996529, desc: "佐賀站旁住宿。", mapCode: "87 351 127*20", driveTime: "10分", ticket: { adult: 0, child: 0 } },
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
      { name: "佐世保中央飯店", lat: 33.1702927, lon: 129.7231849, desc: "佐世保市區住宿。", mapCode: "89 027 031*61", driveTime: "", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day4", date: "8/10 (日)", title: "佐世保→博多", themeColor: "bg-[#E8D595]",
    spots: [
      { name: "九十九島水族館 海洋kirara", lat: 33.1614464, lon: 129.6790753, desc: "以水母聞名的九十九島水族館。", mapCode: "307 546 892*73", driveTime: "13分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF AcrossPlaza佐世保", lat: 33.1595916, lon: 129.74322, desc: "佐世保大型 BOOKOFF。", mapCode: "307 554 673*13", driveTime: "16分", ticket: { adult: 0, child: 0 } },
      { name: "伊萬里夢Misaki公園（滑草）", lat: 33.3469052, lon: 129.8502744, desc: "伊萬里滑草親子設施。", mapCode: "458 357 219*57", driveTime: "50分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF Karatsu Store", lat: 33.4400913, lon: 129.9643643, desc: "唐津 BOOKOFF。", mapCode: "182 370 389*11", driveTime: "27分", ticket: { adult: 0, child: 0 } },
      { name: "博多新大谷飯店", lat: 33.5830614, lon: 130.4063095, desc: "博多站旁高級飯店。特約停車場：Grand Parking", mapCode: "13 289 511*86", driveTime: "64分", ticket: { adult: 0, child: 0 } },
    ],
  },
  {
    dayId: "day5", date: "8/11 (一)", title: "博多→回家", themeColor: "bg-[#D4A5A5]",
    spots: [
      { name: "Times停車場（BOOKOFF旁）", lat: 33.5942146, lon: 130.3988619, desc: "停車後步行至天神 BOOKOFF。", mapCode: "13 318 784*18", driveTime: "12分", ticket: { adult: 0, child: 0 } },
      { name: "BOOKOFF SUPER BAZAAR Mina天神", lat: 33.5942146, lon: 130.3988619, desc: "九州最大 BOOKOFF，最後挖寶！", mapCode: "", driveTime: "", ticket: { adult: 0, child: 0 } },
      { name: "福岡國際機場", lat: 33.5849988, lon: 130.4490906, desc: "還車 → JX841 14:15 出發 → 15:45 抵達桃園", mapCode: "", driveTime: "", ticket: { adult: 0, child: 0 } },
    ],
  },
];

// 3. 願望清單
window.WISHLIST_DATA = [
  { name: "BOOKOFF SUPER BAZAAR Mina Tenjin", lat: 33.5942146, lon: 130.3988619, desc: "天神地下街旁的大型 BOOKOFF SUPER BAZAAR。", mapCode: "" },
  { name: "BOOKOFF PLUS 佐賀南部繞道店", lat: 33.2390376, lon: 130.3007156, desc: "佐賀大型 BOOKOFF。", mapCode: "87 261 250*14" },
  { name: "BOOKOFF Onojyo Mikasagawa", lat: 33.5346, lon: 130.4761, desc: "大野城三笠川 BOOKOFF。", mapCode: "" },
  { name: "Hard Off & Hobby Off 春日白水", lat: 33.5261, lon: 130.4691, desc: "春日白水 Hard Off + Hobby Off。", mapCode: "" },
  { name: "九州鐵道紀念館", lat: 33.8902, lon: 130.8831, desc: "門司港旁，九州鐵路歷史展示。", mapCode: "" },
  { name: "BOOKOFF (其他)", lat: 33.59, lon: 130.40, desc: "其他待確認 BOOKOFF 分店。", mapCode: "" },
];

// 4. 備用餐廳（すき家）
window.BACKUP_RESTAURANTS = [
  { name: "すき家 小倉北神岳店", lat: 33.879, lon: 130.881, mapCode: "" },
  { name: "すき家 佐賀本庄店", lat: 33.263, lon: 130.300, mapCode: "" },
  { name: "すき家 35號佐世保大和店", lat: 33.170, lon: 129.723, mapCode: "" },
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
    dep: "14:15",
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
  company: "待確認",
  pickupDate: "8/7 (四)",
  pickupTime: "13:30",
  pickupLocation: "福岡機場國際航廈",
  returnDate: "8/11 (一)",
  returnTime: "12:00",
  returnLocation: "福岡機場國際航廈",
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

// 10. 沿途連鎖店快速搜尋
window.CHAIN_STORES = [
  { cat: "丼飯", name: "すき家", icon: "🥩", query: "すき家" },
  { cat: "丼飯", name: "吉野家", icon: "🐂", query: "吉野家" },
  { cat: "丼飯", name: "松屋", icon: "🍛", query: "松屋+牛丼" },
  { cat: "丼飯", name: "なか卯", icon: "🐔", query: "なか卯" },
  { cat: "超市", name: "AEON", icon: "🛒", query: "イオン+AEON+MaxValu" },
  { cat: "超市", name: "OK超市", icon: "🏷️", query: "オーケーストア+OK" },
  { cat: "超市", name: "ロピア", icon: "🥩", query: "ロピア+LOPIA" },
  { cat: "超市", name: "業務超市", icon: "📦", query: "業務スーパー" },
  { cat: "超市", name: "LIFE", icon: "🏪", query: "ライフ+LIFE+スーパー" },
  { cat: "超市", name: "SEIYU", icon: "🟢", query: "西友+SEIYU" },
  { cat: "超市", name: "ヤオコー", icon: "🍎", query: "ヤオコー+YAOKO" },
  { cat: "超市", name: "イトーヨーカドー", icon: "🏬", query: "イトーヨーカドー" },
];
