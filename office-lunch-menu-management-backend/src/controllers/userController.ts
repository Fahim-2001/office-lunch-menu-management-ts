import { Request, Response } from "express";
import {
  addUserToDB,
  getAllUsersFromDB,
  verifyUser,
} from "../services/userServices";

export const allUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersFromDB();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const existingUser = await verifyUser(req.body);
    if (existingUser != null) {
      return res.status(200).json({ message: "User already exists" });
    }

    const userData = await addUserToDB(req.body);
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        name: userData[0].name,
        email: userData[0].email,
        role: userData[0].role,
      },
    });

  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const existingUser = await verifyUser(req.body);
    if (existingUser !== null) {
      return res.status(200).json({
        message: "User logged in successfully",
        user: {
          name: existingUser[0].name,
          email: existingUser[0].email,
          role: existingUser[0].role,
        },
      });
    }
    return res.status(404).json({ message: "User doesn't exists" });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
