/**
 * newsService.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Camada de serviço para o CMS de notícias do Hero.
 *
 * Atualmente persiste em localStorage para funcionar sem backend.
 * Para conectar a uma API real, substitua o corpo de cada função por um
 * fetch() equivalente — a assinatura das funções permanece idêntica.
 *
 * Exemplo de migração:
 *   export async function fetchHeroNews(): Promise<HeroNews[]> {
 *     const res = await fetch("/api/news?status=published");
 *     return res.json();
 *   }
 */

import type { HeroNews } from "../types";

// ── Constantes ────────────────────────────────────────────────────────────────

const STORAGE_KEY = "iaeb_hero_news";
const delay = (ms = 150) => new Promise<void>((r) => setTimeout(r, ms));

// ── Dados de seed (exibidos quando localStorage está vazio) ───────────────────

const SEED: HeroNews[] = [
  {
    id: "seed-1",
    title: "AEB reforça programa institucional de inovação e abre 23 vagas para servidores",
    body: "A Agência Espacial Brasileira lançou um novo ciclo do Programa de Inovação Institucional, que contempla 23 vagas destinadas a servidores efetivos interessados em projetos de transformação digital e governança espacial. As inscrições estão abertas até o final de junho.",
    coverImage: "linear-gradient(135deg, #1a2e58 0%, #2a4d94 100%)",
    category: "Informativo Institucional",
    author: "Diretoria de Pessoas",
    publishedAt: new Date().toISOString(),
    readTime: "4 min",
    status: "published",
  },
  {
    id: "seed-2",
    title: "Acordo com a ESA amplia escopo do programa de pesquisa em microgravidade",
    body: "Novo acordo bilateral consolida parceria estratégica entre a AEB e a Agência Espacial Europeia, ampliando o escopo dos experimentos de microgravidade e abrindo oportunidades para pesquisadores brasileiros em missões conjuntas previstas para 2027.",
    coverImage: "linear-gradient(135deg, #3a64ad 0%, #5481c8 100%)",
    category: "Cooperação Internacional",
    author: "Comunicação",
    publishedAt: new Date(Date.now() - 86_400_000).toISOString(),
    readTime: "3 min",
    status: "published",
  },
  {
    id: "seed-3",
    title: "Calendário 2026/2 de capacitações já está disponível na plataforma",
    body: "A Coordenação de Gestão de Pessoas disponibilizou o calendário completo de capacitações para o segundo semestre de 2026. São mais de 40 cursos presenciais e on-line voltados para desenvolvimento profissional e técnico dos servidores da Agência.",
    coverImage: "linear-gradient(135deg, #4a3a1a 0%, #d99820 100%)",
    category: "Gestão de Pessoas",
    author: "Coordenação de Gestão",
    publishedAt: new Date(Date.now() - 2 * 86_400_000).toISOString(),
    readTime: "2 min",
    status: "published",
  },
  {
    id: "seed-4",
    title: "Nova autenticação multifator entra em vigor no dia 03 de junho",
    body: "A partir de 03 de junho, todos os acessos externos aos sistemas institucionais exigirão autenticação multifator (MFA). A Coordenação de TI disponibilizou um guia passo a passo para configuração e está atendendo dúvidas pelo canal de suporte.",
    coverImage: "linear-gradient(135deg, #2a1a3a 0%, #7a5cb8 100%)",
    category: "TI Institucional",
    author: "Coordenação de TI",
    publishedAt: new Date(Date.now() - 3 * 86_400_000).toISOString(),
    readTime: "1 min",
    status: "published",
  },
];

// ── Helpers de storage ────────────────────────────────────────────────────────

function load(): HeroNews[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HeroNews[];
  } catch {
    return [];
  }
}

function save(items: HeroNews[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

/** Garante que o seed seja gravado na primeira execução. */
function ensureSeed(): HeroNews[] {
  const stored = load();
  if (stored.length > 0) return stored;
  save(SEED);
  return SEED;
}

// ── API pública ───────────────────────────────────────────────────────────────

/**
 * Retorna somente notícias **publicadas**, ordenadas da mais recente.
 * Usada pelo Hero do frontend.
 */
export async function fetchHeroNews(): Promise<HeroNews[]> {
  // TODO: const res = await fetch("/api/news?status=published"); return res.json();
  await delay();
  return ensureSeed()
    .filter((n) => n.status === "published")
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Retorna **todas** as notícias (publicadas + rascunhos).
 * Usada pelo painel administrativo.
 */
export async function fetchAllNews(): Promise<HeroNews[]> {
  // TODO: const res = await fetch("/api/news"); return res.json();
  await delay();
  return ensureSeed().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/** Retorna uma notícia pelo id, ou undefined se não existir. */
export async function fetchNewsById(id: string): Promise<HeroNews | undefined> {
  // TODO: const res = await fetch(`/api/news/${id}`); return res.json();
  await delay(80);
  return ensureSeed().find((n) => n.id === id);
}

/** Cria uma nova notícia e retorna o item salvo (com id gerado). */
export async function createNews(
  data: Omit<HeroNews, "id">
): Promise<HeroNews> {
  // TODO: const res = await fetch("/api/news", { method: "POST", body: JSON.stringify(data) }); return res.json();
  await delay(120);
  const all = ensureSeed();
  const item: HeroNews = { ...data, id: crypto.randomUUID() };
  save([item, ...all]);
  return item;
}

/** Atualiza campos de uma notícia existente e retorna o item atualizado. */
export async function updateNews(
  id: string,
  data: Partial<Omit<HeroNews, "id">>
): Promise<HeroNews> {
  // TODO: const res = await fetch(`/api/news/${id}`, { method: "PATCH", body: JSON.stringify(data) }); return res.json();
  await delay(120);
  const all = ensureSeed().map((n) => (n.id === id ? { ...n, ...data } : n));
  save(all);
  const updated = all.find((n) => n.id === id);
  if (!updated) throw new Error(`Notícia "${id}" não encontrada.`);
  return updated;
}

/** Remove uma notícia pelo id. */
export async function deleteNews(id: string): Promise<void> {
  // TODO: await fetch(`/api/news/${id}`, { method: "DELETE" });
  await delay(100);
  save(ensureSeed().filter((n) => n.id !== id));
}
