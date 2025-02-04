'use client';
import ImageGallery from '../../../components/image-gallery';


function Page() {

    const Images = [
        "/image/ic-mekan-bitkilendirme/img1.jpg",
        "/image/ic-mekan-bitkilendirme/img2.jpg",
        "/image/ic-mekan-bitkilendirme/img3.jpg",
        "/image/ic-mekan-bitkilendirme/img5.jpg",
        "/image/ic-mekan-bitkilendirme/img6.jpg",
        "/image/ic-mekan-bitkilendirme/img7.jpg",
        "/image/ic-mekan-bitkilendirme/img8.jpg",
        "/image/ic-mekan-bitkilendirme/img9.jpg",
        "/image/ic-mekan-bitkilendirme/img10.jpg",
    ]




    return (
        <div className='mt-4 '>
            {/* Main Content */}
            <section className="container mx-auto px-8 py-10 lg:py-14">
                <div className="relative min-h-screen py-12">
                    {/* Hero Bölümü */}
                    <div className="relative w-full rounded-xl bg-cover bg-center h-80 md:h-96" style={{ backgroundImage: "url('/image/img1.jpg')" }}>
                        <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">İç Mekan Bitkilendirme</h1>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* İç Mekan Bitkilendirme Açıklaması */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    İç Mekan Bitkilendirme ile Doğayı Evinize Taşıyın
                                </h2>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    İç mekan bitkilendirme çözümlerimiz ile yaşam alanlarınıza doğanın huzurunu ve estetiğini katıyoruz.
                                    Mekanınıza uygun bitki türlerini seçerek, estetik ve fonksiyonellik açısından en iyi çözümleri sunuyoruz.
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Ofislerden otellere, restoranlardan alışveriş merkezlerine kadar her türlü iç mekanda, oksijen seviyesini artıran,
                                    stresi azaltan ve sağlıklı bir atmosfer oluşturan yeşil alanlar tasarlıyoruz.
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Bitki bakımı konusunda profesyonel destek alarak, iç mekan bitkilerinizin her zaman canlı ve sağlıklı kalmasını sağlayabilirsiniz.
                                </p>
                            </div>

                            {/* Hizmet Detayları ve Faydaları */}
                            <div>
                                <ul className="mt-6 space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        🌿 <span className="ml-2">İç mekanınıza özel bitki seçimi ve konumlandırma</span>
                                    </li>
                                    <li className="flex items-start">
                                        🌱 <span className="ml-2">Hava kalitesini artıran bitkiler ile sağlıklı ortamlar</span>
                                    </li>
                                    <li className="flex items-start">
                                        🏡 <span className="ml-2">Minimalist ve modern tasarımlara uygun yeşil çözümler</span>
                                    </li>
                                    <li className="flex items-start">
                                        💧 <span className="ml-2">Otomatik sulama sistemleri ile zahmetsiz bakım</span>
                                    </li>
                                    <li className="flex items-start">
                                        🌞 <span className="ml-2">Işık ve nem koşullarına en uygun bitki seçimleri</span>
                                    </li>
                                    <li className="flex items-start">
                                        🛠️ <span className="ml-2">Periyodik bakım ve yenileme hizmetleri</span>
                                    </li>
                                </ul>

                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    Yaşam alanlarınıza doğal bir dokunuş katmak için iç mekan bitkilendirme hizmetlerimizden faydalanabilirsiniz.
                                    Doğru bitkiler ve profesyonel bakımla mekanlarınıza <strong>sağlık, estetik ve huzur</strong> katıyoruz.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-12 mt-6 md:mt-12">
                            <ImageGallery Images={Images} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page
