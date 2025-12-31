import { Trophy, Award, Star } from 'lucide-react';

const AchievementsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Recognition and milestones in my journey
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card relative overflow-hidden group">
            {/* Spotlight effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 animate-pulse-glow">
                <Trophy className="text-foreground" size={36} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-secondary" size={16} />
                  <span className="text-secondary text-sm font-medium uppercase tracking-wider">
                    Top Finalist
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">MIT ADT Hackathon 2025</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Selected among top teams for demonstrating technical excellence and innovative 
                  problem-solving capabilities in a competitive hackathon environment.
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Award className="text-primary" size={18} />
                    <span className="text-sm text-muted-foreground">Technical Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
