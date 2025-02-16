// components/ToolsSection.tsx

export function ToolsSection() {
  return (
    <section className="relative py-20 bg-[rgba(9,14,52,1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ferramentas Utilizadas
          </h2>
          <p className="text-lg text-[rgba(149,156,177,1)]">
            O conhecimento é uma ferramenta muito poderosa que alimenta a
            inovação. Estamos prontos para ajudar a transformar o seu negócio.
          </p>
        </div>

        {/* Grilla de herramientas */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* 1) Backend */}
          <div className="text-center">
            <h3 className="mb-6 flex justify-center text-xl font-semibold text-white">
              Backend
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <div>
                <img
                  src="/images/tools/laravel.png"
                  alt="Laravel"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  Laravel
                </p>
              </div>
              <div>
                <img
                  src="/images/tools/mysql.png"
                  alt="MySQL"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  MySQL
                </p>
              </div>
            </div>
          </div>

          {/* 2) Frontend */}
          <div className="text-center">
            <h3 className="mb-6 flex justify-center text-xl font-semibold text-white">
              Frontend
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <div>
                <img
                  src="/images/tools/bootstrap.png"
                  alt="Bootstrap"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  Bootstrap
                </p>
              </div>
              <div>
                <img
                  src="/images/tools/tailwindcss.png"
                  alt="Tailwind CSS"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  Tailwind CSS
                </p>
              </div>
              <div>
                <img
                  src="/images/tools/react.png"
                  alt="React"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  React
                </p>
              </div>
            </div>
          </div>

          {/* 3) Mobile */}
          <div className="text-center">
            <h3 className="mb-6 flex justify-center text-xl font-semibold text-white">
              Mobile
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <div>
                <img
                  src="/images/tools/react.png"
                  alt="React Native"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  React Native
                </p>
              </div>
              <div>
                <img
                  src="/images/tools/kotlin.png"
                  alt="Kotlin"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  Kotlin
                </p>
              </div>
            </div>
          </div>

          {/* 4) Design */}
          <div className="text-center">
            <h3 className="mb-6 flex justify-center text-xl font-semibold text-white">
              Design
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <div>
                <img
                  src="/images/tools/figma.png"
                  alt="Figma"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  Figma
                </p>
              </div>
              <div>
                <img
                  src="/images/tools/adobe.png"
                  alt="Adobe"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  Adobe
                </p>
              </div>
            </div>
          </div>

          {/* 5) Alojamento */}
          <div className="text-center">
            <h3 className="mb-6 flex justify-center text-xl font-semibold text-white">
              Alojamento
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <div>
                <img
                  src="/images/tools/ptisp.png"
                  alt="PTisp"
                  className="mx-auto h-12"
                />
                <p className="mt-2 text-base text-[rgba(149,156,177,1)]">
                  PTisp
                </p>
              </div>
            </div>
          </div>

          {/* 6) Mensaje final */}
          <div
            className="
                flex items-center justify-center
                text-center
              "
          >
            <h3 className="text-xl font-semibold text-white">
              Conhecimento que transforma ideias em inovação.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
