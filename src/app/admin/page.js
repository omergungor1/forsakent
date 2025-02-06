'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { Dialog } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { 
    Button, 
    Input, 
    Textarea, 
    Card, 
    CardBody, 
    CardHeader,
    Dialog as MaterialDialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';
import { Toaster, toast } from 'react-hot-toast';
import Image from 'next/image';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const menuItems = [
    { 
        id: 'dashboard', 
        label: 'Ana Sayfa', 
        icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' 
    },
    { 
        id: 'services', 
        label: 'Hizmetlerimiz', 
        icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        subItems: [
            { id: 'consulting', label: 'Danışmanlık' },
            { id: 'project-3d', label: 'Projelendirme 3D' },
            { id: 'application', label: 'Uygulama' },
            { id: 'maintenance', label: 'Bakım' },
            { id: 'indoor-planting', label: 'İç Mekan Bitkilendirme' }
        ]
    },
    { 
        id: 'projects', 
        label: 'Projeler', 
        icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' 
    },
    { 
        id: 'references', 
        label: 'Referanslar', 
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' 
    },
    { 
        id: 'contact', 
        label: 'İletişim', 
        icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' 
    }
];

const socialMediaPlatforms = [
    { id: 'facebook', label: 'Facebook', icon: '/icons/facebook.svg' },
    { id: 'instagram', label: 'Instagram', icon: '/icons/instagram.svg' },
    { id: 'youtube', label: 'YouTube', icon: '/icons/youtube.svg' },
    { id: 'linkedin', label: 'LinkedIn', icon: '/icons/linkedin.svg' },
    { id: 'twitter', label: 'Twitter', icon: '/icons/twitter.svg' }
];

const DashboardContent = () => (
    <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel'e Hoş Geldiniz</h1>
        <div className="prose max-w-none">
            <h2>Panel Kullanım Kılavuzu</h2>
            <ul>
                <li><strong>Hizmetlerimiz:</strong> Her hizmet için Türkçe ve İngilizce içerik düzenleyebilir, resim ekleyebilirsiniz.</li>
                <li><strong>Projeler:</strong> Tüm projelerinizi yönetebilir, düzenleyebilir ve silebilirsiniz.</li>
                <li><strong>Referanslar:</strong> Referans listesini güncelleyebilir, yeni referanslar ekleyebilirsiniz.</li>
                <li><strong>İletişim:</strong> İletişim bilgilerini ve sosyal medya hesaplarını yönetebilirsiniz.</li>
            </ul>
        </div>
    </div>
);

