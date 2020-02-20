import { DEV_MODE } from '../actions/main'

const initialState = {
    dev_mode: false
}

const main = (state = initialState, action) => {
    switch (action.type) {
        case DEV_MODE:
            return {...state, dev_mode: action.value}
        default: 
            return state
    }
}

export default main