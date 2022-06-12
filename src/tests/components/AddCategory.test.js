import { shallow } from "enzyme";
import React from "react";
import AddCategory from "../../components/AddCategory";
import '@testing-library/jest-dom';
describe('Pruebas en AddCategory.js', ()=>{
    
    const setCategory=()=>jest.fn();
    let wrapper=shallow(<AddCategory setCategories={setCategory}/>);
    
    beforeEach (()=>{
        jest.clearAllMocks();
        wrapper=shallow(<AddCategory setCategories={setCategory}/>);
    })
    test('should show perfectly', () => { 
        expect(wrapper).toMatchSnapshot();
    
    })
    test('should change the imput box', () => { 
        const input=wrapper.find('input');
        const value="Hamtaro"
        input.simulate('change', {
            target:{
            value:value
            }});
        }
    )
            
    test('shouldnt post information onsubmit', () => { 
        const form = wrapper.find("form");
        form.simulate('submit', {preventDefault(){}});
        expect(setCategory).not.toHaveBeenCalled;
    })
    
    test('should call the categories and clean the textbox', () => { 
        //Simulación del cambio de valor del input
        const input=wrapper.find('input');
        let value="Hamtaro"
        input.simulate('change', {
            target:{
            value:value
            }});
        //simulación del submit
        const form = wrapper.find("form");
        form.simulate('submit', {preventDefault(){}});
        expect(setCategory).toHaveBeenCalled;
        expect(input.props().value).toBe("");
       // expect(setCategory).toHaveBeenCalledWith( expect.any( Function ) );
    })
    
})