import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img src={logo} alt="Lacasabella Store" className="h-28 w-auto" />
            <p className="text-sm text-white/70">
              Conforto e elegância para sua casa
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-3">
              <a href="https://wa.me/5534992681388" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (34) 99268-1388
              </a>
              <a href="https://wa.me/5534991370847" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (34) 99137-0847
              </a>
              <a href="mailto:lacasabellastore@gmail.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                lacasabellastore@gmail.com
              </a>
            </div>
          </div>

          {/* Endereço e Horário */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Localização</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Avenida Fernando Vilela - 1177</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta: 9:00 - 18:00</p>
                  <p>Sábado: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Redes Sociais</h3>
            <a href="https://www.instagram.com/lacasabellastore?igsh=dXYzejJ5aDN3bHZl&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
              @lacasabellastore
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Lacasabella Store - BELLA CAMA E ESTILO LTDA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/60 mt-2">
            CNPJ: 58.072.189/0001-08
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;