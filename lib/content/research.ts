export const RESEARCH = {
  population: "Estudiantes de Ingeniería en Informática del Decanato de Ciencias y Tecnología (DCyT), UCLA.",
  topic:
    "Hábitos de estudio, concentración, aprendizaje colaborativo y descanso en estudiantes de Ingeniería en Informática.",
  purpose:
    "Describir cómo los estudiantes organizan su tiempo, responden a las distracciones, se relacionan con sus compañeros y gestionan su descanso.",
  contribution:
    "Aportar evidencia descriptiva y agregada sobre hábitos académicos dentro del contexto inmediato del DCyT.",
} as const;

export type InstrumentBlock = {
  code: string;
  title: string;
  description: string;
  dimensions: string[];
};

export const INSTRUMENT_BLOCKS: InstrumentBlock[] = [
  {
    code: "T1",
    title: "Perfil del estudiante",
    description:
      "Datos generales para situar la muestra sin identificar a las personas.",
    dimensions: ["Rango de edad", "Carrera"],
  },
  {
    code: "T2",
    title: "Organización y concentración",
    description:
      "Planificación de entregas, respuesta a distracciones y revisión del progreso.",
    dimensions: [
      "Gestión del tiempo",
      "Respuesta a distracciones",
      "Autoevaluación académica",
    ],
  },
  {
    code: "T3",
    title: "Aprendizaje colaborativo",
    description:
      "Preferencias de estudio y apertura a la corrección de compañeros.",
    dimensions: ["Compañía al estudiar", "Escucha de correcciones"],
  },
  {
    code: "T4",
    title: "Autogestión y descanso",
    description:
      "Percepción del descanso y su relación declarada con el rendimiento académico.",
    dimensions: ["Horas de descanso", "Dificultad para descansar la mente"],
  },
];

export type MethodologyStage = {
  number: string;
  title: string;
  status: string;
  statusTone: "documented";
  items: string[];
};

export const METHODOLOGY: MethodologyStage[] = [
  {
    number: "01",
    title: "Planificación",
    status: "Documentada",
    statusTone: "documented",
    items: [
      "Definición de los objetivos de la investigación.",
      "Identificación de la muestra objetivo: diez estudiantes del DCyT.",
      "Diseño del cuestionario de campo.",
      "Definición de los cuatro bloques temáticos.",
      "Criterios de lectura y límites de interpretación.",
    ],
  },
  {
    number: "02",
    title: "Ejecución",
    status: "Completada",
    statusTone: "documented",
    items: [
      "Presentación del cuestionario a los participantes.",
      "Aplicación del instrumento a diez estudiantes del DCyT.",
      "Recolección y organización de las respuestas.",
      "Conteo de las opciones por pregunta.",
      "Revisión de la consistencia de cada distribución.",
    ],
  },
  {
    number: "03",
    title: "Transferencia al portafolio digital",
    status: "Resultados publicados",
    statusTone: "documented",
    items: [
      "Agregación de respuestas sin datos identificables.",
      "Agrupación de las ocho preguntas analizadas en cuatro temas.",
      "Interpretación descriptiva de los resultados.",
      "Presentación visual con denominadores explícitos.",
      "Redacción de conclusiones limitadas por la muestra.",
    ],
  },
];

export const RESULTS_CRITERIA = [
  "Publicar únicamente respuestas registradas y contabilizadas.",
  "Indicar siempre el número de respuestas válidas detrás de cada porcentaje.",
  "No atribuir nombres, correos ni respuestas individuales identificables.",
  "Distinguir con claridad los hallazgos de las expectativas previas del equipo.",
] as const;

export type CompetencyStatus = "desarrollo" | "aplicado" | "consolidado" | "por-desarrollar";

export type Competency = {
  name: string;
  status: CompetencyStatus;
  note?: string;
};

export type CompetencyGroup = {
  id: string;
  title: string;
  subtitle: string;
  items: Competency[];
};

