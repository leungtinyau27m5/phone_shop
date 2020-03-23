export const ADD_FILTER = 'ADD_FILTER'

export const addProductFilters = (conditions) => ({
    type: ADD_FILTER,
    conditions: conditions
})