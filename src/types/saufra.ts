export type ServiceCategory =
  | 'pergolas'
  | 'fenetres'
  | 'volets'
  | 'portes'
  | 'stores'
  | 'verandas'
  | 'climatisation';

export interface SubServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  image: string;
  imageAlt: string;
  summary: string;
  paragraphs: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  notice?: string;
}

export interface ServiceFamily {
  id: ServiceCategory;
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  features: { title: string; description: string }[];
  subServices: SubServiceDetail[];
  faqs: { question: string; answer: string }[];
  notice?: string;
}

export interface ProjectRealisation {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  commune: string;
  material: string;
  description: string;
  image: string;
  imageAlt: string;
  isClientPhoto: boolean;
}

export interface CommuneLocalPage {
  slug: string;
  name: string;
  postalCode: string;
  distanceLabel: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  habitatProfile: string;
  localConstraints: string;
  recommendedSolutions: string[];
  nearbyCommunes: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  updatedAt: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  relatedServicePath: string;
  relatedServiceLabel: string;
}

export interface QuoteFormData {
  projectTypes: string[];
  openingCount: string;
  propertyType: 'maison' | 'appartement';
  material: string;
  timeline: string;
  photos: { name: string; previewUrl: string; sizeLabel: string }[];
  ownerStatus: 'proprietaire' | 'locataire';
  fullName: string;
  phone: string;
  email: string;
  city: string;
  callbackSlot: string;
  message: string;
  rgpdConsent: boolean;
}
