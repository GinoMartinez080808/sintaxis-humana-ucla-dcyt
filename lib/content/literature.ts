export type LiteraturePanel = {
  id: string;
  letter: string;
  author: string;
  work: string;
  title: string;
  kicker: string;
  paragraphs: string[];
  concepts: string[];
  application: string;
  keyIdea: string;
  variant: "covey" | "duhigg" | "clear";
};

export const LITERATURE: LiteraturePanel[] = [
  {
    id: "covey",
    letter: "A",
    author: "Stephen R. Covey",
    work: "Los 7 hábitos de la gente altamente efectiva (1989)",
    title: "La responsabilidad de nuestras decisiones",
    kicker: "Proactividad y libertad de elección",
    paragraphs: [
      "Covey propone que entre un estímulo y una respuesta existe un espacio donde ejercemos la libertad de elegir. La proactividad consiste en hacerse cargo de esa elección en lugar de atribuirla por completo a las circunstancias, al humor o a la conducta de otras personas.",
      "Su planteamiento distingue dos territorios. El círculo de preocupación reúne aquello que nos afecta pero no controlamos: el tráfico, la complejidad de una materia, la decisión de un profesor. El círculo de influencia contiene lo que sí podemos modificar: nuestro horario de estudio, la forma de preguntar, la constancia con la que revisamos un proyecto.",
    ],
    concepts: [
      "Proactividad",
      "Responsabilidad personal",
      "Iniciativa",
      "Círculo de influencia",
      "Círculo de preocupación",
    ],
    application:
      "En la vida universitaria, la proactividad se traduce en decisiones concretas: revisar el cronograma antes de que la entrega esté encima, consultar a un profesor cuando una noción no se entiende, reconocer un error de planificación y corregirlo sin buscar culpables.",
    keyIdea:
      "La energía rinde más cuando se concentra en lo que se puede modificar y no en lo que solo se puede lamentar.",
    variant: "covey",
  },
  {
    id: "duhigg",
    letter: "B",
    author: "Charles Duhigg",
    work: "El poder de los hábitos (2012)",
    title: "La estructura detrás de nuestros hábitos",
    kicker: "Señal, rutina y recompensa",
    paragraphs: [
      "Duhigg describe el hábito como un bucle de tres partes: una señal que activa el comportamiento, una rutina que se ejecuta y una recompensa que el cerebro registra. Con la repetición, la señal y la recompensa se vuelven tan familiares que aparece la anticipación: el craving.",
      "El craving no es un cuarto paso del bucle, sino la fuerza que lo sostiene. No abrimos el teléfono solo por el teléfono: anticipamos la pausa, la novedad o la salida breve que representa. Lo mismo ocurre con el estudio cuando la recompensa es avanzar, comprender o cerrar una tarea pendiente.",
      "Para cambiar un hábito, el autor propone conservar la señal y la recompensa e intervenir la rutina. Si el celular interrumpe el estudio cada noche, la señal puede seguir siendo el cansancio y la recompensa la pausa; lo que cambia es la rutina que ocupa ese lugar.",
    ],
    concepts: [
      "Señal",
      "Rutina",
      "Recompensa",
      "Craving",
      "Cambio de rutina",
    ],
    application:
      "Reconocer la señal permite diseñar el estudio: si la notificación es la señal y la distracción la recompensa, el silencio del teléfono y una pausa programada modifican la rutina sin negar la necesidad que la sostiene.",
    keyIdea:
      "El hábito no se elimina: se reescribe. La señal y la recompensa permanecen; la rutina es la parte que podemos intervenir.",
    variant: "duhigg",
  },
  {
    id: "clear",
    letter: "C",
    author: "James Clear",
    work: "Hábitos atómicos (2018)",
    title: "Pequeños cambios, grandes resultados",
    kicker: "Sistemas, identidad y entorno",
    paragraphs: [
      "Clear desplaza la atención del objetivo aislado hacia el sistema: la suma de decisiones pequeñas y repetidas. Una mejora del uno por ciento diario parece insignificante en el corto plazo, pero compone resultados visibles cuando se sostiene en el tiempo.",
      "Los hábitos basados en identidad parten de una pregunta distinta: no «qué quiero lograr», sino «qué tipo de estudiante quiero ser». Cada acción se convierte entonces en un voto a favor de esa identidad, y la constancia deja de depender solo de la motivación.",
      "El entorno también participa. Dejar el material preparado, silenciar el teléfono y estudiar en un lugar asociado al trabajo reduce la fricción de empezar. Clear resume ese esfuerzo en cuatro leyes del cambio de comportamiento.",
    ],
    concepts: [
      "Mejoras progresivas",
      "Hábitos basados en identidad",
      "Diseño del entorno",
      "Consistencia",
      "Sistemas frente a objetivos",
    ],
    application:
      "Para un estudiante de ingeniería, el sistema puede ser tan concreto como una sesión breve de revisión al final de cada clase. No depende de un impulso heroico: depende de un espacio, un horario y una acción lo bastante pequeña como para repetirla.",
    keyIdea:
      "El objetivo orienta; el sistema sostiene. La identidad convierte una tarea repetida en una forma de ser.",
    variant: "clear",
  },
];

export const CLEAR_LAWS = [
  {
    number: "L1",
    title: "Hazlo obvio",
    concept: "Señal",
    description:
      "Coloca la acción en un lugar visible y asóciala a un momento fijo del día. El material de estudio sobre el escritorio cumple esa función.",
  },
  {
    number: "L2",
    title: "Hazlo atractivo",
    concept: "Deseo",
    description:
      "Vincula la tarea con algo que valore el estudiante. Estudiar en grupo o convertir el avance en una meta compartida puede volverla deseable.",
  },
  {
    number: "L3",
    title: "Hazlo sencillo",
    concept: "Respuesta",
    description:
      "Reduce los pasos necesarios para empezar. Una sesión de veinte minutos con el material listo exige menos fricción que un plan perfecto sin preparación.",
  },
  {
    number: "L4",
    title: "Hazlo satisfactorio",
    concept: "Recompensa",
    description:
      "Registra el avance y cierra cada sesión con una señal clara de progreso. La satisfacción inmediata sostiene la repetición.",
  },
] as const;

export const COMPARISON = [
  {
    author: "Covey",
    focus: "Responsabilidad personal y acción intencional",
    application: "Tomar iniciativa y administrar prioridades",
  },
  {
    author: "Duhigg",
    focus: "Comprensión del comportamiento habitual",
    application: "Reconocer señales y rutinas de estudio recurrentes",
  },
  {
    author: "Clear",
    focus: "Diseño de mejoras sostenibles",
    application: "Construir hábitos académicos pequeños y constantes",
  },
] as const;

export const REFERENCES = [
  {
    author: "Covey, Stephen R.",
    title: "The 7 Habits of Highly Effective People",
    year: "1989",
    publisher: "Simon & Schuster",
    note: "Edición en español: Los 7 hábitos de la gente altamente efectiva, Paidós.",
  },
  {
    author: "Duhigg, Charles",
    title: "The Power of Habit",
    year: "2012",
    publisher: "Random House",
    note: "Edición en español: El poder de los hábitos, Urano.",
  },
  {
    author: "Clear, James",
    title: "Atomic Habits",
    year: "2018",
    publisher: "Avery",
    note: "Edición en español: Hábitos atómicos, Paidós.",
  },
] as const;
