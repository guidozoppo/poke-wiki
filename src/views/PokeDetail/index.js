import { useEffect } from "react";
import { useParams } from "react-router-dom";
//import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonStore from "../../zustand/stores/pokemons";

export default function PokeDetail(){
    const { id } = useParams();
    //const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext);    
    const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = usePokemonStore( state => ({
        getPokemonDetail: state.getPokemonDetail, 
        pokemonDetail: state.pokemonDetail, 
        isLoading: state.isLoading, 
        hasError: state.hasError, 
        errorMessage: state.errorMessage
    }));    
   
   
    useEffect( () => {
        /*
         * Cada vez que se cargue la pantalla o cada vez que cambie el id hay que solicitar el detalle del pokemon
         */
        getPokemonDetail(id).catch(null);
    }, [getPokemonDetail, id])
    
    if(isLoading) {
        return <Loading title="Cargando Pokemon..."/>;
    }
    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage}/> : (
                <>
                    <h3 style={{ marginTop:15, marginBottom: 15}}>Info General</h3>
                    <p>{`Name: ${pokemonDetail?.name}`}</p>
                    <p>{`Peso: ${pokemonDetail?.weight} kgs.`}</p>
                    <p>{`Altura: ${pokemonDetail?.height} cm.`}</p>
                    <div>
                        <h3 style={{ marginTop:30, marginBottom: 15}}>Habilidades</h3>
                        <PokeStats stats={pokemonDetail?.stats ?? []}/>
                    </div>
                </>
            )}
        </div>
    );
}