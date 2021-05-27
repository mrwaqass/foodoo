import React from 'react'
import {useGlobalContext} from '../../../context'
import {SearchIcon} from '../../../GetIcons'
import {Fab} from '../../../GetComponents'
import './Search.css'
// const url = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'

function Search() {
    const {input, searchItemsByName} = useGlobalContext()
    return (
        <div className='searchForm'>
            <input
                type='text'
                name='item'
                id='item'
                placeholder='Start searching items real time'
                value={input}
                onChange={e => searchItemsByName(e)}
            />
            <Fab color='primary' aria-label='search'>
                <SearchIcon />
            </Fab>
        </div>
    )
}

export default Search
