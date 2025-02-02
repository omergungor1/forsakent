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
                            {/* Metin Alanı */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Doğanın Estetiğini Modern Tasarımlarla Buluşturuyoruz</h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Peyzaj projelerinizi en ince ayrıntısına kadar planlayarak, size özel tasarımlar sunuyoruz.
                                    İşlevsellik, estetik ve çevre dostu yaklaşımları bir araya getirerek, yaşam alanlarınıza değer katıyoruz.
                                </p>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    3D görselleştirme teknolojileri sayesinde, projelerinizi hayata geçirmeden önce dijital ortamda deneyimleyebilir,
                                    ihtiyaçlarınıza göre revizyon yapabilirsiniz.
                                </p>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Uzman ekibimizle birlikte, yeşil alanlarınızı daha fonksiyonel ve estetik hale getirmek için çalışıyoruz.
                                </p>
                            </div>

                            {/* Görsel Alanı */}
                            <div className='hidden md:block'>
                                <Image
                                    src="/image/img1.jpg"
                                    alt="3D Peyzaj Tasarımı"
                                    className="rounded-lg shadow-lg"
                                    width={640}
                                    height={480}
                                />
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
