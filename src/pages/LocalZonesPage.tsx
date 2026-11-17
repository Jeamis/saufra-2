import React from 'react';
import { MapPin, ArrowRight, Check } from 'lucide-react';
import { COMMUNES_LOCAL } from '../data/saufraData';
import { ConversionBlock } from '../components/ConversionBlock';

interface LocalZonesPageProps {
  communeSlug?: string;
  onNavigate: (path: string) => void;
}

export const LocalZonesPage: React.FC<LocalZonesPageProps> = ({
  communeSlug,
  onNavigate,
}) => {
  const activeCommune = communeSlug
    ? COMMUNES_LOCAL.find((c) => c.slug === communeSlug)
    : undefined;

  if (activeCommune) {
    return (
      <div>
        <section className="bg-[#0B1D36] text-white py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <p className="text-xs font-medium text-[#C69C4D]">
              Secteur Hérault ({activeCommune.postalCode}) · {activeCommune.distanceLabel}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-4xl">
              {activeCommune.headline}
            </h1>
            <p className="text-base text-white/85 max-w-2xl leading-relaxed">
              Pergolas bioclimatiques, fenêtres PVC/aluminium/bois, volets, portes et stores posés
              sur mesure à {activeCommune.name} et ses alentours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/devis-gratuit/')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C69C4D] hover:bg-[#B1883A] text-[#0B1D36] text-sm font-semibold cursor-pointer"
              >
                <span>Devis gratuit à {activeCommune.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
                  Spécificités de l’habitat à {activeCommune.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeCommune.habitatProfile}
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
                  Contraintes climatiques & techniques locales
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeCommune.localConstraints}
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-xl font-semibold text-[#0B1D36]">
                  Solutions recommandées sur votre secteur
                </h3>
                <ul className="space-y-2.5">
                  {activeCommune.recommendedSolutions.map((sol) => (
                    <li key={sol} className="flex items-start gap-2.5 text-sm text-[#0B1D36]">
                      <Check className="w-4 h-4 text-[#C69C4D] shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8F9FB] rounded-2xl border border-[#0B1D36]/10 p-6 space-y-4">
                <h3 className="font-display text-xl font-semibold text-[#0B1D36]">
                  Communes voisines desservies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {COMMUNES_LOCAL.filter((c) => c.slug !== activeCommune.slug).map((c) => (
                    <button
                      key={c.slug}
                      type="button"
                      onClick={() => onNavigate(`/zones-d-intervention/${c.slug}/`)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#0B1D36]/12 text-xs font-semibold text-[#0B1D36] hover:border-[#C69C4D] cursor-pointer"
                    >
                      {c.name} ({c.postalCode})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ConversionBlock
          onNavigate={onNavigate}
          title={`Un projet de menuiserie à ${activeCommune.name} ?`}
        />
      </div>
    );
  }

  return (
    <div>
      <section className="bg-[#0B1D36] text-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-medium text-[#C69C4D]">
            Périmètre géographique · Hérault (34)
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Zones d’intervention Saufra autour de Mauguio et Montpellier
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Basés à Mauguio, nous nous déplaçons à domicile dans toute l’agglomération
            montpelliéraine et le littoral héraultais (liste exacte des communes confirmée lors de
            la prise de rendez-vous).
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUNES_LOCAL.map((c) => (
            <article
              key={c.slug}
              onClick={() => onNavigate(`/zones-d-intervention/${c.slug}/`)}
              className="group bg-white rounded-2xl border border-[#0B1D36]/10 p-6 cursor-pointer hover:border-[#C69C4D] transition-colors flex flex-col justify-between gap-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5 font-medium text-[#0D3456]">
                    <MapPin className="w-3.5 h-3.5 text-[#C69C4D]" />
                    {c.distanceLabel}
                  </span>
                  <span className="tabular-nums">{c.postalCode}</span>
                </div>
                <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
                  {c.name}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{c.habitatProfile}</p>
              </div>
              <div className="pt-3 border-t border-[#0B1D36]/10 flex items-center justify-between text-sm font-semibold text-[#0B1D36] group-hover:text-[#C69C4D]">
                <span>Voir l’accompagnement local</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConversionBlock onNavigate={onNavigate} />
    </div>
  );
};
