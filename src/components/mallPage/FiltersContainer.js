import React, { } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TwoPointRangeSlider from '../TwoPointRangeSlider'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyle = makeStyles(theme => ({
    filterContainer: {
        [theme.breakpoints.up('md')]: {
            width: '25%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        '& > div': {
            padding: '0 16px'
        }
    },
    expandedPanel: {

    },
    expandedPanelDetail: {
        flexWrap: 'wrap'
    },
    expandedPanelHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0
    },
    expandedPanelSubheading: {
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.text.secondary,
    },
    expandedPanelSummary: {

    },
    expandedFilterContainer: {
        width: '45%',
        margin: '0 8px',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
}))

const ScaleItemRendering = ({ item, handleFilterAdd, removeProductFilter, appliedFilters }) => (
    <TwoPointRangeSlider
        key={`scale-filter-item-${item.value}`}
        itemText={item.text}
        itemValue={item.value}
        min={item.min}
        max={item.max}
        step={item.step}
        unit={item.unit}
        handleFilterAdd={handleFilterAdd}
        removeProductFilter={removeProductFilter}
        appliedFilters={appliedFilters.find(ele => ele.filterValue === item.value)}
    />
)
const FiltersContainer = (props) => {
    const { filterList, handleFilterAdd, removeProductFilter, appliedFilters } = props
    const [expandedFilterPanel, setFilterPanelExpansion] = React.useState(false)
    const [expandedCheckItems, setCheckItemPanels] = React.useState(Array(filterList.scaleItem.length).fill(false))
    const [allCheckItems, setCheckItemOnOff] = React.useState(
                                                filterList.checkItem.map(item => (
                                                    item.subList.map(check => ({
                                                        value: check.value,
                                                        checked: true
                                                    }))
                                                ))
                                            )
    const classes = useStyle()
    const checkItemPanelExpansion = (idx) => {
        var temp = [...expandedCheckItems]
        temp[idx] = !temp[idx]
        setCheckItemPanels(temp)
    }
    const checkTheItem = (idx, subIndex, itemValue, value) => {
        var temp = [...allCheckItems]
        temp[idx][subIndex].checked = !temp[idx][subIndex].checked
        var currentValue = temp[idx].map(arr => arr.checked ? arr.value : null).filter(str => str !== null)
        handleFilterAdd({filterType: 'check', filterValue: itemValue, currentValue: currentValue})
        //handleFilterAdd({filterType: 'check', filterValue: '', currentValue: })
        setCheckItemOnOff(temp)
    }
    return (
        <div className={classes.filterContainer}>
            <Hidden smDown>
                <div>
                    {
                        filterList.scaleItem.map(item => (
                            <ScaleItemRendering
                                key={`scale-item-rendering-${item.value}`}
                                item={item}
                                handleFilterAdd={handleFilterAdd}
                                removeProductFilter={removeProductFilter}
                                appliedFilters={appliedFilters}
                            />
                        ))
                    }
                </div>
                <div>
                    {
                        filterList.checkItem.map((item, idx) => (
                            <ExpansionPanel
                                key={`filter-check-item-${item.value}`}
                                expanded={expandedCheckItems[idx]}
                                onChange={() => checkItemPanelExpansion(idx)}
                                //onChange={() => setCheckItemPanel(!expandedFilterPanelCheckItems)}
                            >
                                <ExpansionPanelSummary
                                    className={classes.expandedPanelSummary}
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography className={classes.expandedPanelHeading}>{item.text}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.expandedPanelDetail}>
                                    <FormGroup row>
                                        {
                                            item.subList.map((check, subIndex) => (
                                                <FormControlLabel
                                                    key={`item.value-${check.value}`}
                                                    control={
                                                        <Checkbox
                                                            checked={allCheckItems[idx][subIndex].checked}
                                                            onChange={() => checkTheItem(idx, subIndex, item.value, allCheckItems[idx][subIndex].value)}
                                                            name={check.value}
                                                            color="primary"
                                                        />
                                                    }
                                                    label={check.text}
                                                />
                                            ))
                                        }
                                    </FormGroup>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))
                    }
                </div>
            </Hidden>
            <Hidden mdUp>
                <div>
                    {
                        <ExpansionPanel
                            className={classes.expandedPanel}
                            expanded={expandedFilterPanel}
                            onChange={() => setFilterPanelExpansion(!expandedFilterPanel)}
                        >
                            <ExpansionPanelSummary
                                className={classes.expandedPanelSummary}
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.expandedPanelHeading}>Filters</Typography>
                                <Typography className={classes.expandedPanelSubheading}>

                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.expandedPanelDetail}>
                                {
                                    filterList.scaleItem.map(item => (
                                        <div
                                            key={`expaned-scale-filter-item-${item.value}`}
                                            className={classes.expandedFilterContainer}
                                        >
                                            <ScaleItemRendering
                                                item={item}
                                                handleFilterAdd={handleFilterAdd}
                                                removeProductFilter={removeProductFilter}
                                                appliedFilters={appliedFilters}
                                            />
                                        </div>
                                    ))
                                }
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    }
                </div>
            </Hidden>
        </div>
    )
}

export default FiltersContainer