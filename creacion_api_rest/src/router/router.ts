import { Router } from "express";
import * as routers from "../controllers";

export const router = Router();

router.get("/", routers.saludoGet);

//? Crea la ruta del Register y del login
router.post("/Login",routers.loginPOST );
router.post("/Register",routers.registerPOST );

