import { useIntranet } from "../../context/IntranetContext";
import SectionHead from "../../components/SectionHead";

export default function ExternalNewsSection() {
  const { externalNews } = useIntranet();

  return (
    <div className="container" style={{ paddingTop: 48 }}>
      <SectionHead sub="Externo · Agência Gov" title="Últimas notícias" link="Ver todas →" />
      <div className="news-grid">
        {externalNews.map((n, i) => (
          <article key={i} className="news-card">
            <div className="news-card__img" style={{ background: n.gradient }}>
              <span className="news-card__cat">{n.category}</span>
            </div>
            <div className="news-card__body">
              <h3 className="news-card__title">{n.title}</h3>
              <div className="news-card__meta">
                <span>{n.date}</span>
                <span>Agência Gov</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
