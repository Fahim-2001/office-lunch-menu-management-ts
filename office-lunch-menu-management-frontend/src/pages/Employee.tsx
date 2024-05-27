import axios from "axios";
import React, { useEffect, useState } from "react";
import { Menu } from "../types/types";
import TodayMenu from "../components/EmployeeComponents/TodayMenu";

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
  console.log(menus);
  return (
    <div>
      <h1>Employee Interface</h1>
      <TodayMenu menus={menus} />
    </div>
  );
};

export default Employee;
