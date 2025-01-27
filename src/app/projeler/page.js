import React from 'react'
import { Navbar, Footer } from "../../components";

function projeler() {
    return (
        <div>
            <Navbar defaultIsScrolling={true} />
            <div className='mt-24 '>
                Projeler
            </div>
            <Footer />
        </div>
    )
}

export default projeler
