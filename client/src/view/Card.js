import React from 'react'
import { useState, useEffect } from 'react';
import Actor from './Actor';
import Movie from './Movie';
import { Routes, Route, Link} from "react-router-dom";
import Button from '@mui/material/Button';
import MovieCard from './MovieCard';
import ActorCard from './ActorCard';
import Search from './Search';
import "./../App.css"


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
        <div>
            <div className='head-container'>
                <div className='button-container'>
                    <Button  as= {Link} to="/movie"  size = "large"variant="contained" className='link-text' >
                        Movies
                    </Button>
                    <Button as= {Link} to="/actor" size = "large"variant="contained" className='link-text' >
                        Actors
                    </Button>
                </div>
                <div className='search-container'>
                    <Search />
                </div>
            </div>

            <div className='body-container'>
                <Routes>
                    <Route path ="/movie/*" element={<Movie />} />
                    <Route path ="/actor/*" element={<Actor />} />
                </Routes>
            </div>
        </div>
    )
}

export default Card;

//{card.map(info => (
//    <Route path = {`/movie/${info._id}`} element= {<MovieCard />} ></Route>
//    ))}


//btüün hepsini buraya yaz route ve linklerin aynı routesin içinde olsun

/*
{card.map(info => (
                    <Route path ={info._id}element= {<ActorCard />} />  
                ))}

                */
