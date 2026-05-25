/**
 * IntranetAEB.tsx
 * ----------------------------------------------------------------------------
 * Ponto de entrada legado — mantido para compatibilidade.
 * O projeto agora usa src/main.tsx com react-router-dom.
 *
 * Estrutura completa:
 *   src/
 *     components/   — componentes reutilizáveis (Icons, BrandMark, SectionHead)
 *     pages/Home/   — seções da página inicial
 *     layouts/      — MainLayout (Header + Outlet + Footer)
 *     services/     — intranetService (fetch mockado, pronto para API real)
 *     hooks/        — useCountdown, useHeroDots, useGoogleFonts
 *     context/      — IntranetContext + useIntranet()
 *     routes/       — createBrowserRouter com react-router-dom
 *     styles/       — global.ts (CSS escopado em .iaeb-root)
 *     types/        — tipos TypeScript compartilhados
 * ----------------------------------------------------------------------------
 */

export { default } from "./src/pages/Home";
