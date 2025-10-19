import { Server, Shield, Award, Users } from "lucide-react";
import StarryBackground from "@/components/StarryBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const Games = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: Server,
      title: t.games.features.equipment.title,
      description: t.games.features.equipment.description,
      gradient: "from-purple-600 to-blue-600",
    },
    {
      icon: Shield,
      title: t.games.features.ddos.title,
      description: t.games.features.ddos.description,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Award,
      title: t.games.features.professional.title,
      description: t.games.features.professional.description,
      gradient: "from-cyan-600 to-teal-600",
    },
    {
      icon: Users,
      title: t.games.features.admin.title,
      description: t.games.features.admin.description,
      gradient: "from-teal-600 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-glow mb-6">
              {t.games.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t.games.subtitle}
            </p>
          </div>
        </section>

        {/* Advantages Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-10 rounded-3xl hover:scale-105 transition-all duration-300 animate-slide-in-right group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-6 animate-pulse-glow group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              {t.games.join.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.games.join.description}
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-12 py-7 rounded-2xl shadow-2xl animate-pulse-glow text-xl"
              asChild
            >
              <a href="https://dsc.gg/moonrise-studio" target="_blank" rel="noopener noreferrer">
                {t.games.join.button}
              </a>
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              {t.games.stats.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-10 rounded-2xl text-center animate-fade-in">
              <div className="text-5xl font-bold text-glow mb-3">1000+</div>
              <div className="text-muted-foreground text-lg">{t.games.stats.players}</div>
            </div>
            <div className="glass-card p-10 rounded-2xl text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold text-glow mb-3">99.9%</div>
              <div className="text-muted-foreground text-lg">{t.games.stats.uptime}</div>
            </div>
            <div className="glass-card p-10 rounded-2xl text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold text-glow mb-3">24/7</div>
              <div className="text-muted-foreground text-lg">{t.games.stats.support}</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
