import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/saufraData';
import { QuickQuoteForm, QuoteFunnel } from '../components/QuoteFunnel';
import { MauguioGoogleMap } from '../components/MauguioGoogleMap';

export const DevisPage: React.FC = () => {
  return (
    <div className="bg-[#F8F9FB] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold text-[#0D3456]">
            Étude personnalisée gratuite · Mauguio & Hérault
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1D36]">
            Demandez votre devis gratuit et sans engagement
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Décrivez votre projet en trois étapes simples. Un conseiller Saufra vous recontacte pour
            convenance d’une visite technique à votre domicile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <QuoteFunnel />
          </div>

          <aside className="lg:col-span-4 space-y-5">
            <div className="bg-[#0B1D36] text-white rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-[#C69C4D]">
                <ShieldCheck className="w-5 h-5" />
                <h2 className="font-display text-lg font-semibold text-white">
                  Vos garanties de sérénité
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-white/85">
                {[
                  'Déplacement à domicile pour la prise de cotes (offert sous réserve de zone)',
                  'Étude sur mesure adaptée à votre habitation',
                  'Pose par équipes qualifiées et garantie décennale',
                  'Aucun engagement avant validation finale de votre devis',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C69C4D] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#0B1D36]/10 p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#0B1D36]">
                Besoin d’un échange immédiat ?
              </h3>
              <div className="space-y-2.5">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#F8F9FB] border border-[#0B1D36]/15 text-sm font-semibold text-[#0B1D36] hover:border-[#C69C4D]"
                >
                  <Phone className="w-4 h-4 text-[#C69C4D]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#0B1D36] text-white text-sm font-semibold hover:bg-[#0D3456]"
                >
                  <MessageCircle className="w-4 h-4 text-[#C69C4D]" />
                  <span>Écrire sur WhatsApp</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  return (
    <div>
      <section className="bg-[#0B1D36] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-medium text-[#C69C4D]">Mauguio · Montpellier Métropole</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Contacter Saufra Menuiseries
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl">
            Confiez-nous votre projet ou posez vos questions techniques. Nous intervenons sur
            Mauguio, Montpellier et l’ensemble de l’Hérault.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#0B1D36]/10 p-6 space-y-5">
              <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
                Coordonnées pratiques
              </h2>
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C69C4D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0B1D36]">{COMPANY_INFO.addressLine}</p>
                    <p className="text-xs text-slate-500">{COMPANY_INFO.addressNote}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C69C4D] shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="font-semibold text-[#0B1D36] hover:text-[#C69C4D]"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-500">Ligne directe (numéro à confirmer)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C69C4D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0B1D36]">{COMPANY_INFO.emailDisplay}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C69C4D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0B1D36]">Horaires</p>
                    <p className="text-xs text-slate-500">{COMPANY_INFO.hoursDisplay}</p>
                  </div>
                </div>
              </div>

              <a
                href={COMPANY_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#0B1D36] hover:bg-[#0D3456] text-white text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C69C4D]" />
                <span>Discuter via WhatsApp</span>
              </a>
            </div>

            <MauguioGoogleMap />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36]">
              Confiez-nous votre projet
            </h2>
            <p className="text-sm text-slate-600">
              Utilisez ce formulaire rapide ou accédez au configurateur détaillé en 3 étapes pour
              joindre des photos.
            </p>
            <QuickQuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
};
