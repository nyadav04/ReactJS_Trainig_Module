import React from "react";
import Pcard from "./Pcard";
import products from "../Data/data";

function ProductList(props) {

  let { searchTerm } = props;

  const filterProducts = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase();
    return products.filter((product) => {
      let str =
        `${product.title} ${product.style} ${product.sku}`.toUpperCase();
      return str.indexOf(searchTerm) >= 0;
    });
  };
  
  const filteredProducts = filterProducts(searchTerm);

  return (
      <div>
    <div >
        <div className="title">
          {filteredProducts.length>0?<h2>Products</h2>:<h2>No match found</h2>}
      </div>
      {filteredProducts.map((product) => (
        <Pcard key={product.sku} {...product}/>
      ))}
    </div>
    </div>
  );
}

export default ProductList;