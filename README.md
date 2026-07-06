<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vanderbilt Non-Clinical Healthcare Explorer</title>
<style>
/* ============================================================
   Tokens - light is the default; dark redefines tokens only.
   ============================================================ */
:root {
  --paper: #faf7f0;
  --paper-raised: #ffffff;
  --paper-sunken: #f1ecdf;
  --ink: #181610;
  --ink-soft: #4f4a3c;
  --ink-faint: #857d68;
  --line: #ddd5c2;
  --line-strong: #c3b895;
  --accent: #8f6b1d;
  --accent-ink: #6e5115;
  --accent-wash: #f3ead3;
  --good: #3d6b34;
  --good-wash: #e8efe2;
  --track: #8f6b1d;        /* per-track hue, set inline per page */
  --track-wash: #f3ead3;
  --shadow: 0 1px 2px rgba(24,22,16,.06), 0 6px 18px -8px rgba(24,22,16,.14);
  --radius: 10px;
  --serif: "Charter", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
  --sans: "Seravek", "Avenir Next", "Segoe UI", system-ui, -apple-system, sans-serif;
  --mono: "SF Mono", "Cascadia Code", Consolas, "Liberation Mono", Menlo, monospace;
}
@media (prefers-color-scheme: dark) {
  :root {
    --paper: #16140e;
    --paper-raised: #1e1b13;
    --paper-sunken: #100e09;
    --ink: #ece5d3;
    --ink-soft: #b5ac93;
    --ink-faint: #7d7560;
    --line: #35301f;
    --line-strong: #4d4529;
    --accent: #d3a94f;
    --accent-ink: #e2be6c;
    --accent-wash: #2a2412;
    --good: #8db97f;
    --good-wash: #1d2617;
    --shadow: 0 1px 2px rgba(0,0,0,.4), 0 8px 24px -10px rgba(0,0,0,.55);
  }
}
:root[data-theme="light"] {
  --paper: #faf7f0; --paper-raised: #ffffff; --paper-sunken: #f1ecdf;
  --ink: #181610; --ink-soft: #4f4a3c; --ink-faint: #857d68;
  --line: #ddd5c2; --line-strong: #c3b895;
  --accent: #8f6b1d; --accent-ink: #6e5115; --accent-wash: #f3ead3;
  --good: #3d6b34; --good-wash: #e8efe2;
  --shadow: 0 1px 2px rgba(24,22,16,.06), 0 6px 18px -8px rgba(24,22,16,.14);
}
:root[data-theme="dark"] {
  --paper: #16140e; --paper-raised: #1e1b13; --paper-sunken: #100e09;
  --ink: #ece5d3; --ink-soft: #b5ac93; --ink-faint: #7d7560;
  --line: #35301f; --line-strong: #4d4529;
  --accent: #d3a94f; --accent-ink: #e2be6c; --accent-wash: #2a2412;
  --good: #8db97f; --good-wash: #1d2617;
  --shadow: 0 1px 2px rgba(0,0,0,.4), 0 8px 24px -10px rgba(0,0,0,.55);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { color: var(--accent-ink); }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 2px; }

/* ---------- chrome ---------- */
.masthead {
  border-bottom: 1px solid var(--line);
  background: var(--paper);
  position: sticky; top: 0; z-index: 40;
}
.masthead-inner {
  max-width: 1060px; margin: 0 auto; padding: 12px 24px;
  display: flex; align-items: baseline; gap: 14px;
}
.wordmark {
  font-family: var(--serif); font-size: 1.05rem; font-weight: 700;
  color: var(--ink); text-decoration: none; letter-spacing: .01em;
  white-space: nowrap;
}
.wordmark .amp { color: var(--accent); }
.masthead-sub {
  font-size: .72rem; text-transform: uppercase; letter-spacing: .14em;
  color: var(--ink-faint);
}
.masthead-spacer { flex: 1; }
.theme-btn {
  border: 1px solid var(--line); background: var(--paper-raised); color: var(--ink-soft);
  border-radius: 999px; font: inherit; font-size: .78rem; padding: 3px 12px; cursor: pointer;
  align-self: center;
}
.theme-btn:hover { border-color: var(--line-strong); }

.shell { max-width: 1060px; margin: 0 auto; padding: 0 24px 96px; }

/* ---------- home: hero ---------- */
.hero { padding: 64px 0 40px; border-bottom: 1px solid var(--line); }
.hero-eyebrow {
  font-size: .74rem; text-transform: uppercase; letter-spacing: .16em;
  color: var(--accent-ink); margin: 0 0 14px;
}
.hero h1 {
  font-family: var(--serif); font-weight: 700;
  font-size: clamp(1.9rem, 4.4vw, 3rem); line-height: 1.12;
  margin: 0 0 18px; max-width: 21ch; text-wrap: balance;
}
.hero p.lede { font-size: 1.06rem; color: var(--ink-soft); max-width: 62ch; margin: 0 0 8px; }
.hero p.fineprint { font-size: .84rem; color: var(--ink-faint); max-width: 62ch; margin: 10px 0 0; }

