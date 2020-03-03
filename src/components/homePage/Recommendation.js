import React, {} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import img1 from '../../assets/img/promotion/img1.jpg'
import img3 from '../../assets/img/promotion/img3.jpg'
import img4 from '../../assets/img/promotion/img4.jpg'
import img5 from '../../assets/img/promotion/img5.jpg'
import img6 from '../../assets/img/promotion/img6.jpg'
import img7 from '../../assets/img/promotion/img7.jpg'
import img8 from '../../assets/img/promotion/img8.png'
import img9 from '../../assets/img/promotion/img9.jpg'
import img10 from '../../assets/img/promotion/img10.jpg'
import img11 from '../../assets/img/promotion/img11.png'
import img12 from '../../assets/img/promotion/img12.jpg'
import img13 from '../../assets/img/promotion/img13.jpg'

//import useMediaQuery from '@material-ui/core/useMediaQuery'
import { MATCH_MD, MATCH_SM, MATCH_XS, MATCH_LG } from '../../actions/mediaQuery'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: '98vw',
        height: '550px',
        '&::-webkit-scrollbar': {
            width: '8px'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'isnet 0 0 6px rgba(0, 0, 0, 0.3)',
        }, 
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'darkgrey',
            outline: '1px solid slategrey',
            borderRadius: '20px'
        }
    },
    gridTile: {
        transition: 'all .3s ease-in-out',
        '&:hover': {
            transform: 'scale(0.95)'
        },
        '&:hover .MuiGridListTileBar-rootSubtitle': {
            opacity: 1
        }
    },
    tileBar: {
        opacity: 0,
        transition: 'all .3s ease-in-out'
    },
    icon: {
        color: 'white'
    }
}))

const Recommendation = () => {
    const classes = useStyles()
    const LG = MATCH_LG()
    const MD = MATCH_MD()
    const SM = MATCH_SM()
    const XS = MATCH_XS()
    const tileData = [{
        img: img1,
        title: 'APhone Max 1',
        description: 'Friendship contrasted solicitude insipidity in introduced literature',
        cols: LG ? 1 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img3,
        title: 'APhone Max 2',
        description: 'Lorem ipsum dolor sit amet.',
        cols: LG ? 2 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img4,
        title: 'APhone Max 1',
        description: 'Lorem ipsum dolor sit amet.',
        cols: LG ? 3 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img5,
        title: 'APhone Max 1',
        description: 'Good Phone',
        cols: LG ? 3 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img13,
        title: 'APhone Max 1',
        description: 'Lorem ipsum dolor sit amet.',
        cols: LG ? 1 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img11,
        title: 'APhone Max 1',
        description: 'Good Phone',
        cols: LG ? 1 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img12,
        title: 'APhone Max 1',
        description: 'Lorem ipsum dolor sit amet.',
        cols: LG ? 1 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img6,
        title: 'APhone Max 1',
        description: 'Good Phone',
        cols: LG ? 3 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img7,
        title: 'APhone Max 1',
        description: 'Lorem ipsum dolor sit amet.',
        cols: LG ? 3 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img8,
        title: 'APhone Max 1',
        description: 'Good Phone',
        cols: LG ? 1 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img9,
        title: 'APhone Max 1',
        description: 'Lorem ipsum dolor sit amet.',
        cols: LG ? 2 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }, {
        img: img10,
        title: 'APhone Max 1',
        description: 'Good Phone',
        cols: LG ? 3 : MD ? 3 : SM ? 6 : XS ? 6 : 3,
    }]
    return (
        <div className={classes.root}>
            <GridList cellHeight={380} className={classes.gridList} cols={6} spacing={20}>
                {
                    tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.gridTile}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar 
                                className={classes.tileBar}
                                title={tile.title}
                                subtitle={tile.description}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))
                }
            </GridList>
        </div>
    )
}


export default Recommendation