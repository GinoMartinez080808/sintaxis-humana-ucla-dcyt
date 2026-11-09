import Image from "next/image";
import { NAV_ITEMS, SITE } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand__top">
              <span className="footer-brand__seal">
                <Image
                  src="/images/logo-ucla.png"
                  alt=""
                  width={634}
                  height={768}
                  sizes="46px"
                />
              </span>
              <span>
                <span className="footer-brand__name">Sintaxis Humana</span>
                <span className="footer-brand__meta">
                  Portafolio académico · {SITE.year}
                </span>
              </span>
            </div>
            <p>
              Revisión de la literatura sobre hábitos, investigación de campo y
              registro del proceso de aprendizaje de tres estudiantes de
              Ingeniería en Informática de la UCLA - DCyT.
            </p>
          </div>

          <div className="footer-col">
            <h4>Secciones</h4>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contexto académico</h4>
            <ul>
              <li>{SITE.institution}</li>
              <li>{SITE.faculty}</li>
              <li>{SITE.program}</li>
              <li>{SITE.course}</li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Proyecto académico independiente. No es un sitio oficial de la
            Universidad Centroccidental Lisandro Alvarado ni representa un canal
            institucional. UCLA - DCyT se refiere exclusivamente a la casa de
            estudios venezolana.
          </p>
          <div className="footer-bottom__meta">
            <span>© {SITE.year}</span>
            <span>Next.js · TypeScript</span>
            <span>Hecho en Barquisimeto</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
