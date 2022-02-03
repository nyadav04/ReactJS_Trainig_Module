import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../useAuth";

function Navbar(props) {
  const [isAuth, login, logout] = useAuth(false);
  console.log(isAuth);
  const setAuth=()=>{
    props.setAuth1(isAuth);
  }
  return (
    <div>
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
                    <Link className="nav-link" to="/">
                      Logout
                    </Link>
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <span className="status">You are logged out...</span>
                  <button className="btn btn-success" onClick={login}>
                    <Link className="nav-link" to="/">
                      Login
                    </Link>
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
