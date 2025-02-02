'use client';

import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function page() {

    const Images = [
        "/image/img1.jpg",
        "/image/img2.jpg",
        "/image/img3.jpg",
        "/image/img5.jpg",
        "/image/img6.jpg",
        "/image/img7.jpg",
    ]

    return (
        <div className='mt-4 '>
            {/* Main Content */}
            <section className="container mx-auto px-8 py-10 lg:py-14">
                <div className="relative min-h-screen py-12">
                    {/* Hero Bölümü */}
                    <div className="relative w-full rounded-xl bg-cover bg-center h-80 md:h-96" style={{ backgroundImage: "url('/image/img1.jpg')" }}>
                        <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Projelendirme & 3D Görselleştirme</h1>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-12">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Projelendirme & 3D Görselleştirme Açıklaması */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    Peyzaj Projelendirme ve 3D Görselleştirme ile Hayalinizdeki Mekanı Yaratın
                                </h2>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Profesyonel peyzaj projelendirme ve 3D görselleştirme hizmetlerimiz ile açık ve kapalı mekanlarınıza estetik ve fonksiyonellik kazandırıyoruz.
                                    Alanınızı en iyi şekilde değerlendirmek için yenilikçi tasarımlar ve sürdürülebilir çözümler sunuyoruz.
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    3D görselleştirme sayesinde, projelerinizi hayata geçirmeden önce dijital ortamda detaylı bir önizleme sunuyoruz.
                                    Böylece, her detayı önceden planlayabilir, değişiklikleri projelendirme aşamasında yaparak zaman ve maliyetten tasarruf edebilirsiniz.
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Modern peyzaj tasarımı, bitki seçimi, yürüyüş yolları, su öğeleri, oturma alanları ve ışıklandırma gibi tüm detayları planlayarak,
                                    doğal ve konforlu mekanlar oluşturuyoruz.
                                </p>
                            </div>

                            {/* Hizmet Detayları ve Faydaları */}
                            <div>
                                <ul className="mt-6 space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        🎨 <span className="ml-2">Gerçekçi 3D modelleme ile projenizi önceden deneyimleyin</span>
                                    </li>
                                    <li className="flex items-start">
                                        🏡 <span className="ml-2">Açık ve kapalı mekanlara özel peyzaj çözümleri</span>
                                    </li>
                                    <li className="flex items-start">
                                        🌿 <span className="ml-2">İklime ve mekan özelliklerine uygun bitki ve malzeme seçimi</span>
                                    </li>
                                    <li className="flex items-start">
                                        💡 <span className="ml-2">Aydınlatma, su öğeleri ve dekoratif tasarımlarla estetik dokunuşlar</span>
                                    </li>
                                    <li className="flex items-start">
                                        ⏳ <span className="ml-2">Zaman ve maliyet açısından en verimli çözümler</span>
                                    </li>
                                    <li className="flex items-start">
                                        🛠️ <span className="ml-2">Uygulama aşamasında profesyonel destek ve proje takibi</span>
                                    </li>
                                </ul>

                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    Hayal ettiğiniz peyzaj tasarımını gerçeğe dönüştürmek için <strong>projelendirme ve 3D görselleştirme</strong> hizmetlerimizden yararlanın.
                                    Doğru planlama ile <strong>estetik, işlevsellik ve doğallığı</strong> bir araya getiriyoruz.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/**Image gallery */}
                    <PhotoProvider>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                            {Images.map((image, index) => (
                                <PhotoView key={index} src={image}>
                                    <Image
                                        src={image}
                                        width={640}
                                        height={480}
                                        alt={`Project Image ${index + 1}`}
                                        className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                    />
                                </PhotoView>
                            ))}
                        </div>
                    </PhotoProvider>
                </div>
            </section>
        </div>
    )
}

export default page
