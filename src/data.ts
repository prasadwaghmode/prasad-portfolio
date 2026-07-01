

import { Skill, Project, Experience, Service, Achievement, Testimonial } from './types';

export const SKILLS_DATA: Skill[] = [
  { name: 'Angular', category: 'frontend', percentage: 97, color: 'rgba(224, 49, 49, 0.6)' },
  { name: 'TypeScript', category: 'frontend', percentage: 92, color: 'rgba(47, 112, 193, 0.6)' },
  { name: 'JavaScript', category: 'frontend', percentage: 93, color: 'rgba(240, 219, 79, 0.6)' },
  { name: 'Node.js', category: 'backend', percentage: 95, color: 'rgba(67, 160, 71, 0.6)' },
  { name: 'React.js', category: 'frontend', percentage: 93, color: 'rgba(115, 15, 235, 0.6)' },
  { name: 'Vue.js', category: 'frontend', percentage: 84, color: 'rgba(191, 64, 128, 0.6)' },
  { name: 'Express.js', category: 'backend', percentage: 93, color: 'rgba(120, 120, 120, 0.6)' },
  // { name: 'RxJS', category: 'frontend', percentage: 80, color: 'rgba(0, 216, 255, 0.6)' },
  // { name: 'NgRx', category: 'frontend', percentage: 80, color: 'rgba(255, 153, 0, 0.6)' },
  { name: 'HTML', category: 'frontend', percentage: 98, color: 'rgba(94, 231, 2, 0.6)' },
  { name: 'AWS', category: 'cloud', percentage: 89, color: 'rgba(255, 153, 0, 0.6)' },
  { name: 'Socket.io', category: 'backend', percentage: 94, color: 'rgba(115, 15, 235, 0.6)' },
  { name: 'Micro-Frontend', category: 'frontend', percentage: 91, color: 'rgba(0, 216, 255, 0.6)' },
  { name: 'Microservices', category: 'backend', percentage: 96, color: 'rgba(230, 114, 172, 0.6)' },
  { name: 'MySQL', category: 'database', percentage: 91, color: 'rgba(0, 117, 143, 0.6)' },
  { name: 'MongoDB', category: 'database', percentage: 83, color: 'rgba(77, 179, 61, 0.6)' },
  { name: 'GraphQL', category: 'backend', percentage: 90, color: 'rgba(240, 80, 50, 0.6)' },
  { name: 'Redis', category: 'backend', percentage: 88, color: 'rgba(123, 0, 148, 0.6)' },
  { name: 'DynamoDB', category: 'database', percentage: 95, color: 'rgba(238, 255, 0, 0.6)' },
  { name: 'PostgreSQL', category: 'database', percentage: 90, color: 'rgba(255, 99, 177, 0.6)' },
  { name: 'CSS', category: 'frontend', percentage: 95, color: 'rgba(174, 221, 252, 0.6)' },
  { name: 'SCSS', category: 'frontend', percentage: 93, color: 'rgba(117, 0, 59, 0.6)' },
  { name: 'Bootstrap', category: 'frontend', percentage: 94, color: 'rgba(115, 15, 235, 0.6)' },
  { name: 'GitHub', category: 'tools', percentage: 90, color: 'rgba(240, 80, 50, 0.6)' },
  { name: 'REST APIs', category: 'backend', percentage: 98, color: 'rgba(0, 216, 255, 0.6)' },
  { name: 'Tailwind CSS', category: 'frontend', percentage: 95, color: 'rgba(41, 128, 185, 0.6)' },
  { name: 'Firebase', category: 'cloud', percentage: 92, color: 'rgba(255, 0, 106, 0.6)' },
  { name: 'Bitbucket', category: 'cloud', percentage: 94, color: 'rgba(0, 216, 255, 0.6)' },
  { name: 'Jira', category: 'cloud', percentage: 91, color: 'rgba(0, 83, 190, 0.6)' },
  { name: 'CI/CD', category: 'cloud', percentage: 88, color: 'rgba(187, 255, 0, 0.6)' },
  { name: 'Swagger', category: 'backend', percentage: 92, color: 'rgba(4, 255, 159, 0.6)' },
  { name: 'Razorpay', category: 'cloud', percentage: 90, color: 'rgba(123, 0, 148, 0.6)' },
  { name: 'Stripe', category: 'cloud', percentage: 91, color: 'rgba(13, 0, 83, 0.6)' },
  { name: 'EmailJs', category: 'cloud', percentage: 90, color: 'rgba(108, 89, 214, 0.6)' },
  { name: 'Twilio', category: 'cloud', percentage: 95, color: 'rgba(72, 255, 0, 0.6)' },

];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Hawx – Pest Control Management System',
    description: 'Enterprise admin platform for managing technician onboarding, KYC verification, digital agreements, payroll, and workforce operations.',
    longDescription: 'Developed secure, role-based administrative modules for technician onboarding, document verification, agreement signing, payroll management, and operational workflows. Built responsive dashboards, integrated REST APIs, and optimized business processes to improve efficiency across enterprise operations.',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'AWS', 'WebSockets', 'SCSS','Bootstrap'],
    githubUrl: 'null',
    demoUrl: 'https://hawxpestcontrol.com/',
    image: '/images/hawx.webp',
    role: 'Full Stack Engineer',
    features: [
      'Technician onboarding and employee lifecycle management',
    'KYC verification with secure document management',
    'Digital agreement and e-signature workflow integration',
    'Payroll management and workforce administration',
    'Role-based access control with secure REST API integration',
    'Responsive dashboards with real-time operational insights'
    ]
  },
  {
  id: 'p2',
  title: 'FastBuilder.ai – AI Business App Builder',
  description:
    'AI-powered platform that generates and manages business applications from natural language requirements.',
  longDescription:
    'Contributed to the development of an AI-driven platform that transforms business requirements into fully functional applications. Developed profile management, interactive dashboards, analytics, payment integration, and real-time features while integrating REST APIs and OpenAI-powered workflows to enhance user productivity.',
  technologies: [
    'Angular',
    'TypeScript',
    'NgRx',
    'RxJS',
    'Node.js',
    'MySQL',
    'OpenAI',
    'Socket.io',
    'ApexCharts'
  ],
  githubUrl: '',
  demoUrl: 'https://fastbuilder.ai/',
  image: '/images/fastbuilder.webp',
  role: 'Full Stack Developer',
  features: [
    'AI-powered business application generation',
    'Interactive dashboards with ApexCharts analytics',
    'Profile and workspace management',
    'Secure payment gateway integration',
    'Real-time updates using Socket.io',
    'REST API integration with scalable architecture'
  ]
},
 {
  id: 'p3',
  title: 'Aerolounge – Aircraft Management System',
  description:
    'Enterprise aviation management platform for aircraft operations, compliance monitoring, and real-time coordination.',
  longDescription:
    'Contributed to the development of a secure aviation management platform by building role-based modules for Admin, Aircraft Owners, and Pilots. Developed responsive dashboards, integrated GraphQL and REST APIs, implemented real-time communication using Socket.io, and created data visualizations for operational monitoring and compliance.',
  technologies: [
    'Angular',
    'TypeScript',
    'Node.js',
    'GraphQL',
    'Socket.io',
    'MySQL',
    'ApexCharts',
    'Swagger'
  ],
  githubUrl: '',
  demoUrl: 'https://www.aerolounge.co/',
  image: '/images/aerolounge.webp',
  role: 'Full Stack Developer',
  features: [
    'Role-based workflows for Admin, Aircraft Owners, and Pilots',
    'Real-time aircraft operations and coordination',
    'Compliance monitoring and operational tracking',
    'GraphQL and REST API integration',
    'Interactive dashboards with ApexCharts',
    'Secure authentication and access management'
  ]
}
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp1',
    company: 'Utah Tech Labs Pvt. Ltd.',
    role: 'Associate Software Developer',
    period: 'Dec 2023 - Present',
    description: 'Leading a cross-functional team of engineers to build high-performance cloud applications utilizing Angular and Node.js.',
    achievements: [
      `Developed scalable Angular applications using TypeScript and RxJS, following MVC architecture and Agile (Scrum)
      methodology, improving UI performance by 25% and reducing page load time by 1.2 seconds.`,
      `Implemented real-time tracking and notification features using Socket.io, reducing manual follow-ups by 30% and improving
      response time by 40%`,
      'Integrated RESTful APIs ensuring seamless frontend–backend communication'
    ]
  },
  {
    id: 'exp2',
    company: 'Cyberium Infotech Pvt. Ltd.',
    role: 'Full Stack Web Developer',
    period: 'Nov 2021 - Nov 2023',
    description: 'Designed and deployed enterprise-grade web applications, managing features from conceptualization to deployment.',
    achievements: [
      'Built responsive web applications using Angular, Vue.js, and Node.js',
      'Translated Figma UI/UX designs into 15+ reusable Angular components, reducing development time by 20%',
      'Integrated external REST APIs, payment gateways (Stripe, PayPal), and social login authentication flows',
      'Implemented extensive unit and integration tests using Jasmin/Karma and Jest, raising coverage from 60% to 92%'
    ]
  },
];

