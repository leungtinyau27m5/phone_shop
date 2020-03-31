import { PHONES }  from '../DB/Phones'

const initialState = {
    all: PHONES,
    filtered: []
}

const phonesPreivewList = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default phonesPreivewList