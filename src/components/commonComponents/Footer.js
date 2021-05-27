import React from 'react'
import './Footer.css'
import {SingleLinksColumn} from '../../GetComponents'
import {
    LanguageIcon,
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
} from '../../GetIcons'
import {Link} from 'react-router-dom'

const data = [
    {
        id: 1,
        title: 'about',
        links: [
            {
                id: 1,
                name: 'How Foodoo works',
                url: '/works',
            },
            {
                id: 2,
                name: 'About us',
                url: '/about',
            },
        ],
    },
    {
        id: 2,
        title: 'projects',
        links: [
            {
                id: 1,
                name: 'Foodoo',
                url: '/',
            },
            {
                id: 2,
                name: 'Airbnb Clone',
                url: 'https://airbnb-58bc8.web.app/',
                target: '_blank',
            },
        ],
    },
    {
        id: 3,
        title: 'WordPress Projects',
        links: [
            {
                id: 1,
                name: 'ForallCrypto',
                url: 'https://www.forallcrypto.com/',
                target: '_blank',
            },
            {
                id: 2,
                name: 'SCECOUAE LLC.',
                url: 'https://www.scecouae.com/',
                target: '_blank',
            },
            {
                id: 3,
                name: 'Delta Can District Cooling LLC.',
                url: 'https://deltacan.ae/',
                target: '_blank',
            },
        ],
    },
    {
        id: 4,
        title: 'contact',
        links: [
            {
                id: 1,
                name: 'Fiverr',
                url: 'https://www.fiverr.com/mrwaqass',
                target: '_blank',
            },
            {
                id: 2,
                name: 'Upwork',
                url: 'https://www.upwork.com/freelancers/~01eaa7b64387387bec',
                target: '_blank',
            },
        ],
    },
]

function Footer() {
    return (
        <section className='footer MT5'>
            <div className='footerContainer'>
                {data.map(item => {
                    return <SingleLinksColumn key={item.id} {...item} />
                })}
            </div>
            <FooterBottom />
        </section>
    )
}
function FooterBottom() {
    return (
        <div className='footerBottom'>
            <div className='footerBottomLeft'>
                <p className='copyright'>© 2021 Foodoo, Inc.</p>
                <p>All rights reserved</p>
            </div>
            <div className='footerBottomCenter'>
                <a
                    href='https://www.facebook.com/mrwaqassOfficial'
                    target='_blank'
                >
                    Developed with <span className='heart'>❤</span> by{' '}
                    <span className='developerName'>Waqas Ayub</span>
                </a>
            </div>
            <div className='footerBottomRight'>
                <div className='footerBottomRightLinks'>
                    <Link to='/'>
                        <LanguageIcon />
                        <span className='lang ML05'> English (US)</span>
                    </Link>
                    <Link to='/'>
                        <span className='currency'>$ USD</span>
                    </Link>
                </div>
                <div className='footerBottomRightSocialIcons'>
                    <a
                        href='https://www.facebook.com/mrwaqassOfficial'
                        target='_blank'
                    >
                        <Facebook />
                    </a>
                    <a href='https://www.twitter.com/mrwaqaass' target='_blank'>
                        <Twitter />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/mrwaqass/'
                        target='_blank'
                    >
                        <LinkedIn />
                    </a>
                    <a
                        href='https://www.instagram.com/mrwaqaass'
                        target='_blank'
                    >
                        <Instagram />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
