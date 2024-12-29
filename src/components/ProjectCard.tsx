import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  buyUrl?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  buyUrl,
  image,
}: ProjectCardProps) => {
  return (
    <div className="glass rounded-xl p-6 card-hover">
      {image && (
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {buyUrl && (
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 nav-item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Buy now</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;