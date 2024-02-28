import { Link } from "react-router-dom";

export default function PokemonListItem( {name, url} ){
    const getId = () => url.split("/")[6]; //toma el url que se le manda en PokemonList
    
    return (
        <>
            <p>{name}</p>
            <button>
                <Link to={`/pokemon/${getId()}`}>Ver detalle</Link>
            </button>
        </>
    );
}