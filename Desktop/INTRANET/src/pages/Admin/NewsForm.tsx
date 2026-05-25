import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import type { HeroNews, HeroNewsStatus } from "../../types";
import { fetchNewsById, createNews, updateNews } from "../../services/newsService";

// ── Gradientes pré-definidos ──────────────────────────────────────────────────

const GRADIENTS = [
  { label: "Navy",    value: "linear-gradient(135deg, #1a2e58 0%, #2a4d94 100%)" },
  { label: "Blue",    value: "linear-gradient(135deg, #3a64ad 0%, #5481c8 100%)" },
  { label: "Gold",    value: "linear-gradient(135deg, #4a3a1a 0%, #d99820 100%)" },
  { label: "Purple",  value: "linear-gradient(135deg, #2a1a3a 0%, #7a5cb8 100%)" },
  { label: "Green",   value: "linear-gradient(135deg, #1a3a2a 0%, #2f7d4f 100%)" },
  { label: "Red",     value: "linear-gradient(135deg, #3a1a1a 0%, #b5341e 100%)" },
];

const GRADIENT_VALUES = GRADIENTS.map((g) => g.value);

// ── Formulário vazio ──────────────────────────────────────────────────────────

const EMPTY: Omit<HeroNews, "id"> = {
  title:       "",
  body:        "",
  coverImage:  GRADIENTS[0].value,
  category:    "",
  author:      "",
  publishedAt: new Date().toISOString(),
  readTime:    "",
  status:      "published",
};

