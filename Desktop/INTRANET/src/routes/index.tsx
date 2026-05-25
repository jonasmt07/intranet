import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
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
]);
