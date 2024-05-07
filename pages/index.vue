<script setup lang="ts">
import {usePokeApi} from "~/composables/usePokeApi";
import {computed} from "vue";
import PokemonSearchBar from "~/components/pokemon/filters/PokemonSearchBar.vue";
import PokemonTypeFilter from "~/components/pokemon/filters/PokemonTypeFilter.vue";
const state = reactive({
  pokemonList : null,
  selectedTypes: [],
  loading: true,
})

const { getPokemons } = usePokeApi();

const pokemons = await getPokemons();
state.pokemonList = pokemons.data;

const currentSearch = ref('');

const filteredPokemonList = computed(() => {
  let result = state.pokemonList;
  if (state.selectedTypes.length > 0) {
    result = result.filter(pokemon => {
      return pokemon.apiTypes.some(type => state.selectedTypes.includes(type.name));
    });
  }
  if (currentSearch.value) {
    result = result.filter(pokemon => pokemon.name.toLowerCase().startsWith(currentSearch.value));
  }
  return result;
});
</script>

<template>
  <main>
    <div class="flex gap-2 items-center m-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 48 48">
        <rect width="48" height="48" fill="none" />
        <path fill="none" stroke="#f57070" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24m43 0c0-11.874-9.626-21.5-21.5-21.5S2.5 12.126 2.5 24" />
        <circle cx="24" cy="24" r="5.375" fill="none" stroke="#f57070" stroke-linecap="round" stroke-linejoin="round" />
        <path fill="none" stroke="#f57070" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24H29.375M2.5 24h16.125" />
      </svg>
      <h1 class="text-2xl font-bold text-gray-700">Pokapi</h1>
    </div>
    <PokemonSearchBar v-model="currentSearch" />
    <PokemonTypeFilter @update:selected-types="state.selectedTypes = $event" />
    <section class="grid grid-cols-4 gap-3">
      <PokemonCard v-for="pokemon in filteredPokemonList" :key="pokemon.id" :pokemon="pokemon" />
    </section>
  </main>
</template>

<style scoped>

</style>