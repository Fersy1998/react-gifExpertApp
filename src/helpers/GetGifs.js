export const getGifs= async(category)=>{
        
        
        
       
    //console.log(category);
    //const url='https://api.giphy.com/v1/gifs/search?api_key=pWh0FHHn7oYjnA4DS9ogj3daHsgvnmZJ&limit=10&q='+category.replace(/ /g, "");
    const url='https://api.giphy.com/v1/gifs/search?api_key=pWh0FHHn7oYjnA4DS9ogj3daHsgvnmZJ&limit=10&q='+encodeURI(category);
    //console.log(url);
    const res= await fetch(url);
    const {data}=await res.json();
  
    
    const gifs=data.map(imagen=>{
        return{
            id:imagen.id,
            title:imagen.title,
            url:imagen.images.downsized_medium.url
        }
    })
   // setImages(gifs);
   //console.log(gifs)
   return gifs;
}