"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "../../../src/context/LanguageContext";

function Projeler() {
    const { texts, t, language } = useLanguage();

    const projects = [
        {
            id: 1,
            title: {
                tr: "A Etabı Bahçe Düzenleme Projesi",
                en: "A Phase Landscaping Project"
            },
            desc: {
                tr: "İstanbul’un en prestijli sitelerinden birinde gerçekleştirilen bu proje, modern ve doğal peyzaj unsurlarını bir araya getirerek huzurlu bir yaşam alanı oluşturdu.",
                en: "This project, which was carried out in one of Istanbul's most prestigious sites, created a peaceful living space by bringing together modern and natural landscaping elements."
            },
            images: ["/image/img1.jpg", "/images/project1-2.jpg"],
            url: "/projeler/detay"
        },
        {
            id: 2,
            title: {
                tr: "Şehir Merkezi Konutları Peyzaj Projesi",
                en: "City Center Residences Landscaping Project"
            },
            desc: {
                tr: "Şehrin kalbinde yer alan lüks konutlar için tasarlanan bu peyzaj projesinde, yeşil alanlar ve su öğeleri bir arada kullanılarak doğal bir atmosfer yaratıldı.",
                en: "In this landscaping project designed for luxury residences located in the heart of the city, a natural atmosphere was created by using green areas and water elements together."
            },
            images: ["/image/img2.jpg", "/images/project2-2.jpg"],
            url: "/projeler/detay"
        },
        {
            id: 3,
            title: {
                tr: "Boğaz Manzaralı Villa Bahçesi",
                en: "Bosphorus View Villa Garden"
            },
            desc: {
                tr: "Boğaz manzaralı özel bir villa için gerçekleştirilen bu projede, doğal taş yürüyüş yolları, süs havuzları ve egzotik bitkilerle estetik bir bahçe oluşturuldu.",
                en: "In this project carried out for a private villa with a Bosphorus view, an aesthetic garden was created with natural stone walkways, ornamental pools, and exotic plants."
            },
            images: ["/image/img3.jpg", "/images/project3-2.jpg"],
            url: "/projeler/detay"
        },
        {
            id: 4,
            title: {
                tr: "Şehir Parkı Yenileme Çalışması",
                en: "City Park Renovation Project"
            },
            desc: {
                tr: "İstanbul’un en büyük parklarından birinde yapılan yenileme çalışmaları kapsamında, sürdürülebilir peyzaj tasarımıyla doğayla uyumlu sosyal alanlar oluşturuldu.",
                en: "As part of the renovation works carried out in one of Istanbul's largest parks, social areas compatible with nature were created with sustainable landscaping design."
            },
            images: ["/image/img4.jpg", "/images/project4-2.jpg"],
            url: "/projeler/detay"
        },
        {
            id: 5,
            title: {
                tr: "Ofis Binası Çevre Düzenleme Projesi",
                en: "Office Building Landscaping Project"
            },
            desc: {
                tr: "Modern ofis binalarının çevresini yeşil dokuyla bütünleştiren bu projede, çalışanlar için dinlenme alanları ve doğal peyzaj elemanları kullanıldı.",
                en: "In this project that integrates the surroundings of modern office buildings with green texture, rest areas and natural landscaping elements were used for employees."
            },
            images: ["/image/img5.jpg", "/images/project5-2.jpg"],
            url: "/projeler/detay"
        }
    ];

    return (
        <div>
            <div className='mt-24 '>

                {/* Main Content */}
                <section className="container mx-auto px-8 py-20 lg:py-28">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-gray-900 mb-4">
                            {t(texts.projects.title)}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t(texts.projects.desc)}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {
                            projects.map((project, index) => (
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden relative" key={index}>
                                    <Image
                                        src={project.images[0]}
                                        alt="Danışmanlık"
                                        width={768}
                                        height={512}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                            {language === "tr" ? project.title.tr : project.title.en}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {language === "tr" ? project.desc.tr : project.desc.en}
                                        </p>
                                        <Link
                                            href={project.url}
                                            className="absolute bottom-3 left-6 text-blue-600 font-semibold hover:underline"
                                        >
                                            {language === "tr" ? "Detaylar" : "Details"}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projeler
