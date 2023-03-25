import { useState } from "react";
import './hamburguermenu.css';

function HamburguerMenu() {

   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
      setIsOpen(!isOpen);
   }

   const conteudoBotao = isOpen ? "close" : "menu";

   return(
      <>
         <span className="material-symbols-outlined button-icon menu-icon" 
         onClick={handleClick} style={{ backgroundColor: isOpen ? "red" : "" }}>{conteudoBotao}</span>
         
         <div className={isOpen ? 'menu-open' : 'menu'}>
            <ul>
               <li>1ª Geração</li>
               <li>2ª Geração</li>
               <li>3ª Geração</li>
               <li>4ª Geração</li>
               <li>5ª Geração</li>
            </ul>
         </div>
      </>
   )
}

export default HamburguerMenu;