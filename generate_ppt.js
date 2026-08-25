/**
 * Generator Presentasi PowerPoint
 * Proyek : CampusVehicle SaaS API Service (220_Project)
 * Output : Presentasi_CampusVehicle_API.pptx
 */
const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pptx.layout = "WIDE";
pptx.author = "220_Project";
pptx.company = "Pengembangan Web Service";
pptx.title = "CampusVehicle SaaS API Service";

/* ================= PALET WARNA ================= */
const C = {
  navy: "10243E",
  navy2: "173154",
  ink: "1E293B",
  muted: "5B6B7F",
  accent: "2E7CF6",
  cyan: "06B6D4",
  light: "F3F6FB",
  card: "FFFFFF",
  border: "DCE4EF",
  green: "0E9F6E",
  greenBg: "E6F6EF",
  amber: "C77400",
  amberBg: "FCF1DF",
  red: "D23B3B",
  redBg: "FBEAEA",
  blueBg: "E8F0FE",
  white: "FFFFFF",
};

const FONT = "Segoe UI";
const MONO = "Consolas";
const W = 13.333;
const H = 7.5;

let pageNo = 0;

/* ================= HELPER ================= */
function baseSlide(bg) {
  const s = pptx.addSlide();
  s.background = { color: bg || C.light };
  return s;
}

function header(s, kicker, title) {
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: 0.14, fill: { color: C.accent } });
  s.addText(kicker.toUpperCase(), {
    x: 0.6, y: 0.34, w: 11.5, h: 0.32,
    fontFace: FONT, fontSize: 11, bold: true, color: C.accent, charSpacing: 3,
  });
  s.addText(title, {
    x: 0.6, y: 0.62, w: 12.1, h: 0.72,
    fontFace: FONT, fontSize: 29, bold: true, color: C.navy,
  });
}

function footer(s) {
  pageNo += 1;
  s.addShape(pptx.ShapeType.line, { x: 0.6, y: H - 0.52, w: W - 1.2, h: 0, line: { color: C.border, width: 0.75 } });
  s.addText("CampusVehicle SaaS API Service", {
    x: 0.6, y: H - 0.46, w: 6, h: 0.3, fontFace: FONT, fontSize: 9, color: C.muted,
  });
  s.addText(String(pageNo).padStart(2, "0"), {
    x: W - 1.15, y: H - 0.46, w: 0.55, h: 0.3, align: "right",
    fontFace: FONT, fontSize: 9, bold: true, color: C.muted,
  });
}

function card(s, x, y, w, h, fillColor) {
  s.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    fill: { color: fillColor || C.card },
    line: { color: C.border, width: 1 },
    rectRadius: 0.07,
    shadow: { type: "outer", angle: 90, blur: 7, offset: 2, color: "8FA0B5", opacity: 0.3 },
  });
}

/** Bullet dengan lead tebal + deskripsi */
function leadBullets(s, items, opt) {
  const o = Object.assign({ x: 0.6, y: 1.7, w: 6, h: 4.5, size: 14 }, opt);
  const runs = [];
  items.forEach(([lead, rest]) => {
    runs.push({
      text: lead,
      options: {
        bold: true, color: C.navy,
        bullet: { code: "25AA", indent: 14 },
        breakLine: false,
      },
    });
    runs.push({ text: rest, options: { color: C.ink, breakLine: true } });
  });
  s.addText(runs, {
    x: o.x, y: o.y, w: o.w, h: o.h,
    fontFace: FONT, fontSize: o.size, valign: "top",
    lineSpacingMultiple: 1.18, paraSpaceAfter: 10,
  });
}

function chip(s, x, y, w, text, bg, fg) {
  s.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h: 0.42, fill: { color: bg }, line: { type: "none" }, rectRadius: 0.21,
  });
  s.addText(text, {
    x, y, w, h: 0.42, align: "center", valign: "middle",
    fontFace: FONT, fontSize: 11, bold: true, color: fg || C.white,
  });
}

function arrowRight(s, x, y, color) {
  s.addShape(pptx.ShapeType.rightArrow, {
    x, y, w: 0.42, h: 0.26, fill: { color: color || C.accent }, line: { type: "none" },
  });
}

function flowBox(s, x, y, w, h, title, sub, bg, fg) {
  s.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h, fill: { color: bg || C.card }, line: { color: C.border, width: 1 }, rectRadius: 0.06,
    shadow: { type: "outer", angle: 90, blur: 5, offset: 2, color: "8FA0B5", opacity: 0.28 },
  });
  const runs = [{ text: title, options: { bold: true, fontSize: 12.5, color: fg || C.navy, breakLine: !!sub } }];
  if (sub) runs.push({ text: sub, options: { fontSize: 10, color: fg === C.white ? "B9CBE4" : C.muted } });
  s.addText(runs, { x, y, w, h, align: "center", valign: "middle", fontFace: FONT, margin: 4 });
}

/* ============================================================
   SLIDE 1 — JUDUL
============================================================ */
{
  const s = baseSlide(C.navy);

  // dekorasi lingkaran
  s.addShape(pptx.ShapeType.ellipse, { x: 10.1, y: -1.6, w: 4.6, h: 4.6, fill: { color: C.accent, transparency: 78 }, line: { type: "none" } });
  s.addShape(pptx.ShapeType.ellipse, { x: 11.4, y: 0.4, w: 2.6, h: 2.6, fill: { color: C.cyan, transparency: 70 }, line: { type: "none" } });
  s.addShape(pptx.ShapeType.ellipse, { x: -1.4, y: 5.6, w: 3.6, h: 3.6, fill: { color: C.accent, transparency: 82 }, line: { type: "none" } });

  chip(s, 0.85, 1.15, 3.65, "PROYEK PENGEMBANGAN WEB SERVICE", C.navy2, "9EC1FF");

  s.addText([
    { text: "CampusVehicle", options: { color: C.white, breakLine: true } },
    { text: "SaaS API Service", options: { color: "6FB1FF" } },
  ], { x: 0.82, y: 1.75, w: 11.5, h: 2.1, fontFace: FONT, fontSize: 54, bold: true, lineSpacingMultiple: 1.02 });

  s.addText(
    "REST API penyedia data emisi & efisiensi kendaraan kampus — dilengkapi autentikasi JWT, manajemen API key, dan public API siap pakai bagi konsumen eksternal.",
    { x: 0.85, y: 3.95, w: 9.6, h: 0.95, fontFace: FONT, fontSize: 15, color: "C7D6EA", lineSpacingMultiple: 1.2 }
  );

  const techs = ["Node.js", "Express 5", "PostgreSQL", "Sequelize ORM", "JWT + bcrypt", "Vercel"];
  let tx = 0.85;
  techs.forEach((t) => {
    const wch = 0.42 + t.length * 0.105;
    s.addShape(pptx.ShapeType.roundRect, { x: tx, y: 5.35, w: wch, h: 0.44, fill: { color: C.navy2 }, line: { color: "2C4A78", width: 1 }, rectRadius: 0.22 });
    s.addText(t, { x: tx, y: 5.35, w: wch, h: 0.44, align: "center", valign: "middle", fontFace: FONT, fontSize: 11.5, bold: true, color: "BFDBFF" });
    tx += wch + 0.22;
  });

  s.addText("Repository : github.com/bagasadit123/220_Project", {
    x: 0.85, y: 6.55, w: 8, h: 0.35, fontFace: MONO, fontSize: 11, color: "7E93AF",
  });
}

