<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// Define the props
const props = defineProps({
  modelValue: String
});

// Define the emits
const emit = defineEmits(['update:modelValue']);

// Function to handle input change
const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="flex flex-col gap-1 m-6">
    <label for="search" class="text-gray-700">Rechercher  un pokemon</label>
    <input type="text" id="search" class="border-2 border-gray-400 rounded w-2/4 p-2" placeholder="Salamèche" :value="modelValue" @input="updateValue" />
  </div>
</template>

<style scoped>

</style>