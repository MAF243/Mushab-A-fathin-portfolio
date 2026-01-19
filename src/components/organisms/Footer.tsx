import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialLinks from '@/components/molecules/SocialLinks';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { key: 'about', path: '/about' },
    { key: 'projects', path: '/projects' },
    { key: 'services', path: '/services' },
    { key: 'notes', path: '/notes' },
    { key: 'contact', path: '/contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              <span className="gradient-text">MAF</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ key, path }) => (
                <li key={key}>
                  <Link
                    to={path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.connect')}</h3>
            <SocialLinks />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
