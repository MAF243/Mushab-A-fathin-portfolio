import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { socialLinks, contactInfo } from '@/data/contact';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

const SocialLinks = ({ size = 'md', showLabels = false }: SocialLinksProps) => {
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const links = [
    { href: socialLinks.github, icon: Github, label: 'GitHub' },
    { href: socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: socialLinks.instagram, icon: Instagram, label: 'Instagram' },
    { href: `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`, icon: MessageCircle, label: 'WhatsApp' },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, icon: Icon, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-primary transition-colors focus-ring"
          aria-label={label}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className={iconSizes[size]} />
          {showLabels && <span className="ml-2 text-sm">{label}</span>}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
