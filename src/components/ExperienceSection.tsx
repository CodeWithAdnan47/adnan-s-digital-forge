import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Student Intern – Agentic AI Development',
    period: 'Dec 2025 – Feb 2026',
    status: 'Ongoing',
    description: 'Involved in developing intelligent, agent-based AI systems. Gaining exposure to modern AI-driven application design and implementation.',
    highlights: ['AI Systems', 'Agent-Based Development', 'Modern AI Design'],
  },
  {
    title: 'Student Intern – Android Development',
    period: 'Jan 2023 – Jul 2023',
    status: 'Completed',
    description: 'Worked on Android application development using Java. Gained hands-on experience with mobile app workflows and best practices.',
    highlights: ['Android Development', 'Java', 'Mobile Apps'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Professional journey and internship experiences
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-8 z-10 animate-pulse-glow" />

              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exp.status === 'Ongoing' 
                        ? 'bg-secondary/20 text-secondary' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {exp.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span key={highlight} className="skill-tag text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
