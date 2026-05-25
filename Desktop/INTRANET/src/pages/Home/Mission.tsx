import { useCountdown } from "../../hooks/useCountdown";

export default function Mission() {
  const cd = useCountdown("2026-06-28T10:00:00-03:00");

  return (
    <div className="mission">
      <div className="mission__label">Próximo lançamento</div>
      <div className="mission__name">VLM-1 · Missão Plataforma</div>
      <div className="mission__sub">Centro de Lançamento de Alcântara — janela 28/06/2026</div>
      <div className="countdown">
        <div className="cd-unit"><strong>{cd.days}</strong><span>Dias</span></div>
        <div className="cd-unit"><strong>{cd.hours}</strong><span>Horas</span></div>
        <div className="cd-unit"><strong>{cd.minutes}</strong><span>Min</span></div>
        <div className="cd-unit"><strong>{cd.seconds}</strong><span>Seg</span></div>
      </div>
      <div style={{ marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
        Acompanhe ao vivo · transmissão interna
      </div>
    </div>
  );
}
