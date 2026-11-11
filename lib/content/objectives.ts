export type ObjectiveStatus = "cumplido";

export type Objective = {
  id: string;
  tag: string;
  title: string;
  description: string;
  status: ObjectiveStatus;
};

export const OBJECTIVES: Objective[] = [
  {
    id: "literatura",
    tag: "Literatura",
    title: "Revisión de tres referentes",
    description:
      "Fichas de Covey, Duhigg y Clear publicadas, con comparación y aplicación académica.",
    status: "cumplido",
  },
  {
    id: "reel",
    tag: "Reel",
    title: "Video del equipo publicado",
    description:
      "El reel de Lenguaje y Comunicación está editado y disponible en la sección 03 y en YouTube.",
    status: "cumplido",
  },
  {
    id: "encuesta",
    tag: "Encuesta",
    title: "Investigación de campo aplicada",
    description:
      "Cuestionario aplicado a diez estudiantes del DCyT, con resultados publicados por tema.",
    status: "cumplido",
  },
  {
    id: "portafolio",
    tag: "Portafolio",
    title: "Portafolio digital en línea",
    description:
      "Sitio construido con Next.js, contenido tipado y diseño responsivo verificado.",
    status: "cumplido",
  },
];

export const NEXT_ITERATIONS = [
  {
    tag: "Encuesta",
    text: "Ampliar la muestra para comparar los patrones descriptivos con otros grupos y carreras.",
  },
  {
    tag: "Perfiles",
    text: "Confirmar las biografías de Maikol y Zadkiel cuando sus autores las validen.",
  },
  {
    tag: "Dominio",
    text: "Definir el dominio final del sitio y la URL canónica para los metadatos.",
  },
];