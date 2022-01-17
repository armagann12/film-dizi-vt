import React from 'react'
import { ListItem, ListItemButton, ListItemText, TextField } from '@mui/material'
import {useState, useEffect } from "react"
import { Link } from 'react-router-dom';

function Search() {

    const allActorsURL ="http://localhost:3001/home/actor"

    const [actor, setActor] = useState([]);
    const [filteredData, setFilteredData] =useState([]);
    
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

    const handleFilter = (e) =>{
        const search = e.target.value
        const filtered = actor.filter((val) =>{
            return val.name.toLowerCase().includes(search.toLowerCase())
        })
        if(search === ""){
            setFilteredData([])
        }else{
            setFilteredData(filtered)
        }
    }

    return (
        <div>
            <TextField id="standard-basic" label="Search" variant="standard" onChange={handleFilter} />
            
            <div>
                {filteredData.slice(0, 15).map(info => (
                    <div>   
                    <ListItem key = {info._id}>
                        <ListItemButton as= {Link} to={`/actor/${info._id}`}>
                            <ListItemText>{info.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </div>
                ))}
            </div>
        
        </div>
    )
}

export default Search

//<a as= {Link} to= {info._id}>
//<h1>{info.name}</h1>    
//</a>


//as = {Link} to ={`/actor/${info._id}`}