import React from 'react'

function PCard(props) {
    const {title,style,description,price,isFreeShipping}=props
    return (
        <>
        <div className='container'>
            <p><b>Title : </b>{title}</p>
            <p><b>Style : </b>{style}</p>
            <p><b>Description : </b>{description}</p>
            <p><b>Price : </b>{price}</p>
            <p><b>Free Shipping : </b>{isFreeShipping}</p>
        </div>
        <hr/>
        <hr/>
        </>
    )
}

export default PCard;