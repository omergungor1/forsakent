'use client';

import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
    setActiveSubSection
}) => {
    const [albums, setAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [newAlbumName, setNewAlbumName] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [albumToDelete, setAlbumToDelete] = useState(null);

    // Albümleri çek
    useEffect(() => {
        const fetchAlbums = async () => {
            if (!activeSubSection) return;

            try {
                const { data, error } = await supabase
                    .from('services')
                    .select('albums')
                    .eq('service_type', activeSubSection)
                    .single();

                if (error) throw error;
                setAlbums(data.albums || []);
            } catch (error) {
                console.error('Albümler yüklenirken hata:', error);
                toast.error('Albümler yüklenirken bir hata oluştu!');
            }
        };

        fetchAlbums();
    }, [activeSubSection]);

    // Yeni albüm oluştur
    const handleCreateAlbum = async () => {
        if (!newAlbumName.trim()) {
            toast.error('Albüm adı boş olamaz!');
            return;
        }

        const newAlbum = {
            id: crypto.randomUUID(),
            name: newAlbumName.trim(),
            images: []
        };

        try {
            const updatedAlbums = [...albums, newAlbum];
            const { error } = await supabase
                .from('services')
                .update({ 
                    albums: updatedAlbums,
                    updated_at: new Date().toISOString()
                })
                .eq('service_type', activeSubSection);

            if (error) throw error;

            setAlbums(updatedAlbums);
            setNewAlbumName('');
            toast.success('Yeni albüm oluşturuldu!');
        } catch (error) {
            console.error('Albüm oluşturma hatası:', error);
            toast.error('Albüm oluşturulurken bir hata oluştu!');
        }
    };

    // Albüme resim yükle
    const handleUploadImages = async (event, albumId) => {
        const files = event.target.files;
        if (!files.length) return;

        setIsUploading(true);
        const newImages = [];

        try {
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

                const fileName = `services/${activeSubSection}/${albumId}/${Date.now()}-${file.name}`;
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

                toast.success(`${file.name} başarıyla yüklendi!`);
            }

            // Albümü güncelle
            const updatedAlbums = albums.map(album => {
                if (album.id === albumId) {
                    return {
                        ...album,
                        images: [...album.images, ...newImages]
                    };
                }
                return album;
            });

            const { error } = await supabase
                .from('services')
                .update({ 
                    albums: updatedAlbums,
                    updated_at: new Date().toISOString()
                })
                .eq('service_type', activeSubSection);

            if (error) throw error;

            setAlbums(updatedAlbums);
        } catch (error) {
            console.error('Resim yükleme hatası:', error);
            toast.error('Resimler yüklenirken bir hata oluştu!');
        } finally {
            setIsUploading(false);
        }
    };

    // Albümü sil
    const handleDeleteAlbum = async (albumId) => {
        try {
            // Önce albümdeki tüm resimleri storage'dan sil
            const album = albums.find(a => a.id === albumId);
            if (album?.images?.length) {
                const { error: storageError } = await supabase.storage
                    .from('images')
                    .remove(album.images.map(img => img.id));

                if (storageError) throw storageError;
            }

            // Sonra albümü listeden çıkar
            const updatedAlbums = albums.filter(a => a.id !== albumId);
            const { error } = await supabase
                .from('services')
                .update({ 
                    albums: updatedAlbums,
                    updated_at: new Date().toISOString()
                })
                .eq('service_type', activeSubSection);

            if (error) throw error;

            setAlbums(updatedAlbums);
            toast.success('Albüm başarıyla silindi!');
        } catch (error) {
            console.error('Albüm silme hatası:', error);
            toast.error('Albüm silinirken bir hata oluştu!');
        }
    };

    // Albümden resim sil
    const handleDeleteImage = async (albumId, imageId) => {
        try {
            // Storage'dan resmi sil
            const { error: storageError } = await supabase.storage
                .from('images')
                .remove([imageId]);

            if (storageError) throw storageError;

            // Albümden resmi çıkar
            const updatedAlbums = albums.map(album => {
                if (album.id === albumId) {
                    return {
                        ...album,
                        images: album.images.filter(img => img.id !== imageId)
                    };
                }
                return album;
            });

            const { error } = await supabase
                .from('services')
                .update({ 
                    albums: updatedAlbums,
                    updated_at: new Date().toISOString()
                })
                .eq('service_type', activeSubSection);

            if (error) throw error;

            setAlbums(updatedAlbums);
            toast.success('Resim başarıyla silindi!');
        } catch (error) {
            console.error('Resim silme hatası:', error);
            toast.error('Resim silinirken bir hata oluştu!');
        }
    };

    return (
        <div className="space-y-6">
            {/* Tab Menüsü */}
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
                    {/* Yeni Albüm Oluşturma */}
                    <Card className="bg-white">
                        <CardBody className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Yeni Albüm Oluştur</h3>
                            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                                <div className="max-w-2xl">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Albüm Adı
                                    </label>
                                    <div className="flex gap-4">
                                        <Input
                                            value={newAlbumName}
                                            onChange={(e) => setNewAlbumName(e.target.value)}
                                            placeholder="Örn: 2023 Projeleri"
                                            className="flex-1"
                                            size="lg"
                                        />
                                        <Button
                                            color="blue"
                                            size="lg"
                                            onClick={handleCreateAlbum}
                                            className="px-6"
                                        >
                                            Albüm Oluştur
                                        </Button>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Albüm oluşturduktan sonra içine resim ekleyebilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* Mevcut Albümler */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Mevcut Albümler ({albums.length})</h3>
                        {albums.length === 0 ? (
                            <div className="text-center py-12 bg-gray-50 rounded-xl">
                                <p className="text-gray-500">Henüz albüm oluşturulmamış.</p>
                                <p className="text-sm text-gray-400 mt-1">Yukarıdaki formu kullanarak yeni bir albüm oluşturabilirsiniz.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {albums.map((album) => (
                                    <Card key={album.id} className="overflow-hidden">
                                        <CardHeader className="flex justify-between items-center p-6 border-b">
                                            <h3 className="text-xl font-semibold text-gray-800">{album.name}</h3>
                                            <div className="flex gap-3">
                                                <input
                                                    type="file"
                                                    accept="image/jpeg,image/png,image/gif"
                                                    multiple
                                                    onChange={(e) => handleUploadImages(e, album.id)}
                                                    className="hidden"
                                                    id={`album-image-upload-${album.id}`}
                                                    disabled={isUploading}
                                                />
                                                <label
                                                    htmlFor={`album-image-upload-${album.id}`}
                                                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium
                                                        ${isUploading 
                                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer'}`}
                                                >
                                                    <svg 
                                                        className="w-5 h-5 mr-2" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            strokeWidth="2" 
                                                            d="M12 4v16m8-8H4" 
                                                        />
                                                    </svg>
                                                    {isUploading ? 'Yükleniyor...' : 'Resim Ekle'}
                                                </label>
                                                <Button
                                                    color="red"
                                                    variant="text"
                                                    size="sm"
                                                    onClick={() => setAlbumToDelete(album)}
                                                    className="flex items-center gap-2"
                                                >
                                                    <svg 
                                                        className="w-5 h-5" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            strokeWidth="2" 
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                                                    />
                                                    </svg>
                                                    Albümü Sil
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="p-6">
                                            {album.images.length === 0 ? (
                                                <div className="text-center py-8 text-gray-500">
                                                    <p>Bu albümde henüz resim yok.</p>
                                                    <p className="text-sm text-gray-400 mt-1">Yukarıdaki "Resim Ekle" butonunu kullanarak resim ekleyebilirsiniz.</p>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                                    {album.images.map((image) => (
                                                        <div key={image.id} className="relative group">
                                                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-50">
                                                                <Image
                                                                    src={image.url}
                                                                    alt=""
                                                                    width={200}
                                                                    height={200}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                            <button
                                                                onClick={() => handleDeleteImage(album.id, image.id)}
                                                                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                                                title="Resmi sil"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Albüm Silme Onay Modalı */}
            <MaterialDialog
                open={albumToDelete !== null}
                handler={() => setAlbumToDelete(null)}
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
                        Albümü Sil
                    </div>
                </DialogHeader>
                <DialogBody className="px-6 py-4">
                    <div className="space-y-3">
                        <p className="text-gray-600">
                            <span className="font-medium text-gray-900">{albumToDelete?.name}</span> albümünü silmek istediğinizden emin misiniz?
                        </p>
                        <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            ⚠️ Bu işlem geri alınamaz ve albümdeki tüm resimler kalıcı olarak silinecektir.
                        </p>
                    </div>
                </DialogBody>
                <DialogFooter className="border-t border-gray-100 px-6 py-4 flex justify-end gap-3">
                    <Button
                        variant="text"
                        color="gray"
                        onClick={() => setAlbumToDelete(null)}
                        className="font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 focus:ring-2 focus:ring-gray-100"
                    >
                        Vazgeç
                    </Button>
                    <Button
                        variant="filled"
                        color="red"
                        onClick={() => {
                            handleDeleteAlbum(albumToDelete.id);
                            setAlbumToDelete(null);
                        }}
                        className="bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-200 px-6"
                    >
                        Sil
                    </Button>
                </DialogFooter>
            </MaterialDialog>
        </div>
    );
};

const ProjectsContent = ({
    projects,
    setProjects,
    handleFileUpload,
    handleDeleteImage
}) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectToDelete, setProjectToDelete] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

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
        setIsUploading(true);
        const files = event.target.files;
        const newImages = [];

        try {
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

                    toast.success(`${file.name} başarıyla yüklendi!`);
                } catch (error) {
                    console.error('Resim yükleme hatası:', error);
                    toast.error(`${file.name} yüklenirken hata oluştu!`);
                }
            }

            if (newImages.length > 0) {
                const updatedImages = [...(selectedProject.images || []), ...newImages];
                setSelectedProject({
                    ...selectedProject,
                    images: updatedImages,
                    cover_image: selectedProject.cover_image || newImages[0].id
                });
            }
        } finally {
            setIsUploading(false);
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
            const remainingImages = selectedProject.images.filter((_, i) => i !== imageIndex);
            const newCoverImage = selectedProject.cover_image === imageId 
                ? (remainingImages[0]?.id || null)
                : selectedProject.cover_image;

            const updatedProject = {
                ...selectedProject,
                images: remainingImages,
                cover_image: newCoverImage
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
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                                <p className="font-medium mb-2">Resim Yükleme Gereksinimleri:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Maksimum dosya boyutu: 5MB</li>
                                    <li>İzin verilen formatlar: .jpg, .jpeg, .png, .gif</li>
                                    <li>Önerilen boyut oranı: 16:9 veya 4:3</li>
                                </ul>
                            </div>
                            <div>
                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/gif"
                                    multiple
                                    onChange={handleProjectImageUpload}
                                    className="hidden"
                                    id="project-image-upload"
                                    disabled={isUploading}
                                />
                                <label
                                    htmlFor="project-image-upload"
                                    className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium 
                                        ${isUploading 
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                            : 'text-gray-700 bg-white hover:bg-gray-50 cursor-pointer'}`}
                                >
                                    {isUploading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Yükleniyor...
                                        </>
                                    ) : (
                                        'Resim Yükle'
                                    )}
                                </label>
                            </div>
                        </div>
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
                console.error('Update error:', error);
                throw error;
            }

            // Yeni referans eklendiyse
            if (!reference.id) {
                setReferences([data, ...references]); // Yeni referansı listenin başına ekle
            } else {
                // Mevcut referans güncellendiyse
                setReferences(references.map(r => r.id === data.id ? data : r));
            }

            setSelectedReference(null); // Form'u kapat
            toast.success(reference.id ? 'Referans güncellendi!' : 'Yeni referans eklendi!');
        } catch (error) {
            console.error('Kaydetme hatası:', error);
            toast.error(`Referans kaydedilirken bir hata oluştu: ${error.message}`);
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
                        Referansı Sil
                    </div>
                </DialogHeader>
                <DialogBody className="px-6 py-4">
                    <div className="space-y-3">
                        <p className="text-gray-600">
                            <span className="font-medium text-gray-900">{referenceToDelete?.name}</span> referansını silmek istediğinizden emin misiniz?
                        </p>
                        <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            ⚠️ Bu işlem geri alınamaz ve referansa ait tüm resimler de silinecektir.
                        </p>
                    </div>
                </DialogBody>
                <DialogFooter className="border-t border-gray-100 px-6 py-4 flex justify-end gap-3">
                    <Button
                        variant="text"
                        color="gray"
                        onClick={() => setReferenceToDelete(null)}
                        className="font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 focus:ring-2 focus:ring-gray-100"
                    >
                        Vazgeç
                    </Button>
                    <Button
                        variant="filled"
                        color="red"
                        onClick={() => handleDeleteReference(referenceToDelete)}
                        className="bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-200 px-6"
                    >
                        Sil
                    </Button>
                </DialogFooter>
            </MaterialDialog>

            {/* Referans Listesi */}
            {!selectedReference ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {references.map((reference) => (
                        <Card key={reference.id} className="hover:shadow-lg transition-shadow">
                            <CardBody className="p-4">
                                <div className="aspect-square w-full h-32 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center mb-3">
                                    <Image 
                                        src={reference.image?.url} 
                                        alt={reference.name}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-contain p-2"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-medium text-gray-900 truncate">
                                        {reference.name}
                                    </h3>
                                    <div className="mt-2 flex gap-2 justify-center">
                                        <Button
                                            size="sm"
                                            color="blue"
                                            variant="text"
                                            className="flex-1"
                                            onClick={() => setSelectedReference(reference)}
                                        >
                                            Düzenle
                                        </Button>
                                        <Button
                                            size="sm"
                                            color="red"
                                            variant="text"
                                            className="flex-1"
                                            onClick={() => setReferenceToDelete(reference)}
                                        >
                                            Sil
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            ) : (
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

const ContactContent = () => {
    const [contactData, setContactData] = useState({
        email: '',
        tel_phone: '',
        wp_phone: '',
        address: '',
        social_media: {
            facebook: '',
            instagram: '',
            twitter: '',
            linkedin: '',
            youtube: ''
        }
    });
    const [isLoading, setIsLoading] = useState(true);

    // İletişim bilgilerini çek
    useEffect(() => {
        const fetchContact = async () => {
            try {
                const { data, error } = await supabase
                    .from('contact')
                    .select('*')
                    .single();

                if (error) throw error;

                if (data) {
                    setContactData(data);
                }
            } catch (error) {
                console.error('İletişim bilgileri çekilirken hata:', error);
                toast.error('İletişim bilgileri yüklenirken bir hata oluştu!');
            } finally {
                setIsLoading(false);
            }
        };

        fetchContact();
    }, []);

    // İletişim bilgilerini kaydet
    const handleSave = async () => {
        try {
            // Önce mevcut kaydı kontrol et
            const { data: existingData, error: fetchError } = await supabase
                .from('contact')
                .select('*')
                .single();

            if (fetchError) {
                console.error('Fetch error:', fetchError);
                throw fetchError;
            }

            const dataToUpdate = {
                email: contactData.email || '',
                tel_phone: contactData.tel_phone || '',
                wp_phone: contactData.wp_phone || '',
                address: contactData.address || '',
                social_media: contactData.social_media || {
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    linkedin: '',
                    youtube: ''
                },
                updated_at: new Date().toISOString()
            };

            if (existingData?.id) {
                dataToUpdate.id = existingData.id;
            }

            const { data, error } = await supabase
                .from('contact')
                .upsert(dataToUpdate)
                .select()
                .single();

            if (error) {
                console.error('Update error:', error);
                throw error;
            }

            setContactData(data);
            toast.success('İletişim bilgileri başarıyla güncellendi!');
        } catch (error) {
            console.error('Kaydetme hatası:', error);
            toast.error(`İletişim bilgileri kaydedilirken bir hata oluştu: ${error.message}`);
        }
    };

    if (isLoading) {
        return <div>Yükleniyor...</div>;
    }

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold">İletişim Bilgileri</h2>
            
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold mb-2">E-posta Adresi</h3>
                    <Input
                        value={contactData.email || ''}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="E-posta adresini girin"
                    />
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Telefon Numarası</h3>
                    <Input
                        value={contactData.tel_phone || ''}
                        onChange={(e) => setContactData({ ...contactData, tel_phone: e.target.value })}
                        placeholder="Telefon numarasını girin"
                    />
                </div>

                <div>
                    <h3 className="font-semibold mb-2">WhatsApp Numarası</h3>
                    <Input
                        value={contactData.wp_phone || ''}
                        onChange={(e) => setContactData({ ...contactData, wp_phone: e.target.value })}
                        placeholder="WhatsApp numarasını girin"
                    />
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Adres</h3>
                    <Textarea
                        value={contactData.address || ''}
                        onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                        placeholder="Adresi girin"
                    />
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Sosyal Medya Hesapları</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(contactData.social_media || {}).map(([platform, url]) => (
                            <div key={platform}>
                                <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
                                    {platform}
                                </label>
                                <Input
                                    value={url}
                                    onChange={(e) => setContactData({
                                        ...contactData,
                                        social_media: {
                                            ...contactData.social_media,
                                            [platform]: e.target.value
                                        }
                                    })}
                                    placeholder={`${platform} URL`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <Button
                    color="blue"
                    onClick={handleSave}
                >
                    Kaydet
                </Button>
            </div>
        </div>
    );
};

// AdminPanel içeriğini ayrı bir komponente taşıyalım
const AdminPanelContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [activeSection, setActiveSection] = useState(searchParams.get('section') || 'dashboard');
    const [activeSubSection, setActiveSubSection] = useState(searchParams.get('subsection') || '');
    const [user, setUser] = useState();

    // Eksik state'leri ekleyelim
    const [projects, setProjects] = useState([]);
    const [references, setReferences] = useState([]);

    // Section değiştiğinde URL'i güncelle
    const handleSectionChange = (section) => {
        const newParams = new URLSearchParams();
        newParams.set('section', section);
        
        // Eğer services seçildiyse default subsection'ı da ekle
        if (section === 'services') {
            newParams.set('subsection', 'consulting');
        } else {
            newParams.delete('subsection');
        }
        
        router.push(`/admin?${newParams.toString()}`);
        setActiveSection(section);
        
        if (section === 'services') {
            setActiveSubSection('consulting');
        } else {
            setActiveSubSection('');
        }
    };

    // SubSection değiştiğinde URL'i güncelle
    const handleSubSectionChange = (subsection) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('subsection', subsection);
        router.push(`/admin?${newParams.toString()}`);
        setActiveSubSection(subsection);
    };

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

    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard':
                return <DashboardContent />;
            case 'services':
                return <ServicesContent 
                    activeSubSection={activeSubSection}
                    setActiveSubSection={handleSubSectionChange}
                />;
            case 'projects':
                return <ProjectsContent 
                    projects={projects}
                    setProjects={setProjects}
                />;
            case 'references':
                return <ReferencesContent 
                    references={references}
                    setReferences={setReferences}
                />;
            case 'contact':
                return <ContactContent />;
            default:
                return <DashboardContent />;
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
                                    onClick={() => handleSectionChange(item.id)}
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
};

// Ana komponenti Suspense ile saralım
export default function AdminPanel() {
    return (
        <Suspense fallback={
            <div className="flex h-screen items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Yükleniyor...</p>
                </div>
            </div>
        }>
            <AdminPanelContent />
        </Suspense>
    );
}
