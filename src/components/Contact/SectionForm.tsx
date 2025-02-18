"use client"; 

import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export function ContactSection({t}: {t: any}) {
  return (
    <section className="w-full bg-[#0b113a] py-16">
      <div className="d-flex justify-center gap-2 flex-wrap mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor principal en 2 columnas (responsive) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 aos-init"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {/* Columna izquierda: Formulario */}
          <div className="bg-[#1d2144] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
              {t("contact.title")}
            </h2>
            <p className="text-[#A0AEC0] mb-8">
              {t("contact.p")}
            </p>

            <form className="space-y-6">
              {/* Campo: Seu Nome */}
              <div>
                <label className="block mb-1 text-white font-medium">
                  {t("contact.form.nameLabel")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.form.nameInput")}
                  className="
                    w-full p-3 rounded-md
                    bg-[#242b51] text-white placeholder-[#6B7280]
                    focus:outline-none 
                  "
                />
              </div>

              {/* Campo: Seu Email */}
              <div>
                <label className="block mb-1 text-white font-medium">
                  {t("contact.form.emailLabel")}
                </label>
                <input
                  type="email"
                  placeholder={t("contact.form.emailInput")}
                  className="
                    w-full p-3 rounded-md
                    bg-[#242b51] text-white placeholder-[#6B7280]
                    focus:outline-none 
                  "
                />
              </div>

              {/* Campo: Sua Mensagem */}
              <div>
                <label className="block mb-1 text-white font-medium">
                  {t("contact.form.messageLabel")}
                </label>
                <textarea
                  placeholder={t("contact.form.messageInput")}
                  rows={4}
                  className="
                    w-full p-3 rounded-md
                    bg-[#242b51] text-white placeholder-[#6B7280]
                    focus:outline-none 
                    resize-none
                    "
                />
              </div>

              {/* Botón de Enviar */}
              <button
                type="submit"
                className="
                  px-6 py-3 bg-[#4A6CF7] rounded-md
                  text-white font-semibold
                  hover:bg-opacity-90 transition-colors
                "
              >
                {t("contact.form.submitButton")}
              </button>
            </form>
          </div>

          {/* Columna derecha: Información de contacto */}
          <div
            className="bg-[#1d2144] p-8 rounded-lg max-h-[280px] aos-init"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {t("contact.contactInfo.title")}
            </h2>
            <p className="text-[#A0AEC0]">
              {t("contact.contactInfo.p")}
            </p>

            <ul className="mt-6 space-y-4 text-white">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-[#4A6CF7]" />
                <span>{ t("contact.contactInfo.number")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-[#4A6CF7]" />
                <span>{t("contact.contactInfo.email")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaClock className="text-[#4A6CF7]" />
                <span>{t("contact.contactInfo.hour")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
