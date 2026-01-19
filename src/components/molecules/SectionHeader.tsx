import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, className, align = 'center' }: SectionHeaderProps) => {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>

      {subtitle ? (
        typeof subtitle === 'string' ? (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        ) : (
          <div className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</div>
        )
      ) : null}
    </div>
  );
};

export default SectionHeader;
