import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

//{ useEffect, useState } from 'react'
import GifGridItem from './GifGridItem'
//import { getGifs } from '../helpers/GetGifs'
const GifGrid = ({category})=> {
  const {data:images, loading}=useFetchGifs(category);
  
  //console.log(state);
   // const [counter, setCounter] = useState(0)
    /*
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category)
      .then(gifs => {
        console.log(gifs);
        setImages(...images, gifs);

      });
  }, [category])*/

    //<button onClick={()=>{setCounter(counter+1); console.log(counter)}} >getGifs</button>

    return (
      <>
      <h2>{category}</h2>
      {loading && <p>Loading</p>}
      <div className="GridGifs">
          
          {//en la linea de abajo cpm {...image} solo se envían las propiedades de la image
          images.map(image=> (<GifGridItem {...image} key={image.id}/>))
          }
      
      </div>
      
      
      
      </>
    )
    /*{loading ? 'cargando...': 'True'}
    <div className="GridGifs">
          
          {//en la linea de abajo cpm {...image} solo se envían las propiedades de la image
          images.map(image=> (<GifGridItem {...image} key={image.id}/>))
          }
      
      </div>*/
  }


export default GifGrid