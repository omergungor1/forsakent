"use client";

import { createContext, useContext, useState, useEffect } from "react";

import { supabase } from "../lib/supabaseClient";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("tr");
    const [texts, setTexts] = useState({
        home_page: {
            text1: {
                tr: "Hayalinizdeki Mekanlar",
                en: "Dream Spaces"
            },
            text2: {
                tr: "Forsa Peyzaj",
                en: "Forsa Landscape"
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
                content1: {
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
        }
    });

    const fetchTexts = async (lang) => {
        // try {
        //     const { data, error } = await supabase
        //         .from("translations")
        //         .select("content")
        //         .eq("language", lang)
        //         .maybeSingle();
        //     //.single();

        //     if (error) throw error;

        //     if (!data) {
        //         console.warn("Veri bulunamadı, dil:", lang);
        //         setTexts({});
        //     }
        //     setTexts(data.content || {});
        // } catch (err) {
        //     console.error("Supabase Hatası:", err);
        //     return {};
        // }
    };

    const toggleLanguage = () => {
        setLanguage((lang) => (lang === "tr" ? "en" : "tr"));
    };

    function t(path) {
        return path[language] || path["tr"];
    }

    useEffect(() => {
        fetchTexts(language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, texts, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}