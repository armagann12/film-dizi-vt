import React from 'react'
import { useState, useEffect } from 'react';
import Actor from './Actor';
import Movie from './Movie';
import { Routes, Route, Link} from "react-router-dom";
import Button from '@mui/material/Button';
import MovieCard from './MovieCard';


function Card() {

/*

    const movieURL ="http://localhost:3001/home/movie"

    const [card, setCard] = useState([]);

   useEffect(() => {
       allFunc();
   }, [])

   const allFunc = () => {
    fetch(movieURL).then(res => {
        if (res.ok){
            return res.json()
        }
    }).then(data =>setCard(data))
}
*/
    return (
        <div className='container'>
            <div className='header-container'>
            </div>
            <div className='body-container'>
            </div>
            
            <Button  as= {Link} to="/movie/"  size = "large"variant="contained" >
                Movies
            </Button>

            <Button as= {Link} to="/actor/" size = "large"variant="contained" >
                Actors
            </Button>

            <Routes>
                <Route path ="/movie/*" element={<Movie />} />
                <Route path ="/actor/*" element={<Actor />} />
            </Routes>

            <div className='footer-container'>
                
            </div>
        </div>
    )
}

export default Card;

//{card.map(info => (
//    <Route path = {`/movie/${info._id}`} element= {<MovieCard />} ></Route>
//    ))}


//btüün hepsini buraya yaz route ve linklerin aynı routesin içinde olsun

