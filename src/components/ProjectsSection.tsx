import { ExternalLink, Github, Bus, Droplet } from 'lucide-react';

const projects = [
  {
    title: 'Bus Nexus',
    description: 'Online bus pass management platform designed to replace manual processes and improve efficiency in university transportation systems.',
    technologies: ['Android Studio', 'Java', 'Embedded C'],
    github: 'https://github.com/CodeWithAdnan47/Bus-Nexus',
    live: null,
    icon: Bus,
    gradient: 'from-primary to-accent',
  },
  {
    title: 'Blood Share',
    description: 'Secure Ethereum-based platform for blood donor registration using smart contracts. Prevents duplicate entries and enables emergency donor filtering.',
    technologies: ['Solidity', 'Ethereum', 'React.js', 'MongoDB'],
    github: 'https://github.com/CodeByAtharva/Blood-Share',
    live: 'https://bloodshare.vercel.app/',
    icon: Droplet,
    gradient: 'from-secondary to-primary',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Showcasing impactful projects that demonstrate technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div key={project.title} className="glass-card group overflow-hidden">
                {/* Project Header */}
                <div className={`h-48 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center`}>
                  <Icon className="text-foreground/20 group-hover:text-foreground/30 transition-colors duration-500" size={120} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>

                {/* Project Content */}
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
