import './loading.css';
import pokeballLoad from './pokeball-load.png';

function Loading() {
   return(
      <div className='loading'>
         <img src={pokeballLoad} alt="pokeball-loading" className='pokeball-loading'></img>
         <h1 className='carregando'>Carregando...</h1>
      </div>
   )
}

export default Loading;