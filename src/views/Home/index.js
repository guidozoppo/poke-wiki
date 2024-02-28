import { useEffect } from "react"; 
//import PokemonContext from "../../context/pokemons"; con context
import PokemonList from "./components/PokemonList";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonsStore from "../../zustand/stores/pokemons"
import shallow from "zustand/shallow";

export default function Home() {
    //const {getPokemons, pokemons, isLoading, hasError, errorMessage} = useContext(PokemonContext);
    const { getPokemons, pokemons, isLoading, hasError, errorMessage } = usePokemonsStore(state => ({
        getPokemons: state.getPokemons, 
        pokemons: state.pokemons, 
        isLoading: state.isLoading, 
        hasError: state.hasError, 
        errorMessage: state.errorMessage
    }), shallow);
    
    useEffect( () => {
        getPokemons().catch(null);
    }, []);

    if(isLoading) {
        return <Loading title="Cargando resultados..."/>;
    }

    return (
        <>
            {hasError ? <ErrorMessage message={errorMessage}/> : <PokemonList pokemons={pokemons}/>}
        </>
        );
}