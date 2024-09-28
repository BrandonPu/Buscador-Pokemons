export const fetchPokemonData = async (pokemonName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return {
            id: data.id,
            name: data.name,
            sprite: data.sprites.other['official-artwork'].front_default,
            type: data.types[0].type.name,
            ability: data.abilities[0].ability.name
        };
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        throw error;
    }
};
