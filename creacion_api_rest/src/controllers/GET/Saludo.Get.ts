import { type Request, type Response } from "express";

/**
 * @swagger
 * /:
 *   get:
 *     summary: Saludo
 *     description: Retorna un saludo "Hello, World!"
 *     responses:
 *       200:
 *         description: Saludo exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, World!"
 */
export const saludoGet = (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, World!" });
};
