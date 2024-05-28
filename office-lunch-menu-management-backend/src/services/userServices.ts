import { pool } from "../config/db";
import { User } from "../types/userType";
import bcrypt from "bcrypt";

export const getAllUsersFromDB = async () => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    return allUsers.rows;
  } catch (error: any) {
    throw new Error("Error getting users: " + error.message);
  }
};
export const addUserToDB = async (user: User) => {
  try {
    const { email, password, role } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const res = await pool.query(
      "INSERT INTO users (email,password,role) VALUES ($1,$2,$3) RETURNING *",
      [email, hashedPassword, role]
    );
    return res.rows;
  } catch (error: any) {
    throw new Error("Add User To Database error: " + error.message);
  }
};

export const verifyUser = async(user:User)=>{
    try {
        const existingUser = await pool.query("SELECT * FROM users WHERE email=$1",[user.email]);
        if(user.email === existingUser.rows[0].email){
            return true;
        }
        return false;
    } catch (error: any) {
        throw new Error("Error getting users: " + error.message);
    }
}