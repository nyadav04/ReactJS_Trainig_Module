import logo from './logo.svg';
import './App.css';

function App() {

  async function *  getData(){
  const response=await fetch("https://restcountries.com/v3.1/all");
  yield await response.json();
  }
const data=getData();
console.log(data,"Generator Function")
  return (
    <div className="App">
    Generator Function
    </div>
  );
}

export default App;
