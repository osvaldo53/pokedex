import { useState } from "react";
import Footer from "../Footer";
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
            <h1 className="h1-menu">Escolha a geração:</h1>
            <div className="geracoes-container">
               <a href="#">1ª</a>
               <a href="#">2ª</a>
               <a href="#">3ª</a>
               <a href="#">4ª</a>
               <a href="#">5ª</a>
               <a href="#">6ª</a>
               <a href="#">7ª</a>
               <a href="#">8ª</a>
            </div>
            <Footer/>
         </div>
      </>
   )
}

export default HamburguerMenu;