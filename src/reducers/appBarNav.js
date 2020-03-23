import React, {} from 'react'
import HomeIcon from '@material-ui/icons/Home'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const initialState = {
    navOptions: [
        {
            text: 'Home',
            icon: <HomeIcon />,
            value: 'home',
            target: '/index',
        }, {
            text: 'Mall',
            icon: <LocalMallIcon />,
            value: 'mall',
            target: '/mall',
        }, {
            text: 'Support',
            icon: <HelpOutlineIcon />,
            value: 'support',
            target: '/support',
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