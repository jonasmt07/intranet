import type { NewsItem, EventItem, Birthday, WeatherCity, DocItem, StatItem } from "../types";

// Simula delay de rede — substituir por fetch() real futuramente
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function fetchSideNews(): Promise<NewsItem[]> {
  await delay();
  return [
    {
      category: "Cooperação Internacional",
      title: "Acordo com a ESA amplia escopo do programa de pesquisa em microgravidade",
      date: "21/05 · 3 min",
      gradient: "linear-gradient(135deg,#3a64ad,#5481c8)",
    },
    {
      category: "Gestão de Pessoas",
      title: "Calendário 2026/2 de capacitações já está disponível na plataforma",
      date: "20/05 · 2 min",
      gradient: "linear-gradient(135deg,#4a3a1a,#d99820)",
    },
    {
      category: "TI Institucional",
      title: "Nova autenticação multifator entra em vigor no dia 03 de junho",
      date: "19/05 · 1 min",
      gradient: "linear-gradient(135deg,#2a1a3a,#7a5cb8)",
    },
  ];
}

export async function fetchEvents(): Promise<EventItem[]> {
  await delay();
  return [
    {
      day: "10", month: "Jun", type: "Encontro institucional",
      title: "Fórum de Integração Institucional",
      location: "📍 Auditório Central · Sede",
      audience: "👥 Aberto a toda a Agência",
      time: "14h00", duration: "até 18h00", featured: true,
    },
    {
      day: "18", month: "Jun", type: "Workshop",
      title: "Workshop de Governança Digital",
      location: "📍 Laboratório de Inovação",
      audience: "👥 Servidores de TI e GP",
      time: "09h00", duration: "até 17h00",
    },
    {
      day: "03", month: "Jul", type: "Reunião",
      title: "Reunião de Planejamento Estratégico",
      location: "📍 Sala de Reuniões Principal",
      audience: "👥 Diretoria e coordenadores",
      time: "08h00", duration: "jornada integral",
    },
    {
      day: "19", month: "Out", type: "Semana temática",
      title: "Semana Nacional de Ciência e Tecnologia",
      location: "📍 Campus AEB",
      audience: "👥 Aberto ao público externo",
      time: "10h00", duration: "até 25/10",
    },
  ];
}

export async function fetchBirthdays(): Promise<Birthday[]> {
  await delay();
  return [
    { initials: "CN", name: "Carla Nascimento", dept: "Comunicação",         when: "Hoje",      date: "22/05", today: true },
    { initials: "RL", name: "Rafael Lima",       dept: "TI Institucional",   when: "Em 2 dias", date: "24/05" },
    { initials: "MS", name: "Mariana Souza",     dept: "Gestão de Pessoas",  when: "Em 5 dias", date: "27/05" },
    { initials: "BP", name: "Bruno Pacheco",     dept: "Pesquisa & Desenvolvimento", when: "Em 8 dias", date: "30/05" },
  ];
}

export async function fetchWeather(): Promise<WeatherCity[]> {
  await delay();
  return [
    { name: "Brasília · Sede",         temp: "24.4°", desc: "Parc. nublado", meta: ["Vento 18,5 km/h", "UV 6"], icon: "cloud", main: true },
    { name: "Natal · CLBI",            temp: "27.4°", desc: "Ensolarado",    meta: ["19,1 km/h"],                icon: "sun" },
    { name: "São José dos Campos",     temp: "18.5°", desc: "Chuva fraca",   meta: ["11,8 km/h"],                icon: "rain" },
  ];
}

export async function fetchDocs(): Promise<DocItem[]> {
  await delay();
  return [
    { type: "PDF", name: "Comunicado nº 042/2026 — Recesso institucional de Corpus Christi",       source: "Gabinete da Presidência",          date: "21/05/2026", size: "184 KB" },
    { type: "PDF", name: "Portaria nº 118/2026 — Comissão de Avaliação de Projetos Estratégicos", source: "Diretoria Executiva",              date: "19/05/2026", size: "312 KB" },
    { type: "XLS", name: "Calendário de capacitações 2026 — 2º semestre",                          source: "Coordenação de Gestão de Pessoas", date: "18/05/2026", size: "88 KB"  },
    { type: "DOC", name: "Manual de uso — Sistema de reservas de salas (v3.2)",                    source: "TI Institucional",                 date: "14/05/2026", size: "1.2 MB" },
    { type: "PDF", name: "Comunicado nº 041/2026 — Atualização da Política de Segurança",          source: "Comitê de Segurança",              date: "12/05/2026", size: "472 KB" },
  ];
}

export async function fetchExternalNews(): Promise<NewsItem[]> {
  await delay();
  return [
    { category: "Ciência",      title: "Brasil amplia participação em missão lunar internacional em 2027",    date: "22/05/2026", gradient: "linear-gradient(135deg,#1e3a5f,#4a78b8)" },
    { category: "Tecnologia",   title: "Programa Espacial Brasileiro recebe novos investimentos em propulsão", date: "21/05/2026", gradient: "linear-gradient(135deg,#3a2a1a,#a8762a)" },
    { category: "Educação",     title: "Olimpíada Brasileira de Astronomia atinge marca de 1 milhão de inscritos", date: "20/05/2026", gradient: "linear-gradient(135deg,#2a3a4f,#5a7a98)" },
    { category: "Cooperação",   title: "Acordo com a ESA amplia escopo de pesquisas em microgravidade",       date: "19/05/2026", gradient: "linear-gradient(135deg,#1a2a4a,#3a5a98)" },
  ];
}

export async function fetchStats(): Promise<StatItem[]> {
  await delay();
  return [
    { label: "Servidores ativos",             value: "412", delta: "▲ 4 este mês",                               down: false },
    { label: "Projetos em andamento",         value: "27",  delta: "▲ 2 novos",                                  down: false },
    { label: "Solicitações abertas",          value: "8",   delta: "▼ 12 fechadas",                              down: true  },
    { label: "Dias para o próximo lançamento",value: "37",  delta: "VLM-1 · Centro de Lançamento de Alcântara",  down: false },
  ];
}
