'use client';

import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const project = {
    title: "A Etabı XYZ Projesi",
    description: "Bu proje, modern tasarım anlayışıyla geliştirilmiş bir mimari konsepti içermektedir. Estetik ve fonksiyonelliği birleştiren çizgileriyle dikkat çekmektedir.",
    images: [
        "/image/img1.jpg",
        "/image/img2.jpg",
        "/image/img3.jpg",
        "/image/img5.jpg",
        "/image/img6.jpg",
        "/image/img7.jpg",
    ],
}

export default function ProjectDetails() {
    // const router = useRouter();
    // const { id } = router.query;
    // const project = projects.find((p) => p.id === parseInt(id));

    // const project = projects[0];
    // const [isOpen, setIsOpen] = useState(false);
    // const [currentImage, setCurrentImage] = useState("");

    // const openModal = (image) => {
    //     setCurrentImage(image);
    //     setIsOpen(true);
    // };

    // const closeModal = () => {
    //     setIsOpen(false);
    // };

    // if (!project) return <div>Yükleniyor...</div>;

    return (
        <div>
            <div className='mt-24 '>
                {/* Main Content */}
                <section className="container mx-auto px-8 py-20 lg:py-28">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-gray-900 mb-4">
                            {project.title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {project.description}
                        </p>
                    </div>

                    <PhotoProvider>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                            {project.images.map((image, index) => (
                                <PhotoView key={index} src={image}>
                                    <Image
                                        src={image}
                                        alt={`Project Image ${index + 1}`}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                    />
                                </PhotoView>
                            ))}
                        </div>
                    </PhotoProvider>
                </section>
            </div>
        </div>
    );
}