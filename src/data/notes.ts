import { Locale } from '@/i18n/config';

export interface Note {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  published: boolean;
  readingTime: string;
  coverImage?: string;
  locale: Locale;
}

// English Notes
const notesEn: Note[] = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React in 2024',
    description: 'A comprehensive guide to starting your React journey with modern best practices and tools.',
    content: `
# Getting Started with React in 2024

React continues to be one of the most popular frontend libraries in 2024. Here's how to get started with modern React development.

## Setting Up Your Environment

First, you'll need Node.js installed on your machine. I recommend using the latest LTS version.

\`\`\`bash
npx create-vite@latest my-react-app --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

## Key Concepts to Master

### 1. Functional Components
Modern React is all about functional components. Forget class components – they're a thing of the past.

\`\`\`tsx
const Greeting = ({ name }: { name: string }) => {
  return <h1>Hello, {name}!</h1>;
};
\`\`\`

### 2. Hooks
Hooks are the heart of modern React. Start with useState and useEffect, then explore others.

### 3. State Management
For most apps, React's built-in state management is sufficient. For complex apps, consider Zustand or TanStack Query.

## Best Practices

- Keep components small and focused
- Use TypeScript for better developer experience
- Implement proper error boundaries
- Optimize with useMemo and useCallback when needed

Happy coding! 🚀
    `,
    date: '2024-01-15',
    tags: ['React', 'JavaScript', 'Tutorial'],
    published: true,
    readingTime: '5',
    locale: 'en',
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Advanced Tailwind CSS Tips for Developers',
    description: 'Level up your Tailwind CSS skills with these advanced techniques and patterns.',
    content: `
# Advanced Tailwind CSS Tips

Tailwind CSS has revolutionized how we write styles. Here are some advanced tips to level up your Tailwind game.

## Custom Design Tokens

Define your own design tokens in tailwind.config.ts:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0fdf4',
        500: '#22c55e',
        900: '#14532d',
      },
    },
  },
}
\`\`\`

## Smart Component Variants

Use class-variance-authority for type-safe variants:

\`\`\`typescript
const buttonVariants = cva("rounded-lg font-medium", {
  variants: {
    intent: {
      primary: "bg-brand-500 text-white",
      secondary: "bg-gray-100 text-gray-900",
    },
  },
});
\`\`\`

## Animation Magic

Create smooth animations with Tailwind:

\`\`\`html
<div class="animate-fade-up motion-reduce:animate-none">
  Accessible animations!
</div>
\`\`\`

These tips will help you write cleaner, more maintainable styles. 🎨
    `,
    date: '2024-01-10',
    tags: ['CSS', 'Tailwind', 'Design'],
    published: true,
    readingTime: '4',
    locale: 'en',
  },
  {
    slug: 'fullstack-development-guide',
    title: 'The Modern Fullstack Developer Roadmap',
    description: 'Navigate your path to becoming a fullstack developer with this comprehensive roadmap.',
    content: `
# The Modern Fullstack Developer Roadmap

Becoming a fullstack developer requires mastering both frontend and backend technologies. Here's your roadmap.

## Frontend Fundamentals

1. **HTML & CSS** - The building blocks
2. **JavaScript/TypeScript** - Essential programming
3. **React or Vue** - Modern UI libraries
4. **State Management** - Handle complex data flows

## Backend Essentials

1. **Node.js** - JavaScript on the server
2. **Databases** - PostgreSQL, MongoDB
3. **APIs** - REST and GraphQL
4. **Authentication** - JWT, OAuth

## DevOps Basics

- Git version control
- CI/CD pipelines
- Cloud deployment (Vercel, Railway)
- Docker basics

## My Recommendation

Start with React and Node.js. This combination is highly demanded in the job market and has excellent tooling.

Remember: You don't need to learn everything at once. Focus on building projects and learn as you go! 💪
    `,
    date: '2024-01-05',
    tags: ['Career', 'Fullstack', 'Learning'],
    published: true,
    readingTime: '6',
    locale: 'en',
  },
];

