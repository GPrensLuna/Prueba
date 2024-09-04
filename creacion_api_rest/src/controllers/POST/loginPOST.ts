import { type Request, type Response } from "express";//* typos de datos de express
import * as validator from "validator"; // * valida los datos
import { db } from "../../prisma";//* conexión a la base de datos
import bcrypt from "bcryptjs"; //* para encriptar la password

interface User {
  email: string;
  password: string;
}

export const loginPOST = async (req: Request, res: Response) => {
  try {
    const { email, password }: User = req.body;

    //? Validar el formato del email
 

    //? Buscar al usuario en la base de datos
  

    //? Si el usuario no se encuentra, retornar 404
 

    //? Verificar que la contraseña coincida

    //? Si la contraseña no coincide, retornar 401
  

    //? Respuesta exitosa
  } catch (error) {
    //? Manejar errores del servidor
  }
};
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email address
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: "password123"
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Successfully logged in"
 *       400:
 *         description: Bad request, invalid email format, user not found, or invalid password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid email or password  format"
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */