import Header from "../Header"
import PokemonResults from "./PokemonResults"

export default function Home() {
    return (
        <div className="text-white font-bold">
            <Header />
            <PokemonResults />
        </div>
    );
}