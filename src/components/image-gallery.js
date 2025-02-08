"use client"

import { useState } from 'react'
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

const ImageGallery = ({ Images, priority = false, title = null }) => {
    return (
        <div className="space-y-4">
            {/* Albüm Başlığı */}
            {title && (
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {title}
                </h3>
            )}

            {/* Ana Grid */}
            <PhotoProvider>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Images.map((image, index) => (
                        <PhotoView key={index} src={image}>
                            <div 
                                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover hover:scale-110 transition-transform duration-300"
                                    priority={priority && index < 4}
                                />
                            </div>
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </div>
    );
};

export default ImageGallery;