/* ============================================================
   SLIDE 2 — AGENDA
============================================================ */
{
  const s = baseSlide();
  header(s, "Outline", "Agenda Presentasi");
  footer(s);

  const items = [
    ["01", "Deskripsi Proyek", "Latar belakang & solusi yang ditawarkan"],
    ["02", "Teknologi", "Stack yang digunakan beserta perannya"],
    ["03", "Arsitektur & Struktur", "Pola MVC dan organisasi folder"],
    ["04", "Desain Database", "Empat tabel utama dan relasinya"],
    ["05", "Fitur Unggulan", "Auth, API key, CRUD, dan public API"],
    ["06", "Keamanan", "Alur verifikasi & perlindungan data"],
    ["07", "Deployment", "Vercel + Supabase & variabel lingkungan"],
    ["08", "Dokumentasi API", "Daftar lengkap endpoint"],
  ];

  const colX = [0.6, 6.85];
  const colW = 5.9;
  items.forEach((it, i) => {
    const cx = colX[i % 2];
    const cy = 1.72 + Math.floor(i / 2) * 1.24;
    card(s, cx, cy, colW, 1.04);
    s.addShape(pptx.ShapeType.roundRect, { x: cx + 0.22, y: cy + 0.26, w: 0.52, h: 0.52, fill: { color: i % 2 === 0 ? C.blueBg : "E0F5F8" }, line: { type: "none" }, rectRadius: 0.1 });
    s.addText(it[0], { x: cx + 0.22, y: cy + 0.26, w: 0.52, h: 0.52, align: "center", valign: "middle", fontFace: FONT, fontSize: 14, bold: true, color: i % 2 === 0 ? C.accent : C.cyan });
    s.addText([
      { text: it[1], options: { bold: true, fontSize: 14.5, color: C.navy, breakLine: true } },
      { text: it[2], options: { fontSize: 10.5, color: C.muted } },
    ], { x: cx + 0.92, y: cy + 0.12, w: colW - 1.1, h: 0.84, valign: "middle", fontFace: FONT, lineSpacingMultiple: 1.08 });
  });
}

/* ============================================================
   SLIDE 3 — DESKRIPSI PROYEK
============================================================ */
{
  const s = baseSlide();
  header(s, "Pendahuluan", "Deskripsi Proyek");
  footer(s);

  // Kartu latar belakang
  card(s, 0.6, 1.68, 6.0, 2.6);
  s.addShape(pptx.ShapeType.roundRect, { x: 0.85, y: 1.92, w: 0.5, h: 0.5, fill: { color: C.amberBg }, line: { type: "none" }, rectRadius: 0.1 });
  s.addText("!", { x: 0.85, y: 1.92, w: 0.5, h: 0.5, align: "center", valign: "middle", fontFace: FONT, fontSize: 16, bold: true, color: C.amber });
  s.addText("Latar Belakang", { x: 1.5, y: 1.94, w: 4.5, h: 0.45, fontFace: FONT, fontSize: 16, bold: true, color: C.navy, valign: "middle" });
  s.addText(
    "Data kendaraan operasional kampus (emisi CO\u2082, efisiensi bahan bakar) tersebar dan sulit diakses pihak luar. Pengembang aplikasi butuh cara standar untuk memakai data tersebut tanpa akses langsung ke database.",
    { x: 0.88, y: 2.5, w: 5.45, h: 1.65, fontFace: FONT, fontSize: 12.5, color: C.ink, lineSpacingMultiple: 1.18, valign: "top" }
  );

  // Kartu solusi
  card(s, 6.85, 1.68, 6.0, 2.6);
  s.addShape(pptx.ShapeType.roundRect, { x: 7.1, y: 1.92, w: 0.5, h: 0.5, fill: { color: C.greenBg }, line: { type: "none" }, rectRadius: 0.1 });
  s.addText("\u2713", { x: 7.1, y: 1.92, w: 0.5, h: 0.5, align: "center", valign: "middle", fontFace: FONT, fontSize: 15, bold: true, color: C.green });
  s.addText("Solusi : API sebagai Layanan (SaaS)", { x: 7.75, y: 1.94, w: 5.0, h: 0.45, fontFace: FONT, fontSize: 16, bold: true, color: C.navy, valign: "middle" });
  s.addText(
    "Seluruh data dikemas menjadi REST API. Pemilik data mengelolanya lewat dashboard ber-JWT, sedangkan konsumen eksternal berlangganan akses read-only menggunakan API key.",
    { x: 7.13, y: 2.5, w: 5.45, h: 1.65, fontFace: FONT, fontSize: 12.5, color: C.ink, lineSpacingMultiple: 1.18, valign: "top" }
  );

  // Strip nilai jual
  card(s, 0.6, 4.55, 12.25, 1.9, C.navy);
  s.addText("NILAI JUAL PRODUK", { x: 0.95, y: 4.78, w: 4, h: 0.3, fontFace: FONT, fontSize: 10.5, bold: true, color: "6FB1FF", charSpacing: 2 });
  const vals = [
    ["Siap Pakai", "Konsumen tinggal memakai endpoint, tanpa setup database."],
    ["Terukur", "Setiap pemakaian API key tercatat: jumlah request & waktu terakhir."],
    ["Aman", "Dua lapis kunci: JWT untuk admin, x-api-key untuk konsumen."],
  ];
  vals.forEach((v, i) => {
    const vx = 0.95 + i * 4.0;
    s.addText([
      { text: v[0], options: { bold: true, fontSize: 14, color: C.white, breakLine: true } },
      { text: v[1], options: { fontSize: 10.5, color: "B9CBE4" } },
    ], { x: vx, y: 5.12, w: 3.7, h: 1.15, fontFace: FONT, lineSpacingMultiple: 1.12, valign: "top" });
  });
}

