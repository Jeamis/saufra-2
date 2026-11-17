import React, { useState } from 'react';
import { Check, ArrowRight, ChevronDown, Sun, ShieldCheck, Layers } from 'lucide-react';
import { COMPANY_INFO, SERVICE_FAMILIES, REALISATIONS } from '../data/saufraData';
import { HeroPergolaLouverVisual } from '../components/HeroPergolaLouverVisual';
import { ConversionBlock } from '../components/ConversionBlock';

interface PergolasPageProps {
  onNavigate: (path: string) => void;
}

export const PergolasPage: React.FC<PergolasPageProps> = ({ onNavigate }) => {
  const pergolaService = SERVICE_FAMILIES.find((s) => s.id === 'pergolas')!;
  const pergolaPhotos = REALISATIONS.filter((r) => r.category === 'pergolas');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-medium text-[#C69C4D]">
                Service prioritaire · Mauguio, Montpellier & Hérault
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                {pergolaService.heroTitle}
              </h1>
              <p className="text-base text-white/85 leading-relaxed max-w-2xl">
                {pergolaService.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/devis-gratuit/')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#C69C4D] hover:bg-[#B1883A] text-[#0B1D36] text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Chiffrer ma pergola gratuitement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/realisations/')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-white/25 hover:border-[#C69C4D] text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  <span>Voir nos chantiers pergola</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <HeroPergolaLouverVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Principle & L'Originale Classic */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold text-[#0D3456]">Principe bioclimatique</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
                Une terrasse utilisable toute l’année, du plein soleil aux averses
              </h2>
              {pergolaService.intro.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {pergolaService.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="p-4 rounded-xl bg-[#F8F9FB] border border-[#0B1D36]/10 space-y-1.5"
                  >
                    <h3 className="font-display text-base font-semibold text-[#0B1D36]">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#0B1D36]/12 shadow-sm">
                <img
                  src={COMPANY_INFO.classicPergolaSheet}
                  alt="Pergola Bioclimatique L'Originale Classic Saufra"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-slate-500">
                Gamme présentée « L’Originale Classic » et garantie fabricant 12 ans soumises à
                validation sur votre proposition technique détaillée.
              </p>
            </div>
          </div>

          {/* Options & Equipments */}
          <div className="pt-12 border-t border-[#0B1D36]/10 space-y-8">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#0D3456]">Équipements sur mesure</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
                Options de confort et solutions complémentaires
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#0B1D36]/10 space-y-3">
                <Sun className="w-5 h-5 text-[#C69C4D]" />
                <h3 className="font-display text-xl font-semibold text-[#0B1D36]">
                  Stores ZIP, LED & vitrage
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Intégrez des stores verticaux ZIP contre le soleil rasant et les regards, des
                  bandeaux LED dimmables, un chauffage d’appoint ou des parois vitrées coulissantes.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#0B1D36]/10 space-y-3">
                <ShieldCheck className="w-5 h-5 text-[#C69C4D]" />
                <h3 className="font-display text-xl font-semibold text-[#0B1D36]">
                  Motorisation & capteurs
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Capteur pluie fermant automatiquement les lames aux premières gouttes et capteur
                  vent sécurisant la toiture et vos stores lors des rafales méditerranéennes.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#0B1D36]/10 space-y-3">
                <Layers className="w-5 h-5 text-[#C69C4D]" />
                <h3 className="font-display text-xl font-semibold text-[#0B1D36]">
                  Carport & couverture toile
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Nous réalisons également des carports aluminium pour abriter vos véhicules, des
                  couvertures de terrasse et des pergolas à toile coulissante rétractable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Pergolas */}
      <section className="py-16 bg-[#F8F9FB] border-t border-[#0B1D36]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-[#0D3456]">Exemples d’implantations</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36] mt-1">
                Pergolas posées en façade ou en îlot
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/devis-gratuit/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1D36] hover:text-[#C69C4D] cursor-pointer"
            >
              <span>Demander une étude pour ma terrasse</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pergolaPhotos.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#0B1D36]/10 overflow-hidden"
              >
                <div className="aspect-[16/10] bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-xs text-slate-500">
                    {item.commune} · {item.material}
                  </p>
                  <h3 className="font-display text-base font-semibold text-[#0B1D36]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-[#0B1D36]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold text-[#0D3456]">Questions fréquentes</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
              Tout savoir sur votre pergola bioclimatique
            </h2>
          </div>

          <div className="divide-y divide-[#0B1D36]/10 border-y border-[#0B1D36]/10">
            {pergolaService.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left font-display text-lg font-semibold text-[#0B1D36] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C69C4D] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-[#F8F9FB] rounded-xl p-5 border border-[#0B1D36]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#C69C4D] shrink-0 mt-0.5" />
              <p className="text-sm text-[#0B1D36]">
                Besoin d’aide pour préparer votre déclaration préalable en mairie à Mauguio ou
                Montpellier ? Nous vous guidons lors de l’étude.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/devis-gratuit/')}
              className="px-4 py-2.5 rounded-lg bg-[#0B1D36] text-white text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer"
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>

      <ConversionBlock onNavigate={onNavigate} />
    </div>
  );
};
