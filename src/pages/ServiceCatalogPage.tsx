import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, AlertCircle } from 'lucide-react';
import {
  SERVICE_FAMILIES,
  WINDOW_COMPARISON_ROWS,
  STORE_GALLERY_ITEMS,
} from '../data/saufraData';
import { ServiceCategory } from '../types/saufra';
import { ConversionBlock } from '../components/ConversionBlock';

interface ServiceCatalogPageProps {
  category: ServiceCategory;
  subSlug?: string;
  onNavigate: (path: string) => void;
}

export const ServiceCatalogPage: React.FC<ServiceCatalogPageProps> = ({
  category,
  subSlug,
  onNavigate,
}) => {
  const family = SERVICE_FAMILIES.find((f) => f.id === category)!;
  const activeSub = subSlug
    ? family.subServices.find((s) => s.slug === subSlug)
    : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-medium text-[#C69C4D]">
                {family.title} · Mauguio & Montpellier
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight">
                {activeSub ? activeSub.title : family.heroTitle}
              </h1>
              <p className="text-base text-white/85 leading-relaxed max-w-2xl">
                {activeSub ? activeSub.tagline : family.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/devis-gratuit/')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C69C4D] hover:bg-[#B1883A] text-[#0B1D36] text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#C69C4D]/35 aspect-[16/10] bg-slate-900">
                <img
                  src={activeSub ? activeSub.image : family.heroImage}
                  alt={activeSub ? activeSub.imageAlt : family.heroImageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sub-navigation tabs if subServices exist */}
          {family.subServices.length > 0 && (
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onNavigate(family.slug)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  !activeSub
                    ? 'bg-[#C69C4D] text-[#0B1D36]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Vue d’ensemble {family.shortTitle}
              </button>
              {family.subServices.map((sub) => {
                const subPath = `${family.slug}${sub.slug}/`;
                const isActive = activeSub?.slug === sub.slug;
                return (
                  <button
                    key={sub.slug}
                    type="button"
                    onClick={() => onNavigate(subPath)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#C69C4D] text-[#0B1D36]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {sub.shortTitle}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Active Subservice Detail OR Overview */}
          {activeSub ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-5">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
                  {activeSub.summary}
                </h2>
                {activeSub.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}

                <div className="pt-2 space-y-2.5">
                  <h3 className="font-display text-lg font-semibold text-[#0B1D36]">
                    Points clés techniques
                  </h3>
                  <ul className="space-y-2.5">
                    {activeSub.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-[#0B1D36]">
                        <Check className="w-4 h-4 text-[#C69C4D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeSub.notice && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{activeSub.notice}</span>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 bg-[#F8F9FB] rounded-2xl border border-[#0B1D36]/10 p-6 space-y-4">
                <h3 className="font-display text-xl font-semibold text-[#0B1D36]">
                  Fiche récapitulative
                </h3>
                <dl className="divide-y divide-[#0B1D36]/10">
                  {activeSub.specs.map((sp) => (
                    <div key={sp.label} className="py-3 flex items-center justify-between gap-4 text-sm">
                      <dt className="text-slate-500">{sp.label}</dt>
                      <dd className="font-semibold text-[#0B1D36] text-right">{sp.value}</dd>
                    </div>
                  ))}
                </dl>
                <button
                  type="button"
                  onClick={() => onNavigate('/devis-gratuit/')}
                  className="w-full py-3 px-4 rounded-lg bg-[#0B1D36] hover:bg-[#0D3456] text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Chiffrer ce produit sur mesure
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
                    L’approche conseil Saufra pour votre projet
                  </h2>
                  {family.intro.map((p, i) => (
                    <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {family.notice && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{family.notice}</span>
                    </div>
                  )}
                </div>
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {family.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="p-4 rounded-xl bg-[#F8F9FB] border border-[#0B1D36]/10 space-y-1"
                    >
                      <h3 className="font-display text-base font-semibold text-[#0B1D36]">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-service Cards */}
              {family.subServices.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-[#0B1D36]/10">
                  <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
                    Explorez nos solutions {family.shortTitle.toLowerCase()}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {family.subServices.map((sub) => (
                      <article
                        key={sub.slug}
                        onClick={() => onNavigate(`${family.slug}${sub.slug}/`)}
                        className="group bg-[#F8F9FB] rounded-2xl border border-[#0B1D36]/10 overflow-hidden cursor-pointer hover:border-[#C69C4D] transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="aspect-[16/10] bg-slate-200 overflow-hidden">
                            <img
                              src={sub.image}
                              alt={sub.imageAlt}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                            />
                          </div>
                          <div className="p-5 space-y-2">
                            <h3 className="font-display text-xl font-semibold text-[#0B1D36]">
                              {sub.shortTitle}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{sub.summary}</p>
                          </div>
                        </div>
                        <div className="px-5 pb-5 pt-2 flex items-center gap-1.5 text-sm font-semibold text-[#0D3456] group-hover:text-[#C69C4D]">
                          <span>Voir le détail</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Windows Comparison Table */}
          {category === 'fenetres' && (
            <div className="pt-10 border-t border-[#0B1D36]/10 space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#0D3456]">Aide au choix</p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36] mt-1">
                  Comparatif : Fenêtres PVC, Aluminium ou Bois ?
                </h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-[#0B1D36]/10">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0B1D36] text-white">
                      <th className="py-3.5 px-4 font-semibold">Critère</th>
                      <th className="py-3.5 px-4 font-semibold">PVC</th>
                      <th className="py-3.5 px-4 font-semibold">Aluminium</th>
                      <th className="py-3.5 px-4 font-semibold">Bois</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B1D36]/10 bg-white">
                    {WINDOW_COMPARISON_ROWS.map((row) => (
                      <tr key={row.criterion} className="hover:bg-[#F8F9FB]">
                        <td className="py-3.5 px-4 font-semibold text-[#0B1D36]">{row.criterion}</td>
                        <td className="py-3.5 px-4 text-slate-700">{row.pvc}</td>
                        <td className="py-3.5 px-4 text-slate-700">{row.alu}</td>
                        <td className="py-3.5 px-4 text-slate-700">{row.bois}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Stores Photo Grid */}
          {category === 'stores' && (
            <div className="pt-10 border-t border-[#0B1D36]/10 space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#0D3456]">Catalogue visuel</p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36] mt-1">
                  Nos 6 gammes de stores intérieurs et extérieurs
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {STORE_GALLERY_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#F8F9FB] rounded-2xl border border-[#0B1D36]/10 overflow-hidden"
                  >
                    <div className="aspect-[4/3] bg-white overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-1.5">
                      <p className="text-xs text-slate-500">Store {item.category}</p>
                      <h3 className="font-display text-lg font-semibold text-[#0B1D36]">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {family.faqs.length > 0 && (
            <div className="pt-10 border-t border-[#0B1D36]/10 max-w-4xl space-y-6">
              <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
                Questions fréquentes — {family.shortTitle}
              </h2>
              <div className="divide-y divide-[#0B1D36]/10 border-y border-[#0B1D36]/10">
                {family.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-4">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 text-left font-display text-base sm:text-lg font-semibold text-[#0B1D36] cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#C69C4D] shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed pr-8">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <ConversionBlock onNavigate={onNavigate} />
    </div>
  );
};
