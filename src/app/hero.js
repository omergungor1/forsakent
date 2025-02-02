"use client";

import { Typography } from "@material-tailwind/react";
import { useLanguage } from "../../src/context/LanguageContext";

function Hero() {
  const { texts, t } = useLanguage();
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/image1.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2">
            {t(texts.home_page.text1)}
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            {t(texts.home_page.text2)}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl">
            {t(texts.home_page.text3)}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
