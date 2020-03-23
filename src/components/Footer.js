import React, { } from 'react'
import { makeStyles } from '@material-ui/core/styles'
//import bgParallax from '../assets/img/pa_bg.jpg'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { Link } from 'react-router-dom'

import MailOutlineIcon from '@material-ui/icons/MailOutline'
import ExploreIcon from '@material-ui/icons/Explore'
import CallIcon from '@material-ui/icons/Call'
import AirplayIcon from '@material-ui/icons/Airplay'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '300px',
        marginTop: '35px',
        backgroundColor: '#EBEBEB',
        /*
        backgroundImage: `url(${bgParallax})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',*/
        position: 'relative',
        paddingTop: '15px',
        paddingBottom: '40px',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '24px',
            minHeight: '280px'
        }
    },
    expansionPanel: {
        backgroundColor: 'inherit',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        borderTop: '1px solid rgba(0, 0, 0, .125)',
        float: 'left',
        marginLeft: '1%',
        [theme.breakpoints.down('sm')]: {
            width: '98%'
        },
        '&.Mui-expanded': {
            marginLeft: '1%'
        }
    },
    expansionPanelSummary: {

    },
    expansionPanelDetails: {
        backgroundColor: 'white',
        padding: '0',
    },
    listRoot: {
        width: '100%'
    },
    listItem: {
        padding: '5px 32px',
        '& .MuiListItemText-primary': {
            fontSize: '14px',
            //float: 'right'
        }
    },
    lgPanel: {
        float: 'left',
        padding: '5px 18px',
        width: '20%'
    },
    community: {
        transition: 'all .5s ease-in-out',
        '& .MuiIconButton-root': {
            margin: '0 8px',
        }
    },
    facebook: {
        '&:hover': {
            color: '#3B579D'
        }
    },
    youtube: {
        '&:hover': {
            color: '#C81714'
        }
    },
    twitter: {
        '&:hover': {
            color: '#2CAAE1'
        }
    },
    organization: {
        position: 'absolute',
        bottom: '5px',
        paddingLeft: '1%',
        paddingRight: '1%',
        fontSize: '12px',
        width: '98%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > div > span > a': {
            textDecoration: 'none',
            color: 'inherit'
        },
        '& > div > span:not(:first-of-type)': {
            marginLeft: '8px',
        },
        '& > div > span:not(:first-of-type)::before': {
            content: "'|'",
            display: 'inline-block',
            width: '5px',
            height: '10px',
            marginRight: '8px'
        },
    }
}))

const panelItems = [{
    panelName: 'panel1',
    summary: 'Want More ?',
    items: [{
        itemText: 'Powered By IDPone',
        itemIcon: null,
    }, {
        itemText: 'Phone Health Care Plan',
        itemIcon: null,
    }]
}, {
    panelName: 'panel2',
    summary: 'Who We Are ?',
    items: [{
        itemText: 'About IDeaPhone',
        itemIcon: <AirplayIcon />,
    }, {
        itemText: 'News',
        itemIcon: null
    }, {
        itemText: 'Events',
        itemIcon: null,
    }, {
        itemText: 'Employment',
        itemIcon: null
    }]
}, {
    panelName: 'panel3',
    summary: 'Need Help ?',
    items: [{
        itemText: 'Find Service Location',
        itemIcon: <ExploreIcon />,
    }, {
        itemText: 'Email Us',
        itemIcon: <MailOutlineIcon />
    }, {
        itemText: 'Call Us',
        itemIcon: <CallIcon />
    }]
}]

