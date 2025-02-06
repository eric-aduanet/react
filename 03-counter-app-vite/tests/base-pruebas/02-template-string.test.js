import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Estas son las pruebas para el paquete template-string", () => {
  test("Probando el metodo getSaludo", () => {
    expect(getSaludo("Eric")).toBe("Hola, Eric");
  });
});
