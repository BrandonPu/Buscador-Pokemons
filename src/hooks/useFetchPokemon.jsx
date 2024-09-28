import { useState } from 'react';
import { fetchPokemonData } from '../service/pokemonService';

export const useFetchPokemon = () => {
    const [url, setUrl] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [ability, setAbility] = useState("");
    const [tipo, setTipo] = useState("");

    const reqPokemon = async () => {
        try {
            const pokemonData = await fetchPokemonData(name);
            setUrl(pokemonData.sprite);
            setId(pokemonData.id);
            setTipo(pokemonData.type);
            setAbility(pokemonData.ability);
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        }
    };

    return { url, id, name, ability, tipo, setName, reqPokemon };
};