const Footer = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)
    const handleExpandPanelChange = panel => (evt, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <div className={classes.root}>
            <Hidden mdUp>
                {
                    panelItems.map((ele, idx) => {
                        return (
                            <ExpansionPanel
                                key={`panel-${ele.panelName}`}
                                className={classes.expansionPanel}
                                expanded={expanded === ele.panelName}
                                onChange={handleExpandPanelChange(ele.panelName)}
                            >
                                <ExpansionPanelSummary
                                    className={classes.expansionPanelSummary}
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    {ele.summary}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                                    <List className={classes.listRoot}>
                                        {
                                            ele.items.map(item => (
                                                <ListItem key={`panel-${ele.panelName}-item-${item.itemText}`} className={classes.listItem} button>
                                                    {item.itemIcon ? <ListItemIcon>{item.itemIcon}</ListItemIcon> : <></>}
                                                    <ListItemText>{item.itemText}</ListItemText>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        )
                    })
                }
                <ExpansionPanel
                    className={classes.expansionPanel}
                    expanded={expanded === 'panel-community'}
                    onChange={handleExpandPanelChange('panel-community')}
                >
                    <ExpansionPanelSummary
                        className={classes.expansionPanelSummary}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        Community
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                        <Typography style={{ padding: '5px 8px' }}>
                            <a rel="noopener noreferrer" href="http://youtube.com" target="_blank" className={classes.link}>
                                <Tooltip title="YouTube Channel" placement="bottom" className={classes.youtube}>
                                    <IconButton className={classes.iconButton}>
                                        <YouTubeIcon style={{ fontSize: '32px' }} />
                                    </IconButton>
                                </Tooltip>
                            </a>
                            <a rel="noopener noreferrer" href="http://facebook.com" target="_blank" className={classes.link}>
                                <Tooltip title="Facebook" placement="bottom" classNAme={classes.facebook}>
                                    <IconButton className={classes.iconButton} >
                                        <FacebookIcon style={{ fontSize: '32px' }} />
                                    </IconButton>
                                </Tooltip>
                            </a>
                            <a rel="noopener noreferrer" href="http://twitter.com" target="_blank" className={classes.link}>
                                <Tooltip title="Twitter" placement="bottom" className={classes.twitter}>
                                    <IconButton className={classes.iconButton}>
                                        <TwitterIcon style={{ fontSize: '32px' }} />
                                    </IconButton>
                                </Tooltip>
                            </a>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Hidden>
            <Hidden smDown>
                {
                    panelItems.map((ele, idx) => (
                        <div key={`lg-panel-${ele.panelName}`} className={classes.lgPanel}>
                            <Typography>
                                {ele.summary}
                            </Typography>
                            <List className={classes.listRoot}>
                                {
                                    ele.items.map(item => (
                                        <ListItem
                                            key={`lg-panel-${ele.panelName}-item-${item.itemText}`}
                                            className={classes.listItem}
                                            button
                                        >
                                            <ListItemText>{item.itemText}</ListItemText>
                                            {item.itemIcon ? <ListItemIcon>{item.itemIcon}</ListItemIcon> : <></>}
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </div>
                    ))
                }
                <div className={classes.community}>
                    <Typography>
                        Community
                    </Typography>
                    <Typography>
                        <a rel="noopener noreferrer" href="http://youtube.com" target="_blank" className={classes.link}>
                            <Tooltip title="YouTube Channel" placement="bottom" className={classes.youtube}>
                                <IconButton className={classes.iconButton}>
                                    <YouTubeIcon style={{ fontSize: '32px' }} />
                                </IconButton>
                            </Tooltip>
                        </a>
                        <a rel="noopener noreferrer" href="http://facebook.com" target="_blank" className={classes.link}>
                            <Tooltip title="Facebook" placement="bottom" className={classes.facebook} >
                                <IconButton className={classes.iconButton}>
                                    <FacebookIcon style={{ fontSize: '32px' }} />
                                </IconButton>
                            </Tooltip>
                        </a>
                        <a rel="noopener noreferrer" href="http://twitter.com" target="_blank" className={classes.link}>
                            <Tooltip title="Twitter" placement="bottom" className={classes.twitter}>
                                <IconButton className={classes.iconButton}>
                                    <TwitterIcon style={{ fontSize: '32px' }} />
                                </IconButton>
                            </Tooltip>
                        </a>
                    </Typography>
                </div>
            </Hidden>
            <div className={classes.organization}>
                <div> 
                    <span><Link to="/">Privacy Policy</Link></span>
                    <span><Link to="/">Terms of Use</Link></span>
                    <span>&copy; Online Phone Shop Demo Only.</span>
                </div>
                <div>
                    <span>Steve Leung&reg;</span>
                </div>
            </div>
        </div>
    )
}


export default Footer