import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroById debe regresar un heroe por id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroById debe regresar undefined si no existe", () => {
    const id = 0;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });
  test("getHeroByOwner con el argumento DC debe regresar 3 elementos", () => {
    const hero = getHeroesByOwner("DC");
    expect(hero.length).toBe(3);
  });
  test("getHeroByOwner con el argumento Marvel debe regresar 3 elementos", () => {
    const hero = getHeroesByOwner("Marvel");
    expect(hero.length).toBe(2);
  });
});
