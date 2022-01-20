import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import {useEffect, useState} from "react"
import "./../App.css"

function ActorCard() {
    const id = useParams()
    const stringifyId = JSON.stringify(id);
    const parseId = JSON.parse(stringifyId)
    const Id = parseId["*"];

    const actorURL ="http://localhost:3001/home/actor/" + Id

    const [actorCard, setActorCard] = useState([]);

   useEffect(() => {
       allFunc();
   }, [])

   const allFunc = () => {
    fetch(actorURL).then(res => {
        if (res.ok){
            return res.json()
        }
    }).then(data =>setActorCard(data))
}
    return (
        <div className='page'>
            <div className='name-container'>
                <h1>{actorCard.name}</h1>
            </div>

            <div className='describtion-container'>
                <h1>{actorCard.describtion}</h1>
            </div>

            <div className='image-container'>
                <h1>img</h1>
            </div>
            
        </div>
    )
}
export default ActorCard
