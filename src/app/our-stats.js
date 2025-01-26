"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "../components/stats-card";

const STATS = [
  {
    count: "200+",
    title: "Tamamlanan Proje",
  },
  {
    count: "100+",
    title: "Mutlu Müşteri",
  },
  {
    count: "50",
    title: "Tasarımı Yapılan Bahçe",
  },
  {
    count: "10+",
    title: "Yıllık Deneyim",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h4" color="green" className="mb-6 font-medium">
          İstatistikler
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
          Peyzaj Çalışmalarımız
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
        >
          Yılların tecrübesiyle, yenilikçi peyzaj tasarımlarımız ve profesyonel ekiplerimizle mekanlarınızı güzelleştirmek için buradayız.
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
