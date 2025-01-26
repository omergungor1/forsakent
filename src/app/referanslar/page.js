import React from 'react'
import { Navbar, Footer } from "../../components";

function referanslar() {
    return (
        <div>
            <Navbar className='bg-blue' />

            <div className="relative min-h-screen w-full bg-[url('/image/image1.jpg')] bg-cover bg-no-repeat">
                <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
                <div className="grid min-h-screen px-8">
                    <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                        <h3 className='text-white mb-2 text-3xl'>Referanslar</h3>
                        <h1 className="text-white lg:max-w-3xl">
                            Forsa Peyzaj
                        </h1>
                        <p className="text-white mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl">
                            Estetik ve fonksiyonelliği bir araya getiren peyzaj tasarımları.
                        </p>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default referanslar
