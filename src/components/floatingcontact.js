import Image from 'next/image'
import { Button } from "@material-tailwind/react";
const phoneNumber = "+905325484587";
const whatsappMessage = "Merhaba, size web siteniz üzerinden ulaşıyorum. Sizden bilgi almak istiyorum.";


const FloatingContact = () => {
    return (
        <div>
            <div className="flex flex-col justify-center">
                {/* Phone*/}
                <a href="tel:05325484587" target="_blank">
                    <Image src={'/image/call.png'} alt="tel" height={36} width={36} className="rounded-full animate-bounce !fixed bottom-16 left-4 flex items-center" />
                </a>
                {/* Whatsapp*/}
                <Button
                    onClick={() => {
                        window.open(`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`)
                    }}
                    className="fixed bottom-4 left-4 flex items-center p-2 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none" >
                    <Image
                        src="/image/whatsapp.png"
                        alt="wp"
                        height={36}
                        width={36}
                        className="rounded-full animate-pulse" />
                </Button>
            </div>
        </div>
    )
}

export default FloatingContact
