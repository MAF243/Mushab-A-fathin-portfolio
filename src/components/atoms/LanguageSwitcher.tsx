import { useTranslation } from 'react-i18next';
import { Locale, locales, localeFlags } from '@/i18n/config';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLocale = i18n.language as Locale;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (locale: Locale) => {
    i18n.changeLanguage(locale);
    localStorage.setItem('i18nextLng', locale);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors focus-ring"
        whileTap={{ scale: 0.98 }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">{localeFlags[currentLocale]}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 py-1 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[120px]"
            role="listbox"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => changeLanguage(locale)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors hover:bg-accent ${
                  currentLocale === locale ? 'text-primary font-medium' : 'text-foreground'
                }`}
                role="option"
                aria-selected={currentLocale === locale}
              >
                <span>{localeFlags[locale]}</span>
                <span className="uppercase">{locale}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
