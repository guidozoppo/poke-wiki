import { Link } from "react-router-dom";

export default function PokemonList({pokemons}) {
    
    return (
       <div className="p-4">
            <Link 
                to={"/"} 
                className="flex items-center justify-center"
            >
                <img src="../../logo.png" alt="Logo" className="w-80"/>
            </Link>
       </div> 
    );
}