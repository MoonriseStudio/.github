import { Link, useLocation } from "react-router-dom";
import { Home, Gamepad2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { path: "/", label: t.nav.home, icon: Home },
    { path: "/games", label: t.nav.games, icon: Gamepad2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
