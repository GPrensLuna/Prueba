// ? importa json y cors
import express, { Application, json } from "express";
import cors from "cors";
//?
// ! No modificar este contenido
import { router } from "./router/router";
import setupSwagger from "./swagger";
// !

//* Implementación de express
export const server: Application = express();

//* Middleware son cors y json en este caso

//? json
server.use(json());
server.use(cors());
//?

// ! No modificar este contenido
//* Configuración de Swagger UI
server.use("/api", router);
setupSwagger(server);

// !
