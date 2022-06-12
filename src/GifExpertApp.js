//import React, { useState, useEffect } from 'react'
import React, { useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({deFaultCategories=[]}) => {
  //const categorias=['Sailor Moon', 'Cowboy Bebop', 'Kimagure Orange Road 1987'];

  const [categories, setCategories] = useState(deFaultCategories);
  //Agrega una nueva categoría
  
  /*
  const handledadd=()=>{
    setCategories(categorias=>[...categorias, "Air"]);
  }
  */
  return (
    <><h2>GifExpertApp</h2>
    {//La appa de abajo manda una referecia al hijo (AddCategory) de la constante setCategories
    }
    <AddCategory setCategories={setCategories}/>
    <hr />
    {
    //<button onClick={handledadd}>Agregar</button>
    
    }
    
     
      
      <div >{categories.map(category=> <GifGrid category={category} key={category}/>)}</div> 
    
    
    
    </>
    
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp