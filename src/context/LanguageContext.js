"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

import { supabase } from "../lib/supabaseClient";
import { ClientPageRoot } from "next/dist/client/components/client-page";

const LanguageContext = createContext();

export const texts = {
    contact_page: {
        title: {
            tr: "İletişim",
            en: "Contact"
        },
        desc: {
            tr: "Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.",
            en: "You can use the information below to contact us."
        },
        phone: {
            tr: "Telefon",
            en: "Phone"
        },
        email: {
            tr: "E-posta",
            en: "Email"
        },
        address: {
            tr: "Adres",
            en: "Address"
        },
        follow_us: {
            tr: "Bizi Takip Edin",
            en: "Follow Us"
        }
    },
    home_page: {
        text1: {
            tr: "Hayalinizdeki Mekanlar",
            en: "Dream Spaces"
        },
        text2: {
            tr: "Forsa Kent Tasarım",
            en: "Forsa City Design"
        },
        text3: {
            tr: "Estetik ve fonksiyonelliği bir araya getiren peyzaj tasarımları.",
            en: "Landscape designs that combine aesthetics and functionality."
        },
        about_us: {
            title: {
                tr: "Hakkımızda",
                en: "About Us"
            },
            content: {
                tr: `2018 yılında kurulan firmamız, peyzaj sektöründe yenilikçi ve sürdürülebilir çözümler sunarak müşterilerimizin yaşam alanlarını güzelleştirmeyi hedeflemektedir. Kurulduğumuz günden bu yana, kaliteli hizmet anlayışımız ve müşteri memnuniyetine verdiğimiz önemle sektördeki yerimizi sağlamlaştırdık.

            Alanında uzman ekibimizle, peyzaj tasarımından uygulamaya kadar her aşamada profesyonel hizmet sunuyoruz. Estetiği ve fonksiyonelliği bir araya getirerek, müşterilerimizin hayallerindeki mekanları gerçeğe dönüştürmek için çalışıyoruz.
            
            Doğaya olan tutkumuz ve çevreye duyarlılığımızla, projelerimizde en iyi malzemeleri kullanarak, sürdürülebilir ve estetik çözümler üretmeye devam ediyoruz. Her bir projemiz, müşteri ihtiyaçlarına göre özel olarak tasarlanmakta ve titizlikle uygulanmaktadır.
            
            Bizimle çalışarak, yaşam alanlarınızı doğanın huzurunu ve güzelliğini yansıtan eşsiz mekanlara dönüştürebilirsiniz.`,
                en: `Founded in 2018, our company aims to beautify the living spaces of our customers by offering innovative and sustainable solutions in the landscaping sector. Since the day we were founded, we have strengthened our position in the sector with our understanding of quality service and the importance we attach to customer satisfaction.
                    
            With our expert team, we offer professional service at every stage from landscape design to implementation. By combining aesthetics and functionality, we strive to make the spaces of our customers' dreams come true.
            
            With our passion for nature and sensitivity to the environment, we continue to produce sustainable and aesthetic solutions by using the best materials in our projects. Each of our projects is specially designed and meticulously implemented according to customer needs.
            
            By working with us, you can transform your living spaces into unique places that reflect the peace and beauty of nature.`
            },
        },
        services: {
            title: {
                tr: "Hizmetlerimiz",
                en: "Our Services"
            },
            title2: {
                tr: "Estetik, fonksiyonellik ve çevre dostu yaklaşımları bir araya getirerek, peyzaj alanında uçtan uca çözümler sunuyoruz. Tasarımdan uygulamaya, düzenli bakım hizmetlerinden danışmanlığa kadar her aşamada yanınızdayız.",
                en: "We offer end-to-end solutions in the field of landscaping by combining aesthetics, functionality and environmentally friendly approaches. From design to implementation, from regular maintenance services to consultancy, we are with you at every stage.",
            },
            content: {
                consulting: {
                    title: {
                        tr: "Danışmanlık",
                        en: "Consulting"
                    },
                    title2: {
                        tr: "Peyzaj Danışmanlık Hizmetleri",
                        en: "Landscape Consulting Services"
                    },
                    content: {
                        tr: "Peyzaj alanlarında en iyi çözümleri sunmak için profesyonel danışmanlık hizmeti veriyoruz. İhtiyaçlarınızı analiz ederek, alanınıza özel yenilikçi ve sürdürülebilir fikirler sunuyoruz.",
                        en: "We provide professional consultancy services to offer the best solutions in landscaping areas. By analyzing your needs, we offer innovative and sustainable ideas specific to your area.",
                    },
                },
                project_design: {
                    title: {
                        tr: "Projelendirme 3D Görselleştirme",
                        en: "Project Design 3D Visualization"
                    },
                    title2: {
                        tr: "Peyzaj Projelendirme ve 3D Görselleştirme ile Hayalinizdeki Mekanı Yaratın",
                        en: "Create the Space of Your Dreams with Landscape Design and 3D Visualization"
                    },
                    content: {
                        tr: "Doğanın estetiğini modern tasarımlarla buluşturarak, peyzaj projelerinizi hayata geçiriyoruz. İşlevsellik, estetik ve çevre dostu yaklaşımları bir arada sunuyoruz.",
                        en: "We realize your landscape projects by combining the aesthetics of nature with modern designs. We offer functionality, aesthetics and environmentally friendly approaches together."
                    }
                },
                application: {
                    title: {
                        tr: "Uygulama",
                        en: "Application"
                    },
                    title2: {
                        tr: "Profesyonel Peyzaj Uygulama Hizmetleri ile Mekanlarınıza Hayat Verin",
                        en: "Give Life to Your Spaces with Professional Landscaping Application Services"
                    },
                    content: {
                        tr: "Tasarladığımız projeleri, uzman ekibimizle en yüksek kalite standartlarında uyguluyoruz. Bitkilerin dikiminden sert zemin uygulamalarına kadar tüm süreçlerde yanınızdayız.",
                        en: "We implement the projects we design with the highest quality standards with our expert team. We are at your side in all processes from planting plants to hard ground applications."
                    }
                },
                care: {
                    title: {
                        tr: "Bakım",
                        en: "Care"
                    },
                    title2: {
                        tr: "Yeşil Alanlarınıza Profesyonel Bakım Hizmeti",
                        en: "Professional Maintenance Service for Your Green Areas"
                    },
                    content: {
                        tr: "Yeşil alanlarınızın uzun ömürlü ve sağlıklı kalması için düzenli bakım hizmeti sağlıyoruz. Bitki bakımından çim kesimine kadar her detayı profesyonellikle yönetiyoruz.",
                        en: "We provide regular maintenance services to keep your green areas long-lasting and healthy. We manage every detail from plant care to grass cutting with professionalism."
                    }
                },
                planting: {
                    title: {
                        tr: "İç Mekan Bitkilendirme",
                        en: "Indoor Planting"
                    },
                    title2: {
                        tr: "İç Mekan Bitkilendirme ile Doğayı Evinize Taşıyın",
                        en: "Bring Nature to Your Home with Indoor Planting"
                    },
                    content: {
                        tr: "Yaşam ve çalışma alanlarınızı yeşillendirmek için dekoratif bitkiler, saksılar, bakım ürünleri ve aksesuarlara kadar geniş ürün yelpazemizle hizmetinizdeyiz.",
                        en: "We are at your service with our wide range of decorative plants, pots, care products and accessories to green your living and working spaces."
                    }
                },
            }
        },
        reffereces: {
            title: {
                tr: "Referanslarımız",
                en: "Our References"
            },
        },
        our_stats: {
            title: {
                tr: "İstatistikler",
                en: "Our Stats"
            },
            title2: {
                tr: "Peyzaj Çalışmalarımız",
                en: "Our Landscaping Works"
            },
            content: {
                tr: "Yılların tecrübesiyle, yenilikçi peyzaj tasarımlarımız ve profesyonel ekiplerimizle mekanlarınızı güzelleştirmek için buradayız.",
                en: "With years of experience, we are here to beautify your spaces with our innovative landscape designs and professional teams."
            },
        },
        sss: {
            title: {
                tr: "Sıkça Sorulan Sorular",
                en: "Frequently Asked Questions"
            },
            text: {
                tr: "Hoş geldiniz! Forsa Kent Tasarım olarak, Türkiye'de sunduğumuz profesyonel peyzaj hizmetleriyle ilgili en sık sorulan soruları bu bölümde yanıtlıyoruz. Amacımız, peyzaj projelerinizi en verimli şekilde tasarlamak ve uygulamak. Aşağıda, hizmetlerimiz ve süreçlerimizle ilgili merak edilen tüm detayları bulabilirsiniz.",
                en: "Welcome! As Forsa Kent Tasarım, we answer the most frequently asked questions about the professional landscaping services we offer in Turkey in this section. Our aim is to design and implement your landscape projects in the most efficient way. Below, you can find all the details about our services and processes."
            },
            data: [
                {
                    title: {
                        tr: "1. Hangi peyzaj hizmetlerini sunuyorsunuz?",
                        en: "1. Which landscaping services do you offer?"
                    },
                    desc: {
                        tr: "Forsa Peyzaj olarak, bahçe tasarımı, peyzaj düzenlemesi, sulama sistemleri kurulumu, aydınlatma çözümleri, çim ekimi ve bakımı, dış mekan dekorasyonu gibi geniş bir hizmet yelpazesi sunuyoruz. İstanbul'daki tüm alanlara yönelik özelleştirilmiş çözümlerimizle peyzaj projelerinizi hayata geçiriyoruz.",
                        en: "As Forsa Landscape, we offer a wide range of services such as garden design, landscaping, irrigation systems installation, lighting solutions, grass planting and maintenance, outdoor decoration. We realize your landscaping projects with our customized solutions for all areas in Istanbul."
                    }
                },
                {
                    title: {
                        tr: "2. Hizmetleriniz hangi bölgelerinde geçerli?",
                        en: "2. In which regions are your services available?"
                    },
                    desc: {
                        tr: "Forsa Kent Tasarım, Türkiye’nin tüm bölgelerinde profesyonel hizmet sunmaktadır. Büyükşehirlerden küçük yerleşimlere kadar geniş bir hizmet ağıyla, peyzaj çözümleriyle her yerde yanınızdayız.",
                        en: "Forsa Urban Design offers professional services in all regions of Turkey. With a wide service network from metropolitan cities to small settlements, we are with you everywhere with landscaping solutions."
                    }
                },
                {
                    title: {
                        tr: "3. Peyzaj projeleri için nasıl bir süreç izliyorsunuz?",
                        en: "3. What is your process for landscape projects?"
                    },
                    desc: {
                        tr: "Projelerimiz, ilk görüşme ve alan incelemesi ile başlar. İhtiyaçlarınıza uygun bir tasarım önerisi sunarız ve onayınız sonrası uygulama aşamasına geçeriz. Peyzaj uygulamalarının tamamlanmasının ardından düzenli bakım ve izleme hizmeti de sunmaktayız.",
                        en: "Our projects start with an initial meeting and site survey. We offer a design proposal that suits your needs and after your approval, we proceed to the implementation phase. We also offer regular maintenance and monitoring services after the completion of the landscaping."
                    }
                },
                {
                    title: {
                        tr: "4. Peyzaj tasarımı için nasıl bir fiyatlandırma yapıyorsunuz?",
                        en: "4. How do you price landscape design?"
                    },
                    desc: {
                        tr: "Fiyatlandırmamız, projenin büyüklüğü, ihtiyaçlar ve tercih edilen malzemelere göre değişiklik gösterebilir. Her projeye özel bir teklif sunuyoruz. Ücretsiz keşif hizmeti ile alanınıza en uygun çözümü belirleyip fiyatlandırma yapıyoruz.",
                        en: "Our pricing may vary depending on the size of the project, needs and preferred materials. We offer a special offer for each project. With the free discovery service, we determine the most suitable solution for your area and make pricing."
                    }
                },
                {
                    title: {
                        tr: "5. Bahçem için bakım hizmeti alabilir miyim?",
                        en: "5. Can I get maintenance services for my garden?"
                    },
                    desc: {
                        tr: "Evet, belirli aralıklarla yapılan bahçe bakımı hizmetimiz bulunmaktadır. Çim biçme, bitki bakımı, sulama sistemleri kontrolleri ve temizlik gibi bakım işlemleri düzenli olarak yapılmaktadır.",
                        en: "Yes, we have a garden maintenance service that is carried out at regular intervals. Maintenance such as lawn mowing, plant care, irrigation system checks and cleaning are carried out regularly."
                    }
                },
                {
                    title: {
                        tr: "6. Peyzaj projelerinde kullanılan malzemeler konusunda tercihlerim var mı?",
                        en: "6. Do I have preferences about the materials used in landscape projects?"
                    },
                    desc: {
                        tr: "Elbette! Kullanacağımız malzemeler konusunda tamamen sizin tercihleriniz doğrultusunda hareket ediyoruz. Doğal taşlar, suni çimler, su özellikleri gibi farklı seçenekler arasında istediğiniz tarzda bir peyzaj tasarımı oluşturabiliyoruz.",
                        en: "Of course! We act completely in line with your preferences regarding the materials we will use. We can create a landscape design in the style you want among different options such as natural stones, artificial grass, water features."
                    }
                },
            ]
        }
    },
    projects: {
        title: {
            tr: "Projeler",
            en: "Our Projects"
        },
        desc: {
            tr: "Estetik, fonksiyonellik ve çevre dostu yaklaşımları bir araya getirerek, peyzaj alanında uçtan uca çözümler sunuyoruz. Tasarımdan uygulamaya, düzenli bakım hizmetlerinden danışmanlığa kadar her aşamada yanınızdayız.",
            en: "We offer end-to-end solutions in the field of landscaping by combining aesthetics, functionality and environmentally friendly approaches. From design to implementation, from regular maintenance services to consultancy, we are with you at every stage."
        },
    },
    references: {
        title: {
            tr: "Referanslarımız",
            en: "Our References"
        },
        desc: {
            tr: "Farklı sektörlerden değerli iş ortaklarımızla gerçekleştirdiğimiz projelerle gurur duyuyoruz. Kaliteli hizmet anlayışımız ve çözüm odaklı yaklaşımımızla, iş dünyasında güvenilir bir partner olmayı başardık. Referanslarımız, birlikte büyüdüğümüz ve başarı hikayeleri yazdığımız müşterilerimizi temsil ediyor.",
            en: "We are proud of the projects we have realized with our valuable business partners from different sectors. With our understanding of quality service and solution-oriented approach, we have succeeded in becoming a reliable partner in the business world. Our references represent our customers, with whom we have grown and written success stories."
        }
    },
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('tr');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'tr' ? 'en' : 'tr';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    const t = (textObj) => {
        if (!textObj) return '';
        return textObj[language] || textObj['tr'] || '';
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, texts, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}