<script setup lang="ts">

const { team, maxTeamSize } = usePokemonTeam();
const remainingPlaceInTeam = computed(() => {
  return maxTeamSize - team.value.length;
})
</script>

<template>
  <section class="justify-center items-center flex-wrap grid grid-cols-3 gap-3 m-3">
    <PokemonCard v-for="pokemon in team" :key="pokemon.id" :pokemon="pokemon" />
    <div v-for="places in remainingPlaceInTeam" :key="places" class="add-pokemon-box flex border-2 border-dashed border-gray-400 h-full justify-center items-center">
      <NuxtLink :to="{name: 'index'}">Ajouter un Pokémon</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.add-pokemon-box {
  background-color: #f9f9f9;
  min-height: 300px;
}
</style>