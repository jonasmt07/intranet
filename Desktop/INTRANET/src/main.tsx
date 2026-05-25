import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { IntranetProvider } from "./context/IntranetContext";
import { useGoogleFonts } from "./hooks/useGoogleFonts";
import { styles } from "./styles/global";
import { router } from "./routes";

function App() {
  useGoogleFonts();
  return (
    <div className="iaeb-root">
      <style>{styles}</style>
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IntranetProvider>
      <App />
    </IntranetProvider>
  </React.StrictMode>
);