const ServicesContent = ({ 
    activeSubSection, 
    setActiveSubSection, 
    contentTR, 
    setContentTR, 
    contentEN, 
    setContentEN,
    images,
    handleDeleteImage,
    handleFileUpload,
    handleSave 
}) => (
    <div className="space-y-6">
        <div className="flex space-x-4 mb-6">
            {menuItems.find(item => item.id === 'services').subItems.map(subItem => (
                <button
                    key={subItem.id}
                    onClick={() => setActiveSubSection(subItem.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200
                        ${activeSubSection === subItem.id 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                    {subItem.label}
                </button>
            ))}
        </div>
        
        {activeSubSection && (
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold mb-2">Türkçe İçerik</h3>
                        <Textarea
                            value={contentTR}
                            onChange={(e) => setContentTR(e.target.value)}
                            className="w-full min-h-[400px] p-3 border rounded-lg resize-none"
                            placeholder="Türkçe içeriği buraya girin..."
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">İngilizce İçerik</h3>
                        <Textarea
                            value={contentEN}
                            onChange={(e) => setContentEN(e.target.value)}
                            className="w-full min-h-[400px] p-3 border rounded-lg resize-none"
                            placeholder="Enter English content here..."
                        />
                    </div>
                </div>

                <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Resimler</h3>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative group">
                                <Image 
                                    src={image.url} 
                                    alt=""
                                    width={128}
                                    height={128}
                                    className="w-full h-32 object-cover rounded-lg"
                                />
                                <button
                                    onClick={() => handleDeleteImage(image.id)}
                                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="image-upload"
                    />
                    <label
                        htmlFor="image-upload"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                    >
                        Resim Yükle
                    </label>
                </div>

                <Button 
                    onClick={handleSave}
                    color="blue"
                    className="mt-6"
                >
                    Kaydet
                </Button>
            </div>
        )}
    </div>
);

const ProjectsContent = ({
    projects,
    setProjects,
    handleFileUpload,
    handleDeleteImage
}) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectToDelete, setProjectToDelete] = useState(null);

    // Projeleri çekmek için useEffect
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setProjects(data || []);
            } catch (error) {
                console.error('Projeleri çekerken hata:', error);
                toast.error('Projeler yüklenirken bir hata oluştu!');
            }
        };

        fetchProjects();
    }, [setProjects]);

    // Proje için özel resim yükleme fonksiyonu
    const handleProjectImageUpload = async (event) => {
        const files = event.target.files;
        const newImages = [];

        for (const file of files) {
            if (!file.type.startsWith('image/')) {
                toast.error('Lütfen sadece resim dosyası yükleyin!');
                continue;
            }

            const fileSize = file.size / 1024 / 1024;
            if (fileSize > 5) {
                toast.error("Dosya boyutu 5MB'dan küçük olmalıdır!");
                continue;
            }

            try {
                const fileName = `projects/${Date.now()}-${file.name}`;
                const { data, error } = await supabase.storage
                    .from('images')
                    .upload(fileName, file);

                if (error) throw error;

                const { data: urlData } = supabase.storage
                    .from('images')
                    .getPublicUrl(data.path);

                newImages.push({
                    id: data.path,
                    url: urlData.publicUrl
                });
            } catch (error) {
                console.error('Resim yükleme hatası:', error);
                toast.error('Resim yüklenirken bir hata oluştu!');
            }
        }

        if (newImages.length > 0) {
            const updatedImages = [...(selectedProject.images || []), ...newImages];
            setSelectedProject({
                ...selectedProject,
                images: updatedImages,
                // Eğer kapak fotosu yoksa, ilk yüklenen resmi kapak yap
                cover_image: selectedProject.cover_image || newImages[0].id
            });
        }
    };

    const handleSaveProject = async (project) => {
        // Kapak fotosu kontrolü
        if (!project.images?.length) {
            toast.error('En az bir resim yüklemelisiniz!');
            return;
        }

        // Kapak fotosu seçili değilse ilk resmi kapak yap
        if (!project.cover_image) {
            project.cover_image = project.images[0].id;
        }

        try {
            const { data, error } = await supabase
                .from('projects')
                .upsert({
                    id: project.id || undefined,
                    title_tr: project.title_tr,
                    title_en: project.title_en,
                    description_tr: project.description_tr,
                    description_en: project.description_en,
                    images: project.images,
                    cover_image: project.cover_image,
                    updated_at: new Date().toISOString()
                })
                .select()
                .single();

            if (error) throw error;

            if (project.id) {
                setProjects(projects.map(p => p.id === data.id ? data : p));
            } else {
                setProjects([data, ...projects]);
            }
            
            setSelectedProject(null);
            toast.success('Proje başarıyla kaydedildi!');
        } catch (error) {
            console.error('Proje kaydetme hatası:', error);
            toast.error('Proje kaydedilirken bir hata oluştu!');
        }
    };

    const handleDeleteProject = async (project) => {
        try {
            // Önce projenin tüm resimlerini storage'dan sil
            if (project.images && project.images.length > 0) {
                const imageIds = project.images.map(img => img.id);
                const { error: storageError } = await supabase.storage
                    .from('images')
                    .remove(imageIds);

                if (storageError) throw storageError;
            }

            // Sonra projeyi veritabanından sil
            const { error } = await supabase
                .from('projects')
                .delete()
                .eq('id', project.id);

            if (error) throw error;

            setProjects(projects.filter(p => p.id !== project.id));
            setProjectToDelete(null);
            toast.success('Proje başarıyla silindi!');
        } catch (error) {
            console.error('Proje silme hatası:', error);
            toast.error('Proje silinirken bir hata oluştu!');
        }
    };

    // Resim silme fonksiyonunu güncelleyelim
    const handleProjectImageDelete = async (imageId, projectId, imageIndex) => {
        try {
            // Kapak fotosu siliniyorsa kontrol et
            if (imageId === selectedProject.cover_image) {
                // Başka resim varsa ilk resmi kapak yap
                const remainingImages = selectedProject.images.filter((_, i) => i !== imageIndex);
                if (remainingImages.length > 0) {
                    selectedProject.cover_image = remainingImages[0].id;
                }
            }

            // Önce storage'dan sil
            const { error: storageError } = await supabase.storage
                .from('images')
                .remove([imageId]);

            if (storageError) throw storageError;

            // Sonra projeden sil
            const updatedProject = {
                ...selectedProject,
                images: selectedProject.images.filter((_, i) => i !== imageIndex),
                cover_image: selectedProject.cover_image === imageId 
                    ? (selectedProject.images.filter((_, i) => i !== imageIndex)[0]?.id || null)
                    : selectedProject.cover_image
            };

            // Projeyi güncelle
            const { error: updateError } = await supabase
                .from('projects')
                .update({ images: updatedProject.images })
                .eq('id', projectId);

            if (updateError) throw updateError;

            // State'i güncelle
            setSelectedProject(updatedProject);

            toast.success('Resim başarıyla silindi!');
        } catch (error) {
            console.error('Resim silme hatası:', error);
            toast.error('Resim silinirken bir hata oluştu!');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                {!selectedProject && <h2 className="text-xl font-bold">Projeler ({projects.length})</h2>}
                {!selectedProject && <Button
                    color="blue"
                    onClick={() => setSelectedProject({})}
                >
                    Yeni Proje Ekle
                </Button>}
            </div>

            {/* Silme Onay Modalı */}
            <MaterialDialog
                open={projectToDelete !== null}
                handler={() => setProjectToDelete(null)}
                size="sm"
                className="bg-white shadow-2xl rounded-xl"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader className="border-b border-gray-100 text-xl font-medium text-gray-700 px-6 py-4">
                    <div className="flex items-center gap-2">
                        <svg 
                            className="w-6 h-6 text-red-500" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                            />
                        </svg>
                        Projeyi Sil
                    </div>
                </DialogHeader>
                <DialogBody className="px-6 py-4">
                    <div className="space-y-3">
                        <p className="text-gray-600">
                            <span className="font-medium text-gray-900">{projectToDelete?.title_tr}</span> projesini silmek istediğinizden emin misiniz?
                        </p>
                        <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            ⚠️ Bu işlem geri alınamaz ve projeye ait tüm resimler de silinecektir.
                        </p>
                    </div>
                </DialogBody>
                <DialogFooter className="border-t border-gray-100 px-6 py-4 flex justify-end gap-3">
                    <Button
                        variant="text"
                        color="gray"
                        onClick={() => setProjectToDelete(null)}
                        className="font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 focus:ring-2 focus:ring-gray-100"
                    >
                        Vazgeç
                    </Button>
                    <Button
                        variant="filled"
                        color="red"
                        onClick={() => handleDeleteProject(projectToDelete)}
                        className="bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-200 px-6"
                    >
                        Sil
                    </Button>
                </DialogFooter>
            </MaterialDialog>

            {/* Proje Listesi */}
            {!selectedProject && (
                <div className="grid gap-4">
                    {projects.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            Henüz proje eklenmemiş.
                        </div>
                    ) : (
                        projects.map((project) => (
                            <Card key={project.id} className="p-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-4">
                                        {/* Proje Resmi */}
                                        {project.images && project.images[0] && (
                                            <Image 
                                                src={project.images[0].url} 
                                                alt={project.title_tr}
                                                width={96}
                                                height={96}
                                                className="object-cover rounded-lg"
                                            />
                                        )}
                                        <div>
                                            <h3 className="font-semibold text-lg">{project.title_tr}</h3>
                                            <p className="text-gray-600">{project.title_en}</p>
                                            <p className="text-sm text-gray-500 mt-2">
                                                {new Date(project.created_at).toLocaleDateString('tr-TR')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button
                                            color="blue"
                                            size="sm"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            Düzenle
                                        </Button>
                                        <Button
                                            color="red"
                                            size="sm"
                                            onClick={() => setProjectToDelete(project)}
                                        >
                                            Sil
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            )}

            {/* Proje Düzenleme/Ekleme Formu */}
            {selectedProject && (
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-2">Türkçe Başlık</h3>
                            <Input
                                value={selectedProject.title_tr || ''}
                                onChange={(e) => setSelectedProject({
                                    ...selectedProject,
                                    title_tr: e.target.value
                                })}
                                className="mb-4"
                            />
                            <h3 className="font-semibold my-2">Türkçe Açıklama</h3>
                            <Textarea
                                value={selectedProject.description_tr || ''}
                                onChange={(e) => setSelectedProject({
                                    ...selectedProject,
                                    description_tr: e.target.value
                                })}
                                className="min-h-[200px]"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">İngilizce Başlık</h3>
                            <Input
                                value={selectedProject.title_en || ''}
                                onChange={(e) => setSelectedProject({
                                    ...selectedProject,
                                    title_en: e.target.value
                                })}
                                className="mb-4"
                            />
                            <h3 className="font-semibold my-2">İngilizce Açıklama</h3>
                            <Textarea
                                value={selectedProject.description_en || ''}
                                onChange={(e) => setSelectedProject({
                                    ...selectedProject,
                                    description_en: e.target.value
                                })}
                                className="min-h-[200px]"
                            />
                        </div>
                    </div>

                    {/* Resim Yükleme Alanı */}
                    <div className="border-t pt-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold">Proje Resimleri</h3>
                            {selectedProject.images?.length > 0 && (
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">Kapak Resmi:</span>
                                    <select
                                        value={selectedProject.cover_image || ''}
                                        onChange={(e) => setSelectedProject({
                                            ...selectedProject,
                                            cover_image: e.target.value
                                        })}
                                        className="border rounded-md px-2 py-1 text-sm"
                                    >
                                        <option value="">Seçiniz</option>
                                        {selectedProject.images.map((image, idx) => (
                                            <option key={idx} value={image.id}>
                                                Resim {idx + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-4 gap-4 mb-4">
                            {selectedProject.images?.map((image, index) => (
                                <div key={index} className="relative group">
                                    <Image 
                                        src={image.url} 
                                        alt=""
                                        width={128}
                                        height={128}
                                        className={`w-full h-32 object-cover rounded-lg ${
                                            selectedProject.cover_image === image.id ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                    />
                                    <div className="absolute top-2 right-2 flex gap-1">
                                        <button
                                            onClick={() => setSelectedProject({
                                                ...selectedProject,
                                                cover_image: image.id
                                            })}
                                            className="p-1 bg-blue-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            title="Kapak resmi yap"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleProjectImageDelete(image.id, selectedProject.id, index)}
                                            className="p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            title="Resmi sil"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleProjectImageUpload}
                            className="hidden"
                            id="project-image-upload"
                        />
                        <label
                            htmlFor="project-image-upload"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                        >
                            Resim Yükle
                        </label>
                    </div>

                    <div className="flex space-x-4">
                        <Button
                            color="blue"
                            onClick={() => handleSaveProject(selectedProject)}
                        >
                            Kaydet
                        </Button>
                        <Button
                            color="gray"
                            onClick={() => setSelectedProject(null)}
                        >
                            İptal
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

const ReferencesContent = ({
    references,
    setReferences,
    handleFileUpload,
    handleDeleteImage
}) => {
    const [selectedReference, setSelectedReference] = useState(null);
    const [referenceToDelete, setReferenceToDelete] = useState(null);

    // Referansları çekmek için useEffect
    useEffect(() => {
        const fetchReferences = async () => {
            try {
                const { data, error } = await supabase
                    .from('reference')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setReferences(data || []);
            } catch (error) {
                console.error('Referansları çekerken hata:', error);
                toast.error('Referanslar yüklenirken bir hata oluştu!');
            }
        };

        fetchReferences();
    }, [setReferences]);

    // Referans için resim yükleme
    const handleReferenceImageUpload = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast.error('Lütfen sadece resim dosyası yükleyin!');
            return;
        }

        const fileSize = file.size / 1024 / 1024;
        if (fileSize > 5) {
            toast.error("Dosya boyutu 5MB'dan küçük olmalıdır!");
            return;
        }

        try {
            const fileName = `reference/${Date.now()}-${file.name}`;
            const { data, error } = await supabase.storage
                .from('images')
                .upload(fileName, file);

            if (error) throw error;

            const { data: urlData } = supabase.storage
                .from('images')
                .getPublicUrl(data.path);

            setSelectedReference({
                ...selectedReference,
                image: {
                    id: data.path,
                    url: urlData.publicUrl
                }
            });
        } catch (error) {
            console.error('Resim yükleme hatası:', error);
            toast.error('Resim yüklenirken bir hata oluştu!');
        }
    };

    // Referans kaydetme
    const handleSaveReference = async (reference) => {
        if (!reference.name?.trim()) {
            toast.error('Referans adı zorunludur!');
            return;
        }

        if (!reference.image) {
            toast.error('Referans logosu zorunludur!');
            return;
        }

        try {
            const { data, error } = await supabase
                .from('reference')
                .upsert({
                    id: reference.id || undefined,
                    name: reference.name.trim(),
                    image: reference.image,
                    updated_at: new Date().toISOString()
                })
                .select('*')
                .single();

            if (error) {
                console.error('Supabase error:', error);
                throw error;
            }

            if (!data) {
                throw new Error('No data returned from Supabase');
            }

            // State'i güncelle
            if (reference.id) {
                setReferences(references.map(r => r.id === data.id ? data : r));
            } else {
                setReferences([data, ...references]);
            }
            
            setSelectedReference(null);
            toast.success('Referans başarıyla kaydedildi!');
        } catch (error) {
            console.error('Referans kaydetme hatası:', error);
            toast.error('Referans kaydedilirken bir hata oluştu!');
        }
    };

    // Referans silme
    const handleDeleteReference = async (reference) => {
        try {
            // Önce resmi storage'dan sil
            if (reference.image?.id) {
                const { error: storageError } = await supabase.storage
                    .from('images')
                    .remove([reference.image.id]);

                if (storageError) throw storageError;
            }

            // Sonra referansı veritabanından sil
            const { error } = await supabase
                .from('reference')
                .delete()
                .eq('id', reference.id);

            if (error) throw error;

            setReferences(references.filter(r => r.id !== reference.id));
            setReferenceToDelete(null);
            toast.success('Referans başarıyla silindi!');
        } catch (error) {
            console.error('Referans silme hatası:', error);
            toast.error('Referans silinirken bir hata oluştu!');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                {!selectedReference && <h2 className="text-xl font-bold">Referanslar ({references.length})</h2>}
                {!selectedReference && <Button
                    color="blue"
                    onClick={() => setSelectedReference({})}
                >
                    Yeni Referans Ekle
                </Button>}
            </div>

            {/* Silme Onay Modalı */}
            <MaterialDialog
                open={referenceToDelete !== null}
                handler={() => setReferenceToDelete(null)}
                size="sm"
                className="bg-white shadow-2xl rounded-xl"
            >
                <DialogHeader className="border-b border-gray-100 text-xl font-medium text-gray-700 px-6 py-4">
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Referansı Sil
                    </div>
                </DialogHeader>
                <DialogBody className="px-6 py-4">
                    <p className="text-gray-600">
                        <span className="font-medium text-gray-900">{referenceToDelete?.name}</span> referansını silmek istediğinizden emin misiniz?
                    </p>
                </DialogBody>
                <DialogFooter className="border-t border-gray-100 px-6 py-4 flex justify-end gap-3">
                    <Button
                        variant="text"
                        color="gray"
                        onClick={() => setReferenceToDelete(null)}
                        className="font-medium text-gray-600 hover:text-gray-800"
                    >
                        Vazgeç
                    </Button>
                    <Button
                        variant="filled"
                        color="red"
                        onClick={() => handleDeleteReference(referenceToDelete)}
                        className="bg-red-500 hover:bg-red-600"
                    >
                        Sil
                    </Button>
                </DialogFooter>
            </MaterialDialog>

            {/* Referans Listesi */}
            {!selectedReference && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {references.length === 0 ? (
                        <div className="col-span-full text-center py-8 text-gray-500">
                            Henüz referans eklenmemiş.
                        </div>
                    ) : (
                        references.map((reference) => (
                            <Card key={reference.id} className="p-4">
                                <div className="space-y-4">
                                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                                        <Image 
                                            src={reference.image?.url} 
                                            alt={reference.name}
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">{reference.name}</h3>
                                        <div className="mt-2 flex gap-2">
                                            <Button
                                                color="blue"
                                                size="sm"
                                                onClick={() => setSelectedReference(reference)}
                                                className="flex-1"
                                            >
                                                Düzenle
                                            </Button>
                                            <Button
                                                color="red"
                                                size="sm"
                                                onClick={() => setReferenceToDelete(reference)}
                                                className="flex-1"
                                            >
                                                Sil
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            )}

            {/* Referans Ekleme/Düzenleme Formu */}
            {selectedReference && (
                <div className="space-y-6 max-w-md mx-auto">
                    <div>
                        <h3 className="font-semibold mb-2">Referans Adı</h3>
                        <Input
                            value={selectedReference.name || ''}
                            onChange={(e) => setSelectedReference({
                                ...selectedReference,
                                name: e.target.value
                            })}
                            placeholder="Referans adını girin"
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Referans Logosu</h3>
                        <div className="border rounded-lg p-4 space-y-4">
                            {selectedReference.image ? (
                                <div className="relative aspect-square w-full max-w-[200px] mx-auto">
                                    <Image 
                                        src={selectedReference.image.url} 
                                        alt=""
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-contain"
                                    />
                                    <button
                                        onClick={() => setSelectedReference({
                                            ...selectedReference,
                                            image: null
                                        })}
                                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleReferenceImageUpload}
                                        className="hidden"
                                        id="reference-image-upload"
                                    />
                                    <label
                                        htmlFor="reference-image-upload"
                                        className="block text-center p-8 border-2 border-dashed rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                                    >
                                        <div className="space-y-2">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <div className="text-gray-600">Logo yüklemek için tıklayın</div>
                                            <div className="text-sm text-gray-500">PNG, JPG, GIF (max. 5MB)</div>
                                        </div>
                                    </label>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button
                            color="blue"
                            onClick={() => handleSaveReference(selectedReference)}
                            className="flex-1"
                        >
                            Kaydet
                        </Button>
                        <Button
                            color="gray"
                            onClick={() => setSelectedReference(null)}
                            className="flex-1"
                        >
                            İptal
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default function AdminPanel() {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [activeSubSection, setActiveSubSection] = useState('');
    const [user, setUser] = useState();
    const router = useRouter();

    // Form states
    const [contentTR, setContentTR] = useState('');
    const [contentEN, setContentEN] = useState('');
    const [images, setImages] = useState([
        {
            id: '1',
            url: '/image/img1.jpg'
        },
        {
            id: '2',
            url: '/image/img2.jpg'
        },
        {
            id: '3',
            url: '/image/img3.jpg'
        }
    ]);
    const [projects, setProjects] = useState([]);
    const [references, setReferences] = useState([]);
    const [contact, setContact] = useState({
        phone: '',
        address: '',
        email: '',
        socialMedia: []
    });

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getUser();
            if (!data.user) {
                router.push('/admin/login');
                return;
            }
            setUser(data.user);
        };
        checkUser();
    }, [router]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    const handleFileUpload = async (event) => {
        const files = event.target.files;
        const newImages = [];

        for (const file of files) {
            if (!file.type.startsWith('image/')) {
                alert('Lütfen sadece resim dosyası yükleyin!');
                continue;
            }

            const fileSize = file.size / 1024 / 1024; // MB cinsinden
            if (fileSize > 5) {
                alert('Dosya boyutu 5MB\'dan küçük olmalıdır!');
                continue;
            }

            try {
                const fileName = `${Date.now()}-${file.name}`;
                const { data, error } = await supabase.storage
                    .from('images')
                    .upload(fileName, file);

                if (error) throw error;

                const { data: urlData } = supabase.storage
                    .from('images')
                    .getPublicUrl(data.path);

                newImages.push({
                    id: data.path,
                    url: urlData.publicUrl
                });
            } catch (error) {
                console.error('Resim yükleme hatası:', error);
                alert('Resim yüklenirken bir hata oluştu!');
            }
        }

        setImages([...images, ...newImages]);
    };

    const handleDeleteImage = async (imageId) => {
        try {
            const { error } = await supabase.storage
                .from('images')
                .remove([imageId]);

            if (error) throw error;

            setImages(images.filter(img => img.id !== imageId));
        } catch (error) {
            console.error('Resim silme hatası:', error);
            alert('Resim silinirken bir hata oluştu!');
        }
    };

    const handleSave = async () => {
        try {
            const { error } = await supabase
                .from(activeSection)
                .upsert({
                    id: activeSubSection,
                    content_tr: contentTR,
                    content_en: contentEN,
                    images: images,
                    updated_at: new Date().toISOString()
                });

            if (error) throw error;
            alert('Değişiklikler başarıyla kaydedildi!');
        } catch (error) {
            console.error('Kaydetme hatası:', error);
            alert('Kaydetme sırasında bir hata oluştu!');
        }
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard':
                return <DashboardContent />;
            case 'services':
                return <ServicesContent 
                    activeSubSection={activeSubSection}
                    setActiveSubSection={setActiveSubSection}
                    contentTR={contentTR}
                    setContentTR={setContentTR}
                    contentEN={contentEN}
                    setContentEN={setContentEN}
                    images={images}
                    handleDeleteImage={handleDeleteImage}
                    handleFileUpload={handleFileUpload}
                    handleSave={handleSave}
                />;
            case 'projects':
                return <ProjectsContent 
                    projects={projects}
                    setProjects={setProjects}
                    handleFileUpload={handleFileUpload}
                    handleDeleteImage={handleDeleteImage}
                />;
            case 'references':
                return <ReferencesContent 
                    references={references}
                    setReferences={setReferences}
                    handleFileUpload={handleFileUpload}
                    handleDeleteImage={handleDeleteImage}
                />;
            // Diğer case'ler için de benzer şekilde component'ler eklenecek
        }
    };

    if (!user) return null;

    return (
        <div className="flex h-screen bg-gray-100">
            <Toaster 
                position="bottom-right"
                toastOptions={{
                    success: {
                        style: {
                            background: '#10B981',
                            color: 'white',
                        },
                        iconTheme: {
                            primary: 'white',
                            secondary: '#10B981',
                        },
                    },
                    error: {
                        style: {
                            background: '#EF4444',
                            color: 'white',
                        },
                        iconTheme: {
                            primary: 'white',
                            secondary: '#EF4444',
                        },
                    },
                    duration: 3000,
                }}
            />
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg">
                <div className="flex flex-col h-full">
                    {/* Logo/Header Alanı */}
                    <div className="p-6 border-b">
                        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 p-4">
                        <div className="space-y-2">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 group
                                        ${activeSection === item.id 
                                            ? 'bg-blue-50 text-blue-700' 
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5 mr-3" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d={item.icon} 
                                        />
                                    </svg>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </nav>

                    {/* Çıkış Butonu */}
                    <div className="p-4 border-t">
                        <button 
                            onClick={handleSignOut}
                            className="flex items-center w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200 group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 group-hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Çıkış Yap
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-auto">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
