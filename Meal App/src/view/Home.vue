<template>
  <div class="flex justify-center items-start min-h-screen">
    <div class="w-full max-w-md px-4 py-8 bg-white rounded-md shadow-md">
     Home
    </div>

  </div>
</template>

<script setup>
import { computed,onMounted,ref } from "vue";
import store from "../store/index.js";
import instance from "../axiosInstance.js"

const meals = computed(() => store.state.meals);

const ingredients= ref([])


onMounted(async() => {
  
  const res = await instance.get("/list.php?i=list")
 ingredients.value = res.data
})
</script>

<style scoped>
/* Optional: Add custom scoped styles */
</style>
