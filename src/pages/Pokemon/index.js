import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

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

      return;
   }, [id])


   return(
      <div className="pokemon-info">
         <h1>{pokemon.name}</h1>

      </div>
   )
}

export default Pokemon;