export const COMPETENCIES: CompetencyGroup[] = [
  {
    id: "tecnologicas",
    title: "Tecnológicas",
    subtitle: "Construcción y validación del portafolio digital.",
    items: [
      { name: "Next.js", status: "aplicado", note: "App Router y componentes de servidor." },
      { name: "React y TypeScript", status: "aplicado", note: "Componentes tipados y estado local acotado." },
      { name: "Arquitectura de componentes", status: "aplicado", note: "Separación entre contenido, interfaz y estilos." },
      { name: "CSS moderno", status: "aplicado", note: "Custom properties, Grid, Flexbox y container queries." },
      { name: "Animaciones ligadas al scroll", status: "aplicado", note: "animation-timeline con degradación progresiva." },
      { name: "Diseño responsivo", status: "aplicado", note: "Verificación entre 320 px y 1920 px." },
      { name: "Integración de medios digitales", status: "desarrollo", note: "El espacio del video está listo; falta el material final." },
      { name: "Accesibilidad web", status: "aplicado", note: "Semántica, teclado, foco visible y movimiento reducido." },
      { name: "Presentación de datos", status: "aplicado", note: "Gráficos descriptivos con denominadores explícitos (n = 10)." },
    ],
  },
  {
    id: "comunicativas",
    title: "Comunicativas",
    subtitle: "Escritura, documentación y exposición del proceso.",
    items: [
      { name: "Producción de video", status: "por-desarrollar", note: "El reel del equipo aún no está editado." },
      { name: "Escritura académica", status: "desarrollo", note: "Síntesis de fuentes en revisión editorial." },
      { name: "Documentación de investigación", status: "aplicado", note: "Metodología y resultados descriptivos publicados." },
      { name: "Diseño de encuestas", status: "aplicado", note: "Informe descriptivo de ocho preguntas con diez respuestas registradas." },
      { name: "Presentación de información", status: "aplicado", note: "Jerarquía editorial y etiquetas técnicas." },
      { name: "Comunicación técnica", status: "desarrollo", note: "Documentación del sistema de diseño en curso." },
      { name: "Trabajo colaborativo", status: "desarrollo", note: "Roles y aportes en consolidación." },
    ],
  },
  {
    id: "personales",
    title: "Personales e interpersonales",
    subtitle: "Hábitos que sostienen el trabajo académico.",
    items: [
      { name: "Autorregulación", status: "desarrollo", note: "Sesiones de trabajo planificadas por bloques." },
      { name: "Priorización de tareas", status: "desarrollo", note: "Organización por entregables del portafolio." },
      { name: "Iniciativa", status: "aplicado", note: "Decisiones técnicas y editoriales asumidas por el equipo." },
      { name: "Trabajo en equipo", status: "desarrollo", note: "Revisión cruzada de contenidos." },
      { name: "Responsabilidad", status: "aplicado", note: "Contenido sin datos inventados y con límites explícitos." },
      { name: "Adaptabilidad", status: "desarrollo", note: "Ajustes de alcance cuando falta material externo." },
      { name: "Constancia", status: "desarrollo", note: "El avance se mide por iteraciones, no por promesas." },
    ],
  },
];

export const COMPETENCY_LEGEND: { status: CompetencyStatus; label: string }[] = [
  { status: "por-desarrollar", label: "Por desarrollar" },
  { status: "desarrollo", label: "En desarrollo" },
  { status: "aplicado", label: "Aplicado" },
  { status: "consolidado", label: "Consolidado" },
];

export const LINKAGES = [
  {
    title: "Planificación de proyectos de software",
    description:
      "Definir alcance, ordenar entregables y reconocer lo que queda fuera de una iteración.",
  },
  {
    title: "Diseño de interfaces centrado en el usuario",
    description:
      "Partir de las necesidades de quien lee o usa el producto antes de decidir la forma.",
  },
  {
    title: "Documentación técnica",
    description:
      "Registrar decisiones y límites para que otra persona pueda continuar el trabajo.",
  },
  {
    title: "Desarrollo colaborativo",
    description:
      "Coordinar responsabilidades y revisar el trabajo ajeno con criterios explícitos.",
  },
  {
    title: "Recolección e interpretación de datos",
    description:
      "Diseñar instrumentos honestos y presentar resultados con su denominador.",
  },
  {
    title: "Diseño responsable de tecnología",
    description:
      "Reconocer el efecto de las decisiones de producto en las personas que las usan.",
  },
  {
    title: "Productividad en ingeniería de software",
    description:
      "Sostener el trabajo profundo con hábitos, entornos y sistemas, no solo con urgencia.",
  },
] as const;

export const HABIT_ONE_APPLICATIONS = [
  "Planificar sesiones de estudio antes de que la entrega sea inminente.",
  "Pedir orientación académica cuando una noción no se comprende.",
  "Administrar fechas límite con un calendario propio y revisable.",
  "Asumir los errores de planificación y corregir el proceso.",
  "Aportar al trabajo del equipo sin esperar una asignación externa.",
] as const;
