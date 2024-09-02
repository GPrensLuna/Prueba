// src/tests/auth.test.ts

import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import { loginPOST } from "../src/controllers/POST/loginPOST";
import { registerPOST } from "../src/controllers/POST/registerPOST";

// Configura el servidor para pruebas
const app = express();
app.use(bodyParser.json());
app.use("/auth", loginPOST);
app.use("/auth", registerPOST);

describe("Authentication Endpoints", () => {
  // Limpia la base de datos en memoria antes de cada prueba
  beforeEach(() => {
    // Resetea usuarios para cada prueba
    // Aquí deberías restablecer el estado inicial si tienes una base de datos real
  });

  it("should register a user successfully", async () => {
    const response = await request(app).post("/auth/register").send({
      username: "testuser",
      password: "password123",
    });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully");
  });

  it("should not register a user if the username already exists", async () => {
    // Primero, registra el usuario
    await request(app).post("/auth/register").send({
      username: "testuser",
      password: "password123",
    });

    // Luego, intenta registrar al mismo usuario de nuevo
    const response = await request(app).post("/auth/register").send({
      username: "testuser",
      password: "password123",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("User already exists");
  });

  it("should log in successfully with correct credentials", async () => {
    // Primero, registra el usuario
    await request(app).post("/auth/register").send({
      username: "testuser",
      password: "password123",
    });

    // Luego, intenta iniciar sesión con las credenciales correctas
    const response = await request(app).post("/auth/login").send({
      username: "testuser",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Login successful");
  });

  it("should not log in with incorrect credentials", async () => {
    // Primero, registra el usuario
    await request(app).post("/auth/register").send({
      username: "testuser",
      password: "password123",
    });

    // Luego, intenta iniciar sesión con credenciales incorrectas
    const response = await request(app).post("/auth/login").send({
      username: "testuser",
      password: "wrongpassword",
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid credentials");
  });
});
