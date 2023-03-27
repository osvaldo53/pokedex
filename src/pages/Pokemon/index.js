import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import './pokemon.css';
import { GenContext } from "../../contexts/genContext";

function Pokemon() {

   const { id } = useParams();
   const [pokemon, setPokemon] = useState([]);
   const { handleLoadingChange} = useContext(GenContext);

   const [pokeFavorito, setPokeFavorito] = useState(false);


   useEffect( () => {
      
      async function loadPoke() {
         await api.get(`${id}`)
         .then((response) => {
            setPokemon(response.data);
         })
      }

      loadPoke();

      
      
      return handleLoadingChange(true);
   }, [id, handleLoadingChange])

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

   function salvarPoke() {
      const minhaLista = localStorage.getItem("@fav-pokes");

      let pokesSalvos = JSON.parse(minhaLista) || [];

      const hasPoke = pokesSalvos.some( (pokesSalvo) =>
      pokesSalvo.id === pokemon.id);

      if(hasPoke) {
         setPokeFavorito(true);
         alert("Esse pokemon já está na sua lista!");
         return;
      }

      pokesSalvos.push(pokemon);
      localStorage.setItem("@fav-pokes", JSON.stringify(pokesSalvos));
      alert("Pokemon salvo com sucesso!");
      setPokeFavorito(true);
   }
   console.log(pokemon)
   
   function excluirPoke(id) {
      const pokemonArray = Object.values(pokemon); //transforma a state q era um objeto em array para poder usar o metodo filter q só funciona com arrays

      //PRECISO QUE O POKE SAIA COMO OBJETO PORQUE SENAO NAO VAI TER ID
      let filtroPokes = pokemonArray.filter( (item) => {
         return (item.id !== id)
      })

      localStorage.setItem("@fav-pokes", JSON.stringify(filtroPokes));
      alert("Pokemon removido com sucesso!");
      setPokeFavorito(false);
   }

   const conteudoBotao = pokeFavorito ? "delete" : "save";
 

   
   return(
      <div className="pokemon-info">

         <h1 className="pokemon-h1">
            #{pokemon.id ? pokemon.id.toString().padStart(3, '0') : ''} {pokemon.name ? capitalize(pokemon.name) : ''}
         </h1>
         
         <img src={pokemon.sprites ? pokemon.sprites.other["official-artwork"].front_default : ''} alt={pokemon.name}></img>

         <p className="pokemon-types-p">{pokemon.types ? types() : ''}</p>

         <table>
            <thead>
               <tr>
                  <th colSpan="2">Atributos</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>HP:</td>
                  <td>{pokemon.stats ? pokemon.stats[0].base_stat : ''}</td>
               </tr>
               <tr>
                  <td>Ataque:</td>
                  <td>{pokemon.stats ? pokemon.stats[1].base_stat : ''}</td>
               </tr>
               <tr>
                  <td>Defesa:</td>
                  <td>{pokemon.stats ? pokemon.stats[2].base_stat : ''}</td>
               </tr>
               <tr>
                  <td>Sp. Ataque:</td>
                  <td>{pokemon.stats ? pokemon.stats[3].base_stat : ''}</td>
               </tr>
               <tr>
                  <td>Sp. Defesa:</td>
                  <td>{pokemon.stats ? pokemon.stats[4].base_stat : ''}</td>
               </tr>
               <tr>
                  <td>Velocidade:</td>
                  <td>{pokemon.stats ? pokemon.stats[5].base_stat : ''}</td>
               </tr>
            </tbody>
         </table>

         <p className="altura-peso-p">Altura: {pokemon.height ? pokemon.height/10 : ''} m
         <br/>Peso: {pokemon.weight ? pokemon.weight/10 : ''} Kg</p>
         
         <span className="material-symbols-outlined button-icon" onClick={pokeFavorito ? excluirPoke : salvarPoke} style={{ backgroundColor: pokeFavorito ? "#EF4036" : "" }}>{conteudoBotao}</span>
      </div>
   )
   
}

export default Pokemon;