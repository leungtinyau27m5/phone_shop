import React, {} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import bgParallax from '../assets/img/pa_bg.jpg'

import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import { NavLink } from 'react-router-dom'

import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        minHeight: '300px',
        marginTop: '35px',
        backgroundImage: `url(${bgParallax})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
    },
    subheader: {
        color: 'inherit',
    },
    listContainter: {
        [theme.breakpoints.up('md')]: {
            position: 'absolute', 
            right: 15, 
            top: '50%', 
            transform: 'translateY(-50%)',
            display: 'flex',
            width: 720,
        },
        [theme.breakpoints.down('sm')]: {
            padding: 15
        }
    },
    list: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid white',
        paddingBottom: 0,
        alignSelf: 'flex-start',
        //marginLeft: 10
        [theme.breakpoints.up('md')]: {
            maxWidth: 360,
            marginLeft: 10
        }, 
        [theme.breakpoints.down('sm')]: {
            marginTop: 15
        }
    },
    navLink: {
        '&:not(first-of-type) > div': {
            borderTop: '1px solid white'
        }
    },
    icon: {
        '& > svg': {
            fontSize: '48px'
        }
    }
}))

const listItems = {
    siteMap: [{
        primaryText: "Home",
        icon: "",
        linkTo: ""
    }, {
        primaryText: 'Support',
        icon: '',
        linkTo: ''
    }, {
        primaryText: 'About Us',
        icon: '',
        linkTo: ''
    }],
    socialMedia: [{
        primaryText: 'facebook',
        icon: <FacebookIcon style={{color: '#115293'}} />,
        linkTo: ''
    }, {
        primaryText: 'whatsapp',
        icon: <WhatsAppIcon style={{color: '#60D172'}} />,
        linkTo: ''
    }]
}

const BottomAboutUs = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.listContainter}>
                <List 
                    component="nav" 
                    aria-labelledby="footer-list-map"
                    subheader={
                        <ListSubheader component="div" id="footer-list-map" className={classes.subheader}>
                            Website Map
                        </ListSubheader>
                    }
                    className={classes.list}
                >
                    {
                        listItems.siteMap.map(ele => (
                            <NavLink 
                                key={`footer-map-${ele.primaryText}`}
                                exact
                                to={ele.linkTo}
                                activeStyle={{
                                    textDecoration: 'none',
                                    color: 'rgba(0, 0, 0, 1)'
                                }}
                                className={classes.navLink}
                            >
                                <ListItem button>
                                    {ele.icon !== "" && ele.icon !== null (<ListItemIcon>{ele.icon}</ListItemIcon>)}
                                    <ListItemText primary={ele.primaryText} />
                                </ListItem>
                            </NavLink>
                        ))
                    }
                </List>
                <List 
                    component="nav"
                    aria-labelledby="foorter-list-social-media"
                    subheader={
                        <ListSubheader component="div" id="footer-list-social-media" className={classes.subheader}>
                            Share
                        </ListSubheader>
                    }
                    className={classes.list}
                >
                    {
                        listItems.socialMedia.map(ele => (
                            <NavLink
                                key={`footer-map-${ele.primaryText}`}
                                exact
                                to={ele.linkTo}
                                activeStyle={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                                className={classes.navLink}
                            >
                                <ListItem button>
                                <ListItemIcon className={classes.icon}>{ele.icon}</ListItemIcon>
                                    <ListItemText primary={ele.primaryText} />
                                </ListItem>
                            </NavLink>
                        ))
                    }
                </List>
            </div>
        </div> 
    )
}


export default BottomAboutUs