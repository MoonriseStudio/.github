import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
}

const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: `${Math.random() * 5}s`,
          duration: `${2 + Math.random() * 3}s`,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-60 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-primary-glow rounded-full animate-shooting-star"
          style={{
            left: `${Math.random() * 50}%`,
            top: `${Math.random() * 50}%`,
            animationDelay: `${i * 4}s`,
            boxShadow: "0 0 20px 2px hsl(var(--primary-glow))",
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
