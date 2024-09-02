import { Router } from "express";
import { saludoGet } from "../controllers/GET/Saludo.Get";

export const router = Router();

router.get("/", saludoGet);

//? Crea la ruta del Register y del login
