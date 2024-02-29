import { Link } from "react-router-dom";

export default function PokemonListItem( {name, url} ){
    const getId = () => url.split("/")[6]; //toma el url que se le manda en PokemonList
    
    return (
        <div className="border border-black flex flex-col justify-center items-center">
            <p className="capitalize">{name}</p>
            <button className="p-1">
                <Link to={`/pokemon/${getId()}`} className="text-emerald-600">Ver Caracteristicas</Link>
            </button>
        </div>
    );
}