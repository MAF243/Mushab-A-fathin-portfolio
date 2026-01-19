import { Code2, Database, Layers } from 'lucide-react';

export interface Service {
  id: string;
  icon: typeof Code2;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'frontend',
    icon: Code2,
    features: ['React & Next.js', 'Vue.js', 'Responsive Design', 'Performance Optimization', 'Accessibility'],
  },
  {
    id: 'backend',
    icon: Database,
    features: ['RESTful APIs', 'Node.js & Express', 'Laravel', 'Database Design', 'Authentication'],
  },
  {
    id: 'fullstack',
    icon: Layers,
    features: ['End-to-End Development', 'System Architecture', 'Deployment', 'Maintenance', 'Consulting'],
  },
];
