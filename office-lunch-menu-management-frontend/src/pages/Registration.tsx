import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RegistrationStyle.css";

const Registration: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e?.preventDefault();
      if (!role || !email || !password) {
        setError("All fields are required");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        { name, email, password, role }
      );

      if (response.status === 201) {
        alert(`Successfully registered as an ${role}`);
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
        if (role === "admin") {
          navigate("/admin");
          window.location.reload();
        } else if (role === "employee") {
          navigate("/employee");
          window.location.reload();
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="reg-container">
      <form action="" onSubmit={handleRegister}>
        <div className="reg-title">
          <label htmlFor="role">Register as :</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="reg-selects"
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="reg-input"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="reg-input"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="reg-input"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="reg-btn">
          Register
        </button>
      </form>
      <p className="reg-footer">
        Already registered? <Link to={"/"}>Login</Link>
      </p>
    </div>
  );
};

export default Registration;
