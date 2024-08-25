import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

  const [Gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function fetchData(tag){
    setLoading(true);
    
    // image na path ma 2 data aave chhe etle 1 data ne pel j lai lidhu have bakino varo
    const {data} = await axios.get( tag ? (`${url}&tag=${tag}`) : (url));
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    
    setLoading(false);
  }
  
  useEffect( () => {
    fetchData();
  }, [])

  return {Gif, loading, fetchData};
}

export default useGif