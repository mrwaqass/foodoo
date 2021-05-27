import React from 'react'
import './FilterControl.css'
import Select from 'react-select'
import {useGlobalContext} from '../../../context'
const options = [
    {value: 'categories', label: 'Filter by Categories'},
    {value: 'tags', label: 'Filter by Tags', isDisabled: true},
    {value: 'countries', label: 'Filter by Countries', isDisabled: true},
]

function FilterControl() {
    const {getAllCategories} = useGlobalContext()
    getAllCategories()
    const handleSelectChange = e => {
        console.log(e.value)
    }
    return (
        <div className='filter'>
            <p className='filterTitle'>Apply filters with confidence</p>
            <Select
                defaultValue={options[0]}
                options={options}
                onChange={e => handleSelectChange(e)}
            />
        </div>
    )
}

export default FilterControl
