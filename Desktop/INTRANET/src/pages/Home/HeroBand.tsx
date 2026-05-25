import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HeroNews } from "../../types";
import { fetchHeroNews } from "../../services/newsService";

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(new Date(iso))
    .toUpperCase()
    .replace(".", "");
}

function isUrl(s: string): boolean {
  return s.startsWith("http://") || s.startsWith("https://") || s.startsWith("/");
}

// ── Variantes de animação ─────────────────────────────────────────────────────
// Framer Motion exige BezierDefinition como tupla [n,n,n,n], não number[]

const EASE_OUT  = [0.16, 1, 0.3, 1]  as [number, number, number, number];
const EASE_IN   = [0.4,  0, 1,   1]  as [number, number, number, number];

const bgVariants = {
  enter:  { opacity: 0, scale: 1.04 },
  center: { opacity: 1, scale: 1,   transition: { duration: 0.6,  ease: EASE_OUT } },
  exit:   { opacity: 0, scale: 1.02, transition: { duration: 0.35, ease: EASE_IN  } },
};

const textVariants = {
  enter:  { opacity: 0, y: 22 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.5,  delay: 0.18, ease: EASE_OUT } },
  exit:   { opacity: 0, y: -10, transition: { duration: 0.22, ease: EASE_IN  } },
};

const tagVariants = {
  enter:  { opacity: 0, x: -12 },
  center: { opacity: 1, x: 0,  transition: { duration: 0.45, delay: 0.12, ease: EASE_OUT } },
  exit:   { opacity: 0,        transition: { duration: 0.15 } },
};

// ── Skeleton ──────────────────────────────────────────────────────────────────

function HeroSkeleton() {
  return (
    <div className="hero-grid">
      <div className="hero hero--skeleton" aria-hidden="true" />
      <aside className="hero-side">
        <div className="hero-side__label">
          <span>Outros destaques</span>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="mini-news mini-news--skeleton" aria-hidden="true">
            <div className="mini-news__img mini-news__img--sk" />
            <div className="mini-news__sk-lines">
              <div className="sk-line sk-line--sm" />
              <div className="sk-line sk-line--lg" />
              <div className="sk-line sk-line--md" />
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}

// ── Estado vazio ──────────────────────────────────────────────────────────────

function HeroEmpty() {
  return (
    <div className="hero-grid">
      <article className="hero hero--empty">
        <div className="hero__empty-msg">
          <span aria-hidden="true">📰</span>
          <p>Nenhuma notícia publicada</p>
          <a href="/admin/noticias">Cadastrar notícia →</a>
        </div>
      </article>
      <aside className="hero-side">
        <div className="hero-side__label">
          <span>Outros destaques</span>
          <a href="/admin/noticias">Gerenciar →</a>
        </div>
      </aside>
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────

interface HeroBandProps {
  /** Passa notícias diretamente (útil para testes/Storybook).
   *  Se omitido, o componente busca via fetchHeroNews(). */
  news?: HeroNews[];
}

export default function HeroBand({ news: newsProp }: HeroBandProps) {
  const [news, setNews]       = useState<HeroNews[]>(newsProp ?? []);
  const [loading, setLoading] = useState(!newsProp);
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);
  const intervalRef           = useRef<ReturnType<typeof setInterval>>();

  // Busca se não recebeu props
  useEffect(() => {
    if (newsProp !== undefined) {
      setNews(newsProp);
      setLoading(false);
      return;
    }
    fetchHeroNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, [newsProp]);

  // Reset active quando notícias mudam
  useEffect(() => {
    setActive(0);
  }, [news]);

  // Auto-avança (pausa no hover)
  const advance = useCallback(() => {
    setActive((a) => (a + 1) % news.length);
  }, [news.length]);

  useEffect(() => {
    if (news.length <= 1 || paused) return;
    intervalRef.current = setInterval(advance, 6_000);
    return () => clearInterval(intervalRef.current);
  }, [advance, news.length, paused]);

  const goTo = (i: number) => {
    setActive(i);
    clearInterval(intervalRef.current);
    setPaused(true);
    // Retoma auto-avanço depois de interação manual
    setTimeout(() => setPaused(false), 8_000);
  };

  // ── Render: loading ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <section className="hero-band">
        <div className="hero-band__bg" />
        <div className="container">
          <HeroSkeleton />
        </div>
      </section>
    );
  }

  // ── Render: sem notícias ───────────────────────────────────────────────────
  if (news.length === 0) {
    return (
      <section className="hero-band">
        <div className="hero-band__bg" />
        <div className="container">
          <HeroEmpty />
        </div>
      </section>
    );
  }

  // ── Render: slider ────────────────────────────────────────────────────────
  const current  = news[active];
  const sideNews = news.filter((_, i) => i !== active).slice(0, 3);

  return (
    <section className="hero-band">
      <div className="hero-band__bg" />
      <div className="container">
        <div className="hero-grid">

          {/* ── Slide principal ──────────────────────────────────────────── */}
          <article
            className="hero"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Fundo animado (fade + zoom na entrada) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-bg"}
                className="hero__slide-bg"
                style={{
                  background: isUrl(current.coverImage)
                    ? `url(${current.coverImage}) center / cover no-repeat`
                    : current.coverImage,
                }}
                variants={bgVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>

            <div className="hero__overlay" />

            {/* Contador */}
            <div className="hero__pager">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(news.length).padStart(2, "0")}
            </div>

            {/* Texto animado */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-text"}
                className="hero__content"
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.span
                  className="hero__tag"
                  variants={tagVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {current.category}
                </motion.span>

                <h1 className="hero__title">{current.title}</h1>

                <div className="hero__meta">
                  <span>📅 {formatDate(current.publishedAt)}</span>
                  <span>· {current.author}</span>
                  {current.readTime && (
                    <span>· {current.readTime} de leitura</span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots de navegação (só aparecem com múltiplos slides) */}
            {news.length > 1 && (
              <div className="hero__dots">
                {news.map((_, i) => (
                  <button
                    key={i}
                    className={"hero__dot" + (i === active ? " is-active" : "")}
                    onClick={() => goTo(i)}
                    aria-label={`Ir para notícia ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </article>

          {/* ── Sidebar de destaques ──────────────────────────────────────── */}
          <aside className="hero-side">
            <div className="hero-side__label">
              <span>Outros destaques</span>
              <a href="/admin/noticias">Ver todos →</a>
            </div>

            <AnimatePresence>
              {sideNews.map((n, i) => (
                <motion.a
                  key={n.id}
                  className="mini-news"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(news.indexOf(n));
                  }}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                  }}
                  exit={{ opacity: 0, x: 12, transition: { duration: 0.2 } }}
                  layout
                >
                  <div
                    className="mini-news__img"
                    style={{
                      background: isUrl(n.coverImage)
                        ? `url(${n.coverImage}) center / cover no-repeat`
                        : n.coverImage,
                    }}
                  />
                  <div>
                    <div className="mini-news__cat">{n.category}</div>
                    <div className="mini-news__title">{n.title}</div>
                    <div className="mini-news__date">
                      {formatDate(n.publishedAt)}
                      {n.readTime ? ` · ${n.readTime}` : ""}
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </section>
  );
}
