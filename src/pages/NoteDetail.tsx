import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import PageLayout from '@/components/templates/PageLayout';
import { Badge } from '@/components/atoms/Badge';
import { Locale } from '@/i18n/config';
import { getNotesByLocale } from '@/data/notes';

const NoteDetail = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const { slug } = useParams();

  const note = useMemo(() => {
    if (!slug) return undefined;
    return getNotesByLocale(locale).find((n) => n.slug === slug);
  }, [slug, locale]);

  if (!note || !slug) {
    return (
      <PageLayout>
        <section className="section-padding">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center card-elevated p-10">
              <h1 className="text-2xl font-semibold text-foreground mb-2">{t('notesDetail.notFound')}</h1>
              <p className="text-muted-foreground mb-6">{t('notesDetail.notFoundDesc')}</p>
              <Link to="/notes" className="btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t('notesDetail.backToNotes')}
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <Link to="/notes" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              {t('notesDetail.backToNotes')}
            </Link>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card-elevated p-6 md:p-10"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {note.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{note.title}</h1>
              <p className="text-muted-foreground text-lg mb-6">{note.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(note.date).toLocaleDateString()}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {note.readingTime} {t('notes.readTime')}
                </span>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NoteDetail;
