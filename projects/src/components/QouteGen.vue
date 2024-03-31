<template>
  <div>
    <h1>generateRandomQuotes</h1>
    <div>
      <h3>{{ quote.text }}</h3>
      <p>by {{ quote.author }}</p>
    </div>
    <button @click="generateRandomQuotes">Generate</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const quotes = [
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
];

const quote = ref({ text: "", author: "" });

function generateRandomQuotes() {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  quote.value = quotes[quoteIndex];
}

onMounted(generateRandomQuotes);
</script>
