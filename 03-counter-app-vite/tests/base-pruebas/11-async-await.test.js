import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe retornar un url a la imagen", async () => {
    const url = await getImagen();
    console.log(url);
  });
});
