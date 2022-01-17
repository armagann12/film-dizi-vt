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
        <div>
            <div className='name-container'>
                <h1>{actorCard.name}</h1>
            </div>

            <div className='middle-container'>
                <div className='describtion-container'>
                    <h2>{actorCard.describtion}</h2>
                </div>

                <div className='image-container'>
                </div>
            </div>
        </div>
    )
}
export default ActorCard
