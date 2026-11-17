import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, COMMUNES_LOCAL } from '../data/saufraData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSent, setCallbackSent] = useState(false);
  const [callbackError, setCallbackError] = useState('');

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName.trim() || callbackPhone.trim().length < 8) {
      setCallbackError('Merci d’indiquer votre nom et un numéro valide.');
      return;
    }
    setCallbackError('');
    setCallbackSent(true);
    setCallbackName('');
    setCallbackPhone('');
  };

  return (
    <footer className="bg-[#0B1D36] text-white border-t border-[#C69C4D]/40 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Legal Entity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5 shrink-0">
                <img
                  src={COMPANY_INFO.logoLight}
                  alt="Logo Saufra Menuiseries"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight block">SAUFRA</span>
                <span className="text-xs text-[#C69C4D]">Menuiserie & Rénovation</span>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {COMPANY_INFO.slogans.primary}. {COMPANY_INFO.slogans.secondary}
            </p>
            <div className="space-y-2 text-sm text-white/75 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C69C4D] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.addressLine}
                  <span className="block text-xs text-white/55">{COMPANY_INFO.addressNote}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C69C4D] shrink-0" />
                <a href={COMPANY_INFO.phoneHref} className="hover:text-[#C69C4D] transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C69C4D] shrink-0" />
                <span>{COMPANY_INFO.emailDisplay}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-display text-base font-semibold text-[#C69C4D] mb-4">
              Nos menuiseries
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              {[
                { label: 'Pergolas bioclimatiques', path: '/pergolas-bioclimatiques/' },
                { label: 'Fenêtres PVC, Alu & Bois', path: '/fenetres/' },
                { label: 'Volets roulants & battants', path: '/volets/' },
                { label: 'Portes d’entrée, blindées & garage', path: '/portes/' },
                { label: 'Stores intérieurs & extérieurs', path: '/stores/' },
                { label: 'Vérandas & extensions', path: '/verandas-extensions/' },
                { label: 'Climatisation réversible', path: '/climatisation/' },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => handleLink(e, item.path)}
                    className="hover:text-[#C69C4D] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Zones d'intervention & Infos */}
          <div>
            <h3 className="font-display text-base font-semibold text-[#C69C4D] mb-4">
              Mauguio & Hérault
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-white/80 mb-5">
              {COMMUNES_LOCAL.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <a
                    href={`/zones-d-intervention/${c.slug}/`}
                    onClick={(e) => handleLink(e, `/zones-d-intervention/${c.slug}/`)}
                    className="hover:text-[#C69C4D] transition-colors"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-white/10 space-y-2 text-sm text-white/75">
              <a
                href="/realisations/"
                onClick={(e) => handleLink(e, '/realisations/')}
                className="block hover:text-[#C69C4D]"
              >
                Galerie de réalisations
              </a>
              <a
                href="/blog/"
                onClick={(e) => handleLink(e, '/blog/')}
                className="block hover:text-[#C69C4D]"
              >
                Blog & conseils travaux
              </a>
              <p className="text-xs text-white/60 pt-1">{COMPANY_INFO.facebookLabel}</p>
            </div>
          </div>

          {/* Col 4: Mini Callback Form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="font-display text-base font-semibold text-white mb-1.5">
              Être rappelé gratuitement
            </h3>
            <p className="text-xs text-white/70 mb-4">
              Laissez vos coordonnées pour un premier échange avec un conseiller Saufra.
            </p>
            {callbackSent ? (
              <div className="flex items-start gap-2.5 text-sm text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Demande de rappel enregistrée. Un conseiller vous contactera prochainement.
                </span>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-3" noValidate>
                <div>
                  <label htmlFor="footer-name" className="sr-only">
                    Votre nom
                  </label>
                  <input
                    id="footer-name"
                    type="text"
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    placeholder="Votre nom"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C69C4D]"
                  />
                </div>
                <div>
                  <label htmlFor="footer-phone" className="sr-only">
                    Téléphone
                  </label>
                  <input
                    id="footer-phone"
                    type="tel"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="Téléphone (ex. 06 ...)"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C69C4D]"
                  />
                </div>
                {callbackError && (
                  <p className="text-xs text-rose-300" role="alert">
                    {callbackError}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#C69C4D] hover:bg-[#B1883A] text-[#0B1D36] text-sm font-semibold transition-colors cursor-pointer"
                >
                  Demander un rappel
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs text-white/65">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.fullTitle} · {COMPANY_INFO.legalName} ({COMPANY_INFO.legalForm} au capital de {COMPANY_INFO.capital}) · SIRET{' '}
            <span className="tabular-nums">{COMPANY_INFO.siret}</span> · TVA {COMPANY_INFO.tva}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="/mentions-legales/"
              onClick={(e) => handleLink(e, '/mentions-legales/')}
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite/"
              onClick={(e) => handleLink(e, '/politique-de-confidentialite/')}
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </a>
            <a
              href="/plan-du-site/"
              onClick={(e) => handleLink(e, '/plan-du-site/')}
              className="hover:text-white transition-colors"
            >
              Plan du site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
