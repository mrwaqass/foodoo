import React from 'react'
import {useGlobalContext} from '../../../context'
import './Filters.css'

function Filters() {
    const {getAllCategories, filterItems} = useGlobalContext()
    const allCategories = getAllCategories()
    return (
        <div className='category'>
            {allCategories.map((category, index) => {
                return (
                    <div
                        key={index}
                        className='categoryItem'
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </div>
                )
            })}
        </div>
    )
}

export default Filters
