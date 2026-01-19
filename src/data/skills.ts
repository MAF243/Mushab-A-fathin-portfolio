export interface SkillsGroup {
  key: 'languages' | 'frameworks' | 'database' | 'other';
  items: string[];
}

export const skills: SkillsGroup[] = [
  {
    key: 'languages',
    items: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    key: 'frameworks',
    items: ['Laravel', 'Bootstrap'],
  },
  {
    key: 'database',
    items: ['MySQL'],
  },
];
