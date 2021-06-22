import React from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import useToken from '../../useToken';
import "./NavBar.css";

function NavBarGroup() {
  const navBarRef = React.useRef();

  const openNavBar = () => {
    navBarRef.current.openNavBar();
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = "https://alberto512.github.io/ListsWeb/"
  }

  const { token } = useToken();

  if(!token) {
    return (
      <React.Fragment>
        <MDBIcon size="2x" className="icon" onClick={openNavBar} icon="bars" />
  
        <NavBar ref={navBarRef}>
          <div className="div-nav-bar">
            <div className="div-nav-elements">
              <ul>
                <li>
                  <NavLink exact activeClassName="current" to="/ListsWeb/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="current" to="/ListsWeb/auth">
                    Authenticate
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </NavBar>
      </React.Fragment>
    );
  }
  
  return (
    <React.Fragment>
      <MDBIcon size="2x" className="icon" onClick={openNavBar} icon="bars" />

      <NavBar ref={navBarRef}>
        <div className="div-nav-bar">
          <div className="div-nav-elements">
            <ul>
              <li>
                <NavLink exact activeClassName="current" to="/ListsWeb/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="current" to="/ListsWeb/anime/">
                  Anime
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="current" to="/ListsWeb/manga/">
                  Manga
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="current" to="/ListsWeb/book/">
                  Book
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="current" to="/ListsWeb/movie/">
                  Movie
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="current" to="/ListsWeb/series/">
                  Series
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="current" to="/ListsWeb/videogame/">
                  Videogame
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="current" to="/ListsWeb/" onClick={logout}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </NavBar>
    </React.Fragment>
  );
}

export default NavBarGroup;
