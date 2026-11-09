export const SITE = {
  name: "Sintaxis Humana",
  tagline: "Principios, hábitos y tecnología en la UCLA - DCyT",
  institution: "Universidad Centroccidental Lisandro Alvarado",
  institutionShort: "UCLA",
  faculty: "Decanato de Ciencias y Tecnología",
  facultyShort: "DCyT",
  program: "Ingeniería en Informática",
  course: "Lenguaje y Comunicación",
  location: "Barquisimeto, Lara, Venezuela",
  year: "2026",
  description:
    "Portafolio académico de tres estudiantes de Ingeniería en Informática de la UCLA - DCyT: revisión de la literatura sobre hábitos, investigación de campo y registro honesto del proceso de aprendizaje.",
} as const;

export type NavItem = {
  id: string;
  label: string;
  index: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio", index: "01" },
  { id: "equipo", label: "Equipo", index: "02" },
  { id: "habitos", label: "Hábitos", index: "03" },
  { id: "investigacion", label: "Investigación", index: "04" },
  { id: "resultados", label: "Resultados", index: "05" },
  { id: "avance", label: "Nuestro avance", index: "06" },
];