function toLocalDatetime(iso: string): string {
  // Converte ISO para o formato aceito por input[type="datetime-local"]
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` +
    `T${pad(d.getHours())}:${pad(d.getMinutes())}`
  );
}

// ── Componente ────────────────────────────────────────────────────────────────

export default function NewsForm() {
  const { id }    = useParams<{ id?: string }>();
  const navigate  = useNavigate();
  const isEdit    = Boolean(id && id !== "nova");

  const [form, setForm]       = useState<Omit<HeroNews, "id">>(EMPTY);
  const [localDt, setLocalDt] = useState(toLocalDatetime(EMPTY.publishedAt));
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving]   = useState(false);
  const [error, setError]     = useState("");

  // Carrega dados ao editar
  useEffect(() => {
    if (!isEdit || !id) return;
    fetchNewsById(id).then((found) => {
      if (!found) { navigate("/admin/noticias"); return; }
      setForm({ ...found });
      setLocalDt(toLocalDatetime(found.publishedAt));
      setLoading(false);
    });
  }, [id, isEdit, navigate]);

  // Helper de campo simples
  const set =
    <K extends keyof Omit<HeroNews, "id">>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value as HeroNews[K] }));
    };

  // Validação + submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim())    { setError("O título é obrigatório."); return; }
    if (!form.body.trim())     { setError("O texto da notícia é obrigatório."); return; }
    if (!form.category.trim()) { setError("A categoria é obrigatória."); return; }
    if (!form.author.trim())   { setError("O autor / setor é obrigatório."); return; }

    setSaving(true);
    try {
      const payload: Omit<HeroNews, "id"> = {
        ...form,
        publishedAt: new Date(localDt).toISOString(),
        coverImage: form.coverImage.trim() || GRADIENTS[0].value,
      };

      if (isEdit && id) {
        await updateNews(id, payload);
      } else {
        await createNews(payload);
      }

      navigate("/admin/noticias");
    } catch (err) {
      setError("Ocorreu um erro ao salvar. Tente novamente.");
    } finally {
      setSaving(false);
    }
  };

  // Determina se a capa é URL ou gradiente
  const coverIsGradient = GRADIENT_VALUES.includes(form.coverImage);
  const coverPreview    = coverIsGradient
    ? form.coverImage
    : `url(${form.coverImage}) center / cover no-repeat`;

  if (loading) {
    return (
      <div className="adm-page">
        <div className="adm-loading">
          <span className="adm-spinner" /> Carregando notícia…
        </div>
      </div>
    );
  }

  return (
    <div className="adm-page">
      {/* Cabeçalho */}
      <div className="adm-page__head">
        <div>
          <h1 className="adm-page__title">
            {isEdit ? "Editar notícia" : "Nova notícia"}
          </h1>
          <p className="adm-page__sub">
            {isEdit
              ? "Atualize os campos e salve as alterações."
              : "Preencha os campos para publicar ou salvar como rascunho."}
          </p>
        </div>
        <Link to="/admin/noticias" className="adm-btn adm-btn--ghost">
          ← Voltar
        </Link>
      </div>

      <form className="adm-form" onSubmit={handleSubmit} noValidate>
        <div className="adm-form__grid">

          {/* ── Coluna principal ──────────────────────────────────────── */}
          <div className="adm-form__col adm-form__col--main">

            {/* Título */}
            <div className="adm-field">
              <label className="adm-label" htmlFor="f-title">
                Título <span className="adm-req">*</span>
              </label>
              <input
                id="f-title"
                className="adm-input"
                value={form.title}
                onChange={set("title")}
                placeholder="Título da notícia"
                maxLength={200}
              />
              <span className="adm-char-count">{form.title.length}/200</span>
            </div>

            {/* Corpo */}
            <div className="adm-field">
              <label className="adm-label" htmlFor="f-body">
                Texto da notícia <span className="adm-req">*</span>
              </label>
              <textarea
                id="f-body"
                className="adm-textarea"
                rows={7}
                value={form.body}
                onChange={set("body")}
                placeholder="Conteúdo completo da notícia…"
              />
            </div>

            {/* Categoria + Autor */}
            <div className="adm-row">
              <div className="adm-field">
                <label className="adm-label" htmlFor="f-category">
                  Categoria <span className="adm-req">*</span>
                </label>
                <input
                  id="f-category"
                  className="adm-input"
                  value={form.category}
                  onChange={set("category")}
                  placeholder="Ex: Informativo Institucional"
                />
              </div>
              <div className="adm-field">
                <label className="adm-label" htmlFor="f-author">
                  Autor / Setor <span className="adm-req">*</span>
                </label>
                <input
                  id="f-author"
                  className="adm-input"
                  value={form.author}
                  onChange={set("author")}
                  placeholder="Ex: Comunicação"
                />
              </div>
            </div>

            {/* Data/hora + Tempo de leitura */}
            <div className="adm-row">
              <div className="adm-field">
                <label className="adm-label" htmlFor="f-date">
                  Data e horário de publicação
                </label>
                <input
                  id="f-date"
                  className="adm-input"
                  type="datetime-local"
                  value={localDt}
                  onChange={(e) => setLocalDt(e.target.value)}
                />
              </div>
              <div className="adm-field">
                <label className="adm-label" htmlFor="f-readtime">
                  Tempo de leitura
                </label>
                <input
                  id="f-readtime"
                  className="adm-input"
                  value={form.readTime ?? ""}
                  onChange={set("readTime")}
                  placeholder="Ex: 3 min"
                />
              </div>
            </div>

            {/* Status */}
            <div className="adm-field adm-field--sm">
              <label className="adm-label" htmlFor="f-status">Status</label>
              <select
                id="f-status"
                className="adm-select"
                value={form.status}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    status: e.target.value as HeroNewsStatus,
                  }))
                }
              >
                <option value="published">✅ Publicada</option>
                <option value="draft">📝 Rascunho</option>
              </select>
            </div>
          </div>

          {/* ── Coluna lateral (imagem) ───────────────────────────────── */}
          <div className="adm-form__col adm-form__col--side">
            <div className="adm-field">
              <label className="adm-label">Imagem de capa</label>

              {/* Preview */}
              <div
                className="adm-cover-preview"
                style={{ background: coverPreview }}
              />

              {/* URL */}
              <input
                className="adm-input"
                value={coverIsGradient ? "" : form.coverImage}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    coverImage: e.target.value.trim() || GRADIENTS[0].value,
                  }))
                }
                placeholder="URL da imagem (opcional)"
              />
              <p className="adm-hint">
                Cole a URL de uma imagem, ou escolha um gradiente abaixo.
              </p>

              {/* Swatches de gradiente */}
              <div className="adm-gradients">
                {GRADIENTS.map((g) => (
                  <button
                    key={g.value}
                    type="button"
                    className={
                      "adm-swatch" +
                      (form.coverImage === g.value ? " is-active" : "")
                    }
                    style={{ background: g.value }}
                    onClick={() =>
                      setForm((f) => ({ ...f, coverImage: g.value }))
                    }
                    title={g.label}
                    aria-label={`Gradiente ${g.label}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Erro */}
        {error && (
          <p className="adm-error" role="alert">
            ⚠️ {error}
          </p>
        )}

        {/* Rodapé */}
        <div className="adm-form__footer">
          <Link to="/admin/noticias" className="adm-btn adm-btn--ghost">
            Cancelar
          </Link>
          <button
            type="submit"
            className="adm-btn adm-btn--primary"
            disabled={saving}
          >
            {saving
              ? "Salvando…"
              : isEdit
              ? "Salvar alterações"
              : "Publicar notícia"}
          </button>
        </div>
      </form>
    </div>
  );
}
