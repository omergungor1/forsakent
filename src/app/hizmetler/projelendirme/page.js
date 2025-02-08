"use client"

import { useState, useEffect } from 'react';
import { useLanguage } from "../../../../src/context/LanguageContext";
import ImageGallery from '../../../components/image-gallery';
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
                    .eq('service_type', 'project-3d')
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
                <div className="relative min-h-screen pt-12">
                    {/* Hero Bölümü */}
                    <div className="relative w-full rounded-xl bg-cover bg-center h-80 md:h-96" 
                         style={{ backgroundImage: "url('/image/img1.jpg')" }}>
                        <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
                                {t(texts.home_page.services.content.project_design.title)}
                            </h1>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Projelendirme & 3D Görselleştirme Açıklaması */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {t(texts.home_page.services.content.project_design.title2)}
                                </h2>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Profesyonel peyzaj projelendirme ve 3D görselleştirme hizmetlerimiz ile açık ve kapalı mekanlarınıza estetik ve fonksiyonellik kazandırıyoruz. Alanınızı en iyi şekilde değerlendirmek için yenilikçi tasarımlar ve sürdürülebilir çözümler sunuyoruz.`
                                            : `We bring aesthetics and functionality to your indoor and outdoor spaces with our professional landscape project design and 3D visualization services. We offer innovative designs and sustainable solutions to make the most of your space.`
                                    }

                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `3D görselleştirme sayesinde, projelerinizi hayata geçirmeden önce dijital ortamda detaylı bir önizleme sunuyoruz. Böylece, her detayı önceden planlayabilir, değişiklikleri projelendirme aşamasında yaparak zaman ve maliyetten tasarruf edebilirsiniz.`
                                            : `Thanks to 3D visualization, we offer a detailed preview of your projects in a digital environment before they are implemented. Thus, you can plan every detail in advance and save time and cost by making changes at the project design stage.`
                                    }
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Modern peyzaj tasarımı, bitki seçimi, yürüyüş yolları, su öğeleri, oturma alanları ve ışıklandırma gibi tüm detayları planlayarak, doğal ve konforlu mekanlar oluşturuyoruz.`
                                            : `We create natural and comfortable spaces by planning all details such as modern landscape design, plant selection, walkways, water elements, seating areas and lighting.`
                                    }
                                </p>
                            </div>

                            {/* Hizmet Detayları ve Faydaları */}
                            <div>
                                <ul className="mt-6 space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        🎨 <span className="ml-2">{language === 'tr' ? 'Gerçekçi 3D modelleme ile projenizi önceden deneyimleyin' : 'Experience your project in advance with realistic 3D modeling'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🏡 <span className="ml-2">{language === 'tr' ? 'Açık ve kapalı mekanlara özel peyzaj çözümleri' : 'Special landscape solutions for indoor and outdoor spaces'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🌿 <span className="ml-2">{language === 'tr' ? 'İklime ve mekan özelliklerine uygun bitki ve malzeme seçimi' : 'Selection of plants and materials suitable for climate and space characteristics'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        💡 <span className="ml-2">{language === 'tr' ? 'Aydınlatma, su öğeleri ve dekoratif tasarımlarla estetik dokunuşlar' : 'Aesthetic touches with lighting, water elements and decorative designs'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ⏳ <span className="ml-2">{language === 'tr' ? 'Zaman ve maliyet açısından en verimli çözümler' : 'The most time and cost efficient solutions'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🛠️ <span className="ml-2">{language === 'tr' ? 'Uygulama aşamasında profesyonel destek ve proje takibi' : 'Professional support and project follow-up during the implementation phase'}</span>
                                    </li>
                                </ul>

                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    {
                                        language === 'tr' ? `Hayal ettiğiniz peyzaj tasarımını gerçeğe dönüştürmek için  projelendirme ve 3D görselleştirme hizmetlerimizden yararlanın. Doğru planlama ile  estetik, işlevsellik ve doğallığı bir araya getiriyoruz.`
                                            : `Take advantage of our project design and 3D visualization services to turn your dream landscape design into reality. We bring aesthetics, functionality and naturalness together with the right planning.`
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Image Gallery - Sadece resim varsa göster */}
                        {!isLoading && data?.albums?.map(album => 
                            album.images?.length > 0 && (
                                <div key={album.id} className="space-y-12 mt-6 md:mt-12">
                                    <ImageGallery 
                                        Images={album.images.map(img => img.url)}
                                        priority={true}
                                        title={album.name}
                                    />
                                </div>
                            )
                        )}

                        {/* Yükleme durumu */}
                        {isLoading && (
                            <div className="flex justify-center mt-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Page;
