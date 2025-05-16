
import { Instagram, Phone } from "lucide-react";

const ContactLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <a 
        href="https://instagram.com/ishi-fab" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-harper-terracotta text-white rounded-full hover:bg-opacity-90 transition-all"
      >
        <Instagram size={18} />
        <span>ishi-fab</span>
      </a>
      <a 
        href="tel:+254794500945" 
        className="inline-flex items-center gap-2 px-4 py-2 bg-harper-navy text-white rounded-full hover:bg-opacity-90 transition-all"
      >
        <Phone size={18} />
        <span>0794500945</span>
      </a>
    </div>
  );
};

export default ContactLinks;