/* ============================================================
   SLIDE 4 — TEKNOLOGI
============================================================ */
{
  const s = baseSlide();
  header(s, "Teknologi", "Tech Stack yang Digunakan");
  footer(s);

  const stacks = [
    ["Node.js + Express 5", "Framework server HTTP. Menangani routing, middleware, dan response JSON.", C.blueBg, C.accent],
    ["PostgreSQL + Sequelize", "Database relasional dengan ORM — skema didefinisikan lewat model JavaScript.", "E0F5F8", C.cyan],
    ["JWT (jsonwebtoken)", "Token login untuk dashboard pemilik data, kedaluwarsa 1 hari (dari .env).", C.greenBg, C.green],
    ["bcryptjs", "Hashing password sebelum disimpan — password asli tidak pernah tersimpan.", C.amberBg, C.amber],
    ["crypto (bawaan Node)", "Generator API key acak 32 karakter hex untuk tiap konsumen.", C.redBg, C.red],
    ["Vercel + Supabase", "Hosting serverless untuk API dan database PostgreSQL cloud dengan SSL.", C.blueBg, C.accent],
  ];

  const colX = [0.6, 6.85];
  stacks.forEach((it, i) => {
    const cx = colX[i % 2];
    const cy = 1.7 + Math.floor(i / 2) * 1.62;
    card(s, cx, cy, 5.9, 1.42);
    s.addShape(pptx.ShapeType.roundRect, { x: cx + 0.22, y: cy + 0.24, w: 0.56, h: 0.56, fill: { color: it[2] }, line: { type: "none" }, rectRadius: 0.12 });
    s.addText(String(i + 1), { x: cx + 0.22, y: cy + 0.24, w: 0.56, h: 0.56, align: "center", valign: "middle", fontFace: FONT, fontSize: 16, bold: true, color: it[3] });
    s.addText([
      { text: it[0], options: { bold: true, fontSize: 14.5, color: C.navy, breakLine: true } },
      { text: it[1], options: { fontSize: 11, color: C.muted } },
    ], { x: cx + 0.98, y: cy + 0.14, w: 4.75, h: 1.16, valign: "middle", fontFace: FONT, lineSpacingMultiple: 1.1 });
  });
}

/* ============================================================
   SLIDE 5 — ARSITEKTUR
============================================================ */
{
  const s = baseSlide();
  header(s, "Arsitektur", "Alur Request — Pola MVC");
  footer(s);

  s.addText(
    "Setiap request mengikuti alur yang sama dan konsisten, sehingga mudah dirawat dan dikembangkan:",
    { x: 0.6, y: 1.62, w: 11.5, h: 0.4, fontFace: FONT, fontSize: 13, color: C.muted }
  );

  const by = 2.35, bh = 1.15;
  const boxes = [
    ["Client", "Postman / Aplikasi", C.navy, C.white],
    ["Routes", "/api \u2192 router", C.card, C.navy],
    ["Middleware", "verifyJWT \u00b7 verifyApiKey", C.card, C.navy],
    ["Controller", "Logika bisnis", C.card, C.navy],
    ["Model", "Sequelize ORM", C.card, C.navy],
    ["PostgreSQL", "Supabase / Lokal", C.greenBg, C.green],
  ];
  let bx = 0.6;
  const bw = 1.78, gap = 0.36;
  boxes.forEach((b, i) => {
    flowBox(s, bx, by, bw, bh, b[0], b[1], b[2], b[3]);
    if (i < boxes.length - 1) arrowRight(s, bx + bw + 0.03, by + bh / 2 - 0.13);
    bx += bw + gap;
  });

  // panah response balik
  s.addShape(pptx.ShapeType.leftArrow, { x: 1.4, y: 3.85, w: 10.4, h: 0.3, fill: { color: C.cyan, transparency: 25 }, line: { type: "none" } });
  s.addText("Response JSON terstandar : { status, message, data }", {
    x: 1.4, y: 4.2, w: 10.4, h: 0.32, align: "center", fontFace: FONT, fontSize: 11.5, italic: true, color: C.muted,
  });

  // dua jalur middleware
  card(s, 0.6, 4.85, 6.0, 1.75);
  s.addText([
    { text: "Jalur Dashboard — verifyJWT", options: { bold: true, fontSize: 13.5, color: C.navy, breakLine: true } },
    { text: "Header Authorization: Bearer <token>. Dipakai untuk fitur berbasis login: kelola API key dan CRUD data kendaraan.", options: { fontSize: 11.5, color: C.muted } },
  ], { x: 0.88, y: 5.05, w: 5.45, h: 1.4, fontFace: FONT, lineSpacingMultiple: 1.15, valign: "top" });

  card(s, 6.85, 4.85, 6.0, 1.75);
  s.addText([
    { text: "Jalur Publik — verifyApiKey", options: { bold: true, fontSize: 13.5, color: C.navy, breakLine: true } },
    { text: "Header x-api-key. Produk utama SaaS: konsumen eksternal membaca data lewat /api/v1 tanpa akun.", options: { fontSize: 11.5, color: C.muted } },
  ], { x: 7.13, y: 5.05, w: 5.45, h: 1.4, fontFace: FONT, lineSpacingMultiple: 1.15, valign: "top" });
}

