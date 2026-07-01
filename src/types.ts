/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools';
  percentage: number;
  color: string; // Neon shadow color
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  image: string; // Picsum or gradient background
  role: string;
  features: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilities: string[];
}

export interface Achievement {
  id: string;
  title: string;
  count: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
  rating: number;
}
