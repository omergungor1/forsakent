'use client';

import Image from "next/image";
import { useLanguage } from "../../src/context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <button
        onClick={toggleLanguage}
        className="flex items-center dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition border-2 border-gray-300 hover:border-gray-500">
        <Image
          src={`/flags/${language === "tr" ? "gb.png" : "tr.png"}`}
          alt={language === "tr" ? "English" : "Türkçe"}
          width={24}
          height={24} />
      </button>
    </div>
  );
}