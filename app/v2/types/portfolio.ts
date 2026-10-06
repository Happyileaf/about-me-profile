export interface Project {
  id: string;
  tag: string;
  title: string;
  href: string;
  desc: string;
  tech: string[];
  github?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  deliverables: string[];
  techStack?: string[];
  link?: string;
  status: 'ACTIVE' | 'ARCHIVED';
}

export interface ProjectExperienceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  domain: string;
  intro: string;
  techStack: string[];
  responsibilities: string[];
  achievements?: string[];
  tag: string;
  link?: string;
  status: 'ACTIVE' | 'ARCHIVED';
}

export interface TechStackItem {
  name: string;
  icon?: string;
  color?: string;
  badge?: string;
}

export interface TechStackGroup {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  chineseSubtitle: string;
  accentColor: string;
  accentBorder?: string;
  iconType: 'frontend' | 'backend' | 'mobile' | 'devops' | 'ai' | 'observability';
  gridSpan: string;
  items: TechStackItem[];
  isHighlighted?: boolean;
}

export interface TaxonomyCategory {
  index: string;
  name: string;
  focus: string;
  technologies: string[];
  invariants: string;
  productionRigor: string;
}

export interface FieldNote {
  id: string;
  dispatchNumber: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  motto: string;
  description: string;
}
