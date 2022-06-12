
/*import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
//import { renderHook } from '@testing-library/react-hooks'
//import {renderHook} from '@testing-library/react-hooks'
import {renderHook} from '@testing-library/react'
describe('pruebas en useFetchGifs', ()=>{

    test('should first', () => { 
        const {result}=renderHook(()=>useFetchGifs('Sakura'));
        const {data, loading}=result;
        console.log(data, loading);
    
    })
})*/

import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {


    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;
        console.log(data, loading);
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
    
    
    
})
