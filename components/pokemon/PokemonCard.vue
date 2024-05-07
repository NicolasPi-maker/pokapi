<script setup lang="ts">
defineProps({
  pokemon: {
    type: Object,
    required: true,
  }
})

const { addPokemon, team, isInTeam, removePokemon } = usePokemonTeam();
</script>

<template>
 <div class="p-2 rounded shadow relative">
   <span class="flex w-full justify-end">
     <button v-if="isInTeam(pokemon.id)" @click="removePokemon(pokemon.id)" class="p-2 bg-red-400 text-white rounded">Retirer</button>
      <button v-else @click="addPokemon(pokemon)" class="p-2 bg-green-400 text-white rounded">Ajouter</button>
   </span>
    <NuxtImg :src="pokemon.image" :alt="pokemon.name" />
    <h2 class="font-bold text-gray-500">{{ pokemon.name }}</h2>
    <NuxtLink :to="`/pokemon/${pokemon.name}`">
      <button class="p-2 my-3 bg-blue-400 text-white rounded w-full">
        Voir
      </button>
    </NuxtLink>
 </div>
</template>

<style scoped>

</style>