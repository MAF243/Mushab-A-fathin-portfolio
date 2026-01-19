import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const TextLink = ({ href, children, className, external }: TextLinkProps) => {
  const baseClasses = 'link-underline text-foreground hover:text-primary transition-colors';

  if (external) {
    return (
      <a
        href={href}
        className={cn(baseClasses, className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={cn(baseClasses, className)}>
      {children}
    </Link>
  );
};

export default TextLink;
