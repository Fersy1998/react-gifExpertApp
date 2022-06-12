import React from 'react';

import { getGifs } from "../../helpers/GetGifs";


describe('Pruebas en Helper GetGifs.js', ()=>{

    const category="Sakura";
    test('should say if the parameter category was sent', async() => { 
        const gifs= await getGifs(category);
        expect(gifs.length).toBe(10);
    })
    test('should say if the parameter category not sent', async() => { 
        const gifs= await getGifs('');
        expect(gifs.length).toBe(0);
    })

})
