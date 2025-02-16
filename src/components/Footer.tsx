// components/Footer.tsx

import Link from "next/link";
import { Circles } from "./Hero/Circles";
import { Cubo } from "./Hero/Cubo";

export default function Footer() {
  return (
    <footer
      className="
      relative z-10
      bg-[rgba(74,108,247,0.05)]
      pt-[100px]
    "
    >
      {/* SVG decorativos */}
      <div className="absolute right-0 top-14 z-[-1]">
        <Circles />
      </div>
      <div className="absolute left-0 bottom-24 z-[-1]">
        <Cubo />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap mx-[-16px]">
          {/* Columna 1 */}
          <div className="w-full md:w-1/2 lg:w-4/12 xl:w-5/12 px-8">
            <div className="mb-16 max-w-[360px]">
              <Link href="/" className="mb-8 flex flex-col items-center">
                <img
                  src="/images/logos/icon-background-transparent.png"
                  alt="logo"
                  className="mb-2 block h-14"
                />
                <span className="self-center text-2xl font-semibold text-white">
                  Connecting Points
                </span>
              </Link>
              <p className="mb-9 text-base font-medium leading-relaxed text-[rgba(149,156,177,1)]">
                Fique dentro de todas as nossas novidades siga nossas redes
                sociais
              </p>
              <div className="flex items-center space-x-6">
                <Link
                  href="https://www.facebook.com/GrupoConnectingPoints"
                  aria-label="facebook"
                  className="text-[#CED3F6] hover:text-[rgba(74,108,247,1)]"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/connecting.points"
                  aria-label="instagram"
                  className="text-[#CED3F6] hover:text-[rgba(74,108,247,1)]"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/grupo-connecting-points"
                  aria-label="linkedin"
                  className="text-[#CED3F6] hover:text-[rgba(74,108,247,1)]"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 px-8">
            <div className="mb-16">
              <h2 className="mb-10 text-xl font-bold text-white">Links</h2>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base font-medium text-[rgba(149,156,177,1)] hover:text-[rgba(74,108,247,1)]"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="mb-4 inline-block text-base font-medium text-[rgba(149,156,177,1)] hover:text-[rgba(74,108,247,1)]"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 px-8">
            <div className="mb-16">
              <h2 className="mb-10 text-xl font-bold text-white">Contato</h2>
              <ul>
                <li>
                  <Link
                    href="mailto:admin@connectingpoints.pt"
                    className="mb-4 inline-block text-base font-medium text-[rgba(149,156,177,1)] hover:text-[rgba(74,108,247,1)]"
                  >
                    admin@connectingpoints.pt
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+351924423249"
                    className="mb-4 inline-block text-base font-medium text-[rgba(149,156,177,1)] hover:text-[rgba(74,108,247,1)]"
                  >
                    +351 924 423 249
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 4 */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 px-8">
            <div className="mb-16">
              <h2 className="mb-10 text-xl font-bold text-white">
                Termos e Condições
              </h2>
              <ul>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="mb-4 inline-block text-base font-medium text-[rgba(149,156,177,1)] hover:text-[rgba(74,108,247,1)]"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.livroreclamacoes.pt/INICIO/"
                    className="mb-4 inline-block text-base font-medium text-[rgba(149,156,177,1)] hover:text-[rgba(74,108,247,1)]"
                    target="_blank"
                  >
                    Livro de reclamações
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-4">
          <p className="text-center text-base text-white">
            &copy; 2025 Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
