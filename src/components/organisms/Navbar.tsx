import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/atoms/ThemeToggle';
import LanguageSwitcher from '@/components/atoms/LanguageSwitcher';
import { cn } from '@/lib/utils';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'projects', path: '/projects' },
  { key: 'services', path: '/services' },
  { key: 'experience', path: '/experience' },
  { key: 'education', path: '/education' },
  { key: 'testimonials', path: '/testimonials' },
  { key: 'notes', path: '/notes' },
  { key: 'contact', path: '/contact' },
];

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="gradient-text">MAF</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  location.pathname === path
                    ? 'text-primary bg-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                )}
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-secondary hover:bg-accent transition-colors focus-ring"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-main py-4 flex flex-col gap-1">
              {navItems.map(({ key, path }) => (
                <Link
                  key={key}
                  to={path}
                  className={cn(
                    'px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                    location.pathname === path
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  {t(`nav.${key}`)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
