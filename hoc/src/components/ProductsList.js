import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/data";

function ProductsList(props) {

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
          {filteredProducts.length>0?<h2>Products</h2>:<h2>Sorry!!No match found</h2>}
      </div>
      {filteredProducts.map((product) => (
        <ProductCard key={product.sku} {...product}/>
      ))}
    </div>
    </div>
  );
}

export default ProductsList;
