import React from 'react'
import './SingleItemInfo.css'

function SingleItemInfo({h, d}) {
    return (
        <div className='singleItemRightItem'>
            <div className='singleItemRightItemTitle'>
                {h && <p>{`${h}:`}</p>}
            </div>
            <div className='singleItemRightItemInfo'>
                <p>{d}</p>
            </div>
        </div>
    )
}

export default SingleItemInfo
