export type NewsItem = {
  category: string;
  title: string;
  date: string;
  readTime?: string;
  gradient: string;
};

export type EventItem = {
  day: string;
  month: string;
  type: string;
  title: string;
  location: string;
  audience: string;
  time: string;
  duration: string;
  featured?: boolean;
};

export type Birthday = {
  initials: string;
  name: string;
  dept: string;
  when: string;
  date: string;
  today?: boolean;
};

export type WeatherCity = {
  name: string;
  temp: string;
  desc: string;
  meta: string[];
  icon: "cloud" | "sun" | "rain";
  main?: boolean;
};

export type DocItem = {
  type: "PDF" | "XLS" | "DOC";
  name: string;
  source: string;
  date: string;
  size: string;
};

export type StatItem = {
  label: string;
  value: string;
  delta: string;
  down: boolean;
};

export type QuickTile = {
  label: string;
  icon: React.ReactNode;
};

// ── Hero News (CMS interno) ───────────────────────────────────────────────────

export type HeroNewsStatus = "published" | "draft";

export type HeroNews = {
  id: string;
  title: string;
  body: string;
  coverImage: string;   // URL de imagem ou CSS gradient como fallback
  category: string;
  author: string;       // autor ou setor responsável
  publishedAt: string;  // ISO 8601
  readTime?: string;    // ex: "4 min"
  status: HeroNewsStatus;
};
