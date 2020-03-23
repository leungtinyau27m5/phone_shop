import React, {} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import HomeCarousel from '../components/HomeCarousel'
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import ScoreIcon from '@material-ui/icons/Score';
import CameraIcon from '@material-ui/icons/Camera';
import InfoIcon from '@material-ui/icons/Info'
import { Link } from 'react-router-dom'

import phoneBanner from '../assets/img/phone_banner.jpg'
import banner2 from '../assets/img/banner2.jpg'
import banner3 from '../assets/img/banner3.jpg'
import banner4 from '../assets/img/banner4.jpg'
import phone1 from '../assets/img/phone1.png'
import phone2 from '../assets/img/phone2.png'
import phone3 from '../assets/img/phone3.png'
import phone4 from '../assets/img/phone4.png'

import Recommendation from '../components/homePage/Recommendation'


const scale = {
    hoverImage: 70
}

const useStyles = makeStyles(theme => ({
    customPaperStyle: {
        position: 'relative',
        '&.is-active:hover [class^="makeStyles-imageContainer-"]': {
            [theme.breakpoints.up('md')]: {
                width: `${scale.hoverImage}%`,
                transition: 'all .5s ease-in-out',
            }
        },
        '&.is-active:hover > a > [class^="makeStyles-titleContainer-"]': {
            //[theme.breakpoints.up('md')]: {
                opacity: 1,
            //}
        },
        '&.is-active:hover > a > [class^="makeStyles-descriptionContainer-"]': {
            right: 0,
            transition: 'all .5s ease-in-out'
        },
        '&.is-active:hover > a > [class^="makeStyles-descriptionContainer-"] > *': {
            opacity: 1,
            transition: 'all .5s ease-in-out .5s'
        },
        '&.is-active:hover [class^="MuiSvgIcon-root makeStyles-infoIcon-"]': {
            opacity: 1,
            transition: 'all .5s ease-in-out',
        },
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            height: '220px'
        },
        [theme.breakpoints.up('md')]: {
            height: '520px'
        }
    }
}))

const carouselStyles = makeStyles(theme => ({
    imageContainer: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'hidden',
        //backgroundImage: `url(${phoneBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'all .5s ease-in-out .5s',
    },
    descriptionContainer: {
        position: 'absolute',
        [theme.breakpoints.up('md')]: {
            right: `${scale.hoverImage - 100}%`,
            width: `calc(30% - ${theme.spacing(2) * 2}px)`,
            height: `calc(100% - ${theme.spacing(2) * 2}px)`,
        },
        [theme.breakpoints.down('sm')]: {
            right: `-100%`,
            width: `calc(100% - ${theme.spacing(2) * 2}px)`,
            height: `calc(100% - ${theme.spacing(2) * 2}px)`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        padding: theme.spacing(2),
        textAlign: 'cetner',
        opacity: 1,
        transition: 'all .5s ease-in-out .5s',
        color: '#E0E0E0',
        '& > *': {
            transition: 'all .5s ease-in-out',
            opacity: 0
        }
    },
    smallImage: {
        [theme.breakpoints.up('md')]: {
            height: '40%',
            margin: 'auto',
            display: 'block'
        },

        [theme.breakpoints.down('sm')]: {
            width: '40%',
            height: 'auto',
            margin: 0,
            display: 'flex'
        }
    },
    descriptionDetail: {
        width: '100%',
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.down('sm')]: {

        },
    },
    descriptionText: {
        width: '50%',
        float: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    iconStyle: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            fontSize: '55px',
            marginTop: '8px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
            marginTop: '8px'
        }
    },
    descriptionLong: {
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    descriptionShort: {
        fontSize: '12px',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        }
    },
    titleContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: `30%`,
        fontSize: '2vw',
        minHeight: '35px',
        backgroundColor: 'rgba(10, 10, 10, 0.4)',
        opacity: 0,
        color: 'white',
        transition: 'all .5s ease-in-out',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '32px',
            padding: '8px 18px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
            top: 0,
            padding: '2px 8px',
            maxHeight: '35px',
            width: '100%'
        }
    },
    infoIcon: {
        position: 'absolute',
        right: '10px',
        bottom: '10px',
        color: 'white',
        transition: 'all 1s ease-in-out',
        opacity: 0
    }
}))

