import { describe, it, expect } from "vitest";
import { serverListener } from "../main";
import { PORT } from "../src/config";

// Creamos un espía para `console.log`
const originalConsoleLog = console.log;

describe("serverListener", (): void => {
  it("debe ser una función", (): void => {
    expect(typeof serverListener).toBe("function");
  });

  it("debería iniciar el servidor sin errores", async () => {
    await expect(serverListener()).resolves.not.toThrow();
  });

  it("debería validar que el PORT es 4000", (): void => {
    expect(PORT).toBe(4000);
  });
});
