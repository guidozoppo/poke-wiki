import Header from "../Header"
import PokemonResults from "./PokemonResults"

export default function Home() {
    return (
        <div className="flex-wrap">
            <Header />
            <PokemonResults />
        </div>
    );
}