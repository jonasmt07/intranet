import { useEffect } from "react";

export function useGoogleFonts() {
  useEffect(() => {
    if (document.getElementById("intranet-aeb-fonts")) return;
    const link = document.createElement("link");
    link.id = "intranet-aeb-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,300..700&family=JetBrains+Mono:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}