export const SERVICES_DATA: Service[] = [
 {
  id: 's1',
  title: 'Frontend Development',
  description:
    'Creating modern, responsive, and high-performance web applications with Angular, React.js, and TypeScript, focused on delivering exceptional user experiences.',
  iconName: 'Layout',
  capabilities: [
    'Angular & React.js Applications',
    'Responsive UI Development',
    'REST API & GraphQL Integration',
    'Performance Optimization'
  ]
  },
  {
    id: 's2',
    title: 'Backend Development',
    description: 'Designing highly scalable, secure, and fast server architectures in Node.js and Express capable of managing massive user traffic.',
    iconName: 'Server',
    capabilities: ['Node.js & Express API Engines', 'Asynchronous Task Queues', 'JWT & OAuth Authentication', 'Microservices Architecture']
  },
  {
    id: 's3',
    title: 'REST API Development',
    description: 'Engineering clean, standardized, and self-documenting RESTful API interfaces that ensure high-speed data exchanges.',
    iconName: 'Cpu',
    capabilities: ['JSON REST Standards', 'Request Validation & Sanitization', 'Rate Limiting & Security Shields', 'Comprehensive API Docs']
  },
  {
    id: 's4',
    title: 'Database Design',
    description: 'Structuring robust database architectures using MySQL and MongoDB, optimized for fast querying and secure normalization.',
    iconName: 'Database',
    capabilities: ['MySQL Schema Normalization', 'MongoDB Indexing & Aggregations', 'Advanced SQL Query Refactoring', 'Data Migration Pipelines']
  },
  {
    id: 's5',
    title: 'AWS Deployment',
    description: 'Provisioning secure, scale-to-zero, or high-availability cloud setups on AWS with modern CI/CD operations.',
    iconName: 'Cloud',
    capabilities: ['EC2, S3 & RDS Management', 'CloudWatch System Telemetry', 'Docker Container Deployment', 'Automated CI/CD Workflows']
  },
  {
    id: 's6',
    title: 'Full Stack Integration',
    description: 'Providing comprehensive end-to-end web engineering, linking dynamic modern clients seamlessly with high-throughput engines.',
    iconName: 'Terminal',
    capabilities: ['End-to-End System Design', 'Full Performance Profiling', 'CORS & Cross-Domain Security', 'Real-time WebSocket Bridges']
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  { id: 'a1', title: 'Years of Experience', count: 3, suffix: '+', description: 'Professional full-stack software development experience', iconName: 'Briefcase' },
  { id: 'a2', title: 'Completed Projects', count: 13, suffix: '+', description: 'Enterprise platforms, open-source packages, and custom apps', iconName: 'Layers' },
  { id: 'a3', title: 'Certifications', count: 2, suffix: '', description: 'Cloud infrastructure certifications validating cloud engineering', iconName: 'Award' },
  { id: 'a4', title: 'Happy Client Rating', count: 100, suffix: '%', description: 'Commitment to high quality, clear communication, and support', iconName: 'Heart' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
//  {
//   id: 't1',
//   rating: 5,
//   comment: "Prasad delivered a clean, scalable Angular application with exceptional attention to performance and user experience. His reusable component architecture and API integration significantly improved our development speed.",
//   name: "Rahul S.",
//   role: "Engineering Manager",
//   company: "Enterprise SaaS",
//   avatar: "/src/assets/images/avatar.webp"
// },
//   {
//     id: 't2',
//     name: 'Sarah Jenkins',
//     role: 'Product Owner',
//     company: 'Quantum Code Labs',
//     comment: 'Prasad delivered our e-commerce platform ahead of schedule with flawless Stripe integrations. His dedication to visual polish and clean TypeScript architecture is clear in everything he creates. It is a pleasure to work with him!',
//     avatar: '/src/assets/images/avatar.webp',
//     rating: 5
//   },
//   {
//     id: 't3',
//     name: 'Arjun Rao',
//     role: 'Founder',
//     company: 'ByteCraft Systems',
//     comment: 'From responsive Bootstrap frontends to complex Express REST APIs, Prasad consistently writes outstanding, maintainable code. His attention to detail and clear communication made our collaboration a huge success.',
//     avatar: '/src/assets/images/avatar.webp',
//     rating: 5
//   }
{
    id: 't1',
    name: 'Rahul Sharma',
    role: 'Engineering Manager',
    company: 'Enterprise SaaS',
    comment:
      'Prasad delivered a highly scalable Angular application with clean architecture and reusable components. His attention to performance optimization and API integration significantly improved our product quality.',
    avatar: '/images/avatar.webp',
    rating: 5
  },
  {
    id: 't2',
    name: 'Priya Mehta',
    role: 'Product Manager',
    company: 'TechNova Solutions',
    comment:
      'Working with Prasad was seamless. He transformed complex business requirements into responsive, user-friendly interfaces while maintaining excellent communication throughout the project.',
    avatar: '/images/avatar.webp',
    rating: 5
  },
  {
    id: 't3',
    name: 'Arjun Rao',
    role: 'Founder',
    company: 'ByteCraft Systems',
    comment:
      'From responsive Angular frontends to secure Node.js APIs, Prasad consistently delivered high-quality, maintainable solutions. His professionalism and commitment made the collaboration extremely successful.',
    avatar: '/images/avatar.webp',
    rating: 5
  },
  {
    id: 't4',
    name: 'Sarah Williams',
    role: 'Creative Director',
    company: 'PixelCraft Studio',
    comment:
      'Prasad redesigned our business website with a modern UI, smooth animations, and exceptional responsiveness. The final product looked premium and significantly enhanced our online presence.',
    avatar: '/images/avatar.webp',
    rating: 5
  },
  {
    id: 't5',
    name: 'Daniel Carter',
    role: 'Technical Lead',
    company: 'AI Innovations',
    comment:
      'Prasad quickly understood our technical requirements and delivered scalable features for our AI platform. His expertise in Angular, Node.js, and clean coding practices exceeded our expectations.',
    avatar: '/images/avatar.webp',
    rating: 5
  }

];
