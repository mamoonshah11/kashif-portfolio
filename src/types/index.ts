export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  tools: string[];
  category: 'character' | 'pipeline' | 'texturing' | 'hardsurface' | 'product' | 'web3d' | 'printing' | 'concept';
  icon: string;
  estimatedTimeline: string;
  targetEngines: string[];
  tagline: string;
}

export interface ProjectMediaItem {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video';
  extension: string;
  caption?: string;
}

export interface ProjectItem {
  id: string;
  sequenceNumber: number;
  folderName: string;
  title: string;
  category: string;
  badge: string;
  specs: string;
  polyCount: string;
  textureSets: string;
  engineReady: string;
  overview: string;
  deliverables: string[];
  tools: string[];
  wireframeAvailable?: boolean;
  hasInteractive3D?: boolean;
  keyHighlights: { label: string; value: string }[];
  clientOrContext: string;
  aestheticTone: string;
  clientLink?: string | null;
  clientLinkTitle?: string | null;
  clientLinkType?: 'website' | 'linkedin' | 'playstore' | 'general' | null;
  mediaCount: number;
  imageCount: number;
  videoCount: number;
  coverMedia: ProjectMediaItem;
  media: ProjectMediaItem[];
}

export interface SoftwareItem {
  name: string;
  category: string;
  level: string;
  experienceYears: string;
  description: string;
  coreUseCases: string[];
  color: string;
}

export interface PipelinePhaseItem {
  phase: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  reviewGate: string;
}

export interface CommissionFormData {
  clientName: string;
  email: string;
  projectType: string;
  targetPolyCount: string;
  budgetRange: string;
  brief: string;
  deadline: string;
  referenceUrl?: string;
}
