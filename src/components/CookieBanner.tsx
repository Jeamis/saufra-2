import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

interface CookieBannerProps {
  onNavigate: (path: string) => void;
}

const STORAGE_KEY = 'saufra_rgpd_consent_v1';

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        const timer = window.setTimeout(() => setVisible(true), 1200);
        return () => window.clearTimeout(timer);
      }
    } catch {
      setVisible(false);
    }
  }, []);

  const handleDecision = (choice: 'accepted' | 'refused') => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status: choice, date: new Date().toISOString() })
      );
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className="fixed bottom-16 md:bottom-5 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 bg-white border border-[#0B1D36]/15 rounded-xl shadow-2xl p-5"
      aria-label="Gestion des cookies"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#0D3456] shrink-0 mt-0.5" />
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-[#0B1D36]">Respect de votre vie privée</p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Ce site utilise uniquement des traceurs techniques essentiels et, avec votre accord,
              des outils de mesure d’audience anonymisés (GA4).{' '}
              <button
                type="button"
                onClick={() => onNavigate('/politique-de-confidentialite/')}
                className="underline text-[#0D3456] hover:text-[#C69C4D] cursor-pointer"
              >
                En savoir plus
              </button>
              .
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => handleDecision('refused')}
              className="py-2 px-3 rounded-lg border border-[#0B1D36]/20 text-xs font-semibold text-[#0B1D36] hover:bg-[#F8F9FB] transition-colors cursor-pointer"
            >
              Tout refuser
            </button>
            <button
              type="button"
              onClick={() => handleDecision('accepted')}
              className="py-2 px-3 rounded-lg bg-[#0B1D36] text-xs font-semibold text-white hover:bg-[#0D3456] transition-colors cursor-pointer"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
