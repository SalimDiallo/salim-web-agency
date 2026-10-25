import {
  Monitor,
  Zap,
  Shield,
  Code,
  Palette,
  Layers,
  PenTool,
  Sparkles,
  Search,
  Rocket,
  Globe,
  ShoppingCart,
  LineChart,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Contenu central de la plateforme SD.
 * Modifier ce fichier suffit à mettre à jour tout le site.
 */

export const brand = {
  name: "SD",
  fullName: "Salim Diallo",
  descriptor: "Web Studio",
  tagline: "Studio digital & création de sites web",
  email: "sidymamadousalim@gmail.com",
  website: "www.salimdiallo.com",
  websiteUrl: "https://www.salimdiallo.com",
  description:
    "SD conçoit et développe des sites web et plateformes sur-mesure, rapides et élégants, qui transforment vos visiteurs en clients.",
  copyright: `© ${new Date().getFullYear()} Salim Diallo — SD Web Studio. Tous droits réservés.`,
};

export const nav: { name: string; href: string }[] = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projets", href: "/projets" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  { icon: Code, title: "Développement web", description: "Rapide & sur-mesure" },
  { icon: ShoppingCart, title: "E-commerce", description: "Vendez plus, mieux" },
  { icon: Palette, title: "Design & branding", description: "Une marque mémorable" },
  { icon: Search, title: "SEO & performance", description: "Visible sur Google" },
  { icon: Smartphone, title: "Sites mobiles", description: "Impeccable partout" },
  { icon: Shield, title: "Maintenance", description: "Sécurisé & serein" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageSrc: string;
  url?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "vitality-wellness",
    title: "Vitality Wellness",
    category: "Santé & bien-être",
    year: "2025",
    description:
      "Plateforme de bien-être avec réservation en ligne, blog santé et espace membre personnalisé.",
    imageSrc:
      "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew1.webp",
    tags: ["Web app", "Réservation", "SEO"],
  },
  {
    slug: "mailflow-ai",
    title: "Mailflow AI",
    category: "SaaS / IA",
    year: "2025",
    description:
      "Plateforme d'email marketing propulsée par l'IA : automatisations, analytics et éditeur visuel.",
    imageSrc:
      "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew2.webp",
    tags: ["SaaS", "Dashboard", "IA"],
  },
  {
    slug: "kinetic-studios",
    title: "Kinetic Studios",
    category: "Studio créatif",
    year: "2024",
    description:
      "Site vitrine immersif pour un studio de motion design, avec galerie vidéo et animations sur-mesure.",
    imageSrc:
      "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew3.webp",
    tags: ["Vitrine", "Motion", "Branding"],
  },
];

export type ProcessStep = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    icon: Search,
    step: "01",
    title: "Découverte & stratégie",
    description:
      "On cerne vos objectifs, votre audience et vos concurrents pour définir la bonne direction.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & prototype",
    description:
      "Maquettes et prototypes interactifs validés ensemble avant la moindre ligne de code.",
  },
  {
    icon: Code,
    step: "03",
    title: "Développement",
    description:
      "Développement soigné, rapide et responsive, avec des points réguliers pour rester alignés.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lancement & suivi",
    description:
      "Mise en ligne, optimisation SEO et accompagnement continu pour faire grandir votre présence.",
  },
];

export const keywords: string[] = [
  "Design",
  "Développement",
  "Branding",
  "SEO",
  "E-commerce",
  "Stratégie",
];

export const clients: string[] = [
  "Vitality",
  "Mailflow",
  "Kinetic",
  "Luxuria",
  "Nordic Co.",
  "Orbit",
  "Lumen",
  "Everest",
  "Pulse",
  "Aura",
];

export type Metric = {
  value: string;
  title: string;
  features: string[];
};

