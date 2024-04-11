<template>
  <div>
    <Navbar></Navbar>
    <h1>{{ userInfo.name }}</h1>
    <h1>{{ userInfo.email }}</h1>
    <!-- Display posts from postInfo without proxy -->
    <div v-if="postInfo.value && postInfo.value.length > 0">
      <h2>Posts:</h2>
      <ul>
        <li v-for="post in postInfo.value" :key="post.id">
          {{ post.title }} - {{ post.body }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No posts found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "/src/components/Navbar.vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const userInfo = ref({});
const postInfo = ref([]);

const router = useRouter();

onMounted(async () => {
  let user = localStorage.getItem("user");

  if (user) {
    userInfo.value = JSON.parse(user);
  } else {
    router.push("/sign-in");
    return;
  }

  const id = userInfo.value.id;

  try {
    const res = await axios.get(`http://localhost:3000/posts?userId=${id}`);
    postInfo.value = JSON.parse(JSON.stringify(res.data)); // Remove Vue proxy
    console.log(postInfo.value);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});
</script>
