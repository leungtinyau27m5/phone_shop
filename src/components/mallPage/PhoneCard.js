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
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px'
        }
    },
    card: {
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        },
        maxWidth: '30%',
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
                            __html: detail.promotion.slogan
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
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default PhoneCard