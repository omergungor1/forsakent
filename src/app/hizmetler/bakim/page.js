'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from "../../../../src/context/LanguageContext";
import ImageGallery from "../../../components/image-gallery";
import { supabase } from '../../../../src/lib/supabaseClient';
import { toast } from 'react-hot-toast';

function Page() {
    const { texts, t, language } = useLanguage();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const { data, error } = await supabase
                    .from('services')
                    .select('albums')
                    .eq('service_type', 'maintenance')
                    .single();

                if (error) throw error;

                if (data) {
                    setData(data);
                }
            } catch (error) {
                console.error('Resimler yüklenirken hata:', error);
                toast.error('Resimler yüklenirken bir hata oluştu!');
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className='mt-4'>
            {/* Main Content */}
            <section className="container mx-auto px-8 py-10 lg:py-14">
                <div className="relative min-h-screen py-12">
                    {/* Hero Bölümü */}
                    <div className="relative w-full rounded-xl bg-cover bg-center h-80 md:h-96" style={{ backgroundImage: "url('/image/img1.jpg')" }}>
                        <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">{t(texts.home_page.services.content.care.title)}</h1>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Bakım Hizmetleri Alanı */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {t(texts.home_page.services.content.care.title2)}
                                </h2>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Peyzaj alanlarınızın her zaman sağlıklı, estetik ve düzenli kalmasını sağlamak için kapsamlı bakım hizmetleri sunuyoruz. Alanınızın gereksinimlerini analiz ederek, ihtiyaca yönelik düzenli bakım programları oluşturuyoruz.`
                                            : `We offer comprehensive maintenance services to ensure that your landscapes always remain healthy, aesthetic and organized. By analyzing the requirements of your area, we create regular maintenance programs tailored to your needs.`
                                    }
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Uzman ekibimiz, bitkilerin gelişimini desteklemek, hastalıklara karşı önlem almak ve çevre dostu bakım uygulamaları ile peyzaj alanlarınızı her zaman en iyi durumda tutmak için çalışmaktadır.`
                                            : `Our team of experts works to support the development of plants, take precautions against diseases and keep your landscaping areas in top condition with environmentally friendly maintenance practices.`
                                    }
                                </p>
                            </div>
                            <div>
                                {/* Hizmet Listesi */}
                                <ul className="mt-6 space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Çim biçme ve çim alanlarının bakımı' : 'Mowing and maintenance of lawns'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Ağaç budama ve zararlı kontrolü' : 'Tree pruning and pest control'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Bitki gübreleme ve toprak iyileştirme' : 'Plant fertilization and soil improvement'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Otomatik sulama sistemlerinin bakımı' : 'Maintenance of automatic irrigation systems'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Mevsimsel bitki değişimi ve yenileme' : 'Seasonal plant change and renewal'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Haşere ve hastalık kontrolü' : 'Pest and disease control'}</span>
                                    </li>
                                </ul>

                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    {
                                        language === 'tr' ? `Bitkilerinizin sağlıklı gelişimini sürdürmesi ve peyzaj alanlarınızın her zaman düzenli ve canlı kalması için periyodik bakım hizmetlerimizden faydalanabilirsiniz.`
                                            : `You can benefit from our periodic maintenance services to ensure that your plants continue their healthy growth and that your landscaping areas are always organized and vibrant.`
                                    }
                                </p>
                            </div>
                        </div>

                    {/* Image Gallery */}
                    {!isLoading && data?.albums && data.albums.map((album) => (
                        <div key={album.id} className="space-y-12 mt-6 md:mt-12">
                            <ImageGallery 
                                Images={album.images.map(img => img.url)}
                                priority={true}
                                title_tr={album.title_tr}
                                title_en={album.title_en}
                                desc_tr={album.desc_tr}
                                desc_en={album.desc_en}
                            />
                        </div>
                    ))}

                    {/* Yükleme durumu */}
                    {isLoading && (
                        <div className="flex justify-center mt-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                        </div>
                    )}

                    {/* Resim bulunamadı durumu */}
                    {!isLoading && (!data?.albums || data.albums.length === 0) && (
                        <div className="text-center text-gray-500 mt-12">
                            {language === "tr" ? "Henüz albüm eklenmemiş." : "No albums added yet."}
                        </div>
                    )}
                    </div>
                    </div>
            </section>
        </div>
    );
}

export default Page;
