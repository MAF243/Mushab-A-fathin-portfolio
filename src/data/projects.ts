export interface Project {
  slug: string;
  url?: string;
  featured: boolean;
  techStack: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'syareapreneur',
    url: 'https://syareapreneur.site',
    featured: true,
    techStack: ['PHP Native', 'Bootstrap', 'MySQL'],
    images: ['/projects/syareapreneur/1.png', '/projects/syareapreneur/2.png', '/projects/syareapreneur/3.png'],
  },
  {
    slug: 'smaibnuaqil',
    url: 'https://smaibnuaqil.my.id',
    featured: true,
    techStack: ['PHP Native', 'Bootstrap', 'MySQL'],
    images: ['/projects/smaibnuaqil/1.png', '/projects/smaibnuaqil/2.png', '/projects/smaibnuaqil/3.png'],
  },
  {
    slug: 'linktree',
    url: undefined,
    featured: false,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    images: ['/projects/linktree/1.png', '/projects/linktree/2.png'],
  },
];
