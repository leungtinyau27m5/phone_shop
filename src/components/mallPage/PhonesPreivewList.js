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
    filters.forEach(item => {
        switch (item.filterType) {
            case 'scale':
                if (filteredList.length === 0) return
                
                filteredList = filteredList.filter((phone, index, arr) => {
                    var value = phone[item.filterValue].replace(/[a-z]/gi, '')
                    return value <= item.currentValue[1] && value >= item.currentValue[0]
                })
                break
            case 'check':
                if (filteredList.length === 0) return 

                filteredList = filteredList.filter((phone, index, arr) => {
                    return phone[item.filterValue].map(ele => item.currentValue.includes(ele)).includes(true)
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