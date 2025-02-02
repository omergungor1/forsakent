import React from 'react'
import Hizmetlerimiz from '../hizmetlerimiz';

function hizmetler() {
    return (
        <div>
            <div className='mt-4 '>
                {/* Main Content */}
                <section className="py-20 lg:py-28">
                    <Hizmetlerimiz isSection={true} />
                </section>
            </div>
        </div>
    )
}

export default hizmetler
