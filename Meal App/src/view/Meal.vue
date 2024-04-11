<template>
  <div class="max-w-3xl mx-auto mt-8">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-64 object-cover">
      <div class="px-6 py-4">
        <h1 class="text-3xl font-bold mb-2">{{ meal.strMeal }}</h1>
        <p class="text-gray-700 mb-4">{{ meal.strInstructions }}</p>
        <div class="flex justify-center">
          <a :href="meal.strYoutube" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.16 14.75l5.64-3.27-5.64-3.26v6.53zm11.72-8.53c-.39-.29-.88-.44-1.4-.44H4.52c-.51 0-1.02.15-1.41.44-.39.29-.63.69-.63 1.13v11.5c0 .44.24.84.63 1.13.39.29.9.44 1.41.44h14.76c.52 0 1.01-.15 1.4-.44.39-.29.64-.69.64-1.13V7.05c0-.44-.25-.84-.64-1.13zm-10.72 9.15V6.1L18.5 12l-7.36 4.28z"/>
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRoute  } from 'vue-router';
import { onMounted ,ref } from 'vue';
import instance from "../axiosInstance.js"
const route = useRoute();
const mealId = route.params.id;
const meal = ref([])

onMounted(async()=>{
    const res = await instance.get(`lookup.php?i=${mealId}`)
    meal.value = res.data.meals[0]
    console.log(meal.value)
})
</script>
