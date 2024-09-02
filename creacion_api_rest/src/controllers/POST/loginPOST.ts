/* import { type Request, type Response } from "express";

export const loginPOST = (req: Request, res: Response) => {
  // Implementación de la lógica de login
  res.status(200).json({ message: "Login exitoso" });
}; */

import { Request, Response } from "express";

// Simulación de usuarios en memoria para pruebas
const users: Array<{ username: string; password: string }> = [];

export const loginPOST = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