export const metrics: Metric[] = [
  {
    value: "50+",
    title: "Projets livrés",
    features: [
      "Sites vitrines",
      "Boutiques e-commerce",
      "Applications SaaS",
      "Designs mobile-first",
    ],
  },
  {
    value: "99%",
    title: "Clients satisfaits",
    features: [
      "Livraison dans les délais",
      "Communication claire",
      "Support post-lancement",
      "Partenariats durables",
    ],
  },
  {
    value: "5+",
    title: "Années d'expérience",
    features: [
      "Expertise technique",
      "Travail soigné",
      "Clients variés",
      "Méthode éprouvée",
    ],
  },
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projets livrés" },
  { value: 99, suffix: "%", label: "Clients satisfaits" },
  { value: 5, suffix: " ans", label: "D'expérience" },
  { value: 2, suffix: " sem.", label: "Délai moyen" },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  imageSrc: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "pourquoi-un-site-rapide-convertit",
    title: "Pourquoi un site rapide convertit (bien) mieux",
    excerpt:
      "Chaque seconde de chargement vous coûte des clients. Voici comment la performance web impacte directement votre chiffre d'affaires.",
    date: "2026-09-28",
    readingTime: "5 min",
    category: "Performance",
    imageSrc:
      "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew2.webp",
    content: [
      "La vitesse n'est pas un détail technique : c'est une expérience. Google l'a confirmé à de multiples reprises — au-delà de 3 secondes de chargement, plus de la moitié des visiteurs quittent la page.",
      "Sur un site e-commerce, 100 ms de latence en moins peuvent représenter plusieurs points de conversion en plus. La performance se travaille dès la conception : images optimisées, code léger, rendu intelligent.",
      "Chez SD, chaque projet passe par un audit de performance avant la mise en ligne. L'objectif : un score Lighthouse élevé, un chargement quasi instantané, et une expérience fluide sur mobile comme sur desktop.",
    ],
  },
  {
    slug: "refonte-ou-nouveau-site",
    title: "Refonte ou nouveau site : comment choisir ?",
    excerpt:
      "Votre site vieillit mais le refaire de zéro fait peur ? On vous aide à trancher entre refonte et reconstruction.",
    date: "2026-09-10",
    readingTime: "4 min",
    category: "Stratégie",
    imageSrc:
      "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew1.webp",
    content: [
      "Une refonte préserve l'existant — contenu, référencement, historique — tout en modernisant le design et l'expérience. C'est souvent le bon choix quand les fondations sont saines.",
      "Un nouveau site part d'une page blanche : idéal quand la technologie est dépassée, que les besoins ont radicalement changé, ou que la marque se réinvente.",
      "La bonne décision dépend de trois critères : l'état technique actuel, vos objectifs à 2 ans, et votre budget. On réalise cet audit gratuitement lors du premier échange.",
    ],
  },
  {
    slug: "seo-les-bases-qui-comptent",
    title: "SEO : les bases qui comptent vraiment en 2026",
    excerpt:
      "Oubliez les recettes miracles. Voici les fondamentaux du référencement qui font encore la différence aujourd'hui.",
    date: "2026-08-22",
    readingTime: "6 min",
    category: "SEO",
    imageSrc:
      "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew3.webp",
    content: [
      "Le SEO a changé, mais ses piliers restent : un site rapide, un contenu utile, une structure claire et des liens de qualité.",
      "L'erreur la plus courante est de négliger l'intention de recherche. Répondre précisément à la question de l'internaute vaut mieux que de bourrer la page de mots-clés.",
      "La technique compte aussi : balises propres, données structurées, maillage interne et responsive design sont la base d'un référencement durable.",
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "SD a totalement transformé notre présence en ligne. Un site superbe, livré dans les délais, qui a doublé notre taux de conversion. Un vrai partenaire, pas juste un prestataire.",
    author: "Maria Santos",
    role: "CEO · Luxuria Travel",
    rating: 5,
    avatar:
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp",
    featured: true,
  },
  {
    quote:
      "Réactif, précis et de très bon conseil. Notre boutique tourne mieux que jamais.",
    author: "James Chen",
    role: "Fondateur · Nordic Co.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Le design dépasse tout ce qu'on imaginait. Nos clients nous le disent sans cesse.",
    author: "Sofia Reyes",
    role: "CMO · Pulse",
    rating: 5,
    avatar:
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.webp",
  },
  {
    quote:
      "Un accompagnement du début à la fin, sans jargon. Je recommande les yeux fermés.",
    author: "Emma Wilson",
    role: "Directrice · Aura Studio",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Combien de temps dure un projet ?",
    answer:
      "La plupart des projets sont livrés en 2 à 4 semaines selon leur ampleur. Vous recevez un planning détaillé dès le premier échange.",
  },
  {
    question: "Comment se passe la tarification ?",
    answer:
      "Je travaille au forfait, adapté à chaque projet. Chaque devis inclut le design, le développement, l'optimisation SEO et le support après lancement.",
  },
  {
    question: "Proposez-vous de la maintenance ?",
    answer:
      "Oui. Des forfaits de maintenance et de support permettent de garder votre site à jour, sécurisé et performant dans la durée.",
  },
  {
    question: "Pouvez-vous refaire mon site existant ?",
    answer:
      "Absolument. Je suis spécialisé dans les refontes qui modernisent votre marque tout en préservant votre contenu et votre référencement.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Des technologies modernes et éprouvées : React, Next.js et Tailwind CSS, pour des sites rapides, évolutifs et faciles à maintenir.",
  },
];

export const team = [
  {
    name: "Salim Diallo",
    role: "Fondateur & Développeur",
    imageSrc:
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp",
  },
  {
    name: "Studio Design",
    role: "Direction artistique",
    imageSrc:
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.webp",
  },
  {
    name: "Réseau partenaires",
    role: "Experts SEO & contenu",
    imageSrc:
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.webp",
  },
];

export const heroImages = {
  left: [
    "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp",
    "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp",
    "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp",
    "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-7.webp",
  ],
  right: [
    "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp",
    "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp",
    "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp",
    "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-8.webp",
  ],
};

export const bentoIcons = { Sparkles, Palette, Layers, PenTool, Code, Monitor, Zap, Shield, Globe, LineChart, ArrowUpRight };
