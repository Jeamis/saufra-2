import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { REALISATIONS } from '../data/saufraData';
import { ProjectRealisation } from '../types/saufra';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ConversionBlock } from '../components/ConversionBlock';

interface RealisationsPageProps {
  onNavigate: (path: string) => void;
}

const FILTER_TABS = [
  { id: 'tous', label: 'Toutes' },
  { id: 'pergolas', label: 'Pergolas' },
  { id: 'fenetres', label: 'Fenêtres' },
  { id: 'volets', label: 'Volets' },
  { id: 'portes', label: 'Portes' },
  { id: 'verandas', label: 'Vérandas' },
];

export const RealisationsPage: React.FC<RealisationsPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [selectedProject, setSelectedProject] = useState<ProjectRealisation | null>(null);

  const filtered = REALISATIONS.filter((r) =>
    activeFilter === 'tous' ? true : r.category === activeFilter
  );

  return (
    <div>
      <section className="bg-[#0B1D36] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-medium text-[#C69C4D]">Galerie chantiers · Hérault (34)</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Réalisations Saufra Menuiseries
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Découvrez des exemples d’installations de pergolas bioclimatiques, fenêtres, volets,
            portes et vérandas. Les nouvelles photos de chantiers Saufra viendront enrichir cette
            galerie au fil des livraisons.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-[#0B1D36]/10">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#0B1D36] text-white'
                      : 'text-slate-600 hover:text-[#0B1D36]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 tabular-nums">
              {filtered.length} réalisation{filtered.length > 1 ? 's' : ''} affichée
              {filtered.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="group bg-white rounded-2xl border border-[#0B1D36]/10 overflow-hidden cursor-pointer hover:border-[#C69C4D] transition-colors flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-[#0B1D36]/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.commune}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.material}</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-[#0B1D36]">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Comparison */}
          <div className="pt-12 border-t border-[#0B1D36]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-semibold text-[#0D3456]">Comparateur visuel</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
                Terrasse ouverte ou pergola équipée de stores ZIP
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Faites glisser le curseur ci-contre pour comparer deux configurations d’ombrage et
                de protection latérale sur pergola bioclimatique aluminium.
              </p>
            </div>
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage="/assets/saufra/pergola-real-3.png"
                afterImage="/assets/saufra/pergola-real-7.png"
                beforeLabel="Lames ouvertes sans stores"
                afterLabel="Avec stores ZIP latéraux"
                caption="Exemple comparatif entre pergola adossée ouverte et pergola équipée de stores verticaux coupe-vent."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#0B1D36]/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#0B1D36]/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-100 aspect-[16/10]">
              <img
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Fermer l’aperçu"
                className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-[#0B1D36] text-white flex items-center justify-center hover:bg-[#0D3456] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-2">
              <p className="text-xs text-slate-500">
                {selectedProject.categoryLabel} · {selectedProject.commune} ·{' '}
                {selectedProject.material}
              </p>
              <h3 className="font-display text-2xl font-semibold text-[#0B1D36]">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-600">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <ConversionBlock onNavigate={onNavigate} />
    </div>
  );
};
