export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'

export const addProductFilters = (conditions) => ({
    type: ADD_FILTER,
    filterType: conditions.filterType,
    filterValue: conditions.filterValue,
    filterCurrentValue: conditions.currentValue
})

export const removeProductFilter = (conditions) => ({
    type: REMOVE_FILTER,
    filterType: conditions.filterType,
    filterValue: conditions.filterValue,
    filterCurrentValue: conditions.currentValue
})