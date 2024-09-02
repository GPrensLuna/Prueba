import { describe, it, expect } from "vitest";
import { serverListener } from "../main";
import { PORT } from "../src/config";

describe("serverListener", (): void => {
  it("debe ser una función", (): void => {
    expect(typeof serverListener).toBe("function");
  });

  it("debería validar que el PORT es 4000", (): void => {
    expect(PORT).toBe(4000);
  });

  it("debería rechazar cuando el servidor falla al iniciar", async () => {
    await expect(serverListener()).rejects.toThrow("Server failed to start:");
  });

});