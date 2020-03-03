import React, {} from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        minHeight: '200px',
        marginTop: '35px'
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