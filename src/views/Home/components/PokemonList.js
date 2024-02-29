import PokemonListItem from "./PokemonListItem";

export default function PokemonList({pokemons}) {
    return (
       <div className="flex flex-row flex-wrap gap-3 mx-28 mt-5">
           {pokemons?.map(( pokemon, index ) => (
               <PokemonListItem key={index} {...pokemon}/>
           ))}
       </div> 
    );
}