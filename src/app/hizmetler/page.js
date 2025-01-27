import React from 'react'
import { Navbar, Footer } from "../../components";

function hizmetler() {
    return (
        <div>
            <Navbar defaultIsScrolling={true} />
            <div className='mt-24 '>

                Hizmetler
            </div>
            <Footer />
        </div>
    )
}

export default hizmetler
