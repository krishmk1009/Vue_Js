<template>
<Navbar></Navbar>
  <h1>{{userInfo.name}}</h1>
  <h1>
  {{userInfo.email}}
  </h1>
</template>

<script setup lang="ts">
import Navbar from "/src/components/Navbar.vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios"
const userInfo = ref({});
const postInfo = ref({})

const router = useRouter();

onMounted(async() => {
  let user = localStorage.getItem("user");

  if (user) {
    userInfo.value = JSON.parse(user);
    // console.log(userInfo.value);
  } else {
    router.push("/sign-in");
    return
  }

  const id = userInfo.value.id

 
  try {
    
    const res = await axios.get(`http://localhost:3000/posts?userId=${id}`)
    postInfo.value = res.data
    console.log(postInfo.value)
  } catch (error) {
    
  }
});
</script>