/* ---------- quiz ---------- */
.quiz-card {
  margin: 40px 0 8px; border: 1px solid var(--line); border-radius: var(--radius);
  background: var(--paper-raised); box-shadow: var(--shadow); overflow: hidden;
}
.quiz-head { padding: 20px 26px 0; display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }
.quiz-head h2 { font-family: var(--serif); font-size: 1.3rem; margin: 0; }
.quiz-head .k { font-size: .74rem; text-transform: uppercase; letter-spacing: .14em; color: var(--ink-faint); }
.quiz-body { padding: 14px 26px 24px; }
.quiz-q { font-weight: 600; margin: 6px 0 12px; }
.quiz-progress { font-size: .78rem; color: var(--ink-faint); font-variant-numeric: tabular-nums; }
.quiz-opts { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
.quiz-opt {
  text-align: left; font: inherit; cursor: pointer; width: 100%;
  border: 1px solid var(--line); background: var(--paper); color: var(--ink);
  border-radius: 8px; padding: 10px 14px; line-height: 1.45;
}
.quiz-opt:hover { border-color: var(--accent); background: var(--accent-wash); }
.quiz-start, .btn {
  display: inline-block; border: none; cursor: pointer; text-decoration: none;
  background: var(--accent); color: var(--paper); font: inherit; font-weight: 600;
  font-size: .92rem; padding: 9px 20px; border-radius: 999px;
}
:root[data-theme="dark"] .quiz-start, :root[data-theme="dark"] .btn { color: #16140e; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) .quiz-start, :root:not([data-theme="light"]) .btn { color: #16140e; } }
.btn-ghost {
  background: transparent; color: var(--accent-ink);
  border: 1px solid var(--line-strong);
}
.quiz-result-rank { display: grid; gap: 10px; margin-top: 14px; }
.quiz-result-row {
  display: flex; align-items: center; gap: 14px;
  border: 1px solid var(--line); border-radius: 8px; padding: 10px 14px;
  background: var(--paper); text-decoration: none; color: var(--ink);
}
.quiz-result-row:hover { border-color: var(--track); }
.quiz-result-row .bar-wrap { flex: 1; height: 6px; background: var(--paper-sunken); border-radius: 3px; overflow: hidden; }
.quiz-result-row .bar { height: 100%; background: var(--track); border-radius: 3px; }
.quiz-result-row .pct { font-variant-numeric: tabular-nums; font-size: .82rem; color: var(--ink-faint); width: 3.4em; text-align: right; }
.quiz-result-row .nm { font-weight: 600; width: 17em; max-width: 45vw; }

/* ---------- home: track grid ---------- */
.grid-head { display: flex; align-items: baseline; gap: 14px; margin: 48px 0 18px; }
.grid-head h2 { font-family: var(--serif); font-size: 1.5rem; margin: 0; }
.grid-head .k { font-size: .78rem; color: var(--ink-faint); }
.track-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
.track-card {
  border: 1px solid var(--line); border-radius: var(--radius); background: var(--paper-raised);
  padding: 20px 22px 18px; text-decoration: none; color: var(--ink);
  display: flex; flex-direction: column; gap: 8px; box-shadow: var(--shadow);
  position: relative;
}
.track-card:hover { border-color: var(--track); }
.track-card .glyph { color: var(--track); height: 26px; }
.track-card h3 { font-family: var(--serif); font-size: 1.18rem; margin: 2px 0 0; line-height: 1.25; text-wrap: balance; }
.track-card .tag { color: var(--ink-soft); font-size: .9rem; flex: 1; }
.track-card .meta {
  display: flex; gap: 14px; font-size: .74rem; color: var(--ink-faint);
  border-top: 1px solid var(--line); padding-top: 10px; margin-top: 6px;
  font-variant-numeric: tabular-nums;
}
.track-card .done-pill {
  position: absolute; top: 16px; right: 16px;
  font-size: .7rem; letter-spacing: .06em; color: var(--good);
  background: var(--good-wash); border-radius: 999px; padding: 2px 9px;
}

/* ---------- track page ---------- */
.crumb { padding: 22px 0 0; font-size: .84rem; }
.crumb a { color: var(--ink-faint); text-decoration: none; }
.crumb a:hover { color: var(--accent-ink); }
.track-hero { padding: 26px 0 26px; border-bottom: 1px solid var(--line); }
.track-hero .glyph { color: var(--track); height: 34px; margin-bottom: 10px; }
.track-hero h1 {
  font-family: var(--serif); font-size: clamp(1.7rem, 3.6vw, 2.5rem);
  margin: 0 0 10px; line-height: 1.15; text-wrap: balance;
}
.track-hero .tagline { font-size: 1.04rem; color: var(--ink-soft); max-width: 64ch; margin: 0 0 18px; }
.stat-row { display: flex; flex-wrap: wrap; gap: 10px; }
.stat-chip {
  border: 1px solid var(--line); background: var(--paper-raised); border-radius: 8px;
  padding: 8px 14px; font-size: .8rem; color: var(--ink-soft);
}
.stat-chip b { display: block; color: var(--ink); font-size: .92rem; }

.subnav {
  position: sticky; top: 49px; z-index: 30; background: var(--paper);
  border-bottom: 1px solid var(--line); display: flex; gap: 4px; overflow-x: auto;
}
.subnav a {
  text-decoration: none; color: var(--ink-faint); font-size: .84rem; font-weight: 600;
  padding: 11px 14px 9px; border-bottom: 2px solid transparent; white-space: nowrap;
}
.subnav a:hover, .subnav a.on { color: var(--ink); border-bottom-color: var(--track); }
.subnav .prog { margin-left: auto; align-self: center; font-size: .76rem; color: var(--ink-faint); padding-right: 6px; font-variant-numeric: tabular-nums; white-space: nowrap; }

section.zone { padding: 40px 0 8px; }
.zone-title { font-family: var(--serif); font-size: 1.45rem; margin: 0 0 6px; }
.zone-sub { color: var(--ink-faint); font-size: .88rem; margin: 0 0 22px; }

.prose { max-width: 68ch; }
.prose p { margin: 0 0 14px; color: var(--ink-soft); }
.prose p strong, .prose li strong { color: var(--ink); }
.callout {
  border-left: 3px solid var(--track); background: var(--paper-raised);
  border-radius: 0 8px 8px 0; padding: 12px 18px; margin: 20px 0; max-width: 68ch;
  font-size: .93rem; color: var(--ink-soft);
}
.callout b { color: var(--ink); }

.cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 22px; margin: 26px 0; align-items: start; }
.panel { border: 1px solid var(--line); border-radius: var(--radius); background: var(--paper-raised); padding: 18px 20px; }
.panel h4 { margin: 0 0 10px; font-size: .78rem; text-transform: uppercase; letter-spacing: .13em; color: var(--ink-faint); font-weight: 600; }
.panel ul { margin: 0; padding-left: 18px; color: var(--ink-soft); font-size: .93rem; }
.panel li { margin-bottom: 7px; }
.panel li b { color: var(--ink); font-weight: 600; }

.role-list { display: grid; gap: 0; }
.role-item { padding: 11px 0; border-bottom: 1px solid var(--line); font-size: .93rem; }
.role-item:last-child { border-bottom: none; }
.role-item b { display: block; color: var(--ink); }
.role-item span { color: var(--ink-soft); }

.day-list { list-style: none; margin: 0; padding: 0; }
.day-list li { display: flex; gap: 14px; padding: 8px 0; border-bottom: 1px dotted var(--line); font-size: .92rem; }
.day-list li:last-child { border-bottom: none; }
.day-list time { font-family: var(--mono); font-size: .8rem; color: var(--track); white-space: nowrap; padding-top: 2px; min-width: 4.6em; }
.day-list span { color: var(--ink-soft); }

.emp-group { margin-bottom: 14px; }
.emp-group .lbl { font-size: .74rem; text-transform: uppercase; letter-spacing: .12em; color: var(--ink-faint); margin-bottom: 8px; }
.chips { display: flex; flex-wrap: wrap; gap: 7px; }
.chip {
  font-size: .8rem; border: 1px solid var(--line); border-radius: 999px;
  padding: 3px 11px; color: var(--ink-soft); background: var(--paper-raised);
}
.chip.local { border-color: var(--track); color: var(--ink); }
.chip-note { font-size: .76rem; color: var(--ink-faint); margin-top: 8px; }

/* ---------- project ---------- */
.project-brief {
  border: 1px solid var(--line-strong); border-radius: var(--radius);
  background: var(--paper-raised); box-shadow: var(--shadow);
  padding: 24px 28px; margin: 0 0 30px;
}
.project-brief .k { font-size: .72rem; text-transform: uppercase; letter-spacing: .15em; color: var(--track); font-weight: 600; }
.project-brief h3 { font-family: var(--serif); font-size: 1.5rem; margin: 6px 0 4px; text-wrap: balance; }
.project-brief .cast { font-size: .88rem; color: var(--ink-faint); margin-bottom: 14px; }
.project-brief p { color: var(--ink-soft); max-width: 70ch; margin: 0 0 12px; }
.fiction-note { font-size: .8rem; color: var(--ink-faint); border-top: 1px dotted var(--line); padding-top: 12px; margin-top: 4px; }

.task { border: 1px solid var(--line); border-radius: var(--radius); background: var(--paper-raised); margin-bottom: 14px; overflow: hidden; }
.task.open { border-color: var(--line-strong); box-shadow: var(--shadow); }
.task-head {
  display: flex; align-items: center; gap: 16px; width: 100%; text-align: left;
  background: none; border: none; font: inherit; color: inherit; cursor: pointer;
  padding: 16px 20px;
}
.task-num {
  font-family: var(--mono); font-size: .82rem; color: var(--track);
  border: 1px solid var(--track); border-radius: 999px;
  width: 30px; height: 30px; display: grid; place-items: center; flex-shrink: 0;
}
.task.done .task-num { background: var(--track); color: var(--paper); }
.task-head h4 { margin: 0; font-size: 1.02rem; flex: 1; }
.task-head .mins { font-size: .76rem; color: var(--ink-faint); font-variant-numeric: tabular-nums; white-space: nowrap; }
.task-head .caret { color: var(--ink-faint); transition: transform .15s; }
.task.open .caret { transform: rotate(90deg); }
.task-body { border-top: 1px solid var(--line); padding: 22px 24px 24px; }
.task-skills { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 16px; }
.task-skills .chip { font-size: .72rem; }

.task-sec { margin-bottom: 20px; }
.task-sec > .lbl {
  font-size: .72rem; text-transform: uppercase; letter-spacing: .14em;
  color: var(--ink-faint); font-weight: 600; margin-bottom: 8px;
}
.task-sec .prose-t { max-width: 70ch; color: var(--ink-soft); font-size: .95rem; }
.task-sec .prose-t p { margin: 0 0 10px; }
.task-sec .prose-t ul, .task-sec .prose-t ol { margin: 0 0 10px; padding-left: 20px; }
.task-sec .prose-t li { margin-bottom: 6px; }
.task-sec .prose-t b, .task-sec .prose-t strong { color: var(--ink); }

.data-block { border: 1px solid var(--line); border-radius: 8px; background: var(--paper-sunken); padding: 4px 14px 10px; overflow-x: auto; margin: 10px 0; }
table.d { border-collapse: collapse; font-family: var(--mono); font-size: .78rem; margin: 10px 0 4px; min-width: 480px; }
table.d caption { text-align: left; font-family: var(--sans); font-size: .78rem; color: var(--ink-faint); padding: 6px 0; caption-side: top; }
table.d th { text-align: left; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-strong); padding: 5px 14px 5px 0; white-space: nowrap; }
table.d td { border-bottom: 1px dotted var(--line); padding: 5px 14px 5px 0; color: var(--ink-soft); font-variant-numeric: tabular-nums; white-space: nowrap; }
table.d td.num, table.d th.num { text-align: right; }
pre.code {
  font-family: var(--mono); font-size: .8rem; line-height: 1.55; color: var(--ink);
  background: var(--paper-sunken); border: 1px solid var(--line); border-radius: 8px;
  padding: 14px 16px; overflow-x: auto; margin: 10px 0;
}

