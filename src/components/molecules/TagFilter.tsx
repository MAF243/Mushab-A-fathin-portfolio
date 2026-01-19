import { Badge } from '@/components/atoms/Badge';
import { cn } from '@/lib/utils';

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
  allLabel: string;
  className?: string;
}

const TagFilter = ({ tags, selectedTag, onTagSelect, allLabel, className }: TagFilterProps) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <button
        onClick={() => onTagSelect(null)}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-all',
          selectedTag === null
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-secondary-foreground hover:bg-accent'
        )}
      >
        {allLabel}
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all',
            selectedTag === tag
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-accent'
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
