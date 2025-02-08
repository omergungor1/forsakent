'use client';

import { useState, useEffect } from 'react';
import ImageGallery from '../../../components/image-gallery';
import { useLanguage } from "../../../../src/context/LanguageContext";
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
                    .eq('service_type', 'application')
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

    const categories = [
        {
            title: {
                tr: "Bitkisel Tasarım Uygulamaları",
                en: "Botanical Design Applications"
            },
            images: [
                "/image/bitkisel-tasarim-uygulamalari/img1.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img2.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img3.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img4.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img5.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img6.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img7.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img6.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img9.webp",
                "/image/bitkisel-tasarim-uygulamalari/img10.webp",
            ],
        },
        {
            title: {
                tr: "Çocuk Oyun Alanı Uygulamaları",
                en: "Children's Play Area Applications"
            },
            images: [
                "/image/cocuk-oyun-alanlari/img1.jpg",
                "/image/cocuk-oyun-alanlari/img2.jpg",
                "/image/cocuk-oyun-alanlari/img3.jpg",
                "/image/cocuk-oyun-alanlari/img5.jpg",
                "/image/cocuk-oyun-alanlari/img6.jpg",
            ],
        },
        {
            title: {
                tr: "Altyapı ve Drenaj Uygulamaları",
                en: "Infrastructure and Drainage Applications"
            },
            images: [
                "/image/altyapi-uygulamalari/img1.jpeg",
                "/image/altyapi-uygulamalari/img2.jpg",
                "/image/altyapi-uygulamalari/img3.jpg",
                "/image/altyapi-uygulamalari/img4.jpg",
                "/image/altyapi-uygulamalari/img5.jpg",
                "/image/altyapi-uygulamalari/img6.jpg",
                "/image/altyapi-uygulamalari/img9.jpg",
            ],
        },
        {
            title: {
                tr: "Peyzaj Donatı Elemanları",
                en: "Landscape Equipment Elements"
            },
            images: [
                "/image/donati-elemanlari/img1.jpg",
                "/image/donati-elemanlari/img2.jpg",
                "/image/donati-elemanlari/img3.jpg",
                "/image/donati-elemanlari/img4.jpg",
                "/image/donati-elemanlari/img5.jpg",
                "/image/donati-elemanlari/img6.jpg",
                "/image/donati-elemanlari/img7.png",
                "/image/donati-elemanlari/img8.jpeg",
                "/image/donati-elemanlari/img9.jpeg",
                "/image/donati-elemanlari/img10.jpg",
            ],
        },
        {
            title: {
                tr: "Peyzaj Sert Zemin Uygulamaları",
                en: "Landscape Hard Floor Applications"
            },
            images: [
                "/image/set-zemin-uygulama/img1.jpg",
                "/image/set-zemin-uygulama/img2.jpg",
                "/image/set-zemin-uygulama/img3.jpg",
                "/image/set-zemin-uygulama/img4.jpg",
                "/image/set-zemin-uygulama/img5.jpg",
                "/image/set-zemin-uygulama/img6.jpg",
                "/image/set-zemin-uygulama/img7.jpg",
                "/image/set-zemin-uygulama/img8.jpg",
                "/image/set-zemin-uygulama/img9.jpg",
                "/image/set-zemin-uygulama/img10.jpg",
            ],
        },
        {
            title: {
                tr: "Yüzme Havuzu ve Süs havuzları",
                en: "Swimming Pools and Ornamental Pools"
            },
            images: [
                "/image/yuzme-havuzu/img1.jpg",
                "/image/yuzme-havuzu/img2.jpg",
                "/image/yuzme-havuzu/img3.jpg",
                "/image/yuzme-havuzu/img4.jpg",
                "/image/yuzme-havuzu/img5.jpg",
                "/image/yuzme-havuzu/img6.jpg",
                "/image/yuzme-havuzu/img7.jpg",
                "/image/yuzme-havuzu/img8.jpg",
                "/image/yuzme-havuzu/img9.jpg",
                "/image/yuzme-havuzu/img10.jpg",
            ],
        },
    ];

    return (
        <div className='mt-4'>
            {/* Main Content */}
            <section className="container mx-auto px-8 py-10 lg:py-14">
                <div className="relative min-h-screen py-12">
                    {/* Hero Bölümü */}
                    <div className="relative w-full rounded-xl bg-cover bg-center h-80 md:h-96" style={{ backgroundImage: "url('/image/img1.jpg')" }}>
                        <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
                                {t(texts.home_page.services.content.application.title)}
                            </h1>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Peyzaj Uygulama Hizmetleri Açıklaması */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {t(texts.home_page.services.content.application.title2)}
                                </h2>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Alanlarınıza estetik ve fonksiyonellik kazandıran peyzaj uygulama hizmetlerimiz ile doğayla uyumlu, sürdürülebilir ve göz alıcı mekanlar oluşturuyoruz. Uzman ekibimizle birlikte en iyi malzeme ve teknikleri kullanarak, projelerinizi eksiksiz bir şekilde hayata geçiriyoruz.`
                                            : `We create sustainable and eye-catching spaces in harmony with nature with our landscaping services that bring aesthetics and functionality to your areas. Together with our expert team, we realize your projects completely by using the best materials and techniques.`
                                    }
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Yeşil alan düzenlemeleri, sert zemin uygulamaları, su öğeleri, aydınlatma sistemleri ve özel peyzaj tasarımları ile mekanlarınıza değer katıyoruz. Doğru planlama ve profesyonel uygulama ile yaşam alanlarınıza doğallık, estetik ve konfor getiriyoruz.`
                                            : `We add value to your spaces with green area arrangements, hard floor applications, water elements, lighting systems and special landscape designs. We bring naturalness, aesthetics and comfort to your living spaces with proper planning and professional implementation.`
                                    }
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {
                                        language === 'tr' ? `Projelerinizi başarılı bir şekilde tamamlamak için her aşamada titizlikle çalışıyor, yüksek kaliteli uygulamalar ile beklentilerinizi en üst seviyede karşılıyoruz.`
                                            : `We work meticulously at every stage to complete your projects successfully and meet your expectations at the highest level with high quality applications.`
                                    }
                                </p>
                            </div>

                            {/* Hizmet Detayları ve Faydaları */}
                            <div>
                                <ul className="mt-6 space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        🌿 <span className="ml-2">{language === 'tr' ? 'İklim ve alan koşullarına uygun bitkilendirme' : 'Planting suitable for climate and site conditions'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🏡 <span className="ml-2">{language === 'tr' ? 'Özel tasarlanmış sert zemin, yürüyüş yolları ve oturma alanları' : 'Specially designed hard surfaces, walkways and seating areas'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        💧 <span className="ml-2">{language === 'tr' ? 'Şelale, havuz ve diğer su öğeleri ile doğal dokunuşlar' : 'Natural touches with waterfalls, pools and other water elements'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        💡 <span className="ml-2">{language === 'tr' ? 'Modern aydınlatma sistemleri ile gece de estetik görünümler' : 'Aesthetic looks at night with modern lighting systems'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🏗️ <span className="ml-2">{language === 'tr' ? 'Drenaj ve sulama sistemleri ile uzun ömürlü peyzaj çözümleri' : 'Long-lasting landscape solutions with drainage and irrigation systems'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        🔨 <span className="ml-2">{language === 'tr' ? 'Anahtar teslim profesyonel uygulama hizmeti' : 'Turnkey professional application service'}</span>
                                    </li>
                                </ul>

                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    {
                                        language === 'tr' ? `Doğru peyzaj uygulamaları ile mekanlarınıza estetik, konfor ve doğallık katın. Uzman ekibimizle birlikte hayallerinizdeki alanları gerçeğe dönüştürüyoruz.`
                                            : `Add aesthetics, comfort and naturalness to your spaces with the right landscape applications. Together with our expert team, we make the spaces of your dreams come true.`
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery - Sadece resim varsa göster */}
                    <div className="space-y-12 mt-6 grid grid-cols-1 gap-6">
                        {!isLoading && data?.albums?.map(album => 
                            album.images?.length > 0 && (
                                <div key={album.id}>
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