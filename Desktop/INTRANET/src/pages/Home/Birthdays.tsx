import { useIntranet } from "../../context/IntranetContext";

export default function Birthdays() {
  const { birthdays } = useIntranet();

  return (
    <div className="card">
      <div className="card__head">
        <h3 className="card__title">
          <small>Esta semana</small>
          Aniversariantes
        </h3>
        <a className="section-head__link" href="#">Ver mês →</a>
      </div>
      <div className="birthdays">
        {birthdays.map((b, i) => (
          <div key={i} className={"bday" + (b.today ? " bday--today" : "")}>
            <span className="bday__avatar">{b.initials}</span>
            <div>
              <div className="bday__name">
                {b.name} {b.today && <span>🎂</span>}
              </div>
              <div className="bday__dept">{b.dept}</div>
            </div>
            <div className="bday__date">
              {b.when}<br />{b.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
