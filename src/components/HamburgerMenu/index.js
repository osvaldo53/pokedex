import { useContext, useState } from "react";
import { GenContext } from "../../contexts/genContext";
import Footer from "../Footer";
import './hamburguermenu.css';
import { Link } from "react-router-dom";


function HamburguerMenu() {

   const [isOpen, setIsOpen] = useState(false);
   const {handleStateChange} = useContext(GenContext);
   const {handleLoadingChange} = useContext(GenContext);


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
               <Link to="/" onClick={ () => {handleStateChange(1); setIsOpen(false); handleLoadingChange(true)} }>1</Link>
               <Link to="/" onClick={ () => {handleStateChange(2); setIsOpen(false); handleLoadingChange(true)} }>2</Link>
               <Link to="/" onClick={ () => {handleStateChange(3); setIsOpen(false); handleLoadingChange(true)} }>3</Link>
               <Link to="/" onClick={ () => {handleStateChange(4); setIsOpen(false); handleLoadingChange(true)} }>4</Link>
               <Link to="/" onClick={ () => {handleStateChange(5); setIsOpen(false); handleLoadingChange(true)} }>5</Link>
               <Link to="/" onClick={ () => {handleStateChange(6); setIsOpen(false); handleLoadingChange(true)} }>6</Link>
               <Link to="/" onClick={ () => {handleStateChange(7); setIsOpen(false); handleLoadingChange(true)} }>7</Link>
               <Link to="/" onClick={ () => {handleStateChange(8); setIsOpen(false); handleLoadingChange(true)} }>8</Link>
            </div>
            <Footer/>
         </div>
      </>
   )
}

export default HamburguerMenu;