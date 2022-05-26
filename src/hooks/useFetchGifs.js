import { useState, useEffect } from "react"
import { getGifs } from "../helpers/GetGifs";
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data:[],
    loading:true
  
  })
  useEffect(() => {
    getGifs(category)
      .then(gifs => {
        //console.log(gifs);
        setState({
            data:gifs,
            loading:false
        });

      });
  }, [category])
  return state;
}
