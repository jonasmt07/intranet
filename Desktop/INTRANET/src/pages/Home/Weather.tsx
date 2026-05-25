import { useIntranet } from "../../context/IntranetContext";
import { Icon } from "../../components/Icons";
import type { WeatherCity } from "../../types";

function renderIcon(icon: WeatherCity["icon"]) {
  return icon === "sun" ? <Icon.Sun /> : icon === "rain" ? <Icon.Rain /> : <Icon.Cloud />;
}

export default function Weather() {
  const { weather } = useIntranet();

  return (
    <div className="card card--dark" style={{ padding: 0, overflow: "hidden" }}>
      <div className="card__head">
        <h3 className="card__title">
          <small>Previsão do tempo</small>
          Unidades AEB
        </h3>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold-600)", letterSpacing: "0.1em" }}>
          14:32 BRT
        </span>
      </div>
      <div className="weather">
        {weather.map((c, i) => (
          <div key={i} className="weather__city">
            <div className="weather__name">{c.name}</div>
            <div className="weather__row">
              <div className="weather__temp">{c.temp}</div>
              {renderIcon(c.icon)}
            </div>
            <div className="weather__meta">
              <span>{c.desc}</span>
              {c.meta.map((m, j) => <span key={j}>· {m}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
