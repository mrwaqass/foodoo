import React from 'react'
import {Banner} from '../GetComponents'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <Banner
                customClass='bgAbout'
                showSearch={false}
                bannerText='About Us'
            />
        </div>
    )
}

export default About
