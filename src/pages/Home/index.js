
import { useContext, useEffect, useState } from "react";
import {GenContext} from '../../contexts/genContext';
import api from "../../services/api";
import './home.css';
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";



function Home() {

   const [pokes, setPokes] = useState([]);
   const {loading, handleLoadingChange} = useContext(GenContext);
   const {gen} = useContext(GenContext);


   useEffect(() => {
      const arrayPokes = [];
      
      async function loadPokes() {

         let n1 = 0;
         let n2 = 0;

         switch (gen) {
            case 1:
               n1 = 1;
               n2 = 151;
               break;
            case 2:
               n1 = 152;
               n2 = 251;
               break;
            case 3:
               n1 = 252;
               n2 = 386;
               break;
            case 4:
               n1 = 387;
               n2 = 493;
               break;
            case 5:
               n1 = 494;
               n2 = 649;
               break;
            case 6:
               n1 = 650;
               n2 = 721;
               break;
            case 7:
               n1 = 722;
               n2 = 809;
               break;
            case 8:
               n1 = 810;
               n2 = 905;
               break;
         }

         for ( ; n1 <= n2; n1++) {
            const response = await api.get(`${n1}`);
            arrayPokes.push(response.data);
            
         }
         
         setPokes(arrayPokes);
         handleLoadingChange(false);
      }

      loadPokes();
      
   }, [gen])

   console.log(pokes);
   
   const capitalize = (str) => {
      return (str.charAt(0).toUpperCase() + str.substr(1))
   }

   if (loading) {
      return(
         <Loading/>
      )
   }

   return(
      <div className="container">

         <div className="lista-pokes">
            {pokes.map((poke) => {
               return(
                  <article key={poke.id} className='poke-card'>
                     <div className="nome-sprite">
                        <img src={poke.sprites.front_default} alt={poke.name} className='poke-sprite'></img>
                        <h1 className="nome-h1">#{poke.id.toString().padStart(3, '0')} {capitalize(poke.name)}</h1>
                       
                     </div>
                     
                     <div className="botoes-save-del">
                        <Link to={`/pokemon/${poke.id}`}><span className="material-symbols-outlined button-icon">search</span></Link>
                        <span className="material-symbols-outlined button-icon">save</span>
                        
                     </div>
                  </article>
               )
            })}
         </div>

      </div>
   )
}

export default Home;