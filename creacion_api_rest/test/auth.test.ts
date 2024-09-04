import bcrypt from "bcryptjs";
import request from "supertest";
import bodyParser from "body-parser";
import { describe, it, expect, beforeEach } from "vitest";
import express, { type Application } from "express";
import { db } from "../src/prisma";
import { registerPOST } from "../src/controllers/POST/registerPOST";
import { loginPOST } from "../src/controllers/POST/loginPOST";

// Configura el servidor para pruebas
const app: Application = express();
app.use(bodyParser.json());
app.use("/auth/register", registerPOST);
app.use("/auth/login", loginPOST);

describe("Authentication Endpoints", () => {

  beforeEach(async () => {
    // Limpiar la base de datos antes de cada prueba
    await db.user.deleteMany({});
  });

  it("debería registrar un usuario exitosamente", async () => {
    const res = await request(app).post("/auth/register").send({
      name: "test",
      email: "test@test.com",
      password: "password123",
    });

    expect(res.status).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  });

  it("debería fallar el registro si faltan campos obligatorios", async () => {
    const response = await request(app).post("/auth/register").send({
      name: "test",
      password: "password123",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Missing required fields");
  });

  it("debería fallar el registro si el email ya está registrado", async () => {
    await request(app).post("/auth/register").send({
      name: "test",
      email: "test@test.com",
      password: "password123",
    });

    const response = await request(app).post("/auth/register").send({
      name: "test2",
      email: "test@test.com",
      password: "password456",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email already in use");
  });

  it("debería fallar el registro si la contraseña es débil debe tener mas de 6 caracteres", async () => {
    const response = await request(app).post("/auth/register").send({
      name: "test",
      email: "test2@test.com",
      password: "123",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Password does not meet security requirements");
  });

  it("debería fallar el registro si el email tiene un formato inválido", async () => {
    const response = await request(app).post("/auth/register").send({
      name: "test",
      email: "invalid-email",
      password: "password123",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid email format");
  });

  it("debería registrar un usuario y verificar que la contraseña esté hasheada", async () => {
    const response = await request(app).post("/auth/register").send({
      name: "test",
      email: "test@test.com",
      password: "password123",
    });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully");

    const user = await db.user.findUnique({ where: { email: "test@test.com" } });

    expect(user).not.toBeNull();
    expect(user).toHaveProperty("password");

    if (user) {
      const isPasswordMatch = await bcrypt.compare("password123", user.password);
      expect(isPasswordMatch).toBe(true);
    } else {
      throw new Error("User should not be null");
    }
  });

  it("debería iniciar sesión exitosamente con credenciales válidas", async () => {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await db.user.create({
      data: {
        name: "test",
        email: "test@test.com",
        password: hashedPassword,
      },
    });

    const res = await request(app).post("/auth/login").send({
      email: "test@test.com",
      password: "password123",
    });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Successfully logged in");
  });

  it("debería fallar el inicio de sesión si el email tiene un formato inválido", async () => {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await db.user.create({
      data: {
        name: "test",
        email: "test@test.com",
        password: hashedPassword,
      },
    });

    const response = await request(app).post("/auth/login").send({
      email: "invalid-email",
      password: "password123",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid email format");
  });

  it("debería fallar el inicio de sesión si el usuario no existe", async () => {
    const response = await request(app).post("/auth/login").send({
      email: "test23@test.com",
      password: "password123",
    });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("User not found");
  });

  it("debería fallar el inicio de sesión si la contraseña es incorrecta", async () => {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await db.user.create({
      data: {
        name: "test",
        email: "test@test.com",
        password: hashedPassword,
      },
    });

    const response = await request(app).post("/auth/login").send({
      email: "test@test.com",
      password: "wrongpassword",
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid password");
  });
});
