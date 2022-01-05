import PersonList from "./components/PersonList";
import PersonAdd from "./components/PersonAdd";
import PersonRemove from "./components/PersonRemove";

function App() {
  return(
    <div className="App">
      <PersonRemove/>
      <PersonAdd/>
      <PersonList/>
    </div>
  )
}

export default App;
