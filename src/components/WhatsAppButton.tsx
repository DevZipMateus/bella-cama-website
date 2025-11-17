import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5534992681388"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-secondary hover:bg-secondary/90 rounded-full shadow-lg flex items-center justify-center transition-colors"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-secondary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
