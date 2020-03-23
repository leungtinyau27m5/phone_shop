import React, {} from 'react'
import { useParams } from 'react-router-dom'

const ProductView = () => {
    const { phoneProductCode } = useParams()
    return (
        <div>
            {phoneProductCode}
        </div>
    )
}

export default ProductView