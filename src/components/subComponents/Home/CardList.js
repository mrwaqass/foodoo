import React from 'react'
import {
    Card,
    Loading,
    Error,
    FilterControl,
    Filters,
} from '../../../GetComponents'

import {useGlobalContext} from '../../../context'
import './CardList.css'

const CardList = () => {
    const {loading, filterData} = useGlobalContext()
    if (loading) {
        return <Loading />
    }
    return (
        <section className='cardList section'>
            <p className='totalItems'>
                <strong>{filterData.length}</strong> items found
            </p>
            <div className='filterContainer'>
                <FilterControl />
            </div>
            <Filters />
            {filterData.length === 0 && <Error />}
            <div className='cardsContainer MT3'>
                {filterData.map(card => {
                    return <Card key={card.idMeal} {...card} />
                })}
            </div>
        </section>
    )
}

export default CardList
