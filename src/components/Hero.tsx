import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Elegância e conforto para o seu lar
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Lacasabella Store
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos produtos de cama, mesa e banho que unem qualidade, conforto e sofisticação,
            promovendo bem-estar e elegância no dia a dia
          </h2>

          <p className="text-lg md:text-xl text-foreground/80 font-medium">
            Conforto e elegância para sua casa
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={() => window.open("https://wa.me/5534992681388", "_blank")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Entre em contato
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("produtos");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary transition-all"
            >
              Conheça nossos produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
