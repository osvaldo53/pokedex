
import { useState, createContext } from "react";

export const GenContext = createContext({});

function GenProvider({children}) {
   const [gen, setGen] = useState(2);

   const handleStateChange = (newState) => {
      setGen(newState);
   };


   const [loading, setLoading] = useState(true);

   const handleLoadingChange = (newState) => {
      setLoading(newState);
   }

   return(
      <GenContext.Provider value={ {gen, handleStateChange, loading, handleLoadingChange} }>
         {children}
      </GenContext.Provider>
   )
}

export default GenProvider;