import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      content: ["(34) 99268-1388", "(34) 99137-0847"],
      action: () => window.open("https://wa.me/5534992681388", "_blank"),
    },
    {
      icon: Mail,
      title: "E-mail",
      content: ["lacasabellastore@gmail.com"],
      action: () => window.open("mailto:lacasabellastore@gmail.com", "_blank"),
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: ["Avenida Fernando Vilela 1177", "Bairro Osvaldo Rezende - Uberlândia - MG"],
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: ["Segunda a sexta: 9h às 18h", "Sábado: 9h às 13h"],
    },
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Entre em contato</h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Estamos prontos para atender você e tirar todas as suas dúvidas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-card p-4 sm:p-5 md:p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{info.title}</h3>
                    {info.content.map((line, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-muted-foreground break-words">
                        {line}
                      </p>
                    ))}
                    {info.action && (
                      <Button
                        onClick={info.action}
                        variant="link"
                        className="text-primary hover:text-primary/80 p-0 h-auto mt-2 text-sm sm:text-base"
                      >
                        Clique para contatar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-4 sm:space-y-6 px-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-2xl mx-auto">
            <Button
              onClick={() => window.open("https://wa.me/5534992681388", "_blank")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:flex-1"
            >
              Fale conosco pelo WhatsApp
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/lacasabellastore?igsh=dXYzejJ5aDN3bHZl&utm_source=qr",
                  "_blank"
                )
              }
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary transition-all w-full sm:flex-1"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Siga no Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
