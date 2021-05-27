import React from 'react'
import './Banner.css'

import {Search} from '../../../GetComponents'

function Banner({customClass, showSearch, bannerText}) {
    return (
        <section className={`banner ${customClass}`}>
            <h1 className='h1 textWhite'>{bannerText}</h1>
            {showSearch && <Search />}
        </section>
    )
}

export default Banner
