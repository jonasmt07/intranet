export const styles = `
.iaeb-root {
  /* ── Paleta de cores ─────────────────────────────────────── */
  --navy-950: #1a2e58;
  --navy-900: #213a72;
  --navy-800: #2a4d94;
  --navy-700: #3a64ad;
  --navy-600: #5481c8;
  --navy-500: #7ba0d8;
  --navy-100: #e2eaf6;
  --navy-50:  #eef3fa;
  --gold-500: #f4b942;
  --gold-600: #d99820;
  --gold-100: #fbeec9;
  --paper:    #f6f5f1;
  --paper-2:  #efeee9;
  --white:    #ffffff;
  --ink-900:  #0e1422;
  --ink-700:  #2a3245;
  --ink-500:  #5b6478;
  --ink-400:  #7e8699;
  --line:     #e3e1d9;
  --line-2:   #d6d4cc;
  --success: #2f7d4f;
  --danger:  #b5341e;

  /* ── Tipografia ──────────────────────────────────────────── */
  --font-display: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-body:    "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  /* ── Escala de espaçamento (múltiplos de 4 px) ───────────── */
  --sp-1:  4px;
  --sp-2:  8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-7: 28px;
  --sp-8: 32px;

  /* ── Bordas e sombras ────────────────────────────────────── */
  --r-xs: 4px;
  --r-sm: 8px;
  --r-md: 12px;
  --r-lg: 16px;

  --shadow-xs:  0 1px 3px rgba(10,34,71,.06), 0 1px 2px rgba(10,34,71,.04);
  --shadow-sm:  0 2px 8px -2px rgba(10,34,71,.10), 0 1px 3px -1px rgba(10,34,71,.06);
  --shadow-md:  0 6px 22px -8px rgba(10,34,71,.14), 0 2px 6px -2px rgba(10,34,71,.08);
  --shadow-lg:  0 16px 40px -12px rgba(10,34,71,.18), 0 4px 12px -4px rgba(10,34,71,.10);
  --shadow-hover: 0 10px 32px -8px rgba(10,34,71,.20), 0 4px 10px -4px rgba(10,34,71,.10);

  /* ── Transições padrão ───────────────────────────────────── */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --transition-fast: 140ms var(--ease-out);
  --transition-base: 200ms var(--ease-out);
  --transition-slow: 280ms var(--ease-out);

  background: var(--paper);
  color: var(--ink-900);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.55;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

.iaeb-root *, .iaeb-root *::before, .iaeb-root *::after {
  box-sizing: border-box;
}

.iaeb-root a { color: inherit; text-decoration: none; }
.iaeb-root button { font-family: inherit; cursor: pointer; }

/* ── Focus global acessível ─────────────────────────────── */
.iaeb-root *:focus-visible {
  outline: 2px solid var(--navy-600);
  outline-offset: 2px;
  border-radius: var(--r-xs);
}

.iaeb-root .container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--sp-8);
}

/* ═══════════════════════════════════════════════════════════
   Header
══════════════════════════════════════════════════════════ */
.iaeb-root .header {
  background: var(--white);
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background: rgba(255,255,255,.96);
}

.iaeb-root .header__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 14px var(--sp-8);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 40px;
}

.iaeb-root .brand {
  display: flex;
  align-items: center;
  gap: 14px;
  transition: opacity var(--transition-fast);
}
.iaeb-root .brand:hover { opacity: .85; }

.iaeb-root .brand__divider { width: 1px; height: 28px; background: var(--line-2); }

.iaeb-root .brand__intranet {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 15px;
  color: var(--ink-700);
  letter-spacing: 0.01em;
}
.iaeb-root .brand__intranet small {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-400);
  margin-bottom: 2px;
}

/* ── Navegação ────────────────────────────────────────────── */
.iaeb-root .nav { display: flex; gap: 2px; justify-content: center; }

.iaeb-root .nav__item {
  position: relative;
  padding: 9px 14px;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 13.5px;
  letter-spacing: 0.005em;
  color: var(--ink-500);
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
}
.iaeb-root .nav__item:hover {
  background: var(--navy-50);
  color: var(--navy-800);
}
.iaeb-root .nav__item.is-active {
  color: var(--navy-800);
  font-weight: 600;
}
.iaeb-root .nav__item.is-active::after {
  content: "";
  position: absolute;
  bottom: -16px;
  left: 14px;
  right: 14px;
  height: 2px;
  background: var(--gold-500);
  border-radius: 1px 1px 0 0;
}
.iaeb-root .nav__chev { width: 10px; height: 10px; opacity: .4; }

/* ── Área direita do header ──────────────────────────────── */
.iaeb-root .header__right { display: flex; align-items: center; gap: 10px; }

.iaeb-root .search { position: relative; width: 280px; }
.iaeb-root .search input {
  width: 100%;
  height: 38px;
  border: 1px solid var(--line-2);
  background: var(--paper);
  border-radius: 999px;
  padding: 0 16px 0 40px;
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--ink-900);
  outline: none;
  transition:
    border-color var(--transition-fast),
    background var(--transition-fast),
    box-shadow var(--transition-fast);
}
.iaeb-root .search input:focus {
  border-color: var(--navy-600);
  background: var(--white);
  box-shadow: 0 0 0 3px rgba(84,129,200,.15);
}
.iaeb-root .search .search__icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--ink-400);
  pointer-events: none;
}
.iaeb-root .search kbd {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 3px 6px;
  border: 1px solid var(--line-2);
  border-radius: var(--r-xs);
  color: var(--ink-400);
  background: var(--white);
}

/* Botão ícone */
.iaeb-root .icon-btn {
  width: 38px;
  height: 38px;
  border: 1px solid var(--line-2);
  background: var(--white);
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-700);
  position: relative;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    transform var(--transition-fast);
}
.iaeb-root .icon-btn:hover {
  background: var(--paper);
  border-color: var(--line-2);
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}
.iaeb-root .icon-btn:active { transform: translateY(0); }
.iaeb-root .icon-btn .dot {
  position: absolute;
  top: 8px;
  right: 9px;
  width: 8px;
  height: 8px;
  background: var(--gold-500);
  border: 2px solid var(--white);
  border-radius: 50%;
}

/* Avatar */
.iaeb-root .avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--navy-800);
  color: var(--gold-500);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.02em;
  border: 2px solid var(--navy-800);
  cursor: pointer;
  transition:
    box-shadow var(--transition-fast),
    transform var(--transition-fast);
}
.iaeb-root .avatar:hover {
  box-shadow: 0 0 0 3px var(--navy-100);
  transform: translateY(-1px);
}

/* ═══════════════════════════════════════════════════════════
   Hero band
══════════════════════════════════════════════════════════ */
.iaeb-root .hero-band {
  background: var(--paper);
  color: var(--ink-900);
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--line);
}
.iaeb-root .hero-band__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(244,185,66,.08), transparent 40%),
    radial-gradient(circle at 85% 80%, rgba(84,129,200,.08), transparent 50%);
  pointer-events: none;
}
.iaeb-root .hero-band .container { position: relative; }

.iaeb-root .hero-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: var(--sp-7);
  padding: var(--sp-7) 0;
}

.iaeb-root .hero {
  position: relative;
  height: 420px;
  border-radius: var(--r-md);
  overflow: hidden;
  background: #111;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}
.iaeb-root .hero:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
.iaeb-root .hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(5,14,34,0) 0%, rgba(5,14,34,.2) 40%, rgba(5,14,34,.92) 100%);
}
.iaeb-root .hero__content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--sp-7) var(--sp-8);
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  color: white;
}
.iaeb-root .hero__tag {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--gold-500);
  width: fit-content;
}
.iaeb-root .hero__tag::before { content: ""; width: 18px; height: 1px; background: var(--gold-500); }

.iaeb-root .hero__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 38px;
  line-height: 1.06;
  letter-spacing: -0.025em;
  max-width: 720px;
  margin: 0;
  color: white;
}
.iaeb-root .hero__meta {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 12px;
  color: rgba(255,255,255,.65);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.iaeb-root .hero__pager {
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: rgba(255,255,255,.8);
  background: rgba(0,0,0,.35);
  backdrop-filter: blur(4px);
  border-radius: 999px;
  padding: 6px 12px;
}
.iaeb-root .hero__dots {
  position: absolute;
  bottom: var(--sp-7);
  right: var(--sp-8);
  display: flex;
  gap: 6px;
}
.iaeb-root .hero__dot {
  width: 22px;
  height: 3px;
  background: rgba(255,255,255,.3);
  cursor: pointer;
  border-radius: 2px;
  transition: background var(--transition-fast), width var(--transition-base);
}
.iaeb-root .hero__dot.is-active { background: var(--gold-500); }

/* Mini news (sidebar do hero) */
.iaeb-root .hero-side { display: flex; flex-direction: column; gap: var(--sp-3); }
.iaeb-root .hero-side__label {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-400);
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}
.iaeb-root .hero-side__label a { color: var(--navy-700); }

.iaeb-root .mini-news {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 14px;
  padding: var(--sp-3);
  border-radius: var(--r-sm);
  background: var(--white);
  border: 1px solid var(--line);
  cursor: pointer;
  box-shadow: var(--shadow-xs);
  transition:
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    transform var(--transition-base);
}
.iaeb-root .mini-news:hover {
  border-color: var(--navy-600);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.iaeb-root .mini-news__img {
  width: 88px;
  height: 64px;
  border-radius: var(--r-xs);
  background-size: cover;
  background-position: center;
  background-color: var(--navy-100);
}
.iaeb-root .mini-news__cat {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gold-600);
  margin-bottom: 4px;
}
.iaeb-root .mini-news__title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 13.5px;
  line-height: 1.35;
  color: var(--ink-900);
  letter-spacing: -0.01em;
}
.iaeb-root .mini-news__date {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--ink-400);
  margin-top: 6px;
  letter-spacing: 0.08em;
}

/* ═══════════════════════════════════════════════════════════
   Quick strip
══════════════════════════════════════════════════════════ */
.iaeb-root .quick-strip {
  background: var(--white);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.iaeb-root .quick-strip__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 13px var(--sp-8);
  display: flex;
  align-items: center;
  gap: 22px;
}
.iaeb-root .quick-strip__label {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-400);
  white-space: nowrap;
}
.iaeb-root .quick-strip__items {
  display: flex;
  gap: 2px;
  flex: 1;
  overflow-x: auto;
}
.iaeb-root .quick-tile {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: var(--r-sm);
  color: var(--ink-700);
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.005em;
  white-space: nowrap;
  border: 1px solid transparent;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    transform var(--transition-fast),
    color var(--transition-fast);
}
.iaeb-root .quick-tile:hover {
  background: var(--navy-50);
  border-color: var(--navy-100);
  color: var(--navy-800);
  transform: translateY(-1px);
  box-shadow: var(--shadow-xs);
}
.iaeb-root .quick-tile:active { transform: translateY(0); }
.iaeb-root .quick-tile__icon { width: 18px; height: 18px; color: var(--navy-700); }

.iaeb-root .quick-strip__all {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--navy-700);
  padding: 8px 12px;
  border-left: 1px solid var(--line);
  white-space: nowrap;
  transition: color var(--transition-fast);
}
.iaeb-root .quick-strip__all:hover { color: var(--navy-900); }

/* ═══════════════════════════════════════════════════════════
   Stats strip
══════════════════════════════════════════════════════════ */
.iaeb-root .stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.iaeb-root .stat {
  padding: 22px var(--sp-6);
  border-left: 1px solid var(--line);
  transition: background var(--transition-fast);
}
.iaeb-root .stat:first-child { border-left: 0; }
.iaeb-root .stat:hover { background: var(--navy-50); }

.iaeb-root .stat__label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-400);
  margin-bottom: 10px;
}
.iaeb-root .stat__value {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -0.03em;
  color: var(--navy-800);
  line-height: 1;
}
.iaeb-root .stat__delta {
  margin-top: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--success);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.iaeb-root .stat__delta--down { color: var(--danger); }

/* ═══════════════════════════════════════════════════════════
   Main grid & cabeçalhos de seção
══════════════════════════════════════════════════════════ */
.iaeb-root .main-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: var(--sp-7);
  padding-top: var(--sp-8);
}

.iaeb-root .section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--sp-4);
}
.iaeb-root .section-head h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 21px;
  margin: 0;
  letter-spacing: -0.02em;
  color: var(--ink-900);
}
.iaeb-root .section-head__sub {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-400);
  display: flex;
  align-items: center;
  gap: 8px;
}
.iaeb-root .section-head__sub::before {
  content: "";
  width: 6px;
  height: 6px;
  background: var(--gold-500);
  border-radius: 50%;
}
.iaeb-root .section-head__link {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--navy-700);
  transition: color var(--transition-fast);
}
.iaeb-root .section-head__link:hover { color: var(--navy-900); }

/* ── Cards base ──────────────────────────────────────────── */
.iaeb-root .card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-xs);
}
.iaeb-root .card--dark { background: var(--white); color: var(--ink-900); border-color: var(--line); }
.iaeb-root .card__head {
  padding: 18px var(--sp-5) 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.iaeb-root .card__title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.015em;
  margin: 0;
}
.iaeb-root .card__title small {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-400);
  display: block;
  margin-bottom: 4px;
}

/* ═══════════════════════════════════════════════════════════
   Events
══════════════════════════════════════════════════════════ */
.iaeb-root .events { display: grid; grid-template-columns: 1fr; gap: var(--sp-2); }

.iaeb-root .event-row {
  display: grid;
  grid-template-columns: 84px 1fr auto;
  gap: var(--sp-5);
  align-items: center;
  padding: 15px var(--sp-5);
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
  box-shadow: var(--shadow-xs);
  cursor: pointer;
  transition:
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    transform var(--transition-base);
}
.iaeb-root .event-row:hover {
  border-color: var(--navy-600);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.iaeb-root .event-row:active { transform: translateY(0); }

.iaeb-root .event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  background: var(--paper);
  border-radius: 6px;
  border: 1px solid var(--line);
}
.iaeb-root .event-date__day {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--navy-800);
}
.iaeb-root .event-date__mon {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-500);
  margin-top: 4px;
}
.iaeb-root .event-row--featured .event-date { background: var(--navy-800); border-color: var(--navy-800); }
.iaeb-root .event-row--featured .event-date__day { color: var(--gold-500); }
.iaeb-root .event-row--featured .event-date__mon { color: rgba(255,255,255,.65); }

.iaeb-root .event-info__type {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--gold-600);
  margin-bottom: 4px;
}
.iaeb-root .event-info__title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.01em;
  color: var(--ink-900);
  margin-bottom: 4px;
  line-height: 1.35;
}
.iaeb-root .event-info__meta {
  display: flex;
  gap: 14px;
  font-size: 12px;
  color: var(--ink-500);
  font-family: var(--font-body);
}
.iaeb-root .event-time {
  font-family: var(--font-mono);
  font-size: 12px;
  text-align: right;
  color: var(--ink-500);
  letter-spacing: 0.06em;
}
.iaeb-root .event-time strong {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  color: var(--navy-800);
  letter-spacing: -0.02em;
  margin-bottom: 2px;
}

/* ═══════════════════════════════════════════════════════════
   Birthdays
══════════════════════════════════════════════════════════ */
.iaeb-root .birthdays { padding: 4px 0 4px; }

.iaeb-root .bday {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
  padding: 12px var(--sp-5);
  border-top: 1px solid var(--line);
  transition: background var(--transition-fast);
}
.iaeb-root .bday:first-child { border-top: 0; }
.iaeb-root .bday:hover { background: var(--paper); }

.iaeb-root .bday__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--navy-100);
  color: var(--navy-800);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
}
.iaeb-root .bday--today .bday__avatar { background: var(--gold-500); color: var(--navy-900); }
.iaeb-root .bday__name {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 14px;
  color: var(--ink-900);
  letter-spacing: -0.005em;
}
.iaeb-root .bday__dept { font-size: 12px; color: var(--ink-500); margin-top: 1px; }
.iaeb-root .bday__date {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--ink-500);
  text-align: right;
}
.iaeb-root .bday--today .bday__date { color: var(--gold-600); font-weight: 600; }

/* ═══════════════════════════════════════════════════════════
   Weather
══════════════════════════════════════════════════════════ */
.iaeb-root .weather {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--line);
  border-radius: 0 0 var(--r-md) var(--r-md);
  overflow: hidden;
}
.iaeb-root .weather__city {
  background: var(--white);
  padding: 15px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: background var(--transition-fast);
}
.iaeb-root .weather__city:hover { background: var(--navy-50); }
.iaeb-root .weather__city:first-child {
  grid-column: 1 / -1;
  padding: 20px;
  background: linear-gradient(135deg, var(--navy-50), var(--white));
}
.iaeb-root .weather__city:first-child:hover { background: linear-gradient(135deg, var(--navy-100), var(--navy-50)); }
.iaeb-root .weather__city:first-child .weather__temp { font-size: 44px; }

.iaeb-root .weather__name {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-500);
}
.iaeb-root .weather__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.iaeb-root .weather__temp {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 28px;
  letter-spacing: -0.03em;
  color: var(--navy-800);
}
.iaeb-root .weather__icon { width: 32px; height: 32px; color: var(--gold-600); }
.iaeb-root .weather__city:first-child .weather__icon { width: 48px; height: 48px; }
.iaeb-root .weather__meta {
  font-size: 11px;
  font-family: var(--font-mono);
  color: var(--ink-400);
  letter-spacing: 0.06em;
  margin-top: 2px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ═══════════════════════════════════════════════════════════
   Mission / Countdown
══════════════════════════════════════════════════════════ */
.iaeb-root .mission {
  background:
    radial-gradient(circle at 85% 15%, rgba(244,185,66,.18), transparent 55%),
    linear-gradient(135deg, var(--navy-50) 0%, var(--white) 100%);
  color: var(--ink-900);
  border: 1px solid var(--navy-100);
  border-radius: var(--r-md);
  padding: 22px var(--sp-6);
  box-shadow: var(--shadow-sm);
}
.iaeb-root .mission__label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--gold-600);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
}
.iaeb-root .mission__label::before {
  content: "";
  width: 8px;
  height: 8px;
  background: var(--gold-500);
  border-radius: 50%;
  box-shadow: 0 0 12px var(--gold-500);
}
.iaeb-root .mission__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
  color: var(--navy-800);
}
.iaeb-root .mission__sub { font-size: 13px; color: var(--ink-500); margin-bottom: 18px; line-height: 1.5; }

.iaeb-root .countdown {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-2);
}
.iaeb-root .cd-unit {
  background: var(--white);
  border: 1px solid var(--navy-100);
  border-radius: 6px;
  padding: 12px 6px;
  text-align: center;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}
.iaeb-root .cd-unit:hover {
  border-color: var(--navy-600);
  box-shadow: var(--shadow-xs);
}
.iaeb-root .cd-unit strong {
  display: block;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 22px;
  color: var(--navy-800);
  letter-spacing: -0.02em;
}
.iaeb-root .cd-unit span {
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-400);
}

/* ═══════════════════════════════════════════════════════════
   Docs
══════════════════════════════════════════════════════════ */
.iaeb-root .docs-tabs {
  display: flex;
  gap: 2px;
  border-bottom: 1px solid var(--line);
  padding: 0 4px;
}
.iaeb-root .docs-tab {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.005em;
  padding: 11px 14px;
  color: var(--ink-400);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  margin-bottom: -1px;
  transition: color var(--transition-fast);
}
.iaeb-root .docs-tab:hover { color: var(--ink-700); }
.iaeb-root .docs-tab.is-active {
  color: var(--navy-800);
  border-bottom-color: var(--gold-500);
  font-weight: 600;
}

.iaeb-root .doc {
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 14px;
  align-items: center;
  padding: 14px var(--sp-5);
  border-top: 1px solid var(--line);
  cursor: pointer;
  transition:
    background var(--transition-fast),
    box-shadow var(--transition-fast);
}
.iaeb-root .doc:hover { background: var(--paper); }

.iaeb-root .doc__icon {
  width: 36px;
  height: 44px;
  border-radius: var(--r-xs);
  background: var(--navy-50);
  color: var(--navy-800);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.06em;
  position: relative;
}
.iaeb-root .doc__icon--pdf { background: #fce4dc; color: #b5341e; }
.iaeb-root .doc__icon--xls { background: #d8edd8; color: #2f7d4f; }
.iaeb-root .doc__icon--doc { background: var(--navy-50); color: var(--navy-700); }

.iaeb-root .doc__name {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 14px;
  color: var(--ink-900);
  margin-bottom: 3px;
  letter-spacing: -0.005em;
}
.iaeb-root .doc__meta {
  font-size: 11px;
  font-family: var(--font-mono);
  color: var(--ink-500);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.iaeb-root .doc__action {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--navy-700);
  transition: color var(--transition-fast);
}
.iaeb-root .doc:hover .doc__action { color: var(--navy-900); }

/* ═══════════════════════════════════════════════════════════
   News grid (seção de notícias externas)
══════════════════════════════════════════════════════════ */
.iaeb-root .news-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-4);
}
.iaeb-root .news-card {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-xs);
  transition:
    transform var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base);
}
.iaeb-root .news-card:hover {
  transform: translateY(-4px);
  border-color: var(--navy-600);
  box-shadow: var(--shadow-hover);
}
.iaeb-root .news-card:active { transform: translateY(-1px); }

.iaeb-root .news-card__img {
  aspect-ratio: 16 / 10;
  background-size: cover;
  background-position: center;
  background-color: var(--navy-100);
  position: relative;
  overflow: hidden;
}
.iaeb-root .news-card__cat {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(5,14,34,.85);
  color: var(--gold-500);
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 5px 10px;
  border-radius: var(--r-xs);
  backdrop-filter: blur(4px);
}
.iaeb-root .news-card__body {
  padding: var(--sp-4) 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}
.iaeb-root .news-card__title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 15px;
  line-height: 1.35;
  letter-spacing: -0.015em;
  color: var(--ink-900);
  text-wrap: balance;
  margin: 0;
}
.iaeb-root .news-card__meta {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-400);
}

/* ═══════════════════════════════════════════════════════════
   Footer
══════════════════════════════════════════════════════════ */
.iaeb-root .footer {
  background: var(--paper-2);
  color: var(--ink-700);
  margin-top: 48px;
  padding: 36px 0 22px;
  border-top: 1px solid var(--line);
}
.iaeb-root .footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 36px;
  margin-bottom: 28px;
}
.iaeb-root .footer h4 {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--navy-800);
  margin: 0 0 14px;
}
.iaeb-root .footer ul { list-style: none; padding: 0; margin: 0; }
.iaeb-root .footer li {
  padding: 4px 0;
  font-size: 13px;
  color: var(--ink-500);
  line-height: 1.5;
}
.iaeb-root .footer li a {
  color: var(--ink-700);
  transition: color var(--transition-fast);
}
.iaeb-root .footer li a:hover { color: var(--navy-800); }
.iaeb-root .footer__copy {
  border-top: 1px solid var(--line);
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-400);
}

/* ═══════════════════════════════════════════════════════════
   Utilitários
══════════════════════════════════════════════════════════ */
.iaeb-root .divider-strong {
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--line-2), transparent);
  margin: 28px 0;
}
.iaeb-root .scrollx { overflow-x: auto; }
.iaeb-root .scrollx::-webkit-scrollbar { height: 5px; }
.iaeb-root .scrollx::-webkit-scrollbar-track { background: transparent; }
.iaeb-root .scrollx::-webkit-scrollbar-thumb {
  background: var(--line-2);
  border-radius: 3px;
}
.iaeb-root .scrollx::-webkit-scrollbar-thumb:hover { background: var(--ink-400); }

/* ═══════════════════════════════════════════════════════════
   Responsivo
══════════════════════════════════════════════════════════ */
@media (max-width: 1180px) {
  .iaeb-root .hero-grid { grid-template-columns: 1fr; }
  .iaeb-root .main-grid { grid-template-columns: 1fr; }
  .iaeb-root .news-grid { grid-template-columns: repeat(2, 1fr); }
  .iaeb-root .stats { grid-template-columns: repeat(2, 1fr); }
  .iaeb-root .stat:nth-child(3) { border-left: 0; }
}
@media (max-width: 720px) {
  .iaeb-root .header__inner { grid-template-columns: 1fr auto; }
  .iaeb-root .nav { display: none; }
  .iaeb-root .search { width: 180px; }
  .iaeb-root .news-grid { grid-template-columns: 1fr; }
  .iaeb-root .stats { grid-template-columns: 1fr; }
  .iaeb-root .stat { border-left: 0; border-top: 1px solid var(--line); }
  .iaeb-root .footer__grid { grid-template-columns: 1fr 1fr; }
}
`;
