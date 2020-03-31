import React, { } from 'react'
import { connect } from 'react-redux'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

import PhonesPreivewList from '../components/mallPage/PhonesPreivewList'
import { addProductFilters, removeProductFilter } from '../actions/shopppingMall'

import TwoPointRangeSlider from '../components/TwoPointRangeSlider'

const BootstrapInput = withStyles(theme => ({
    root: {
        width: '185px',
        [theme.breakpoints.down('sm')]: {
            width: '120px'
        },
        'label + &': {
            marginTop: theme.spacing(3),
        }
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #CED4DA',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80BDFF',
            boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, .25)',
        }
    }
}))(InputBase)

const useStyle = makeStyles(theme => ({
    root: {
        padding: '15px 32px',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 8px',
        }
    },
    titleAndFilters: {
        borderBottom: '1px solid rgba(10, 10, 10, 0.125)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sorting: {
        margin: theme.spacing(1)
    },
    filterTags: {
        width: '100%',
        marginTop: '24px',
        paddingLeft: '32px',
        paddingBottom: '8px'
    },
    mainContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '15px'
    },
    filterContainer: {
        //minHeight: '200px',
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
    productGallery: {
        minHeight: '200px',
        //boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
        [theme.breakpoints.up('md')]: {
            width: '75%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            boxShadow: 'none'
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
    tags: {
        margin: '4px'
    }
}))

const StyledChip = withStyles({
    /*
    root: {
        border: '1px solid red'
    },
    label: {
        color: 'red'
    },
    avatar: {
        backgroundColor: 'red'
    },
    deleteIcon: {
        color: 'red'
    }*/
})(Chip)

const ShoppingMall = (props) => {
    console.log(props)
    const { shoppingMall, addProductFilters, removeProductFilter, visiblePhoneList } = props
    const [expandedFilterPanel, setFilterPanelExpansion] = React.useState(false)
    const [sort, setSorting] = React.useState('')
    const handleSortChange = (evt) => {
        setSorting(evt.target.value)
    }
    const handleSliderOnChange = (itemObj) => {
        addProductFilters(itemObj)
    }
    const handleFilterTagOnDelete = (evt, item) => {
        removeProductFilter(item)
    }
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div className={classes.titleAndFilters}>
                <div className={classes.titleContainer}>
                    <Typography variant="h3">
                        Phones
                    </Typography>
                </div>
                <div className={classes.sortingContainer}>
                    <FormControl className={classes.sorting}>
                        <InputLabel id="sorting-btn">Sort</InputLabel>
                        <Select
                            labelId="sorting-btn"
                            id="sorting-select"
                            value={sort}
                            onChange={handleSortChange}
                            input={<BootstrapInput />}
                        >
                            <MenuItem value="">
                                <em>Default</em>
                            </MenuItem>
                            <MenuItem value={'popular'}>Most Popular</MenuItem>
                            <MenuItem value={'priceLow'}>Price - Lowest</MenuItem>
                            <MenuItem value={'priceHigh'}>Price - Highest</MenuItem>
                            <MenuItem value={'newest'}>Newest</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.filterTags}>
                    {
                        shoppingMall.appliedFilters.map(item => (
                            <StyledChip
                                color={'secondary'}
                                className={classes.tags} 
                                key={`filter-list-tag-${item.filterValue}`}
                                variant="outlined" 
                                size="small" 
                                onDelete={(evt) => handleFilterTagOnDelete(evt, item)} 
                                label={item.filterValue.substring(0, 1).toUpperCase() + item.filterValue.substring(1)}
                                avatar={<Avatar>{item.filterValue.substring(0, 1).toUpperCase()}</Avatar>} 
                            />
                        ))
                    }
                </div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.filterContainer}>
                    <Hidden smDown>
                        <div>
                            {
                                shoppingMall.filterList.scaleItem.map(item => (
                                    <TwoPointRangeSlider
                                        key={`scale-filter-item-${item.value}`}
                                        itemText={item.text}
                                        itemValue={item.value}
                                        min={item.min}
                                        max={item.max}
                                        step={item.step}
                                        unit={item.unit}
                                        handleSliderOnChange={handleSliderOnChange}
                                        removeProductFilter={removeProductFilter}
                                        appliedValue={shoppingMall.appliedFilters.find(ele => ele.filterValue === item.value)}
                                    />
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
                                            shoppingMall.filterList.scaleItem.map(item => (
                                                <div 
                                                    key={`expaned-scale-filter-item-${item.value}`}
                                                    className={classes.expandedFilterContainer}
                                                >
                                                    <TwoPointRangeSlider
                                                        handleSliderOnChange={handleSliderOnChange}
                                                        removeProductFilter={removeProductFilter}
                                                        itemText={item.text}
                                                        itemValue={item.value}
                                                        min={item.min}
                                                        max={item.max}
                                                        step={item.step}
                                                        unit={item.unit}
                                                        filterValue={item.filterValue}
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
                <div className={classes.productGallery}>
                    <PhonesPreivewList 
                        filters={shoppingMall.appliedFilters} 
                        visiblePhoneList={visiblePhoneList}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    shoppingMall: state.shoppingMall,
    visiblePhoneList: state.phonesPreivewList,
})
const mapDisptachToProps = (dispatch) => ({
    addProductFilters: conditions => dispatch(addProductFilters(conditions)),
    removeProductFilter: conditions => dispatch(removeProductFilter(conditions))
})

export default connect(
    mapStateToProps,
    mapDisptachToProps
)(ShoppingMall)