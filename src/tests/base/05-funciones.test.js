import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones.js', () => {
  test('getUser debe de retornar un objeto', () => {

    const userTest = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
    const user = getUser();
    expect(user).toEqual(userTest);

    //getUsuarioActivo debe de retornar un objeto
  })
  test('getUserActive debe retornar un objeto', () => {
    const userActiveTest = {
      uid: 'ABC567',
      username: "Cesar"
    }
    const nombre = "Cesar";
    const user_active = getUsuarioActivo(nombre);

    expect(user_active).toEqual(userActiveTest);
  })
})