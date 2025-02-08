"use client"

import Image from 'next/image';
import { useLanguage } from "../../../src/context/LanguageContext";
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { supabase } from '../../../src/lib/supabaseClient';

function Referanslar() {
    const { texts, t } = useLanguage();
    const [references, setReferences] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReferences = async () => {
            try {
                const { data, error } = await supabase
                    .from('reference')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                if (data) {
                    setReferences(data);
                }
            } catch (error) {
                console.error('Referanslar yüklenirken hata:', error);
                toast.error('Referanslar yüklenirken bir hata oluştu!');
            } finally {
                setIsLoading(false);
            }
        };

        fetchReferences();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center mt-24">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div>
            <div className='mt-24'>
                <div className="min-h-screen bg-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                            {t(texts.references.title)}
                        </h1>
                        <p className="text-lg text-gray-600 text-center mb-12">
                            {t(texts.references.desc)}
                        </p>
                        
                        {references.length === 0 ? (
                            <div className="text-center text-gray-500">
                                Henüz referans eklenmemiş.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {references.map((reference) => (
                                    <div
                                        key={reference.id}
                                        className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transition hover:shadow-lg"
                                    >
                                        {reference.image?.url ? (
                                            <div className="w-32 h-32 relative mb-4">
                                                <Image
                                                    src={reference.image.url}
                                                    alt={reference.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-contain"
                                                    priority
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-32 h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-gray-400 text-3xl font-bold">
                                                    {reference.name?.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {reference.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Referanslar;
