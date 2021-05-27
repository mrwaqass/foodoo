export const initialState = {
    loading: false,
    data: [],
    filterData: [],
    error: null,
    itemToGet: '',
    categories: [],
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true}
        case 'DISPLAY_DATA':
            return {
                ...state,
                data: action.payload.meals,
                filterData: action.payload.meals,
                loading: false,
            }
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload.categories,
                loading: false,
            }
        case 'SEARCH_ITEMS_BY_NAME':
            const filterItemsByName = state.data.filter(item => {
                return item.strMeal
                    .toLowerCase()
                    .includes(action.payload.toLowerCase())
            })
            return {
                ...state,
                filterData: filterItemsByName,
            }
        case 'ITEM_BY_ID':
            const itemToGet = state.data.find(
                item => item.idMeal === action.payload
            )
            return {...state, itemToGet}
        case 'FILTER_CATEGORIES_ALL':
            return {...state, filterData: state.data}
        case 'FILTER_CATEGORIES':
            return {
                ...state,
                filterData: state.data.filter(item => {
                    return item.strCategory === action.payload
                }),
            }
        case 'RESET_FILTERS':
            return {...state, filterData: state.data}
        default:
            return state
    }
}
