'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ImageGallery2 from '@/components/image-gallery2';
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'react-hot-toast';

export default function ProjectDetails() {
    const { id } = useParams();
    const { language } = useLanguage();
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;

                if (data) {
                    setProject(data);
                } else {
                    toast.error('Proje bulunamadı!');
                }
            } catch (error) {
                console.error('Proje detayı yüklenirken hata:', error);
                toast.error('Proje detayı yüklenirken bir hata oluştu!');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchProject();
        }
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center mt-24">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center mt-24">
                <div className="text-center text-gray-500">
                    {language === "tr" ? "Proje bulunamadı." : "Project not found."}
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className='mt-24'>
                <section className="container mx-auto px-8 py-20 lg:py-28">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-gray-900 mb-4">
                            {language === "tr" ? project.title_tr : project.title_en}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {language === "tr" ? project.description_tr : project.description_en}
                        </p>
                    </div>

                    {project.images && project.images.length > 0 && (
                        <div className='space-y-12 mt-6 md:mt-12'>
                            <ImageGallery2 
                                Images={project.images.map(img => img.url)} 
                                priority={true}
                            />
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
} 