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
                    .eq('service_type', 'consulting')
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
                    <div className="relative w-full rounded-xl bg-cover bg-center h-80 md:h-96" style={{ backgroundImage: "url('/image/img1.jpg')" }}>
                        <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">{t(texts.home_page.services.content.consulting.title)}</h1>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Danışmanlık Hizmetleri Açıklama Alanı */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {t(texts.home_page.services.content.consulting.title2)}
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Forsa Peyzaj olarak, yeşil alanlarınızı en verimli şekilde yönetebilmeniz için uzman danışmanlık hizmetleri sunuyoruz.
                                    Peyzaj tasarımından bakım süreçlerine kadar geniş kapsamlı rehberlik sağlıyoruz.`
                                            : `As Forsa Landscape, we offer expert consulting services to help you manage your green spaces most efficiently.
                                        We provide comprehensive guidance from landscape design to maintenance processes.`
                                    }
                                </p>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Profesyonel ekibimizle, projelerinizin her aşamasında size özel çözümler üreterek sürdürülebilir, estetik ve işlevsel peyzaj alanları oluşturmanıza yardımcı oluyoruz.`
                                            : `With our professional team, we help you create sustainable, aesthetic and functional landscape areas by producing customized solutions at every stage of your projects.`
                                    }
                                </p>
                            </div>
                            {/* Danışmanlık Hizmetleri Listesi */}
                            <div>
                                <ul className="mt-6 space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Peyzaj tasarım danışmanlığı' : 'Landscape design consultancy'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Bitki seçimi ve ekim planlaması' : 'Plant selection and planting planning'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Sürdürülebilir peyzaj çözümleri' : 'Sustainable landscape solutions'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Toprak analizi ve iyileştirme stratejileri' : 'Soil analysis and remediation strategies'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Otomatik sulama sistemleri planlaması' : 'Planning of automatic irrigation systems'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">{language === 'tr' ? 'Bütçeye uygun peyzaj yönetimi' : 'Landscape management on a budget'}</span>
                                    </li>
                                </ul>
                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    {
                                        language === 'tr' ? `Peyzaj alanlarınızın daha verimli yönetilmesi ve uzun vadeli sürdürülebilirliğini sağlamak için danışmanlık hizmetlerimizden faydalanabilirsiniz.`
                                            : `You can benefit from our consultancy services to ensure more efficient management and long-term sustainability of your landscape areas.`
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
