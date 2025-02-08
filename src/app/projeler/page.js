"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "../../../src/context/LanguageContext";
import { supabase } from '../../../src/lib/supabaseClient';
import { toast } from 'react-hot-toast';

function Projeler() {
    const { texts, t, language } = useLanguage();
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                if (data) {
                    setProjects(data);
                }
            } catch (error) {
                console.error('Projeler yüklenirken hata:', error);
                toast.error('Projeler yüklenirken bir hata oluştu!');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
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
                <section className="container mx-auto px-8 py-20 lg:py-28">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-gray-900 mb-4">
                            {t(texts.projects.title)}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t(texts.projects.desc)}
                        </p>
                    </div>

                    {projects.length === 0 ? (
                        <div className="text-center text-gray-500">
                            {language === "tr" ? "Henüz proje eklenmemiş." : "No projects added yet."}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div 
                                    className="bg-white rounded-xl shadow-lg overflow-hidden relative" 
                                    key={project.id}
                                >
                                    {project.images && project.images.length > 0 && (
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={project.cover_image ? 
                                                    project.images.find(img => img.id === project.cover_image)?.url || project.images[0].url 
                                                    : project.images[0].url
                                                }
                                                alt={language === "tr" ? project.title_tr : project.title_en}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                            {language === "tr" ? project.title_tr : project.title_en}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {language === "tr" ? project.description_tr : project.description_en}
                                        </p>
                                        <Link
                                            href={`/projeler/${project.id}`}
                                            className="absolute bottom-3 left-6 text-blue-600 font-semibold hover:underline"
                                        >
                                            {language === "tr" ? "Detaylar" : "Details"}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Projeler;
