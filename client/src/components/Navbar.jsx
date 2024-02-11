import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="container">
        <div className="header  p-5">
          <div className="logo">
            <NavLink to="/">RAJA</NavLink>
          </div>
          <div className="title">
            <nav>
              <ul className="flex flex-row gap-x-5">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">SignUp </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
