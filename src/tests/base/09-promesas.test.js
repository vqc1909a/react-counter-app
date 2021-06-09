import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas en 09-promesas.js", () => {
  test("getHeroeByIdAsync debe retornar un heroe async", async () => {
    const id = 20;
    let heroeAsync
    try{
      heroeAsync = await getHeroeByIdAsync(id);
      const heroeAsyncTest = heroes.find(heroe => heroe.id === id);
      console.log(heroeAsync);
      expect(heroeAsync).toEqual(heroeAsyncTest);
    }catch(err){
      console.log(err);
      expect(err).toBe("No se pudo encontrar el héroe");
    }
  });

  test("getHeroeByIdAsync debe retornar un heroe fetch", (done) => {
    const id = 4;
    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toEqual(heroes.find(hero => hero.id === id));
        done();
      })
      .catch(err => {
        expect(err).toBe("No se pudo encontrar el héroe");
        console.log(err);
        done();
      })
  });
})