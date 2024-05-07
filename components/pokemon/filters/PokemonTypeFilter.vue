<script setup lang="ts">
import {usePokeApi} from "~/composables/usePokeApi";
const state = reactive({
  pokemonTypes: null,
  selectedTypes: [],
})

const emit = defineEmits(['update:selectedTypes']);
const toggleSelectedType = (typeName: string) => {
  if (state.selectedTypes.includes(typeName)) {
    state.selectedTypes = state.selectedTypes.filter((name) => name !== typeName);
  } else {
    state.selectedTypes.push(typeName);
  }
  emit('update:selectedTypes', state.selectedTypes);
}

const isSelected = (typeName: string) => {
  return state.selectedTypes.includes(typeName);
}

const { getPokemonTypes } = usePokeApi();

const types = await getPokemonTypes();
state.pokemonTypes = types.data;
</script>

<template>
<div class="m-6">
  <ul class="grid grid-cols-9 gap-3">
    <li class="text-center p-2 border-gray-400 border-2 rounded cursor-pointer flex flex-col justify-center items-center" v-for="type in state.pokemonTypes" :key="type.id" @click="toggleSelectedType(type.name)" :class="isSelected(type.name) ? 'bg-green-400 text-white' : 'bg-white'">
        <NuxtImg :src="type.image" :alt="type.name" />
        <p>{{ type.name }}</p>
    </li>
  </ul>
</div>
</template>

<style scoped>

</style>