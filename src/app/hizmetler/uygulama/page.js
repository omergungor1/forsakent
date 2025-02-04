'use client';

import ImageGallery from '../../../components/image-gallery';

function page() {
    const categories = [
        {
            title: "Bitkisel Tasarım Uygulamaları",
            images: [
                "/image/bitkisel-tasarim-uygulamalari/img1.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img2.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img3.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img4.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img5.jpg",
                "/image/bitkisel-tasarim-uygulamalari/img6.jpg",
            ],
        },
        {
            title: "Çocuk Oyun Alanı Uygulamaları",
            images: [
                "/image/cocuk-oyun-alanlari/img1.jpg",
                "/image/cocuk-oyun-alanlari/img2.jpg",
                "/image/cocuk-oyun-alanlari/img3.jpg",
                "/image/cocuk-oyun-alanlari/img4.jpg",
                "/image/cocuk-oyun-alanlari/img5.jpg",
                "/image/cocuk-oyun-alanlari/img6.jpg",
            ],
        },
        {
            title: "Bitkilendirme Uygulamaları",
            images: ["/image/ic-mekan-bitkilendirme/img1.jpg",
                "/image/ic-mekan-bitkilendirme/img2.jpg",
                "/image/ic-mekan-bitkilendirme/img3.jpg",
                "/image/ic-mekan-bitkilendirme/img5.jpg",
                "/image/ic-mekan-bitkilendirme/img6.jpg",
                "/image/ic-mekan-bitkilendirme/img7.jpg",
                "/image/ic-mekan-bitkilendirme/img8.jpg",
                "/image/ic-mekan-bitkilendirme/img9.jpg",
                "/image/ic-mekan-bitkilendirme/img10.jpg",],
        },
        {
            title: "Altyapı ve Drenaj Uygulamaları",
            images: [
                "/image/altyapi-uygulamalari/img1.jpeg",
                "/image/altyapi-uygulamalari/img2.jpg",
                "/image/altyapi-uygulamalari/img3.jpg",
                "/image/altyapi-uygulamalari/img4.jpg",
                "/image/altyapi-uygulamalari/img5.jpg",
                "/image/altyapi-uygulamalari/img6.jpg",
                "/image/altyapi-uygulamalari/img7.jpg",
                "/image/altyapi-uygulamalari/img8.jpg",
                "/image/altyapi-uygulamalari/img9.jpg",
            ],
        },
        {
            title: "Bakım Hizmetleri",
            images: [
                "/image/bakim-hizmetleri/img1.jpg",
                "/image/bakim-hizmetleri/img2.jpg",
                "/image/bakim-hizmetleri/img3.jpg",
                "/image/bakim-hizmetleri/img4.jpg",
                "/image/bakim-hizmetleri/img5.jpg",
                "/image/bakim-hizmetleri/img6.jpg",
                "/image/bakim-hizmetleri/img7.jpg",
                "/image/bakim-hizmetleri/img8.jpg",
                "/image/bakim-hizmetleri/img9.jpg",
                "/image/bakim-hizmetleri/img10.jpg",
                "/image/bakim-hizmetleri/img11.jpg",
                "/image/bakim-hizmetleri/img12.jpg",
            ],
        },
        {
            title: "Peyzaj Donatı Elemanları",
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
            title: "Peyzaj Sert Zemin Uygulamaları",
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
            title: "Yüzme Havuzu ve Süs havuzları",
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
        <div className='mt-4 '>
            {/* Main Content */}
            <section className="container mx-auto px-8 py-10 lg:py-14">
                <div className="relative min-h-screen py-12">
                    {/* Hero Bölümü */}
                    <div className="relative w-full rounded-xl bg-cover bg-center h-80 md:h-96" style={{ backgroundImage: "url('/image/img1.jpg')" }}>
                        <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Uygulama</h1>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Peyzaj Uygulama Hizmetleri Açıklaması */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    Profesyonel Peyzaj Uygulama Hizmetleri ile Mekanlarınıza Hayat Verin
                                </h2>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Alanlarınıza estetik ve fonksiyonellik kazandıran peyzaj uygulama hizmetlerimiz ile doğayla uyumlu, sürdürülebilir ve göz alıcı mekanlar oluşturuyoruz.
                                    Uzman ekibimizle birlikte en iyi malzeme ve teknikleri kullanarak, projelerinizi eksiksiz bir şekilde hayata geçiriyoruz.
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Yeşil alan düzenlemeleri, sert zemin uygulamaları, su öğeleri, aydınlatma sistemleri ve özel peyzaj tasarımları ile mekanlarınıza değer katıyoruz.
                                    Doğru planlama ve profesyonel uygulama ile yaşam alanlarınıza <strong>doğallık, estetik ve konfor</strong> getiriyoruz.
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Projelerinizi başarılı bir şekilde tamamlamak için her aşamada titizlikle çalışıyor, yüksek kaliteli uygulamalar ile beklentilerinizi en üst seviyede karşılıyoruz.
                                </p>
                            </div>

                            {/* Hizmet Detayları ve Faydaları */}
                            <div>
                                <ul className="mt-6 space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        🌿 <span className="ml-2">İklim ve alan koşullarına uygun bitkilendirme</span>
                                    </li>
                                    <li className="flex items-start">
                                        🏡 <span className="ml-2">Özel tasarlanmış sert zemin, yürüyüş yolları ve oturma alanları</span>
                                    </li>
                                    <li className="flex items-start">
                                        💧 <span className="ml-2">Şelale, havuz ve diğer su öğeleri ile doğal dokunuşlar</span>
                                    </li>
                                    <li className="flex items-start">
                                        💡 <span className="ml-2">Modern aydınlatma sistemleri ile gece de estetik görünümler</span>
                                    </li>
                                    <li className="flex items-start">
                                        🏗️ <span className="ml-2">Drenaj ve sulama sistemleri ile uzun ömürlü peyzaj çözümleri</span>
                                    </li>
                                    <li className="flex items-start">
                                        🔨 <span className="ml-2">Anahtar teslim profesyonel uygulama hizmeti</span>
                                    </li>
                                </ul>

                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    Doğru peyzaj uygulamaları ile <strong>mekanlarınıza estetik, konfor ve doğallık</strong> katın.
                                    Uzman ekibimizle birlikte hayallerinizdeki alanları gerçeğe dönüştürüyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-12 mt-6 grid grid-cols-1 gap-6">
                        {categories.map((category, index) => (
                            <ImageGallery Images={category.images} key={index} title={category.title} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page