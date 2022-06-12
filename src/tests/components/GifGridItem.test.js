import React from 'react';

//import { shallowToJson } from "enzyme-to-json";
import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en GifGridItem", ()=>{

    const wrapper=shallow(<GifGridItem title='Hola' url="https://r34663.jpg"/>);
    test('should show the component', () => {
        
        expect(wrapper).toMatchSnapshot();
        
        
    })
    test('should say the </p> is ok', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe('Hola');
    })
    
    test('should have the img and url in <img>', () => { 
        const img=wrapper.find('img');
        expect(img.props().src).toBe('https://r34663.jpg');
        expect(img.props().alt).toBe('Hola');
    })
    test('should have the class animate__fadeInLeft', () => { 
        const div=wrapper.find('div');
        expect(div.props().className).toContain("animate__fadeInLeft");
        
        //El renglón de arriba se puede hacer también
        
        /*
        const className=div.prop('className');
        expect(className.includes("animate__fadeInLeft")).toBe(true);
        
        
        */
    
    })
})