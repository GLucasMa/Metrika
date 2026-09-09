export interface CarouselImage {
  src: string;
  alt: string;
}

export interface Material {
  name: string;
  description: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'whatsapp' | 'facebook' | 'tiktok';
}

export interface NavLink {
  label: string;
  target: string;
}
