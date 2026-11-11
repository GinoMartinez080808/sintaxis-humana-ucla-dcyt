# Sintaxis Humana

Portafolio académico de seis estudiantes de **Ingeniería en Informática** de la
Universidad Centroccidental Lisandro Alvarado — **UCLA, Decanato de Ciencias y
Tecnología (DCyT)**.

El sitio reúne una revisión de la literatura sobre hábitos, una investigación de
campo en el DCyT y un registro honesto del proceso de aprendizaje del equipo.

## Stack

- **Next.js 16** con App Router y componentes de servidor.
- **React 19** y **TypeScript** en modo estricto.
- **CSS nativo**: custom properties, Grid, Flexbox, container queries y
  animaciones ligadas al scroll (`animation-timeline: scroll()` y `view()`).
- Tipografías con `next/font` (Instrument Serif, Inter, JetBrains Mono).
- Sin librerías de animación ni dependencias de interfaz externas.

## Requisitos

- Node.js 22.18 o superior. Los tests ejecutan el módulo TypeScript con el
  *type stripping* nativo de Node.

## Comandos

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run start      # servir el build
npm run typecheck  # validación de TypeScript
npm run lint       # ESLint
npm test           # validación del conjunto de datos de la encuesta
npm run assets:generate  # regenera iconos y la imagen Open Graph desde el escudo
```

## Estructura

```text
app/
  layout.tsx        # fuentes, metadatos, shell global
  page.tsx          # composición de la landing
  globals.css       # sistema de diseño completo
  icon.png          # favicon (generado desde el escudo)
  apple-icon.png
components/
  layout/           # encabezado, pie, progreso de lectura
  sections/         # hero, equipo, hábitos, investigación, resultados, avance
  team/             # tarjetas del equipo y diálogo de perfil
  media/            # panel de acceso a la encuesta
  survey/           # gráficos y métricas del cuestionario
  ui/               # encabezado de sección y avatares
lib/content/        # contenido tipado en español
public/images/      # escudo institucional, Open Graph y fotos opcionales del equipo
scripts/            # generación de activos con sharp
tests/              # validación del conjunto de datos
```

## Sistema visual

La identidad combina editorial académico, glassmorphism medido, geometría
neobrutalista y detalles de ingeniería. Los colores de acento se derivan del
escudo institucional suministrado: carmesí, azul profundo y dorado sobre un fondo
de tinta oscuro.

Tokens principales en `app/globals.css`:

- `--ink-950`, `--paper`, `--crimson`, `--gold`, `--blue`.
- Escala tipográfica fluida con `clamp()`.
- Radios, sombras, duraciones y curvas de movimiento consistentes.

## Accesibilidad

- HTML semántico, un solo `h1` y jerarquía de encabezados por sección.
- Enlace de salto al contenido y foco visible.
- Navegación por teclado en las pestañas de anexos y el diálogo de perfil
  (elemento `dialog` nativo).
- Avatares con iniciales como alternativa textual y descripción accesible.
- Estados de competencia con texto además de color.
- Respeto a `prefers-reduced-motion`; el contenido nunca depende de una
  animación para ser visible.
- Contraste alto y etiquetas descriptivas en controles e imágenes.

## Integridad académica

Este proyecto **no inventa** respuestas de encuesta, porcentajes, biografías,
logros, citas ni resultados de investigación. Cuando un dato no existe, la
interfaz lo declara como pendiente y explica qué falta.

Las fuentes revisadas son:

- Covey, S. R. (1989). *The 7 Habits of Highly Effective People*. Simon &
  Schuster.
- Duhigg, C. (2012). *The Power of Habit*. Random House.
- Clear, J. (2018). *Atomic Habits*. Avery.

## Estado editorial

La encuesta de campo se aplicó a diez estudiantes y sus resultados descriptivos
están publicados con denominadores explícitos. La muestra no es probabilística:
el sitio no generaliza sus hallazgos a toda la UCLA. El código QR de acceso abre
el formulario original «Hábitos y Principios» en Google Forms; el informe analiza
ocho de sus nueve preguntas.

Pendiente de material externo o de etapas posteriores:

- Ampliar la muestra para comparar los patrones con otros grupos y carreras.
- Reel del equipo sobre hábitos.
- Perfiles verificados de Maikol Márquez y Zadkiel Boza.
- Dominio final del sitio.

Las fotografías del equipo son opcionales. Si se añade un archivo
`public/images/team/<id>.webp` (por ejemplo `jesus-torres.webp`), el avatar lo
detecta y lo muestra; mientras no exista, se conserva el marcador de iniciales
con la etiqueta «Foto por cargar».

## Aviso

Proyecto académico independiente. No es un sitio oficial de la Universidad
Centroccidental Lisandro Alvarado ni representa un canal institucional. La sigla
UCLA se refiere exclusivamente a la casa de estudios venezolana, no a la
University of California, Los Angeles.
