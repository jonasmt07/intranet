import { useIntranet } from "../../context/IntranetContext";

export default function StatsStrip() {
  const { stats } = useIntranet();

  return (
    <div className="container" style={{ paddingTop: 32 }}>
      <div className="stats">
        {stats.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat__label">{s.label}</div>
            <div className="stat__value">{s.value}</div>
            <span className={"stat__delta" + (s.down ? " stat__delta--down" : "")}>{s.delta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
