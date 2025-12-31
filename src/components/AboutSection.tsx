import { GraduationCap, Target, Code2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Passionate about building scalable backend systems and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <div className="glass-card group">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-secondary font-medium mb-2">B.E. in Computer Engineering</p>
            <p className="text-muted-foreground text-sm mb-1">
              G.S. Moze College of Engineering
            </p>
            <p className="text-muted-foreground text-sm mb-1">Balewadi, Pune</p>
            <p className="text-primary/80 text-sm font-medium">Expected Graduation: 2027</p>
          </div>

          {/* Career Goals Card */}
          <div className="glass-card group">
            <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="text-secondary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Career Goals</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about backend systems, scalable architectures, and full-stack development. 
              Seeking opportunities to contribute to impactful projects that solve real-world problems through innovative technology solutions.
            </p>
          </div>

          {/* Focus Areas Card */}
          <div className="glass-card group md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Focus Areas</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                API Development & Integration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Database Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Server-Side Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Problem Solving & Collaboration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
