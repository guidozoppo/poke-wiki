import './App.css';
import Routes from "./routes";
import PokemonProvider from './context/pokemons/Provider.js';

function App() {
  return (
        <PokemonProvider>
          <Routes/>
        </PokemonProvider>
  )
}

export default App;
