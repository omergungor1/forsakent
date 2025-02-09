"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { useLanguage } from "../../src/context/LanguageContext";
import { supabase } from '../../src/lib/supabaseClient';
import { toast } from 'react-hot-toast';

export function Testimonials() {
  const { texts, t } = useLanguage();
  const [references, setReferences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const { data, error } = await supabase
          .from('reference')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data) {
          setReferences(data);
        }
      } catch (error) {
        console.error('Referanslar yüklenirken hata:', error);
        toast.error('Referanslar yüklenirken bir hata oluştu!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferences();
  }, []);

  return (
    <section className="py-8 px-4 lg:px-8 lg:py-20 overflow-hidden">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 lg:mb-8">
          {t(texts.home_page.reffereces.title)}
        </Typography>

        {!isLoading && references.length > 0 && (
          <div className="relative">
            {/* İlk slider */}
            <div className="flex animate-infinite-scroll">
              {references.map((ref) => (
                <div key={ref.id} className="flex-shrink-0 mx-2 md:mx-8">
                  {ref.image?.url && (
                    <div className="relative w-24 h-12 md:w-40 md:h-20">
                      <Image
                        fill
                        src={ref.image.url}
                        alt={ref.name}
                        sizes="(max-width: 768px) 96px, 160px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  )}
                </div>
              ))}
              {/* Sonsuz scroll için tekrar */}
              {references.map((ref) => (
                <div key={`duplicate-${ref.id}`} className="flex-shrink-0 mx-2 md:mx-8">
                  {ref.image?.url && (
                    <div className="relative w-24 h-12 md:w-40 md:h-20">
                      <Image
                        fill
                        src={ref.image.url}
                        alt={ref.name}
                        sizes="(max-width: 768px) 96px, 160px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* İkinci slider (ters yönde) */}
            <div className="flex animate-infinite-scroll-reverse mt-4 md:mt-8">
              {references.slice().reverse().map((ref) => (
                <div key={ref.id} className="flex-shrink-0 mx-2 md:mx-8">
                  {ref.image?.url && (
                    <div className="relative w-24 h-12 md:w-40 md:h-20">
                      <Image
                        fill
                        src={ref.image.url}
                        alt={ref.name}
                        sizes="(max-width: 768px) 96px, 160px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  )}
                </div>
              ))}
              {/* Sonsuz scroll için tekrar */}
              {references.slice().reverse().map((ref) => (
                <div key={`duplicate-${ref.id}`} className="flex-shrink-0 mx-2 md:mx-8">
                  {ref.image?.url && (
                    <div className="relative w-24 h-12 md:w-40 md:h-20">
                      <Image
                        fill
                        src={ref.image.url}
                        alt={ref.name}
                        sizes="(max-width: 768px) 96px, 160px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
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

export default Testimonials;
