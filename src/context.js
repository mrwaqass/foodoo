import React, {useState, useContext, useEffect, useReducer} from 'react'
import {initialState, reducer} from './reducer'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const categoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [input, setInput] = useState('')
    const fetchData = (url, action) => {
        dispatch({type: 'LOADING'})
        fetch(url)
            .then(resp => {
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json()
                } else {
                    console.log(resp.status)
                    console.log(resp.statusText)
                    throw new Error('Not fetched')
                }
            })
            .then(data => {
                dispatch({type: action, payload: data})
            })
            .catch(err => {
                console.log('Hey Error', err)
            })
    }

    const searchItemsByName = e => {
        setInput(e.target.value)
        dispatch({type: 'SEARCH_ITEMS_BY_NAME', payload: e.target.value})
    }
    const resetFilter = () => {
        setInput('')
        dispatch({type: 'RESET_FILTERS'})
    }
    const getItemById = id => {
        dispatch({type: 'ITEM_BY_ID', payload: id})
    }
    const getCategories = () => {
        fetchData(categoriesUrl, 'GET_CATEGORIES')
    }
    const getAllCategories = () => {
        // dispatch({type: 'GET_ALL_CATEGORIES'})
        const allCategories = [
            'all',
            ...new Set(state.data.map(item => item.strCategory)),
        ]
        return allCategories
    }
    const filterItems = category => {
        if (category === 'all') {
            dispatch({type: 'FILTER_CATEGORIES_ALL'})
            return
        }
        dispatch({type: 'FILTER_CATEGORIES', payload: category})
    }

    useEffect(() => {
        fetchData(url, 'DISPLAY_DATA')
    }, [])
    return (
        <AppContext.Provider
            value={{
                ...state,
                fetchData,
                searchItemsByName,
                input,
                resetFilter,
                getItemById,
                getCategories,
                getAllCategories,
                filterItems,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
