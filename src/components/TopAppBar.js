import React, { } from 'react'
import { connect } from 'react-redux'
import bgParallax from '../assets/img/pa_bg.jpg'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import AppleIcon from '@material-ui/icons/Apple'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Fade from '@material-ui/core/Fade'

import { Link } from 'react-router-dom'

import { MATCH_MD, MATCH_LG } from '../actions/mediaQuery'

const styles = makeStyles(theme => ({
    root: {
        //background: `linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)`,

        backgroundImage: `url(${bgParallax})`,
        backgroundAttachment: 'fixed',
        //backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    toolBar: {
        minHeight: theme.spacing(2),
        transition: 'all .5s linear',
    },
    logo: {
        minHeight: theme.spacing(2),
        fontSize: theme.spacing(5)
    },
    list: {
        display: 'flex',
        flexDirection: 'row'
    },
    listItem: {
        transition: 'all .5s linear',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        }
    },
    itemIcon: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white'
    }
}))

const TopAppBar = ({ mainState, ownState, appBarNav }) => {
    const { navOptions } = appBarNav
    const classes = styles()
    const matchMD = MATCH_MD()
    const matchLG = MATCH_LG()

    return (
        <>
            <AppBar className={classes.root} position="fixed">
                <ToolBar className={classes.toolBar}>
                    <Hidden smDown>
                        <Fade in={matchMD || matchLG} timeout={1000}>
                            <Link to={'/index'}>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <AppleIcon className={classes.logo} />
                                </IconButton>
                            </Link>
                        </Fade>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden smDown>
                        <Fade in={matchMD || matchLG} timeout={1000}>
                            <List className={classes.list}>
                                {
                                    navOptions.map((item, idx) => (

                                        <Link to={`${item.target}`} key={`app-bar-item${item.value}`}>
                                            <ListItem className={classes.listItem} button>
                                                {
                                                    item.icon !== null ?
                                                        <ListItemIcon className={classes.itemIcon}>{item.icon}</ListItemIcon> :
                                                        <></>

                                                }
                                                <ListItemText primary={item.text} />
                                            </ListItem>
                                        </Link>
                                    ))
                                }
                            </List>
                        </Fade>
                    </Hidden>

                </ToolBar>
            </AppBar>
            <div style={{height: '65px'}}></div>
        </>
    )
}

const mapStateToProps = (state) => ({
    mainState: state.main,
    appBarNav: state.appBarNav,
    ownState: state.topAppBar
})

const mapDispatchToProps = dispatch => ({

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopAppBar)