import axios from "axios";
import React, { useEffect, useState } from "react";
import { Menu } from "../types/types";
import TodayMenu from "../components/EmployeeComponents/TodayMenu";
import "../styles/EmployeeStyles.css";
import SelectLunch from "../features/EmployeeFeatures/SelectLunch";

const Employee: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

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
  }, []);
  
  return (
    <div>
      <h1 className="employee-title">Employee Interface</h1>
      <TodayMenu menus={menus} />
      <SelectLunch
        menu={menus.find(
          (menu) => menu.date === new Date().toISOString().split("T")[0]
        )}
      />
    </div>
  );
};

export default Employee;
