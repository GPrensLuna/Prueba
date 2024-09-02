import { type Request, type Response } from "express";
/*
//* Importación para extraer daos de la base de datos

//import { db } from "../../prisma";

export const registerPOST = (req: Request, res: Response) => {
  //? Implementación del código para registrar un nuevo usuario
  res.status(201).json({ message: "Usuario registrado exitosamente" });
};
 */

export const registerPOST = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (users.find((u) => u.username === username)) {
    res.status(400).json({ message: "User already exists" });
  } else {
    users.push({ username, password });
    res.status(201).json({ message: "User registered successfully" });
  }
};
