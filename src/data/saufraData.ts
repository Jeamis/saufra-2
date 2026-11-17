import {
  BlogArticle,
  CommuneLocalPage,
  ProjectRealisation,
  ServiceFamily,
} from '../types/saufra';

export const COMPANY_INFO = {
  brandName: 'Saufra',
  fullTitle: 'Saufra – Menuiserie & Rénovation',
  legalName: 'SARL SFBT',
  legalForm: 'Société à responsabilité limitée',
  capital: '20 000,00 €',
  siret: '983 112 343 00014',
  tva: 'FR49983112343',
  director: 'M. Sauveur Benayoun',
  mediator: 'M. Patrice Gerard – 06 26 48 16 06',
  addressLine: 'Rue Roland Garros, 34130 Mauguio',
  addressNote: 'ZAC Fréjorgues Ouest — adresse exacte à confirmer avec Saufra',
  phoneDisplay: '04 67 00 00 00 (à confirmer)',
  phoneHref: 'tel:+33467000000',
  whatsappHref:
    'https://wa.me/33600000000?text=Bonjour%20Saufra%2C%20je%20souhaite%20un%20devis%20gratuit%20pour%20mon%20projet%20de%20menuiserie.',
  emailDisplay: 'contact@sauframenuiseries.fr (à confirmer)',
  hoursDisplay: 'Lun – Ven : 9h00 – 18h00 · Sam sur rendez-vous (à confirmer)',
  facebookLabel: 'Page Facebook « Saufra » (lien à confirmer)',
  hostName: 'PlanetHoster',
  hostAddress: '4416 Rue Louis-B.-Mayer, Laval, QC H7P 0G1, Canada',
  hostPhone: '+1 844-629-6753',
  slogans: {
    primary: 'Aménagez votre quotidien',
    secondary: 'Du projet à la pose, on est à vos côtés !',
  },
  logoLight: '/assets/aistudio/image_da6d9a56.png',
  bannerImage: '/assets/aistudio/image_1085c8cf.png',
  classicPergolaSheet: '/assets/aistudio/image_3c4378a5.png',
};

export const TRUST_PILLARS = [
  {
    id: 'qualite',
    title: 'Qualité',
    subtitle: 'Profilés durables & finitions contrôlées',
    description:
      'Sélection rigoureuse de menuiseries aluminium, PVC et bois conçues pour résister au soleil méditerranéen et au vent côtier.',
  },
  {
    id: 'sur-mesure',
    title: 'Sur mesure',
    subtitle: 'Prise de cotes précise à domicile',
    description:
      'Chaque pergola, fenêtre, volet ou porte est dimensionné au millimètre pour épouser l’architecture de votre villa ou appartement.',
  },
  {
    id: 'proximite',
    title: 'Proximité',
    subtitle: 'Basés à Mauguio, actifs dans l’Hérault',
    description:
      'Une équipe locale réactive sur Montpellier Métropole et le littoral pour vous accompagner avant, pendant et après la pose.',
  },
  {
    id: 'conseil',
    title: 'Conseil',
    subtitle: 'Étude technique & chiffrage transparents',
    description:
      'Visite sur place pour valider l’orientation solaire, les contraintes d’isolation phonique ou thermique et la solution la plus juste.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Vous nous contactez',
    description:
      'Décrivez votre besoin par formulaire, téléphone ou WhatsApp en moins de deux minutes, avec ou sans mesures préalables.',
  },
  {
    step: '02',
    title: 'Visite technique & devis gratuit',
    description:
      'Nous nous déplaçons à votre domicile à Mauguio, Montpellier et alentours pour prendre les cotes et chiffrer votre projet sans engagement.',
  },
  {
    step: '03',
    title: 'Fabrication sur mesure',
    description:
      'Vos menuiseries ou votre pergola sont fabriquées selon vos teintes, vitrages et options de motorisation validés ensemble.',
  },
  {
    step: '04',
    title: 'Pose soignée & suivi',
    description:
      'Nos poseurs réalisent l’installation proprement, testent les réglages et restent disponibles pour le suivi de vos équipements.',
  },
];

