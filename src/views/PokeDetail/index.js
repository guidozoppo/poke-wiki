import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonStore from "../../zustand/stores/pokemons";
import Header from "../Header"

export default function PokeDetail(){
    const { id } = useParams();
    const [ type, setType ] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    //const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext);    
    const { getPokemonDetail, pokemonDetail, hasError, errorMessage } = usePokemonStore( state => ({
        getPokemonDetail: state.getPokemonDetail, 
        pokemonDetail: state.pokemonDetail, 
        hasError: state.hasError, 
        errorMessage: state.errorMessage
    }));    
   
    useEffect( () => {
        /*
         * Cada vez que se cargue la pantalla o cada vez que cambie el id hay que solicitar el detalle del pokemon
         */
        setIsLoading(true); // Marcamos que estamos cargando
        getPokemonDetail(id)
            .then((data) => {
                 // Actualizamos los detalles del Pokémon
                setIsLoading(false); // Marcamos que hemos terminado de cargar
            })
            .catch((error) => {
                // Manejo de errores
                console.error("Error fetching Pokemon details:", error);
                setIsLoading(false); // Aunque hay un error, marcamos que hemos terminado de cargar
            });
    }, [getPokemonDetail, id])
    
    useEffect( () => {
        if (pokemonDetail.types !== undefined){
            setType(pokemonDetail.types[0].type.name)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemonDetail])

    if(isLoading) {
        return <Loading title="Cargando Pokemon..."/>;
    }

    function GetColors() {
        let background
        let border
        switch (type) {
            case "bug":
                background = "YellowGreen"
                border = "OliveDrab"
                break;
            case "steel":
                background = "LightGrey"
                border = "Silver"
                break;
            case "water":
                background = "RoyalBlue"
                border = "MediumSlateBlue"
                break;
            case "dragon":
                background = "MediumSlateBlue"
                border = "SlateBlue"
                break;
            case "electric":
                background = "Yellow"
                border = "Gold"
                break;
            case "ghost":
                background = "Purple"
                border = "Indigo"
                break;
            case "fairy":
                background = "rgb(255, 136, 238)"
                border = "rgb(255, 187, 238)"
                break;
            case "ice":
                background = "AquaMarine"
                border = "PaleTurquoise"
                break;
            case "fighting":
                background = "Firebrick"
                border = "Darkred"
                break;
            case "normal":
                background = "Lavender"
                border = "Gainsboro"
                break;
            case "grass":
                background = "Lime"
                border = "Limegreen"
                break;
            case "psychic":
                background = "Lavender"
                border = "Gainsboro"
                break;
            case "rock":
                background = "Peru"
                border = "chocolate"
                break;
            case "dark":
                background = "SlateGray"
                border = "Darkslategray"
                break;
            case "ground":
                background = "BurlyWood"
                border = "#a1763d"
                break;
            case "poison":
                background = "Mediumpurple"
                border = "Blueviolet"
                break;
            default:
                background = "YellowGreen"
                border = "OliveDrab"
                break;
        }

        return {"background": background, "border": border}
    }

    return (
        <div className="flex flex-col justify-center items-center ">
            <Header/>
            {hasError ? <ErrorMessage message={errorMessage}/> : (
                <div
                    style={{ 
                        backgroundColor: GetColors().background, 
                        border: `2px solid ${GetColors().border}`, 
                        boxShadow: ` 0 25px 50px -12px ${GetColors().border}` }}
                    className="flex flex-col justify-center items-center border border-black p-2 h-4/6 rounded shadow-2xl"
                >
                    <h1 className="uppercase text-2xl font-bold">{pokemonDetail?.name}</h1>
                    <img src={pokemonDetail?.sprites?.other?.home?.front_default} alt={pokemonDetail.name} className="w-1/4"/>
                    <p>Type: <span className="font-bold capitalize">{type}</span></p>
                    <p>{`Peso: ${pokemonDetail?.weight}kgs.`}</p>
                    <p>{`Altura: ${pokemonDetail?.height}cm.`}</p>
                    <div className="flex flex-col justify-center items-center max-w-72">
                        <h3 className="font-bold" style={{ marginTop:30, marginBottom: 15}}>Habilidades</h3>
                        <PokeStats color={GetColors().border} stats={pokemonDetail?.stats ?? []}/>
                    </div>
                </div>
            )}
            <Link to={"/"} className="border border-red-900 bg-red-600 shadow-2xl shadow-red-400 p-1 text-amber-300 mt-4">Ir a la Home</Link>
        </div>
    );
}