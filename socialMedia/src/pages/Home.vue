<template>
  <div>
    <Navbar></Navbar>
    <h1>Home</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "/src/components/Navbar.vue";
import { useRouter } from "vue-router";

const router=useRouter()

onMounted(() => {
  let user = localStorage.getItem("user");

  if (user) {
    console.log(user);
  } else {
    router.push("/sign-in");
  }
});
</script>
