import { useIntranet } from "../../context/IntranetContext";

export default function Events() {
  const { events } = useIntranet();

  return (
    <div className="events">
      {events.map((e, i) => (
        <article key={i} className={"event-row" + (e.featured ? " event-row--featured" : "")}>
          <div className="event-date">
            <span className="event-date__day">{e.day}</span>
            <span className="event-date__mon">{e.month}</span>
          </div>
          <div className="event-info">
            <div className="event-info__type">{e.type}</div>
            <div className="event-info__title">{e.title}</div>
            <div className="event-info__meta">
              <span>{e.location}</span>
              <span>{e.audience}</span>
            </div>
          </div>
          <div className="event-time">
            <strong>{e.time}</strong>
            {e.duration}
          </div>
        </article>
      ))}
    </div>
  );
}
