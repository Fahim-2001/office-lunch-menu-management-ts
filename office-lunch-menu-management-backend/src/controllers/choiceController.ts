import { Request, Response } from "express";
import { pool } from "../config/db";
import { addChoice, allChoices } from "../services/choiceServices";

export const getAllChoices = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const choices = await allChoices();
    res.json(choices);
  } catch (error: any) {
    console.error("Error fetching choices:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createChoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const choice = await addChoice(req.body);
    res.status(201).json(choice);
  } catch (error: any) {
    console.error("Error creating choice:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
