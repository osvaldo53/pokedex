import { useEffect, useState } from "react"

function Favoritos() {

   const [favs, setFavs] = useState([]);

   useEffect(() => {
      const minhaLista = localStorage.getItem("@fav-pokes");
      setFavs(JSON.parse(minhaLista) || []);

   }, [])

   return(
      <div className="favoritos">
         <h1>Meus Pokemons</h1>

         {favs.length === 0 && <span>Você não possui nenhum pokemon salvo :(</span>}

         <ul>
            <li>
               <span>{favs.name}</span>
            </li>
         </ul>
      </div>
   )
}

export default Favoritos;