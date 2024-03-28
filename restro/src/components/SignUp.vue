<template>
  <div class="signup-container">
    <h1>SignUp</h1>

    <div class="form-group">
      <input type="text" name="name" placeholder="Name" v-model="name" class="form-control" />
      <input type="email" name="email" placeholder="Email" v-model="email" class="form-control" />
      <input type="password" name="password" placeholder="Password" v-model="password" class="form-control" />
      <button @click.prevent="handleSubmit" class="btn-submit">Submit</button>
    </div>
        <router-link to='/sign-in'>Log In</router-link>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
    
    async created(){

        let user = await localStorage.getItem("user");
        if(user){
             this.$router.push({ path: '/' })
        }
    }
    ,

  methods: {
    async handleSubmit() {
      try {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        if (result.status === 201) {
          alert("User created successfully");
          localStorage.setItem("user", JSON.stringify(result.data[0]));
          this.$router.push({ path: '/' })

        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
  },
};
</script>

<style>
.signup-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>
