import { Link } from 'react-router-dom';
import { Badge } from '@/components/atoms/Badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const title = t(`projects.items.${project.slug}.title`);
  const description = t(`projects.items.${project.slug}.description`);

  return (
    <motion.article
      className="card-elevated overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Image */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        {project.images?.[0] ? (
          <img
            src={project.images[0]}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent">
            <span className="text-4xl font-bold text-primary/20">{title.charAt(0)}</span>
          </div>
        )}
        {project.featured && (
          <Badge variant="featured" className="absolute top-4 left-4">
            {t('projects.featured')}
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">{tech}</Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
          >
            {t('projects.viewDetails')}
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t('projects.viewProject')}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
