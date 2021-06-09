import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
  test('getHeroeById debe de retornar un heroe(objeto) ingresando un id', () => {
    const id = 5;
    const heroe = getHeroeById(id);
    const heroeTest = heroes.find(heroe => heroe.id === id);
    expect(heroe).toEqual(heroeTest);
  })

  test('getHeroeById debe de retornar undefined si el heroe no existe', () => {
    const id = 20;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  })

  //getHeroesByOwner debe de retornar un arreglo con los heroes de DC
  //owner
  //toEqual al arreglo filtrado
  test("getHeroesByOwner debe de retornar un arreglo con los heroes de DC", () => {

    const owner = "DC"
    const heroes = getHeroesByOwner(owner);
    const heroesTest =heroes.filter(heroe => heroe.owner === owner);
    expect(heroes).toEqual(heroesTest);

  })


  //getHeroesByOwner debe de retornar un arreglo con la cantidad de  héroes de Marvel
  //length = 2 // toBe
  test("getHeroesByOwner debe de retornar la longitud del arreglo con los héroes de Marvel", () => {
    const owner = "Marvel"
    const heroesLength = getHeroesByOwner(owner).length;
    const heroesLengthTest = heroes.filter(heroe => heroe.owner === owner).length;
    expect(heroesLength).toBe(heroesLengthTest);
  })


  test("getHeroesByOwner debe de retornar un arreglo vacio si el owner no existe", () => {
    const owner = "noexisto"
    const heroes = getHeroesByOwner(owner);
    expect(heroes).toEqual([]);
  })
})