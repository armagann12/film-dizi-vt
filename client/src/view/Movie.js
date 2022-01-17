import React from 'react'
import {useEffect, useState} from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import MovieCard from "./MovieCard"
import "./../App.css"

function Movie() {
    const param = useParams();
    const stringifyParam = JSON.stringify(param)
    const parseParam = JSON.parse(stringifyParam)
    const Param = parseParam["*"]

    const allMoviesURL ="http://localhost:3001/home/movie"
    const [movie, setMovie] = useState([]);

   useEffect(() => {
       allFunc();
   }, [])

   const allFunc = () => {
    fetch(allMoviesURL).then(res => {
        if (res.ok){
            return res.json()
        }
    }).then(data =>setMovie(data))
}
    return (
        <div>
            {Param == "" &&(
            <div>
                <h1>Movies</h1>
            </div>
            )}
            {movie.map(info => (
                <div>
                    {Param == "" &&(
                    <div>
                        <Card key= {info._id} sx={{ maxWidth: 200 }}>
                            <CardActionArea as= {Link} to= {info._id} className='link-text'>
                            <CardMedia
                                component="img"
                                height="100"
                                image=""
                                alt="image"
                            />
                            <CardContent>
                                <div>
                                    <h1>{info.name}</h1>
                                    <h2>{info._id}</h2>
                                </div>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    )}
                    <div>
                        <Routes>
                            <Route path = {info._id} element= {<MovieCard />} ></Route>
                        </Routes>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Movie

//{`/movie/${info._id}`}