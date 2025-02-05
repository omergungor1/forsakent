'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Textarea, Avatar, Card, CardBody, CardHeader, Tab, Tabs, TabsHeader } from '@material-tailwind/react';
import { createClient } from '@supabase/supabase-js';


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const sections = [
    { id: 'danismanlik', label: 'Danışmanlık' },
    { id: 'projelendirme', label: 'Projelendirme' },
    { id: '3d', label: '3D Tasarım' },
    { id: 'bakim', label: 'Bakım' },
    { id: 'uygulama', label: 'Uygulama' },
    { id: 'ic-mekan', label: 'İç Mekan Bitkilendirme' },
];

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState(sections[0].id);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const router = useRouter();
    const [user, setUser] = useState();


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
    }, []);

    const handleFileUpload = async (event) => {
        const files = event.target.files;
        const uploadedImages = [];
        for (const file of files) {
            if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type) || file.size > 5 * 1024 * 1024) {
                alert('Sadece JPEG, PNG, GIF formatında ve maksimum 5MB boyutunda dosya yükleyebilirsiniz.');
                continue;
            }
            const { data, error } = await supabase.storage.from('uploads').upload(`images/${file.name}`, file);
            if (data) uploadedImages.push(data.path);
        }
        setImages([...images, ...uploadedImages]);
    };

    const handleDeleteImage = async (path) => {
        await supabase.storage.from('uploads').remove([path]);
        setImages(images.filter((img) => img !== path));
    };

    if (!user) return null;

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md p-4 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                    <Avatar src="/image/admin-user.png" alt="Admin" size="md" />
                    <div>
                        <h2 className="text-xl font-bold">Forsa Peyzaj</h2>
                        <p className="text-sm text-gray-500">Admin Panel</p>
                    </div>
                </div>
                <Tabs value={activeTab} className="flex flex-col gap-2">
                    <TabsHeader className="flex flex-col w-full">
                        {sections.map((section) => (
                            <Tab key={section.id} value={section.id} onClick={() => setActiveTab(section.id)} className={`p-2 w-full text-left rounded-lg ${activeTab === section.id ? 'bg-gray-200' : ''}`}>
                                {section.label}
                            </Tab>
                        ))}
                    </TabsHeader>
                </Tabs>
                <Button className="mt-auto bg-red-500 text-white" onClick={async () => { await supabase.auth.signOut(); router.push('/admin/login'); }}>Çıkış Yap</Button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
                <Card>
                    <CardHeader className="bg-blue-500 text-white text-lg font-bold p-4">{sections.find(s => s.id === activeTab)?.label} Yönetimi</CardHeader>
                    <CardBody>
                        <Input label="Başlık" value={title} onChange={(e) => setTitle(e.target.value)} className="mb-4" />
                        <Textarea label="Açıklama" value={description} onChange={(e) => setDescription(e.target.value)} className="mb-4" />
                        <Input type="file" multiple onChange={handleFileUpload} className="mb-4" />
                        <div className="flex gap-2 flex-wrap">
                            {images.map((img, index) => (
                                <div key={index} className="relative w-24 h-24">
                                    <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/uploads/${img}`} alt="Uploaded" className="w-full h-full object-cover rounded" />
                                    <button className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs" onClick={() => handleDeleteImage(img)}>Sil</button>
                                </div>
                            ))}
                        </div>
                        <Button className="bg-green-600 text-white">Kaydet</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
