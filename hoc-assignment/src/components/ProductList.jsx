import React from 'react'
import {products} from "../data/data";
import Product from "./Product";
import Hoc from "./Hoc";
 function ProductList({searchTerm}) { 
const filterProducts=(searchTerm)=>{
searchTerm=searchTerm.toUpperCase();

const filterList=products.filter(product=>{
    let str=`${product.title} ${product.style} ${product.sku}`.toUpperCase();
    return (str.indexOf(searchTerm)>=0) ;
})
return filterList;
}
const filteredProduct=filterProducts(searchTerm);
    return (
        <div className="productList-container">
            {filteredProduct.map(m=>{

                return <Product key={m.sku} {...m}/>
            })}
        </div>
    )
}

export default Hoc(ProductList)
