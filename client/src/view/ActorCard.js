import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import {useEffect, useState} from "react"

function ActorCard() {
    const id = useParams()
    const stringfyId = JSON.stringify(id);
    const parseId = JSON.parse(stringfyId)
    const Id = parseId["*"];

    const actorURL ="http://localhost:3001/home/actor/" + Id;

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
            <div>
                <h1>{actorCard.name}</h1>
                <h2>{actorCard.describtion}</h2>
            </div>
        </div>
    )
}
export default ActorCard
