import { combineReducers } from 'redux'
import main from './main'
import appBarNav from './appBarNav'
import shoppingMall from './shoppingMall'
import phonesPreivewList from './phonesPreviewList'

export default combineReducers({
    main,
    appBarNav,
    shoppingMall,
    phonesPreivewList
})


