import './header.css';
import pokeball from './pokeball.png';

function Header () {
   return(
      <>
         <header className='header-box'>
            <div className='div-logo'>
               <h1 className='header-titulo'>Pokedex</h1>
               <img src={pokeball} className='header-img' alt='pokeball'/>
            </div>
            
            <button>X</button>
         </header>
         <div className='espaco-header'></div>
      </>
   )
}

export default Header;