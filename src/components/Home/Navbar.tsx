"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n, dictionary } from "@/lib/useTranslations";
import { Language } from "@/lib/Translations";

// Actualizamos los elementos de navegación para que las claves coincidan con la estructura de las traducciones.
const navItems = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  {
    key: "nav.service",
    children: [
      { key: "nav.services.software", href: "/services/software-development" },
      { key: "nav.services.networks", href: "/services/networks-and-infrastructures" },
      { key: "nav.services.design", href: "/services/graphic-design" },
    ],
  },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.contact", href: "/contact" },
];

function DesktopNav({ t }: { t: (key: string) => string }) {
  return (
    <div className="mx-auto hidden space-x-1 lg:flex">
      {navItems.map((item) =>
        item.children ? (
          <div key={item.key} className="group relative">
            <button className="flex items-center px-3 py-2 text-sm font-semibold hover:text-[rgba(74,108,247,1)] focus:outline-none">
              {t(item.key)}
              <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 hidden w-60 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-lg group-hover:block">
              {item.children.map((child) => (
                <Link
                  key={child.key}
                  href={child.href}
                  className="block px-4 py-2 text-sm hover:bg-[rgba(96,118,147,0.17)]"
                >
                  {t(child.key)}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={item.key}
            href={item.href}
            className="px-3 py-2 text-sm font-semibold hover:text-[rgba(74,108,247,1)]"
          >
            {t(item.key)}
          </Link>
        )
      )}
    </div>
  );
}

function MobileNav({ t, setIsMobileMenuOpen }: { t: (key: string) => string; setIsMobileMenuOpen: (open: boolean) => void }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="space-y-4 px-4 pt-16 pb-4">
      {navItems.map((item) =>
        item.children ? (
          <div key={item.key}>
            <button
              onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)}
              className="block w-full text-left rounded px-2 py-1 text-lg font-medium text-gray-700 hover:bg-[rgba(96,118,147,0.17)]"
            >
              {t(item.key)}
              <svg className="ml-1 inline h-5 w-5" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === item.key && (
              <div className="w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                {item.children.map((child) => (
                  <Link
                    key={child.key}
                    href={child.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(96,118,147,0.17)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(child.key)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.key}
            href={item.href}
            className="block rounded px-2 py-1 text-lg font-medium text-gray-700 hover:bg-[rgba(96,118,147,0.17)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t(item.key)}
          </Link>
        )
      )}
    </div>
  );
}

function LanguageSwitcher({
  language,
  other,
  setLanguage,
}: {
  language: Language;
  other: Language;
  setLanguage: (language: Language) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center rounded-md px-4 py-2 font-semibold hover:text-[rgba(74,108,247,1)] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={`/images/languages/${language}.png`} alt={language} className="mr-2 h-5 w-5 rounded-full" />
        {dictionary[language]}
        <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 w-40 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-lg">
          <button
            className="flex w-full px-4 py-2 hover:bg-[rgba(96,118,147,0.17)]"
            onClick={() => {
              setLanguage(other);
              setIsOpen(false);
            }}
          >
            <div className="inline-flex items-center">
              <img src={`/images/languages/${other}.png`} alt={other} className="mr-2 h-3.5 w-3.5 rounded-full" />
              <span>{dictionary[other]}</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const { t, setLanguage, language, other } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 z-50 w-full bg-transparent text-white transition-all duration-300 filter backdrop-blur-[15px] scroll:bg-[rgba(25,36,95,0.25)]"
    >
      <div className="container mx-auto px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo y marca */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 py-4">
              <img src="/images/logos/icon-background-transparent.png" alt="Logo" className="h-8" />
              <span className="text-xl font-semibold">Connecting Points</span>
            </Link>
          </div>

          {/* Navegación para escritorio */}
          <DesktopNav t={t} />

          {/* Selector de idioma para escritorio */}
          <div className="hidden lg:block">
            <LanguageSwitcher language={language} other={other} setLanguage={setLanguage} />
          </div>

          {/* Botón para abrir menú móvil */}
          <div className="lg:hidden">
            <button
              className="mobile-menu-button flex justify-center focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`mobile-menu fixed inset-0 z-[60] h-screen bg-white transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <button className="absolute right-4 top-4 text-3xl text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="text-3xl text-gray-900 font-bold">&times;</span>
        </button>
        <MobileNav t={t} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <div className="mt-4 md:hidden px-4">
          <LanguageSwitcher language={language} other={other} setLanguage={setLanguage} />
        </div>
      </div>
    </nav>
  );
}
