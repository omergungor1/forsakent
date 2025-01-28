import React from 'react'
import { Navbar, Footer } from "../../components";
import Image from 'next/image';
import Link from 'next/link';

function hizmetler() {
    return (
        <div>
            <Navbar defaultIsScrolling={true} />
            <div className='mt-24 '>

                {/* Main Content */}
                <section className="container mx-auto px-8 py-20 lg:py-28">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-gray-900 mb-4">
                            Hizmetlerimiz
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Estetik, fonksiyonellik ve çevre dostu yaklaşımları bir araya getirerek, peyzaj alanında uçtan uca çözümler sunuyoruz. Tasarımdan uygulamaya, düzenli bakım hizmetlerinden danışmanlığa kadar her aşamada yanınızdayız.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Danışmanlık */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
                            <Image
                                src="/image/img6.jpg"
                                alt="Danışmanlık"
                                width={768}
                                height={512}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    Danışmanlık
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Peyzaj alanlarında en iyi çözümleri sunmak için profesyonel danışmanlık hizmeti veriyoruz. Alanınızı analiz ederek, estetik ve sürdürülebilir fikirler üretiyoruz.
                                </p>
                                <Link
                                    href="/danismanlik"
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Daha Fazla Bilgi
                                </Link>
                            </div>
                        </div>

                        {/* Projelendirme ve 3D Görselleştirme */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
                            <Image
                                src="/image/img1.jpg"
                                alt="Projelendirme"
                                width={768}
                                height={512}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    Projelendirme ve 3D Görselleştirme
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Modern tasarımlar ve doğal estetiği birleştirerek peyzaj projelerinizi planlıyoruz. 3D görselleştirme hizmetimizle hayalinizdeki mekanı önceden keşfetmenizi sağlıyoruz.
                                </p>
                                <Link
                                    href="/projeler"
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Daha Fazla Bilgi
                                </Link>
                            </div>
                        </div>

                        {/* Uygulama */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
                            <Image
                                src="/image/img2.jpg"
                                alt="Uygulama"
                                width={768}
                                height={512}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Uygulama</h3>
                                <p className="text-gray-600 mb-4">
                                    Peyzaj projelerinizin her aşamasını profesyonel ekibimizle hayata geçiriyoruz. Bitkilerin dikiminden sert zemin uygulamalarına kadar tüm süreçlerde titizlikle çalışıyoruz.
                                </p>
                                <Link
                                    href="/uygulama"
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Daha Fazla Bilgi
                                </Link>
                            </div>
                        </div>

                        {/* Bakım */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
                            <Image
                                src="/image/img3.jpg"
                                alt="Bakım"
                                width={768}
                                height={512}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Bakım</h3>
                                <p className="text-gray-600 mb-4">
                                    Yeşil alanlarınızın uzun ömürlü ve sağlıklı kalması için düzenli bakım hizmeti sunuyoruz. Bitki bakımından çim kesimine kadar tüm detayları profesyonellikle yönetiyoruz.
                                </p>
                                <Link
                                    href="/bakim"
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Daha Fazla Bilgi
                                </Link>
                            </div>
                        </div>

                        {/* Megstore */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
                            <Image
                                src="/image/img6.jpg"
                                alt="Megstore"
                                width={768}
                                height={512}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">Megstore</h3>
                                <p className="text-gray-600 mb-4">
                                    Bahçe ve peyzaj alanlarınız için özel tasarım ürünler ve malzemeleri Megstore mağazamızda bulabilirsiniz. Modern peyzaj aksesuarlarından sürdürülebilir çözümlere kadar her şey bir arada.
                                </p>
                                <Link
                                    href="/megstore"
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Daha Fazla Bilgi
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    )
}

export default hizmetler
