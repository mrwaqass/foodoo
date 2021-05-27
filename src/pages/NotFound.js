import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../GetComponents'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound section'>
            <h2 className='h2 MB3 MT3'>404 - NotFound</h2>
            <Link to='/'>
                <Button className='btn btnPrimary'>Back to home</Button>
            </Link>
        </div>
    )
}

export default NotFound
