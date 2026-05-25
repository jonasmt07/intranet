import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import NewsList from "../pages/Admin/NewsList";
import NewsForm from "../pages/Admin/NewsForm";

export const router = createBrowserRouter([
  // ── Intranet (front público) ─────────────────────────────────────────────
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // Novas páginas entram aqui:
      // { path: "noticias",   element: <Noticias /> },
      // { path: "documentos", element: <Documentos /> },
      // { path: "pessoas",    element: <Pessoas /> },
    ],
  },

  // ── Área administrativa (CMS interno) ────────────────────────────────────
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      // /admin  →  redireciona para notícias
      { index: true, element: <NewsList /> },

      // Notícias
      { path: "noticias",        element: <NewsList /> },
      { path: "noticias/nova",   element: <NewsForm /> },
      { path: "noticias/:id",    element: <NewsForm /> },
    ],
  },
]);
