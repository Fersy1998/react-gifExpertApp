import React from 'react'
const GifGridItem = ({id, url, title}) => {
   
    //console.log(id +url+title);
  return (
    <div className="card animate__animated animate__fadeInLeft" >
        <img alt={title} src={url} /> 
    </div>
  )
}


export default GifGridItem