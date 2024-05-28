import { Request, Response } from 'express';
import { pool } from '../config/db';

export const getAllChoices = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM choices');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching choices:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createChoice = async (req: Request, res: Response): Promise<void> => {
  try {
    const { employeeName, date, choices } = req.body;
    const result = await pool.query(
      'INSERT INTO choices (employee_name, date, choices) VALUES ($1, $2, $3) RETURNING *',
      [employeeName, date, choices]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating choice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
