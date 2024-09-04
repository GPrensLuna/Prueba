import { Router } from "express";
import * as routers from "../controllers";

export const router = Router();

router.get("/Saludo", routers.saludoGet);

//? Crea la ruta del Register y del login
router.post("/auth/Login",routers.loginPOST );
router.post("/Register",routers.registerPOST );

