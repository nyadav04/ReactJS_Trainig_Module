import logo from './logo.svg';
import './App.css';


function App() {

  async function *  getData(){
  const response=await fetch("https://fakestoreapi.com/products");
  yield await response.json();
  }
const data=getData();
console.log(data.next().then(({value,done})=>{
  console.log(value)
}));
  return (
    <div className="App">
      generator with async
    </div>
  );
}

export default App;
