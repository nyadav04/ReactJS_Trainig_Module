import withSearch from "./components/withSearch";
import ProductsList from "./components/ProductsList";
import "./App.css";

function App() {
  
  const ProductListWithSearch=withSearch(ProductsList);
  return (
    <div>
     <ProductListWithSearch/>
    </div>
  );
}

export default App;
