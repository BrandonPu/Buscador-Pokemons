import { useState } from "react"

export const BuscadorPokemonApp = () => {

    const [url, setUrl] = useState("")
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [ability, setAbility] = useState("")
    const [tipo, setTipo] = useState("")

    const reqPokemon = () => {
        try {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((resp) => {
                resp.json().then((data) => {
                    const { id, name, sprites, types } = data
                    console.log(id, name, sprites.other['official-artwork'].front_default, data.types[0].type.name, data.abilities[0].ability.name)
                    setUrl(sprites.other['official-artwork'].front_default)
                    setId(id)
                    setTipo(data.types[0].type.name)
                    setAbility(data.abilities[0].ability.name)
                })
            })
        } catch (err) {
            console.error(err)
        }
    }




    return (
        <>
            <div className="card" data-bs-theme="gold">
                <div className="container d-fex flex-row justify-content-center alig-items-center mt-3 w-50" data-bs-theme="red">
                    <input className="form-control me-2" type="text" onChange={(e) => { setName(e.target.value) }}></input>
                    <br></br>
                    <button className="btn btn-success" type="submit" onClick={reqPokemon}>Buscar Pokemon</button>
                </div>
                <br></br>
                <div className="card container d-fex flex-row justify-content-center alig-items-center mt-3 w-50" data-bs-theme="blue">
                    <img src={url} className="card-img-top w-25" alt="..." />
                    <div className="card-body">
                        <h4>No.Pokedex: {id}</h4>
                        <h4>Nombre: {name}</h4>
                        <h4>Habilidad: {ability}</h4>
                        <h4>Tipo: {tipo}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
