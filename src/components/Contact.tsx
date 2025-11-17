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
      content: ["Avenida Fernando Vilela - 1177"],
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: ["Segunda a sexta: 9h às 18h", "Sábado: 9h às 13h"],
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Entre em contato</h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e tirar todas as suas dúvidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                    {info.content.map((line, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {line}
                      </p>
                    ))}
                    {info.action && (
                      <Button
                        onClick={info.action}
                        variant="link"
                        className="text-primary hover:text-primary/80 p-0 h-auto mt-2"
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

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => window.open("https://wa.me/5534992681388", "_blank")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
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
              className="text-lg px-8 py-6 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary transition-all"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Siga no Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
