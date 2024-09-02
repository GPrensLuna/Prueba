import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Application } from "express";
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API",
    version: "1.0.0",
    description: "Documentación de la API",
  },
  servers: [
    {
      url: "http://localhost:4000",
      description: "Servidor local",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/controllers/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (server: Application) => {
  server.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
