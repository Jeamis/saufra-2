import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SITE_ROUTES } from '../data/saufraData';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const MentionsLegalesPage: React.FC = () => {
  return (
    <div className="bg-white py-14 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        <header className="space-y-2 border-b border-[#0B1D36]/10 pb-6">
          <p className="text-xs font-semibold text-[#0D3456]">Informations réglementaires</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#0B1D36]">
            Mentions Légales
          </h1>
        </header>

        <section className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
          <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">L’entreprise</h2>
          <p>
            <strong>Dénomination sociale :</strong> {COMPANY_INFO.legalName}
            <br />
            <strong>Nom commercial :</strong> {COMPANY_INFO.fullTitle}
            <br />
            <strong>Forme juridique :</strong> {COMPANY_INFO.legalForm}
            <br />
            <strong>Capital social :</strong> {COMPANY_INFO.capital}
            <br />
            <strong>Numéro SIRET :</strong>{' '}
            <span className="tabular-nums">{COMPANY_INFO.siret}</span>
            <br />
            <strong>N° TVA intracommunautaire :</strong> {COMPANY_INFO.tva}
            <br />
            <strong>Adresse :</strong> {COMPANY_INFO.addressLine} ({COMPANY_INFO.addressNote})
          </p>
          <p className="pt-2">
            En cas de litige, vous avez la possibilité de contacter notre Médiateur de la
            consommation affilié à notre entreprise :
            <br />
            <strong>{COMPANY_INFO.mediator}</strong>
          </p>
        </section>

        <section className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
          <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">L’éditeur du site</h2>
          <p>
            {COMPANY_INFO.legalName} — Représentée par {COMPANY_INFO.director}.
          </p>
        </section>

        <section className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
          <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
            Hébergement du site
          </h2>
          <p>
            Hébergé par {COMPANY_INFO.hostName}
            <br />
            Adresse : {COMPANY_INFO.hostAddress}
            <br />
            Téléphone : <span className="tabular-nums">{COMPANY_INFO.hostPhone}</span>
          </p>
        </section>

        <section className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
          <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
            Propriété intellectuelle
          </h2>
          <p>
            L’intégralité du site est protégée par les législations françaises et internationales
            relatives à la propriété intellectuelle. Tous les droits de reproduction et de
            représentation sont réservés. Toutes reproductions et représentations sont soumises à
            l’accord exprès et préalable de {COMPANY_INFO.legalName}. Le non-respect de cette
            obligation constitue une contrefaçon engageant la responsabilité civile et pénale de son
            auteur.
          </p>
        </section>
      </div>
    </div>
  );
};

export const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <div className="bg-white py-14 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
        <header className="space-y-2 border-b border-[#0B1D36]/10 pb-6">
          <p className="text-xs font-semibold text-[#0D3456]">Protection des données (RGPD)</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#0B1D36]">
            Politique de confidentialité
          </h1>
        </header>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-semibold text-[#0B1D36]">
            1. Responsable du traitement
          </h2>
          <p>
            Les données collectées via les formulaires du site sauframenuiseries.fr sont traitées
            par {COMPANY_INFO.legalName} ({COMPANY_INFO.fullTitle}), dont le siège se situe à
            Mauguio (34130).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-semibold text-[#0B1D36]">
            2. Finalité et durée de conservation
          </h2>
          <p>
            Les informations saisies (nom, coordonnées, commune, caractéristiques techniques et
            photos éventuelles) servent exclusivement à étudier votre projet, établir un devis et
            organiser la visite technique. Elles ne sont ni cédées ni vendues à des tiers et sont
            conservées au maximum 3 ans à compter du dernier échange sans suite commerciale.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-semibold text-[#0B1D36]">
            3. Vos droits et gestion des cookies
          </h2>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit
            d’accès, de rectification, d’effacement et d’opposition concernant vos données
            personnelles. Vous pouvez exercer ces droits en écrivant à {COMPANY_INFO.legalName}. Le
            bandeau cookies vous permet à tout moment d’accepter ou de refuser les traceurs de
            mesure d’audience.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="font-display text-xl font-semibold text-[#0B1D36]">
            4. Services cartographiques (Google Maps)
          </h2>
          <p>
            La page Contact intègre une carte interactive fournie par Google Maps Platform afin de
            localiser notre secteur d’intervention à Mauguio (34130). L’utilisation de ces
            fonctionnalités est soumise aux{' '}
            <a
              href="https://maps.google.com/help/terms_maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#0B1D36] hover:text-[#C69C4D]"
            >
              Conditions d’utilisation supplémentaires de Google Maps
            </a>{' '}
            ainsi qu’aux{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#0B1D36] hover:text-[#C69C4D]"
            >
              Règles de confidentialité de Google
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export const PlanDuSitePage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white py-14 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <header className="space-y-2 border-b border-[#0B1D36]/10 pb-6">
          <p className="text-xs font-semibold text-[#0D3456]">Arborescence complète</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#0B1D36]">
            Plan du site Saufra Menuiseries
          </h1>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SITE_ROUTES.map((route) => (
            <li key={route.path}>
              <button
                type="button"
                onClick={() => onNavigate(route.path)}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#F8F9FB] hover:bg-[#0B1D36] hover:text-white border border-[#0B1D36]/10 text-sm font-medium text-[#0B1D36] transition-colors text-left cursor-pointer"
              >
                <span>{route.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const NotFoundPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8F9FB] py-20">
      <div className="max-w-xl mx-auto px-4 text-center space-y-5">
        <p className="font-display text-5xl font-bold text-[#C69C4D] tabular-nums">404</p>
        <h1 className="font-display text-3xl font-semibold text-[#0B1D36]">Page introuvable</h1>
        <p className="text-sm text-slate-600">
          La page que vous recherchez a peut-être été déplacée. Retrouvez nos services ou demandez
          directement votre devis gratuit.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="px-5 py-2.5 rounded-lg bg-[#0B1D36] text-white text-sm font-semibold cursor-pointer"
          >
            Retour à l’accueil
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/devis-gratuit/')}
            className="px-5 py-2.5 rounded-lg bg-[#C69C4D] text-[#0B1D36] text-sm font-semibold cursor-pointer"
          >
            Devis gratuit
          </button>
        </div>
      </div>
    </div>
  );
};
