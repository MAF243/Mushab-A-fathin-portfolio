import { projects } from '@/data/projects';
import ProjectCard from '@/components/molecules/ProjectCard';

interface ProjectGridProps {
  showFeatured?: boolean;
  limit?: number;
}

const ProjectGrid = ({ showFeatured = false, limit }: ProjectGridProps) => {
  let displayProjects = showFeatured
    ? projects.filter((p) => p.featured)
    : projects;

  if (limit) {
    displayProjects = displayProjects.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
