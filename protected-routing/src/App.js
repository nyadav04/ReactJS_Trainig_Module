import React from "react";
import Home from "./components/HomeComponent";
import Account from "./components/AccountComponent";
import Contact from "./components/ContactComponent";
import useAuth from "./useAuth";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import { Link } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";

function App() {
  const [isAuth, login, logout] = useAuth(false);

  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          My App
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" className="navbar-brand">
                Home
              </Link>
            </li>
            <li class="nav-item">
              {isAuth ? (
                <Link class="nav-link" to="/account">
                  Account
                </Link>
              ) : (
                ""
              )}
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              {isAuth ? (
                <>
                  {" "}
                  <span className="status">You are logged in...</span>
                  <button className="btn btn-secondary" onClick={logout}>
                    <Link className="nav-link status" to="/">
                      Logout
                    </Link>
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <span className="status">You are logged out...</span>
                  <button className="btn btn-success" onClick={login}>
                    <Link className="nav-link status" to="/">
                      Login
                    </Link>
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <ProtectedRoute
            exact
            path="/account"
            component={Account}
            auth={isAuth}
          />

          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
