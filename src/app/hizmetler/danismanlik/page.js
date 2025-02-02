import React from 'react'

function page() {
    return (
        <div className='mt-4 '>
            {/* Main Content */}
            <section className="container mx-auto px-8 py-20 lg:py-28">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl font-extrabold text-green-800">Danışmanlık Hizmetleri</h1>
                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        İstanbul’da faaliyet gösteren deneyimli peyzaj firmamız, müşterilerimizin projelerinde
                        profesyonel danışmanlık hizmeti sunmaktadır. Alan analizi, sürdürülebilir peyzaj çözümleri,
                        proje planlaması ve uygulama süreçlerinde uzman ekibimizle yanınızdayız.
                        Doğru peyzaj uygulamalarıyla çevrenizi estetik ve fonksiyonel hale getiriyoruz.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-2xl font-semibold text-green-700">Alan Analizi ve Planlama</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Peyzaj projelerinde en verimli sonucu almak için alan analizi ve stratejik planlama yapıyoruz.
                            Bitki seçimi, toprak durumu ve iklim özelliklerini dikkate alarak sürdürülebilir çözümler geliştiriyoruz.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-2xl font-semibold text-green-700">Sürdürülebilir Peyzaj Tasarımı</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Çevre dostu ve dayanıklı peyzaj tasarımları ile estetik ve fonksiyonelliği bir araya getiriyoruz.
                            Yeşil alanların verimli kullanımını sağlarken su tasarrufu sağlayan bitkilerle ekolojik dengeyi koruyoruz.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-2xl font-semibold text-green-700">Proje Yönetimi ve Uygulama</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Peyzaj projelerinizin tüm aşamalarında yanınızdayız. Doğru malzeme seçimi,
                            profesyonel ekip yönetimi ve zamanında teslim ile projelerinizi başarıyla hayata geçiriyoruz.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
