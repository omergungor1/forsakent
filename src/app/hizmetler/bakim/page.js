'use client';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


function page() {
    const Images = [
        "/image/img1.jpg",
        "/image/img2.jpg",
        "/image/img3.jpg",
    ]

    return (
        <div className='mt-4 '>
            {/* Main Content */}
            <section className="container mx-auto px-8 py-10 lg:py-14">
                <div className="relative min-h-screen py-12">
                    {/* Hero Bölümü */}
                    <div className="relative w-full rounded-xl bg-cover bg-center h-80 md:h-96" style={{ backgroundImage: "url('/image/img1.jpg')" }}>
                        <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Bakım</h1>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Bakım Hizmetleri Alanı */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    Yeşil Alanlarınıza Profesyonel Bakım Hizmeti
                                </h2>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Peyzaj alanlarınızın her zaman sağlıklı, estetik ve düzenli kalmasını sağlamak için kapsamlı bakım hizmetleri sunuyoruz.
                                    Alanınızın gereksinimlerini analiz ederek, ihtiyaca yönelik düzenli bakım programları oluşturuyoruz.
                                </p>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Uzman ekibimiz, bitkilerin gelişimini desteklemek, hastalıklara karşı önlem almak ve çevre dostu bakım uygulamaları ile
                                    peyzaj alanlarınızı her zaman en iyi durumda tutmak için çalışmaktadır.
                                </p>
                            </div>
                            <div>
                                {/* Hizmet Listesi */}
                                <ul className="mt-6 space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">Çim biçme ve çim alanlarının bakımı</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">Ağaç budama ve zararlı kontrolü</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">Bitki gübreleme ve toprak iyileştirme</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">Otomatik sulama sistemlerinin bakımı</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">Mevsimsel bitki değişimi ve yenileme</span>
                                    </li>
                                    <li className="flex items-start">
                                        ✅ <span className="ml-2">Haşere ve hastalık kontrolü</span>
                                    </li>
                                </ul>

                                <p className="text-gray-600 mt-6 leading-relaxed">
                                    Bitkilerinizin sağlıklı gelişimini sürdürmesi ve peyzaj alanlarınızın her zaman düzenli ve canlı kalması için <strong>periyodik bakım hizmetlerimizden</strong> faydalanabilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/**Image gallery */}
                    {
                        // <PhotoProvider>
                        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 md:mt-24">
                        //         {Images.map((image, index) => (
                        //             <PhotoView key={index} src={image}>
                        //                 <img
                        //                     src={image}
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
