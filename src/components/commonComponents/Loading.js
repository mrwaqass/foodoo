import React from 'react'
import './Loading.css'
import {CircularProgress} from '../../GetComponents'

const Loading = () => {
    return (
        <div className='laoding'>
            <CircularProgress />
        </div>
    )
}

export default Loading
