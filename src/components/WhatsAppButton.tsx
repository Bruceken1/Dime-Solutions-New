import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/254740413951"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-accent-foreground" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
