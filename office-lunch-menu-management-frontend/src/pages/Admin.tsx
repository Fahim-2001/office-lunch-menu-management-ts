import React, { useEffect, useState } from "react";
import AddMenu from "../features/AdminFeatures/AddMenu";
import axios from "axios";

interface Menu {
  id: number;
  date: string;
  options: string[];
}
const Admin: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get<Menu[]>('http://localhost:3000/api/menus');
        setMenus(res.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };
    fetchMenus();
  }, []);
  console.log(menus)
  return (
    <div>
      <h1>Admin Interface</h1>
      <AddMenu />
    </div>
  );
};

export default Admin;