.reveal-btn {
  border: 1px dashed var(--line-strong); background: var(--accent-wash); color: var(--accent-ink);
  font: inherit; font-size: .86rem; font-weight: 600; cursor: pointer;
  border-radius: 8px; padding: 10px 16px; width: 100%; text-align: left;
}
.reveal-btn:hover { border-style: solid; }
.model-answer { border: 1px solid var(--line-strong); border-radius: 8px; background: var(--accent-wash); padding: 16px 20px; margin-top: 10px; }
.model-answer .lbl { font-size: .72rem; text-transform: uppercase; letter-spacing: .14em; color: var(--accent-ink); font-weight: 700; margin-bottom: 10px; }
.model-answer .prose-t { color: var(--ink-soft); font-size: .93rem; max-width: 70ch; }
.model-answer .prose-t p { margin: 0 0 10px; }
.model-answer .prose-t ul, .model-answer .prose-t ol { margin: 0 0 10px; padding-left: 20px; }
.model-answer .prose-t li { margin-bottom: 6px; }
.model-answer .prose-t b { color: var(--ink); }
.model-answer table.d { background: transparent; }

.task-done-row { display: flex; align-items: center; gap: 10px; border-top: 1px solid var(--line); padding-top: 16px; margin-top: 6px; }
.task-done-row label { font-size: .9rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 9px; }
.task-done-row input { width: 17px; height: 17px; accent-color: var(--track); cursor: pointer; }
.completion-banner {
  border: 1px solid var(--good); background: var(--good-wash); color: var(--ink);
  border-radius: var(--radius); padding: 16px 22px; margin: 18px 0; font-size: .95rem;
}
.completion-banner b { color: var(--good); }

