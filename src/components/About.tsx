import { Award, Heart, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade premium",
      description: "Produtos cuidadosamente selecionados com os mais altos padrões de qualidade",
    },
    {
      icon: Heart,
      title: "Conforto garantido",
      description: "Peças que transformam sua casa em um verdadeiro refúgio de bem-estar",
    },
    {
      icon: Sparkles,
      title: "Design sofisticado",
      description: "Elegância e estilo em cada detalhe para valorizar seu lar",
    },
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Sobre a Lacasabella
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            Na Lacasabella Store, acreditamos que cada ambiente da sua casa merece cuidado e
            atenção especial. Oferecemos uma seleção exclusiva de produtos de cama, mesa e banho
            que combinam qualidade excepcional com design sofisticado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground leading-relaxed">
            Trabalhamos com excelência em atendimento e design para valorizar cada detalhe do lar,
            garantindo que você encontre produtos que realmente fazem a diferença no seu dia a dia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
