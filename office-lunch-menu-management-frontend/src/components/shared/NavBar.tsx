import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import { useUser } from "../../contexts/UserContext";

const NavBar: React.FC = () => {
  const { user } = useUser();
  const loginPage = window.location.href;

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="navbar">
      <p className="head-title">Office Lunch Management System</p>
      {user && (
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "14px",
            margin: "20px 0px",
          }}
        >
          Welcome, {user.name}
        </p>
      )}
      {user ? (
        <ul className="nav-list">
          {user.role === "admin" && (
            <li className="nav-item">
              <Link to="/admin">Admin</Link>
            </li>
          )}
          {user.role === "employee" && (
            <li className="nav-item">
              <Link to="/employee">Employee</Link>
            </li>
          )}
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      ) : (
        !loginPage && (
          <div className="nav-item">
            <Link to="/">Login</Link>
          </div>
        )
      )}
    </nav>
  );
};

export default NavBar;
