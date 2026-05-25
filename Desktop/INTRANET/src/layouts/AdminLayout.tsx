import { Outlet, Link, NavLink } from "react-router-dom";
import BrandMark from "../components/BrandMark";
import { adminStyles } from "../styles/adminStyles";

export default function AdminLayout() {
  return (
    <div className="adm">
      <style>{adminStyles}</style>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="adm-header">
        <div className="adm-header__inner">
          <Link to="/" className="adm-brand">
            <BrandMark />
            <span className="adm-brand__sep" />
            <span className="adm-brand__label">
              <small>Área Administrativa</small>
              CMS Intranet
            </span>
          </Link>

          <nav className="adm-nav" aria-label="Navegação administrativa">
            <NavLink
              to="/admin/noticias"
              className={({ isActive }) =>
                "adm-nav__item" + (isActive ? " is-active" : "")
              }
            >
              📰 Notícias
            </NavLink>
            {/* Futuras seções: Eventos, Documentos, etc. */}
          </nav>

          <Link to="/" className="adm-back-btn">
            ← Voltar à Intranet
          </Link>
        </div>
      </header>

      {/* ── Conteúdo ────────────────────────────────────────────────────── */}
      <main className="adm-main">
        <Outlet />
      </main>
    </div>
  );
}
