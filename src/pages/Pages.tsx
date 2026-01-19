import { useTranslation } from 'react-i18next';
import PageLayout from '@/components/templates/PageLayout';
import SectionHeader from '@/components/molecules/SectionHeader';
import ProjectGrid from '@/components/organisms/ProjectGrid';
import NotesList from '@/components/organisms/NotesList';
import ServicesList from '@/components/organisms/ServicesList';
import TestimonialsList from '@/components/organisms/TestimonialsList';
import Timeline from '@/components/organisms/Timeline';
import ContactPanel from '@/components/organisms/ContactPanel';
import SkillsList from '@/components/organisms/SkillsList';
import OrganizationsList from '@/components/organisms/OrganizationsList';
import { timeline } from '@/data/timeline';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

// Tech icons (professional)
import type { IconType } from 'react-icons';
import { SiCss3, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiPhp } from 'react-icons/si';

export const About = () => {
  const { t } = useTranslation();

  // About bio typewriter (type + delete loop)
  const aboutText = t('about.bio', { defaultValue: '' });
  const [typedAbout, setTypedAbout] = useState('');
  const [aboutDeleting, setAboutDeleting] = useState(false);

  // Reset when language changes / text changes
  useEffect(() => {
    setTypedAbout('');
    setAboutDeleting(false);
  }, [aboutText]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setTypedAbout(aboutText);
      return;
    }

    if (!aboutText) {
      setTypedAbout('');
      return;
    }

    const typeSpeed = 12; // ms/char
    const deleteSpeed = 9; // ms/char
    const pauseAfterTyped = 1200; // ms
    const pauseAfterDeleted = 450; // ms

    let timeout = 0;

    // finished typing -> pause -> start deleting
    if (!aboutDeleting && typedAbout.length >= aboutText.length) {
      timeout = window.setTimeout(() => setAboutDeleting(true), pauseAfterTyped);
      return () => window.clearTimeout(timeout);
    }

    // finished deleting -> pause -> start typing
    if (aboutDeleting && typedAbout.length <= 0) {
      timeout = window.setTimeout(() => setAboutDeleting(false), pauseAfterDeleted);
      return () => window.clearTimeout(timeout);
    }

    timeout = window.setTimeout(() => {
      const nextLen = aboutDeleting ? typedAbout.length - 1 : typedAbout.length + 1;
      setTypedAbout(aboutText.slice(0, Math.max(0, Math.min(aboutText.length, nextLen))));
    }, aboutDeleting ? deleteSpeed : typeSpeed);

    return () => window.clearTimeout(timeout);
  }, [aboutText, typedAbout, aboutDeleting]);

  const reduceMotionRender =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderedAbout = reduceMotionRender ? aboutText : typedAbout;

  const skillIcons: Array<{ key: string; label: string; Icon: IconType }> = useMemo(
    () => [
      { key: 'html', label: 'HTML', Icon: SiHtml5 },
      { key: 'css', label: 'CSS', Icon: SiCss3 },
      { key: 'js', label: 'JavaScript', Icon: SiJavascript },
      { key: 'php', label: 'PHP', Icon: SiPhp },
      { key: 'laravel', label: 'Laravel', Icon: SiLaravel },
      { key: 'mysql', label: 'MySQL', Icon: SiMysql },
    ],
    []
  );

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('about.title')} subtitle={t('about.subtitle')} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {renderedAbout}
              <span
                className="inline-block w-[10px] border-r-2 border-primary/80 ml-1 align-middle animate-pulse"
                aria-hidden="true"
              />
            </p>
          </motion.div>

          {/*<div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-elevated p-6">
              <h3 className="text-base font-semibold text-foreground mb-2">{t('about.goalsTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('about.goalsText')}</p>
            </div>
            <div className="card-elevated p-6">
              <h3 className="text-base font-semibold text-foreground mb-2">{t('about.audienceTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('about.audienceText')}</p>
            </div>
          </div>*/}

          <div className="max-w-5xl mx-auto mt-10">
            <SectionHeader title={t('about.skillsTitle')} subtitle={t('about.skillsSubtitle')} />
            <SkillsList />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('projects.title')} subtitle={t('projects.subtitle')} />
          <ProjectGrid />
        </div>
      </section>
    </PageLayout>
  );
};

export const Services = () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('services.title')} subtitle={t('services.subtitle')} />
          <ServicesList />
        </div>
      </section>
    </PageLayout>
  );
};

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('experience.title')} subtitle={t('experience.subtitle')} />
          <Timeline items={timeline} type="experience" />

          <div className="mt-12">
            <SectionHeader title={t('organizations.title')} subtitle={t('organizations.subtitle')} />
            <OrganizationsList />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export const Education = () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('education.title')} subtitle={t('education.subtitle')} />
          <Timeline items={timeline} type="education" />
        </div>
      </section>
    </PageLayout>
  );
};

export const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('testimonials.title')} subtitle={t('testimonials.subtitle')} />
          <TestimonialsList />
        </div>
      </section>
    </PageLayout>
  );
};

export const Notes = () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('notes.title')} subtitle={t('notes.subtitle')} />
          <NotesList />
        </div>
      </section>
    </PageLayout>
  );
};

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />
          <ContactPanel />
        </div>
      </section>
    </PageLayout>
  );
};
