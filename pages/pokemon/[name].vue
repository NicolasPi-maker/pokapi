<script setup lang="ts">
const state = reactive({
  pokemon : null,
  loading: true,
})

const { getPokemon } = usePokeApi();
const { addPokemon, removePokemon, isInTeam } = usePokemonTeam();
const route = useRoute();

const { data, pending } = await getPokemon(route.params.name);
state.pokemon = data;
state.loading = pending;
</script>

<template>
 <div>
    <div v-if="!state.loading">
      <section class="flex flex-col m-3">
      <div class="flex m-3 gap-3">
        <h1 class="text-2xl font-bold">{{ state.pokemon.name }}</h1>
          <button v-if="isInTeam(state.pokemon.id)" @click="removePokemon(state.pokemon.id)" class="p-2 bg-red-400 text-white rounded">Retirer</button>
          <button v-else @click="addPokemon(state.pokemon)" class="p-2 bg-green-400 text-white rounded">Ajouter</button>
        </div>
        <NuxtImg :src="state.pokemon.image" :alt="state.pokemon.name" width="500" height="500" />
      </section>
      <section class="m-3">
        <h2 class="text-xl font-bold">Statistiques</h2>
        <ul>
          <li v-for="(stat, key) in state.pokemon.stats" :key="key">
            <p>{{ key }} {{ stat }}</p>
          </li>
        </ul>
      </section>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
 </div>
</template>

<style scoped>

</style>