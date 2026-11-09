# Sintaxis Humana

Portafolio académico de tres estudiantes de **Ingeniería en Informática** de la
Universidad Centroccidental Lisandro Alvarado — **UCLA, Decanato de Ciencias y
Tecnología (DCyT)**.

El sitio reúne una revisión de la literatura sobre hábitos, una investigación de
campo en el DCyT y un registro honesto del proceso de aprendizaje del equipo.

## Stack

- **Next.js 15** con App Router y componentes de servidor.
- **React 19** y **TypeScript** en modo estricto.
- **CSS nativo**: custom properties, Grid, Flexbox, container queries y
  animaciones ligadas al scroll (`animation-timeline: scroll()` y `view()`).
- Tipografías con `next/font` (Instrument Serif, Inter, JetBrains Mono).
- Sin librerías de animación ni dependencias de interfaz externas.

## Comandos

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run start      # servir el build
npm run typecheck  # validación de TypeScript
npm run lint       # ESLint
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
  media/            # tarjeta QR de la encuesta
  ui/               # encabezado de sección
lib/content/        # contenido tipado en español
public/images/      # escudo institucional y Open Graph
scripts/            # generación de activos con sharp
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
- Navegación por teclado en el carrusel, las pestañas de anexos y el diálogo de
  perfil (elemento `dialog` nativo).
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

Pendiente de material externo o de etapas posteriores:

- URL definitiva de la encuesta y su código QR validado.
- Respuestas verificadas de la muestra objetivo (10 estudiantes del DCyT).
- Reel del equipo sobre hábitos.
- Perfiles verificados de Maikol Marquez y Zadkiel Boza.
- Dominio final del sitio.

## Aviso

Proyecto académico independiente. No es un sitio oficial de la Universidad
Centroccidental Lisandro Alvarado ni representa un canal institucional. La sigla
UCLA se refiere exclusivamente a la casa de estudios venezolana, no a la
University of California, Los Angeles.
