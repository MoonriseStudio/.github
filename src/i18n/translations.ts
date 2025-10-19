export const translations = {
  ru: {
    nav: {
      home: "Главная",
      games: "Игры",
    },
    home: {
      title: "MOONRISE STUDIO",
      subtitle: "Создаём цифровые миры будущего с командой лучших специалистов",
      projects: "Наши проекты",
      discord: "Discord",
      features: {
        innovation: {
          title: "Инновационные решения",
          description: "Современные технологии и креативный подход",
        },
        team: {
          title: "Лучшие специалисты",
          description: "Профессиональная команда экспертов",
        },
        quality: {
          title: "Качество на первом месте",
          description: "Высокие стандарты во всех проектах",
        },
        speed: {
          title: "Быстрая реализация",
          description: "Эффективные процессы разработки",
        },
      },
      whyUs: {
        title: "Почему выбирают нас?",
        description: "MOONRISE STUDIO - это команда профессионалов, которая создаёт проекты мирового уровня. Мы используем передовые технологии и креативный подход для достижения выдающихся результатов. Наш опыт и преданность качеству делают нас лучшим выбором для реализации ваших идей.",
      },
    },
    games: {
      title: "Наши игровые серверы",
      subtitle: "Профессиональная игровая инфраструктура мирового класса",
      features: {
        equipment: {
          title: "Своё оборудование",
          description: "Собственные серверы последнего поколения для максимальной производительности",
        },
        ddos: {
          title: "Anti DDoS",
          description: "Многоуровневая защита от DDoS атак для бесперебойной работы",
        },
        professional: {
          title: "Профессиональные сервера",
          description: "Enterprise решения с высокой доступностью и надёжностью",
        },
        admin: {
          title: "Хорошая администрация",
          description: "Опытная команда поддержки 24/7 для решения любых вопросов",
        },
      },
      join: {
        title: "Присоединяйтесь к нашему сообществу",
        description: "Станьте частью профессионального игрового сообщества. Присоединяйтесь к тысячам игроков в нашем Discord сервере!",
        button: "Присоединиться к Discord",
      },
      stats: {
        title: "Наша статистика",
        players: "Участников сообщества",
        uptime: "Аптайм серверов",
        support: "Поддержка 24/7",
      },
    },
    footer: {
      copyright: "2025 MOONRISE STUDIO. All Rights Reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      games: "Games",
    },
    home: {
      title: "MOONRISE STUDIO",
      subtitle: "Creating digital worlds of the future with a team of top specialists",
      projects: "Our Projects",
      discord: "Discord",
      features: {
        innovation: {
          title: "Innovative Solutions",
          description: "Modern technologies and creative approach",
        },
        team: {
          title: "Best Specialists",
          description: "Professional team of experts",
        },
        quality: {
          title: "Quality First",
          description: "High standards in all projects",
        },
        speed: {
          title: "Fast Implementation",
          description: "Efficient development processes",
        },
      },
      whyUs: {
        title: "Why Choose Us?",
        description: "MOONRISE STUDIO is a team of professionals creating world-class projects. We use cutting-edge technologies and a creative approach to achieve outstanding results. Our experience and commitment to quality make us the best choice for bringing your ideas to life.",
      },
    },
    games: {
      title: "Our Game Servers",
      subtitle: "Professional world-class gaming infrastructure",
      features: {
        equipment: {
          title: "Own Equipment",
          description: "Latest generation servers for maximum performance",
        },
        ddos: {
          title: "Anti DDoS",
          description: "Multi-layer DDoS protection for uninterrupted operation",
        },
        professional: {
          title: "Professional Servers",
          description: "Enterprise solutions with high availability and reliability",
        },
        admin: {
          title: "Great Administration",
          description: "Experienced 24/7 support team to solve any issues",
        },
      },
      join: {
        title: "Join Our Community",
        description: "Become part of a professional gaming community. Join thousands of players on our Discord server!",
        button: "Join Discord",
      },
      stats: {
        title: "Our Statistics",
        players: "Community Members",
        uptime: "Server Uptime",
        support: "24/7 Support",
      },
    },
    footer: {
      copyright: "2025 MOONRISE STUDIO. All Rights Reserved.",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.ru;
