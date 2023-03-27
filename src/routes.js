import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Pokemon from "./pages/Pokemon";
import Favoritos from "./pages/Favoritos";


function RoutesApp() {
   return(
      
      <BrowserRouter>
         <Header/>

         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemon/:id" element={<Pokemon/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
         </Routes>
         
      </BrowserRouter>

   )
}

export default RoutesApp;