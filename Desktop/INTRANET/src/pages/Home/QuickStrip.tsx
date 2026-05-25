import React from "react";
import type { QuickTile } from "../../types";

const quickTiles: QuickTile[] = [
  { label: "SEI",                icon: <svg className="quick-tile__icon" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg> },
  { label: "Folha de ponto",     icon: <svg className="quick-tile__icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg> },
  { label: "Holerite",           icon: <svg className="quick-tile__icon" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M4 9h16M9 4v16" stroke="currentColor" strokeWidth="1.8" /></svg> },
  { label: "Reservas de salas",  icon: <svg className="quick-tile__icon" viewBox="0 0 24 24" fill="none"><path d="M3 8l9-5 9 5-9 5-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M3 16l9 5 9-5M3 12l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg> },
  { label: "Webmail",            icon: <svg className="quick-tile__icon" viewBox="0 0 24 24" fill="none"><path d="M20 7l-8 6-8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" /></svg> },
  { label: "Diárias e passagens",icon: <svg className="quick-tile__icon" viewBox="0 0 24 24" fill="none"><path d="M12 2v6m0 8v6M2 12h6m8 0h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /></svg> },
  { label: "Férias",             icon: <svg className="quick-tile__icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M3 9h18M8 5V3M16 5V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg> },
  { label: "Ramais",             icon: <svg className="quick-tile__icon" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" /><path d="M3 20a6 6 0 0112 0M15 11a2.5 2.5 0 110-5M21 20a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg> },
];

export default function QuickStrip() {
  return (
    <section className="quick-strip">
      <div className="quick-strip__inner">
        <span className="quick-strip__label">Acesso rápido</span>
        <div className="quick-strip__items scrollx">
          {quickTiles.map((t, i) => (
            <a key={i} className="quick-tile" href="#">
              {t.icon}
              {t.label}
            </a>
          ))}
        </div>
        <a className="quick-strip__all" href="#">Todos os sistemas →</a>
      </div>
    </section>
  );
}
