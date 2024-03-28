<template>
  <div>
    <h1>SignIn</h1>

    <div class="form-group">
      <input
        type="email"
        name="email"
        placeholder="Email"
        v-model="email"
        class="form-control"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
        class="form-control"
      />
      <button @click.prevent="handleSubmit" class="btn-submit">Submit</button>
    </div>
    <router-link to="/sign-up">Create Account</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  async created() {
    let user = await localStorage.getItem("user");
    if (user) {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    async handleSubmit() {
      try {
        let res =await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );

        if (res.status === 200 && res.data.length > 0) {
          alert("User loggedin successfully");
          localStorage.setItem("user", JSON.stringify(res.data[0]));
          this.$router.push({ path: "/" });
        }
        else{
            alert("not accessible")
        }
      } catch (error) {
        console.log("something went wrong", error);
      }
    },
  },
};
</script>
