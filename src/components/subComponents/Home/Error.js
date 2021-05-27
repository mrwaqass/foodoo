import React from 'react'
import {SentimentDissatisfiedIcon} from '../../../GetIcons'
import {Button} from '../../../GetComponents'
import {useGlobalContext} from '../../../context'

import './Error.css'

function Error() {
    const {input, resetFilter} = useGlobalContext()
    return (
        <div className='errorDivContainer'>
            <SentimentDissatisfiedIcon className='iconCustom' />
            <div className='errorDiv'>
                <h1 className='errorDivTitle'>
                    <span className='food'>"{input}"</span> food not found,
                </h1>
            </div>
            <div className='errorDivSubtitle'>
                <p>Do you want to search some other delecious food?</p>
            </div>
            <Button className='btn btnPrimary' onClick={resetFilter}>
                Yes
            </Button>
        </div>
    )
}

export default Error
