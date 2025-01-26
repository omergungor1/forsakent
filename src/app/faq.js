"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. Hangi peyzaj hizmetlerini sunuyorsunuz?",
    desc: "Forsa Peyzaj olarak, bahçe tasarımı, peyzaj düzenlemesi, sulama sistemleri kurulumu, aydınlatma çözümleri, çim ekimi ve bakımı, dış mekan dekorasyonu gibi geniş bir hizmet yelpazesi sunuyoruz. İstanbul’daki tüm alanlara yönelik özelleştirilmiş çözümlerimizle peyzaj projelerinizi hayata geçiriyoruz.",
  },
  {
    title: "2. Hizmetleriniz İstanbul’un hangi bölgelerinde geçerli?",
    desc: "Forsa Peyzaj, İstanbul’un her bölgesine hizmet vermektedir. Beşiktaş, Kadıköy, Şişli, Bakırköy, Üsküdar gibi merkezi bölgelerden, Ataşehir, Pendik, Ümraniye gibi dış ilçelere kadar geniş bir hizmet ağına sahibiz.",
  },
  {
    title: "3. Peyzaj projeleri için nasıl bir süreç izliyorsunuz?",
    desc: "Projelerimiz, ilk görüşme ve alan incelemesi ile başlar. İhtiyaçlarınıza uygun bir tasarım önerisi sunarız ve onayınız sonrası uygulama aşamasına geçeriz. Peyzaj uygulamalarının tamamlanmasının ardından düzenli bakım ve izleme hizmeti de sunmaktayız.",
  },
  {
    title: "4. Peyzaj tasarımı için nasıl bir fiyatlandırma yapıyorsunuz?",
    desc: "Fiyatlandırmamız, projenin büyüklüğü, ihtiyaçlar ve tercih edilen malzemelere göre değişiklik gösterebilir. Her projeye özel bir teklif sunuyoruz. Ücretsiz keşif hizmeti ile alanınıza en uygun çözümü belirleyip fiyatlandırma yapıyoruz.",
  },
  {
    title: "5. Bahçem için bakım hizmeti alabilir miyim?",
    desc: "Evet, belirli aralıklarla yapılan bahçe bakımı hizmetimiz bulunmaktadır. Çim biçme, bitki bakımı, sulama sistemleri kontrolleri ve temizlik gibi bakım işlemleri düzenli olarak yapılmaktadır.",
  },
  {
    title: "6. Peyzaj projelerinde kullanılan malzemeler konusunda tercihlerim var mı?",
    desc: "Elbette! Kullanacağımız malzemeler konusunda tamamen sizin tercihleriniz doğrultusunda hareket ediyoruz. Doğal taşlar, suni çimler, su özellikleri gibi farklı seçenekler arasında istediğiniz tarzda bir peyzaj tasarımı oluşturabiliyoruz.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Sık Sorulan Sorular
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500">
            Hoş geldiniz! Forsa Peyzaj olarak, İstanbul’da sunduğumuz profesyonel peyzaj hizmetleriyle ilgili en sık sorulan soruları bu bölümde yanıtlıyoruz. Amacımız, peyzaj projelerinizi en verimli şekilde tasarlamak ve uygulamak. Aşağıda, hizmetlerimiz ve süreçlerimizle ilgili merak edilen tüm detayları bulabilirsiniz.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {
            FAQS.map(({ title, desc }, key) => (
              <Accordion
                key={key}
                open={open === key + 1}
                onClick={() => handleOpen(key + 1)}
              >
                <AccordionHeader className="text-left text-gray-900">
                  {title}
                </AccordionHeader>
                <AccordionBody>
                  <Typography
                    color="blue-gray"
                    className="font-normal text-gray-500"
                  >
                    {desc}
                  </Typography>
                </AccordionBody>
              </Accordion>
            ))
          }
        </div>
      </div>
    </section>
  );
}


export default Faq;
