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

   const types = () => {
      if (pokemon.types[1]) {
         return (pokemon.types ? pokemon.types[0].type.name : '') 
         + ' / '  + (pokemon.types ? pokemon.types[1].type.name : '')
      }
      if (pokemon.types[0]) {
         return (pokemon.types ? pokemon.types[0].type.name : '')
      }
   }

   console.log(pokemon);
   
   return(
      <div className="pokemon-info">

         <h1 className="pokemon-h1">
            #{pokemon.id ? pokemon.id.toString().padStart(3, '0') : ''} {pokemon.name ? capitalize(pokemon.name) : ''}
         </h1>
         
         <img src={pokemon.sprites ? pokemon.sprites.other["official-artwork"].front_default : ''} alt={pokemon.name}></img>

         <p className="pokemon-types-p">{pokemon.types ? types() : ''}</p>

         <p className="altura-peso-p">Altura: {pokemon.height ? pokemon.height/10 : ''} m</p>
         <p className="altura-peso-p">Peso: {pokemon.weight ? pokemon.weight/10 : ''} Kg</p>
         
         

      </div>
   )
   
}

export default Pokemon;