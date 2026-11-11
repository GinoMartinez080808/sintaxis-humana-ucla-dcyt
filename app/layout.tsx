import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { RevealFallback } from "@/components/layout/reveal-fallback";
import { SITE } from "@/lib/content/site";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sintaxis Humana | Portafolio académico UCLA - DCyT",
    template: "%s | Sintaxis Humana",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [
    { name: "Maikol Márquez" },
    { name: "Zadkiel Boza" },
    { name: "Gino Martínez" },
    { name: "Jesús Torres" },
    { name: "Francisco Placeres" },
    { name: "Juan Rodríguez" },
  ],
  keywords: [
    "UCLA",
    "DCyT",
    "Ingeniería en Informática",
    "portafolio académico",
    "hábitos",
    "Covey",
    "Duhigg",
    "James Clear",
    "Barquisimeto",
  ],
  openGraph: {
    type: "website",
    locale: "es_VE",
    siteName: SITE.name,
    title: "Sintaxis Humana | Portafolio académico UCLA - DCyT",
    description: SITE.description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sintaxis Humana, portafolio académico de Ingeniería en Informática de la UCLA - DCyT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sintaxis Humana | Portafolio académico UCLA - DCyT",
    description: SITE.description,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-VE"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <ScrollProgress />
        <RevealFallback />
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
