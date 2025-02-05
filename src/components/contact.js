"use client"

import Image from 'next/image';
import { usePathname } from "next/navigation";

function Contact() {
    const phoneNumber = "+905051333322";
    const whatsappMessage = "Merhaba, size web siteniz üzerinden ulaşıyorum. Sizden bilgi almak istiyorum.";
    const pathname = usePathname();

    if (pathname == '/admin' || pathname == '/admin/login') {
        return null;
    }

    return (
        <div className="flex flex-col justify-center">
            {/* Phone*/}
            {
                <a href="tel:05051333322" target="_blank">
                    <Image src={'/image/call.png'} alt="tel" height={36} width={36} className="rounded-full animate-bounce !fixed bottom-16 left-4 flex items-center" />
                </a>
            }
            {/* Whatsapp*/}
            {
                <a
                    href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
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

            }
        </div>
    )
}

export default Contact
