import React, { useState, useEffect } from 'react'
import PokeCard from './PokeCard'
import axios from 'axios'

const Pokedex = () => {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
       //FECTH
       /*function getPokemones(){
        fetch(endpoint)
        .then((response)=> response.json())
        .then((data)=> setPokemon(data.results))
        .catch(error => console.log(error))      
       }*/
       

       //AXIOS
       /*function getPokemones(){
        axios.get(endpoint)
        .then(response => {
          console.log(response);
          setPokemon(response.data.results)
        })
        .catch(error => console.log(error))
       }*/
      
      //ASYNC AWAIT
      async function getPokemones(){
            let response = await fetch(endpoint);
            let pokemonData = await response.json();
            //console.log(pokemonData);
            setPokemon(pokemonData.results)
        }
        getPokemones()
    },[])


  return (
    <div>{pokemon.map((data,index) => <PokeCard key={index} item={data}/>)}</div>
  )
}

export default Pokedex