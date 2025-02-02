import Image from "next/image";
import Link from "next/link";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import { useLanguage } from "../../src/context/LanguageContext";


const CURRENT_YEAR = new Date().getFullYear();

const phoneNumber = "+905051333322";
const whatsappMessage = "Merhaba, size web siteniz üzerinden ulaşıyorum. Sizden bilgi almak istiyorum.";



export function Footer() {
  const { language } = useLanguage();

  const LINKS = [
    {
      name: language == 'tr' ? "Ana Sayfa" : "Home",
      href: "/",
    },
    {
      name: language == 'tr' ? "Hizmetlerimiz" : "Services",
      href: "/hizmetler",
    },
    {
      name: language == 'tr' ? "Projeler" : "Projects",
      href: "/projeler",
    },
    {
      name: language == 'tr' ? "Referanslar" : "References",
      href: "/referanslar",
    },
    {
      name: language == 'tr' ? "İletişim" : "Contact",
      href: "/iletisim",
    },
  ];

  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            {language == 'tr' ? "Bize Ulaşın" : "Contact Us"}
          </Typography>
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base">

            {language == 'tr' ? "Tüm soru ve önerileriniz için bizimle iletişime geçebilirsiniz." : "You can contact us for all your questions and suggestions."}
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button
              onClick={() => {
                window.location.href = `tel:${phoneNumber}`;
              }}
              color="blue" size="md" className="flex items-center justify-center gap-2 animate-pulse">
              <i className="fa-solid fa-phone  text-md" />
              {language == 'tr' ? "Hemen Ara" : "Call Now"}
            </Button>
            <Button
              onClick={() => {
                window.open(`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`);
              }}
              color="green" size="md" className="flex items-center justify-center gap-2 animate-pulse">
              <i className="fa-brands fa-whatsapp  text-xl" />
              WhatsApp
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Image
            width={256}
            height={125}
            src={'/logos/logo.png'}
            alt={"Forsa Kent Logo"}
            className="w-40 "
          />
          <ul className="flex flex-wrap justify-center my-4 md:my-0 w-full mx-auto items-center gap-4">
            {
              LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    variant="small"
                    color="white"
                    className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} {language == 'tr' ? "Tüm hakları Forsa Peyzaj’a aittir." : "All rights reserved by Forsa Peyzaj."}{" "}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
