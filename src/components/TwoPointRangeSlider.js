import React, { } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const AirbnbSlider = withStyles({
    root: {
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
        width: '80%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0px 2px 2px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0px 2px 3px 1px',
        },
        '& .bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    valueLabel: {
        //left: 'calc(-50% + 4px)',
    },
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})((props) => {
    return (
        <Slider 
            {...props}
        />
    )
})

const useStyle = makeStyles(theme => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        [theme.breakpoints.down('sm')]: {
            padding: '0',
            width: '100%'
        },
        padding: '0 16px',
        marginBottom: '16px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0
    },
    subheading: {
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.text.secondary,
    },
    panelSummary: {
        '& > .MuiExpansionPanelSummary-content': {
            justifyContent: 'space-between'
        }
    }
}))

const valueText = (value) => {
    return (`${value}`)
}
const TwoPointRangeSlider = (props) => {
    const classes = useStyle()
    const { handleSliderOnChange, removeProductFilter, itemText, itemValue, min, max, step, unit } = props
    const [expanded, setExpand] = React.useState(false)
    const [currentMin, setMin] = React.useState(min)
    const [currentMax, setMax] = React.useState(max)
    const sliderOnChange = (evt, value) => {
        setMin(value[0])
        setMax(value[1])
    }
    const sliderChanged = (evt, value) => {
        if (value[0] === min && value[1] === max) {
            removeProductFilter({filterType: 'scale', filterValue: itemValue, currentValue: value})
        } else {
            handleSliderOnChange({filterType: 'scale', filterValue: itemValue, currentValue: value})
        }
    }
    return (
        <div className={classes.margin}>
            <ExpansionPanel expanded={expanded} onChange={() => setExpand(!expanded)}>
                <ExpansionPanelSummary
                    className={classes.panelSummary}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className={classes.heading}>{itemText}</Typography>
                    <Typography className={classes.subheading}>{`${currentMin} to ${currentMax}${unit}`}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <AirbnbSlider
                        style={props.style}
                        getAriaValueText={valueText}
                        defaultValue={[props.min, props.max]}
                        step={props.step}
                        min={props.min}
                        max={props.max}
                        valueLabelDisplay="auto"
                        onChange={sliderOnChange}
                        onChangeCommitted={sliderChanged}
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
      </div>
    )
}

export default TwoPointRangeSlider