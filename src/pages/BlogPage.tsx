import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/saufraData';
import { ConversionBlock } from '../components/ConversionBlock';

interface BlogPageProps {
  articleSlug?: string;
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ articleSlug, onNavigate }) => {
  const activeArticle = articleSlug
    ? BLOG_ARTICLES.find((a) => a.slug === articleSlug)
    : undefined;

  if (activeArticle) {
    return (
      <div>
        <article className="bg-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
            <button
              type="button"
              onClick={() => onNavigate('/blog/')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D3456] hover:text-[#C69C4D] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Tous les guides conseils</span>
            </button>

            <header className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.updatedAt}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#0B1D36] leading-tight">
                {activeArticle.title}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">{activeArticle.excerpt}</p>
            </header>

            <div className="rounded-2xl overflow-hidden border border-[#0B1D36]/10 aspect-[16/10] bg-slate-100">
              <img
                src={activeArticle.image}
                alt={activeArticle.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-8">
              {activeArticle.sections.map((sec) => (
                <section key={sec.heading} className="space-y-3">
                  <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul className="space-y-2 pt-1">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-[#0B1D36]">
                          <Check className="w-4 h-4 text-[#C69C4D] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="bg-[#F8F9FB] rounded-2xl border border-[#0B1D36]/10 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">Aller plus loin</p>
                <p className="font-display text-lg font-semibold text-[#0B1D36]">
                  {activeArticle.relatedServiceLabel}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate(activeArticle.relatedServicePath)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B1D36] text-white text-sm font-semibold hover:bg-[#0D3456] shrink-0 cursor-pointer"
              >
                <span>Découvrir</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>

        <ConversionBlock onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div>
      <section className="bg-[#0B1D36] text-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-medium text-[#C69C4D]">Guides pratiques · Hérault</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Blog & conseils menuiserie Saufra
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Comparatifs matériaux, démarches d’urbanisme, entretien et choix techniques pour bien
            préparer votre projet à Mauguio et Montpellier.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_ARTICLES.map((art) => (
            <article
              key={art.slug}
              onClick={() => onNavigate(`/blog/${art.slug}/`)}
              className="group bg-white rounded-2xl border border-[#0B1D36]/10 overflow-hidden cursor-pointer hover:border-[#C69C4D] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{art.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-[#0B1D36] leading-snug">
                    {art.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{art.excerpt}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-sm font-semibold text-[#0D3456] group-hover:text-[#C69C4D]">
                <span>Lire le guide</span>
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
