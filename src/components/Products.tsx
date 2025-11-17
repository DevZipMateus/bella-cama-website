import { Bed, UtensilsCrossed, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import produtoCama from "@/assets/produto-cama.jpg";
import produtoMesa from "@/assets/produto-mesa.jpg";
import produtoBanho from "@/assets/produto-banho.jpg";

const Products = () => {
  const categories = [
    {
      icon: Bed,
      title: "Cama",
      description:
        "Lençóis, edredons, travesseiros e toda linha de produtos para transformar seu quarto em um oásis de conforto e elegância",
      items: ["Jogo de lençóis", "Edredons", "Travesseiros", "Colchas"],
      image: produtoCama,
    },
    {
      icon: UtensilsCrossed,
      title: "Mesa",
      description:
        "Jogos americanos, toalhas e acessórios que elevam cada refeição a um momento especial e sofisticado",
      items: ["Toalhas de mesa", "Jogos americanos", "Guardanapos", "Trilhos de mesa"],
      image: produtoMesa,
    },
    {
      icon: Bath,
      title: "Banho",
      description:
        "Toalhas macias, tapetes e acessórios que transformam seu banho em um spa particular cheio de conforto",
      items: ["Toalhas de banho", "Tapetes", "Roupões", "Toalhas de rosto"],
      image: produtoBanho,
    },
  ];

  return (
    <section id="produtos" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Nossos produtos</h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Descubra nossa coleção completa de produtos premium para cama, mesa e banho
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-2xl border border-border hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={`Produtos de ${category.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-center">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-center">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm sm:text-base text-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center px-4">
          <Button
            onClick={() => window.open("https://wa.me/5534992681388", "_blank")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
          >
            Consulte nosso catálogo completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
