import { useFetchPokemon } from '../hooks/useFetchPokemon';

export const BuscadorPokemonApp = () => {
    const { url, id, name, ability, tipo, setName, reqPokemon } = useFetchPokemon();

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <input type="text" placeholder="Buscar Pokémon" onChange={(e) => setName(e.target.value)} />
                <button onClick={reqPokemon} style={{ marginLeft: '10px' }}>Buscar</button>
            </div>

            <div style={{
                backgroundColor: '#f5e1a4', 
                border: '3px solid #b8860b', 
                borderRadius: '10px',
                padding: '15px',
                width: '300px',
                margin: '20px auto',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
                <h2 style={{ color: '#d93b3b' }}>{name}</h2>
                <p style={{ color: '#d93b3b' }}>HP: 120</p> {}
                <img src={url} alt={name} style={{ width: '80%', borderRadius: '10px', border: '2px solid #000' }} />
                <p>No. {id}</p>
                <p>Habilidad: {ability}</p>
                <p>Tipo: {tipo}</p>
            </div>
        </>
    );
};

