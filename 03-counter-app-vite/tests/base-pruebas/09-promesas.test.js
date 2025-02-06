import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe", (done) => {
    const id = 1;
    const heroe = getHeroeByIdAsync(id).then(({ name }) => {
      done();
      expect(name).toEqual("Batman");
    });
  });
  test("getHeroeByIdAsync debe regresar un error si no existe", (done) => {
    const id = 100;
    const heroe = getHeroeByIdAsync(id).catch((error) => {
      console.log(error);
      done();
    });
  });
});
