import { Link } from "react-router-dom";

export default function PokemonListItem( {name, url} ){
    const getId = () => url.split("/")[6]; //toma el url que se le manda en PokemonList
    
    return (
        <div className="border border-red-900 flex flex-col justify-center items-center bg-red-600 shadow-2xl shadow-red-400">
            <p className="uppercase">{name}</p>
            <button className="p-1">
                <Link to={`/pokemon/${getId()}`} className="text-amber-300">Ver Caracteristicas</Link>
            </button>
        </div>
    );
}