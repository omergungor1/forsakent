"use client"

import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";

const projects = [
    {
        id: 1,
        title: "Proje 1",
        description: "Bu proje, AI destekli bir araçtır.",
        images: ["/images/project1.jpg", "/images/project1-2.jpg"],
    },
    {
        id: 2,
        title: "Proje 2",
        description: "Bu proje, mobil uygulama geliştirme üzerine.",
        images: ["/images/project2.jpg", "/images/project2-2.jpg"],
    },
];

export default function ProjectDetails() {
    const router = useRouter();
    const { id } = router.query;
    const project = projects.find((p) => p.id === parseInt(id));

    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const openModal = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!project) return <div>Yükleniyor...</div>;

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="mt-4 text-lg">{project.description}</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => openModal(image)}>
                        <img src={image} alt={`Proje Resmi ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
                    </div>
                ))}
            </div>

            <Modal isOpen={isOpen} onRequestClose={closeModal} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="relative max-w-4xl">
                    <img src={currentImage} alt="Büyütülmüş Resim" className="w-full h-auto" />
                    <button onClick={closeModal} className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full">X</button>
                </div>
            </Modal>
        </div>
    );
}