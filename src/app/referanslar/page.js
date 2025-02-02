"use client"

import Image from 'next/image';
import { useLanguage } from "../../../src/context/LanguageContext";


function Referanslar() {
    const { texts, t } = useLanguage();

    const references = [
        {
            id: 1,
            name: "Acme Corp",
            description: "Global bir yazılım şirketi.",
            logo: "/logos/spotify-logo.png", // Örnek logo dosya yolu
        },
        {
            id: 2,
            name: "Beta Ltd.",
            description: "Yeni nesil finans çözümleri sunuyor.",
            logo: "/logos/spotify-logo.png",
        },
        {
            id: 3,
            name: "Gamma Co.",
            description: "E-ticaret sektöründe lider bir marka.",
            logo: "/logos/spotify-logo.png",
        },
        {
            id: 4,
            name: "Delta Partners",
            description: "Stratejik danışmanlık hizmetleri.",
            logo: "/logos/spotify-logo.png",
        },
        {
            id: 5,
            name: "Epsilon Solutions",
            description: "Yazılım ve bilişim çözümleri.",
            logo: "/logos/spotify-logo.png",
        },
        {
            id: 6,
            name: "Zeta Tech",
            description: "Yenilikçi teknoloji şirketi.",
            logo: "/logos/spotify-logo.png",
        },
        {
            id: 7,
            name: "Theta Systems",
            description: "Bilgi güvenliği ve siber güvenlik alanında uzman.",
            logo: "/logos/spotify-logo.png",
        },
        {
            id: 8,
            name: "Iota Group",
            description: "İnsan kaynakları ve işe alım çözümleri.",
            logo: "/logos/spotify-logo.png",
        }
    ];

    return (
        <div>
            <div className='mt-24'>
                {/**Main Content */}
                <div className="min-h-screen bg-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                            {t(texts.references.title)}
                        </h1>
                        <p className="text-lg text-gray-600 text-center mb-12">
                            {t(texts.references.desc)}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {references.map((reference) => (
                                <div
                                    key={reference.id}
                                    className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transition hover:shadow-lg"
                                >
                                    <Image
                                        src={reference.logo}
                                        width={80}
                                        height={80}
                                        alt={`${reference.name} logo`}
                                        className="w-20 h-20 object-contain mb-4"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {reference.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{reference.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Referanslar
