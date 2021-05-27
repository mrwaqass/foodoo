import React, {useState, useRef, useEffect} from 'react'
import {AppsIcon} from '../../GetIcons'
import {links, social} from '../subComponents/Navbar/data'
import logo from '../subComponents/Navbar/logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        if (showLinks) {
            let linksHeight = linksRef.current.getBoundingClientRect().height
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    }, [showLinks])

    return (
        <nav>
            <div className='navCenter'>
                <div className='navHeader'>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='navLogo' />
                    </Link>
                    <button
                        className='navToggle'
                        onClick={() => setShowLinks(!showLinks)}
                    >
                        <AppsIcon />
                    </button>
                </div>
                <div
                    ref={linksContainerRef}
                    className={`${
                        showLinks
                            ? 'navLinksContainer navShowContainer'
                            : 'navLinksContainer'
                    }`}
                >
                    <ul className='navLinks' ref={linksRef}>
                        {links.map(link => {
                            const {id, url, text} = link
                            return (
                                <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <ul className='socialIcons'>
                    {social.map(link => {
                        const {id, url, icon} = link
                        return (
                            <li key={id}>
                                <a href={url} target='_blank'>
                                    {icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
