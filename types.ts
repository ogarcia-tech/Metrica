export interface TeamMember {
  id: number;
  name: string;
  role: string;
  title: string;
  mount: string;
  power: string;
  imageStr: string;
  gender?: 'male' | 'female';
}

export interface Service {
  id: string;
  name: string;
  subtitle: string;
  concept: string;
  humanTruth: string;
  price: string;
  description?: string;
  details?: string[];
  highlight?: string;
}

export interface SocialProof {
  client: string;
  result: string;
}

export interface Resource {
  id: string;
  category: string;
  title: string;
  description: string;
  format: string;
}

export interface ComparisonItem {
  feature: string;
  traditional: string;
  metrica: string;
}