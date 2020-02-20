import React, {} from 'react'
import HomeIcon from '@material-ui/icons/Home'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const initialState = {
    navOptions: [
        {
            text: 'Home',
            icon: <HomeIcon />,
            value: 'home',
            target: 'home',
            subList: null
        },
        {
            text: 'Support',
            icon: <HelpOutlineIcon />,
            value: 'support',
            target: 'support',
            subList: null
        }
    ]
}

const appBarNav = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state
    }
}

export default appBarNav