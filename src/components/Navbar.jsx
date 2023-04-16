import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import Logo from "../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo" onClick={() => setNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav_toggle-btn"
          onClick={() => setNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
