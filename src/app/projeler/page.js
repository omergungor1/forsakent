import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function hizmetler() {

    const projects = [
        {
            "id": 1,
            "title": "A Etabı Bahçe Düzenleme Projesi",
            "description": "İstanbul’un en prestijli sitelerinden birinde gerçekleştirilen bu proje, modern ve doğal peyzaj unsurlarını bir araya getirerek huzurlu bir yaşam alanı oluşturdu.",
            "images": ["/image/img1.jpg", "/images/project1-2.jpg"],
            "url": "/projeler/detay"
        },
        {
            "id": 2,
            "title": "Lüks Konutlar İçin Peyzaj Tasarımı",
            "description": "Şehrin kalbinde yer alan lüks konutlar için tasarlanan bu peyzaj projesinde, yeşil alanlar ve su öğeleri bir arada kullanılarak doğal bir atmosfer yaratıldı.",
            "images": ["/image/img2.jpg", "/images/project2-2.jpg"],
            "url": "/projeler/detay"
        },
        {
            "id": 3,
            "title": "Villa Bahçesi Peyzaj Düzenlemesi",
            "description": "Boğaz manzaralı özel bir villa için gerçekleştirilen bu projede, doğal taş yürüyüş yolları, süs havuzları ve egzotik bitkilerle estetik bir bahçe oluşturuldu.",
            "images": ["/image/img3.jpg", "/images/project3-2.jpg"],
            "url": "/projeler/detay"
        },
        {
            "id": 4,
            "title": "Şehir Parkı Yenileme Çalışması",
            "description": "İstanbul’un en büyük parklarından birinde yapılan yenileme çalışmaları kapsamında, sürdürülebilir peyzaj tasarımıyla doğayla uyumlu sosyal alanlar oluşturuldu.",
            "images": ["/image/img4.jpg", "/images/project4-2.jpg"],
            "url": "/projeler/detay"
        },
        {
            "id": 5,
            "title": "Ofis Binası Çevre Düzenleme Projesi",
            "description": "Modern ofis binalarının çevresini yeşil dokuyla bütünleştiren bu projede, çalışanlar için dinlenme alanları ve doğal peyzaj elemanları kullanıldı.",
            "images": ["/image/img5.jpg", "/images/project5-2.jpg"],
            "url": "/projeler/detay"
        }
    ];

    return (
        <div>
            <div className='mt-24 '>

                {/* Main Content */}
                <section className="container mx-auto px-8 py-20 lg:py-28">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-gray-900 mb-4">
                            Projeler
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Estetik, fonksiyonellik ve çevre dostu yaklaşımları bir araya getirerek, peyzaj alanında uçtan uca çözümler sunuyoruz. Tasarımdan uygulamaya, düzenli bakım hizmetlerinden danışmanlığa kadar her aşamada yanınızdayız.
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
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {project.description}
                                        </p>
                                        <Link
                                            href={project.url}
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Detaylar
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

export default hizmetler
