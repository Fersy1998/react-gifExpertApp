import React from 'react';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';
import {shallow} from 'enzyme';

describe('pruebas en GifExpertApp.js', ()=>{
    test('should match the snapshot', () => { 
        //const categorias=['Sailor Moon', 'Cowboy Bebop', 'Kimagure Orange Road 1987']
        const wrapper=shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
        
    })
    test('should match the snapshot', () => { 
        const categorias=['Sailor Moon', 'Cowboy Bebop', 'Kimagure Orange Road 1987']
        const wrapper=shallow(<GifExpertApp deFaultCategories={categorias}/>);
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
        
    })

})