"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const firstLink =
      mobileNavRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 981px)");
    const onDesktop = () => {
      if (desktopQuery.matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onDesktop);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="page">
        <div className="site-header__inner">
          <a
            className="brand"
            href="#inicio"
            aria-label="Sintaxis Humana, ir al inicio del portafolio"
          >
            <span className="brand__seal">
              <Image
                src="/images/logo-ucla.png"
                alt="Escudo de la Universidad Centroccidental Lisandro Alvarado"
                width={634}
                height={768}
                sizes="44px"
              />
            </span>
            <span className="brand__text">
              <span className="brand__name">Sintaxis Humana</span>
              <span className="brand__meta">UCLA · DCyT · 2026</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className="site-nav__link"
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
            <span className="site-nav__tag" aria-hidden="true">
              Portafolio
            </span>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-toggle__lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        ref={mobileNavRef}
        id="menu-movil"
        className={`mobile-nav${open ? " is-open" : ""}`}
      >
        <div className="page">
          <nav aria-label="Navegación principal móvil">
            <ul className="mobile-nav__list">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    className="mobile-nav__link"
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "location" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-nav__index" aria-hidden="true">
                      {item.index}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
