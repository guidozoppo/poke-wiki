export default function FormToSearch({ changeSortOrder, searchByName }) {
    function searchPokemon(e) {
        e.preventDefault()
        if (e.target.elements["pokemon-name"].value !== "") {
            searchByName(e.target.elements["pokemon-name"].value)
        }
    }

    const handleChangeSortOrder = (e) => {
        changeSortOrder(e.target.value)
    }

    const handleChangeSearch = (e) => {
        if (e.target.value === "") {
            searchByName("")
        }    
    }
    
    return (
        <div className="flex justify-center">
            <form onChange={handleChangeSearch} onSubmit={searchPokemon} className="flex items-center justify-between w-3/6">
                <div>
                    <input name="pokemon-name" type="text" placeholder="Ingrese Pokemon" className="border border-black m-2 p-1"/>
                    <button className="border border-black rounded p-1">Buscar</button>
                </div>
                <div>
                    <label>Ordenar</label>
                    <select onChange={handleChangeSortOrder}>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                    </select>
                </div>
            </form>
        </div>
    )
}