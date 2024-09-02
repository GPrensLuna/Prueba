//* Importación para extraer datos de la base de datos
import { type Request, type Response } from "express"; //* Tipos de datos de express
import * as validator from "validator"; //* Biblioteca para validar datos
import { db } from "../../prisma"; //* Conexión a la base de datos usando Prisma
import bcrypt from "bcryptjs"; //* Biblioteca para encriptar contraseñas

//* Definición de la interfaz para los datos del usuario
interface User {
  name: string;
  email: string;
  password: string;
}

//* Función para manejar el registro de usuarios
export const registerPOST = async (req: Request, res: Response) => {
  try {
    //? Extraer los datos del cuerpo de la solicitud

    //? Validar que todos los campos requeridos están presentes


    //? Verificar si ya existe un usuario con el mismo email en la base de datos

    //? Si el email ya está en uso, retornar un error

    //? Validar el formato del email

    //? Validar la contraseña (ejemplo simple: longitud mínima de 6 caracteres)


    //? Encriptar la contraseña antes de almacenarla en la base de datos

    //? Crear un nuevo usuario en la base de datos
;
    //? Almacenar la contraseña encriptada

    //? Responder con éxito si el usuario fue creado correctamente

  } catch (error) {
    //? Manejar errores inesperados y responder con un mensaje genérico
  }
};
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: The authentication API
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 description: The user's email address
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: "password123"
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User registered successfully"
 *       400:
 *         description: Bad request, missing required fields or invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing required fields"
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