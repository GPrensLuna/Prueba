// ? importa json y cors
import express, { Application, json } from "express";
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
//?

// ! No modificar este contenido
//* Configuración de Swagger UI
setupSwagger(server);
server.use("/api", router);

// !
