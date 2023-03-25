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
         onClick={handleClick} style={{ backgroundColor: isOpen ? "#EF4036" : "" }}>{conteudoBotao}</span>
         
         <div className={isOpen ? 'menu-open' : 'menu'}>
            <h1 className="h1-menu">Escolha a geração:</h1>
            <div className="geracoes-container">
               <a href="/">1</a>
               <a href="/">2</a>
               <a href="/">3</a>
               <a href="/">4</a>
               <a href="/">5</a>
               <a href="/">6</a>
               <a href="/">7</a>
               <a href="/">8</a>
            </div>
            <Footer/>
         </div>
      </>
   )
}

export default HamburguerMenu;