/* ============================================================
   SLIDE 6 — STRUKTUR FOLDER
============================================================ */
{
  const s = baseSlide();
  header(s, "Organisasi Kode", "Struktur Folder Proyek");
  footer(s);

  card(s, 0.6, 1.66, 7.3, 5.0);
  s.addText(
    [
      "220_Project/",
      "\u251c\u2500 index.js            Entry point server Express",
      "\u251c\u2500 vercel.json         Konfigurasi deploy Vercel",
      "\u251c\u2500 routes/",
      "\u2502   \u2514\u2500 index.js        Definisi seluruh endpoint",
      "\u251c\u2500 controller/",
      "\u2502   \u251c\u2500 authController.js      Register & login (JWT)",
      "\u2502   \u251c\u2500 apiKeyController.js    Buat / lihat / revoke key",
      "\u2502   \u251c\u2500 vehicleController.js   CRUD data kendaraan",
      "\u2502   \u2514\u2500 dataController.js      Public API v1 + statistik",
      "\u251c\u2500 middleware/",
      "\u2502   \u251c\u2500 auth.js                Verifikasi token JWT",
      "\u2502   \u2514\u2500 apiKeyAuth.js          Verifikasi x-api-key + logging",
      "\u251c\u2500 models/             User, ApiKey, CampusVehicle, ApiRequestLog",
      "\u251c\u2500 config/             Koneksi database (db.js, config.js)",
      "\u251c\u2500 migrations/ seeders/ Migrasi skema & data awal kendaraan",
      "\u251c\u2500 utils/               generateApiKey.js (crypto)",
      "\u2514\u2500 diagrams/           ERD, use case, activity (Mermaid)",
    ].map((line, i) => ({
      text: line,
      options: {
        breakLine: true,
        color: i === 0 ? C.accent : C.ink,
        bold: i === 0,
      },
    })),
    { x: 0.9, y: 1.9, w: 6.8, h: 4.55, fontFace: MONO, fontSize: 11.5, valign: "top", lineSpacingMultiple: 1.32 }
  );

  card(s, 8.15, 1.66, 4.7, 5.0, C.navy);
  s.addText("KENAPA RAPI ITU PENTING?", { x: 8.45, y: 1.95, w: 4.1, h: 0.3, fontFace: FONT, fontSize: 10.5, bold: true, color: "6FB1FF", charSpacing: 2 });
  const why = [
    ["Pisahkan tanggung jawab", "Route hanya menerima, controller yang berpikir, model yang bicara ke database."],
    ["Mudah ditambah", "Fitur baru cukup tambah 1 controller + 1 blok route."],
    ["Mudah dites", "Tiap bagian bisa diuji terpisah lewat Postman."],
  ];
  let wy = 2.4;
  why.forEach((wn) => {
    s.addText([
      { text: wn[0], options: { bold: true, fontSize: 13, color: C.white, breakLine: true } },
      { text: wn[1], options: { fontSize: 11, color: "B9CBE4" } },
    ], { x: 8.45, y: wy, w: 4.1, h: 1.25, fontFace: FONT, lineSpacingMultiple: 1.12, valign: "top" });
    wy += 1.38;
  });
}

/* ============================================================
   SLIDE 7 — DATABASE
============================================================ */
{
  const s = baseSlide();
  header(s, "Data Layer", "Desain Database — 4 Tabel Utama");
  footer(s);

  const tables = [
    {
      name: "users", color: C.accent, bg: C.blueBg,
      fields: ["id  (PK)", "nama", "email  \u00b7 unik", "password  \u00b7 hash bcrypt"],
      note: "Akun pemilik data / admin",
    },
    {
      name: "api_keys", color: C.cyan, bg: "E0F5F8",
      fields: ["id  (PK)", "user_id  (FK \u2192 users)", "key  \u00b7 unik, 32 hex", "label \u00b7 is_active", "request_count \u00b7 last_used_at"],
      note: "Kunci akses milik tiap user",
    },
    {
      name: "campus_vehicles", color: C.green, bg: C.greenBg,
      fields: ["id  (PK)", "kategori \u00b7 tipe_kendaraan", "kapasitas_cc \u00b7 bahan_bakar", "efisiensi_km_per_liter", "emisi_co2_per_km"],
      note: "Dataset inti yang dijual",
    },
    {
      name: "api_request_logs", color: C.amber, bg: C.amberBg,
      fields: ["id  (PK)", "api_key_id  (FK \u2192 api_keys)", "endpoint \u00b7 method", "status_code \u00b7 ip_address", "requested_at"],
      note: "Jejak audit tiap request",
    },
  ];

  const pos = [
    [0.6, 1.7], [6.85, 1.7],
    [0.6, 4.15], [6.85, 4.15],
  ];
  tables.forEach((t, i) => {
    const [cx, cy] = pos[i];
    card(s, cx, cy, 5.9, 2.25);
    s.addShape(pptx.ShapeType.roundRect, { x: cx + 0.2, y: cy + 0.18, w: 2.35, h: 0.44, fill: { color: t.bg }, line: { type: "none" }, rectRadius: 0.09 });
    s.addText(t.name, { x: cx + 0.2, y: cy + 0.18, w: 2.35, h: 0.44, align: "center", valign: "middle", fontFace: MONO, fontSize: 12, bold: true, color: t.color });
    s.addText(t.note, { x: cx + 2.7, y: cy + 0.18, w: 3.05, h: 0.44, valign: "middle", fontFace: FONT, fontSize: 10, italic: true, color: C.muted });
    s.addText(
      t.fields.map((f) => ({ text: f, options: { bullet: { code: "2022", indent: 10 }, breakLine: true } })),
      { x: cx + 0.28, y: cy + 0.74, w: 5.4, h: 1.4, fontFace: MONO, fontSize: 10.5, color: C.ink, lineSpacingMultiple: 1.18, valign: "top" }
    );
  });

  // relasi
  s.addShape(pptx.ShapeType.roundRect, { x: 3.4, y: 6.55, w: 6.5, h: 0.48, fill: { color: C.navy }, line: { type: "none" }, rectRadius: 0.1 });
  s.addText("Relasi :  users 1 \u2500\u2500 N api_keys  1 \u2500\u2500 N api_request_logs", {
    x: 3.4, y: 6.55, w: 6.5, h: 0.48, align: "center", valign: "middle", fontFace: MONO, fontSize: 11.5, bold: true, color: C.white,
  });
}

/* ============================================================
   SLIDE 8 — FITUR AUTH
============================================================ */
{
  const s = baseSlide();
  header(s, "Fitur 1", "Autentikasi User — Register & Login");
  footer(s);

  leadBullets(s, [
    ["Registrasi aman  ", "— nama, email, dan password wajib diisi; email dicek keunikan sebelum akun dibuat."],
    ["Password di-hash  ", "— bcrypt dengan 10 salt rounds; database tidak pernah menyimpan password asli."],
    ["Login terverifikasi  ", "— password dibandingkan dengan bcrypt.compare sebelum token diterbitkan."],
    ["Token JWT  ", "— berisi id & email user, ditandatangani JWT_SECRET, kedaluwarsa sesuai JWT_EXPIRES (default 1 hari)."],
    ["Respons konsisten  ", "— format { status, message, ... } memudahkan frontend menangani sukses maupun gagal."],
  ], { x: 0.6, y: 1.75, w: 6.35, h: 4.6, size: 13.5 });

  // contoh respons
  card(s, 7.25, 1.75, 5.6, 4.55);
  s.addShape(pptx.ShapeType.roundRect, { x: 7.5, y: 1.98, w: 2.6, h: 0.4, fill: { color: C.blueBg }, line: { type: "none" }, rectRadius: 0.08 });
  s.addText("POST /api/login — 200 OK", { x: 7.5, y: 1.98, w: 2.6, h: 0.4, align: "center", valign: "middle", fontFace: MONO, fontSize: 10.5, bold: true, color: C.accent });
  s.addText(
    [
      "{",
      '  "status": "success",',
      '  "message": "Login berhasil",',
      '  "token": "eyJhbGciOiJIUzI1NiIs..."',
      "}",
    ].map((l) => ({ text: l, options: { breakLine: true } })),
    { x: 7.55, y: 2.55, w: 5.0, h: 1.7, fontFace: MONO, fontSize: 11.5, color: C.ink, lineSpacingMultiple: 1.3 }
  );
  s.addShape(pptx.ShapeType.line, { x: 7.55, y: 4.45, w: 5.0, h: 0, line: { color: C.border, width: 1 } });
  s.addText(
    [
      "// Token dipakai pada header:",
      "Authorization: Bearer <token>",
    ].map((l) => ({ text: l, options: { breakLine: true } })),
    { x: 7.55, y: 4.6, w: 5.0, h: 0.8, fontFace: MONO, fontSize: 11, color: C.muted, lineSpacingMultiple: 1.3 }
  );
  s.addText('Token inilah "kunci ruang admin" — tanpa dia, endpoint dashboard menolak akses.', {
    x: 7.55, y: 5.5, w: 5.0, h: 0.7, fontFace: FONT, fontSize: 11, italic: true, color: C.muted, lineSpacingMultiple: 1.15,
  });
}

