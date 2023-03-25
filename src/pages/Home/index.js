
import { useEffect, useState } from "react";
import api from "../../services/api";
import './home.css';
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";


function Home() {

   const [pokes, setPokes] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const arrayPokes = [];

      async function loadPokes() {

         for (let n = 1; n <= 151; n++) {
            const response = await api.get(`${n}`);
            arrayPokes.push(response.data);
            
         }
         
         setPokes(arrayPokes);
         setLoading(false);
      }

      loadPokes();
      
   }, [])

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