import { useIntranet } from "../../context/IntranetContext";
import type { DocItem } from "../../types";

const tabs = [
  { label: "Comunicados", count: 12, active: true },
  { label: "Portarias",   count: 38 },
  { label: "Manuais",     count: 24 },
  { label: "Atas",        count: 56 },
];

function iconClass(t: DocItem["type"]) {
  return t === "PDF" ? "doc__icon--pdf" : t === "XLS" ? "doc__icon--xls" : "doc__icon--doc";
}

export default function Docs() {
  const { docs } = useIntranet();

  return (
    <div className="card" style={{ padding: 0 }}>
      <div className="docs-tabs">
        {tabs.map((t, i) => (
          <div key={i} className={"docs-tab" + (t.active ? " is-active" : "")}>
            {t.label} <span style={{ opacity: 0.5 }}>· {t.count}</span>
          </div>
        ))}
      </div>
      {docs.map((d, i) => (
        <a key={i} className="doc" href="#">
          <span className={"doc__icon " + iconClass(d.type)}>{d.type}</span>
          <div>
            <div className="doc__name">{d.name}</div>
            <div className="doc__meta">
              <span>{d.source}</span>
              <span>· {d.date}</span>
              <span>· {d.size}</span>
            </div>
          </div>
          <span className="doc__action">Abrir →</span>
        </a>
      ))}
    </div>
  );
}
