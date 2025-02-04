'use client';

import ImageGallery2 from 'src/components/image-gallery2';
import { useLanguage } from "../../../../src/context/LanguageContext";

const project = {
    title: {
        tr: "Ataşehir Projesi",
        en: "Ataşehir Project",
    },
    desc: {
        tr: "Bu proje, modern tasarım anlayışıyla geliştirilmiş bir mimari konsepti içermektedir. Estetik ve fonksiyonelliği birleştiren çizgileriyle dikkat çekmektedir.",
        en: "This project contains an architectural concept developed with a modern design approach. It attracts attention with its lines that combine aesthetics and functionality."
    },
    images: [
        "/image/img1.jpg",
        "/image/img2.jpg",
        "/image/img3.jpg",
        "/image/img5.jpg",
        "/image/img6.jpg",
        "/image/img7.jpg",
    ],
}

export default function ProjectDetails() {
    const { language } = useLanguage();
    return (
        <div>
            <div className='mt-24 '>
                {/* Main Content */}
                <section className="container mx-auto px-8 py-20 lg:py-28">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-gray-900 mb-4">
                            {language === "tr" ? project.title.tr : project.title.en}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {language === "tr" ? project.desc.tr : project.desc.en}
                        </p>
                    </div>

                    <div className='space-y-12 mt-6 md:mt-12'>
                        <ImageGallery2 Images={project.images} />
                    </div>
                </section>
            </div>
        </div>
    );
}