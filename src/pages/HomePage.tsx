import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  Shield,
  Ruler,
  MapPin,
  MessageSquare,
  Check,
  ChevronRight,
} from 'lucide-react';
import {
  COMPANY_INFO,
  TRUST_PILLARS,
  PROCESS_STEPS,
  SERVICE_FAMILIES,
  REALISATIONS,
  COMMUNES_LOCAL,
} from '../data/saufraData';
import { QuickQuoteForm } from '../components/QuoteFunnel';
import { HeroPergolaLouverVisual } from '../components/HeroPergolaLouverVisual';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const PILLAR_ICONS = [Shield, Ruler, MapPin, MessageSquare];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [realisationFilter, setRealisationFilter] = useState<'tous' | 'pergolas' | 'menuiseries'>('tous');

  const visibleRealisations = REALISATIONS.filter((item) => {
    if (realisationFilter === 'pergolas') return item.category === 'pergolas';
    if (realisationFilter === 'menuiseries') return item.category !== 'pergolas';
    return true;
  }).slice(0, 6);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B1D36] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <p className="text-xs sm:text-sm font-medium text-[#C69C4D]">
                Mauguio · Montpellier Métropole · Hérault
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold leading-[1.12] tracking-tight text-white">
                Pergolas, fenêtres, volets et portes sur mesure à Mauguio et dans l’Hérault
              </h1>
              <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                {COMPANY_INFO.slogans.secondary} Étude technique à domicile, fabrication sur mesure
                et pose soignée pour votre confort thermique, phonique et extérieur.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/devis-gratuit/')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#C69C4D] hover:bg-[#B1883A] text-[#0B1D36] font-semibold text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Demander mon devis gratuit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/25 hover:border-[#C69C4D] text-white font-medium text-sm transition-colors whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4 text-[#C69C4D]" />
                  <span>Appeler un conseiller</span>
                </a>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/70">
                <span>{COMPANY_INFO.slogans.primary}</span>
                <span aria-hidden="true">·</span>
                <span>Visite technique sans engagement</span>
                <span aria-hidden="true">·</span>
                <span>Aluminium, PVC & Bois</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#C69C4D]/40 bg-[#0D3456] aspect-[16/10] lg:aspect-auto lg:flex-1 min-h-[260px]">
                <img
                  src="/assets/saufra/pergola-villa-piscine.png"
                  alt="Pergola bioclimatique Saufra installée sur terrasse méditerranéenne avec piscine"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D36]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-[#C69C4D] font-medium">Spécialité extérieure</p>
                    <p className="text-sm font-semibold text-white">
                      Pergolas bioclimatiques & extensions sur mesure
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('/pergolas-bioclimatiques/')}
                    className="px-3 py-1.5 rounded-md bg-white/15 hover:bg-white/25 backdrop-blur-sm text-xs font-medium text-white whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 PILIERS DE CONFIANCE */}
      <section className="bg-white border-b border-[#0B1D36]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx];
              return (
                <div key={pillar.id} className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0B1D36]/5 border border-[#0B1D36]/10 flex items-center justify-center text-[#0B1D36]">
                      <Icon className="w-4 h-4 text-[#C69C4D]" />
                    </div>
                    <h2 className="font-display text-lg font-semibold text-[#0B1D36]">
                      {pillar.title}
                    </h2>
                  </div>
                  <p className="text-xs font-medium text-[#0D3456]">{pillar.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GRILLE DES SERVICES (BENTO ARCHITECTURAL) */}
      <section className="py-16 md:py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#0D3456]">Nos savoir-faire sur mesure</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B1D36]">
                Toutes vos menuiseries extérieures et protections solaires
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/devis-gratuit/')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1D36] hover:text-[#C69C4D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Comparer les solutions sur place</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_FAMILIES.map((service, index) => {
              const isFeatured = index === 0;
              return (
                <article
                  key={service.id}
                  onClick={() => onNavigate(service.slug)}
                  className={`group bg-white rounded-2xl border border-[#0B1D36]/10 overflow-hidden cursor-pointer transition-all duration-200 hover:border-[#C69C4D] hover:shadow-md flex flex-col ${
                    isFeatured ? 'lg:col-span-2 lg:grid lg:grid-cols-12' : ''
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${
                      isFeatured ? 'lg:col-span-6 aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[16/10]'
                    }`}
                  >
                    <img
                      src={service.heroImage}
                      alt={service.heroImageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div
                    className={`p-6 flex flex-col justify-between gap-4 ${
                      isFeatured ? 'lg:col-span-6 lg:p-8' : ''
                    }`}
                  >
                    <div className="space-y-3">
                      <p className="text-xs font-medium text-slate-500">
                        {isFeatured ? 'Service vedette · Sur mesure' : 'Menuiserie & Rénovation'}
                      </p>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#0B1D36] group-hover:text-[#0D3456]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.heroSubtitle}
                      </p>
                      {isFeatured && (
                        <ul className="pt-1 space-y-2 text-sm text-[#0B1D36]">
                          {[
                            'Lames aluminium motorisées orientables',
                            'Pose adossée en façade ou autoportante',
                            'Stores ZIP latéraux, LED et capteurs en option',
                          ].map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-[#C69C4D] shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="pt-3 flex items-center justify-between border-t border-[#0B1D36]/8 text-sm font-semibold text-[#0B1D36] group-hover:text-[#C69C4D]">
                      <span>Découvrir la gamme</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTION VEDETTE PERGOLA BIOCLIMATIQUE */}
      <section className="py-16 md:py-20 bg-[#0B1D36] text-white border-y border-[#C69C4D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-medium text-[#C69C4D]">
                Produit phare · Pergola Bioclimatique
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                Profitez de votre terrasse toute l’année avec « L’Originale Classic »
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Conçue pour maîtriser le soleil et la chaleur du littoral héraultais, la pergola
                bioclimatique en aluminium combine lames motorisées orientables, évacuation d’eau
                intégrée et options sur mesure.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90">
                {[
                  'Lames motorisées orientables',
                  'Structure aluminium durable',
                  'Pose adossée ou autoportante',
                  'Stores ZIP latéraux en option',
                  'Éclairage LED & capteurs météo',
                  'Dimensions au millimètre',
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C69C4D] shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('/pergolas-bioclimatiques/')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C69C4D] hover:bg-[#B1883A] text-[#0B1D36] text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Explorer la gamme Pergolas</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/devis-gratuit/')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/25 hover:border-[#C69C4D] text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  <span>Chiffrer ma pergola</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-2xl overflow-hidden border border-[#C69C4D]/35 bg-white">
                <img
                  src={COMPANY_INFO.classicPergolaSheet}
                  alt="Présentation Pergola Bioclimatique L'Originale Classic Saufra"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>
              <HeroPergolaLouverVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMENT ÇA MARCHE & POURQUOI CHOISIR SAUFRA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#0D3456]">Accompagnement de A à Z</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B1D36]">
                Comment se déroule votre projet avec Saufra ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#0B1D36]/10 space-y-3"
                >
                  <span className="font-display text-2xl font-bold text-[#C69C4D] tabular-nums block">
                    {item.step}.
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[#0B1D36]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pourquoi choisir Saufra */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-[#0B1D36]/10">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold text-[#0D3456]">Savoir-faire local</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
                Pourquoi confier vos menuiseries à Saufra ?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Implantée à Mauguio sous la direction de M. Sauveur Benayoun (SARL SFBT),
                l’équipe Saufra privilégie la relation directe, la précision des cotes et la
                qualité des finitions sur chantier.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-[#0B1D36]">
                {[
                  'Fabrication sur mesure adaptée à votre habitation (neuf ou rénovation)',
                  'Large choix de matériaux : Aluminium, PVC et Bois selon vos contraintes',
                  'Sélection majoritaire de produits de fabrication française (précisée sur devis)',
                  'Interlocuteur unique de la prise de cotes jusqu’à la réception des travaux',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C69C4D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#0B1D36]/10 bg-[#0B1D36]">
                <img
                  src={COMPANY_INFO.bannerImage}
                  alt="Bannière Saufra Menuiserie & Rénovation - Pergolas, Carport, Extension maison, Couverture"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RÉALISATIONS */}
      <section className="py-16 md:py-20 bg-[#F8F9FB] border-t border-[#0B1D36]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#0D3456]">Inspirations & chantiers</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
                Aperçu de nos installations dans l’Hérault
              </h2>
            </div>

            <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-[#0B1D36]/10 self-start">
              {[
                { id: 'tous', label: 'Tout voir' },
                { id: 'pergolas', label: 'Pergolas' },
                { id: 'menuiseries', label: 'Menuiseries' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setRealisationFilter(tab.id as 'tous' | 'pergolas' | 'menuiseries')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    realisationFilter === tab.id
                      ? 'bg-[#0B1D36] text-white'
                      : 'text-slate-600 hover:text-[#0B1D36]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleRealisations.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-[#0B1D36]/10 overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.commune}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#0B1D36]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/realisations/')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-[#0B1D36]/20 hover:border-[#C69C4D] text-sm font-semibold text-[#0B1D36] transition-colors cursor-pointer"
            >
              <span>Voir toute la galerie de réalisations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. ZONES D'INTERVENTION & DEVIS */}
      <section className="py-16 md:py-20 bg-white border-t border-[#0B1D36]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Zone d'intervention */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-semibold text-[#0D3456]">Proximité Hérault (34)</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
                Intervention à Mauguio, Montpellier Métropole et sur le littoral
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Depuis Mauguio, nous nous déplaçons rapidement à votre domicile pour étudier votre
                projet. Cliquez sur votre commune pour découvrir les solutions adaptées à votre
                environnement local.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2">
                {COMMUNES_LOCAL.map((commune) => (
                  <button
                    key={commune.slug}
                    type="button"
                    onClick={() => onNavigate(`/zones-d-intervention/${commune.slug}/`)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#F8F9FB] hover:bg-[#0B1D36] hover:text-white border border-[#0B1D36]/10 text-xs font-semibold text-[#0B1D36] transition-colors text-left cursor-pointer"
                  >
                    <span>{commune.name}</span>
                    <span className="tabular-nums opacity-65">{commune.postalCode}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 8. FORMULAIRE DE DEVIS COURT */}
            <div className="lg:col-span-7 space-y-3">
              <div>
                <h3 className="font-display text-2xl font-semibold text-[#0B1D36]">
                  Demandez votre devis gratuit en 1 minute
                </h3>
                <p className="text-sm text-slate-600">
                  Ou passez par notre{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('/devis-gratuit/')}
                    className="underline font-semibold text-[#0D3456] hover:text-[#C69C4D] cursor-pointer"
                  >
                    assistant de devis détaillé en 3 étapes
                  </button>
                  .
                </p>
              </div>
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
