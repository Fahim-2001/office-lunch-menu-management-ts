import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginStyle.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        { email, password }
      );
      console.log(response);
      if (response.status === 200) {
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
        if (response.data.user.role === "admin") {
            navigate("/admin");
          window.location.reload();
        } else {
            navigate("/employee");
            window.location.reload();
        }
      }
    } catch (error) {
      setError("Invalid login credentials");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-container">
      <p className="login-title">Login</p>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
            className="login-input"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="login-input"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p className="login-footer">
        Don't have any account? <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default Login;
