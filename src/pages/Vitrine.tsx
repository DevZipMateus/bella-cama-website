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
    
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 w-full" style={{ height: iframeHeight, marginTop: "80px" }}>
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
    </div>
  );
};

export default Vitrine;
