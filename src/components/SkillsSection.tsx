import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'primary',
    skills: ['JavaScript', 'Java', 'Python', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'secondary',
    skills: ['HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'accent',
    skills: ['Node.js', 'Express.js', 'PHP'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'primary',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'secondary',
    skills: ['Git', 'Postman', 'VS Code', 'XAMPP'],
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; glow: string }> = {
    primary: {
      bg: 'bg-primary/20',
      text: 'text-primary',
      glow: 'hover:shadow-[0_0_30px_hsla(250,90%,65%,0.4)]',
    },
    secondary: {
      bg: 'bg-secondary/20',
      text: 'text-secondary',
      glow: 'hover:shadow-[0_0_30px_hsla(180,70%,50%,0.4)]',
    },
    accent: {
      bg: 'bg-accent/20',
      text: 'text-accent',
      glow: 'hover:shadow-[0_0_30px_hsla(280,80%,60%,0.4)]',
    },
  };
  return colors[color] || colors.primary;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`glass-card ${colorClasses.glow}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center`}>
                    <Icon className={colorClasses.text} size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
