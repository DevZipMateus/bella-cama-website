import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("calc(100vh - 143px)");

  useEffect(() => {
    const calculateHeight = () => {
      const headerHeight = 80; // 80px
      const badgeHeight = 63; // 63px
      const totalHeight = window.innerHeight - headerHeight - badgeHeight;
      setIframeHeight(`${totalHeight}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    // Travar scroll da página
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Carregar o script do MonteSite
    const script = document.createElement("script");
    script.src = "https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      window.removeEventListener("resize", calculateHeight);
      // Restaurar scroll ao sair da página
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col fixed inset-0">
      <Header />
      <main className="flex-1 w-full overflow-hidden" style={{ height: iframeHeight, marginTop: "80px" }}>
        <iframe
          src="https://lacasabella.egestor.com.br/vitrine/"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Demonstração de Vitrine"
        />
      </main>
      {/* Rodapé MonteSite - Atualização Automática */}
      <div id="montesite-footer-badge"></div>
    </div>
  );
};

export default Vitrine;
