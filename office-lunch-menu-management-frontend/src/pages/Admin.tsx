import React, { useEffect, useState } from "react";
import AddMenu from "../features/AdminFeatures/AddMenu";
import axios from "axios";
import MenuList from "../components/AdminComponents/MenuList";
import ViewChoices from "../components/AdminComponents/ViewChoices";
import '../styles/AdminStyles.css';
import { Choice, Menu } from "../types/types";


const Admin: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [choices, setChoices] = useState<Choice[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get<Menu[]>("http://localhost:3000/api/menus");
        setMenus(res.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };
    fetchMenus();

    const fetchChoices = async () => {
      try {
        const res = await axios.get<Choice[]>(
          "http://localhost:3000/api/choices"
        );
        setChoices(res.data);
      } catch (error) {
        console.error("Error fetching choices:", error);
      }
    };
    fetchChoices();
  }, []);
  
  return (
    <div>
      <h1 className="admin-title">Admin Interface</h1>
      <AddMenu />
      <div className="menu-choice-grid">
        <MenuList menus={menus} />
        <ViewChoices choices={choices} />
      </div>
    </div>
  );
};

export default Admin;
