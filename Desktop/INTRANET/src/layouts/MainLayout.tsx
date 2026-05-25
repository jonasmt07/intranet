import { Outlet } from "react-router-dom";
import { Icon } from "../components/Icons";
import BrandMark from "../components/BrandMark";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="brand" href="#">
          <span className="brand__logo">
            <BrandMark />
          </span>
          <span className="brand__divider" />
          <span className="brand__intranet">
            <small>Intranet</small>
            Espaço Interno
          </span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a className="nav__item is-active" href="#">Início</a>
          <a className="nav__item" href="#">Institucional <Icon.Chevron /></a>
          <a className="nav__item" href="#">Sistemas <Icon.Chevron /></a>
          <a className="nav__item" href="#">Pessoas <Icon.Chevron /></a>
          <a className="nav__item" href="#">Comunicação <Icon.Chevron /></a>
          <a className="nav__item" href="#">Documentos</a>
        </nav>

        <div className="header__right">
          <div className="search">
            <span className="search__icon"><Icon.Search /></span>
            <input type="search" placeholder="Buscar pessoa, sistema, documento…" />
            <kbd>⌘K</kbd>
          </div>
          <button className="icon-btn" aria-label="Notificações">
            <Icon.Bell />
            <span className="dot" />
          </button>
          <span className="avatar">AS</span>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <BrandMark />
            <p style={{ fontSize: 13, lineHeight: 1.5, maxWidth: 320, color: "var(--ink-500)", marginTop: 14 }}>
              Intranet institucional da Agência Espacial Brasileira. Ambiente restrito a servidores,
              colaboradores e parceiros credenciados.
            </p>
          </div>
          <div>
            <h4>Atalhos</h4>
            <ul>
              <li><a href="#">SEI</a></li>
              <li><a href="#">Webmail institucional</a></li>
              <li><a href="#">Solicitação de TI</a></li>
              <li><a href="#">Calendário institucional</a></li>
            </ul>
          </div>
          <div>
            <h4>Suporte</h4>
            <ul>
              <li><a href="#">Central de ajuda</a></li>
              <li><a href="#">Abrir chamado</a></li>
              <li><a href="#">Manuais</a></li>
              <li><a href="#">Política de uso</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li>SPO Área 5, Quadra 3, Bloco A</li>
              <li>Brasília · DF · 70610-200</li>
              <li><a href="#">comunicacao@aeb.gov.br</a></li>
              <li>(61) 2033-4000</li>
            </ul>
          </div>
        </div>
        <div className="footer__copy">
          <span>© 2026 Agência Espacial Brasileira</span>
          <span>Intranet v4.2 · build 26.05.22</span>
        </div>
      </div>
    </footer>
  );
}

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
