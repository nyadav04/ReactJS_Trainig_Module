import React from 'react'

function ProductCard(props) {
    return (
        <>
        <div className='container'>
            <p><b>Title : </b>{props.title}</p>
            <p><b>Style : </b>{props.style}</p>
            <p><b>Description : </b>{props.description}</p>
            <p><b>Price : </b>{props.price}</p>
            <p><b>Free Shipping : </b>{props.isFreeShipping}</p>
        </div>
        <hr/>
        <hr/>
        </>
    )
}

export default ProductCard;
