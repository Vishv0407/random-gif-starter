import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const RandomGIF = () => {

  const {Gif, loading, fetchData} = useGif();

  function clickHandler(){
    fetchData();
  }

  return (
    <div className='random-gif-container'>
        <h1>A RANDOM GIF</h1>
        {
            loading ? (<Spinner />) : (<img src={Gif} width="450" ></img>)
        }
        <button className='generate-button' onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}

export default RandomGIF