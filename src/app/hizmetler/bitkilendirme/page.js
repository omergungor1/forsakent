'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from "../../../../src/context/LanguageContext";
import ImageGallery from '../../../components/image-gallery';
import { supabase } from '../../../../src/lib/supabaseClient';
import { toast } from 'react-hot-toast';

function Page() {
    const { texts, t, language } = useLanguage();
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const { data, error } = await supabase
                    .from('services')
                    .select('albums')
                    .eq('service_type', 'indoor-planting')  // service_type'ı kontrol edin
                    .single();

                if (error) throw error;

                if (data?.albums) {
                    // Tüm albümlerdeki resimleri düzleştirip tek bir array'e çeviriyoruz
                    const allImages = data.albums.reduce((acc, album) => {
                        return [...acc, ...(album.images || [])];
                    }, []);
                    
                    // Resimlerin URL'lerini alıyoruz
                    setImages(allImages.map(img => img.url));
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
                            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">{t(texts.home_page.services.content.planting.title)}</h1>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* İç Mekan Bitkilendirme Açıklaması */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {t(texts.home_page.services.content.planting.title2)}
                                </h2>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `İç mekan bitkilendirme çözümlerimiz ile yaşam alanlarınıza doğanın huzurunu ve estetiğini katıyoruz. Mekanınıza uygun bitki türlerini seçerek, estetik ve fonksiyonellik açısından en iyi çözümleri sunuyoruz.`
                                            : `We add the peace and aesthetics of nature to your living spaces with our indoor planting solutions. We offer the best solutions in terms of aesthetics and functionality by selecting the appropriate plant species for your space.`
                                    }
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Ofislerden otellere, restoranlardan alışveriş merkezlerine kadar her türlü iç mekanda, oksijen seviyesini artıran, stresi azaltan ve sağlıklı bir atmosfer oluşturan yeşil alanlar tasarlıyoruz.`
                                            : `From offices to hotels, restaurants to shopping centers, we design green spaces that increase oxygen levels, reduce stress and create a healthy atmosphere.`
                                    }
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Bitki bakımı konusunda profesyonel destek alarak, iç mekan bitkilerinizin her zaman canlı ve sağlıklı kalmasını sağlayabilirsiniz.`
                                            : `By getting professional support in plant care, you can ensure that your indoor plants are always alive and healthy.`
                                    }
                                </p>
                            </div>

                            {/* Hizmet Detayları ve Faydaları */}
                            <div>
                                <ul className="mt-6 space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        🌿 <span className="ml-2">{language === 'tr' ? 'İç mekanınıza özel bitki seçimi ve konumlandırma' : 'Plant selection and positioning specific to your interior'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🌱 <span className="ml-2">{language === 'tr' ? 'Hava kalitesini artıran bitkiler ile sağlıklı ortamlar' : 'Healthy environments with plants that improve air quality'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🏡 <span className="ml-2">{language === 'tr' ? 'Minimalist ve modern tasarımlara uygun yeşil çözümler' : 'Green solutions for minimalist and modern designs'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        💧 <span className="ml-2">{language === 'tr' ? 'Otomatik sulama sistemleri ile zahmetsiz bakım' : 'Effortless maintenance with automatic irrigation systems'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🌞 <span className="ml-2">{language === 'tr' ? 'Işık ve nem koşullarına en uygun bitki seçimleri' : 'Plant selections best suited to light and humidity conditions'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🛠️ <span className="ml-2">{language === 'tr' ? 'Periyodik bakım ve yenileme hizmetleri' : 'Periodic maintenance and renewal services'}</span>
                                    </li>
                                </ul>

                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    {
                                        language === 'tr' ? `Yaşam alanlarınıza doğal bir dokunuş katmak için iç mekan bitkilendirme hizmetlerimizden faydalanabilirsiniz. Doğru bitkiler ve profesyonel bakımla mekanlarınıza sağlık, estetik ve huzur katıyoruz.`
                                            : `You can benefit from our indoor planting services to add a natural touch to your living spaces. With the right plants and professional care, we add health, aesthetics and peace to your spaces.`
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
                                    title={album.name}
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
    )
}

export default Page
