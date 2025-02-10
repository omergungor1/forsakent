"use client"

import { useState, useEffect } from "react";
import { useLanguage, texts } from "../../../src/context/LanguageContext";
import { createClient } from '@supabase/supabase-js';
import { toast } from 'react-hot-toast';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

function Iletisim() {
    const { t } = useLanguage();
    const [contactData, setContactData] = useState({
        email: '',
        tel_phone: '',
        wp_phone: '',
        address: '',
        social_media: {}
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const { data, error } = await supabase
                    .from('contact')
                    .select('*')
                    .single();

                if (error) throw error;

                if (data) {
                    setContactData(data);
                }
            } catch (error) {
                console.error('İletişim bilgileri çekilirken hata:', error);
                toast.error('İletişim bilgileri yüklenirken bir hata oluştu!');
            } finally {
                setIsLoading(false);
            }
        };

        fetchContactData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center mt-24">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div>
            <div className='mt-24'>
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
                                {contactData.tel_phone && (
                                    <div className="flex items-center gap-4">
                                        <i className="fa-solid fa-phone text-blue-500 text-xl"></i>
                                        <p className="text-gray-700">
                                            {t(texts.contact_page.phone)}: 
                                            <a href={`tel:${contactData.tel_phone}`} className="text-blue-500 ml-2">
                                                {contactData.tel_phone}
                                            </a>
                                        </p>
                                    </div>
                                )}

                                {contactData.wp_phone && (
                                    <div className="flex items-center gap-4">
                                        <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
                                        <p className="text-gray-700">
                                            WhatsApp: 
                                            <a 
                                                href={`https://wa.me/${contactData.wp_phone.replace(/\D/g,'')}`} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-green-500 ml-2"
                                            >
                                                {contactData.wp_phone}
                                            </a>
                                        </p>
                                    </div>
                                )}

                                {contactData.email && (
                                    <div className="flex items-center gap-4">
                                        <i className="fa-solid fa-envelope text-blue-500 text-xl"></i>
                                        <p className="text-gray-700">
                                            {t(texts.contact_page.email)}: 
                                            <a href={`mailto:${contactData.email}`} className="text-blue-500 ml-2">
                                                {contactData.email}
                                            </a>
                                        </p>
                                    </div>
                                )}

                                {contactData.address && (
                                    <div className="flex items-center gap-4">
                                        <i className="fa-solid fa-location-dot text-blue-500 text-xl"></i>
                                        <p className="text-gray-700">
                                            {t(texts.contact_page.address)}: 
                                            <span className="ml-2">{contactData.address}</span>
                                        </p>
                                    </div>
                                )}

                                {/* Sosyal Medya Linkleri */}
                                {Object.entries(contactData.social_media || {}).some(([_, url]) => url?.trim()) && (
                                    <div className="mt-8">
                                        <h3 className="text-lg font-semibold mb-4">{t(texts.contact_page.follow_us)}</h3>
                                        <div className="flex gap-4">
                                            {contactData.social_media?.facebook?.trim() && (
                                                <a 
                                                    href={contactData.social_media.facebook} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-2xl text-blue-600 hover:text-blue-700"
                                                >
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            )}
                                            {contactData.social_media?.instagram?.trim() && (
                                                <a 
                                                    href={contactData.social_media.instagram} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-2xl text-pink-600 hover:text-pink-700"
                                                >
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            )}
                                            {contactData.social_media?.twitter?.trim() && (
                                                <a 
                                                    href={contactData.social_media.twitter} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-2xl text-blue-400 hover:text-blue-500"
                                                >
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            )}
                                            {contactData.social_media?.linkedin?.trim() && (
                                                <a 
                                                    href={contactData.social_media.linkedin} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-2xl text-blue-700 hover:text-blue-800"
                                                >
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            )}
                                            {contactData.social_media?.youtube?.trim() && (
                                                <a 
                                                    href={contactData.social_media.youtube} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-2xl text-red-600 hover:text-red-700"
                                                >
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.35905480932!2d29.393608077113473!3d40.90787256975498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad822bbb4f883%3A0xef84de635f92d26b!2zU8O8bGV5bWFuaXllIEJ1bHZhcsSxICYgU2ViYXQgU29rYcSfaSwgVGVwZcO2cmVuLCAzNDk1OSBUdXpsYS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1739221683253!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Iletisim;