/* ============================================================
   SLIDE 9 — FITUR API KEY
============================================================ */
{
  const s = baseSlide();
  header(s, "Fitur 2", "Manajemen API Key");
  footer(s);

  leadBullets(s, [
    ["Generate  ", "— key acak 32 karakter hex dari crypto.randomBytes(16), dijamin unik di level database."],
    ["Berlabel  ", "— tiap key punya label agar mudah dibedakan (mis. \u201cMobile App\u201d, \u201cSkripsi\u201d)."],
    ["Disamarkan  ", "— daftar key hanya menampilkan potongan: 8 karakter awal \u2026 4 akhir."],
    ["Revoke  ", "— key dinonaktifkan dengan is_active = false; request berikutnya otomatis ditolak."],
    ["Metrik pemakaian  ", "— request_count dan last_used_at ter-update sendiri setiap kali key dipakai."],
  ], { x: 0.6, y: 1.75, w: 6.35, h: 4.6, size: 13.5 });

  card(s, 7.25, 1.75, 5.6, 4.55);
  s.addShape(pptx.ShapeType.roundRect, { x: 7.5, y: 1.98, w: 2.9, h: 0.4, fill: { color: "E0F5F8" }, line: { type: "none" }, rectRadius: 0.08 });
  s.addText("GET /api/keys — daftar termask", { x: 7.5, y: 1.98, w: 2.9, h: 0.4, align: "center", valign: "middle", fontFace: MONO, fontSize: 10.5, bold: true, color: C.cyan });
  s.addText(
    [
      "[",
      "  {",
      '    "id": 1,',
      '    "label": "Mobile App",',
      '    "key_preview": "a1b2c3d4...9f8e",',
      '    "is_active": true,',
      '    "request_count": 128,',
      '    "last_used_at": "2026-08-20T..."',
      "  }",
      "]",
    ].map((l) => ({ text: l, options: { breakLine: true } })),
    { x: 7.55, y: 2.55, w: 5.0, h: 3.0, fontFace: MONO, fontSize: 11, color: C.ink, lineSpacingMultiple: 1.22 }
  );
  s.addText("Key penuh hanya ditampilkan SEKALI saat dibuat — praktik keamanan standar industri.", {
    x: 7.55, y: 5.62, w: 5.0, h: 0.6, fontFace: FONT, fontSize: 11, italic: true, color: C.muted, lineSpacingMultiple: 1.15,
  });
}

/* ============================================================
   SLIDE 10 — FITUR CRUD
============================================================ */
{
  const s = baseSlide();
  header(s, "Fitur 3", "CRUD Data Kendaraan (Dashboard)");
  footer(s);

  leadBullets(s, [
    ["Create  ", "— POST /api/vehicles menambahkan kendaraan baru beserta atribut emisi & efisiensinya."],
    ["Read  ", "— GET semua data atau detail per ID, lengkap dengan penanganan 404 bila tidak ditemukan."],
    ["Update  ", "— PUT /api/vehicles/:id memperbarui field apa pun secara fleksibel."],
    ["Delete  ", "— DELETE menghapus data secara permanen."],
    ["Dilindungi JWT  ", "— hanya pemilik data yang sudah login boleh mengubah dataset."],
  ], { x: 0.6, y: 1.75, w: 6.35, h: 3.1, size: 13.5 });

  // atribut data
  card(s, 0.6, 5.0, 6.35, 1.6);
  s.addText("ATRIBUT YANG KELOLA", { x: 0.88, y: 5.18, w: 4, h: 0.28, fontFace: FONT, fontSize: 10, bold: true, color: C.accent, charSpacing: 2 });
  s.addText(
    "kategori \u00b7 tipe_kendaraan \u00b7 kapasitas_cc \u00b7 bahan_bakar \u00b7 efisiensi_km_per_liter \u00b7 emisi_co2_per_km",
    { x: 0.88, y: 5.5, w: 5.8, h: 0.95, fontFace: MONO, fontSize: 11.5, color: C.ink, lineSpacingMultiple: 1.3, valign: "top" }
  );

  card(s, 7.25, 1.75, 5.6, 4.85);
  s.addShape(pptx.ShapeType.roundRect, { x: 7.5, y: 1.98, w: 2.9, h: 0.4, fill: { color: C.greenBg }, line: { type: "none" }, rectRadius: 0.08 });
  s.addText("POST /api/vehicles — body", { x: 7.5, y: 1.98, w: 2.9, h: 0.4, align: "center", valign: "middle", fontFace: MONO, fontSize: 10.5, bold: true, color: C.green });
  s.addText(
    [
      "{",
      '  "kategori": "Bus Kampus",',
      '  "tipe_kendaraan": "Isuzu Elf",',
      '  "kapasitas_cc": 2800,',
      '  "bahan_bakar": "Solar",',
      '  "efisiensi_km_per_liter": 9.5,',
      '  "emisi_co2_per_km": 271.0',
      "}",
    ].map((l) => ({ text: l, options: { breakLine: true } })),
    { x: 7.55, y: 2.55, w: 5.0, h: 2.6, fontFace: MONO, fontSize: 11.5, color: C.ink, lineSpacingMultiple: 1.28 }
  );
  s.addShape(pptx.ShapeType.line, { x: 7.55, y: 5.35, w: 5.0, h: 0, line: { color: C.border, width: 1 } });
  s.addText("201 Created — data langsung tersedia di public API v1.", {
    x: 7.55, y: 5.5, w: 5.0, h: 0.6, fontFace: FONT, fontSize: 11, italic: true, color: C.muted,
  });
}

