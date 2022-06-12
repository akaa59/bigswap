import React from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <NavLink className="logo" to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            <ul className="navbar-ul">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#ffa53b"
                        }
                      : { color: "#fff" }
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/menu"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#ffa53b"
                        }
                      : { color: "#fff" }
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#ffa53b"
                        }
                      : { color: "#fff" }
                  }
                >
                  A Propos
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.ubereats.com/fr/store/big-swap/rXjT2ytyWiOhmxlWSnbabQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uber Eats
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
