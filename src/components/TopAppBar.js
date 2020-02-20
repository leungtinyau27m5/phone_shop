import React, {} from 'react'
import { connect } from 'react-redux'
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

import { MATCH_MD, MATCH_LG } from '../actions/mediaQuery'

const styles = makeStyles(theme => ({
    root: {
        background: `linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)`,
    },
    toolBar: {
        minHeight: theme.spacing(2),
        transition: 'all .5s linear'
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
    }
}))

const TopAppBar = ({mainState, ownState, appBarNav}) => {
    const { navOptions } = appBarNav
    const classes = styles()
    const matchMD = MATCH_MD()
    const matchLG = MATCH_LG()
    return (
        <>
            <AppBar className={classes.root} position="static">
                <ToolBar className={classes.toolBar}>
                    <Hidden smDown>
                        <Fade in={matchMD || matchLG} timeout={1000}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <AppleIcon className={classes.logo} />
                            </IconButton>
                        </Fade>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden smDown>
                        <Fade in={matchMD || matchLG} timeout={1000}>
                            <List className={classes.list}>
                                {
                                    navOptions.map((item, idx) => (
                                        <ListItem key={`app-bar-item${item.value}`} className={classes.listItem} button>
                                            {
                                                item.icon !== null ? 
                                                    <ListItemIcon>{item.icon}</ListItemIcon> :
                                                    <></>

                                            }
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Fade>
                    </Hidden>

                </ToolBar>
            </AppBar>
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