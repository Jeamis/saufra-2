import React from 'react';
import { Check, Shield, Ruler, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, TRUST_PILLARS } from '../data/saufraData';
import { ConversionBlock } from '../components/ConversionBlock';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

const ICONS = [Shield, Ruler, MapPin, MessageSquare];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <section className="bg-[#0B1D36] text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-medium text-[#C69C4D]">À propos de Saufra · SARL SFBT</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Menuiserie et rénovation sur mesure à Mauguio et dans l’Hérault
            </h1>
            <p className="text-base text-white/85 leading-relaxed max-w-2xl">
              {COMPANY_INFO.slogans.secondary} Dirigée par {COMPANY_INFO.director}, l’entreprise
              Saufra (raison sociale {COMPANY_INFO.legalName}) met son expérience terrain au service
              des propriétaires de maisons individuelles, villas et appartements.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 text-center space-y-3">
              <img
                src={COMPANY_INFO.logoLight}
                alt="Logo Saufra"
                className="h-28 w-28 mx-auto object-contain"
              />
              <p className="font-display text-xl font-semibold text-[#0B1D36]">
                « {COMPANY_INFO.slogans.primary} »
              </p>
              <p className="text-xs text-slate-500">
                {COMPANY_INFO.legalName} · Capital {COMPANY_INFO.capital} · Mauguio (34130)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold text-[#0D3456]">Notre histoire & notre identité</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
                Une nouvelle identité indépendante centrée sur la proximité
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Opérant historiquement autour de Mauguio et de Montpellier Métropole (précédemment
                sous l’enseigne Mondial Habitat avant son évolution indépendante), notre structure
                poursuit son accompagnement des particuliers sous la marque <strong>Saufra</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Notre priorité reste identique : offrir un conseil technique franc lors de la
                visite à domicile, sélectionner des menuiseries durables (aluminium, PVC, bois) et
                assurer une pose propre et maîtrisée de vos pergolas, fenêtres, volets, portes,
                stores et vérandas.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#F8F9FB] rounded-2xl border border-[#0B1D36]/10 p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-xl font-semibold text-[#0B1D36]">
                Nos engagements de chantier
              </h3>
              <ul className="space-y-3 text-sm text-[#0B1D36]">
                {[
                  'Devis gratuit et personnalisé établi après prise de cotes à votre domicile',
                  'Menuiseries fabriquées sur mesure selon les normes techniques en vigueur',
                  'Garantie décennale applicable sur les travaux de pose',
                  'Installateurs qualifiés veillant à la propreté du chantier et aux finitions',
                  'Accompagnement possible dans la constitution des dossiers de financement',
                  'Majorité des produits issus de fabrications françaises (précisé par gamme)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C69C4D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#0B1D36]/10">
            {TRUST_PILLARS.map((pillar, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={pillar.id}
                  className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#0B1D36]/10 space-y-2.5"
                >
                  <Icon className="w-5 h-5 text-[#C69C4D]" />
                  <h3 className="font-display text-lg font-semibold text-[#0B1D36]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ConversionBlock onNavigate={onNavigate} />
    </div>
  );
};
