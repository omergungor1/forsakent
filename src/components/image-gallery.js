"use client"

import { useState } from 'react'
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

function ImageGallery({ Images, title }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full">
            {title && <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>}
            <PhotoProvider>
                <div className="relative flex flex-col md:flex-row gap-x-6">
                    {/* Büyük Resim */}
                    <PhotoView src={Images[activeIndex]}>
                        <Image
                            src={Images[activeIndex]}
                            width={800}
                            height={500}
                            unoptimized
                            alt="Main Image"
                            className="w-full min-w-48 md:w-96 h-72 md:h-96 object-cover rounded-lg cursor-pointer"
                        />
                    </PhotoView>

                    {/* Küçük Resimler */}
                    <div className="mt-4 grid grid-cols-4 md:grid-cols-6 gap-2 overflow-x-auto p-2">
                        {Images.map((img, idx) => (
                            <button key={idx} onClick={() => setActiveIndex(idx)} className="focus:outline-none">
                                <Image
                                    src={img}
                                    width={120}
                                    height={80}
                                    unoptimized
                                    alt={`Thumbnail ${idx + 1}`}
                                    className={`w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg cursor-pointer transition-transform ${activeIndex === idx
                                        ? "ring-2 ring-green-500 scale-105"
                                        : "opacity-75 hover:opacity-100"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tam Ekran için Tüm Resimleri Ekleyelim */}
                {Images.map((img, idx) => (
                    <PhotoView key={idx} src={img}>
                        <span></span>
                    </PhotoView>
                ))}
            </PhotoProvider>
            {
                // <PhotoProvider>
                //     <div className="relative flex flex-col md:flex-row gap-x-6">
                //         {/* Büyük Resim */}
                //         <PhotoView src={Images[activeIndex]}>
                //             <Image
                //                 src={Images[activeIndex]}
                //                 width={500}
                //                 height={500}
                //                 // contain
                //                 resize="contain"
                //                 alt={`Main Thumbnail`}
                //                 unoptimized
                //                 className="w-full md:w-64 h-72 md:h-96 object-cover rounded-lg cursor-pointer"
                //             />
                //         </PhotoView>

                //         {/* Küçük Resimler */}
                //         <div className="mt-4 grid grid-cols-4 gap-2 overflow-x-auto px-4">
                //             {Images.map((img, idx) => (
                //                 <div key={idx} src={img}>
                //                     <button onClick={() => setActiveIndex(idx)} className="focus:outline-none">
                //                         <Image
                //                             src={img}
                //                             width={120}
                //                             height={80}
                //                             unoptimized
                //                             alt={`Thumbnail ${idx + 1}`}
                //                             className={`w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg cursor-pointer transition-transform ${activeIndex === idx
                //                                 ? "ring-2 ring-green-500 scale-105"
                //                                 : "opacity-75 hover:opacity-100"
                //                                 }`}
                //                         />
                //                     </button>
                //                 </div>
                //             ))}
                //         </div>
                //     </div>
                // </PhotoProvider>
            }
        </div>
    )
}

export default ImageGallery
