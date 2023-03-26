import RoutesApp from "./routes";
import GenProvider from "./contexts/genContext";


function App() {
  return (
   <GenProvider>
      <RoutesApp/>
   </GenProvider>
  );
}

export default App;
