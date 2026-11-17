import React from 'react';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/saufraData';

interface ConversionBlockProps {
  onNavigate: (path: string) => void;
  title?: string;
  subtitle?: string;
}

export const ConversionBlock: React.FC<ConversionBlockProps> = ({
  onNavigate,
  title = 'Un projet ? Parlons-en.',
  subtitle = 'Devis gratuit et sans engagement, déplacement à domicile pour l’étude technique et la prise de cotes (à confirmer selon commune).',
}) => {
  return (
    <section className="py-16 bg-white border-t border-[#0B1D36]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1D36] rounded-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden border border-[#C69C4D]/30">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            <div className="flex-1 min-w-0 space-y-3">
              <p className="text-xs font-medium text-[#C69C4D]">
                Mauguio · Montpellier Métropole · Hérault
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            </div>
            <div className="w-full lg:w-80 shrink-0 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onNavigate('/devis-gratuit/')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#C69C4D] hover:bg-[#B1883A] text-[#0B1D36] font-semibold text-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Demander mon devis gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/25 hover:border-[#C69C4D] text-white text-sm font-medium transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#C69C4D]" />
                  <span>Appeler</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/25 hover:border-[#C69C4D] text-white text-sm font-medium transition-colors whitespace-nowrap"
                  aria-label="Contacter Saufra sur WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-[#C69C4D]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
