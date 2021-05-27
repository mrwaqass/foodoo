import React from 'react'
import {CardList, Banner} from '../GetComponents'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner
                customClass='bgHome'
                showSearch={true}
                bannerText='Ultimate Food Collection'
            />
            <CardList />
        </div>
    )
}

export default Home