/* ============================================================
   SLIDE 11 — PUBLIC API v1
============================================================ */
{
  const s = baseSlide();
  header(s, "Fitur 4 — Produk Utama", "Public API v1 untuk Konsumen Eksternal");
  footer(s);

  leadBullets(s, [
    ["Read-only  ", "— konsumen hanya bisa membaca; perubahan data tetap di tangan pemilik."],
    ["Pagination  ", "— parameter page & limit (maks 100) menjaga respons tetap ringan."],
    ["Filter  ", "— saring berdasarkan kategori atau bahan_bakar, pencarian case-insensitive."],
    ["Statistik siap pakai  ", "— /stats merangkum jumlah data, rata-rata emisi & efisiensi per grup."],
    ["Tanpa akun  ", "— cukup satu header x-api-key, cocok untuk aplikasi pihak ketiga."],
  ], { x: 0.6, y: 1.75, w: 6.35, h: 4.6, size: 13.5 });

  card(s, 7.25, 1.75, 5.6, 4.55);
  s.addShape(pptx.ShapeType.roundRect, { x: 7.5, y: 1.98, w: 3.6, h: 0.4, fill: { color: C.blueBg }, line: { type: "none" }, rectRadius: 0.08 });
  s.addText("GET /api/v1/vehicles?page=1&limit=10", { x: 7.5, y: 1.98, w: 3.6, h: 0.4, align: "center", valign: "middle", fontFace: MONO, fontSize: 10, bold: true, color: C.accent });
  s.addText(
    [
      "{",
      '  "status": "success",',
      '  "pagination": {',
      '    "page": 1, "limit": 10,',
      '    "total_data": 42,',
      '    "total_pages": 5',
      "  },",
      '  "data": [ ... ]',
      "}",
    ].map((l) => ({ text: l, options: { breakLine: true } })),
    { x: 7.55, y: 2.55, w: 5.0, h: 2.5, fontFace: MONO, fontSize: 11.5, color: C.ink, lineSpacingMultiple: 1.25 }
  );
  s.addShape(pptx.ShapeType.line, { x: 7.55, y: 5.15, w: 5.0, h: 0, line: { color: C.border, width: 1 } });
  s.addText("/api/v1/stats \u2192 agregat SQL: COUNT, AVG emisi_co2_per_km, AVG efisiensi per kategori & bahan bakar.", {
    x: 7.55, y: 5.3, w: 5.0, h: 0.85, fontFace: FONT, fontSize: 11, italic: true, color: C.muted, lineSpacingMultiple: 1.15,
  });
}

/* ============================================================
   SLIDE 12 — ALUR KEAMANAN REQUEST
============================================================ */
{
  const s = baseSlide();
  header(s, "Keamanan", "Alur Verifikasi Request Public API");
  footer(s);

  const my = 2.5, mh = 1.05;

  flowBox(s, 0.6, my, 2.15, mh, "Request Masuk", "header: x-api-key", C.navy, C.white);

  // Diamond 1
  s.addShape(pptx.ShapeType.diamond, { x: 3.25, y: my - 0.28, w: 1.75, h: 1.6, fill: { color: C.blueBg }, line: { color: C.accent, width: 1.25 } });
  s.addText("Header\nada?", { x: 3.25, y: my - 0.28, w: 1.75, h: 1.6, align: "center", valign: "middle", fontFace: FONT, fontSize: 11, bold: true, color: C.navy });
  arrowRight(s, 2.83, my + mh / 2 - 0.13);

  flowBox(s, 5.5, my, 2.15, mh, "Validasi ke DB", "cari di tabel api_keys", C.card, C.navy);
  arrowRight(s, 5.08, my + mh / 2 - 0.13);

  // Diamond 2
  s.addShape(pptx.ShapeType.diamond, { x: 8.15, y: my - 0.28, w: 1.75, h: 1.6, fill: { color: C.blueBg }, line: { color: C.accent, width: 1.25 } });
  s.addText("Key valid\n& aktif?", { x: 8.15, y: my - 0.28, w: 1.75, h: 1.6, align: "center", valign: "middle", fontFace: FONT, fontSize: 11, bold: true, color: C.navy });
  arrowRight(s, 7.73, my + mh / 2 - 0.13);

  flowBox(s, 10.4, my, 2.35, mh, "200 OK", "kirim data JSON", C.greenBg, C.green);
  arrowRight(s, 9.98, my + mh / 2 - 0.13);

  // cabang error
  s.addShape(pptx.ShapeType.downArrow, { x: 4.0, y: 3.95, w: 0.26, h: 0.5, fill: { color: C.red }, line: { type: "none" } });
  s.addText("Tidak", { x: 4.28, y: 4.02, w: 0.8, h: 0.3, fontFace: FONT, fontSize: 10, bold: true, color: C.red });
  flowBox(s, 3.25, 4.5, 1.75, 0.75, "401 Unauthorized", null, C.redBg, C.red);

  s.addShape(pptx.ShapeType.downArrow, { x: 8.9, y: 3.95, w: 0.26, h: 0.5, fill: { color: C.red }, line: { type: "none" } });
  s.addText("Tidak", { x: 9.18, y: 4.02, w: 0.8, h: 0.3, fontFace: FONT, fontSize: 10, bold: true, color: C.red });
  flowBox(s, 8.15, 4.5, 1.75, 0.75, "403 Forbidden", "invalid / revoked", C.redBg, C.red);

  // efek samping
  card(s, 0.6, 5.65, 12.15, 1.15, C.navy);
  s.addText([
    { text: "Efek samping setiap request berhasil :  ", options: { bold: true, color: C.white } },
    { text: "request_count +1  \u00b7  last_used_at diperbarui  \u00b7  aktivitas dicatat ke api_request_logs (endpoint, method, status_code, ip_address).", options: { color: "B9CBE4" } },
  ], { x: 0.95, y: 5.65, w: 11.5, h: 1.15, fontFace: FONT, fontSize: 12.5, valign: "middle", lineSpacingMultiple: 1.15 });
}

