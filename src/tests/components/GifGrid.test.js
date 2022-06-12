import React from 'react';
import {shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';
import '@testing-library/jest-dom';

//Controla la información que recibirá y arrojará useFetchGifs
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas con GifGrid.js', ()=>{
    let category="Pikachu";
    test('should  mach the snapshot', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper=shallow(< GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show and change the images when use the Custom Hook useFetchGifs.js', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'ABC Title'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper=shallow(< GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        //expect(wrapper).toMatchSnapshot;
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})