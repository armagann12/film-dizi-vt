import React from 'react'
import {useEffect, useState} from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ActorCard from './ActorCard';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import "./../App.css"

function Actor() {

    const param = useParams()
    const stringifyParam = JSON.stringify(param)
    const parseParam = JSON.parse(stringifyParam)
    const Param = parseParam["*"]

    const allActorsURL ="http://localhost:3001/home/actor"

    const [actor, setActor] = useState([]);

   useEffect(() => {
       allFunc();
   }, [])

   const allFunc = () => {
    fetch(allActorsURL).then(res => {
        if (res.ok){
            return res.json()
        }
    }).then(data =>setActor(data))
}
    return (
        <div>
            {Param == "" &&(
            <div>
                <h1>Actors</h1>
            </div>
            )}
            {actor.map(info => (  
                <div>
                    {Param == "" &&(
                    <div>
                        <Card key = {info._id} sx={{ maxWidth: 200 }}>
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
                                </div>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    )}
                    <div>
                        <Routes>
                            <Route path ={info._id}element= {<ActorCard />} /> 
                        </Routes>  
                    </div>       
                </div>   
            ))}
        </div>
    )
}

export default Actor




