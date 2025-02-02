"use client";

import { createContext, useContext, useState, useEffect } from "react";

import { supabase } from "../lib/supabaseClient";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("tr");
    const [texts, setTexts] = useState({});

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

    useEffect(() => {
        fetchTexts(language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}