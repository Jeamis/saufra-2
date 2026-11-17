import React, { useEffect, useState } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { CookieBanner } from './components/CookieBanner';
import { HomePage } from './pages/HomePage';
import { PergolasPage } from './pages/PergolasPage';
import { ServiceCatalogPage } from './pages/ServiceCatalogPage';
import { RealisationsPage } from './pages/RealisationsPage';
import { AboutPage } from './pages/AboutPage';
import { LocalZonesPage } from './pages/LocalZonesPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage, DevisPage } from './pages/ContactPage';
import {
  MentionsLegalesPage,
  NotFoundPage,
  PlanDuSitePage,
  PolitiqueConfidentialitePage,
} from './pages/LegalPages';
import { BLOG_ARTICLES, COMMUNES_LOCAL, SERVICE_FAMILIES } from './data/saufraData';

function normalizePath(raw: string): string {
  if (!raw || raw === '/') return '/';
  const cleaned = raw.split('?')[0].split('#')[0];
  return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
}

interface ResolvedRoute {
  element: React.ReactNode;
  title: string;
  description: string;
  breadcrumbs: { label: string; path: string }[];
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(window.location.pathname)
  );
  const [gmpQuotaExceeded, setGmpQuotaExceeded] = useState(false);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    const onQuotaExceeded = () => {
      setGmpQuotaExceeded(true);
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('gmp-quota-exceeded', onQuotaExceeded);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('gmp-quota-exceeded', onQuotaExceeded);
    };
  }, []);

  const navigate = (targetPath: string) => {
    const normalized = normalizePath(targetPath);
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resolveRoute = (path: string): ResolvedRoute => {
    if (path === '/') {
      return {
        element: <HomePage onNavigate={navigate} />,
        title: 'Saufra | Pergolas, fenêtres, volets et portes à Mauguio (34)',
        description:
          'Menuiserie et rénovation sur mesure à Mauguio et Montpellier : pergolas bioclimatiques, fenêtres, volets, portes, stores et vérandas. Devis gratuit.',
        breadcrumbs: [],
      };
    }

    if (path === '/pergolas-bioclimatiques/') {
      const s = SERVICE_FAMILIES.find((f) => f.id === 'pergolas')!;
      return {
        element: <PergolasPage onNavigate={navigate} />,
        title: s.metaTitle,
        description: s.metaDescription,
        breadcrumbs: [{ label: 'Pergolas bioclimatiques', path }],
      };
    }

    // Fenetres
    if (path === '/fenetres/' || path.startsWith('/fenetres/')) {
      const s = SERVICE_FAMILIES.find((f) => f.id === 'fenetres')!;
      const subSlug = path === '/fenetres/' ? undefined : path.replace('/fenetres/', '').replace('/', '');
      const sub = subSlug ? s.subServices.find((x) => x.slug === subSlug) : undefined;
      if (subSlug && !sub) {
        return {
          element: <NotFoundPage onNavigate={navigate} />,
          title: 'Page introuvable | Saufra Menuiseries',
          description: 'Cette page n’existe pas sur Saufra Menuiseries.',
          breadcrumbs: [{ label: '404', path }],
        };
      }
      return {
        element: <ServiceCatalogPage category="fenetres" subSlug={sub?.slug} onNavigate={navigate} />,
        title: sub ? sub.metaTitle : s.metaTitle,
        description: sub ? sub.metaDescription : s.metaDescription,
        breadcrumbs: sub
          ? [
              { label: 'Fenêtres', path: '/fenetres/' },
              { label: sub.shortTitle, path },
            ]
          : [{ label: 'Fenêtres', path }],
      };
    }

    // Volets
    if (path === '/volets/' || path.startsWith('/volets/')) {
      const s = SERVICE_FAMILIES.find((f) => f.id === 'volets')!;
      const subSlug = path === '/volets/' ? undefined : path.replace('/volets/', '').replace('/', '');
      const sub = subSlug ? s.subServices.find((x) => x.slug === subSlug) : undefined;
      if (subSlug && !sub) {
        return {
          element: <NotFoundPage onNavigate={navigate} />,
          title: 'Page introuvable | Saufra Menuiseries',
          description: 'Cette page n’existe pas sur Saufra Menuiseries.',
          breadcrumbs: [{ label: '404', path }],
        };
      }
      return {
        element: <ServiceCatalogPage category="volets" subSlug={sub?.slug} onNavigate={navigate} />,
        title: sub ? sub.metaTitle : s.metaTitle,
        description: sub ? sub.metaDescription : s.metaDescription,
        breadcrumbs: sub
          ? [
              { label: 'Volets', path: '/volets/' },
              { label: sub.shortTitle, path },
            ]
          : [{ label: 'Volets', path }],
      };
    }

    // Portes
    if (path === '/portes/' || path.startsWith('/portes/')) {
      const s = SERVICE_FAMILIES.find((f) => f.id === 'portes')!;
      const subSlug = path === '/portes/' ? undefined : path.replace('/portes/', '').replace('/', '');
      const sub = subSlug ? s.subServices.find((x) => x.slug === subSlug) : undefined;
      if (subSlug && !sub) {
        return {
          element: <NotFoundPage onNavigate={navigate} />,
          title: 'Page introuvable | Saufra Menuiseries',
          description: 'Cette page n’existe pas sur Saufra Menuiseries.',
          breadcrumbs: [{ label: '404', path }],
        };
      }
      return {
        element: <ServiceCatalogPage category="portes" subSlug={sub?.slug} onNavigate={navigate} />,
        title: sub ? sub.metaTitle : s.metaTitle,
        description: sub ? sub.metaDescription : s.metaDescription,
        breadcrumbs: sub
          ? [
              { label: 'Portes', path: '/portes/' },
              { label: sub.shortTitle, path },
            ]
          : [{ label: 'Portes', path }],
      };
    }

    // Stores
    if (path === '/stores/' || path.startsWith('/stores/')) {
      const s = SERVICE_FAMILIES.find((f) => f.id === 'stores')!;
      const subSlug = path === '/stores/' ? undefined : path.replace('/stores/', '').replace('/', '');
      const sub = subSlug ? s.subServices.find((x) => x.slug === subSlug) : undefined;
      if (subSlug && !sub) {
        return {
          element: <NotFoundPage onNavigate={navigate} />,
          title: 'Page introuvable | Saufra Menuiseries',
          description: 'Cette page n’existe pas sur Saufra Menuiseries.',
          breadcrumbs: [{ label: '404', path }],
        };
      }
      return {
        element: <ServiceCatalogPage category="stores" subSlug={sub?.slug} onNavigate={navigate} />,
        title: sub ? sub.metaTitle : s.metaTitle,
        description: sub ? sub.metaDescription : s.metaDescription,
        breadcrumbs: sub
          ? [
              { label: 'Stores', path: '/stores/' },
              { label: sub.shortTitle, path },
            ]
          : [{ label: 'Stores', path }],
      };
    }

    if (path === '/verandas-extensions/') {
      const s = SERVICE_FAMILIES.find((f) => f.id === 'verandas')!;
      return {
        element: <ServiceCatalogPage category="verandas" onNavigate={navigate} />,
        title: s.metaTitle,
        description: s.metaDescription,
        breadcrumbs: [{ label: 'Vérandas & extensions', path }],
      };
    }

    if (path === '/climatisation/') {
      const s = SERVICE_FAMILIES.find((f) => f.id === 'climatisation')!;
      return {
        element: <ServiceCatalogPage category="climatisation" onNavigate={navigate} />,
        title: s.metaTitle,
        description: s.metaDescription,
        breadcrumbs: [{ label: 'Climatisation', path }],
      };
    }

    if (path === '/realisations/') {
      return {
        element: <RealisationsPage onNavigate={navigate} />,
        title: 'Réalisations pergolas, fenêtres et volets Hérault | Saufra',
        description:
          'Galerie de réalisations Saufra Menuiseries dans l’Hérault : pergolas bioclimatiques, fenêtres, volets, portes et vérandas sur mesure.',
        breadcrumbs: [{ label: 'Réalisations', path }],
      };
    }

    if (path === '/a-propos/') {
      return {
        element: <AboutPage onNavigate={navigate} />,
        title: 'À propos de Saufra Menuiseries (SARL SFBT) | Mauguio',
        description:
          'Découvrez Saufra Menuiseries à Mauguio : équipe, engagements qualité, fabrication sur mesure et accompagnement de proximité.',
        breadcrumbs: [{ label: 'À propos', path }],
      };
    }

    if (path === '/zones-d-intervention/' || path.startsWith('/zones-d-intervention/')) {
      const slug =
        path === '/zones-d-intervention/'
          ? undefined
          : path.replace('/zones-d-intervention/', '').replace('/', '');
      const commune = slug ? COMMUNES_LOCAL.find((c) => c.slug === slug) : undefined;
      if (slug && !commune) {
        return {
          element: <NotFoundPage onNavigate={navigate} />,
          title: 'Page introuvable | Saufra Menuiseries',
          description: 'Cette page n’existe pas sur Saufra Menuiseries.',
          breadcrumbs: [{ label: '404', path }],
        };
      }
      return {
        element: <LocalZonesPage communeSlug={commune?.slug} onNavigate={navigate} />,
        title: commune
          ? commune.metaTitle
          : 'Zones d’intervention Mauguio, Montpellier & Hérault | Saufra',
        description: commune
          ? commune.metaDescription
          : 'Saufra intervient à Mauguio, Montpellier, Pérols, Lattes, Castelnau-le-Lez, Baillargues, Lunel, La Grande-Motte, Carnon et Palavas.',
        breadcrumbs: commune
          ? [
              { label: 'Zones d’intervention', path: '/zones-d-intervention/' },
              { label: commune.name, path },
            ]
          : [{ label: 'Zones d’intervention', path }],
      };
    }

    if (path === '/blog/' || path.startsWith('/blog/')) {
      const slug = path === '/blog/' ? undefined : path.replace('/blog/', '').replace('/', '');
      const article = slug ? BLOG_ARTICLES.find((a) => a.slug === slug) : undefined;
      if (slug && !article) {
        return {
          element: <NotFoundPage onNavigate={navigate} />,
          title: 'Page introuvable | Saufra Menuiseries',
          description: 'Cette page n’existe pas sur Saufra Menuiseries.',
          breadcrumbs: [{ label: '404', path }],
        };
      }
      return {
        element: <BlogPage articleSlug={article?.slug} onNavigate={navigate} />,
        title: article ? article.metaTitle : 'Blog & Conseils Menuiserie Hérault | Saufra',
        description: article
          ? article.metaDescription
          : 'Guides pratiques sur les pergolas bioclimatiques, fenêtres PVC/alu/bois, volets et autorisations d’urbanisme.',
        breadcrumbs: article
          ? [
              { label: 'Blog', path: '/blog/' },
              { label: article.category, path },
            ]
          : [{ label: 'Blog & Conseils', path }],
      };
    }

    if (path === '/devis-gratuit/') {
      return {
        element: <DevisPage />,
        title: 'Devis gratuit menuiserie & pergola Mauguio | Saufra',
        description:
          'Demandez votre devis gratuit en 3 étapes pour votre pergola bioclimatique, vos fenêtres, volets ou portes à Mauguio et Montpellier.',
        breadcrumbs: [{ label: 'Devis gratuit', path }],
      };
    }

    if (path === '/contact/') {
      return {
        element: <ContactPage />,
        title: 'Contact Saufra Menuiseries Mauguio (34130)',
        description:
          'Contactez Saufra Menuiseries à Mauguio : coordonnées, demande de devis, WhatsApp et horaires d’intervention dans l’Hérault.',
        breadcrumbs: [{ label: 'Contact', path }],
      };
    }

    if (path === '/mentions-legales/') {
      return {
        element: <MentionsLegalesPage />,
        title: 'Mentions légales | Saufra Menuiseries (SARL SFBT)',
        description: 'Mentions légales de Saufra Menuiseries (SARL SFBT), hébergement PlanetHoster et médiateur.',
        breadcrumbs: [{ label: 'Mentions légales', path }],
      };
    }

    if (path === '/politique-de-confidentialite/') {
      return {
        element: <PolitiqueConfidentialitePage />,
        title: 'Politique de confidentialité & RGPD | Saufra Menuiseries',
        description: 'Politique de protection des données personnelles et gestion des cookies de Saufra Menuiseries.',
        breadcrumbs: [{ label: 'Politique de confidentialité', path }],
      };
    }

    if (path === '/plan-du-site/') {
      return {
        element: <PlanDuSitePage onNavigate={navigate} />,
        title: 'Plan du site | Saufra Menuiseries',
        description: 'Arborescence complète des services, communes et guides Saufra Menuiseries.',
        breadcrumbs: [{ label: 'Plan du site', path }],
      };
    }

    return {
      element: <NotFoundPage onNavigate={navigate} />,
      title: 'Page introuvable | Saufra Menuiseries',
      description: 'Page introuvable sur Saufra Menuiseries.',
      breadcrumbs: [{ label: 'Page introuvable', path }],
    };
  };

  const resolved = resolveRoute(currentPath);

  useEffect(() => {
    document.title = resolved.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', resolved.description);
    }
  }, [resolved.title, resolved.description]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#0B1D36]">
      {gmpQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Fil d'Ariane on all internal pages */}
      {resolved.breadcrumbs.length > 0 && (
        <nav
          aria-label="Fil d’Ariane"
          className="bg-white border-b border-[#0B1D36]/10 py-2.5 text-xs text-slate-600"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-1 hover:text-[#0B1D36] cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Accueil</span>
            </button>
            {resolved.breadcrumbs.map((crumb, idx) => {
              const isLast = idx === resolved.breadcrumbs.length - 1;
              return (
                <React.Fragment key={crumb.path}>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  {isLast ? (
                    <span className="font-semibold text-[#0B1D36]">{crumb.label}</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => navigate(crumb.path)}
                      className="hover:text-[#0B1D36] cursor-pointer"
                    >
                      {crumb.label}
                    </button>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </nav>
      )}

      <main className="flex-1">{resolved.element}</main>

      <Footer onNavigate={navigate} />
      <MobileActionBar onNavigate={navigate} />
      <CookieBanner onNavigate={navigate} />
    </div>
  );
}
