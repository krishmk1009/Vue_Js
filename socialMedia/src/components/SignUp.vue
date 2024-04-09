<template>
  <div>
    <div class="form-div">
      <label for="nameInput">Name</label>
      <input v-model="formData.name" type="text" name="name" id="nameInput" />
      <label for="emailInput">Email</label>
      <input
        v-model="formData.email"
        type="email"
        name="email"
        id="emailInput"
      />
      <label for="passwordInput">password</label>
      <input
        v-model="formData.password"
        type="password"
        name="password"
        id="passwordInput"
      />
      <button class="sign-up-btn" @click.prevent="handleSignUp">Sign up</button>
    </div>
    <router-link to="/sign-in">Log In</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import {onMounted} from "vue"
const router = useRouter();

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

const formData = ref<FormData>({
  name: "",
  username: "",
  email: "",
  password: "",
});


onMounted(() => {
  let user = localStorage.getItem("user");

  if (user) {
    router.push("/");
  }
}
)


const handleSignUp = async () => {
  try {
    const trimmedName = formData.value.name.trim();

    const formattedUsername = trimmedName.replace(/\s+/g, "");

    formData.value.username = formattedUsername.toLowerCase();

    const res = await axios.post("http://localhost:3000/users", formData.value);

    if (res.status === 201) {
      alert("User created successfully");
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/");
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
</script>

const handleSignIn=()=>{ }
<style scoped>
/* Styles for the form */
.form-div {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.sign-up-btn {
  background-color: black;
  color: white;
  padding: 5px;
}
</style>
