import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';

import PageLayout from '@/components/templates/PageLayout';
import { Badge } from '@/components/atoms/Badge';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  if (!project || !slug) {
    return (
      <PageLayout>
        <section className="section-padding">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center card-elevated p-10">
              <h1 className="text-2xl font-semibold text-foreground mb-2">{t('projectDetail.notFound')}</h1>
              <p className="text-muted-foreground mb-6">{t('projectDetail.notFoundDesc')}</p>
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t('projectDetail.backToProjects')}
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  const title = t(`projects.items.${project.slug}.title`);
  const description = t(`projects.items.${project.slug}.description`);
  const longDescription = t(`projects.items.${project.slug}.longDescription`);

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                {t('projectDetail.backToProjects')}
              </Link>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('projectDetail.visitSite')}
                </a>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card-elevated p-6 md:p-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h1>
              <p className="text-muted-foreground text-lg mb-6">{description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p>{longDescription}</p>
              </div>

              {project.images?.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">{t('projectDetail.gallery')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.images.map((src) => (
                      <div key={src} className="rounded-xl overflow-hidden border border-border bg-muted">
                        <img src={src} alt={title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectDetail;
