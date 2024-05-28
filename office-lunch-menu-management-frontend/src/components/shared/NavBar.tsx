import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <p className="head-title">Office Lunch Management System</p>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Admin</Link>
        </li>
        <li className="nav-item">
          <Link to="/employee">Employee</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
