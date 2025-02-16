"use client"
// components/Navbar.tsx
import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  // Ejemplo de estado para el menú mobile:
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav
      id="navbar"
      className="
        fixed top-0 left-0 z-50 w-full
        bg-transparent text-white
        transition-all duration-300
        filter backdrop-blur-[15px]
        scroll:bg-[rgba(25,36,95,0.25)]
      "
    >
      <div className="container mx-auto px-8">
        <div className="relative flex items-center justify-between">
          {/* Brand / Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 py-4">
              <img
                src="/images/logos/icon-background-transparent.png"
                alt="Logo"
                className="h-8"
              />
              <span className="text-xl font-semibold">Connecting Points</span>
            </Link>
          </div>

          {/* Links de navegación (desktop) */}
          <div className="mx-auto hidden space-x-1 lg:flex">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-semibold text-[rgba(74,108,247,1)] hover:text-[rgba(74,108,247,1)]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-semibold hover:text-[rgba(74,108,247,1)]"
            >
              Sobre Nós
            </Link>

            {/* Dropdown (desktop) */}
            <div className="group relative">
              <button
                className="
                  flex items-center px-3 py-2 text-sm font-semibold
                  hover:text-[rgba(74,108,247,1)] focus:outline-none
                "
              >
                Serviços
                <svg
                  className="ml-1 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                className="
                  absolute left-0 hidden w-60
                  rounded-lg border border-gray-300 bg-white text-gray-700 shadow-lg
                  group-hover:block
                "
              >
                <Link
                  href="/services/software-development"
                  className="block px-4 py-2 text-sm hover:bg-[rgba(96,118,147,0.17)]"
                >
                  Desenvolvimento de software
                </Link>
                <Link
                  href="/services/networks-and-infrastructures"
                  className="block px-4 py-2 text-sm hover:bg-[rgba(96,118,147,0.17)]"
                >
                  Redes e infraestruturas
                </Link>
                <Link
                  href="/services/graphic-design"
                  className="block px-4 py-2 text-sm hover:bg-[rgba(96,118,147,0.17)]"
                >
                  Design Gráfico
                </Link>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="px-3 py-2 text-sm font-semibold hover:text-[rgba(74,108,247,1)]"
            >
              Portfólio
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-semibold hover:text-[rgba(74,108,247,1)]"
            >
              Contato
            </Link>
          </div>

          {/* Dropdown de idiomas (desktop) */}
          <div className="relative hidden lg:block">
            <button
              className="
                flex items-center rounded-md px-4 py-2 font-semibold
                hover:text-[rgba(74,108,247,1)] focus:outline-none
              "
            >
              <img
                src="/images/languages/pt.png"
                alt="pt"
                className="mr-2 h-5 w-5 rounded-full"
              />
              Português
              <svg
                className="ml-1 h-5 w-5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Menú de idiomas */}
            <div
              className="
                absolute right-0 hidden w-40
                rounded-lg border border-gray-300 bg-white text-gray-900 shadow-lg
              "
            >
              <Link
                href="/language/locale/en"
                className="block px-4 py-2 hover:bg-[rgba(96,118,147,0.17)]"
              >
                <div className="inline-flex items-center">
                  <img
                    src="/images/languages/en.png"
                    alt="English"
                    className="mr-2 h-3.5 w-3.5 rounded-full"
                  />
                  <span>English</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Botón para abrir menú móvil */}
          <div className="lg:hidden">
            <button
              className="mobile-menu-button flex justify-center focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          mobile-menu fixed inset-0 z-[60] h-screen bg-white
          transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full hidden'}
        `}
      >
        <button
          className="absolute right-4 top-4 text-3xl text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="space-y-4 px-4 pt-16 pb-4">
          <Link
            href="/"
            className="block rounded px-2 py-1 text-lg font-medium text-[rgba(74,108,247,1)] hover:bg-[rgba(96,118,147,0.17)]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block rounded px-2 py-1 text-lg font-medium text-gray-700 hover:bg-[rgba(96,118,147,0.17)]"
          >
            Sobre Nós
          </Link>

          {/* Dropdown en mobile */}
          <div>
            <button
              className="
                dropdown-toggle block w-full text-left
                rounded px-2 py-1 text-lg font-medium text-gray-700
                hover:bg-[rgba(96,118,147,0.17)]
              "
            >
              Serviços
              <svg
                className="ml-1 inline h-5 w-5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Menú colapsable (ejemplo) */}
            <div className="mobile-dropdown hidden w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <Link
                href="/services/software-development"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(96,118,147,0.17)]"
              >
                Desenvolvimento de software
              </Link>
              <Link
                href="/services/networks-and-infrastructures"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(96,118,147,0.17)]"
              >
                Redes e infraestruturas
              </Link>
              <Link
                href="/services/graphic-design"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(96,118,147,0.17)]"
              >
                Design Gráfico
              </Link>
            </div>
          </div>

          <Link
            href="/portfolio"
            className="block rounded px-2 py-1 text-lg font-medium text-gray-700 hover:bg-[rgba(96,118,147,0.17)]"
          >
            Portfólio
          </Link>
          <Link
            href="/contact"
            className="block rounded px-2 py-1 text-lg font-medium text-gray-700 hover:bg-[rgba(96,118,147,0.17)]"
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  )
}
