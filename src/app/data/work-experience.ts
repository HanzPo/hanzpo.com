export type WorkId = 'kalshi' | 'shopify' | 'cohere' | 'uw';

export interface WorkExperience {
  id: WorkId;
  company: string;
  role: string;
  dates: string;
  logo: string;
  logoAlt: string;
  description: string;
  logoStyle: 'cover' | 'contain';
  hasWhiteBg: boolean;
}

export const workExperiences: WorkExperience[] = [
  {
    id: 'kalshi',
    company: 'kalshi',
    role: 'software engineer intern',
    dates: 'incoming jan 2026',
    logo: '/images/kalshi.png',
    logoAlt: 'kalshi logo',
    description: 'trade on anything',
    logoStyle: 'cover',
    hasWhiteBg: false,
  },
  {
    id: 'shopify',
    company: 'shopify',
    role: 'engineering intern',
    dates: 'may 2025 - aug 2025',
    logo: '/images/shopify_glyph.svg',
    logoAlt: 'shopify logo',
    description: 'worked on checkout flows for retail point of sale systems with ruby, react native, gRPC, and graphql.',
    logoStyle: 'contain',
    hasWhiteBg: true,
  },
  {
    id: 'cohere',
    company: 'cohere',
    role: 'senior data quality specialist',
    dates: 'sept 2024 - aug 2025',
    logo: '/images/cohere_logo.svg',
    logoAlt: 'cohere logo',
    description: 'worked on data quality and evaluation for language models on coding tasks.',
    logoStyle: 'contain',
    hasWhiteBg: true,
  },
];

export const socialLinks = [
  { label: 'resume', href: 'https://resume.hanzpo.com/resume.pdf' },
  { label: 'github', href: 'https://www.github.com/HanzPo' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/hanznathanpo/' },
  { label: 'twitter', href: 'https://x.com/hanznathanpo' },
  { label: 'instagram', href: 'https://www.instagram.com/hanznathanpo' },
];
