// import { render } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';


describe("Pruebas en <PrimeraApp />", () => {
  // test("componente PrimeraApp debe incluir el mensaje 'hola perro de mierda'", () => {
  //   const saludo = "hola perro de mierda";
  //   const wrapper = render(<PrimeraApp saludo={saludo} />);
  //   expect(wrapper.getByText(saludo)).toBeInTheDocument();
  // })

  test("debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "hola perro de mierda";
    const wrapper = shallow(<PrimeraApp saludo={saludo}></PrimeraApp>);
    expect(wrapper).toMatchSnapshot();
  })

  test("debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola perriqui";
    const subtituloTest = "Hola perkin";

    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtituloTest}></PrimeraApp>)
    const subtitulo = wrapper.find("p").text().trim();

    expect(subtitulo).toBe(subtituloTest);

  })
})