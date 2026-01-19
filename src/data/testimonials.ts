export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: {
    en: string;
    id: string;
    ja: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmad Rizki',
    role: 'CEO',
    company: 'TechStart Indonesia',
    content: {
      en: "Mush'ab delivered exceptional work on our platform. His attention to detail and ability to translate our vision into a functional product exceeded our expectations. Highly recommended!",
      id: "Mush'ab memberikan hasil kerja yang luar biasa pada platform kami. Perhatiannya terhadap detail dan kemampuannya menerjemahkan visi kami menjadi produk yang fungsional melampaui ekspektasi kami. Sangat direkomendasikan!",
      ja: "ムシュアブは私たちのプラットフォームで素晴らしい仕事を提供してくれました。彼の細部への注意と私たちのビジョンを機能的な製品に変換する能力は、私たちの期待を超えていました。強くお勧めします！",
    },
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'Digital Solutions Co.',
    content: {
      en: "Working with Mush'ab was a pleasure. He's not only technically skilled but also great at communication. Our project was delivered on time and within budget.",
      id: "Bekerja dengan Mush'ab sangat menyenangkan. Dia tidak hanya terampil secara teknis tetapi juga hebat dalam komunikasi. Proyek kami diselesaikan tepat waktu dan sesuai anggaran.",
      ja: "ムシュアブとの仕事は楽しかったです。彼は技術的に優れているだけでなく、コミュニケーションも素晴らしいです。私たちのプロジェクトは予定通り、予算内で完了しました。",
    },
  },
  {
    id: '3',
    name: 'Budi Santoso',
    role: 'Founder',
    company: 'EduTech Solutions',
    content: {
      en: "The school website Mush'ab built for us perfectly represents our institution. It's modern, easy to navigate, and our staff can update content effortlessly. Outstanding work!",
      id: "Website sekolah yang dibangun Mush'ab untuk kami sangat merepresentasikan institusi kami. Modern, mudah dinavigasi, dan staf kami dapat memperbarui konten dengan mudah. Pekerjaan luar biasa!",
      ja: "ムシュアブが私たちのために作成した学校のウェブサイトは、私たちの機関を完璧に表現しています。モダンでナビゲートしやすく、スタッフは簡単にコンテンツを更新できます。素晴らしい仕事です！",
    },
  },
];
