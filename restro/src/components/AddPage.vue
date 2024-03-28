<template>
  <div>
    <NavBar></NavBar>
    <div>
      <h1>Add Restaurant</h1>

      <div class="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name of Restaurant"
          v-model="name"
          class="form-control"
        />
        <input
          type="text"
          name="cuisine"
          placeholder="Name of cuisine"
          v-model="cuisine"
          class="form-control"
        />
        <input
          type="text"
          name="location"
          placeholder="Name of location"
          v-model="location"
          class="form-control"
        />

        <button @click.prevent="handleAdd" class="btn-submit">
          Add Restaurant
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./Navbar.vue";
import axios from "axios"

export default {
  name: "AddPage",
  components: {
    NavBar,
  },

  data() {
    return {
      name: "",
      cuisine: "",
      location: "",
    };
  },

  async mounted() {
    let user = await localStorage.getItem("user");
    if (!user) {
      this.$router.push({ path: "/sign-in" });
    }
  },

  methods: {
 async handleAdd() {
try {
    let result = await axios.post("http://localhost:3000/restaurants" , {
        name:this.name,
        cuisine:this.cuisine ,
        location: this.location
    })

    if(result.status===201){
        alert("New Restuarant has been added")
    }

    this.name="";
    this.cuisine="";
    this.location=""
} catch (error) {
    console.log("something went wrong" , error)
}

    },
  },
};
</script>