// Indonesian Notes
const notesId: Note[] = [
  {
    slug: 'memulai-dengan-react',
    title: 'Memulai dengan React di 2024',
    description: 'Panduan lengkap untuk memulai perjalanan React Anda dengan praktik terbaik dan tools modern.',
    content: `
# Memulai dengan React di 2024

React tetap menjadi salah satu library frontend paling populer di 2024. Berikut cara memulai pengembangan React modern.

## Menyiapkan Environment

Pertama, Anda perlu menginstall Node.js. Saya merekomendasikan versi LTS terbaru.

\`\`\`bash
npx create-vite@latest my-react-app --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

## Konsep Kunci yang Harus Dikuasai

### 1. Functional Components
React modern sepenuhnya tentang functional components. Lupakan class components – itu sudah ketinggalan zaman.

### 2. Hooks
Hooks adalah jantung dari React modern. Mulai dengan useState dan useEffect.

### 3. State Management
Untuk sebagian besar aplikasi, state management bawaan React sudah cukup.

## Best Practices

- Jaga komponen tetap kecil dan fokus
- Gunakan TypeScript untuk pengalaman developer yang lebih baik
- Implementasikan error boundaries yang tepat

Selamat coding! 🚀
    `,
    date: '2024-01-15',
    tags: ['React', 'JavaScript', 'Tutorial'],
    published: true,
    readingTime: '5',
    locale: 'id',
  },
  {
    slug: 'tips-tailwind-css',
    title: 'Tips Tailwind CSS Tingkat Lanjut',
    description: 'Tingkatkan kemampuan Tailwind CSS Anda dengan teknik dan pola tingkat lanjut ini.',
    content: `
# Tips Tailwind CSS Tingkat Lanjut

Tailwind CSS telah merevolusi cara kita menulis styles. Berikut tips lanjutan untuk meningkatkan skill Tailwind Anda.

## Custom Design Tokens

Definisikan design tokens Anda sendiri di tailwind.config.ts:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0fdf4',
        500: '#22c55e',
      },
    },
  },
}
\`\`\`

## Variant Komponen yang Cerdas

Gunakan class-variance-authority untuk variant yang type-safe.

## Animasi

Buat animasi smooth dengan Tailwind yang tetap accessible.

Tips ini akan membantu Anda menulis styles yang lebih bersih dan maintainable. 🎨
    `,
    date: '2024-01-10',
    tags: ['CSS', 'Tailwind', 'Desain'],
    published: true,
    readingTime: '4',
    locale: 'id',
  },
  {
    slug: 'panduan-fullstack',
    title: 'Roadmap Developer Fullstack Modern',
    description: 'Navigasi jalur Anda untuk menjadi developer fullstack dengan roadmap komprehensif ini.',
    content: `
# Roadmap Developer Fullstack Modern

Menjadi developer fullstack membutuhkan penguasaan teknologi frontend dan backend. Ini roadmap Anda.

## Dasar Frontend

1. **HTML & CSS** - Blok bangunan dasar
2. **JavaScript/TypeScript** - Pemrograman esensial
3. **React atau Vue** - Library UI modern
4. **State Management** - Kelola aliran data kompleks

## Esensial Backend

1. **Node.js** - JavaScript di server
2. **Database** - PostgreSQL, MongoDB
3. **APIs** - REST dan GraphQL
4. **Authentication** - JWT, OAuth

## Dasar DevOps

- Git version control
- CI/CD pipelines
- Cloud deployment

## Rekomendasi Saya

Mulai dengan React dan Node.js. Kombinasi ini sangat diminati di pasar kerja.

Ingat: Anda tidak perlu belajar semuanya sekaligus. Fokus pada membangun proyek! 💪
    `,
    date: '2024-01-05',
    tags: ['Karir', 'Fullstack', 'Belajar'],
    published: true,
    readingTime: '6',
    locale: 'id',
  },
];

