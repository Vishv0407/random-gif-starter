import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const TagGIF = () => {

  const [tag, setTag] = useState('cricket');
  
  const {Gif, loading, fetchData} = useGif(tag);

  function changeHandler(event){
    setTag(event.target.value);
  }

  function clickHandler(){
    fetchData();
  }

  return (
    <div className='custom-gif-container'>
        <h1>RANDOM {tag} GIF</h1>
        {
            loading ? (<Spinner />) : (<img src={Gif} width="450" ></img>)
        }

        <input className='custom-gif-input' onChange={changeHandler} value={tag}></input>
        <button className='generate-button' onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}

export default TagGIF