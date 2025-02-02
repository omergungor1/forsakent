'use client';

import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

function page() {

    const Images = [
        "/image/img1.jpg",
        "/image/img2.jpg",
        "/image/img3.jpg",
        "/image/img5.jpg",
        "/image/img6.jpg",
        "/image/img7.jpg",
    ]

    const categories = [
        {
            title: "Bitkisel Tasarım Uygulamaları",
            images: ["/images/bitkisel1.jpg", "/images/bitkisel2.jpg", "/images/bitkisel3.jpg", "/images/bitkisel4.jpg"],
        },
        {
            title: "Çocuk Oyun Alanı Uygulamaları",
            images: ["/images/oyun1.jpg", "/images/oyun2.jpg", "/images/oyun3.jpg", "/images/oyun4.jpg"],
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
            images: [],
        },
        {
            title: "Bakım Hizmetleri",
            images: [],
        },
        {
            title: "Peyzaj Donatı Elemanları",
            images: [],
        },
        {
            title: "Peyzaj Sert Zemin Uygulamaları",
            images: [],
        },
        {
            title: "Yüzme Havuzu ve Süs havuzları",
            images: [],
        },
        // Diğer kategorileri buraya ekleyebilirsiniz
    ];

    function CategoryGallery({ title, images }) {
        const [activeIndex, setActiveIndex] = useState(0);

        return (
            <div className="w-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                {
                    // <PhotoProvider>
                    //     <div className="relative">
                    //         {/* Büyük Resim */}
                    //         <PhotoView src={images[activeIndex]}>
                    //             <Image
                    //                 src={images[activeIndex]}
                    //                 width={800}
                    //                 height={500}
                    //                 alt={title}
                    //                 unoptimized
                    //                 className="w-full h-72 md:h-96 object-cover rounded-lg cursor-pointer"
                    //             />
                    //         </PhotoView>

                    //         {/* Küçük Resimler */}
                    //         <div className="mt-4 flex gap-2 overflow-x-auto">
                    //             {images.map((img, idx) => (
                    //                 <PhotoView key={idx} src={img}>
                    //                     <button onClick={() => setActiveIndex(idx)} className="focus:outline-none">
                    //                         <Image
                    //                             src={img}
                    //                             width={120}
                    //                             height={80}
                    //                             unoptimized
                    //                             alt={`${title} Thumbnail ${idx + 1}`}
                    //                             className={`w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg cursor-pointer transition-transform ${activeIndex === idx
                    //                                 ? "ring-2 ring-green-500 scale-105"
                    //                                 : "opacity-75 hover:opacity-100"
                    //                                 }`}
                    //                         />
                    //                     </button>
                    //                 </PhotoView>
                    //             ))}
                    //         </div>
                    //     </div>
                    // </PhotoProvider>
                }

                <PhotoProvider>
                    <div className="relative flex flex-col md:flex-row gap-x-6">
                        {/* Büyük Resim */}
                        <PhotoView src={images[activeIndex]}>
                            <Image
                                src={images[activeIndex]}
                                width={500}
                                height={500}
                                // contain
                                resize="contain"
                                alt={title}
                                unoptimized
                                className="w-full md:w-64 h-72 md:h-96 object-cover rounded-lg cursor-pointer"
                            />
                        </PhotoView>

                        {/* Küçük Resimler */}
                        <div className="mt-4 grid grid-cols-2 gap-2 overflow-x-auto">
                            {images.map((img, idx) => (
                                <PhotoView key={idx} src={img}>
                                    <button onClick={() => setActiveIndex(idx)} className="focus:outline-none">
                                        <Image
                                            src={img}
                                            width={120}
                                            height={80}
                                            unoptimized
                                            alt={`${title} Thumbnail ${idx + 1}`}
                                            className={`w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg cursor-pointer transition-transform ${activeIndex === idx
                                                ? "ring-2 ring-green-500 scale-105"
                                                : "opacity-75 hover:opacity-100"
                                                }`}
                                        />
                                    </button>
                                </PhotoView>
                            ))}
                        </div>
                    </div>
                </PhotoProvider>
            </div>
        );
    }



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

                    {
                        //     <PhotoProvider>
                        //     <div className="space-y-12 mt-8 lg:mt-16">
                        //         {categories.map((category, index) => (
                        //             <CategoryGallery key={index} title={category.title} images={Images} />
                        //         ))}
                        //     </div>
                        // </PhotoProvider>
                    }
                    <div className="space-y-12 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categories.map((category, index) => (
                            <CategoryGallery key={index} title={category.title} images={Images} />
                        ))}
                    </div>

                    {/**Image gallery */}
                    {
                        //     <PhotoProvider>
                        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                        //         {Images.map((image, index) => (
                        //             <PhotoView key={index} src={image}>
                        //                 <Image
                        //                     src={image}
                        //                     width={640}
                        //                     height={480}
                        //                     alt={`Project Image ${index + 1}`}
                        //                     className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                        //                 />
                        //             </PhotoView>
                        //         ))}
                        //     </div>
                        // </PhotoProvider>
                    }
                </div>
            </section>
        </div>
    )
}

export default page