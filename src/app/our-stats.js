"use client";

import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import StatsCard from "../components/stats-card";
import { useLanguage } from "../../src/context/LanguageContext";
import { supabase } from '../../src/lib/supabaseClient';
import { toast } from 'react-hot-toast';

export function OurStats() {
  const { texts, t, language } = useLanguage();
  const [statistics, setStatistics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const { data, error } = await supabase
          .from('statistics')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;
        setStatistics(data || []);
      } catch (error) {
        console.error('İstatistikler yüklenirken hata:', error);
        toast.error('İstatistikler yüklenirken bir hata oluştu!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatistics();
  }, []);

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
        {!isLoading && (
          <div className="grid grid-cols-2 gap-8 gap-x-28">
            {statistics.map((stat) => (
              <StatsCard
                key={stat.id}
                count={stat.count}
                title={language === 'tr' ? stat.title_tr : stat.title_en}
              />
            ))}
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>
    </section>
  );
}

export default OurStats;
