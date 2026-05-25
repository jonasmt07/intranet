import { useIntranet } from "../../context/IntranetContext";
import { useHeroDots } from "../../hooks/useHeroDots";

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <radialGradient id="planet" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#d99820" />
          <stop offset="60%" stopColor="#b5701a" />
          <stop offset="100%" stopColor="#5a3208" />
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(244,185,66,.4)" />
          <stop offset="100%" stopColor="rgba(244,185,66,0)" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="#1a2e58" />
      <g fill="white">
        {([
          [60,40,0.9,0.8],[140,120,0.5,0.5],[240,60,1.1,0.9],[320,180,0.6,0.4],
          [420,80,0.8,0.7],[500,40,0.4,0.4],[580,220,0.9,0.6],[680,100,0.6,0.5],
          [740,180,1.2,0.8],[80,280,0.5,0.4],[220,380,0.8,0.6],[380,320,0.4,0.3],
          [520,420,0.7,0.5],[660,380,0.5,0.4],
        ] as number[][]).map(([cx,cy,r,o], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} opacity={o} />
        ))}
      </g>
      <circle cx="640" cy="340" r="200" fill="url(#glow)" />
      <circle cx="640" cy="340" r="120" fill="url(#planet)" />
      <ellipse cx="640" cy="340" rx="180" ry="22" fill="none" stroke="rgba(244,185,66,.35)" strokeWidth="1.5" transform="rotate(-18 640 340)" />
      <ellipse cx="640" cy="340" rx="180" ry="22" fill="none" stroke="rgba(244,185,66,.2)" strokeWidth="1" transform="rotate(-12 640 340)" />
      <path d="M-20 360 Q 400 -40 820 220" stroke="rgba(244,185,66,.18)" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function HeroBand() {
  const { sideNews } = useIntranet();
  const [activeDot, setActiveDot] = useHeroDots(4);

  return (
    <section className="hero-band">
      <div className="hero-band__bg" />
      <div className="container">
        <div className="hero-grid">
          <article className="hero">
            <HeroIllustration />
            <div className="hero__overlay" />
            <div className="hero__pager">{String(activeDot + 1).padStart(2, "0")} / 04</div>
            <div className="hero__content">
              <span className="hero__tag">Informativo Institucional</span>
              <h1 className="hero__title">
                AEB reforça programa institucional de inovação e abre 23 vagas para servidores
              </h1>
              <div className="hero__meta">
                <span>📅 22 MAI 2026</span>
                <span>· Diretoria de Pessoas</span>
                <span>· 4 min de leitura</span>
              </div>
            </div>
            <div className="hero__dots">
              {[0,1,2,3].map((i) => (
                <span
                  key={i}
                  className={"hero__dot" + (i === activeDot ? " is-active" : "")}
                  onClick={() => setActiveDot(i)}
                />
              ))}
            </div>
          </article>

          <aside className="hero-side">
            <div className="hero-side__label">
              <span>Outros destaques</span>
              <a href="#">Ver todos →</a>
            </div>
            {sideNews.map((n, i) => (
              <a key={i} className="mini-news" href="#">
                <div className="mini-news__img" style={{ background: n.gradient }} />
                <div>
                  <div className="mini-news__cat">{n.category}</div>
                  <div className="mini-news__title">{n.title}</div>
                  <div className="mini-news__date">{n.date}</div>
                </div>
              </a>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
