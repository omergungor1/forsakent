import React from 'react'
import { Navbar, Footer } from "../../components";
import Hizmetlerimiz from '../hizmetlerimiz';

function hizmetler() {
    return (
        <div>
            <Navbar defaultIsScrolling={true} />
            <div className='mt-4 '>

                {/* Main Content */}
                <section className="container mx-auto px-8 py-20 lg:py-28">
                    <Hizmetlerimiz isSection={true} />
                </section>

            </div>
            <Footer />
        </div>
    )
}

export default hizmetler
