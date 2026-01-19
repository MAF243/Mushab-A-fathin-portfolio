export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: {
    en: string;
    id: string;
    ja: string;
  };
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: {
    en: string;
    id: string;
    ja: string;
  };
}

export const timeline: TimelineItem[] = [
  // Experience
  {
    id: 'exp-1',
    type: 'experience',
    title: {
      en: 'Staff',
      id: 'Staff',
      ja: 'スタッフ',
    },
    organization: 'CV. Pancargradia',
    startDate: '2023',
    endDate: '2024',
    description: {
      en: 'Handled day-to-day operational and administrative tasks, supported team coordination, and helped ensure smooth workflow across ongoing assignments.',
      id: 'Menangani tugas operasional dan administratif harian, membantu koordinasi tim, serta memastikan alur kerja berjalan lancar pada berbagai pekerjaan.',
      ja: '日々の運用・事務業務を担当し、チームの連携をサポートしながら、作業の進行がスムーズに進むよう支援しました。',
    },
  },
  {
    id: 'exp-2',
    type: 'experience',
    title: {
      en: 'Staff',
      id: 'Staff',
      ja: 'スタッフ',
    },
    organization: 'Dotpixel Computer',
    startDate: '2024',
    description: {
      en: 'Supported technical operations and customer needs, assisted with troubleshooting, and contributed to improving service quality and workflow efficiency.',
      id: 'Mendukung operasional teknis dan kebutuhan pelanggan, membantu troubleshooting, serta berkontribusi meningkatkan kualitas layanan dan efisiensi pekerjaan.',
      ja: '技術的な運用や顧客対応をサポートし、トラブルシューティングに協力しながら、サービス品質と作業効率の向上に貢献しました。',
    },
  },
  // Education
  {
    id: 'edu-1',
    type: 'education',
    title: {
      en: 'Information Technology Student (3rd Semester)',
      id: 'Mahasiswa Teknologi Informasi (Semester 3)',
      ja: '情報技術専攻（3学期）',
    },
    organization: 'STIKOM El Rahma',
    startDate: '2024',
    description: {
      en: 'Currently in the 3rd semester, focusing on web development fundamentals, software engineering, and databases while building real projects to strengthen practical skills.',
      id: 'Saat ini semester 3, fokus pada fundamental pengembangan web, rekayasa perangkat lunak, dan database sambil membangun proyek nyata untuk memperkuat skill praktis.',
      ja: '現在3学期で、ウェブ開発の基礎、ソフトウェア工学、データベースを学びながら、実案件に近いプロジェクトで実践力を高めています。',
    },
  },
  {
    id: 'edu-2',
    type: 'education',
    title: {
      en: 'High School Diploma',
      id: 'Diploma SMA',
      ja: '高校卒業証書',
    },
    organization: 'SMA',
    startDate: '2020',
    endDate: '2023',
    description: {
      en: 'Graduated with focus on natural sciences. Developed initial interest in programming and technology during this period.',
      id: 'Lulus dengan fokus pada ilmu pengetahuan alam. Mengembangkan minat awal dalam pemrograman dan teknologi selama periode ini.',
      ja: '自然科学に焦点を当てて卒業。この期間中にプログラミングとテクノロジーへの最初の関心を育みました。',
    },
  },
];
