import React from 'react';

export type Language = 'en' | 'id';

export interface MultilingualText {
  en: string;
  id: string;
}

export interface MultilingualTextArray {
  en: string[];
  id: string[];
}

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: MultilingualText;
  description: MultilingualText;
  details?: MultilingualText; // For interactive element
}

export interface PortfolioProject {
  id: string;
  title: MultilingualText;
  category: MultilingualText; // Category itself will be translated
  imageUrl?: string;
  videoUrl?: string; // For webm or mp4 video
  description: MultilingualText;
  longDescription: MultilingualText;
  technologies: string[];
  liveLink?: string;
  caseStudyLink?: string;
  documentationImageUrls?: string[]; // Added for image gallery in modal
}

export interface Testimonial {
  id: string;
  name: string; // Name might not need translation, but role/company would
  role: MultilingualText;
  company?: string; // Company name usually not translated unless it has a local variant
  avatarUrl: string;
  quote: MultilingualText;
}

export type Theme = 'light' | 'dark';

export interface NavLink {
  id: string;
  label: MultilingualText;
  href: string;
}

// FIX: Add ClientLogoData interface and export it
export interface ClientLogoData {
  id: string;
  name: string;
  logoUrl: string;
}
