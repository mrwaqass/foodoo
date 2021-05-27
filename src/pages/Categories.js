import React from 'react'
import './Categories.css'
import {CardList, Banner} from '../GetComponents'

function Categories() {
    return (
        <div className='categories'>
            <Banner
                customClass='bgCategories'
                showSearch={false}
                bannerText='All Food Categories'
            />
            {/* <CardList /> */}
        </div>
    )
}

export default Categories
