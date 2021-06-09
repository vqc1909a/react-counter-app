import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en 07-deses-arr.js', () => {
  test('retornaArreglo debe de retornar un array con un string y un numero', () => {
    const arr = retornaArreglo();
    const [letras, numeros] = retornaArreglo();

    const typeDataString = typeof letras;
    const typeDataNumber = typeof numeros;

    expect(arr).toEqual(['ABC', 123]);
    expect(letras).toBe('ABC');
    expect(numeros).toBe(123);
    expect(typeDataString).toBe('string');
    expect(typeDataNumber).toBe('number');

  })
})
