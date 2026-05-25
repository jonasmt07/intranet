type Props = {
  sub: string;
  title: string;
  link?: string;
};

export default function SectionHead({ sub, title, link }: Props) {
  return (
    <div className="section-head">
      <div>
        <div className="section-head__sub">{sub}</div>
        <h2>{title}</h2>
      </div>
      {link && <a className="section-head__link" href="#">{link}</a>}
    </div>
  );
}
