import { Request, Response } from "express";
import { pool } from "../config/db";
import { addMenu, allMenu } from "../services/menuServices";

export const getAllMenus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const menus = await allMenu();
    res.json(menus);
  } catch (error) {
    console.error("Error fetching menus:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createMenu = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const menu = await addMenu(req.body);
    res.status(201).json(menu);
  } catch (error) {
    console.error("Error creating menu:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
