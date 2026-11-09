export const RESEARCH = {
  targetSample: 10,
  verifiedResponses: 0,
  population: "Estudiantes de Ingeniería en Informática del Decanato de Ciencias y Tecnología (DCyT), UCLA.",
  topic:
    "Hábitos de estudio, uso del teléfono y principios de organización en estudiantes universitarios.",
  purpose:
    "Indagar cómo se organizan los estudiantes del DCyT para estudiar, qué papel ocupa el teléfono en sus rutinas y qué principios de responsabilidad personal reconocen en su propia práctica académica.",
  contribution:
    "Producir evidencia descriptiva, recolectada de forma anónima, que permita conversar sobre hábitos académicos con datos del propio contexto y no solo con impresiones generales.",
} as const;

export type InstrumentBlock = {
  code: string;
  title: string;
  description: string;
  dimensions: string[];
};

export const INSTRUMENT_BLOCKS: InstrumentBlock[] = [
  {
    code: "B1",
    title: "Datos académicos anónimos",
    description:
      "Información agregada para describir la muestra sin identificar a ninguna persona.",
    dimensions: ["Semestre que cursa", "Carrera", "Modalidad de estudio predominante"],
  },
  {
    code: "B2",
    title: "Hábitos de estudio",
    description:
      "Frecuencia y condiciones en las que se estudia durante la semana.",
    dimensions: [
      "Días de estudio por semana",
      "Duración habitual de una sesión",
      "Lugar donde estudia con mayor frecuencia",
    ],
  },
  {
    code: "B3",
    title: "Uso del teléfono",
    description:
      "Presencia del dispositivo durante el estudio y su relación con las interrupciones.",
    dimensions: [
      "Frecuencia de revisión durante el estudio",
      "Motivo principal de la interrupción",
      "Estrategias de control del dispositivo",
    ],
  },
  {
    code: "B4",
    title: "Planificación y constancia",
    description:
      "Formas de organizar entregas, prioridades y continuidad del trabajo académico.",
    dimensions: [
      "Uso de agenda o lista de tareas",
      "Anticipación de entregas",
      "Continuidad entre sesiones",
    ],
  },
  {
    code: "B5",
    title: "Principios personales",
    description:
      "Reconocimiento de ideas asociadas a la responsabilidad personal y la iniciativa.",
    dimensions: [
      "Iniciativa ante dificultades académicas",
      "Responsabilidad sobre errores de planificación",
      "Valor atribuido a la constancia",
    ],
  },
];

export type MethodologyStage = {
  number: string;
  title: string;
  status: string;
  statusTone: "documented" | "pending" | "prepared";
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
      "Preparación de las dimensiones del cuestionario.",
      "Selección del método de distribución: código QR y enlace directo.",
      "Preparación del espacio reservado para el código QR.",
    ],
  },
  {
    number: "02",
    title: "Ejecución",
    status: "Pendiente de respuestas",
    statusTone: "pending",
    items: [
      "Presentación del cuestionario a los participantes.",
      "Distribución entre estudiantes de la UCLA - DCyT.",
      "Recolección de respuestas.",
      "Organización de los datos recolectados.",
      "Verificación de la validez de cada respuesta.",
    ],
  },
  {
    number: "03",
    title: "Transferencia al portafolio digital",
    status: "Estructura preparada",
    statusTone: "prepared",
    items: [
      "Anonimización de la información cuando corresponda.",
      "Agregación de respuestas por dimensión.",
      "Interpretación de los resultados.",
      "Presentación visual con denominadores explícitos.",
      "Redacción de conclusiones académicas.",
    ],
  },
];

export const RESULTS_CRITERIA = [
  "Publicar únicamente respuestas que hayan sido verificadas y contabilizadas.",
  "Indicar siempre el número de respuestas válidas detrás de cada porcentaje.",
  "No atribuir nombres, correos ni respuestas individuales identificables.",
  "Distinguir con claridad los hallazgos de las expectativas previas del equipo.",
] as const;

export const PLANNED_CHARTS = [
  {
    id: "habitos",
    title: "Distribución de hábitos de estudio",
    description:
      "Frecuencia semanal y duración de las sesiones de estudio reportadas por la muestra.",
    unit: "Respuestas por categoría",
  },
  {
    id: "telefono",
    title: "Uso del teléfono durante el estudio",
    description:
      "Frecuencia de revisión del dispositivo y motivo principal de interrupción.",
    unit: "Respuestas por categoría",
  },
  {
    id: "constancia",
    title: "Constancia percibida",
    description:
      "Continuidad entre sesiones y uso de herramientas de planificación académica.",
    unit: "Respuestas por categoría",
  },
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
      { name: "Presentación de datos", status: "desarrollo", note: "La estructura existe; faltan respuestas verificadas." },
    ],
  },
  {
    id: "comunicativas",
    title: "Comunicativas",
    subtitle: "Escritura, documentación y exposición del proceso.",
    items: [
      { name: "Producción de video", status: "por-desarrollar", note: "El reel del equipo aún no está editado." },
      { name: "Escritura académica", status: "desarrollo", note: "Síntesis de fuentes en revisión editorial." },
      { name: "Documentación de investigación", status: "desarrollo", note: "Metodología documentada; resultados pendientes." },
      { name: "Diseño de encuestas", status: "desarrollo", note: "Dimensiones definidas, instrumento por validar." },
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
