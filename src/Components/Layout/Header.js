import React from "react";
import propTypes from "prop-types";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-danger mb-3 py-0 scrolling-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                SignOut
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};
export default Header;