/* ---------- next steps ---------- */
.next-note { font-size: .85rem; color: var(--ink-faint); max-width: 70ch; margin-top: 18px; border-top: 1px dotted var(--line); padding-top: 14px; }

footer.colophon {
  border-top: 1px solid var(--line); margin-top: 70px; padding: 22px 0 0;
  font-size: .8rem; color: var(--ink-faint); max-width: 72ch;
}
@media (max-width: 640px) {
  .shell { padding: 0 16px 72px; }
  .masthead-sub { display: none; }
  .quiz-result-row .nm { width: auto; }
  .task-head { padding: 14px 14px; gap: 10px; }
  .task-body { padding: 16px 14px 18px; }
}
</style>
</head>
<body>

<header class="masthead">
  <div class="masthead-inner">
    <a class="wordmark" href="#/">Healthcare, <span class="amp">beyond the clinic</span></a>
    <span class="masthead-sub">A Vanderbilt career exploration tool</span>
    <span class="masthead-spacer"></span>
    <button class="theme-btn" id="themeBtn" type="button" aria-label="Toggle color theme">Theme</button>
  </div>
</header>

<main class="shell" id="app" aria-live="polite"></main>

<script src="data/quiz.js"></script>
<script src="data/strategy-consulting.js"></script>
<script src="data/finance-investing.js"></script>
<script src="data/operations-administration.js"></script>
<script src="data/data-analytics-technology.js"></script>
<script src="data/research-scientific-affairs.js"></script>
<script src="data/health-policy-population-health.js"></script>
<script>
/* ============================================================
   App - hash router, quiz engine, progress in localStorage.
   ============================================================ */
