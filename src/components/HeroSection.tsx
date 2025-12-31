import profilePhoto from '@/assets/profile-photo.jpg';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-[100px] animate-float animation-delay-200" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-accent/15 blur-[80px] animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative opacity-0 animate-scale-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card p-2 gradient-border">
              <img
                src={profilePhoto}
                alt="Adnan Bagwan"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" style={{ margin: '-20px' }} />
            <div className="absolute inset-0 rounded-full border border-secondary/20 animate-spin-slow" style={{ margin: '-40px', animationDirection: 'reverse' }} />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-secondary font-medium mb-4 opacity-0 animate-fade-in tracking-widest uppercase text-sm">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in animation-delay-200">
              Hi, I'm{' '}
              <span className="gradient-text">Adnan Bagwan</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-in animation-delay-400">
              <span className="text-primary">Backend Developer</span> | <span className="text-secondary">Full Stack Developer</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0 animate-fade-in animation-delay-600">
              Backend Developer with hands-on experience in designing and implementing scalable server-side applications.
              Skilled in API development, third-party API integration, and database optimization to ensure reliable performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in animation-delay-800">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start opacity-0 animate-fade-in animation-delay-800">
              <a
                href="https://github.com/CodeWithAdnan47"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/adnan-bagwan-22431a25a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:adnan.bagwan.cse"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm uppercase tracking-widest">Scroll</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
