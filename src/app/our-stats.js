"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "../components/stats-card";
import { useLanguage } from "../../src/context/LanguageContext";

export function OurStats() {
  const { texts, t } = useLanguage();

  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h4" color="green" className="mb-6 font-medium">
          {t(texts.home_page.our_stats.title)}
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
          {t(texts.home_page.our_stats.title2)}
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
        >
          {t(texts.home_page.our_stats.content)}
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {
            texts.home_page.our_stats.data.map((props, key) => (
              <StatsCard key={key} {...props} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default OurStats;
