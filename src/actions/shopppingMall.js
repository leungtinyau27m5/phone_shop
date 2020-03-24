export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'

export const addProductFilters = (conditions) => ({
    type: ADD_FILTER,
    filterType: conditions.type,
    filterValue: conditions.value,
    filterCurrentValue: conditions.currentValue
})

export const removeProductFilter = (conditions) => ({
    type: REMOVE_FILTER,
    filterType: conditions.type,
    filterValue: conditions.value,
    filterCurrentValue: conditions.currentValue
})