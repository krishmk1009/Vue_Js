<template>
<div class="flex justify-center items-start min-h-screen">
    <div class="w-full max-w-md px-4 py-8 bg-white rounded-md shadow-md">
     

      <div class="flex flex-wrap justify-center">
        <router-link
          v-for="letter in letters"
          :key="letter"
          :to="`/path/${letter}`"
          class="inline-block px-3 py-2 mb-2 mr-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          {{ letter }}
        </router-link>
      </div>
    </div>

  </div>
</template>

<<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

</script>