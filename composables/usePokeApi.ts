export const usePokeApi = () => {
    const baseUrl = 'https://pokebuildapi.fr/api/v1'
    const getPokemons = async () => {
        return useFetch(`${baseUrl}/pokemon`);
    }

    const getPokemon = async (name: string) => {
        return useFetch(`${baseUrl}/pokemon/${name}`);
    }

    const getPokemonTypes = async () => {
        return useFetch(`${baseUrl}/types`);
    }

    return { getPokemons, getPokemon, getPokemonTypes}
}