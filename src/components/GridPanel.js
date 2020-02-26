import React, {} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyels = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5)
        },
        '& > *': {
            //minHeight: '0px'
        }
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        //minHeight: '50%'
        //minHeight: `calc(50% - ${theme.spacing(2)}px)`
    }
}))

const GridPanel = () => {
    const classes = useStyels()
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

            </Grid>
        </div>
    )
}

export default GridPanel