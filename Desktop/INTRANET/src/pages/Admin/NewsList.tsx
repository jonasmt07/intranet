import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import type { HeroNews } from "../../types";
import { fetchAllNews, deleteNews } from "../../services/newsService";

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(iso));
}

function CoverThumb({ src }: { src: string }) {
  const isUrl = src.startsWith("http") || src.startsWith("/");
  return (
    <span
      className="adm-thumb"
      style={{
        background: isUrl
          ? `url(${src}) center / cover no-repeat`
          : src,
      }}
      aria-hidden="true"
    />
  );
}

export default function NewsList() {
  const [news, setNews]       = useState<HeroNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [toast, setToast]     = useState<string | null>(null);

  const load = useCallback(() => {
    setLoading(true);
    fetchAllNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => { load(); }, [load]);

  // Toast auto-dismiss
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3_000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Excluir a notícia "${title}"?\n\nEssa ação não pode ser desfeita.`)) return;
    setDeleting(id);
    await deleteNews(id);
    setToast("Notícia excluída com sucesso.");
    load();
    setDeleting(null);
  };

  return (
    <div className="adm-page">
      {/* Toast */}
      {toast && (
        <div className="adm-toast" role="status">
          ✅ {toast}
        </div>
      )}

      {/* Cabeçalho da página */}
      <div className="adm-page__head">
        <div>
          <h1 className="adm-page__title">Notícias</h1>
          <p className="adm-page__sub">
            Gerencie os conteúdos exibidos no Hero da Intranet
          </p>
        </div>
        <Link to="/admin/noticias/nova" className="adm-btn adm-btn--primary">
          + Nova notícia
        </Link>
      </div>

      {/* Estados */}
      {loading ? (
        <div className="adm-loading">
          <span className="adm-spinner" /> Carregando notícias…
        </div>
      ) : news.length === 0 ? (
        <div className="adm-empty">
          <p className="adm-empty__icon">📭</p>
          <p className="adm-empty__msg">Nenhuma notícia cadastrada ainda.</p>
          <Link to="/admin/noticias/nova" className="adm-btn adm-btn--primary">
            Cadastrar primeira notícia
          </Link>
        </div>
      ) : (
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Notícia</th>
                <th>Categoria</th>
                <th>Autor / Setor</th>
                <th>Publicação</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {news.map((n) => (
                <tr
                  key={n.id}
                  className={
                    "adm-table__row" +
                    (deleting === n.id ? " adm-table__row--deleting" : "")
                  }
                >
                  <td className="adm-table__title-cell">
                    <CoverThumb src={n.coverImage} />
                    <span className="adm-table__title">{n.title}</span>
                  </td>
                  <td>
                    <span className="adm-tag">{n.category}</span>
                  </td>
                  <td>{n.author}</td>
                  <td className="adm-table__date">{formatDate(n.publishedAt)}</td>
                  <td>
                    <span
                      className={
                        "adm-badge adm-badge--" +
                        (n.status === "published" ? "published" : "draft")
                      }
                    >
                      {n.status === "published" ? "Publicada" : "Rascunho"}
                    </span>
                  </td>
                  <td className="adm-table__actions">
                    <Link
                      to={`/admin/noticias/${n.id}`}
                      className="adm-action-link"
                    >
                      Editar
                    </Link>
                    <button
                      className="adm-action-link adm-action-link--danger"
                      onClick={() => handleDelete(n.id, n.title)}
                      disabled={deleting === n.id}
                    >
                      {deleting === n.id ? "…" : "Excluir"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
