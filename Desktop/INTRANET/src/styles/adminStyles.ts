export const adminStyles = `
/* ═══════════════════════════════════════════════════════════════════════════
   Admin CMS — estilos isolados sob .adm
══════════════════════════════════════════════════════════════════════════ */

/* ── Tokens herdados (mesmo design system do frontend) ─────────────────── */
.adm {
  --navy-950: #1a2e58;
  --navy-900: #213a72;
  --navy-800: #2a4d94;
  --navy-700: #3a64ad;
  --navy-600: #5481c8;
  --navy-100: #e2eaf6;
  --navy-50:  #eef3fa;
  --gold-500: #f4b942;
  --gold-600: #d99820;
  --paper:    #f6f5f1;
  --paper-2:  #efeee9;
  --white:    #ffffff;
  --ink-900:  #0e1422;
  --ink-700:  #2a3245;
  --ink-500:  #5b6478;
  --ink-400:  #7e8699;
  --line:     #e3e1d9;
  --line-2:   #d6d4cc;
  --success:  #2f7d4f;
  --danger:   #b5341e;
  --danger-50:#fdf1ef;

  --font-display: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  --r-xs: 4px; --r-sm: 8px; --r-md: 12px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --transition: 180ms var(--ease-out);
  --shadow-sm: 0 2px 8px -2px rgba(10,34,71,.10), 0 1px 3px -1px rgba(10,34,71,.06);
  --shadow-md: 0 6px 22px -8px rgba(10,34,71,.14), 0 2px 6px -2px rgba(10,34,71,.08);

  min-height: 100vh;
  background: var(--paper);
  font-family: var(--font-display);
  font-size: 14px;
  color: var(--ink-900);
  -webkit-font-smoothing: antialiased;
}

.adm *, .adm *::before, .adm *::after { box-sizing: border-box; }
.adm a { color: inherit; text-decoration: none; }
.adm button { font-family: inherit; cursor: pointer; }
.adm *:focus-visible { outline: 2px solid var(--navy-600); outline-offset: 2px; border-radius: var(--r-xs); }

/* ── Header ─────────────────────────────────────────────────────────────── */
.adm-header {
  position: sticky; top: 0; z-index: 50;
  background: var(--navy-900);
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 2px 12px rgba(10,34,71,.25);
}
.adm-header__inner {
  max-width: 1280px; margin: 0 auto;
  padding: 0 32px;
  display: flex; align-items: center; gap: 32px;
  height: 60px;
}

/* Brand */
.adm-brand {
  display: flex; align-items: center; gap: 14px;
  transition: opacity var(--transition);
}
.adm-brand:hover { opacity: .85; }
.adm-brand__sep { width: 1px; height: 28px; background: rgba(255,255,255,.15); }
.adm-brand__label {
  font-weight: 500; font-size: 15px; color: #fff; letter-spacing: .01em;
}
.adm-brand__label small {
  display: block; font-family: var(--font-mono);
  font-size: 10px; text-transform: uppercase; letter-spacing: .16em;
  color: rgba(255,255,255,.5); margin-bottom: 2px;
}

/* Nav */
.adm-nav { display: flex; gap: 4px; flex: 1; }
.adm-nav__item {
  padding: 8px 14px; border-radius: var(--r-sm);
  font-weight: 500; font-size: 13.5px;
  color: rgba(255,255,255,.65);
  transition: background var(--transition), color var(--transition);
}
.adm-nav__item:hover { background: rgba(255,255,255,.1); color: #fff; }
.adm-nav__item.is-active { background: rgba(255,255,255,.12); color: #fff; font-weight: 600; }

/* Botão voltar */
.adm-back-btn {
  margin-left: auto;
  font-family: var(--font-mono); font-size: 11px;
  text-transform: uppercase; letter-spacing: .14em;
  color: rgba(255,255,255,.55);
  padding: 8px 14px; border-radius: var(--r-sm);
  border: 1px solid rgba(255,255,255,.15);
  transition: background var(--transition), color var(--transition);
  white-space: nowrap;
}
.adm-back-btn:hover { background: rgba(255,255,255,.08); color: rgba(255,255,255,.85); }

/* ── Main ───────────────────────────────────────────────────────────────── */
.adm-main { max-width: 1280px; margin: 0 auto; padding: 40px 32px 64px; }

/* ── Página (head + conteúdo) ───────────────────────────────────────────── */
.adm-page { display: flex; flex-direction: column; gap: 28px; }

.adm-page__head {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
}
.adm-page__title {
  font-size: 26px; font-weight: 700; letter-spacing: -.025em; margin: 0 0 4px; color: var(--ink-900);
}
.adm-page__sub { font-size: 13px; color: var(--ink-500); margin: 0; }

/* ── Botões ─────────────────────────────────────────────────────────────── */
.adm-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 20px; border-radius: var(--r-sm);
  font-weight: 600; font-size: 13.5px; letter-spacing: .01em;
  border: 1px solid transparent;
  transition: background var(--transition), border-color var(--transition),
              box-shadow var(--transition), transform var(--transition);
  white-space: nowrap; cursor: pointer;
}
.adm-btn:hover { transform: translateY(-1px); }
.adm-btn:active { transform: translateY(0); }
.adm-btn:disabled { opacity: .6; pointer-events: none; }

.adm-btn--primary {
  background: var(--navy-800); color: #fff;
  box-shadow: 0 2px 8px rgba(42,77,148,.3);
}
.adm-btn--primary:hover {
  background: var(--navy-900);
  box-shadow: 0 4px 14px rgba(42,77,148,.35);
}
.adm-btn--ghost {
  background: transparent; color: var(--ink-700); border-color: var(--line-2);
}
.adm-btn--ghost:hover { background: var(--paper-2); border-color: var(--line); }

/* ── Links de ação ──────────────────────────────────────────────────────── */
.adm-action-link {
  font-family: var(--font-mono); font-size: 11px; text-transform: uppercase;
  letter-spacing: .12em; color: var(--navy-700); background: none; border: 0;
  padding: 4px 6px; border-radius: var(--r-xs);
  transition: background var(--transition), color var(--transition);
  cursor: pointer;
}
.adm-action-link:hover { background: var(--navy-50); color: var(--navy-900); }
.adm-action-link--danger { color: var(--danger); }
.adm-action-link--danger:hover { background: var(--danger-50); color: var(--danger); }
.adm-action-link:disabled { opacity: .5; pointer-events: none; }

/* ── Tabela ─────────────────────────────────────────────────────────────── */
.adm-table-wrap {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}
.adm-table { width: 100%; border-collapse: collapse; }
.adm-table thead { background: var(--paper); border-bottom: 1px solid var(--line); }
.adm-table th {
  padding: 12px 16px; text-align: left;
  font-family: var(--font-mono); font-size: 10px;
  text-transform: uppercase; letter-spacing: .16em; color: var(--ink-400);
  font-weight: 500;
}
.adm-table td { padding: 14px 16px; border-top: 1px solid var(--line); vertical-align: middle; }
.adm-table__row { transition: background var(--transition); }
.adm-table__row:hover td { background: var(--paper); }
.adm-table__row--deleting td { opacity: .5; pointer-events: none; }

.adm-table__title-cell { display: flex; align-items: center; gap: 12px; }
.adm-table__title {
  font-weight: 500; font-size: 14px; color: var(--ink-900);
  line-height: 1.35; letter-spacing: -.005em;
  /* Limita a 2 linhas */
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.adm-table__date { font-family: var(--font-mono); font-size: 12px; color: var(--ink-500); white-space: nowrap; }
.adm-table__actions { white-space: nowrap; display: flex; gap: 8px; }

/* Thumbnail na tabela */
.adm-thumb {
  flex-shrink: 0; width: 48px; height: 36px;
  border-radius: var(--r-xs); display: inline-block;
  border: 1px solid var(--line);
}

/* Tag de categoria */
.adm-tag {
  display: inline-block;
  padding: 3px 8px;
  background: var(--navy-50); color: var(--navy-800);
  border-radius: 999px;
  font-family: var(--font-mono); font-size: 10px;
  text-transform: uppercase; letter-spacing: .12em;
  white-space: nowrap;
}

/* Badges de status */
.adm-badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 10px; border-radius: 999px;
  font-family: var(--font-mono); font-size: 10px;
  text-transform: uppercase; letter-spacing: .12em; font-weight: 600;
}
.adm-badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; }
.adm-badge--published { background: #e6f4ed; color: var(--success); }
.adm-badge--published::before { background: var(--success); }
.adm-badge--draft { background: var(--paper-2); color: var(--ink-500); }
.adm-badge--draft::before { background: var(--ink-400); }

/* ── Formulário ─────────────────────────────────────────────────────────── */
.adm-form {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}
.adm-form__grid {
  display: grid; grid-template-columns: 1fr 320px;
  gap: 0;
}
.adm-form__col { padding: 28px 32px; }
.adm-form__col--main { display: flex; flex-direction: column; gap: 20px; }
.adm-form__col--side {
  background: var(--paper);
  border-left: 1px solid var(--line);
  display: flex; flex-direction: column; gap: 20px;
}

.adm-field { display: flex; flex-direction: column; gap: 6px; }
.adm-field--sm { max-width: 240px; }

.adm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.adm-label {
  font-family: var(--font-mono); font-size: 11px;
  text-transform: uppercase; letter-spacing: .15em;
  color: var(--ink-500); font-weight: 500;
}
.adm-req { color: var(--danger); }

.adm-input, .adm-textarea, .adm-select {
  font-family: var(--font-display); font-size: 14px;
  color: var(--ink-900); background: var(--white);
  border: 1px solid var(--line-2); border-radius: var(--r-sm);
  padding: 10px 14px;
  transition: border-color var(--transition), box-shadow var(--transition);
  outline: none; width: 100%;
}
.adm-input:focus, .adm-textarea:focus, .adm-select:focus {
  border-color: var(--navy-600);
  box-shadow: 0 0 0 3px rgba(84,129,200,.15);
}
.adm-input::placeholder, .adm-textarea::placeholder { color: var(--ink-400); }
.adm-textarea { resize: vertical; min-height: 130px; line-height: 1.55; }
.adm-select { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237e8699' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 36px; }

.adm-char-count {
  font-family: var(--font-mono); font-size: 10px; color: var(--ink-400);
  text-align: right; letter-spacing: .06em;
}
.adm-hint { font-size: 12px; color: var(--ink-400); margin: 0; line-height: 1.5; }

/* Preview de capa */
.adm-cover-preview {
  width: 100%; aspect-ratio: 16 / 9;
  border-radius: var(--r-sm); border: 1px solid var(--line);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

/* Swatches de gradiente */
.adm-gradients { display: flex; gap: 8px; flex-wrap: wrap; }
.adm-swatch {
  width: 36px; height: 36px; border-radius: var(--r-sm);
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
  box-shadow: var(--shadow-sm);
}
.adm-swatch:hover { transform: scale(1.1); }
.adm-swatch.is-active { border-color: var(--gold-500); box-shadow: 0 0 0 3px rgba(244,185,66,.35); }

/* Rodapé do form */
.adm-form__footer {
  display: flex; align-items: center; justify-content: flex-end; gap: 12px;
  padding: 20px 32px;
  border-top: 1px solid var(--line);
  background: var(--paper);
}

/* ── Feedback ───────────────────────────────────────────────────────────── */
.adm-error {
  margin: 0 32px 0;
  padding: 12px 16px;
  background: var(--danger-50); color: var(--danger);
  border: 1px solid rgba(181,52,30,.2); border-radius: var(--r-sm);
  font-size: 13.5px; line-height: 1.5;
}

.adm-loading {
  display: flex; align-items: center; gap: 10px;
  padding: 48px 0; color: var(--ink-400); font-size: 14px;
}
.adm-spinner {
  width: 18px; height: 18px; border-radius: 50%;
  border: 2px solid var(--line-2); border-top-color: var(--navy-700);
  animation: adm-spin .7s linear infinite;
}
@keyframes adm-spin { to { transform: rotate(360deg); } }

.adm-empty {
  text-align: center; padding: 72px 0;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
}
.adm-empty__icon { font-size: 40px; margin: 0; }
.adm-empty__msg  { font-size: 16px; color: var(--ink-500); margin: 0; }

/* Toast */
.adm-toast {
  position: fixed; bottom: 28px; right: 32px; z-index: 9999;
  background: var(--ink-900); color: #fff;
  padding: 14px 20px; border-radius: var(--r-sm);
  font-size: 14px; box-shadow: var(--shadow-md);
  animation: adm-toast-in .3s var(--ease-out);
}
@keyframes adm-toast-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Responsivo ─────────────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .adm-form__grid { grid-template-columns: 1fr; }
  .adm-form__col--side { border-left: 0; border-top: 1px solid var(--line); }
  .adm-row { grid-template-columns: 1fr; }
  .adm-header__inner { padding: 0 20px; }
  .adm-main { padding: 24px 20px 48px; }
}
`;
