import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import './pokemon.css';

function Pokemon() {

   const { id } = useParams();
   const [pokemon, setPokemon] = useState({});

   useEffect( () => {
      
      async function loadPoke() {
         await api.get(`${id}`)
         .then((response) => {
            setPokemon(response.data);
         })
      }

      loadPoke();

   }, [id])

   const capitalize = (str) => {
      return (str.charAt(0).toUpperCase() + str.substr(1))
   }

   
   return(
      <div className="pokemon-info">
         <h1>
            #{pokemon.id ? pokemon.id.toString().padStart(3, '0') : ''} {pokemon.name ? capitalize(pokemon.name) : ''}
         </h1>

         <img src={pokemon.sprites ? pokemon.sprites.front_default : ''} alt={pokemon.name}></img>
         

      </div>
   )
   
}

export default Pokemon;