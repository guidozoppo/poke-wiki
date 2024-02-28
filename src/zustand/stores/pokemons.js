import create from "zustand";
import apiCall from "../../api";

const usePokemonsStore = create((set, get) => ({
    getPokemons: async () => {
        try {
            set({ hasError: false, errorMessage: "", isLoading: false }); //limpiar valores
            
            const pokemonsResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=100" });
            set({ pokemons: pokemonsResult.results });
        
        } catch (error){
            set({ pokemons: [], errorMessage: "Algo ha pasado, verifica tu conexion", hasError: true });
        } finally {
            set({ isLoading: false }); //caiga en try o en catch se setea a falso para sacar el spinner o el icono de carga y que
                                            //muestre el contenido (si cayo en try) o muestre el error (si cayo en catch)
        }
    }, 
    pokemons: [],       //estado inicial
    
    getPokemonDetail: async (id) => {
        if(!id) return;
        try {
            set({ hasError: false, isLoading: false, errorMessage: "" });
            const pokemonDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
            //set({ pokemonDetail: pokemonDetail.results });
            set({ pokemonDetail });
        } catch (error) {
            set({ pokemonDetail: {}, hasError: true ,errorMessage: "Algo ha pasado, verifica tu conexion" });
        } finally {
            set({ isLoading: false });
        }
    }, 
    pokemonDetail: {},  //estado inicial
    
    isLoading: false,   //estado inicial
    errorMessage: "",   //estado inicial
    hasError: false     //estado inicial
}));

export default usePokemonsStore;