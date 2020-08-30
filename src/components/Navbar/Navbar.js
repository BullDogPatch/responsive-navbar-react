import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import Button from "../Button";

class Navbar extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">
          React
          <i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <Button />
      </nav>
    );
  }
}

export default Navbar;