(function () {
  var TRACKS = window.EXPLORER_TRACKS || [];
  var QUIZ = window.EXPLORER_QUIZ || [];
  var app = document.getElementById('app');
  var PKEY = 'vhce-progress-v1';

  /* ---------- glyphs: one small line drawing per track ---------- */
  var GLYPHS = {
    compass: '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11z"/></svg>',
    ledger:  '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19 9 12l4 3 7-9"/><path d="M16 6h4v4"/></svg>',
    flow:    '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="6" height="6" rx="1"/><rect x="15" y="14" width="6" height="6" rx="1"/><path d="M9 7h5a2 2 0 0 1 2 2v5"/><path d="m14.6 11.6 1.4 2.4 2.4-1.4"/></svg>',
    grid:    '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6"/></svg>',
    flask:   '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 3h4M11 3v6l-5.2 8.7A2 2 0 0 0 7.5 21h9a2 2 0 0 0 1.7-3.3L13 9V3"/><path d="M8.5 15h7"/></svg>',
    capitol: '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 21h16M5 21v-8m14 8v-8M3 13h18l-9-6z"/><path d="M9 21v-5m3 5v-5m3 5v-5M12 7V4l2.5 1L12 6"/></svg>'
  };

  /* ---------- progress ---------- */
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(PKEY)) || {}; } catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(PKEY, JSON.stringify(p)); } catch (e) {}
  }
  function taskDone(trackId, i) {
    var p = loadProgress();
    return !!(p[trackId] && p[trackId][i]);
  }
  function setTaskDone(trackId, i, val) {
    var p = loadProgress();
    p[trackId] = p[trackId] || {};
    if (val) p[trackId][i] = true; else delete p[trackId][i];
    saveProgress(p);
  }
  function trackProgress(t) {
    var n = 0;
    for (var i = 0; i < t.project.tasks.length; i++) if (taskDone(t.id, i)) n++;
    return { done: n, total: t.project.tasks.length };
  }

  /* ---------- tiny helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function chips(arr, cls) {
    return arr.map(function (c) { return '<span class="chip ' + (cls || '') + '">' + esc(c) + '</span>'; }).join('');
  }

  /* ---------- home view ---------- */
  function renderHome() {
    document.title = 'Vanderbilt Non-Clinical Healthcare Explorer';
    var cards = TRACKS.map(function (t) {
      var pr = trackProgress(t);
      var donePill = pr.done === pr.total ? '<span class="done-pill">Project complete</span>'
        : (pr.done > 0 ? '<span class="done-pill">' + pr.done + '/' + pr.total + ' tasks</span>' : '');
      return '<a class="track-card" href="#/track/' + t.id + '" style="--track:' + t.color + ';--track-wash:' + t.wash + '">' +
        donePill +
        '<span class="glyph" aria-hidden="true">' + GLYPHS[t.glyph] + '</span>' +
        '<h3>' + esc(t.name) + '</h3>' +
        '<span class="tag">' + esc(t.short) + '</span>' +
        '<span class="meta"><span>' + t.project.tasks.length + '-task project</span><span>&asymp; ' + esc(t.project.duration) + '</span><span>' + esc(t.entryTitle) + '</span></span>' +
        '</a>';
    }).join('');

    app.innerHTML =
      '<div class="hero">' +
        '<p class="hero-eyebrow">For Vanderbilt students &middot; No white coat required</p>' +
        '<h1>Try six healthcare careers before you apply to one.</h1>' +
        '<p class="lede">Healthcare is a fifth of the U.S. economy, and most of the people who run it never touch a patient. This explorer lets you test-drive the non-clinical side: each track below opens with what the work actually is, then hands you a realistic mini-project with real data, real deliverables, and sample answers to compare against.</p>' +
        '<p class="fineprint">Each project takes roughly 2-3 hours. You need nothing but a notebook or a blank doc - and your progress saves in this browser.</p>' +
      '</div>' +
      '<div id="quizMount"></div>' +
      '<div class="grid-head"><h2>The six tracks</h2><span class="k">Ordered by nothing - start where you\'re curious</span></div>' +
      '<div class="track-grid">' + cards + '</div>' +
      '<footer class="colophon">Built from the Vanderbilt career advising wiki: employer names, opportunity lists, courses, and student organizations referenced here are real and curated by your career advisor. Project scenarios use fictional client names and simplified data - they are teaching cases, not descriptions of real organizations. Questions, or want an introduction to an employer listed here? Ask your career advisor.</footer>';

    renderQuiz(document.getElementById('quizMount'));
    window.scrollTo(0, 0);
  }

  /* ---------- quiz ---------- */
  var quizState = null; // {i, scores}
  function renderQuiz(mount) {
    if (!QUIZ.length) return;
    function paint() {
      var inner;
      if (!quizState) {
        inner = '<div class="quiz-head"><h2>Not sure where to start?</h2><span class="k">' + QUIZ.length + ' questions &middot; 2 minutes</span></div>' +
          '<div class="quiz-body"><p style="color:var(--ink-soft);max-width:62ch;margin:4px 0 16px">Answer honestly - there are no wrong answers and nothing is recorded. You\'ll get the two or three tracks most worth your next hour.</p>' +
          '<button class="quiz-start" type="button" data-act="start">Find my tracks</button></div>';
      } else if (quizState.i < QUIZ.length) {
        var q = QUIZ[quizState.i];
        inner = '<div class="quiz-head"><h2>Which fits you?</h2><span class="quiz-progress">Question ' + (quizState.i + 1) + ' of ' + QUIZ.length + '</span></div>' +
          '<div class="quiz-body"><p class="quiz-q">' + esc(q.q) + '</p><ul class="quiz-opts">' +
          q.opts.map(function (o, j) {
            return '<li><button class="quiz-opt" type="button" data-act="answer" data-j="' + j + '">' + esc(o.t) + '</button></li>';
          }).join('') + '</ul></div>';
      } else {
        var ranked = TRACKS.map(function (t) {
          return { t: t, s: quizState.scores[t.id] || 0 };
        }).sort(function (a, b) { return b.s - a.s; });
        var max = Math.max(1, ranked[0].s);
        inner = '<div class="quiz-head"><h2>Your best-fit tracks</h2><span class="k">Top match first - but read the runners-up too</span></div>' +
          '<div class="quiz-body"><div class="quiz-result-rank">' +
          ranked.slice(0, 4).map(function (r) {
            var pct = Math.round(100 * r.s / max);
            return '<a class="quiz-result-row" href="#/track/' + r.t.id + '" style="--track:' + r.t.color + '">' +
              '<span class="nm">' + esc(r.t.name) + '</span>' +
              '<span class="bar-wrap"><span class="bar" style="width:' + pct + '%"></span></span>' +
              '<span class="pct">' + pct + '%</span></a>';
          }).join('') +
          '</div><p style="font-size:.82rem;color:var(--ink-faint);margin:14px 0 0">A two-minute quiz is a starting point, not a verdict. <button class="btn-ghost btn" type="button" data-act="retake" style="margin-left:8px">Retake</button></p></div>';
      }
      mount.innerHTML = '<div class="quiz-card">' + inner + '</div>';
    }
    mount.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]');
      if (!b) return;
      var act = b.getAttribute('data-act');
      if (act === 'start' || act === 'retake') {
        quizState = { i: 0, scores: {} };
      } else if (act === 'answer') {
        var q = QUIZ[quizState.i];
        var o = q.opts[parseInt(b.getAttribute('data-j'), 10)];
        for (var id in o.w) quizState.scores[id] = (quizState.scores[id] || 0) + o.w[id];
        quizState.i++;
      }
      paint();
    });
    paint();
  }

  /* ---------- track view ---------- */
  function renderTrack(t) {
    document.title = t.name + ' - Vanderbilt Non-Clinical Healthcare Explorer';
    var pr = trackProgress(t);

    var stats = t.stats.map(function (s) {
      return '<span class="stat-chip">' + esc(s.k) + '<b>' + esc(s.v) + '</b></span>';
    }).join('');

    var roles = t.field.titles.map(function (r) {
      return '<div class="role-item"><b>' + esc(r.title) + '</b><span>' + esc(r.desc) + '</span></div>';
    }).join('');

    var day = t.field.day.map(function (d) {
      return '<li><time>' + esc(d.time) + '</time><span>' + esc(d.what) + '</span></li>';
    }).join('');

    var thrive = t.field.thrive.map(function (x) { return '<li>' + x + '</li>'; }).join('');

    var employers =
      '<div class="emp-group"><div class="lbl">Right here in Nashville</div><div class="chips">' + chips(t.field.employers.nashville, 'local') + '</div></div>' +
      '<div class="emp-group"><div class="lbl">National names that hire Vanderbilt students</div><div class="chips">' + chips(t.field.employers.national) + '</div></div>' +
      '<div class="chip-note">Every employer named here has a full page in the advising wiki - ask your advisor for the interview-prep guide.</div>';

    var tasks = t.project.tasks.map(function (task, i) {
      var done = taskDone(t.id, i);
      return '<div class="task' + (done ? ' done' : '') + '" data-task="' + i + '">' +
        '<button class="task-head" type="button" data-toggle="' + i + '" aria-expanded="false">' +
          '<span class="task-num">' + (done ? '&#10003;' : (i + 1)) + '</span>' +
          '<h4>' + esc(task.title) + '</h4>' +
          '<span class="mins">&asymp; ' + task.minutes + ' min</span>' +
          '<span class="caret" aria-hidden="true">&#9656;</span>' +
        '</button>' +
        '<div class="task-body" hidden>' +
          '<div class="task-skills">' + chips(task.skills) + '</div>' +
          '<div class="task-sec"><div class="lbl">The situation</div><div class="prose-t">' + task.brief + '</div></div>' +
          (task.data ? '<div class="task-sec"><div class="lbl">Your materials</div><div class="prose-t">' + task.data + '</div></div>' : '') +
          '<div class="task-sec"><div class="lbl">Your task</div><div class="prose-t">' + task.todo + '</div></div>' +
          (task.hint ? '<div class="task-sec"><div class="lbl">If you\'re stuck</div><div class="prose-t"><p>' + task.hint + '</p></div></div>' : '') +
          '<div class="task-sec">' +
            '<button class="reveal-btn" type="button" data-reveal="' + i + '">Done? Compare your work with a sample answer &darr;</button>' +
            '<div class="model-answer" hidden><div class="lbl">One good answer - not the only one</div><div class="prose-t">' + task.model + '</div></div>' +
          '</div>' +
          '<div class="task-done-row"><label><input type="checkbox" data-done="' + i + '"' + (done ? ' checked' : '') + '> Mark task ' + (i + 1) + ' complete</label></div>' +
        '</div>' +
      '</div>';
    }).join('');

    var completion = pr.done === pr.total
      ? '<div class="completion-banner"><b>Project complete.</b> You just did a compressed week of real ' + esc(t.name.toLowerCase()) + ' work. If any task felt energizing rather than draining, take that seriously - the next-steps list below is where to go from here, and your advisor can connect you with alumni doing exactly this.</div>'
      : '';

    var next =
      '<div class="cols">' +
        '<div class="panel"><h4>Courses &amp; programs at Vanderbilt</h4><ul>' + t.next.courses.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
        '<div class="panel"><h4>Student orgs &amp; campus experiences</h4><ul>' + t.next.campus.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
        '<div class="panel"><h4>Internships &amp; programs to target</h4><ul>' + t.next.experiences.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
        '<div class="panel"><h4>Do this month, from your dorm</h4><ul>' + t.next.now.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
      '</div>' +
      '<p class="next-note">' + t.next.advisorNote + '</p>';

    app.innerHTML =
      '<div style="--track:' + t.color + ';--track-wash:' + t.wash + '">' +
      '<nav class="crumb"><a href="#/">&larr; All six tracks</a></nav>' +
      '<div class="track-hero">' +
        '<div class="glyph" aria-hidden="true">' + GLYPHS[t.glyph] + '</div>' +
        '<h1>' + esc(t.name) + '</h1>' +
        '<p class="tagline">' + esc(t.tagline) + '</p>' +
        '<div class="stat-row">' + stats + '</div>' +
      '</div>' +
      '<nav class="subnav" aria-label="Sections">' +
        '<a href="#field">The field</a><a href="#project">The project</a><a href="#next">Your next steps</a>' +
        '<span class="prog">' + pr.done + ' of ' + pr.total + ' tasks done</span>' +
      '</nav>' +

      '<section class="zone" id="field">' +
        '<h2 class="zone-title">What this work actually is</h2>' +
        '<p class="zone-sub">In plain language - before any job-posting jargon.</p>' +
        '<div class="prose">' + t.field.what.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>' +
        '<div class="callout"><b>What students get wrong:</b> ' + t.field.misconception + '</div>' +
        '<div class="cols">' +
          '<div class="panel"><h4>Job titles you\'d apply to</h4><div class="role-list">' + roles + '</div></div>' +
          '<div class="panel"><h4>A realistic Tuesday, two years in</h4><ul class="day-list">' + day + '</ul></div>' +
          '<div class="panel"><h4>You\'ll probably like this if&hellip;</h4><ul>' + thrive + '</ul></div>' +
          '<div class="panel"><h4>Who hires for this</h4>' + employers + '</div>' +
        '</div>' +
      '</section>' +

      '<section class="zone" id="project">' +
        '<h2 class="zone-title">The project: try the job</h2>' +
        '<p class="zone-sub">A virtual work sample: do the tasks in order, then compare your work against the sample answers.</p>' +
        '<div class="project-brief">' +
          '<span class="k">Your assignment</span>' +
          '<h3>' + esc(t.project.title) + '</h3>' +
          '<div class="cast">You are: <b>' + esc(t.project.role) + '</b> &middot; ' + esc(t.project.setting) + ' &middot; ' + esc(t.project.duration) + ' total</div>' +
          t.project.premise.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
          '<p class="fiction-note">' + t.project.fictionNote + '</p>' +
        '</div>' +
        completion + tasks +
      '</section>' +

      '<section class="zone" id="next">' +
        '<h2 class="zone-title">Liked it? Here\'s the on-ramp</h2>' +
        '<p class="zone-sub">Everything below is real and specific to Vanderbilt - pulled from the career advising wiki.</p>' +
        next +
      '</section>' +
      '</div>';

    /* interactions */
    app.querySelectorAll('[data-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wrap = btn.closest('.task');
        var body = wrap.querySelector('.task-body');
        var open = body.hasAttribute('hidden');
        if (open) { body.removeAttribute('hidden'); wrap.classList.add('open'); }
        else { body.setAttribute('hidden', ''); wrap.classList.remove('open'); }
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    app.querySelectorAll('[data-reveal]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var ans = btn.parentElement.querySelector('.model-answer');
        var show = ans.hasAttribute('hidden');
        if (show) { ans.removeAttribute('hidden'); btn.textContent = 'Hide the sample answer ↑'; }
        else { ans.setAttribute('hidden', ''); btn.textContent = 'Done? Compare your work with a sample answer ↓'; }
      });
    });
    app.querySelectorAll('[data-done]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        setTaskDone(t.id, parseInt(cb.getAttribute('data-done'), 10), cb.checked);
        renderTrack(t); // repaint counters + banner
        var reopened = app.querySelector('.task[data-task="' + cb.getAttribute('data-done') + '"]');
        if (reopened && !cb.checked) {
          reopened.querySelector('.task-body').removeAttribute('hidden');
          reopened.classList.add('open');
        }
      });
    });
    /* subnav highlight on scroll */
    var links = app.querySelectorAll('.subnav a');
    var zones = ['field', 'project', 'next'].map(function (id) { return document.getElementById(id); });
    function onScroll() {
      var y = window.scrollY + 130, cur = 0;
      zones.forEach(function (z, i) { if (z && z.offsetTop <= y) cur = i; });
      links.forEach(function (l, i) { l.classList.toggle('on', i === cur); });
    }
    window.removeEventListener('scroll', window.__vhceScroll || onScroll);
    window.__vhceScroll = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (!location.hash.match(/#(field|project|next)$/)) window.scrollTo(0, 0);
  }

  /* ---------- theme toggle ---------- */
  document.getElementById('themeBtn').addEventListener('click', function () {
    var root = document.documentElement;
    var cur = root.getAttribute('data-theme');
    if (!cur) cur = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
  });

  /* ---------- router ---------- */
  function route() {
    var h = location.hash || '#/';
    var m = h.match(/^#\/track\/([a-z0-9-]+)/);
    if (m) {
      var t = null;
      for (var i = 0; i < TRACKS.length; i++) if (TRACKS[i].id === m[1]) t = TRACKS[i];
      if (t) { renderTrack(t); return; }
    }
    renderHome();
  }
  window.addEventListener('hashchange', route);
  route();
})();
</script>
</body>
</html>
