import React, {} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import HomeCarousel from '../components/HomeCarousel'
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import ScoreIcon from '@material-ui/icons/Score';
import CameraIcon from '@material-ui/icons/Camera';
import InfoIcon from '@material-ui/icons/Info'

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
    return (
        <>
            <HomeCarousel {...carouselSettings}>
                <div>
                    <div className={carouselClasses.imageContainer} style={{backgroundImage: `url(${phoneBanner})`}}></div>
                    <a href={'1'}>
                    <div className={carouselClasses.descriptionContainer} style={{background: `linear-gradient(to bottom right, #15151D, #1B2234)`}}>
                        <img src={phone1} className={carouselClasses.smallImage} alt={`phone-1`}/>
                        <div className={carouselClasses.descriptionDetail}>
                            <div className={carouselClasses.descriptionText}>
                                <BatteryChargingFullIcon className={carouselClasses.iconStyle}/> 
                                <p className={carouselClasses.descriptionLong}>
                                    2 Days Non-Stop Use with 5000mAh Battery
                                </p>
                                <p className={carouselClasses.descriptionShort}>
                                    5000mAh
                                </p>
                            </div>
                            <div className={carouselClasses.descriptionText}>
                                <AudiotrackIcon className={carouselClasses.iconStyle}/> 
                                <p className={carouselClasses.descriptionLong}>
                                    Loud, Atmos-enhanced, good-quality speakers
                                </p>
                                <p  className={carouselClasses.descriptionShort}>
                                    Great Speakers
                                </p>
                            </div>
                            <div className="flex-breakpoint"/> 
                            <div className={carouselClasses.descriptionText}>
                                <ScoreIcon className={carouselClasses.iconStyle}/>
                                <p  className={carouselClasses.descriptionLong}>
                                    2k Resolution with HDR
                                </p>
                                <p className={carouselClasses.descriptionShort}>
                                    2k Screen
                                </p>
                            </div>
                            <div className={carouselClasses.descriptionText}>
                                <CameraIcon className={carouselClasses.iconStyle}/> 
                                <p className={carouselClasses.descriptionLong}>
                                    AI Dual Camera and Phone Learning
                                </p>
                                <p className={carouselClasses.descriptionShort}>
                                    AI Camera
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={carouselClasses.titleContainer}>
                        APhone X
                    </div>
                    <InfoIcon className={carouselClasses.infoIcon}/>
                    </a>
                </div>
                <div>
                    <div className={carouselClasses.imageContainer} style={{backgroundImage: `url(${banner2})`}}></div>
                    <a href={'2'}>
                    <div className={carouselClasses.descriptionContainer} style={{background: `linear-gradient(to bottom right, #31393C, #82979A)`}}>
                        <img src={phone2} className={carouselClasses.smallImage} alt={`phone-2`}/>
                        <div className={carouselClasses.descriptionDetail}>
                            <div className={carouselClasses.descriptionText}>
                                <BatteryChargingFullIcon className={carouselClasses.iconStyle}/> 
                                <p className={carouselClasses.descriptionLong}>
                                    2 Days Non-Stop Use with 5000mAh Battery
                                </p>
                                <p className={carouselClasses.descriptionShort}>
                                    5000mAh
                                </p>
                            </div>
                            <div className={carouselClasses.descriptionText}>
                                <AudiotrackIcon className={carouselClasses.iconStyle}/> 
                                <p className={carouselClasses.descriptionLong}>
                                    Loud, Atmos-enhanced, good-quality speakers
                                </p>
                                <p className={carouselClasses.descriptionShort}>
                                    Great Speakers
                                </p>
                            </div>
                            <div className={carouselClasses.descriptionText}>
                                <ScoreIcon className={carouselClasses.iconStyle}/> 
                                <p className={carouselClasses.descriptionLong}>
                                    2k Resolution with HDR
                                </p>
                                <p className={carouselClasses.descriptionShort}>
                                    2k Screen
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={carouselClasses.titleContainer}>
                        APhone Max Pro
                    </div>
                    <InfoIcon className={carouselClasses.infoIcon}/>
                    </a>
                </div>
                <div>
                    <div className={carouselClasses.imageContainer} style={{backgroundImage: `url(${banner3})`}}></div>
                    <a href={'3'}>
                    <div className={carouselClasses.descriptionContainer} style={{background: `linear-gradient(to bottom right, #232323, #ABABAB)`}}>
                        <img src={phone3} className={carouselClasses.smallImage} alt={`phone-3`}/>
                        <div className={carouselClasses.descriptionDetail}>
                            <div className={carouselClasses.descriptionText}>
                                <BatteryChargingFullIcon className={carouselClasses.iconStyle}/> 
                                <p className={carouselClasses.descriptionLong}>
                                    2 Days Non-Stop Use with 5000mAh Battery
                                </p>
                                <p className={carouselClasses.descriptionShort}>
                                    5000mAh
                                </p>
                            </div>
                            <div className={carouselClasses.descriptionText}>
                                <AudiotrackIcon className={carouselClasses.iconStyle}/> 
                                <p className={carouselClasses.descriptionLong}>
                                    Loud, Atmos-enhanced, good-quality speakers
                                </p>
                                <p className={carouselClasses.descriptionShort}>
                                    Great Speakers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={carouselClasses.titleContainer}>
                        APhone M1
                    </div>
                    <InfoIcon className={carouselClasses.infoIcon}/>
                    </a>
                </div>
                <div>
                    <div className={carouselClasses.imageContainer} style={{backgroundImage: `url(${banner4})`}}></div>
                    <a href={'4'}>
                    <div className={carouselClasses.descriptionContainer} style={{background: `linear-gradient(to bottom right, #5C6D63, #EBCEA9)`}}>
                        <img src={phone4} className={carouselClasses.smallImage} alt={`phone-4`}/>
                        <div className={carouselClasses.descriptionDetail}>
                            <div className={carouselClasses.descriptionText}>
                                <BatteryChargingFullIcon className={carouselClasses.iconStyle}/> 
                                <p className={carouselClasses.descriptionLong}>
                                    2 Days Non-Stop Use with 5000mAh Battery
                                </p>
                                <p className={carouselClasses.descriptionShort}>
                                    5000mAh
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={carouselClasses.titleContainer}>
                        APhone Ma2
                    </div>
                    <InfoIcon className={carouselClasses.infoIcon}/>
                    </a>
                </div>
            </HomeCarousel>
            <Recommendation />
        </>
    )
}


export default HomePage