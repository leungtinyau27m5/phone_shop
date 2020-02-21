import React, {} from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const vwToPx = (vw) => {
    return (window.innerWidth / 100) * vw // n px per 1vw
}

const vhToPx = (vh) => {
    return (window.innerHeight/ 100) * vh // n px per 1vh
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        overflowX: 'hidden',
        position: 'relative',
        transition: 'all 1s linear',
        '& > div > .MuiPaper-root': {
            margin: paperStyle => paperStyle.margin? paperStyle.margin : theme.spacing(1),
            minWidth: paperStyle => paperStyle.minWidth ? paperStyle.minWidth : theme.spacing(16),
            minHeight: paperStyle => paperStyle.minHeight ? paperStyle.minHeight : theme.spacing(16),
            zIndex: '2',
        }
    },
    paperContainer: {
        width: '320vw',
        display: 'flex',
        transform: paperStyle => `translateX(calc(${(100 - 80) / 2}vw - 8px))`,
        transition: 'all .5s linear'
        //animation: `$carouselScrollEffect 3000ms linear infinite`
    },
    "@keyframes carouselScrollEffect": {
        "100%": {
            transform: "translateX(-66.66%)"
        }
    },
    dotContainer: {
        position: 'absolute',
        minHeight: '20px',
        left: '50%',
        bottom: '20px',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: paperStyle => paperStyle.minWidth ? paperStyle.minWidth : theme.spacing(16),
        '& > *': {
            fontSize: theme.spacing(2),
            marginLeft: '4px',
            marginRight: '4px'
        }
    },
    arrowContainer: {
        position: 'absolute',
        margin: paperStyle => paperStyle.margin? paperStyle.margin : theme.spacing(1),
        minWidth: '100vw',
        minHeight: paperStyle => paperStyle.minHeight ? paperStyle.minHeight : theme.spacing(16)
    },
    arrowLeft: {
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '3'
    },
    arrowRight: {
        position: 'absolute',
        right: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '3'
    },
    arrowButton: {
        height: '120px'
    }
}))

const HomeCarousel = (props) => {
    const scrollCarousel = (nextStep) => {
        if (nextStep && currentIdx + 1 < itemLength) {
            
            //paperScrollable.current.style.transform = `translateX(-${90 * currentIdx}vw)`
        } else if (!nextStep && currentIdx > 0) {

        }
    }
    const { 
        itemList, 
        elevation, 
        paperStyle,
        dotControl,
        arrowControl,
        currentIdx
    } = props
    //currentIdx = currentIdx === undefined ? 0 : currentIdx
    const styleProps = {
        paperWidth: paperStyle.minWidth ? paperStyle.minWidth : `75vw`,
        paperHeight: paperStyle.minHeight ? paperStyle.minHeight : `${16 * 8}px`,
        paperMargin: paperStyle.margin? paperStyle.margin : `${8}px`
    }
    var itemLength = itemList.length
    const classes = useStyles(paperStyle, itemLength, currentIdx)
    const paperScrollable = React.createRef()
    return (
        <div className={classes.root}>
            <div className={classes.paperContainer} ref={paperScrollable}>
                {itemList.map((ele, idx) => {
                    return (
                        <Paper key={`carousel-${idx}`} elevation={elevation}>
                            {ele}
                        </Paper>
                    )
                })}
            </div>
            <div className={classes.dotContainer}>
                {
                    itemList.map((ele, idx) => {
                        return (
                            <FiberManualRecordIcon key={`caoursel-dot-${idx}`} className={classes.dot}/>
                        )
                    })
                }
            </div>
            <div className={classes.arrowContainer}>
                <div className={classes.arrowLeft}>
                    <IconButton className={classes.arrowButton} onClick={() => scrollCarousel(false)}>
                        <ArrowBackIosIcon />
                    </IconButton>
                </div>
                <div className={classes.arrowRight}>
                    <IconButton className={classes.arrowButton} onClick={() => scrollCarousel(true)}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default HomeCarousel