const HomePage = () => {
    const classes = useStyles()
    const carouselClasses = carouselStyles()
    

    const carouselSettings = {
      elevation: 3,
      custClasses: classes,
      paperStyle: {
        minWidth: '80vw',
        minHeight: '200px',
        maxHeight: '820px',
        margin: '2vw'
      },
      dotControl: true,
      arrowControl: true,
      autoPlay: true,
      timeInterval: 6000,
      dotColor: {
        inactive: 'rgba(0, 0, 0, 0.54)',
        active: 'red'
      },
      arrowColor: 'red'
    }
    const carouselItemContent = [{
        backgroundImage: phoneBanner,
        background: `linear-gradient(to bottom right, #15151D, #1B2234`,
        smallImage: phone1,
        smallImageAlt: 'phone-1',
        descriptionItems: [{
            icon: <BatteryChargingFullIcon className={carouselClasses.iconStyle} />,
            long: '2 Days Non-Stop Use With 5000mAh Battery',
            short: '5000mAh'
        }, {
            icon: <AudiotrackIcon className={carouselClasses.iconStyle}/>,
            long: 'Loud, Atmos-enhanced, good-quality speakers',
            short: 'Great Speakers'
        }, {
            icon: <ScoreIcon className={carouselClasses.iconStyle}/>,
            long: '2k Resolution With HDR',
            short: '2k Screen'	
        }, {
            icon: <CameraIcon className={carouselClasses.iconStyle}/> ,
            long: 'AI Dual Camera and Phone Learning',
            short: 'AI Camera'
        }],
        phoneName: 'APhone X',
        link: '1'
    }, {
        backgroundImage: banner2,
        background: `linear-gradient(to bottom right, #31393C, #82979A)`,
        smallImage: phone2,
        smallImageAlt: 'phone-2',
        descriptionItems: [{
            icon: <BatteryChargingFullIcon className={carouselClasses.iconStyle} />,
            long: '2 Days Non-Stop Use With 5000mAh Battery',
            short: '5000mAh'
        }, {
            icon: <AudiotrackIcon className={carouselClasses.iconStyle}/>,
            long: 'Loud, Atmos-enhanced, good-quality speakers',
            short: 'Great Speakers'
        }, {
            icon: <ScoreIcon className={carouselClasses.iconStyle}/>,
            long: '2k Resolution With HDR',
            short: '2k Screen'	
        }],
        phoneName: 'APhone M',
        link: '2'
    }, {
        backgroundImage: banner3,
        background: `linear-gradient(to bottom right, #232323, #ABABAB)`,
        smallImage: phone3,
        smallImageAlt: 'phone-3',
        descriptionItems: [{
            icon: <BatteryChargingFullIcon className={carouselClasses.iconStyle} />,
            long: '2 Days Non-Stop Use With 5000mAh Battery',
            short: '5000mAh'
        }, {
            icon: <AudiotrackIcon className={carouselClasses.iconStyle}/>,
            long: 'Loud, Atmos-enhanced, good-quality speakers',
            short: 'Great Speakers'
        }],
        phoneName: 'APhone M2',
        link: '3'
    }, {
        backgroundImage: banner4,
        background: `linear-gradient(to bottom right, #5C6D63, #EBCEA9)`,
        smallImage: phone4,
        smallImageAlt: 'phone-4',
        descriptionItems: [{
            icon: <BatteryChargingFullIcon className={carouselClasses.iconStyle} />,
            long: '2 Days Non-Stop Use With 5000mAh Battery',
            short: '5000mAh'
        }],
        phoneName: 'APhone Ma2',
        link: '4'
    }]
    return (
        <>
            <HomeCarousel {...carouselSettings}>
                {
                    carouselItemContent.map(content => {
                        return (
                            <div key={`carousel-item-content-${content.phoneName}-${content.smallImageAlt}`}>
                                <div className={carouselClasses.imageContainer} style={{backgroundImage: `url(${content.backgroundImage})`}}></div>
                                    <Link to={`/product/${content.link}`}>
                                        <div className={carouselClasses.descriptionContainer} style={{background: `${content.background}`}}>
                                            <img src={content.smallImage} className={carouselClasses.smallImage} alt={content.smallImageAlt}/>
                                            <div className={carouselClasses.descriptionDetail}>
                                                {content.descriptionItems.map((item, idx) => {
                                                    return (
                                                        <div className={carouselClasses.descriptionText} key={`${content.phoneName}-item-${idx}`}>
                                                            {item.icon}
                                                            <p className={carouselClasses.descriptionLong}>
                                                                {item.long}
                                                            </p>
                                                            <p className={carouselClasses.descriptionShort}>
                                                                {item.short}
                                                            </p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className={carouselClasses.titleContainer}>
                                            {content.phoneName}
                                        </div>
                                        <InfoIcon className={carouselClasses.infoIcon}/>
                                    </Link>
                            </div>
                        )
                    })
                }
            </HomeCarousel>
            <Recommendation />
        </>
    )
}


export default HomePage