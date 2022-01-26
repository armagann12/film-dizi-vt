import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import {useEffect, useState} from "react"

function MovieCard() {
    
    const id = useParams()
    const stringfyId = JSON.stringify(id);
    const parseId = JSON.parse(stringfyId)
    const Id = parseId["*"];

    const movieURL ="http://localhost:3001/home/movie/" + Id
    const [movieCard, setMovieCard] = useState([]);

   useEffect(() => {
       allFunc();
   }, [])

   const allFunc = () => {
    fetch(movieURL).then(res => {
        if (res.ok){
            return res.json()
        }
    }).then(data =>setMovieCard(data))
}
    console.log(movieCard)
    console.log(movieCard.actors)
    return (
        <div className='page'>
            <div className='name-container'>
                <h1>{movieCard.name}</h1>
            </div> 

            <div className='describtion-container'>
                <h2>{movieCard.describtion}</h2>
            </div>

            <div className='image-container'>
                <h1>img</h1>
            </div>
            
        </div>
    )
}

export default MovieCard 

