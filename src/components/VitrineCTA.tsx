import { Button } from "@/components/ui/button";
import { Store, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VitrineCTA = () => {
  const navigate = useNavigate();

  return (
    <section id="vitrine" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Novidade
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Conheça nossa vitrine virtual
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore nossa coleção completa de produtos online. Navegue por categorias, confira preços e encontre tudo o que precisa para transformar sua casa
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <Store className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Catálogo completo
              </h3>
              <p className="text-muted-foreground">
                Todos os nossos produtos organizados por categorias
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <ShoppingBag className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Preços atualizados
              </h3>
              <p className="text-muted-foreground">
                Confira valores e condições especiais em tempo real
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Novidades constantes
              </h3>
              <p className="text-muted-foreground">
                Lançamentos e produtos exclusivos sempre disponíveis
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={() => navigate("/vitrine")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
            >
              Acessar vitrine virtual
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Navegue sem compromisso e entre em contato para adquirir seus produtos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineCTA;
