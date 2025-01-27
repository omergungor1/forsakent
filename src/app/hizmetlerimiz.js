import React from 'react'
import Image from 'next/image'

function Hizmetlerimiz() {
    return (
        <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
            <div className="mb-20 grid place-items-center text-center">
                <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">
                    Hizmetlerimiz
                </h2>
                <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit !text-gray-500 lg:w-6/12">
                    Peyzaj tasarımından uygulamaya kadar her aşamada profesyonel hizmet sunuyoruz. Estetiği ve fonksiyonelliği bir araya getirerek, müşterilerimizin hayallerindeki mekanları gerçeğe dönüştürmek için çalışıyoruz.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md relative grid h-full w-full place-items-center overflow-hidden text-center">
                    <Image
                        alt="Fiction Books"
                        loading="lazy"
                        width="768"
                        height="768"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        src="/image/img6.jpg"
                        style={{ color: "transparent" }}
                    />
                    <div className="absolute inset-0 h-full w-full bg-gray-900/75"></div>
                    <div className="p-6 relative w-full">
                        <i className="fa-solid fa-message float-start text-white h-8 w-8 text-2xl" />
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white mt-9">
                            Danışmanlık
                        </h4>
                        <p className="block antialiased font-sans text-base leading-relaxed text-white mt-4 mb-14 font-normal opacity-50">
                            Peyzaj alanlarında en iyi çözümleri sunmak için profesyonel danışmanlık hizmeti veriyoruz. İhtiyaçlarınızı analiz ederek, alanınıza özel yenilikçi ve sürdürülebilir fikirler sunuyoruz.
                        </p>
                        <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                            Detaylar
                        </button>
                    </div>
                </div>

                <div className="col-span-1 flex flex-col gap-6">
                    <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid min-h-[12rem] w-full overflow-hidden">
                        <Image
                            alt="Fiction Books"
                            loading="lazy"
                            width="768"
                            height="768"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            src="/image/img1.jpg"
                            style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 h-full w-full bg-black/70"></div>
                        <div className="p-6 relative flex flex-col justify-between">
                            <i className="fa-solid fa-folder text-white h-8 w-8 text-2xl" />
                            <div>
                                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">Projelendirme 3D Görselleştirme</h5>
                                <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">Doğanın estetiğini modern tasarımlarla buluşturarak, peyzaj projelerinizi hayata geçiriyoruz. İşlevsellik, estetik ve çevre dostu yaklaşımları bir arada sunuyoruz.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid min-h-[12rem] w-full overflow-hidden">
                        <Image
                            alt="School Books"
                            loading="lazy"
                            width="768"
                            height="768"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            src="/image/img2.jpg"
                            style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 h-full w-full bg-black/70"></div>
                        <div className="p-6 relative flex flex-col justify-between">
                            <i className="fa-solid fa-hammer text-white h-8 w-8 text-2xl" />
                            <div>
                                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">Uygulama</h5>
                                <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">Tasarladığımız projeleri, uzman ekibimizle en yüksek kalite standartlarında uyguluyoruz. Bitkilerin dikiminden sert zemin uygulamalarına kadar tüm süreçlerde yanınızdayız.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-6">
                    <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid min-h-[12rem] w-full overflow-hidden">
                        <Image
                            alt="Fiction Books"
                            loading="lazy"
                            width="768"
                            height="768"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            src="/image/img3.jpg"
                            style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 h-full w-full bg-black/70"></div>
                        <div className="p-6 relative flex flex-col justify-between">

                            <i className="fa-solid fa-handshake text-white h-8 w-8 text-2xl" />
                            <div>
                                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">Bakım</h5>
                                <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">Yeşil alanlarınızın uzun ömürlü ve sağlıklı kalması için düzenli bakım hizmeti sağlıyoruz. Bitki bakımından çim kesimine kadar her detayı profesyonellikle yönetiyoruz.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid min-h-[12rem] w-full overflow-hidden">
                        <Image
                            alt="School Books"
                            loading="lazy"
                            width="768"
                            height="768"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            src="/image/img6.jpg"
                            style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 h-full w-full bg-black/70"></div>
                        <div className="p-6 relative flex flex-col justify-between">

                            <i className="fa-solid fa-shop text-white h-8 w-8 text-2xl" />
                            <div>
                                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">Megstore</h5>
                                <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">Peyzaj ihtiyaçlarınızı karşılamak için geniş ürün yelpazemizle hizmetinizdeyiz. Magstore’da peyzaj projeleriniz için bitkiler, aksesuarlar ve ekipmanlar bulabilirsiniz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hizmetlerimiz
