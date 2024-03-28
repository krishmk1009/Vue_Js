<template>
  <div>
    <p>{{ data.counter }}</p>
    <button @click.prevent="increment">CLick</button>
  </div>
</template>

<script setup>

import {ref, reactive} from "vue"

// const counter = ref(0);
const data = reactive({counter:0})

function increment(){
    data.counter++

    // counter.value++
}

// export default {
//   data() {
//     return {
//       counter: 0,
//     };
//   },
//   methods: {
//     increment() {
//       this.counter++;
//     },
//   },
// };
</script>

<!-- 

in order to use composition api we need to add setup in script
then we have two options , ref and reactive

ref(0)->we need to access it like .value
and in reactive , it takes object 

 -->