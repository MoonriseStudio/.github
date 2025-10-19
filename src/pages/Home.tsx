import { Sparkles, Users, Award, Zap } from "lucide-react";
import StarryBackground from "@/components/StarryBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Sparkles,
      title: t.home.features.innovation.title,
      description: t.home.features.innovation.description,
    },
    {
      icon: Users,
      title: t.home.features.team.title,
      description: t.home.features.team.description,
    },
    {
      icon: Award,
      title: t.home.features.quality.title,
      description: t.home.features.quality.description,
    },
    {
      icon: Zap,
      title: t.home.features.speed.title,
      description: t.home.features.speed.description,
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
            <h1 className="text-6xl md:text-8xl font-bold text-glow mb-6 animate-float">
              {t.home.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t.home.subtitle}
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Link to="/games">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-2xl animate-pulse-glow"
                >
                  {t.home.projects}
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl glass-card border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://dsc.gg/moonrise-studio" target="_blank" rel="noopener noreferrer">
                  {t.home.discord}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 animate-pulse-glow">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Us Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              {t.home.whyUs.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.home.whyUs.description}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
