import { pool } from "../config/db";
import { Menu } from "../types/menuType";

export const allMenu = async () => {
  try {
    const result = await pool.query("SELECT * FROM menus");
    return result.rows;
  } catch (error:any) {
    throw new Error(error.message);
  }
};

export const addMenu = async (menuData:Menu) => {
  try {
    const { date, options } = menuData;
    const result = await pool.query(
      "INSERT INTO menus (date, options) VALUES ($1, $2) RETURNING *",
      [date, options]
    );
    const menuDate = new Date(
      result.rows[0].date.toLocaleString("en-US", { timeZone: "UTC" })
    );
    const menu = {
      id: result.rows[0].id,
      date: menuDate.toISOString().split("T")[0],
      options: result.rows[0].options,
    };
    return menu;
  } catch (error:any) {
    throw new Error(error.message);
  }
};
