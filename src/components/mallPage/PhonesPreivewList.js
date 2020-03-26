import React, {} from 'react'
import PhoneCard from './PhoneCard'
import { connect } from 'react-redux'

const PhonesPreviewList = (props) => {
    const { visiblePhoneList } = props
    console.log(visiblePhoneList)
    return (
        <div>
            {
                visiblePhoneList.map(phone => (
                    <PhoneCard
                        key={`mall-phone-${phone.id}`}
                        detail={phone}
                    />
               ))
            }
        </div>
    )
}


const getVisiblePhones = (filter) => {
    
}
const mapStateToProps = state => ({
    visiblePhoneList: state.phonesPreivewList
})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PhonesPreviewList)