import React, {} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import bgParallax from '../assets/img/pa_bg.jpg'

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
    }
}))


const BottomAboutUs = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>

        </div>
    )
}


export default BottomAboutUs