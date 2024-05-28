import { pool } from "../config/db";
import { Choice } from "../types/choiceTypes";

export const allChoices = async () => {
  try {
    const result = await pool.query("SELECT * FROM choices");
    return result.rows;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const addChoice = async (choice: Choice) => {
  try {
    const { employeeName, date, choices } = choice;
    const result = await pool.query(
      "INSERT INTO choices (employee_name, date, choices) VALUES ($1, $2, $3) RETURNING *",
      [employeeName, date, choices]
    );
    return result.rows;
  } catch (error:any) {
    throw new Error(error.message);
  }
};
