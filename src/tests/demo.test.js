//Todas las pruebas que se ecjuten dentro de esa descripción te saldra listado enl consola
describe('pruebas en el archivo demo.test.js', () => {
  test('deben ser iguales los strings', () => {
  
    // 1. Inicializacion
    const mensaje = "Hola Mundo";
  
    // 2.  Estimulo
    const mensaje2 = `Hola Mundo`;
  
    // 3. Observar el comportamiento
    //Le damos un entrada y esperamos que sea esa salida
    expect(mensaje).toBe(mensaje2);
  })
})

