import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/Add" className="nav-link">
                  <i className="fas fa-plus" /> Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  <i className="fas fa-question" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
