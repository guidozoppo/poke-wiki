//import PokemonContext from "../../context/pokemons"; con context
import shallow from "zustand/shallow";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonsStore from "../../zustand/stores/pokemons";
import FormToSearch from "./FormToSearch";
import PokemonList from "./components/PokemonList";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

export default function PokemonResults() {
    //const {getPokemons, pokemons, isLoading, hasError, errorMessage} = useContext(PokemonContext); con context
    const [sortOrder, setSortOrder] = useState("a-z")
    const [sortedPokemons, setSortedPokemons] = useState([])
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const { getPokemons, pokemons, isLoading, hasError, errorMessage } = usePokemonsStore(state => ({
        getPokemons: state.getPokemons, 
        pokemons: state.pokemons, 
        isLoading: state.isLoading, 
        hasError: state.hasError, 
        errorMessage: state.errorMessage
    }), shallow);
    
    useEffect( () => {
        getPokemons();
    }, [getPokemons]);
    
    useEffect(() => {
        sortPokemon(filteredPokemons, sortOrder);
    }, [filteredPokemons, sortOrder]);

    useEffect(() => {
        filterPokemons(pokemons, searchTerm);
    }, [pokemons, searchTerm]);

    if(isLoading) {
        return <Loading title="Cargando resultados..."/>;
    }

    const sortPokemon = (pokemonss, sortOrder) => {
        const newSortedPokemons = [...pokemonss].sort((a, b) => {
            if (sortOrder === "a-z") {
                return a.name.localeCompare(b.name)
            } else if (sortOrder === "z-a") {
                return b.name.localeCompare(a.name)
            }
            return 0;
        })
        setSortedPokemons(newSortedPokemons)
    }

    const filterPokemons = (pokemonss, searchTerm) => {
        const filtered = pokemonss.filter(pokemon => 
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPokemons(filtered);
    }

    const searchPokemons = (name) => {
        setSearchTerm(name);
    }

    const changeSortOrder = (order) => {
        setSortOrder(order)
    }

    return (
        <div>
            <FormToSearch changeSortOrder={changeSortOrder} searchByName={searchPokemons} />
            {hasError ? <ErrorMessage message={errorMessage}/> : <PokemonList pokemons={sortedPokemons}/>}
        </div>
    )
}