<template>
  <header>
    <ul>
      <li>
        <router-link to="/"> Home</router-link>
        <router-link to="/sign-in"> SignIn</router-link>
        <router-link :to="`/profile/${userId}`">Profile</router-link>
      </li>
      <button @click.prevent="handleLogout">logout</button>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

let userId = ref(null);

const router = useRouter();
const handleLogout = (): void => {
  localStorage.removeItem("user");
  router.push("/sign-in");
  alert("loggout succesfullly");
};

onMounted(() => {
  let user = localStorage.getItem("user");

  if (user) userId.value = JSON.parse(user).id;
//   alert(userId.value)
});

// Define the component and import RouterLink
const Navbar = {
  components: {
    RouterLink,
  },
  setup() {
    return { logout };
  },
};
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  margin-right: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
