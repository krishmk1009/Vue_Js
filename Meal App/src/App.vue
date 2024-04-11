<script setup>
</script>

<template>

<nav class="bg-gray-800 p-4">
    <div class="flex justify-between items-center">
        <router-link to="/" class="text-white">Home</router-link>
      <div class="flex space-x-4">
        <router-link to="/search-by-meal" class="text-white">Search By Meal</router-link>
        <router-link to="/search-by-letter" class="text-white">Search By Letter</router-link>
        <router-link to="/search-by-ingredient" class="text-white">Search By Ingredient</router-link>
      </div>
    </div>
  </nav>

<router-view />
</template>

<style scoped>

</style>
