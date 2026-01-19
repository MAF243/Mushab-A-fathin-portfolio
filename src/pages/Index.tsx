import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Download, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/templates/PageLayout';
import SectionHeader from '@/components/molecules/SectionHeader';
import ProjectGrid from '@/components/organisms/ProjectGrid';
import ServicesList from '@/components/organisms/ServicesList';
import TestimonialsList from '@/components/organisms/TestimonialsList';
import NotesList from '@/components/organisms/NotesList';
import { contactInfo, cvPath } from '@/data/contact';

// Tech logos (official/simple icons via react-icons)
import type { IconType } from 'react-icons';
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiLaravel, SiMysql } from 'react-icons/si';

const Index = () => {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`;

  // Rotating roles (animated)
  const roles = useMemo(
    () => [
      t('hero.roles.fullstack', { defaultValue: 'Fullstack Web Developer' }),
      t('hero.roles.student', { defaultValue: 'Mahasiswa IT Semester 3' }),
    ],
    [t]
  );

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(id);
  }, [roles.length]);

  // Name parts for responsive line breaks
  const fullName = t('hero.name', { defaultValue: "Mush'ab Abdurrahman Fathin" });

  const nameParts = useMemo(() => {
    const parts = (fullName || '').trim().split(/\s+/);
    const first = parts[0] || fullName;
    const middle = parts[1] || '';
    const last = parts.slice(2).join(' ') || '';
    return { first, middle, last };
  }, [fullName]);

  // Bio typewriter (type + delete loop)
  const bioText = t('hero.bio', { defaultValue: '' });
  const [typedBio, setTypedBio] = useState('');
  const [bioDeleting, setBioDeleting] = useState(false);

  // reset when language/bio changes
  useEffect(() => {
    setTypedBio('');
    setBioDeleting(false);
  }, [bioText]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setTypedBio(bioText);
      return;
    }

    if (!bioText) {
      setTypedBio('');
      return;
    }

    const typeSpeed = 14; // ms per char
    const deleteSpeed = 10; // ms per char
    const pauseAfterTyped = 1100; // ms
    const pauseAfterDeleted = 400; // ms

    let timeout = 0;

    // if finished typing -> pause -> start deleting
    if (!bioDeleting && typedBio.length >= bioText.length) {
      timeout = window.setTimeout(() => setBioDeleting(true), pauseAfterTyped);
      return () => window.clearTimeout(timeout);
    }

    // if finished deleting -> pause -> start typing again
    if (bioDeleting && typedBio.length <= 0) {
      timeout = window.setTimeout(() => setBioDeleting(false), pauseAfterDeleted);
      return () => window.clearTimeout(timeout);
    }

    timeout = window.setTimeout(() => {
      const nextLen = bioDeleting ? typedBio.length - 1 : typedBio.length + 1;
      setTypedBio(bioText.slice(0, Math.max(0, Math.min(bioText.length, nextLen))));
    }, bioDeleting ? deleteSpeed : typeSpeed);

    return () => window.clearTimeout(timeout);
  }, [bioText, typedBio, bioDeleting]);

  const techLogos: Array<{ key: string; label: string; Icon: IconType }> = [
    { key: 'html', label: 'HTML', Icon: SiHtml5 },
    { key: 'css', label: 'CSS', Icon: SiCss3 },
    { key: 'js', label: 'JavaScript', Icon: SiJavascript },
    { key: 'php', label: 'PHP', Icon: SiPhp },
    { key: 'laravel', label: 'Laravel', Icon: SiLaravel },
    { key: 'mysql', label: 'MySQL', Icon: SiMysql },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="section-padding min-h-[75vh] lg:min-h-[90vh] flex items-start lg:items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                {t('hero.headline')}
              </h1>*/}

              {/* OLD:
                <p className="text-primary font-medium mb-4">{t('hero.greeting')}</p>
                <p className="text-xl md:text-2xl text-primary font-medium mb-4">
                  {t('hero.subheadline')}
                </p>
              */}

              {/* NEW: Greeting + Name (responsive line breaks) */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
                {/* Greeting: block on mobile, inline on >= sm */}
                <span className="text-primary block sm:inline">
                  {t('hero.greeting', { defaultValue: 'Halo, saya' })}
                </span>

                {/* Desktop/tablet: keep it “longer” so it doesn't wrap too much */}
                <span className="hidden sm:inline">
                  {' '}
                  <span className="whitespace-nowrap">
                    {nameParts.first}
                    {nameParts.middle ? ` ${nameParts.middle}` : ''}
                  </span>
                  {nameParts.last ? ` ${nameParts.last}` : ''}
                </span>

                {/* Mobile: forced line breaks exactly as requested */}
                <span className="sm:hidden block">
                  <span className="block">{nameParts.first}</span>
                  {nameParts.middle ? <span className="block">{nameParts.middle}</span> : null}
                  {nameParts.last ? <span className="block">{nameParts.last}</span> : null}
                </span>
              </h1>

              {/* NEW: Rotating role text (animated) */}
              <div className="min-h-[2.25rem] md:min-h-[2.75rem] mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="text-xl md:text-2xl text-primary font-medium"
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                {typedBio}
                <span
                  className="inline-block w-[10px] border-r-2 border-primary/80 ml-1 align-middle animate-pulse"
                  aria-hidden="true"
                />
              </p>

              {/* Logos only */}
              <div className="flex flex-wrap gap-3 mb-8">
                {techLogos.map((item) => (
                  <span
                    key={item.key}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary border border-border shadow-sm"
                    title={item.label}
                    aria-label={item.label}
                  >
                    <item.Icon className="w-5 h-5 text-foreground" aria-hidden="true" />
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-stretch gap-4">
                <a
                  href={cvPath}
                  download
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap min-h-[52px] px-6"
                >
                  <Download className="w-5 h-5" />
                  {t('hero.cta.cv')}
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap min-h-[52px] px-6"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('hero.cta.whatsapp')}
                </a>

                <Link
                  to="/projects"
                  className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap min-h-[52px] px-6"
                >
                  {t('hero.cta.projects')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Photo section (same logic, just responsive sizing to avoid “cut” on mobile viewport) */}
            <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-border">
                <img
                  src="/profile.jpg"
                  alt={t('hero.photoAlt')}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <SectionHeader title={t('projects.title')} subtitle={t('projects.subtitle')} />
          <ProjectGrid showFeatured limit={2} />
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              {t('projects.viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('services.title')} subtitle={t('services.subtitle')} />
          <ServicesList />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <SectionHeader title={t('testimonials.title')} subtitle={t('testimonials.subtitle')} />
          <TestimonialsList limit={3} />
        </div>
      </section>

      {/* Notes Preview */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('notes.title')} subtitle={t('notes.subtitle')} />
          <NotesList limit={3} showFilter={false} />
          <div className="text-center mt-8">
            <Link
              to="/notes"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              {t('notes.viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
