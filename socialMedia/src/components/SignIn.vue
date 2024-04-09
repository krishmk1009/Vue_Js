<template>
  <div>
    <div class="form-div">
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
      <button class="sign-in-btn" @click.prevent="handleSignIn">SignIn</button>
    </div>
    <router-link to="/sign-up">Create Account</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

interface FormData {
  email: string;
  password: string;
}

const formData = ref<FormData>({
  email: "",
  password: "",
});

onMounted(() => {
  let user = localStorage.getItem("user");

  if (user) {
    router.push("/");
  }
});

const handleSignIn = async () => {
  try {
    const res = await axios.get(
      `http://localhost:3000/users?email=${formData.value.email}&password=${formData.value.password}`
    );

    if (res && res.status === 200 && res.data.length > 0) {
      alert("loggin succesfully");
            localStorage.setItem("user", JSON.stringify(res.data[0]));

      router.push("/");
    } else {
      alert("loggin failed");
    }
  } catch (error) {
    console.log("something went wrong", error);
  }
};
</script>

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

.sign-in-btn {
  background-color: black;
  color: white;
  padding: 5px;
}
</style>
