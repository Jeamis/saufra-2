import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/saufraData';

interface MobileActionBarProps {
  onNavigate: (path: string) => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onNavigate }) => {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-[#0B1D36] border-t border-[#C69C4D]/40 h-14 px-2 grid grid-cols-3 gap-1.5 items-center shadow-lg"
      role="region"
      aria-label="Actions rapides"
    >
      <a
        href={COMPANY_INFO.phoneHref}
        className="flex items-center justify-center gap-1.5 h-10 rounded-md text-xs font-semibold text-white bg-white/10 active:bg-white/20 whitespace-nowrap"
      >
        <Phone className="w-3.5 h-3.5 text-[#C69C4D]" />
        <span>Appeler</span>
      </a>
      <a
        href={COMPANY_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 h-10 rounded-md text-xs font-semibold text-white bg-white/10 active:bg-white/20 whitespace-nowrap"
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#C69C4D]" />
        <span>WhatsApp</span>
      </a>
      <button
        type="button"
        onClick={() => onNavigate('/devis-gratuit/')}
        className="flex items-center justify-center gap-1.5 h-10 rounded-md text-xs font-semibold text-[#0B1D36] bg-[#C69C4D] active:bg-[#B1883A] whitespace-nowrap cursor-pointer"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>Devis gratuit</span>
      </button>
    </div>
  );
};
