'use client';

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../src/context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    // <div className="absolute top-4 right-4 flex items-center space-x-2">
    <div>
      <button
        onClick={toggleLanguage}
        className="flex items-center dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition border-2 border-gray-300 hover:border-gray-500">
        <Image
          src={`/flags/${language === "tr" ? "tr.png" : "gb.png"}`}
          alt={language === "tr" ? "Türkçe" : "English"}
          width={24}
          height={24} />
      </button>
    </div>
  );
}