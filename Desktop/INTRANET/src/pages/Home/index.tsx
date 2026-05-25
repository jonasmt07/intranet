import SectionHead from "../../components/SectionHead";
import HeroBand from "./HeroBand";
import QuickStrip from "./QuickStrip";
import StatsStrip from "./StatsStrip";
import Events from "./Events";
import Docs from "./Docs";
import Birthdays from "./Birthdays";
import Weather from "./Weather";
import Mission from "./Mission";
import ExternalNewsSection from "./ExternalNewsSection";

export default function Home() {
  return (
    <>
      <HeroBand />
      <QuickStrip />
      <StatsStrip />

      {/* Grade principal */}
      <div className="container">
        <div className="main-grid">
          <div>
            <SectionHead sub="Calendário" title="Próximos eventos" link="Agenda completa →" />
            <Events />

            <hr className="divider-strong" />

            <SectionHead sub="Biblioteca interna" title="Documentos e comunicados" link="Ver biblioteca →" />
            <Docs />
          </div>

          <aside className="sys-side">
            <Birthdays />
            <Weather />
            <Mission />
          </aside>
        </div>
      </div>

      <ExternalNewsSection />
    </>
  );
}