// Japanese Notes
const notesJa: Note[] = [
  {
    slug: 'react-hajimeru',
    title: '2024年にReactを始める',
    description: 'モダンなベストプラクティスとツールでReactの旅を始めるための包括的なガイド。',
    content: `
# 2024年にReactを始める

Reactは2024年でも最も人気のあるフロントエンドライブラリの1つです。モダンなReact開発の始め方をご紹介します。

## 環境のセットアップ

まず、マシンにNode.jsをインストールする必要があります。

\`\`\`bash
npx create-vite@latest my-react-app --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

## マスターすべき重要な概念

### 1. 関数コンポーネント
モダンなReactは関数コンポーネントがすべてです。

### 2. Hooks
HooksはモダンなReactの心臓部です。useStateとuseEffectから始めましょう。

### 3. 状態管理
ほとんどのアプリでは、Reactの組み込み状態管理で十分です。

## ベストプラクティス

- コンポーネントを小さく、焦点を絞る
- より良い開発者体験のためにTypeScriptを使用
- 適切なエラーバウンダリーを実装

コーディングを楽しんでください！🚀
    `,
    date: '2024-01-15',
    tags: ['React', 'JavaScript', 'チュートリアル'],
    published: true,
    readingTime: '5',
    locale: 'ja',
  },
  {
    slug: 'tailwind-css-tips',
    title: '開発者のための高度なTailwind CSSのヒント',
    description: 'これらの高度なテクニックとパターンでTailwind CSSスキルをレベルアップ。',
    content: `
# 高度なTailwind CSSのヒント

Tailwind CSSはスタイルの書き方を革命的に変えました。Tailwindスキルをレベルアップするための高度なヒントをご紹介します。

## カスタムデザイントークン

tailwind.config.tsで独自のデザイントークンを定義:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0fdf4',
        500: '#22c55e',
      },
    },
  },
}
\`\`\`

## スマートなコンポーネントバリアント

型安全なバリアントにclass-variance-authorityを使用します。

## アニメーションマジック

Tailwindでスムーズなアニメーションを作成。

これらのヒントは、よりクリーンでメンテナンス性の高いスタイルを書くのに役立ちます。🎨
    `,
    date: '2024-01-10',
    tags: ['CSS', 'Tailwind', 'デザイン'],
    published: true,
    readingTime: '4',
    locale: 'ja',
  },
  {
    slug: 'fullstack-guide',
    title: 'モダンフルスタック開発者ロードマップ',
    description: 'この包括的なロードマップでフルスタック開発者への道を歩む。',
    content: `
# モダンフルスタック開発者ロードマップ

フルスタック開発者になるには、フロントエンドとバックエンドの両方の技術を習得する必要があります。

## フロントエンドの基礎

1. **HTML & CSS** - 基本的な構成要素
2. **JavaScript/TypeScript** - 必須のプログラミング
3. **ReactまたはVue** - モダンなUIライブラリ
4. **状態管理** - 複雑なデータフローの処理

## バックエンドの必須事項

1. **Node.js** - サーバーサイドJavaScript
2. **データベース** - PostgreSQL、MongoDB
3. **API** - RESTとGraphQL
4. **認証** - JWT、OAuth

## DevOpsの基礎

- Gitバージョン管理
- CI/CDパイプライン
- クラウドデプロイメント

## 私のおすすめ

ReactとNode.jsから始めましょう。この組み合わせは求人市場で非常に需要があります。

覚えておいてください：すべてを一度に学ぶ必要はありません。プロジェクトの構築に集中してください！💪
    `,
    date: '2024-01-05',
    tags: ['キャリア', 'フルスタック', '学習'],
    published: true,
    readingTime: '6',
    locale: 'ja',
  },
];

export const getAllNotes = (): Note[] => [...notesEn, ...notesId, ...notesJa];

export const getNotesByLocale = (locale: Locale): Note[] => {
  const localeNotes = getAllNotes().filter(note => note.locale === locale && note.published);
  return localeNotes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getNoteBySlug = (slug: string, locale: Locale): Note | undefined => {
  return getAllNotes().find(note => note.slug === slug && note.locale === locale);
};

export const getAllTags = (locale: Locale): string[] => {
  const notes = getNotesByLocale(locale);
  const tags = new Set<string>();
  notes.forEach(note => note.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags);
};