export const SERVICE_FAMILIES: ServiceFamily[] = [
  {
    id: 'pergolas',
    slug: '/pergolas-bioclimatiques/',
    title: 'Pergolas bioclimatiques',
    shortTitle: 'Pergolas',
    metaTitle: 'Pergola bioclimatique Mauguio & Montpellier | Saufra',
    metaDescription:
      'Pergola bioclimatique sur mesure à Mauguio et Montpellier : lames orientables motorisées, structure alu, stores ZIP, carport. Devis gratuit Saufra.',
    heroTitle: 'Pergola bioclimatique sur mesure à Mauguio et Montpellier',
    heroSubtitle:
      'Maîtrisez l’ensoleillement, la ventilation naturelle et profitez de votre terrasse toute l’année.',
    heroImage: '/assets/saufra/pergola-hero-classic.png',
    heroImageAlt: 'Pergola bioclimatique aluminium à lames orientables Saufra sur terrasse ensoleillée',
    intro: [
      'Sous le climat généreux de l’Hérault, une terrasse est souvent trop exposée au plein soleil estival ou aux coups de vent marins. La pergola bioclimatique en aluminium répond à ce double enjeu grâce à ses lames motorisées orientables jusqu’à 135° ou plus selon les configurations.',
      'En position légèrement ouverte, les lames créent une circulation d’air rafraîchissante par convection naturelle tout en bloquant le rayonnement direct. Fermées, elles forment une couverture étanche évacuant l’eau de pluie dans les poteaux. En hiver, ouvertes face au sud, elles laissent entrer lumière et chaleur gratuite dans votre salon.',
    ],
    features: [
      {
        title: 'Lames orientables motorisées',
        description:
          'Pilotez l’ombre et la ventilation d’un simple geste par télécommande, avec capteurs vent et pluie automatisés en option.',
      },
      {
        title: 'Structure aluminium thermolaquée',
        description:
          'Châssis robuste conçu pour l’extérieur, résistant aux UV et à l’air salin du littoral entre Carnon, Pérols et La Grande-Motte.',
      },
      {
        title: 'Pose adossée ou autoportante',
        description:
          'Ancrée en façade dans le prolongement de votre baie vitrée ou installée en îlot au bord de la piscine, aux dimensions exactes de votre dalle.',
      },
      {
        title: 'Stores ZIP, LED & vitrages',
        description:
          'Transformez votre pergola en véritable pièce d’extérieur avec éclairage LED intégré, stores verticaux coupe-vent, chauffage ou parois vitrées.',
      },
    ],
    subServices: [
      {
        slug: 'originale-classic',
        title: 'Pergola bioclimatique « L’Originale Classic »',
        shortTitle: 'L’Originale Classic',
        metaTitle: 'Pergola L’Originale Classic sur mesure | Saufra',
        metaDescription: 'Découvrez la pergola bioclimatique L’Originale Classic en aluminium sur mesure.',
        tagline: 'Notre configuration phare pour les terrasses méditerranéennes',
        image: '/assets/aistudio/image_3c4378a5.png',
        imageAlt: 'Fiche technique pergola bioclimatique L’Originale Classic Saufra',
        summary:
          'Lames motorisées orientables, structure aluminium durable, pose adossée ou autoportante et stores latéraux ZIP en option.',
        paragraphs: [
          'Pensée pour allier sobriété architecturale et confort thermique au quotidien, la gamme L’Originale Classic s’intègre aussi bien sur une villa contemporaine à Castelnau-le-Lez que sur une maison languedocienne à Mauguio.',
          'Garantie annoncée jusqu’à 12 ans sur les visuels de présentation Saufra (conditions et durée exactes confirmées sur votre devis détaillé).',
        ],
        highlights: [
          'Lames motorisées orientables et silencieuses',
          'Évacuation des eaux intégrée dans les poteaux',
          'Dimensions sur mesure (largeur, avancée, hauteur)',
          'Option stores ZIP latéraux anti-vent et vis-à-vis',
        ],
        specs: [
          { label: 'Structure', value: 'Aluminium extrudé thermolaqué' },
          { label: 'Implantation', value: 'Adossée ou autoportante' },
          { label: 'Options confort', value: 'LED, ZIP, vitrage, capteurs' },
          { label: 'Garantie fabricant', value: 'Jusqu’à 12 ans (à valider sur devis)' },
        ],
        notice: 'Gamme L’Originale Classic et garantie 12 ans à confirmer selon configuration finale retenue.',
      },
      {
        slug: 'carport-couverture-terrasse',
        title: 'Carport aluminium & couverture de terrasse',
        shortTitle: 'Carport & Couverture',
        metaTitle: 'Carport alu et couverture de terrasse Hérault | Saufra',
        metaDescription: 'Protection de véhicules et couvertures de terrasse sur mesure en aluminium.',
        tagline: 'Protégez vos véhicules et vos espaces extérieurs toute l’année',
        image: '/assets/saufra/pergola-real-3.png',
        imageAlt: 'Structure aluminium extérieure Saufra sur terrasse',
        summary:
          'Carports autoportants ou adossés pour abriter voitures et camping-cars, ainsi que couvertures de terrasse et pergolas à toile coulissante.',
        paragraphs: [
          'En complément des pergolas à lames orientables, Saufra propose des carports en aluminium sur mesure pour protéger vos véhicules de la grêle, des rayons UV et de la chaleur estivale.',
          'Pour les terrasses recherchant une toiture fixe ou rétractable, nos couvertures de terrasse et pergolas à toile coulissante offrent une alternative souple et lumineuse.',
        ],
        highlights: [
          'Carport simple ou double véhicule sur mesure',
          'Toiture pleine isolée, polycarbonate ou lames',
          'Pergola à toile rétractable motorisée',
          'Harmonisation des teintes RAL avec vos menuiseries',
        ],
        specs: [
          { label: 'Usage', value: 'Stationnement & terrasse couverte' },
          { label: 'Matériau', value: 'Aluminium sans rouille' },
          { label: 'Éclairage', value: 'Bandeaux ou spots LED en option' },
          { label: 'Zone', value: 'Mauguio, Montpellier, Hérault' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Quel budget prévoir pour une pergola bioclimatique sur mesure ?',
        answer:
          'Le tarif dépend des dimensions, du type de pose (adossée ou autoportante), du nombre de poteaux et des options choisies (stores ZIP, éclairage LED, capteurs météo, vitrage). Nous établissons un chiffrage précis et gratuit après prise de cotes à votre domicile.',
      },
      {
        question: 'Faut-il une déclaration préalable de travaux en mairie ?',
        answer:
          'Une pergola adossée crée généralement une emprise au sol : entre 5 m² et 20 m² (parfois jusqu’à 40 m² en zone urbaine dotée d’un PLU), une déclaration préalable de travaux est nécessaire. En dessous de 5 m², aucune formalité n’est en principe requise hors secteur protégé.',
      },
      {
        question: 'La pergola résiste-t-elle au vent et aux fortes pluies dans l’Hérault ?',
        answer:
          'Oui, la structure en aluminium extrudé et les fixations dimensionnées supportent les rafales méditerranéennes. Avec un capteur de vent ou de pluie, les lames se positionnent automatiquement pour protéger la structure et évacuer l’eau par les gouttières intégrées.',
      },
      {
        question: 'Quel entretien demande une pergola en aluminium ?',
        answer:
          'L’aluminium thermolaqué est particulièrement simple à entretenir : un rinçage à l’eau claire avec un savon doux une à deux fois par an (et un nettoyage des goulottes d’évacuation après l’automne) suffit pour conserver son aspect d’origine.',
      },
    ],
  },
  {
    id: 'fenetres',
    slug: '/fenetres/',
    title: 'Fenêtres & baies vitrées',
    shortTitle: 'Fenêtres',
    metaTitle: 'Fenêtres PVC, Aluminium et Bois Montpellier | Saufra',
    metaDescription:
      'Installation et remplacement de fenêtres PVC, alu et bois sur mesure à Mauguio et Montpellier. Isolation thermique, phonique et luminosité.',
    heroTitle: 'Fenêtres sur mesure PVC, aluminium et bois à Mauguio et Montpellier',
    heroSubtitle:
      'Gagnez en isolation thermique, silence et lumière naturelle grâce à une pose maîtrisée.',
    heroImage: '/assets/saufra/fenetre-alu.png',
    heroImageAlt: 'Grande baie vitrée et fenêtre aluminium contemporaine installée par Saufra',
    intro: [
      'Remplacer ses fenêtres est un investissement structurant pour le confort de votre logement sur vingt ans et plus. Dans notre secteur entre Mauguio, Montpellier et le littoral, vos menuiseries doivent à la fois limiter les déperditions hivernales, filtrer la chaleur d’été et atténuer les nuisances sonores.',
      'Nous nous déplaçons chez vous pour analyser l’état de vos dormants existants (pose en rénovation ou dépose totale), vous conseiller sur le meilleur matériau selon chaque façade et vous présenter précisément comment la pose sera réalisée.',
    ],
    features: [
      {
        title: 'Étude sur site & pose soignée',
        description:
          'Prise de cotes pièce par pièce, vérification des contraintes de bruit et d’ensoleillement, et explication claire de la méthode de pose.',
      },
      {
        title: 'Vitrages isolants performants',
        description:
          'Double vitrage à isolation thermique renforcée (ITR), vitrage acoustique pour axes passants ou vitrage feuilleté retardateur d’effraction.',
      },
      {
        title: 'Baies coulissantes & portes-fenêtres',
        description:
          'Coulissants à frappe ou à galandage pour effacer la limite entre votre salon et votre terrasse sous pergola.',
      },
      {
        title: 'Suivi & pérennité',
        description:
          'Des équipements conformes aux normes en vigueur et accompagnés des garanties légales applicables (garantie décennale sur la pose).',
      },
    ],
    subServices: [
      {
        slug: 'pvc',
        title: 'Fenêtres PVC sur mesure',
        shortTitle: 'Fenêtres PVC',
        metaTitle: 'Fenêtres PVC sur mesure Mauguio & Montpellier | Saufra',
        metaDescription:
          'Fenêtres PVC sans entretien à profils fins, renforts acier et haute isolation thermique et phonique à Mauguio et dans l’Hérault.',
        tagline: 'Isolation performante, profilés affinés et zéro entretien',
        image: '/assets/saufra/fenetre-pvc.png',
        imageAlt: 'Fenêtres PVC blanches à profil fin dans une cuisine lumineuse',
        summary:
          'Un excellent rapport performance/budget, adapté à la majorité des logements, avec profils fins pour maximiser le clair de vitrage.',
        paragraphs: [
          'Le PVC est aujourd’hui le matériau le plus répandu en rénovation pour sa capacité à combiner très haute isolation thermique, étanchéité à l’air et absence totale d’entretien : un simple coup d’éponge suffit.',
          'Nos menuiseries PVC bénéficient de profils affinés qui augmentent la surface vitrée et la lumière naturelle, de parcloses moulurées soignées et de renforts en acier pour garantir la rigidité dans le temps. Large palette de teintes unies et finitions ton bois disponibles (gamme exacte de coloris présentée lors du rendez-vous).',
        ],
        highlights: [
          'Aucune peinture ni lasure nécessaire dans le temps',
          'Renforts acier intégrés pour une stabilité durable',
          'Profilés affinés optimisant la luminosité intérieure',
          'Multiples coloris et finitions plaxées ton bois possibles',
        ],
        specs: [
          { label: 'Points forts', value: 'Isolation thermique & rapport qualité/prix' },
          { label: 'Entretien', value: 'Minimal (eau savonneuse)' },
          { label: 'Ouvertures', value: 'Frappe, oscillo-battant, porte-fenêtre' },
          { label: 'Teintes', value: 'Blanc, gris, tons bois (selon nuancier)' },
        ],
      },
      {
        slug: 'aluminium',
        title: 'Fenêtres & baies vitrées Aluminium',
        shortTitle: 'Fenêtres Aluminium',
        metaTitle: 'Fenêtres et baies vitrées Aluminium Montpellier | Saufra',
        metaDescription:
          'Baies coulissantes et fenêtres aluminium à rupture de pont thermique pour grandes ouvertures lumineuses à Montpellier et Mauguio.',
        tagline: 'Finesse architecturale et grandes ouvertures sur la lumière',
        image: '/assets/saufra/fenetre-alu.png',
        imageAlt: 'Fenêtre et baie vitrée en aluminium gris anthracite sur balcon ensoleillé',
        summary:
          'La rigidité naturelle de l’aluminium autorise des montants ultra-fins et de larges baies vitrées coulissantes parfaitement adaptées à la rénovation contemporaine.',
        paragraphs: [
          'Synonyme d’architecture contemporaine et de lumière, l’aluminium est le matériau idéal pour les grandes baies vitrées coulissantes ouvrant sur un jardin, une piscine ou une pergola bioclimatique.',
          'Équipées d’une rupture de pont thermique performante, nos fenêtres aluminium suppriment les phénomènes de paroi froide et de condensation. Grâce au thermolaquage haute durabilité, vous choisissez librement votre coloris extérieur et intérieur (bicoloration possible) avec un matériau recyclable.',
        ],
        highlights: [
          'Rupture de pont thermique complète sur dormant et ouvrant',
          'Montants fins maximisant l’apport solaire et la vue',
          'Thermolaquage haute résistance adapté aux zones côtières',
          'Matériau rigide et durable, adapté aux très grands formats',
        ],
        specs: [
          { label: 'Points forts', value: 'Grandes dimensions & design épuré' },
          { label: 'Performance', value: 'Rupture de pont thermique intégrée' },
          { label: 'Finitions', value: 'Large choix RAL + bicoloration' },
          { label: 'Recyclabilité', value: 'Matériau durable et recyclable' },
        ],
      },
      {
        slug: 'bois',
        title: 'Fenêtres Bois sur mesure',
        shortTitle: 'Fenêtres Bois',
        metaTitle: 'Fenêtres Bois sur mesure Hérault & Montpellier | Saufra',
        metaDescription:
          'Fenêtres en bois noble issu de forêts gérées durablement, traitement IFH, charme authentique et hautes performances thermiques.',
        tagline: 'Authenticité, chaleur naturelle et noblesse des essences',
        image: '/assets/saufra/fenetre-bois.png',
        imageAlt: 'Fenêtre et porte-fenêtre en bois naturel donnant sur terrasse arborée',
        summary:
          'La réponse idéale pour les demeures de caractère, les cœurs de village ou les projets recherchant la chaleur inimitable du bois.',
        paragraphs: [
          'Le bois allie cachet architectural et performance isolante naturelle. Nous privilégions des essences sélectionnées issues de forêts gérées durablement, avec assemblages mécaniques précis et parcloses moulurées.',
          'Nos menuiseries bois reçoivent un traitement IFH (Insecticide, Fongicide, Hydrofuge) pour résister aux variations climatiques, et peuvent être lasurées, vernies ou peintes afin d’harmoniser parfaitement votre façade et votre décoration intérieure.',
        ],
        highlights: [
          'Bois issus de forêts gérées durablement',
          'Traitement protecteur IFH contre humidité et champignons',
          'Excellente isolation thermique et acoustique naturelle',
          'Finition personnalisable (peinture, lasure ou vernis)',
        ],
        specs: [
          { label: 'Points forts', value: 'Chaleur, cachet et isolation naturelle' },
          { label: 'Protection', value: 'Traitement IFH longue durée' },
          { label: 'Esthétique', value: 'Parcloses moulurées & quincaillerie soignée' },
          { label: 'Personnalisation', value: 'Essences et teintes au choix' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Comment choisir entre fenêtres PVC, aluminium et bois ?',
        answer:
          'Le PVC excelle sur le rapport isolation/budget et l’absence d’entretien. L’aluminium s’impose pour les grandes baies vitrées et les profils les plus fins. Le bois séduit pour les maisons de caractère et zones soumises aux Architectes des Bâtiments de France.',
      },
      {
        question: 'Pose en rénovation ou dépose totale : quelle différence ?',
        answer:
          'La pose en rénovation conserve l’ancien bâti sain et limite les travaux de maçonnerie. La dépose totale retire l’ancien dormant pour maximiser la surface vitrée et traiter l’étanchéité à neuf. Notre technicien vous recommande la méthode adaptée lors de la visite.',
      },
      {
        question: 'Proposez-vous des baies vitrées coulissantes et portes-fenêtres ?',
        answer:
          'Oui, nous installons des baies coulissantes deux ou plusieurs vantaux, des coulissants à galandage et des portes-fenêtres sur mesure en PVC, aluminium ou bois.',
      },
    ],
  },
  {
    id: 'volets',
    slug: '/volets/',
    title: 'Volets roulants, battants & persiennes',
    shortTitle: 'Volets',
    metaTitle: 'Volets roulants, battants et persiennes Montpellier | Saufra',
    metaDescription:
      'Pose de volets roulants motorisés, volets battants alu/PVC/bois, persiennes et jalousies sur mesure à Mauguio et dans l’Hérault.',
    heroTitle: 'Volets sur mesure à Mauguio, Montpellier et dans l’Hérault',
    heroSubtitle:
      'Protégez votre habitat du soleil d’été, améliorez votre isolation et renforcez votre sécurité.',
    heroImage: '/assets/saufra/volet-roulant.png',
    heroImageAlt: 'Volets roulants aluminium gris anthracite posés sur façade bois et terrasse',
    intro: [
      'Bien plus qu’un simple équipement de occultation, le volet constitue un véritable bouclier thermique contre les fortes chaleurs languedociennes et les déperditions nocturnes en hiver, tout en préservant votre intimité et votre tranquillité.',
      'Que votre façade appelle la praticité d’un volet roulant motorisé, le charme méridional d’un volet battant ou la ventilation tamisée d’une persienne, nous adaptons chaque installation à vos ouvertures.',
    ],
    features: [
      {
        title: 'Confort thermique été / hiver',
        description:
          'Lames aluminium isolées de mousse polyuréthane ou battants ajustés pour stopper le rayonnement solaire avant qu’il n’atteigne le vitrage.',
      },
      {
        title: 'Motorisation silencieuse & pilotage',
        description:
          'Commande filaire, radio ou centralisée pour ouvrir et fermer vos volets roulants sans effort (options connectées selon configuration).',
      },
      {
        title: 'Esthétique sur mesure',
        description:
          'Large éventail de coloris, lames ajourées, barres et écharpes pour s’harmoniser avec votre façade et vos fenêtres.',
      },
      {
        title: 'Sécurité renforcée',
        description:
          'Verrous automatiques anti-relevage sur volets roulants et espagnolettes robustes sur battants.',
      },
    ],
    subServices: [
      {
        slug: 'volets-roulants',
        title: 'Volets roulants aluminium sur mesure',
        shortTitle: 'Volets roulants',
        metaTitle: 'Volets roulants motorisés Mauguio & Montpellier | Saufra',
        metaDescription:
          'Volets roulants aluminium motorisés discrets, silencieux et isolants sur mesure à Mauguio et Montpellier. Devis gratuit Saufra.',
        tagline: 'Praticité quotidienne, silence de manœuvre et haute isolation',
        image: '/assets/saufra/volet-roulant.png',
        imageAlt: 'Volets roulants aluminium installés sur baies vitrées',
        summary:
          'Les volets roulants aluminium allient confort d’utilisation par télécommande, mécanisme discret et faible entretien.',
        paragraphs: [
          'Commandés à distance par télécommande individuelle ou groupée (avec options de pilotage centralisé ou solaire selon votre installation), les volets roulants en aluminium vous permettent de moduler ombre et sécurité en un clic.',
          'Leurs coulisses et coffres compacts offrent un fonctionnement fluide et peu bruyant, tout en formant un matelas d’air isolant devant la fenêtre.',
        ],
        highlights: [
          'Tablier aluminium isolé facile d’entretien',
          'Motorisation silencieuse filaire, radio ou solaire',
          'Pose en coffre tunnel, rénovation extérieure ou bloc-baie',
          'Solutions de financement / mensualisation étudiables sur demande (exemple indicatif « à partir de 19,69 €/mois » sous réserve de conditions et validation)',
        ],
        specs: [
          { label: 'Matériau', value: 'Aluminium double paroi isolée' },
          { label: 'Manœuvre', value: 'Motorisée ou manuelle' },
          { label: 'Sécurité', value: 'Verrous anti-soulevement' },
          { label: 'Financement', value: 'Mensualisation étudiable (à confirmer)' },
        ],
        notice:
          'Offre de mensualisation indicative (ex. 19,69 €/mois) et options domotiques soumises à validation et conditions tarifaires en vigueur.',
      },
      {
        slug: 'volets-battants',
        title: 'Volets battants PVC, Aluminium ou Bois',
        shortTitle: 'Volets battants',
        metaTitle: 'Volets battants alu, PVC et bois Hérault | Saufra',
        metaDescription:
          'Volets battants sur mesure en aluminium isolé, PVC ou bois pour maisons et mas dans l’Hérault.',
        tagline: 'Le charme authentique des façades du Sud, sans compromis sur l’isolation',
        image: '/assets/saufra/volet-battant.png',
        imageAlt: 'Volets battants bleu gris posés sur façade méditerranéenne ocre',
        summary:
          'Accordez vos volets battants à vos fenêtres grâce à des configurations pleines, persiennées ou avec précadre sur mesure.',
        paragraphs: [
          'Indissociables de l’architecture méditerranéenne, les volets battants soulignent le caractère de votre maison tout en protégeant efficacement contre la chaleur et le vent.',
          'Nous vous guidons entre l’aluminium isolé (moderne, rigide et très varié en couleurs), le bois (fidèle aux rénovations de caractère) et le PVC (robuste et sans entretien).',
        ],
        highlights: [
          'Disponibles en aluminium isolé, PVC ou bois',
          'Vantaux pleins, à lames orientables ou mixtes',
          'Motorisation pour volets battants disponible en option',
          'Pentures et espagnolettes traitées anti-corrosion',
        ],
        specs: [
          { label: 'Matériaux', value: 'Aluminium, PVC ou Bois' },
          { label: 'Styles', value: 'Plein, persienné, barres & écharpes' },
          { label: 'Motorisation', value: 'Possible sur bras discrets' },
          { label: 'Adaptation', value: 'Cintres et formes sur mesure' },
        ],
      },
      {
        slug: 'persiennes',
        title: 'Persiennes sur mesure',
        shortTitle: 'Persiennes',
        metaTitle: 'Volets persiennes sur mesure Montpellier & Mauguio | Saufra',
        metaDescription:
          'Persiennes repliables ou coulissantes sur mesure pour filtrer la lumière tout en gardant la ventilation.',
        tagline: 'Lumière tamisée, ventilation naturelle et cachet méridional',
        image: '/assets/saufra/volet-persienne.png',
        imageAlt: 'Persienne bleue posée sur fenêtre avec garde-corps fer forgé',
        summary:
          'Les persiennes réduisent l’éblouissement solaire sans plonger la pièce dans le noir complet et apportent un cachet indéniable aux façades.',
        paragraphs: [
          'Très appréciées dans le Sud de la France et sur les façades urbaines comme les mas, les persiennes laissent circuler la brise tout en bloquant le soleil direct.',
          'Nos conseillers vous accompagnent dans le choix des matériaux, des teintes et du système de repliement adapté à la largeur de vos tableaux.',
        ],
        highlights: [
          'Aération naturelle tout en préservant l’intimité',
          'Repli discret en tableau ou en façade',
          'Large choix de coloris et finitions',
          'Idéal pour rénovations urbaines et maisons du Midi',
        ],
        specs: [
          { label: 'Ouverture', value: 'Repliable ou coulissante' },
          { label: 'Usage', value: 'Ventilation & filtration solaire' },
          { label: 'Coloris', value: 'Palette RAL sur mesure' },
          { label: 'Pose', value: 'Neuf ou rénovation sans gros œuvre' },
        ],
      },
      {
        slug: 'jalousies',
        title: 'Jalousies PVC & Aluminium',
        shortTitle: 'Jalousies',
        metaTitle: 'Volets jalousies PVC et alu sur mesure | Saufra',
        metaDescription:
          'Jalousies accordéon suspendues sur rail haut en PVC ou aluminium pour une protection solaire discrète.',
        tagline: 'Repli ultra-compact sur rail haut en PVC ou aluminium',
        image: '/assets/saufra/volet-jalousie.png',
        imageAlt: 'Jalousie accordéon blanche posée sur fenêtre',
        summary:
          'Suspendue à un rail supérieur, la jalousie protège des rayons du soleil tout en laissant passer une lumière douce par ses jours ajourés.',
        paragraphs: [
          'Discrète qu’elle soit déployée ou repliée sur les côtés de l’ouverture, la jalousie convient parfaitement aux immeubles anciens et appartements montpelliérains où l’encombrement latéral est limité.',
          'Saufra vous propose des jalousies sur mesure en PVC ou en aluminium, fiables et faciles à manœuvrer au quotidien.',
        ],
        highlights: [
          'Suspension fluide sur rail supérieur renforcé',
          'Protection solaire laissant filtrer la lumière par jours triangulaires',
          'Encombrement minimal une fois rabattue',
          'Disponible en PVC ou en aluminium',
        ],
        specs: [
          { label: 'Matériaux', value: 'PVC ou Aluminium' },
          { label: 'Mécanisme', value: 'Suspendu sur rail haut' },
          { label: 'Atout', value: 'Gain de place en tableau étroit' },
          { label: 'Entretien', value: 'Nettoyage simple et rapide' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Peut-on motoriser des volets roulants existants ou faut-il tout changer ?',
        answer:
          'Lors de la visite technique, nous vérifions l’état de votre tablier et de votre axe. Selon l’usure, une motorisation ou un remplacement complet par un volet roulant aluminium plus isolant peut être envisagé.',
      },
      {
        question: 'Quel type de volet isole le mieux de la chaleur estivale ?',
        answer:
          'Un volet roulant aluminium double paroi à lames injectées de mousse ou un volet battant isolé forme une barrière très efficace dès lors qu’il est fermé aux heures les plus chaudes. Les persiennes permettent en plus de ventiler la nuit en sécurité.',
      },
    ],
  },
  {
    id: 'portes',
    slug: '/portes/',
    title: 'Portes d’entrée, blindées & de garage',
    shortTitle: 'Portes',
    metaTitle: 'Portes d’entrée, blindées et de garage Montpellier | Saufra',
    metaDescription:
      'Portes d’entrée PVC/alu/bois, portes blindées multipoints et portes de garage motorisées à Mauguio et Montpellier. Devis gratuit Saufra.',
    heroTitle: 'Portes d’entrée, portes blindées et portes de garage sur mesure',
    heroSubtitle:
      'Alliez accueil architectural, isolation thermique et haute sécurité pour votre maison ou appartement.',
    heroImage: '/assets/saufra/porte-entree.png',
    heroImageAlt: 'Porte d’entrée contemporaine anthracite installée sur terrasse bois',
    intro: [
      'La porte d’entrée signe l’identité de votre façade tout en constituant le premier rempart contre les intrusions et les courants d’air. Quant à la porte de garage, sa surface importante exige à la fois une intégration harmonieuse, une isolation réelle et une motorisation fiable.',
      'Saufra vous accompagne dans le choix des matériaux, vitrages décoratifs, serrures multipoints et automatismes, avec présentation du catalogue complet lors de notre rendez-vous conseil.',
    ],
    features: [
      {
        title: 'Design & personnalisation',
        description:
          'Panneaux contemporains, moulurés classiques ou vitrés avec triple vitrage feuilleté décoratif en PVC, aluminium ou bois.',
      },
      {
        title: 'Sécurité multipoints',
        description:
          'Serrures 3 à 5 points à crochets, cylindres haute sûreté et portes blindées à blindage acier pour une sérénité totale.',
      },
      {
        title: 'Portes de garage optimisées',
        description:
          'Sectionnelles plafond, latérales, basculantes avec portillon intégré ou enroulables pour petits espaces.',
      },
      {
        title: 'Étanchéité & isolation',
        description:
          'Panneaux isolants haute densité et seuils à rupture de pont thermique conformes aux exigences d’accessibilité.',
      },
    ],
    subServices: [
      {
        slug: 'portes-d-entree',
        title: 'Portes d’entrée PVC, Aluminium ou Bois',
        shortTitle: 'Portes d’entrée',
        metaTitle: 'Portes d’entrée sur mesure Mauguio & Montpellier | Saufra',
        metaDescription:
          'Large choix de portes d’entrée PVC, alu ou bois esthétiques, isolantes et sécurisantes sur mesure dans l’Hérault.',
        tagline: 'L’élégance d’accueil et la protection thermique de votre maison',
        image: '/assets/saufra/porte-entree.png',
        imageAlt: 'Porte d’entrée moderne grise sur villa contemporaine',
        summary:
          'Formes, vitrages, coloris et matériaux au choix pour harmoniser votre entrée avec vos fenêtres et volets.',
        paragraphs: [
          'En PVC pour sa praticité, en aluminium pour ses lignes contemporaines et sa grande rigidité, ou en bois pour sa chaleur naturelle, votre porte d’entrée est configurée selon vos envies.',
          'Notre catalogue regroupe des dizaines de modèles pleins ou semi-vitrés (vitrages sablés, retardateurs d’effraction) équipés de serrures multipoints fiables. Catalogue complet disponible sur simple demande.',
        ],
        highlights: [
          'Choix libre entre Aluminium, PVC et Bois',
          'Tierces fixes ou vitrées pour entrées larges',
          'Seuil PMR en aluminium à rupture de pont thermique',
          'Catalogue complet présenté lors de votre devis gratuit',
        ],
        specs: [
          { label: 'Matériaux', value: 'Aluminium, PVC, Bois' },
          { label: 'Serrure', value: 'Multipoints haute sécurité' },
          { label: 'Vitrage', value: 'Feuilleté décoratif en option' },
          { label: 'Catalogue', value: 'Disponible sur demande' },
        ],
      },
      {
        slug: 'portes-blindees',
        title: 'Portes blindées maison & appartement',
        shortTitle: 'Portes blindées',
        metaTitle: 'Portes blindées haute sécurité Montpellier | Saufra',
        metaDescription:
          'Installation de portes blindées à blindage acier, serrures multipoints et versions coupe-feu pour maison et appartement.',
        tagline: 'Blindage acier, serrures multipoints et option coupe-feu',
        image: '/assets/saufra/porte-blindee.png',
        imageAlt: 'Porte blindée finition bois chaleureuse dans un hall moderne',
        summary:
          'Protégez efficacement votre appartement ou votre villa sans sacrifier l’esthétique intérieure ni les exigences de votre copropriété.',
        paragraphs: [
          'Du bloc-porte d’appartement discret respectant la façade de palier (avec habillage bois ou laqué) jusqu’au bloc-porte blindé de maison individuelle isolé, nos solutions s’adaptent à votre niveau d’exigence.',
          'Dotées d’un blindage acier complet, de paumelles renforcées anti-dégondage et de serrures multipoints, nos portes blindées existent également en version coupe-feu et isolation acoustique renforcée.',
        ],
        highlights: [
          'Structure et vantail à blindage acier intégral',
          'Serrures multipoints et protecteur de cylindre',
          'Versions coupe-feu et acoustiques disponibles',
          'Bicoloration palier / intérieur adaptée aux copropriétés',
        ],
        specs: [
          { label: 'Habitat', value: 'Appartement ou maison' },
          { label: 'Sécurité', value: 'Blindage acier & multipoints' },
          { label: 'Options', value: 'Coupe-feu & isolation phonique' },
          { label: 'Finitions', value: 'Décors bois ou laqués' },
        ],
      },
      {
        slug: 'portes-de-garage',
        title: 'Portes de garage sur mesure',
        shortTitle: 'Portes de garage',
        metaTitle: 'Portes de garage sectionnelles et motorisées Hérault | Saufra',
        metaDescription:
          'Portes de garage sectionnelles, latérales, basculantes ou enroulables manuelles ou motorisées à Mauguio et Montpellier.',
        tagline: 'Sectionnelles, latérales, basculantes ou enroulables',
        image: '/assets/saufra/porte-garage.png',
        imageAlt: 'Porte de garage sectionnelle gris anthracite posée en façade claire',
        summary:
          'Des ouvertures fiables, isolées et sécurisées adaptées à la géométrie exacte de votre garage.',
        paragraphs: [
          'Par sa surface visible depuis la rue, la porte de garage participe pleinement à l’harmonie de votre maison. Nous adaptons le système d’ouverture à votre encombrement intérieur et à votre usage quotidien.',
          'Porte sectionnelle refoulant au plafond (manuelle ou motorisée), porte latérale idéale pour moduler l’ouverture piétonne, porte basculante robuste avec portillon possible, ou porte enroulable compacte pour les espaces réduits : chaque configuration est étudiée sur place.',
        ],
        highlights: [
          'Sectionnelle plafond isolée (manuelle ou motorisée)',
          'Latérale sur mesure pratique pour accès piéton rapide',
          'Basculante fiable avec option portillon intégré',
          'Enroulable aluminium pour libérer tout le plafond',
        ],
        specs: [
          { label: 'Types', value: 'Sectionnelle, latérale, basculante, enroulable' },
          { label: 'Motorisation', value: 'Télécommande, digicode ou smartphone' },
          { label: 'Isolation', value: 'Panneaux double paroi isolés' },
          { label: 'Options', value: 'Hublots, portillon, teinte RAL' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Quel type de porte de garage choisir quand on manque de place au plafond ?',
        answer:
          'Si vos solives ou tuyauteries encombrent le plafond, la porte de garage enroulable (coffre compact au linteau) ou la porte sectionnelle latérale (refoulement le long d’un mur) sont idéales.',
      },
      {
        question: 'Une porte blindée peut-elle respecter le règlement de ma copropriété ?',
        answer:
          'Oui, grâce aux habillages bicolores : la face extérieure reproduit exactement la teinte ou le placage bois imposé par la copropriété tandis que la face intérieure s’adapte à votre décoration.',
      },
    ],
  },
  {
    id: 'stores',
    slug: '/stores/',
    title: 'Stores intérieurs & extérieurs',
    shortTitle: 'Stores',
    metaTitle: 'Stores bannes, coffres et stores intérieurs Montpellier | Saufra',
    metaDescription:
      'Stores extérieurs (banne, coffre, ZIP, vélums) et stores intérieurs sur mesure (vénitiens, enrouleurs, californiens) à Mauguio et Montpellier.',
    heroTitle: 'Stores extérieurs et intérieurs sur mesure à Mauguio et Montpellier',
    heroSubtitle:
      'Tempérez vos façades exposées au soleil du Midi et modulez la lumière de vos pièces de vie.',
    heroImage: '/assets/saufra/store-banne.png',
    heroImageAlt: 'Stores bannes doubles posés sur terrasse et balcon de villa contemporaine',
    intro: [
      'Dans l’Hérault, le confort d’été passe avant tout par une protection solaire extérieure efficace qui bloque le rayonnement avant qu’il ne chauffe vos vitrages, complétée à l’intérieur par des stores techniques filtrant l’éblouissement.',
      'Saufra réalise sur mesure toute une gamme de stores bannes, stores coffres, stores verticaux ZIP coupe-vent et stores intérieurs techniques adaptés aux particuliers comme aux locaux professionnels.',
    ],
    features: [
      {
        title: 'Protection thermique extérieure',
        description:
          'Stores bannes, coffres et verticaux ZIP pour abaisser sensiblement la température intérieure des pièces exposées plein sud ou ouest.',
      },
      {
        title: 'Toiles techniques M1 & acryliques',
        description:
          'Tissus extérieurs haute tenue UV et toiles intérieures non feu M1 screen, diffusantes, occultantes ou obscurcissantes.',
      },
      {
        title: 'Motorisation & capteurs météo',
        description:
          'Moteur électrique filaire, radio ou solaire recommandé avec anémomètre de sécurité vent et capteur soleil/pluie.',
      },
      {
        title: 'Vélums de véranda',
        description:
          'Toiles de toiture sur mesure pour réguler la luminosité sous votre véranda ou verrière.',
      },
    ],
    subServices: [
      {
        slug: 'stores-exterieurs',
        title: 'Stores extérieurs sur mesure',
        shortTitle: 'Stores extérieurs',
        metaTitle: 'Stores bannes, coffres et stores ZIP Montpellier | Saufra',
        metaDescription:
          'Pose de stores bannes, stores coffres intégraux, monoblocs, stores verticaux ZIP et vélums de véranda dans l’Hérault.',
        tagline: 'Store banne, store coffre, monobloc, vertical ZIP & vélums',
        image: '/assets/saufra/store-banne.png',
        imageAlt: 'Double store banne extérieur déployé sur façade beige',
        summary:
          'Des stores extérieurs résistants au vent et fabriqués sur mesure pour ombrager durablement balcons, terrasses et baies vitrées.',
        paragraphs: [
          'Du store banne traditionnel au store coffre intégral qui protège intégralement toile et bras une fois replié, en passant par le store monobloc ou le store vertical ZIP guidé par coulisses, nos solutions s’adaptent à chaque façade.',
          'Nous recommandons la motorisation électrique avec capteur vent pour sécuriser automatiquement votre store lors des rafales méditerranéennes ; une manœuvre manuelle par treuil et manivelle reste disponible pour une solution économique et fiable.',
        ],
        highlights: [
          'Store banne & store coffre intégral haute protection',
          'Store vertical ZIP anti-vent pour fenêtres et pergolas',
          'Vélums de véranda pour limiter l’effet de serre',
          'Motorisation avec capteurs vent, soleil et pluie',
        ],
        specs: [
          { label: 'Gammes', value: 'Banne, Coffre, Monobloc, ZIP, Vélum' },
          { label: 'Manœuvre', value: 'Électrique (recommandée) ou manuelle' },
          { label: 'Sécurité vent', value: 'Capteur anémomètre en option' },
          { label: 'Usage', value: 'Terrasses, balcons, baies & vérandas' },
        ],
      },
      {
        slug: 'stores-interieurs',
        title: 'Stores intérieurs sur mesure',
        shortTitle: 'Stores intérieurs',
        metaTitle: 'Stores intérieurs vénitiens, enrouleurs et californiens | Saufra',
        metaDescription:
          'Stores vénitiens alu, à cassette, californiens et enrouleurs avec toiles techniques M1, occultantes ou screen.',
        tagline: 'Vénitiens, à cassette, californiens & enrouleurs techniques',
        image: '/assets/saufra/store-enrouleur.png',
        imageAlt: 'Store enrouleur intérieur blanc posé sur fenêtre',
        summary:
          'Habillez vos baies vitrées et fenêtres avec des stores sur mesure alliant précision lumineuse et finitions soignées.',
        paragraphs: [
          'Du store vénitien à lamelles aluminium au store à cassette guidé sur ouvrant, en passant par le store californien à bandes verticales pour les grandes hauteurs et le store enrouleur contemporain, chaque modèle est confectionné aux cotes de vos ouvertures.',
          'Nos toiles techniques (certifiées non feu M1 de type screen, tissus diffusants, occultants pour chambres ou obscurcissants) répondent aussi bien aux besoins des particuliers qu’aux exigences des bureaux. Manœuvre manuelle (chaînette, cordon, ressort, treuil) ou motorisée (filaire, radio, batterie autonome).',
        ],
        highlights: [
          'Stores vénitiens alu, à cassette, californiens et enrouleurs',
          'Toiles techniques non feu M1, screen, diffusantes ou occultantes',
          'Manœuvres manuelles ou motorisées (y compris batterie autonome)',
          'Intégration discrète sur battants ou en tableau',
        ],
        specs: [
          { label: 'Modèles', value: 'Vénitien, Cassette, Californien, Enrouleur' },
          { label: 'Toiles', value: 'Screen, diffusant, occultant, M1' },
          { label: 'Commandes', value: 'Manuelle ou moteur radio/batterie' },
          { label: 'Sur-mesure', value: 'Prise de cotes et pose incluses' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Store banne ou store coffre intégral : lequel choisir ?',
        answer:
          'Le store coffre protège intégralement la toile et les bras articulés dans un caisson étanche lorsqu’il est replié, ce qui prolonge sa durée de vie face à la poussière, au vent marin et à la pluie.',
      },
      {
        question: 'Un store vertical ZIP résiste-t-il au vent ?',
        answer:
          'Oui, grâce au système de fermeture éclair soudée sur les bords de la toile et maintenue dans les coulisses latérales, le store ZIP reste tendu et offre une excellente tenue au vent.',
      },
    ],
  },
  {
    id: 'verandas',
    slug: '/verandas-extensions/',
    title: 'Vérandas & extensions de maison',
    shortTitle: 'Vérandas',
    metaTitle: 'Vérandas et extensions de maison Montpellier | Saufra',
    metaDescription:
      'Création de vérandas lumineuses, extensions de maison et couvertures de terrasse sur mesure à Mauguio et dans l’Hérault.',
    heroTitle: 'Vérandas, extensions et couvertures de terrasse dans l’Hérault',
    heroSubtitle:
      'Ajoutez une véritable pièce à vivre baignée de lumière naturelle entre votre maison et votre jardin.',
    heroImage: '/assets/saufra/veranda.png',
    heroImageAlt: 'Véranda vitrée blanche adossée à une villa méditerranéenne',
    intro: [
      'Agrandir sa maison sans déménager : la véranda en aluminium à rupture de pont thermique offre aujourd’hui une isolation d’hiver et un confort d’été permettant d’en faire un vrai salon, une salle à manger ou un bureau toute l’année.',
      'Avec un agrandissement moyen autour de 15 m² (variable selon votre terrain et vos envies), la véranda crée une transition fluide vers le jardin tout en valorisant durablement votre patrimoine immobilier.',
    ],
    features: [
      {
        title: 'Pièce à vivre quatre saisons',
        description:
          'Profilés aluminium isolés, vitrages à contrôle solaire et toiture adaptée pour profiter de la lumière même par temps couvert.',
      },
      {
        title: 'Transition maison & jardin',
        description:
          'Larges baies coulissantes ouvrant totalement l’espace aux beaux jours et prolongeant le séjour vers le jardin.',
      },
      {
        title: 'Couverture de terrasse & extension',
        description:
          'Des solutions modulables allant de la couverture vitrée ou isolée jusqu’à l’extension complète de l’habitat.',
      },
      {
        title: 'Étude & intégration architecturale',
        description:
          'Conception respectant la toiture existante, les pentes d’écoulement et les règles d’urbanisme de votre commune.',
      },
    ],
    subServices: [],
    faqs: [
      {
        question: 'Quelle est la surface moyenne d’une véranda et quelles autorisations prévoir ?',
        answer:
          'De nombreux projets se situent autour de 15 à 20 m². En zone urbaine couverte par un PLU, une déclaration préalable suffit généralement jusqu’à 40 m² (20 m² hors zone urbaine PLU), sauf si la surface totale de la maison dépasse 150 m².',
      },
      {
        question: 'Comment éviter la surchauffe l’été dans une véranda ?',
        answer:
          'En combinant une toiture isolée ou à contrôle solaire, des vitrages peu émissifs, une bonne ventilation traversante et des stores extérieurs ou vélums adaptés.',
      },
    ],
  },
  {
    id: 'climatisation',
    slug: '/climatisation/',
    title: 'Climatisation réversible',
    shortTitle: 'Climatisation',
    metaTitle: 'Installation climatisation réversible Mauguio & Montpellier | Saufra',
    metaDescription:
      'Pose et mise en service de climatisation réversible par techniciens habilités fluides frigorigènes à Mauguio et dans l’Hérault.',
    heroTitle: 'Climatisation réversible & confort thermique (sur confirmation)',
    heroSubtitle:
      'Des solutions de rafraîchissement d’été et chauffage économique posées dans les règles de l’art.',
    heroImage: '/assets/saufra/pergola-villa-piscine.png',
    heroImageAlt: 'Villa méditerranéenne rénovée avec confort extérieur et intérieur Saufra',
    intro: [
      'En complément de nos menuiseries isolantes et protections solaires, la climatisation réversible assure une température agréable durant les pics de chaleur estivaux et un chauffage d’appoint performant à la mi-saison.',
      'La pose et la mise en service nécessitent impérativement l’intervention d’équipes disposant des attestations d’aptitude pour la manipulation des fluides frigorigènes.',
    ],
    features: [
      {
        title: 'Pose & mise en service conformes',
        description:
          'Intervention réalisée avec les agréments réglementaires exigés pour les fluides frigorigènes.',
      },
      {
        title: 'Marques reconnues',
        description:
          'Sélection d’équipements fiables (tels que Airwell, Daikin ou Mitsubishi sous réserve de disponibilité et confirmation Saufra).',
      },
      {
        title: 'Mono-split, multi-split ou gainable',
        description:
          'Dimensionnement adapté à la surface de vos pièces et à la qualité d’isolation de vos fenêtres.',
      },
    ],
    subServices: [],
    faqs: [
      {
        question: 'Saufra assure-t-il toujours la pose de climatisation ?',
        answer:
          'Cette prestation historique fait l’objet d’une confirmation directe avec M. Benayoun lors de votre prise de contact afin de vous orienter vers l’équipe habilitée adaptée à votre chantier.',
      },
    ],
    notice:
      'Prestation et références de marques (Airwell, Daikin, Mitsubishi) à confirmer auprès de Saufra lors de votre demande de devis.',
  },
];

export const STORE_GALLERY_ITEMS = [
  {
    name: 'Store banne',
    category: 'Extérieur',
    image: '/assets/saufra/store-banne.png',
    description: 'Ombrage large de terrasse et balcon, toile acrylique haute tenue UV.',
  },
  {
    name: 'Store coffre',
    category: 'Extérieur',
    image: '/assets/saufra/store-coffre.png',
    description: 'Caisson intégral protégeant toile et bras articulés une fois replié.',
  },
  {
    name: 'Store vertical ZIP',
    category: 'Extérieur',
    image: '/assets/saufra/store-vertical.png',
    description: 'Protection solaire et anti-vent guidée par coulisses pour baies ou pergolas.',
  },
  {
    name: 'Store vénitien',
    category: 'Intérieur',
    image: '/assets/saufra/store-venitien.png',
    description: 'Lamelles aluminium orientables pour doser finement la luminosité.',
  },
  {
    name: 'Store à cassette',
    category: 'Intérieur',
    image: '/assets/saufra/store-cassette.png',
    description: 'Fixation discrète directement sur le cadre de fenêtre sans encombrement.',
  },
  {
    name: 'Store enrouleur',
    category: 'Intérieur',
    image: '/assets/saufra/store-enrouleur.png',
    description: 'Ligne épurée avec toiles techniques M1, screen ou occultantes.',
  },
];

export const WINDOW_COMPARISON_ROWS = [
  {
    criterion: 'Isolation thermique & acoustique',
    pvc: 'Très élevée (chambres multiples)',
    alu: 'Élevée (rupture de pont thermique)',
    bois: 'Naturellement très élevée',
  },
  {
    criterion: 'Grandes baies vitrées & finesse',
    pvc: 'Bonne (profils affinés)',
    alu: 'Optimale (rigidité maximale)',
    bois: 'Bonne (selon section)',
  },
  {
    criterion: 'Entretien au quotidien',
    pvc: 'Zéro entretien (eau savonneuse)',
    alu: 'Très faible (rinçage annuel)',
    bois: 'Lasure / peinture périodique',
  },
  {
    criterion: 'Choix esthétique & couleurs',
    pvc: 'Blanc, teintes unies & tons bois',
    alu: 'Tout nuancier RAL + bicoloration',
    bois: 'Essences nobles, lasures & teintes',
  },
  {
    criterion: 'Positionnement budget',
    pvc: 'Économique / meilleur ratio',
    alu: 'Intermédiaire à architectural',
    bois: 'Sur mesure patrimoine',
  },
];

export const REALISATIONS: ProjectRealisation[] = [
  {
    id: 'real-1',
    title: 'Pergola bioclimatique gris anthracite & store latéral',
    category: 'pergolas',
    categoryLabel: 'Pergolas',
    commune: 'Secteur Mauguio',
    material: 'Aluminium thermolaqué',
    description: 'Pose adossée avec lames orientables et store ZIP latéral brise-soleil.',
    image: '/assets/saufra/pergola-real-1.png',
    imageAlt: 'Pergola bioclimatique gris anthracite adossée avec store latéral',
    isClientPhoto: true,
  },
  {
    id: 'real-2',
    title: 'Pergola bioclimatique en terrasse d’étage',
    category: 'pergolas',
    categoryLabel: 'Pergolas',
    commune: 'Montpellier Métropole',
    material: 'Aluminium blanc & gris',
    description: 'Intégration sur terrasse R+1 permettant de créer un espace ombragé en hauteur.',
    image: '/assets/saufra/pergola-real-2.png',
    imageAlt: 'Pergola bioclimatique installée sur terrasse d’étage',
    isClientPhoto: true,
  },
  {
    id: 'real-3',
    title: 'Pergola bioclimatique adossée sur villa',
    category: 'pergolas',
    categoryLabel: 'Pergolas',
    commune: 'Secteur Hérault',
    material: 'Aluminium anthracite & lames claires',
    description: 'Prolongement direct du salon vers le jardin avec contraste lames blanches.',
    image: '/assets/saufra/pergola-real-3.png',
    imageAlt: 'Pergola bioclimatique adossée sur maison de plain-pied',
    isClientPhoto: true,
  },
  {
    id: 'real-4',
    title: 'Espace repas ombragé sous lames orientables',
    category: 'pergolas',
    categoryLabel: 'Pergolas',
    commune: 'Environs de Montpellier',
    material: 'Aluminium & vue panoramique',
    description: 'Protection solaire modulable conservant une vue dégagée sur l’horizon.',
    image: '/assets/saufra/pergola-real-4.png',
    imageAlt: 'Vue depuis l’intérieur d’une pergola bioclimatique avec lames orientées',
    isClientPhoto: true,
  },
  {
    id: 'real-5',
    title: 'Pergola blanche à stores ZIP latéraux',
    category: 'pergolas',
    categoryLabel: 'Pergolas',
    commune: 'Littoral Hérault',
    material: 'Aluminium blanc RAL',
    description: 'Salon de jardin protégé du vent marin grâce aux stores verticaux intégrés.',
    image: '/assets/saufra/pergola-real-7.png',
    imageAlt: 'Pergola bioclimatique blanche équipée de stores latéraux',
    isClientPhoto: true,
  },
  {
    id: 'real-6',
    title: 'Pergola avec éclairage de soirée intégré',
    category: 'pergolas',
    categoryLabel: 'Pergolas',
    commune: 'Secteur Mauguio',
    material: 'Aluminium & bandeaux LED',
    description: 'Terrasse conviviale utilisable jusqu’au soir grâce à l’éclairage périphérique.',
    image: '/assets/saufra/pergola-real-8.png',
    imageAlt: 'Pergola bioclimatique avec éclairage LED intégré en soirée',
    isClientPhoto: true,
  },
  {
    id: 'real-7',
    title: 'Baies coulissantes & fenêtres aluminium',
    category: 'fenetres',
    categoryLabel: 'Fenêtres',
    commune: 'Montpellier',
    material: 'Aluminium à rupture de pont thermique',
    description: 'Ouverture grand format apportant un maximum de clarté au séjour.',
    image: '/assets/saufra/fenetre-alu.png',
    imageAlt: 'Fenêtres et baies aluminium posées dans un salon lumineux',
    isClientPhoto: true,
  },
  {
    id: 'real-8',
    title: 'Volets roulants aluminium sur façade bois',
    category: 'volets',
    categoryLabel: 'Volets',
    commune: 'Pérols / Mauguio',
    material: 'Aluminium isolé motorisé',
    description: 'Intégration harmonieuse des coffres et tabliers gris sur terrasse.',
    image: '/assets/saufra/volet-roulant.png',
    imageAlt: 'Volets roulants aluminium gris posés sur façade',
    isClientPhoto: true,
  },
  {
    id: 'real-9',
    title: 'Volets battants méditerranéens',
    category: 'volets',
    categoryLabel: 'Volets',
    commune: 'Baillargues',
    material: 'Aluminium ou bois sur mesure',
    description: 'Coloris bleu grisé soulignant une façade chaude du Sud.',
    image: '/assets/saufra/volet-battant.png',
    imageAlt: 'Volets battants bleu gris posés sur façade ocre',
    isClientPhoto: true,
  },
  {
    id: 'real-10',
    title: 'Porte d’entrée contemporaine anthracite',
    category: 'portes',
    categoryLabel: 'Portes',
    commune: 'Lattes',
    material: 'Aluminium haute sécurité',
    description: 'Design sobre à rainures horizontales avec vitrage latéral discret.',
    image: '/assets/saufra/porte-entree.png',
    imageAlt: 'Porte d’entrée contemporaine posée sur entrée bois',
    isClientPhoto: true,
  },
  {
    id: 'real-11',
    title: 'Porte de garage sectionnelle motorisée',
    category: 'portes',
    categoryLabel: 'Portes',
    commune: 'Castelnau-le-Lez',
    material: 'Panneaux acier isolés',
    description: 'Esthétique affleurante gris anthracite et ouverture motorisée silencieuse.',
    image: '/assets/saufra/porte-garage.png',
    imageAlt: 'Porte de garage sectionnelle gris anthracite',
    isClientPhoto: true,
  },
  {
    id: 'real-12',
    title: 'Véranda lumineuse ouverte sur jardin',
    category: 'verandas',
    categoryLabel: 'Vérandas',
    commune: 'Hérault',
    material: 'Aluminium blanc & vitrage isolant',
    description: 'Agrandissement de plain-pied offrant un espace détente lumineux toute l’année.',
    image: '/assets/saufra/veranda.png',
    imageAlt: 'Véranda aluminium blanche adossée à une villa provençale',
    isClientPhoto: true,
  },
];

export const COMMUNES_LOCAL: CommuneLocalPage[] = [
  {
    slug: 'mauguio',
    name: 'Mauguio',
    postalCode: '34130',
    distanceLabel: 'Siège / secteur de proximité',
    metaTitle: 'Menuisier Mauguio (34130) | Pergolas, fenêtres, volets Saufra',
    metaDescription:
      'Saufra Menuiseries à Mauguio : installation de pergolas bioclimatiques, fenêtres PVC/alu/bois, volets roulants, portes et stores. Devis gratuit.',
    headline: 'Votre menuisier de proximité à Mauguio et ZAC Fréjorgues',
    habitatProfile:
      'Maisons individuelles récentes, villas avec jardin autour de l’étang de l’Or et habitations de cœur de ville aux façades traditionnelles.',
    localConstraints:
      'Fort ensoleillement estival sur les terrasses exposées sud/sud-ouest, brises thermiques régulières et proximité de zones d’activité ou axes aéroportuaires nécessitant un bon affaiblissement acoustique.',
    recommendedSolutions: [
      'Pergola bioclimatique L’Originale Classic pour vivre dehors d’avril à octobre',
      'Fenêtres PVC ou aluminium avec vitrage acoustique renforcé',
      'Volets roulants motorisés et portes de garage sectionnelles isolées',
    ],
    nearbyCommunes: ['Carnon', 'Pérols', 'Baillargues', 'Montpellier'],
  },
  {
    slug: 'montpellier',
    name: 'Montpellier',
    postalCode: '34000',
    distanceLabel: 'À 15 min de Mauguio',
    metaTitle: 'Fenêtres, volets et pergolas à Montpellier | Saufra Menuiseries',
    metaDescription:
      'Remplacement de fenêtres, volets roulants, portes blindées et pergolas bioclimatiques à Montpellier. Étude gratuite à domicile par Saufra.',
    headline: 'Menuiseries et rénovations sur mesure à Montpellier',
    habitatProfile:
      'Appartements en centre-ville (Écusson, Antigone, Port Marianne), résidences des années 70-90 et villas urbaines dans les quartiers nord et est.',
    localConstraints:
      'Règlements de copropriété stricts sur les coloris de façade, exigences de sécurité sur les paliers d’immeubles, chaleur urbaine estivale et bruits de circulation.',
    recommendedSolutions: [
      'Portes blindées bicolores conformes aux exigences de copropriété',
      'Fenêtres PVC ou aluminium acoustiques et jalousies / persiennes adaptées',
      'Stores coffres de balcon et pergolas sur terrasses d’étage',
    ],
    nearbyCommunes: ['Castelnau-le-Lez', 'Lattes', 'Mauguio', 'Pérols'],
  },
  {
    slug: 'perols',
    name: 'Pérols',
    postalCode: '34470',
    distanceLabel: 'À 8 min de Mauguio',
    metaTitle: 'Pergolas et menuiseries à Pérols (34470) | Saufra',
    metaDescription:
      'Installation de pergolas bioclimatiques, baies vitrées aluminium, volets et stores à Pérols. Déplacement gratuit avec Saufra.',
    headline: 'Pergolas, baies vitrées et protections solaires à Pérols',
    habitatProfile:
      'Quartiers résidentiels pavillonnaires, villas contemporaines ouvertes sur piscine et maisons de village proches des étangs.',
    localConstraints:
      'Air légèrement salin et entrées maritimes humides demandant des traitements thermolaqués résistants à la corrosion et des protections solaires efficaces.',
    recommendedSolutions: [
      'Pergola bioclimatique aluminium thermolaquée avec stores ZIP anti-vent',
      'Baies vitrées coulissantes aluminium à rupture de pont thermique',
      'Stores bannes coffres intégraux pour préserver les toiles',
    ],
    nearbyCommunes: ['Carnon', 'Mauguio', 'Lattes', 'Palavas-les-Flots'],
  },
  {
    slug: 'lattes',
    name: 'Lattes',
    postalCode: '34970',
    distanceLabel: 'À 12 min de Mauguio',
    metaTitle: 'Menuiserie et pergola bioclimatique à Lattes | Saufra',
    metaDescription:
      'Saufra intervient à Lattes, Boirargues et Maurin pour vos pergolas bioclimatiques, fenêtres, portes d’entrée et vérandas sur mesure.',
    headline: 'Aménagez votre villa à Lattes, Boirargues et Maurin',
    habitatProfile:
      'Villas familiales avec jardins arborés, maisons d’architecte le long du Lez et résidences modernes autour de Port Ariane.',
    localConstraints:
      'Grande exposition au soleil languedocien, recherche d’extensions lumineuses et besoin de sécurisation des accès résidentiels.',
    recommendedSolutions: [
      'Vérandas quatre saisons et extensions vitrées sur mesure',
      'Portes d’entrée contemporaines et portes de garage motorisées',
      'Pergolas adossées avec éclairage LED intégré',
    ],
    nearbyCommunes: ['Pérols', 'Montpellier', 'Palavas-les-Flots', 'Mauguio'],
  },
  {
    slug: 'castelnau-le-lez',
    name: 'Castelnau-le-Lez',
    postalCode: '34170',
    distanceLabel: 'À 15 min de Mauguio',
    metaTitle: 'Menuisier Castelnau-le-Lez (34170) | Fenêtres & Pergolas Saufra',
    metaDescription:
      'Fenêtres aluminium grand format, volets roulants, portes et pergolas sur mesure à Castelnau-le-Lez par Saufra Menuiseries.',
    headline: 'Menuiseries architecturales à Castelnau-le-Lez',
    habitatProfile:
      'Villas sur coteaux, propriétés contemporaines avec larges ouvertures vitrées et appartements récents le long de l’avenue de l’Europe.',
    localConstraints:
      'Façades contemporaines nécessitant des profilés fins en teintes RAL modernes (gris 7016, noir sablé) et une excellente isolation thermique.',
    recommendedSolutions: [
      'Fenêtres et coulissants aluminium grande largeur',
      'Pergolas bioclimatiques autoportantes près de la piscine',
      'Stores extérieurs ZIP et stores intérieurs techniques M1',
    ],
    nearbyCommunes: ['Montpellier', 'Baillargues', 'Mauguio'],
  },
  {
    slug: 'baillargues',
    name: 'Baillargues',
    postalCode: '34670',
    distanceLabel: 'À 10 min de Mauguio',
    metaTitle: 'Pergolas, volets et fenêtres à Baillargues | Saufra',
    metaDescription:
      'Pose de fenêtres PVC/alu/bois, volets battants ou roulants et pergolas bioclimatiques à Baillargues et Vendargues avec Saufra.',
    headline: 'Rénovation de menuiseries à Baillargues et environs',
    habitatProfile:
      'Maisons vigneronnes rénovées, lotissements calmes et villas familiales sur de belles parcelles.',
    localConstraints:
      'Alternance de bâtis anciens nécessitant respect du cachet (volets battants, bois) et de villas récentes orientées confort extérieur.',
    recommendedSolutions: [
      'Volets battants aluminium isolés ou bois assortis aux façades',
      'Fenêtres PVC haute isolation pour maîtriser sa facture énergétique',
      'Carports aluminium et pergolas sur mesure',
    ],
    nearbyCommunes: ['Mauguio', 'Lunel', 'Castelnau-le-Lez'],
  },
  {
    slug: 'lunel',
    name: 'Lunel',
    postalCode: '34400',
    distanceLabel: 'À 18 min de Mauguio',
    metaTitle: 'Menuiserie et rénovation à Lunel (34400) | Saufra',
    metaDescription:
      'Saufra intervient à Lunel et en Petite Camargue pour vos fenêtres, volets, portes de garage et pergolas bioclimatiques.',
    headline: 'Intervention sur mesure à Lunel et en Petite Camargue',
    habitatProfile:
      'Pavillons des années 80-2000 en cours de rénovation énergétique, maisons de village et propriétés rurales.',
    localConstraints:
      'Mistral et tramontane pouvant souffler fort en hiver, étés très chauds nécessitant des volets isolants et protections extérieures robustes.',
    recommendedSolutions: [
      'Remplacement complet de menuiseries anciennes par du PVC ou alu isolant',
      'Volets roulants aluminium avec verrous anti-soulevement',
      'Portes d’entrée isolantes et portes de garage sectionnelles',
    ],
    nearbyCommunes: ['Baillargues', 'Mauguio', 'La Grande-Motte'],
  },
  {
    slug: 'la-grande-motte',
    name: 'La Grande-Motte',
    postalCode: '34280',
    distanceLabel: 'À 12 min de Mauguio',
    metaTitle: 'Stores, volets et pergolas à La Grande-Motte | Saufra',
    metaDescription:
      'Menuiseries résistantes au milieu marin à La Grande-Motte : stores coffres, fenêtres aluminium, volets roulants et pergolas.',
    headline: 'Protections solaires et menuiseries marines à La Grande-Motte',
    habitatProfile:
      'Résidences balnéaires emblématiques aux grandes loggias, appartements vue mer et villas du Ponant.',
    localConstraints:
      'Exposition directe aux embruns salins, au soleil intense et aux rafales côtières nécessitant une quincaillerie et un thermolaquage adaptés.',
    recommendedSolutions: [
      'Stores coffres et stores bannes avec capteur anémomètre vent',
      'Menuiseries aluminium haute résistance marine',
      'Volets roulants aluminium blancs conformes aux résidences',
    ],
    nearbyCommunes: ['Carnon', 'Mauguio', 'Lunel', 'Pérols'],
  },
  {
    slug: 'carnon',
    name: 'Carnon-Plage',
    postalCode: '34280',
    distanceLabel: 'À 10 min de Mauguio',
    metaTitle: 'Fenêtres, volets et stores à Carnon (34280) | Saufra',
    metaDescription:
      'Rénovation de menuiseries côtières à Carnon : baies vitrées alu, volets roulants, stores extérieurs et portes sécurisées par Saufra.',
    headline: 'Menuiseries et stores adaptés au littoral de Carnon',
    habitatProfile:
      'Appartements de front de mer, marinas côté port et maisons de plage rattachées à la commune de Mauguio.',
    localConstraints:
      'Vent marin chargé d’embruns et éblouissement important sur les baies exposées plein sud face à la Méditerranée.',
    recommendedSolutions: [
      'Baies coulissantes aluminium étanches à l’air et à l’eau',
      'Stores verticaux ZIP et stores intérieurs screen anti-éblouissement',
      'Portes blindées et volets roulants motorisés',
    ],
    nearbyCommunes: ['Mauguio', 'Pérols', 'Palavas-les-Flots', 'La Grande-Motte'],
  },
  {
    slug: 'palavas-les-flots',
    name: 'Palavas-les-Flots',
    postalCode: '34250',
    distanceLabel: 'À 14 min de Mauguio',
    metaTitle: 'Menuisier Palavas-les-Flots (34250) | Volets, Stores & Pergolas',
    metaDescription:
      'Pose de volets roulants, persiennes, fenêtres et stores extérieurs à Palavas-les-Flots. Étude gratuite à domicile Saufra.',
    headline: 'Menuiseries durables en bord de mer à Palavas-les-Flots',
    habitatProfile:
      'Maisons de pêcheurs rénovées, résidences rive droite / rive gauche et appartements avec terrasses exposées.',
    localConstraints:
      'Humidité saline permanente et forte exposition solaire nécessitant des matériaux inoxydables et faciles à entretenir.',
    recommendedSolutions: [
      'Fenêtres PVC ou aluminium traité bord de mer',
      'Persiennes et volets battants résistants à l’air marin',
      'Stores bannes et pergolas compactes pour terrasses',
    ],
    nearbyCommunes: ['Carnon', 'Pérols', 'Lattes'],
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'pergola-bioclimatique-prix-avantages-autorisations-entretien',
    title: 'Pergola bioclimatique : prix, avantages, autorisations et entretien',
    metaTitle: 'Pergola bioclimatique : prix, avantages et autorisations | Blog Saufra',
    metaDescription:
      'Tout savoir avant d’installer une pergola bioclimatique dans l’Hérault : budget indicatif, déclaration préalable, lames orientables et entretien.',
    category: 'Pergolas bioclimatiques',
    readTime: '6 min de lecture',
    updatedAt: 'Novembre 2026',
    excerpt:
      'Comment bien préparer votre projet de pergola à lames orientables à Mauguio ou Montpellier : critères de prix, démarches en mairie et astuces d’utilisation.',
    image: '/assets/saufra/pergola-real-1.png',
    imageAlt: 'Pergola bioclimatique aluminium posée sur terrasse dallée',
    relatedServicePath: '/pergolas-bioclimatiques/',
    relatedServiceLabel: 'Découvrir nos pergolas bioclimatiques',
    sections: [
      {
        heading: 'Pourquoi la pergola bioclimatique séduit autant dans l’Hérault ?',
        paragraphs: [
          'Contrairement à une tonnelle classique ou à une toiture pleine qui assombrit le salon en hiver, la pergola bioclimatique s’adapte à chaque saison grâce à ses lames en aluminium motorisées. Sous le soleil de Mauguio ou de Montpellier, il suffit d’incliner les lames de quelques degrés pour créer un courant d’air ascendant qui évacue la chaleur accumulée.',
          'Lorsqu’une averse méditerranéenne survient, la fermeture complète des lames assure une étanchéité efficace et dirige l’eau vers les gouttières intégrées aux poteaux.',
        ],
      },
      {
        heading: 'Quels critères influencent le prix d’une pergola sur mesure ?',
        paragraphs: [
          'Le budget dépend directement des dimensions de la terrasse (3 × 3 m, 4 × 3,5 m ou grande largeur à travées multiples), du mode de fixation (adossée sur deux poteaux ou autoportante sur quatre poteaux) et des équipements choisis.',
          'Les options les plus demandées par nos clients sont les bandeaux LED intégrés dans les chéneaux, les capteurs automatiques vent/pluie et les stores latéraux ZIP qui coupent le vent rasant ou le soleil couchant.',
        ],
        bullets: [
          'Dimensions et nombre de poteaux nécessaires',
          'Pose adossée à la façade ou autoportante près de la piscine',
          'Équipements : stores ZIP, LED, chauffage radiant ou parois vitrées',
          'Préparation éventuelle des appuis ou plots béton',
        ],
      },
      {
        heading: 'Autorisations d’urbanisme et entretien au quotidien',
        paragraphs: [
          'Avant d’installer une pergola adossée à la maison, vérifiez le Plan Local d’Urbanisme (PLU) de votre commune : au-delà de 5 m² d’emprise au sol, une déclaration préalable de travaux est généralement requise en mairie (jusqu’à 20 m², voire 40 m² en zone urbaine couverte par un PLU).',
          'Côté entretien, un simple nettoyage à l’eau claire avec un détergent doux une à deux fois par an, accompagné du dégagement des feuilles dans les gouttières, suffit à préserver la motorisation et le thermolaquage pendant de longues années.',
        ],
      },
    ],
  },
  {
    slug: 'fenetres-pvc-aluminium-ou-bois-lequel-choisir',
    title: 'Fenêtres PVC, aluminium ou bois : lequel choisir pour votre logement ?',
    metaTitle: 'Fenêtres PVC, alu ou bois : comparatif complet | Blog Saufra',
    metaDescription:
      'Comparatif objectif entre fenêtres PVC, aluminium et bois pour votre rénovation dans l’Hérault : isolation, luminosité, entretien et budget.',
    category: 'Fenêtres',
    readTime: '5 min de lecture',
    updatedAt: 'Novembre 2026',
    excerpt:
      'Isolation thermique, finesse des montants, résistance au climat du Sud ou budget : les clés pour choisir le bon matériau pièce par pièce.',
    image: '/assets/saufra/fenetre-alu.png',
    imageAlt: 'Comparatif entre grandes fenêtres aluminium et menuiseries isolantes',
    relatedServicePath: '/fenetres/',
    relatedServiceLabel: 'Explorer nos fenêtres PVC, alu et bois',
    sections: [
      {
        heading: 'Le PVC : champion du rapport isolation / budget',
        paragraphs: [
          'Idéal en rénovation d’appartement ou de maison individuelle, le PVC moderne affiche d’excellentes performances thermiques et acoustiques sans demander d’entretien particulier. Ses profilés actuels se sont affinés pour laisser entrer davantage de lumière et intègrent des renforts acier.',
        ],
      },
      {
        heading: 'L’aluminium : la solution lumière et grandes baies vitrées',
        paragraphs: [
          'Pour les baies vitrées coulissantes donnant sur une terrasse ou un jardin, l’aluminium reste incontournable grâce à sa rigidité structurelle. Avec la rupture de pont thermique, il assure une bonne isolation tout en offrant la plus large palette de couleurs et des montants très fins.',
        ],
      },
      {
        heading: 'Le bois : charme naturel et zones protégées',
        paragraphs: [
          'Le bois demeure le matériau privilégié dans les centres historiques (comme l’Écusson à Montpellier ou les cœurs de villages) et pour les propriétaires attachés à la matière naturelle. Traité IFH et issu de forêts gérées durablement, il allie longévité et noblesse.',
        ],
      },
    ],
  },
  {
    slug: 'volet-roulant-battant-ou-persienne-comparatif',
    title: 'Volet roulant, battant ou persienne : comparatif pour votre maison',
    metaTitle: 'Volet roulant, battant ou persienne : comparatif | Blog Saufra',
    metaDescription:
      'Quel type de volet choisir entre roulant motorisé, battant et persienne dans le Sud ? Avantages, isolation et esthétique.',
    category: 'Volets',
    readTime: '5 min de lecture',
    updatedAt: 'Novembre 2026',
    excerpt:
      'Chaque façade a ses contraintes : confort d’ouverture en un clic, charme provençal ou ventilation estivale tamisée.',
    image: '/assets/saufra/volet-battant.png',
    imageAlt: 'Volets battants posés sur façade méditerranéenne',
    relatedServicePath: '/volets/',
    relatedServiceLabel: 'Voir toutes nos gammes de volets',
    sections: [
      {
        heading: 'Le volet roulant : praticité et obscurcissement total',
        paragraphs: [
          'Plébiscité au quotidien pour sa motorisation silencieuse, le volet roulant aluminium permet de fermer toute la maison sans ouvrir les fenêtres par grand vent ou forte chaleur. Il renforce aussi la sécurité grâce aux verrous anti-relevage.',
        ],
      },
      {
        heading: 'Le volet battant et la persienne : l’âme des façades du Sud',
        paragraphs: [
          'Le volet battant en aluminium isolé, PVC ou bois habille authentiquement une maison tout en offrant une belle tenue face au soleil. La persienne ou la jalousie, quant à elle, permet de ventiler naturellement les pièces l’été tout en coupant les rayons directs.',
        ],
      },
    ],
  },
  {
    slug: 'declaration-prealable-ou-permis-pergola-veranda-extension',
    title: 'Déclaration préalable ou permis pour une pergola, véranda ou extension ?',
    metaTitle: 'Autorisations travaux pergola et véranda | Blog Saufra',
    metaDescription:
      'Seuils 5 m², 20 m² et 40 m² : quelles démarches en mairie prévoir avant de poser une pergola ou une véranda dans l’Hérault ?',
    category: 'Urbanisme & Conseils',
    readTime: '5 min de lecture',
    updatedAt: 'Novembre 2026',
    excerpt:
      'Faire le point sur les seuils réglementaires et le Plan Local d’Urbanisme avant de lancer votre agrandissement ou votre couverture de terrasse.',
    image: '/assets/saufra/veranda.png',
    imageAlt: 'Véranda et extension aluminium en zone résidentielle',
    relatedServicePath: '/verandas-extensions/',
    relatedServiceLabel: 'Découvrir nos vérandas et extensions',
    sections: [
      {
        heading: 'Pergola adossée ou autoportante : les seuils d’emprise au sol',
        paragraphs: [
          'En dessous de 5 m² d’emprise au sol (hors secteur protégé ABF), une installation est généralement dispensée de formalités. Entre 5 m² et 20 m², une déclaration préalable de travaux (cerfa en mairie) est requise.',
        ],
      },
      {
        heading: 'Véranda et extension en zone urbaine couverte par un PLU',
        paragraphs: [
          'Si votre commune dispose d’un PLU et que votre terrain est en zone urbaine (zone U), le seuil de la déclaration préalable pour une extension ou véranda accolée monte jusqu’à 40 m², à condition que la surface totale après travaux n’excède pas 150 m².',
        ],
      },
    ],
  },
  {
    slug: 'aides-financieres-renovation-energetique-fenetres',
    title: 'Aides financières à la rénovation énergétique : ce qu’il faut vérifier',
    metaTitle: 'Aides rénovation énergétique fenêtres | Blog Saufra',
    metaDescription:
      'MaPrimeRénov’, TVA réduite, éco-PTZ : les conditions d’éligibilité à vérifier avant de remplacer vos fenêtres et volets.',
    category: 'Budget & Rénovation',
    readTime: '4 min de lecture',
    updatedAt: 'Novembre 2026',
    excerpt:
      'Les dispositifs évoluent chaque année : vérifiez les critères techniques, les conditions de ressources et les labels exigés avant de signer votre devis.',
    image: '/assets/saufra/fenetre-pvc.png',
    imageAlt: 'Fenêtres PVC double vitrage à isolation thermique renforcée',
    relatedServicePath: '/devis-gratuit/',
    relatedServiceLabel: 'Demander une étude personnalisée',
    sections: [
      {
        heading: 'Des conditions réglementaires à contrôler à date',
        paragraphs: [
          'Les aides publiques à la rénovation énergétique (telles que MaPrimeRénov’, les certificats d’économies d’énergie CEE, l’éco-prêt à taux zéro ou la TVA réduite sur la rénovation de logements de plus de 2 ans) obéissent à des règles précises qui évoluent régulièrement.',
          'Avant d’intégrer une prime dans votre plan de financement, il convient de vérifier l’éligibilité exacte de votre ménage, les performances thermiques minimales requises (Uw, Sw) et les certifications exigées pour l’entreprise réalisant la pose.',
        ],
      },
    ],
  },
  {
    slug: 'comment-choisir-porte-entree-ou-porte-blindee',
    title: 'Comment choisir sa porte d’entrée ou sa porte blindée ?',
    metaTitle: 'Choisir sa porte d’entrée ou porte blindée | Blog Saufra',
    metaDescription:
      'Critères essentiels pour bien choisir votre porte d’entrée ou bloc-porte blindé : sécurité multipoints, isolation et style.',
    category: 'Portes & Sécurité',
    readTime: '5 min de lecture',
    updatedAt: 'Novembre 2026',
    excerpt:
      'Serrure multipoints, vitrage retardateur d’effraction, bicoloration ou performance thermique : les points clés pour décider sereinement.',
    image: '/assets/saufra/porte-blindee.png',
    imageAlt: 'Porte blindée design installée dans une entrée contemporaine',
    relatedServicePath: '/portes/',
    relatedServiceLabel: 'Voir nos portes d’entrée et blindées',
    sections: [
      {
        heading: 'Sécurité : regarder au-delà de l’apparence',
        paragraphs: [
          'Une bonne porte d’entrée associe un panneau épais, un dormant rigide bien ancré dans la maçonnerie, des paumelles réglables anti-dégondage et une serrure multipoints à crochets. En appartement ou pour une protection maximale, le bloc-porte blindé offre une structure acier complète et une isolation acoustique précieuse.',
        ],
      },
      {
        heading: 'Lumière et isolation thermique',
        paragraphs: [
          'Si votre entrée manque de lumière naturelle, optez pour une porte semi-vitrée équipée d’un triple vitrage feuilleté décoratif qui préserve votre intimité tout en apportant de la clarté sans faiblir sur la sécurité.',
        ],
      },
    ],
  },
];

export const SITE_ROUTES = [
  { label: 'Accueil', path: '/' },
  { label: 'Pergolas bioclimatiques', path: '/pergolas-bioclimatiques/' },
  { label: 'Fenêtres (PVC, Alu, Bois)', path: '/fenetres/' },
  { label: 'Fenêtres PVC', path: '/fenetres/pvc/' },
  { label: 'Fenêtres Aluminium', path: '/fenetres/aluminium/' },
  { label: 'Fenêtres Bois', path: '/fenetres/bois/' },
  { label: 'Volets (Roulants, Battants, Persiennes, Jalousies)', path: '/volets/' },
  { label: 'Volets roulants', path: '/volets/volets-roulants/' },
  { label: 'Volets battants', path: '/volets/volets-battants/' },
  { label: 'Persiennes', path: '/volets/persiennes/' },
  { label: 'Jalousies', path: '/volets/jalousies/' },
  { label: 'Portes (Entrée, Blindées, Garage)', path: '/portes/' },
  { label: 'Portes d’entrée', path: '/portes/portes-d-entree/' },
  { label: 'Portes blindées', path: '/portes/portes-blindees/' },
  { label: 'Portes de garage', path: '/portes/portes-de-garage/' },
  { label: 'Stores intérieurs & extérieurs', path: '/stores/' },
  { label: 'Stores intérieurs', path: '/stores/stores-interieurs/' },
  { label: 'Stores extérieurs', path: '/stores/stores-exterieurs/' },
  { label: 'Vérandas & extensions', path: '/verandas-extensions/' },
  { label: 'Climatisation', path: '/climatisation/' },
  { label: 'Réalisations', path: '/realisations/' },
  { label: 'À propos & Engagements', path: '/a-propos/' },
  { label: 'Zones d’intervention (Hérault)', path: '/zones-d-intervention/' },
  { label: 'Blog & Guides conseils', path: '/blog/' },
  { label: 'Demander un devis gratuit', path: '/devis-gratuit/' },
  { label: 'Contact', path: '/contact/' },
  { label: 'Mentions légales', path: '/mentions-legales/' },
  { label: 'Politique de confidentialité', path: '/politique-de-confidentialite/' },
];
