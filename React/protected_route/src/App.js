import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import CardsComponent from "./pages/CardsComponent";
import AccountComponent from "./pages/AccountComponent";
import ProtectedRoute from './ProtectedRoute';
import useAuth from "./useAuth";


function App() {
  const [isAuth, login, logout] = useAuth(false)
  return (
    <div className="ui container">
      <h2>Protected routes session</h2>
      <Router>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts Page(Private)</Link>
          </li>
          <li>
            <Link to="/cards">Cards Page(Unprivate)</Link>
          </li>
        </ul>
        { isAuth ? (<><div className="ui message brown">You are logged in</div><button className="ui button blue" onClick={logout}>Logout</button></>) : (<><div className="ui message green">You are logged out..</div><button className="ui button blue" onClick={login}>Login</button></>)}
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/cards" exact component={CardsComponent} />
          <ProtectedRoute path="/accounts" component={AccountComponent} auth= { isAuth }/>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;