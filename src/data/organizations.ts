import { Locale } from '@/i18n/config';

export interface OrganizationExperience {
  id: string;
  role: Record<Locale, string>;
  organization: string;
  period: string;
  description: Record<Locale, string>;
}

export const organizations: OrganizationExperience[] = [
  {
    id: 'org-1',
    role: {
      id: 'Ketua',
      en: 'Chairperson',
      ja: '代表（会長）',
    },
    organization: 'SMELT (Student Management and Leadership Training)',
    period: '—',
    description: {
      id: 'Memimpin kegiatan pelatihan manajemen dan kepemimpinan mahasiswa, mengoordinasikan tim, dan memastikan program berjalan efektif.',
      en: 'Led student leadership training activities, coordinated the team, and ensured the program ran effectively.',
      ja: '学生向けのマネジメント・リーダーシップ研修を主導し、チームを統括してプログラムの円滑な運営に取り組みました。',
    },
  },
  {
    id: 'org-2',
    role: {
      id: 'Divisi Keilmuan & Akademik',
      en: 'Academic & Knowledge Division',
      ja: '学術・知識部門',
    },
    organization: 'BEM STIKOM El Rahma',
    period: '—',
    description: {
      id: 'Berperan dalam program-program akademik dan pengembangan keilmuan, termasuk kegiatan edukasi, diskusi, dan peningkatan kompetensi mahasiswa.',
      en: 'Contributed to academic and knowledge development programs, including educational activities, discussions, and student competency improvement.',
      ja: '学術・知識分野の企画に携わり、学習イベントやディスカッションなどを通じて学生の能力向上を支援しました。',
    },
  },
  {
    id: 'org-3',
    role: {
      id: 'Divisi L-News (Media & Pers)',
      en: 'L-News Division (Media & Press)',
      ja: 'L-News部門（メディア・広報）',
    },
    organization: 'LDK El Rahma (Lembaga Dakwah Kampus)',
    period: '—',
    description: {
      id: 'Mendukung produksi konten, dokumentasi kegiatan, dan publikasi informasi melalui media kampus.',
      en: 'Supported content production, event documentation, and publication of information through campus media channels.',
      ja: 'コンテンツ制作や活動の記録、学内メディアでの情報発信をサポートしました。',
    },
  },
];
