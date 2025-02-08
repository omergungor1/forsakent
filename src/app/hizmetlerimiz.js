"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from "../../src/context/LanguageContext";

function Hizmetlerimiz({ isSection = false }) {
    const { texts, t, language } = useLanguage();
    return (
        <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
            {
                isSection ? (
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-gray-900 mb-4">
                            {t(texts.home_page.services.title)}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t(texts.home_page.services.title2)}
                        </p>
                    </div>
                ) : (
                    <div className="mb-20 grid place-items-center text-center">
                        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">
                            {t(texts.home_page.services.title)}
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit !text-gray-500 lg:w-6/12">
                            {t(texts.home_page.services.title2)}
                        </p>
                    </div>
                )
            }

            {/**Danışmanlık */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md relative grid h-[500px] w-full place-items-center overflow-hidden text-center">
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
                            {t(texts.home_page.services.content.consulting.title)}
                        </h4>
                        <p className="block antialiased font-sans text-base leading-relaxed text-white mt-4 mb-14 font-normal opacity-50">
                            {t(texts.home_page.services.content.consulting.content)}
                        </p>
                        <Link
                            href='/hizmetler/danismanlik'
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                            {language === "tr" ? "Detaylar" : "Details"}
                        </Link>
                    </div>
                </div>

                {/**Projelendirme */}
                <div className="col-span-1 flex flex-col gap-6">
                    <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid h-[240px] w-full overflow-hidden">
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
                                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">{t(texts.home_page.services.content.project_design.title)}</h5>
                                <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">{t(texts.home_page.services.content.project_design.content)}</p>
                                <div className='w-full flex justify-end'>
                                    <Link
                                        href='/hizmetler/projelendirme'
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                                        {language === "tr" ? "Detaylar" : "Details"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**Bakım */}
                    <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid h-[240px] w-full overflow-hidden">
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
                                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">{t(texts.home_page.services.content.care.title)}</h5>
                                <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">{t(texts.home_page.services.content.care.content)}</p>
                                <div className='w-full flex justify-end'>
                                    <Link
                                        href='/hizmetler/bakim'
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                                        {language === "tr" ? "Detaylar" : "Details"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-6">
                    {/**Uygulama */}
                    <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid h-[240px] w-full overflow-hidden">
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
                                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">{t(texts.home_page.services.content.application.title)}</h5>
                                <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">{t(texts.home_page.services.content.application.content)}</p>
                                <div className='w-full flex justify-end'>
                                    <Link
                                        href='/hizmetler/uygulama'
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                                        {language === "tr" ? "Detaylar" : "Details"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**İç Mekan Bitkilendirme */}
                    <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid h-[240px] w-full overflow-hidden">
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

                            <i className="fa-brands fa-pagelines text-white h-8 w-8 text-2xl" />
                            <div>
                                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">{t(texts.home_page.services.content.planting.title)}</h5>
                                <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">{t(texts.home_page.services.content.planting.content)}</p>
                                <div className='w-full flex justify-end'>
                                    <Link
                                        href='/hizmetler/bitkilendirme'
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                                        {language === "tr" ? "Detaylar" : "Details"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hizmetlerimiz
