export const usePokemonTeam = () => {
    const team = useState('team', () => []);
    const maxTeamSize = 6;
    const addPokemon = (pokemon: object) => {
        if (team.value.length < maxTeamSize) {
            team.value.push(pokemon);
        }
    }

    const removePokemon = (pokemonId: number) => {
        const index = team.value.findIndex(p => p.id === pokemonId);
        team.value.splice(index, 1);
    }

    const isInTeam = (pokemonId: number) => {
        return team.value.find(pokemon => pokemon.id === pokemonId);
    }

    return { team, addPokemon, removePokemon, isInTeam, maxTeamSize }
}