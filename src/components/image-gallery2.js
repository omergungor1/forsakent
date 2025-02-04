"use client"

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

function ImageGallery2({ Images, title }) {
    return (
        <div className="w-full">
            {title && <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>}
            <PhotoProvider>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {Images.map((image, index) => (
                        <PhotoView key={index} src={image}>
                            <Image
                                src={image}
                                width={640}
                                height={480}
                                alt={`Project Image ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            />
                        </PhotoView>
                    ))}

                </div>
            </PhotoProvider>
        </div>
    )
}

export default ImageGallery2
