import { Server, Code, Layers } from 'lucide-react';

const services = [
  {
    title: 'Backend Development',
    description: 'Scalable server-side applications and architecture. Building robust APIs and services that handle high traffic with optimal performance.',
    icon: Server,
    color: 'primary',
  },
  {
    title: 'API Development',
    description: 'RESTful APIs, third-party integrations, and secure endpoints. Creating well-documented and efficient API solutions for seamless connectivity.',
    icon: Code,
    color: 'secondary',
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end web solutions from frontend to backend. Delivering complete applications with modern technologies and best practices.',
    icon: Layers,
    color: 'accent',
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    primary: {
      bg: 'bg-primary/20',
      text: 'text-primary',
      border: 'group-hover:border-primary/50',
    },
    secondary: {
      bg: 'bg-secondary/20',
      text: 'text-secondary',
      border: 'group-hover:border-secondary/50',
    },
    accent: {
      bg: 'bg-accent/20',
      text: 'text-accent',
      border: 'group-hover:border-accent/50',
    },
  };
  return colors[color] || colors.primary;
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Professional services tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`glass-card group text-center ${colorClasses.border}`}
              >
                <div className={`w-16 h-16 rounded-2xl ${colorClasses.bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={colorClasses.text} size={32} />
                </div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
