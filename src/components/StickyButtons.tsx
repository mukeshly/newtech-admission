import React from "react";
import { Phone } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.png"; // Add this image to your assets

const StickyButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919153897202" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 rounded-full shadow-lg p-3 hover:scale-105 transition-transform"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919153897202" // Replace with your number
        className="bg-blue-500 text-white rounded-full shadow-lg p-3 hover:scale-105 transition-transform"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default StickyButtons;