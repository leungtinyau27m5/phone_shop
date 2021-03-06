import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

/*
const vwToPx = (vw) => {
    return (window.innerWidth / 100) * vw // n px per 1vw
}

const vhToPx = (vh) => {
    return (window.innerHeight / 100) * vh // n px per 1vh
}

const splitUnit = (value) => {
    return { d: value.match(/\d+/g), unit: value.match(/[a-zA-Z]+/gi) }
}
*/

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        overflowX: 'hidden',
        position: 'relative',
        '& > div > .MuiPaper-root': {
            margin: styleProps => styleProps.paperMargin,
            width: styleProps => styleProps.paperWidth,
            [theme.breakpoints.down('sm')]: {
                minHeight: styleProps => styleProps.paperHeight,
            },
            [theme.breakpoints.up('md')]: {
                maxHeight: styleProps => styleProps.paperMaxHeight,
            },
            zIndex: '2',
        }
    },
    paperContainer: {
        width: styleProps => `${100 * (styleProps.itemLength + 1)}vw`,
        display: 'flex',
        transform: styleProps => `translateX(calc((100vw - ${styleProps.paperWidth}) / 2 - ${styleProps.paperMargin} - ${styleProps.paperMargin} / 2 + ${styleProps.paperMargin} / 2))`,
        transition: 'transform .5s ease-in-out'
    },
    dotContainer: {
        position: 'absolute',
        minHeight: '20px',
        left: '50%',
        bottom: styleProps => `${styleProps.paperMargin}`,
        transform: 'translateX(-50%)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        zIndex: '10',
        width: styleProps => styleProps.paperWidth,
        '& > *': {
            fontSize: theme.spacing(1),
            padding: theme.spacing(1),
            zIndex: '10'
        }
    },
    arrowContainer: {
        //position: 'absolute',
        minWidth: '100vw',
        //height: '100%',
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
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '3'
    },
    arrowButton: {
        borderRadius: '0',
        [theme.breakpoints.down('sm')]: {
            minHeight: styleProps => styleProps.paperHeight,
        },
        [theme.breakpoints.up('md')]: {
            minHeight: styleProps => styleProps.paperHeight,
        },
    },
    paperItSelf: {
        display: 'flex',
        flexGrow: 1,
    }
}))

const HomeCarousel = (props) => {
    const {
        elevation,
        paperStyle,
        dotControl,
        arrowControl,
        arrowColor,
        dotColor,
        currentIdx,
        children,
    } = props
    const styleProps = {
        paperWidth: paperStyle.minWidth ? paperStyle.minWidth : `75vw`,
        paperHeight: paperStyle.minHeight ? paperStyle.minHeight : `${16 * 8}px`,
        paperMaxHeight: paperStyle.maxHeight ? paperStyle.maxHeight : `${16 * 8}px`,
        paperMargin: paperStyle.margin ? paperStyle.margin : `${8}px`,
        itemLength: children.length,
        arrowColor: arrowColor,
        dotColor: dotColor
    }
    //end of props

    //state
    const [activeIdx, setActiveIdx] = useState(currentIdx === undefined ? 0 : currentIdx)
    const [onCarouselHover, setCarouselHover] = useState(false)
    var itemLength = children.length
    //end of state

    //funcs
    const scrollCarousel = () => {
        paperScrollable.current.style.transform = `translateX(calc((100vw - ${styleProps.paperWidth}) / 2 - ${styleProps.paperMargin} - ${styleProps.paperMargin} / 2 - (${styleProps.paperWidth} + ${styleProps.paperMargin} * 2) * ${activeIdx} + ${styleProps.paperMargin} / 2))`
    }
    const carouselHoverEvt = (e, onHover) => {
        setCarouselHover(onHover)
    }
    //componentdidupdate
    useEffect(() => {
        scrollCarousel()
    })

    useEffect(() => {
        if (onCarouselHover) return
        if (!props.autoPlay) return
        const autoPlayCarousel = setInterval(() => {
            if (activeIdx + 1 > itemLength - 1) {
                setActiveIdx(0)
            } else {
                setActiveIdx(activeIdx + 1)
            }
        }, props.timeInterval ? props.timeInterval : 3000)
        return () => clearInterval(autoPlayCarousel)
    }, [activeIdx, itemLength, props.autoPlay, props.timeInterval, onCarouselHover])
    //end of componentdidupdate

    //constant
    const classes = useStyles(styleProps)
    const paperScrollable = React.createRef()

    const setCarousel = (idx) => {
        if (idx !== false && idx !== true) setActiveIdx(idx)
        if (idx === false && activeIdx > 0) setActiveIdx(activeIdx - 1)
        if (idx === false && activeIdx <= 0) setActiveIdx(itemLength - 1)
        if (idx === true && activeIdx + 1 < itemLength) setActiveIdx(activeIdx + 1)
        if (idx === true && activeIdx + 1 >= itemLength) setActiveIdx(0)
    }

    //render funcs
    const dotControlPanel = () => {
        if (dotControl) {
            return (
                <div className={classes.dotContainer}>
                    {
                        children.map((ele, idx) => {
                            return (
                                <IconButton
                                    key={`caoursel-dot-${idx}`}
                                    onClick={() => setCarousel(idx)}
                                    style={{
                                        color: idx === activeIdx ? dotColor.active : dotColor.inactive,
                                        transition: 'all .5s linear'
                                    }}
                                >
                                    <FiberManualRecordIcon className={classes.dot} />
                                </IconButton>
                            )
                        })
                    }
                </div>
            )
        }
    }
    const arrowControlPanel = () => {
        if (arrowControl) {
            return (
                <div className={classes.arrowContainer}>
                    <div className={classes.arrowLeft}>
                        <IconButton className={classes.arrowButton} onClick={() => setCarousel(false)}>
                            <ArrowBackIosIcon style={{color: arrowColor }}/>
                        </IconButton>
                    </div>
                    <div className={classes.arrowRight}>
                        <IconButton className={classes.arrowButton} onClick={() => setCarousel(true)}>
                            <ArrowForwardIosIcon style={{color: arrowColor }}/>
                        </IconButton>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className={classes.root}>
            <div className={classes.paperContainer} ref={paperScrollable}>
                {children.map((ele, idx) => {
                    return (
                        <Paper 
                            key={`carousel-${idx}`} 
                            elevation={elevation} 
                            className={`${props.custClasses.customPaperStyle} ${classes.paperItSelf} ${activeIdx === idx ? 'is-active' : ''}`}
                            onMouseEnter={(e) => carouselHoverEvt(e, true)}
                            onMouseLeave={(e) => carouselHoverEvt(e, false)}
                        >
                            {ele.props.children}
                        </Paper>
                    )
                })}
            </div>
            {dotControlPanel()}
            {arrowControlPanel()}
        </div>
    )
}

export default HomeCarousel