/* ============================================================
   SLIDE 13 — LAPISAN KEAMANAN
============================================================ */
{
  const s = baseSlide();
  header(s, "Keamanan", "Empat Lapis Perlindungan");
  footer(s);

  const layers = [
    ["Password Hashing", "bcryptjs, 10 salt rounds. Password asli tak pernah disimpan; pencocokan lewat bcrypt.compare.", C.blueBg, C.accent],
    ["Token JWT", "Ditandatangani JWT_SECRET dari .env, kedaluwarsa otomatis (default 1 hari) — sesi tidak bertahan selamanya.", "E0F5F8", C.cyan],
    ["API Key", "Acak 32-hex, unik, bisa di-revoke kapan saja, dan hanya ditampilkan penuh satu kali saat pembuatan.", C.greenBg, C.green],
    ["Audit Trail", "Setiap panggilan public API tercatat: endpoint, method, status code, dan IP address peminta.", C.amberBg, C.amber],
  ];

  layers.forEach((l, i) => {
    const cx = 0.6 + i * 3.13;
    card(s, cx, 1.8, 2.93, 3.3);
    s.addShape(pptx.ShapeType.ellipse, { x: cx + 1.06, y: 2.1, w: 0.8, h: 0.8, fill: { color: l[2] }, line: { type: "none" } });
    s.addText(String(i + 1), { x: cx + 1.06, y: 2.1, w: 0.8, h: 0.8, align: "center", valign: "middle", fontFace: FONT, fontSize: 22, bold: true, color: l[3] });
    s.addText(l[0], { x: cx + 0.15, y: 3.05, w: 2.63, h: 0.4, align: "center", fontFace: FONT, fontSize: 14.5, bold: true, color: C.navy });
    s.addText(l[1], { x: cx + 0.25, y: 3.5, w: 2.43, h: 1.45, align: "center", fontFace: FONT, fontSize: 10.5, color: C.muted, lineSpacingMultiple: 1.15, valign: "top" });
  });

  card(s, 0.6, 5.45, 12.15, 1.0);
  s.addText([
    { text: "Prinsipnya sederhana :  ", options: { bold: true, color: C.navy } },
    { text: "rahasia disimpan di environment variable (.env), tidak pernah hard-code di dalam kode sumber.", options: { color: C.muted } },
  ], { x: 0.95, y: 5.45, w: 11.5, h: 1.0, fontFace: FONT, fontSize: 13, valign: "middle" });
}

/* ============================================================
   SLIDE 14 — DEPLOYMENT
============================================================ */
{
  const s = baseSlide();
  header(s, "Deployment", "Siap Online — Vercel + Supabase");
  footer(s);

  card(s, 0.6, 1.7, 6.0, 3.0);
  s.addText("VERCEL — Hosting API", { x: 0.9, y: 1.95, w: 5, h: 0.32, fontFace: FONT, fontSize: 12, bold: true, color: C.accent, charSpacing: 1 });
  s.addText(
    [
      "Serverless function dari index.js lewat @vercel/node.",
      "Semua route dialihkan ke satu entry point.",
      "Push ke GitHub \u2192 deploy otomatis.",
      "NODE_ENV = production menonaktifkan sequelize.sync() otomatis.",
    ].map((t) => ({ text: t, options: { bullet: { code: "2022", indent: 12 }, breakLine: true } })),
    { x: 0.92, y: 2.4, w: 5.4, h: 2.1, fontFace: FONT, fontSize: 12, color: C.ink, lineSpacingMultiple: 1.25, valign: "top" }
  );

  card(s, 6.85, 1.7, 6.0, 3.0);
  s.addText("SUPABASE — Database Cloud", { x: 7.15, y: 1.95, w: 5, h: 0.32, fontFace: FONT, fontSize: 12, bold: true, color: C.green, charSpacing: 1 });
  s.addText(
    [
      "PostgreSQL terkelola, diakses via DATABASE_URL.",
      "Koneksi wajib SSL (rejectUnauthorized: false).",
      "Fallback otomatis ke PostgreSQL lokal saat develop.",
      "Query string URL dibersihkan agar tak bentrok opsi Sequelize.",
    ].map((t) => ({ text: t, options: { bullet: { code: "2022", indent: 12 }, breakLine: true } })),
    { x: 7.17, y: 2.4, w: 5.4, h: 2.1, fontFace: FONT, fontSize: 12, color: C.ink, lineSpacingMultiple: 1.25, valign: "top" }
  );

  // env vars
  card(s, 0.6, 5.0, 12.25, 1.45, C.navy);
  s.addText("VARIABEL LINGKUNGAN (.env)", { x: 0.95, y: 5.2, w: 5, h: 0.3, fontFace: FONT, fontSize: 10.5, bold: true, color: "6FB1FF", charSpacing: 2 });
  const envs = ["DATABASE_URL", "JWT_SECRET", "JWT_EXPIRES", "PORT"];
  let ex = 0.95;
  envs.forEach((e) => {
    const wch = 0.5 + e.length * 0.115;
    s.addShape(pptx.ShapeType.roundRect, { x: ex, y: 5.6, w: wch, h: 0.48, fill: { color: C.navy2 }, line: { color: "2C4A78", width: 1 }, rectRadius: 0.1 });
    s.addText(e, { x: ex, y: 5.6, w: wch, h: 0.48, align: "center", valign: "middle", fontFace: MONO, fontSize: 12, bold: true, color: "BFDBFF" });
    ex += wch + 0.25;
  });
  s.addText("— semua rahasia tinggal di environment, aman dari repo publik.", {
    x: ex + 0.1, y: 5.6, w: 12.4 - ex, h: 0.48, valign: "middle", fontFace: FONT, fontSize: 11.5, italic: true, color: "B9CBE4",
  });
}

