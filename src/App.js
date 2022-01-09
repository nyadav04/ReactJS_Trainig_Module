import withSearch from "./Components/Search";
import ProductList from "./Components/ProductList";
import "./App.css";

function App() {
  
  const ProductListWithSearch=withSearch(ProductList);
  return (
    <div>
     <ProductListWithSearch/>
    </div>
  );
}

export default App;