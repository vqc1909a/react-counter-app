import React from 'react';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper= shallow(<CounterApp />);
  })
  test("debe de mostrar <CounterApp /> correctamente con su valor por defecto", () => {
    // const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  })
  test("debe de mostrar el valor por defecto de 100", () => {
    const valueTest = 100;
    const wrapper = shallow(<CounterApp value={valueTest}/>)
    const counterText = parseInt(wrapper.find("h2").text().trim());
    expect(counterText).toBe(valueTest);
        
  })
  test("debe de incrementar +1 con el primer boton", () => {
    // const wrapper = shallow(<CounterApp/>)
    wrapper.find("button").at(0).simulate("click");
    const counterText = parseInt(wrapper.find("h2").text().trim());
    console.log(counterText);
    expect(counterText).toBe(11);
  })

  test("debe de disminuir 1 con el tercer boton", () => {
    // const wrapper = shallow(<CounterApp/>)
    wrapper.find("button").at(2).simulate('click');
    const counterText = parseInt(wrapper.find("h2").text().trim());
    console.log(counterText);
    expect(counterText).toBe(9);
  })
   test("debe de resetearmen el valor con el segundo boton", () => {
    const wrapper = shallow(<CounterApp value={105}/>)
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(2).simulate('click');
    wrapper.find("button").at(1).simulate('click');
    wrapper.find("button").at(2).simulate('click');
    const counterText = parseInt(wrapper.find("h2").text().trim());
    console.log(counterText);
    expect(counterText).toBe(104);
  })
})