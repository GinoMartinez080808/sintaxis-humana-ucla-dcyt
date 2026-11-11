export type ProfileSection = {
  title: string;
  body: string;
  items?: string[];
};

export type TeamAccent = "crimson" | "gold" | "blue";

export type TeamMember = {
  id: string;
  index: string;
  name: string;
  initials: string;
  kicker: string;
  role: string;
  badge: string;
  bio: string;
  tags: string[];
  accent: TeamAccent;
  profile?: ProfileSection[];
};

const STUDENT_ROLE = "Estudiante de Ingeniería en Informática · UCLA - DCyT";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "maikol-marquez",
    index: "01",
    name: "Maikol Márquez",
    initials: "MM",
    kicker: "Geometría y estructura",
    role: STUDENT_ROLE,
    badge: "Integrante del equipo",
    bio: "Su ficha se publicará cuando el equipo cierre la versión verificada de su perfil. Preferimos un espacio en preparación antes que una biografía inventada.",
    tags: ["Ingeniería en Informática", "UCLA - DCyT"],
    accent: "crimson",
  },
  {
    id: "zadkiel-boza",
    index: "02",
    name: "Zadkiel Boza",
    initials: "ZB",
    kicker: "Capas y transparencia",
    role: STUDENT_ROLE,
    badge: "Integrante del equipo",
    bio: "La ficha permanece abierta a la información que su autor confirme. Este portafolio no atribuye logros, especialidades ni experiencia sin respaldo.",
    tags: ["Ingeniería en Informática", "UCLA - DCyT"],
    accent: "blue",
  },
  {
    id: "gino-martinez",
    index: "03",
    name: "Gino Martínez",
    initials: "GM",
    kicker: "Desarrollo full-stack",
    role: STUDENT_ROLE,
    badge: "Desarrollador full-stack",
    bio: "Especialización en desarrollo web full-stack. Su trabajo se concentra en la arquitectura de componentes, los sistemas de interfaz y la construcción de experiencias web con Next.js y TypeScript.",
    tags: ["Next.js", "TypeScript", "UI/UX systems"],
    accent: "gold",
    profile: [
      {
        title: "Perfil",
        body: "Estudiante de Ingeniería en Informática en la Universidad Centroccidental Lisandro Alvarado, adscrito al Decanato de Ciencias y Tecnología. Su formación combina fundamentos de ingeniería de software con práctica continua en desarrollo web.",
      },
      {
        title: "Enfoque técnico",
        body: "Trabaja con una mirada de producto: entender el problema, ordenar la información y construir interfaces que puedan mantenerse en el tiempo. Su interés principal es el desarrollo web full-stack, con énfasis en la relación entre arquitectura, accesibilidad y experiencia de uso.",
      },
      {
        title: "Tecnologías",
        body: "Las herramientas que ha incorporado a su práctica académica son:",
        items: [
          "Next.js con App Router para la estructura de aplicaciones y el renderizado.",
          "TypeScript para modelar datos y sostener contratos entre componentes.",
          "React para la composición de interfaces y el manejo de estado local.",
          "CSS moderno: custom properties, Grid, Flexbox y animaciones nativas.",
          "Sistemas de interfaz y diseño (UI/UX systems) como base para decisiones visuales consistentes.",
        ],
      },
      {
        title: "Arquitectura y desarrollo web",
        body: "Le interesa separar contenido, presentación y comportamiento: datos tipados en módulos independientes, componentes con responsabilidades acotadas y estilos organizados alrededor de tokens. Esa disciplina es la que permite que un sitio crezca sin perder coherencia.",
      },
      {
        title: "Intereses profesionales",
        body: "Desarrollo de productos web, ingeniería de interfaz, accesibilidad, rendimiento y documentación técnica. También le interesa la investigación aplicada sobre cómo las personas usan y aprenden con software.",
      },
      {
        title: "Visión de crecimiento",
        body: "Consolidar una práctica full-stack rigurosa, participar en proyectos colaborativos y seguir estudiando las decisiones de arquitectura que hacen sostenible un producto. Este portafolio es, en sí mismo, un ejercicio de ese proceso.",
      },
    ],
  },
  {
    id: "jesus-torres",
    index: "04",
    name: "Jesús Torres",
    initials: "JT",
    kicker: "Lógica de sistemas",
    role: STUDENT_ROLE,
    badge: "Co-Desarrollador",
    bio: "Enfocado en la lógica de sistemas y desarrollo de software. Comprometido con la resolución de problemas y el trabajo en equipo.",
    tags: ["Lógica de Programación", "Trabajo en Equipo", "Análisis"],
    accent: "blue",
  },
  {
    id: "francisco-placeres",
    index: "05",
    name: "Francisco Placeres",
    initials: "FP",
    kicker: "Optimización y aprendizaje",
    role: STUDENT_ROLE,
    badge: "Co-Desarrollador",
    bio: "Apasionado por la tecnología y la optimización de procesos académicos. Orientado al aprendizaje continuo y la autogestión.",
    tags: ["Desarrollo Web", "Investigación", "Autogestión"],
    accent: "gold",
  },
  {
    id: "juan-rodriguez",
    index: "06",
    name: "Juan Rodríguez",
    initials: "JR",
    kicker: "Datos y estructura",
    role: STUDENT_ROLE,
    badge: "Co-Desarrollador",
    bio: "Dedicado al análisis de datos y estructura de proyectos. Enfocado en la eficiencia de hábitos de estudio y colaboración.",
    tags: ["Estructura de Datos", "Colaboración", "Planificación"],
    accent: "crimson",
  },
];
