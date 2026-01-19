import { Link } from 'react-router-dom';
import { Badge } from '@/components/atoms/Badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Note } from '@/data/notes';
import { useTranslation } from 'react-i18next';

interface NoteCardProps {
  note: Note;
}

const NoteCard = ({ note }: NoteCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.article
      className="card-elevated overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/notes/${note.slug}`} className="block p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {note.tags.map((tag) => (
            <Badge key={tag} variant="primary">{tag}</Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {note.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">{note.description}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(note.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {note.readingTime} {t('notes.readTime')}
            </span>
          </div>
          <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
            {t('notes.readMore')}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default NoteCard;
