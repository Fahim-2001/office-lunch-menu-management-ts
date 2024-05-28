import { Request, Response } from "express";
import { addUserToDB, getAllUsersFromDB, verifyUser } from "../services/userServices";

export const allUsers = async (req: Request, res: Response) =>{
    try {
        const users = await getAllUsersFromDB();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error getting user:", error);
    return res.status(500).json({ message: "Internal server error" });
    }
}

export const register = async (req: Request, res: Response) => {
  try {
    const doesExist = await verifyUser(req.body);
    if(doesExist){
        return res.status(200).json({ message: "User already exists"});
    }

    const userData = await addUserToDB(req.body);
    return res.status(201).json({ message: "User registered successfully", user: userData });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
