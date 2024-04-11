<template>
  <div class="flex flex-col justify-center min-h-screen">
    <div class="w-full max-w-md px-4 py-8 bg-white rounded-md shadow-md">
      <input
        v-model="keyword"
        type="text"
        class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-blue-500"
        placeholder="Search by meal"
        @change="handleChange"
      />
    </div>

    <div class="flex flex-wrap justify-center">
      <div
        v-for="meal in meals"
        :key="meal.idMeal"
        class="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4"
      >
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="w-full h-48 object-cover"
        />
        <div class="px-6 py-4">
          <router-link :to="`/meal/${meal.idMeal}`" >
            <div class="font-bold text-xl mb-2">{{ meal.strMeal }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import store from "../store";
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
const handleChange = () => {
  store.dispatch("searchMeals", keyword.value);
  console.log(keyword.value);
  console.log(meals.value[0]);
};
</script>

<style scoped>
/* Optional: Add custom scoped styles */
.max-w-sm {
  width: 320px; /* Adjust width as needed */
}

@media (max-width: 640px) {
  .max-w-sm {
    width: 100%; /* Full width on smaller screens */
    margin: 0 auto; /* Center cards on smaller screens */
  }
}
</style>
