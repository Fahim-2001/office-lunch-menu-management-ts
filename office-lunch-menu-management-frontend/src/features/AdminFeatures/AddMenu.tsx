import axios from "axios";
import React, { useState } from "react";
import "../../styles/AdminStyles.css";

const AddMenu: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [options, setOptions] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date.trim() || !options.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    const newMenu = {
      date: date.trim(),
      options: options
        .trim()
        .split(",")
        .map((option) => option.trim()),
    };
    axios.post("http://localhost:3000/api/menus", newMenu).then((res) => {
      if (res.status === 201) {
        alert("Item added!");
      }
    });
    setDate("");
    setOptions("");
  };

  return (
    <div className="add-menu-container">
      <h2>Add Daily Menu Options</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="add-menu-input-label">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="add-menu-input"
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label className="add-menu-input-label">
            Options (comma-separated):
          </label>
          <input
            type="text"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
            placeholder="e.g., Sandwich, Salad, Soup"
            className="add-menu-input"
            required
          />
        </div>
        <button type="submit" className="add-menu-btn">
          Add Menu
        </button>
      </form>
    </div>
  );
};

export default AddMenu;
