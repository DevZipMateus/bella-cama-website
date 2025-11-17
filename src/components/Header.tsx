import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-2 transition-transform hover:scale-105">
            <img src={logo} alt="Lacasabella Store" className="h-16 sm:h-20 md:h-24 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("sobre")} className="text-white hover:text-primary transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection("produtos")} className="text-white hover:text-primary transition-colors font-medium">
              Produtos
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-white hover:text-primary transition-colors font-medium">
              Contato
            </button>
            <Button onClick={() => window.open("https://wa.me/5534992681388", "_blank")} variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white hover:text-primary transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("sobre")} className="text-white hover:text-primary transition-colors font-medium text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection("produtos")} className="text-white hover:text-primary transition-colors font-medium text-left">
                Produtos
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-white hover:text-primary transition-colors font-medium text-left">
                Contato
              </button>
              <Button onClick={() => window.open("https://wa.me/5534992681388", "_blank")} variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Fale conosco
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;