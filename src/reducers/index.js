import { combineReducers } from 'redux'
import main from './main'
import appBarNav from './appBarNav'
import shoppingMall from './shoppingMall'

export default combineReducers({
    main,
    appBarNav,
    shoppingMall
})


