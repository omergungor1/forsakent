"use client"

import { useLanguage } from "../../../src/context/LanguageContext";

function Iletisim() {
    const { texts, t } = useLanguage();

    return (
        <div>
            <div className='mt-24 '>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-10">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Contact Info */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-800">{t(texts.contact_page.title)}</h2>
                            <p className="text-gray-600 mt-4">
                                {t(texts.contact_page.desc)}
                            </p>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center gap-4">
                                    <i className="fa-solid fa-phone text-blue-500 text-xl"></i>
                                    <p className="text-gray-700">{t(texts.contact_page.phone)}: <a href="tel:+905051333322" className="text-blue-500">+90 505 133 33 22</a></p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <i className="fa-solid fa-envelope text-blue-500 text-xl"></i>
                                    <p className="text-gray-700">{t(texts.contact_page.email)}: <a href="mailto:info@forsakent.com" className="text-blue-500">info@forsakent.com</a></p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <i className="fa-solid fa-location-dot text-blue-500 text-xl"></i>
                                    <p className="text-gray-700">{t(texts.contact_page.address)}: {t(texts.contact_page.address_content)}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <iframe
                                title="Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12055.42170734965!2d29.2238121!3d40.9606404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab3d7a95e983f%3A0xa3c9c6f658b7a5af!2sAk%C5%9Femsettin%20Mah.%20Petrol%20Yolu%20Cd.%20No%3A482%20A%2F1%2C%2034940%20Sultanbeyli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1617356412981!5m2!1str!2str"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Iletisim
