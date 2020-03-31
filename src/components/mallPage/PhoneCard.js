import React, { } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        width: '25%',
        margin: '5px',
        [theme.breakpoints.down('md')]: {
            width: '48%',
            margin: '1%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: '20px'
        },
    },
    card: {

    },
    media: {
        height: 140,
        backgroundSize: 'contain'
    },
    promotion: {
        fontSize: theme.typography.pxToRem(14),
        textAlign: 'center',
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap'
    },
    promotionFeatures: {
        fontSize: theme.typography.pxToRem(12),
        [theme.breakpoints.down('sm')]: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            '&::after': {
                fontSize: theme.typography.pxToRem(14),
                content: "'...'"
            }
        }
    }
}))

const PhoneCard = (props) => {
    const { detail } = props
    console.log(detail)
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`${detail.path}${detail.gallery[0]}`}
                        title={''}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography
                        className={classes.promotion}
                        gutterBottom
                        variant="h5"
                        component="h2"
                        dangerouslySetInnerHTML={{
                            __html: detail.name
                        }}
                    />
                    <Typography
                        className={`${classes.promotion} ${classes.promotionFeatures}`}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        dangerouslySetInnerHTML={{
                            __html: detail.promotion.features
                        }}
                    />
                </CardContent>
                <CardActions>
                    <Typography>{`$${detail.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}</Typography>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default PhoneCard