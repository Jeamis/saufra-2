import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/saufraData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const MENUISERIE_LINKS = [
  { label: 'Fenêtres PVC, Alu & Bois', path: '/fenetres/' },
  { label: 'Volets roulants & battants', path: '/volets/' },
  { label: 'Portes d’entrée, blindées & garage', path: '/portes/' },
  { label: 'Stores intérieurs & extérieurs', path: '/stores/' },
  { label: 'Vérandas & extensions', path: '/verandas-extensions/' },
  { label: 'Climatisation réversible', path: '/climatisation/' },
  { label: 'Zones d’intervention (Hérault)', path: '/zones-d-intervention/' },
  { label: 'Guides & Blog conseils', path: '/blog/' },
];

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [currentPath]);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const isMenuiserieActive =
    currentPath.startsWith('/fenetres') ||
    currentPath.startsWith('/volets') ||
    currentPath.startsWith('/portes') ||
    currentPath.startsWith('/stores') ||
    currentPath.startsWith('/verandas') ||
    currentPath.startsWith('/climatisation') ||
    currentPath.startsWith('/zones') ||
    currentPath.startsWith('/blog');

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#0B1D36]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4 lg:gap-8">
          {/* Zone 1: Brand wordmark + Saufra logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69C4D] rounded-md"
            aria-label="Saufra Menuiseries - Accueil"
          >
            <img
              src={COMPANY_INFO.logoLight}
              alt="Logo Saufra Menuiseries"
              className="h-10 w-10 md:h-11 md:w-11 object-contain"
              width={44}
              height={44}
            />
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#0B1D36] whitespace-nowrap shrink-0">
              SAUFRA
            </span>
          </a>

          {/* Zone 2: 5 concise single-line text nav links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#0B1D36]/80"
            aria-label="Navigation principale"
          >
            <a
              href="/pergolas-bioclimatiques/"
              onClick={(e) => handleLinkClick(e, '/pergolas-bioclimatiques/')}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
                currentPath.startsWith('/pergolas')
                  ? 'border-[#C69C4D] text-[#0B1D36] font-semibold'
                  : 'border-transparent hover:text-[#0B1D36] hover:border-[#C69C4D]/50'
              }`}
            >
              Pergolas
            </a>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                className={`flex items-center gap-1 whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 cursor-pointer ${
                  isMenuiserieActive
                    ? 'border-[#C69C4D] text-[#0B1D36] font-semibold'
                    : 'border-transparent hover:text-[#0B1D36] hover:border-[#C69C4D]/50'
                }`}
              >
                <span>Menuiseries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full mt-3 w-72 bg-white rounded-xl shadow-xl border border-[#0B1D36]/10 py-2 z-50">
                  {MENUISERIE_LINKS.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        currentPath === item.path
                          ? 'bg-[#F8F9FB] text-[#0B1D36] font-semibold'
                          : 'text-[#0B1D36]/80 hover:bg-[#F8F9FB] hover:text-[#0B1D36]'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/realisations/"
              onClick={(e) => handleLinkClick(e, '/realisations/')}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
                currentPath.startsWith('/realisations')
                  ? 'border-[#C69C4D] text-[#0B1D36] font-semibold'
                  : 'border-transparent hover:text-[#0B1D36] hover:border-[#C69C4D]/50'
              }`}
            >
              Réalisations
            </a>

            <a
              href="/a-propos/"
              onClick={(e) => handleLinkClick(e, '/a-propos/')}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
                currentPath.startsWith('/a-propos')
                  ? 'border-[#C69C4D] text-[#0B1D36] font-semibold'
                  : 'border-transparent hover:text-[#0B1D36] hover:border-[#C69C4D]/50'
              }`}
            >
              À propos
            </a>

            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/')}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
                currentPath.startsWith('/contact')
                  ? 'border-[#C69C4D] text-[#0B1D36] font-semibold'
                  : 'border-transparent hover:text-[#0B1D36] hover:border-[#C69C4D]/50'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/devis-gratuit/"
              onClick={(e) => handleLinkClick(e, '/devis-gratuit/')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#0B1D36] bg-[#C69C4D] hover:bg-[#B1883A] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1D36]"
            >
              Devis gratuit
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu de navigation"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#0B1D36]/15 text-[#0B1D36] hover:bg-[#F8F9FB] cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0B1D36] text-white flex flex-col overflow-y-auto lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile Saufra"
        >
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md p-1">
                <img
                  src={COMPANY_INFO.logoLight}
                  alt="Logo Saufra"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">SAUFRA</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg border border-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 px-5 py-6 space-y-6">
            <div className="space-y-1">
              <p className="text-xs font-medium text-[#C69C4D] mb-2">Services & Produits</p>
              {[
                { label: 'Accueil', path: '/' },
                { label: 'Pergolas bioclimatiques', path: '/pergolas-bioclimatiques/' },
                { label: 'Fenêtres PVC, Alu & Bois', path: '/fenetres/' },
                { label: 'Volets roulants, battants & persiennes', path: '/volets/' },
                { label: 'Portes d’entrée, blindées & garage', path: '/portes/' },
                { label: 'Stores intérieurs & extérieurs', path: '/stores/' },
                { label: 'Vérandas & extensions', path: '/verandas-extensions/' },
                { label: 'Climatisation', path: '/climatisation/' },
              ].map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className="flex items-center justify-between py-3 text-base font-medium border-b border-white/10 text-white/95 hover:text-[#C69C4D]"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#C69C4D]" />
                </a>
              ))}
            </div>

            <div className="space-y-1">
              <p className="text-xs font-medium text-[#C69C4D] mb-2">Découvrir Saufra</p>
              {[
                { label: 'Réalisations', path: '/realisations/' },
                { label: 'À propos & Engagements', path: '/a-propos/' },
                { label: 'Zones d’intervention (Mauguio / Hérault)', path: '/zones-d-intervention/' },
                { label: 'Blog & Guides conseils', path: '/blog/' },
                { label: 'Contact', path: '/contact/' },
              ].map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className="flex items-center justify-between py-2.5 text-base border-b border-white/10 text-white/85 hover:text-[#C69C4D]"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <a
                href="/devis-gratuit/"
                onClick={(e) => handleLinkClick(e, '/devis-gratuit/')}
                className="w-full py-3.5 px-5 rounded-lg bg-[#C69C4D] text-[#0B1D36] font-semibold text-center block"
              >
                Demander mon devis gratuit
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-white/20 text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-[#C69C4D]" />
                  <span>Appeler</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-white/20 text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-[#C69C4D]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