/* ============================================================
   SLIDE 15 — DOKUMENTASI ENDPOINT
============================================================ */
{
  const s = baseSlide();
  header(s, "Referensi", "Dokumentasi Endpoint");
  footer(s);

  const hdrOpt = () => ({ fill: { color: C.navy }, color: C.white, bold: true, fontFace: FONT, fontSize: 11, valign: "middle", align: "left" });
  const cellOpt = () => ({ fontFace: FONT, fontSize: 10.5, color: C.ink, valign: "middle" });
  const monoOpt = () => ({ fontFace: MONO, fontSize: 10, color: C.ink, valign: "middle" });

  const methodCell = (m) => {
    const map = {
      GET: [C.greenBg, C.green],
      POST: [C.blueBg, C.accent],
      PUT: [C.amberBg, C.amber],
      DELETE: [C.redBg, C.red],
    };
    const [bg, fg] = map[m];
    return { text: m, options: { fill: { color: bg }, color: fg, bold: true, fontFace: MONO, fontSize: 10, align: "center", valign: "middle" } };
  };

  const rows = [
    [{ text: "METHOD", options: hdrOpt() }, { text: "ENDPOINT", options: hdrOpt() }, { text: "AUTH", options: hdrOpt() }, { text: "DESKRIPSI", options: hdrOpt() }],
    [methodCell("POST"), { text: "/api/register", options: monoOpt() }, { text: "\u2014", options: cellOpt() }, { text: "Registrasi akun baru (nama, email, password)", options: cellOpt() }],
    [methodCell("POST"), { text: "/api/login", options: monoOpt() }, { text: "\u2014", options: cellOpt() }, { text: "Login, mengembalikan token JWT", options: cellOpt() }],
    [methodCell("POST"), { text: "/api/keys", options: monoOpt() }, { text: "JWT", options: cellOpt() }, { text: "Membuat API key baru", options: cellOpt() }],
    [methodCell("GET"), { text: "/api/keys", options: monoOpt() }, { text: "JWT", options: cellOpt() }, { text: "Melihat daftar API key (ter-mask)", options: cellOpt() }],
    [methodCell("DELETE"), { text: "/api/keys/:id", options: monoOpt() }, { text: "JWT", options: cellOpt() }, { text: "Menonaktifkan (revoke) API key", options: cellOpt() }],
    [methodCell("GET"), { text: "/api/vehicles", options: monoOpt() }, { text: "JWT", options: cellOpt() }, { text: "Melihat seluruh data kendaraan", options: cellOpt() }],
    [methodCell("GET"), { text: "/api/vehicles/:id", options: monoOpt() }, { text: "JWT", options: cellOpt() }, { text: "Detail satu kendaraan", options: cellOpt() }],
    [methodCell("POST"), { text: "/api/vehicles", options: monoOpt() }, { text: "JWT", options: cellOpt() }, { text: "Menambah data kendaraan baru", options: cellOpt() }],
    [methodCell("PUT"), { text: "/api/vehicles/:id", options: monoOpt() }, { text: "JWT", options: cellOpt() }, { text: "Memperbarui data kendaraan", options: cellOpt() }],
    [methodCell("DELETE"), { text: "/api/vehicles/:id", options: monoOpt() }, { text: "JWT", options: cellOpt() }, { text: "Menghapus data kendaraan", options: cellOpt() }],
    [methodCell("GET"), { text: "/api/v1/vehicles", options: monoOpt() }, { text: "x-api-key", options: cellOpt() }, { text: "Public API: daftar kendaraan + pagination & filter", options: cellOpt() }],
    [methodCell("GET"), { text: "/api/v1/vehicles/:id", options: monoOpt() }, { text: "x-api-key", options: cellOpt() }, { text: "Public API: detail satu kendaraan", options: cellOpt() }],
    [methodCell("GET"), { text: "/api/v1/stats", options: monoOpt() }, { text: "x-api-key", options: cellOpt() }, { text: "Public API: statistik agregat dataset", options: cellOpt() }],
  ];

  s.addTable(rows, {
    x: 0.6, y: 1.62, w: 12.15,
    colW: [1.15, 2.6, 1.15, 7.25],
    rowH: 0.34,
    border: { pt: 0.75, color: C.border },
    margin: 0.06,
    autoPage: false,
  });
}

/* ============================================================
   SLIDE 16 — KESIMPULAN
============================================================ */
{
  const s = baseSlide();
  header(s, "Penutup", "Kesimpulan");
  footer(s);

  leadBullets(s, [
    ["Produk selesai & fokus  ", "— REST API SaaS data kendaraan kampus berjalan end-to-end: dari registrasi sampai konsumsi data eksternal."],
    ["Arsitektur bersih  ", "— pola MVC memisahkan routing, logika bisnis, dan akses data sehingga mudah dikembangkan."],
    ["Keamanan berlapis  ", "— bcrypt untuk password, JWT untuk sesi admin, API key untuk konsumen, plus audit log setiap request."],
    ["Siap produksi  ", "— ter-deploy di Vercel dengan database Supabase; rahasia dikelola lewat environment variable."],
    ["Nilai bisnis nyata  ", "— pemilik data punya kontrol penuh, konsumen mendapat akses terukur dan aman tanpa menyentuh database."],
  ], { x: 0.6, y: 1.72, w: 7.1, h: 4.7, size: 13.5 });

  // panel ringkas
  card(s, 8.0, 1.72, 4.85, 4.7, C.navy);
  s.addText("PROYEK DALAM ANGKA", { x: 8.3, y: 2.0, w: 4.2, h: 0.3, fontFace: FONT, fontSize: 10.5, bold: true, color: "6FB1FF", charSpacing: 2 });
  const stats = [
    ["14", "endpoint REST aktif"],
    ["4", "tabel database"],
    ["2", "mekanisme autentikasi"],
    ["100%", "respons JSON terstandar"],
  ];
  stats.forEach((st, i) => {
    const sy = 2.45 + i * 0.98;
    s.addText(st[0], { x: 8.3, y: sy, w: 1.05, h: 0.85, fontFace: FONT, fontSize: 30, bold: true, color: "6FB1FF", valign: "middle" });
    s.addText(st[1], { x: 9.45, y: sy, w: 3.2, h: 0.85, fontFace: FONT, fontSize: 12.5, color: "D5E2F5", valign: "middle", lineSpacingMultiple: 1.1 });
  });
}

/* ============================================================
   SLIDE 17 — TERIMA KASIH
============================================================ */
{
  const s = baseSlide(C.navy);
  s.addShape(pptx.ShapeType.ellipse, { x: 10.6, y: 4.6, w: 4.4, h: 4.4, fill: { color: C.accent, transparency: 78 }, line: { type: "none" } });
  s.addShape(pptx.ShapeType.ellipse, { x: -1.2, y: -1.8, w: 4.0, h: 4.0, fill: { color: C.cyan, transparency: 76 }, line: { type: "none" } });

  s.addText("Terima Kasih", {
    x: 0.8, y: 2.5, w: 11.7, h: 1.3, align: "center",
    fontFace: FONT, fontSize: 52, bold: true, color: C.white,
  });
  s.addText("CampusVehicle SaaS API Service — Pengembangan Web Service", {
    x: 0.8, y: 3.85, w: 11.7, h: 0.5, align: "center",
    fontFace: FONT, fontSize: 15, color: "C7D6EA",
  });
  s.addText("github.com/bagasadit123/220_Project", {
    x: 0.8, y: 4.45, w: 11.7, h: 0.4, align: "center",
    fontFace: MONO, fontSize: 12, color: "7E93AF",
  });
}

/* ================= SIMPAN ================= */
pptx.writeFile({ fileName: "Presentasi_CampusVehicle_API.pptx" })
  .then(() => console.log("OK: Presentasi_CampusVehicle_API.pptx berhasil dibuat"))
  .catch((err) => { console.error("GAGAL:", err); process.exit(1); });