// pagina de erro 404
"use client";

import { Svg404 } from "@/components/404/404";
import { Svg4x4 } from "@/components/404/4x4";
import { useI18n } from "@/lib/useTranslations";
import Link from "next/link";

export default function NotFound() {
  const { t } = useI18n();
  const title = t("custom404.title");
  const description = t("custom404.p");
  const linkText = t("custom404.link");

  if (typeof title !== 'string' || typeof description !== 'string' || typeof linkText !== 'string') {
    console.error("Translation keys must return strings.");
    return null;
  }

  return (
    <div className="relative bg-[rgb(9,14,52)] w-full">
      <div className="absolute right-0 top-0 ">
        <Svg4x4 />
      </div>
      <div className="absolute left-0 bottom-0">
        <Svg4x4 />
      </div>
      <div className="flex flex-col items-center justify-center h-screen max-w-[500px] p-5 mx-auto text-center gap-2">
        <Svg404 />
        <h1 className="text-4xl font-bold text-zinc-100">
          {title}
        </h1>
        <p className="text-lg text-zinc-400">{description}</p>
        <Link
          className="text-md font-semibold rounded-md py-3 px-4 bg-[rgb(74,108,247)] text-zinc-50 cursor-pointer  hover:opacity-80"
          href="/"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
