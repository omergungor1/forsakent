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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                                <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z"></path>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                            </svg>
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
                            src="/image/img4.jpg"
                            style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 h-full w-full bg-black/70"></div>
                        <div className="p-6 relative flex flex-col justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                                <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z"></path>
                            </svg>
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
