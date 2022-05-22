import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <nav className="navbar">
            <NavLink className="logo" to="/">
            
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
                >
                  Uber Eats
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
