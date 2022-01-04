import React from 'react'

export default function Product({title,style,description,price,isFreeShipping}) {
    return (
        <div className="container">
      
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Style:</b> {style}
      </p>
      <p>
        <b>Price:</b> {price}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
      <p>
        <b>Free shipping:</b> {isFreeShipping? "yes" :"no"}
      </p>
    </div>
    )
}
