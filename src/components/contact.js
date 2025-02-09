"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { supabase } from '../lib/supabaseClient';
import { toast } from 'react-hot-toast';

function Contact() {
    const [contactInfo, setContactInfo] = useState({
        tel_phone: '',
        wp_phone: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const whatsappMessage = "Merhaba, size web siteniz üzerinden ulaşıyorum. Sizden bilgi almak istiyorum.";
    const pathname = usePathname();

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const { data, error } = await supabase
                    .from('contact')
                    .select('tel_phone, wp_phone')
                    .single();

                if (error) throw error;

                if (data) {
                    setContactInfo({
                        tel_phone: data.tel_phone || '',
                        wp_phone: data.wp_phone || ''
                    });
                }
            } catch (error) {
                console.error('İletişim bilgileri yüklenirken hata:', error);
                toast.error('İletişim bilgileri yüklenirken bir hata oluştu!');
            } finally {
                setIsLoading(false);
            }
        };

        fetchContactInfo();
    }, []);

    if (pathname == '/admin' || pathname == '/admin/login' || isLoading) {
        return null;
    }

    return (
        <div className="flex flex-col justify-center">
            {/* Phone */}
            {contactInfo.tel_phone && (
                <a href={`tel:${contactInfo.tel_phone}`} target="_blank">
                    <Image 
                        src={'/image/call.png'} 
                        alt="tel" 
                        height={36} 
                        width={36} 
                        className="rounded-full animate-bounce !fixed bottom-16 left-4 flex items-center" 
                    />
                </a>
            )}
            
            {/* Whatsapp */}
            {contactInfo.wp_phone && (
                <a
                    href={`https://wa.me/${contactInfo.wp_phone.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-4 left-4 flex items-center justify-center p-0 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
                >
                    <Image
                        src="/image/whatsapp.png"
                        alt="WhatsApp"
                        className='rounded-full'
                        width={36}
                        height={36}
                    />
                </a>
            )}
        </div>
    );
}

export default Contact;
