import React, { } from 'react'
import PhoneCard from './PhoneCard'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
}))
const PhonesPreviewList = (props) => {
    const { visiblePhoneList, filters } = props
    const classes = useStyle()
    var filteredList = visiblePhoneList.all
    console.log(filters)

    filters.forEach(filter => {
        switch (filter.filterType) {
            case 'scale':
                if (filteredList.length === 0) return
                
                filteredList = filteredList.filter((phone, index, arr) => {
                    var value = phone[filter.filterValue].replace(/[a-z]/gi, '')
                    return value <= filter.currentValue[1] && value >= filter.currentValue[0]
                })
                break
            default: return filteredList
        }
    })

    return (
        <div className={classes.root}>
            {
                filteredList.map(phone => (
                    <PhoneCard
                        key={`mall-phone-${phone.id}`}
                        detail={phone}
                    />
                ))
            }
        </div>
    )
}
export default PhonesPreviewList