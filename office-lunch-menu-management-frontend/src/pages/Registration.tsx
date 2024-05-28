import React, { useState } from "react";
import axios from "axios";

const Registration: React.FC = () => {
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e?.preventDefault();
      if (!role || !email || !password) {
        setError("All fields are required");
        return;
      }
      console.log({ email, password, role });
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        { email, password, role }
      );

      if (response.status === 201) {
        alert(`Successfully registered as an ${role}`);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleRegister}>
        <div>
          <label htmlFor="role">Register as :</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
