<template>
  <div>
    <NavBar></NavBar>
    <div>
      <h1>Update Restaurant</h1>

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

        <button @click.prevent="handleUpdate" class="btn-submit">
          Update Restaurant
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./Navbar.vue";
import axios from "axios";

export default {
  name: "UpdatePage",
  components: {
    NavBar,
  },

  data() {
    return {
      name: "hello",
      cuisine: "",
      location: "",
    };
  },

  async mounted() {
    let user = await localStorage.getItem("user");
    if (!user) {
      this.$router.push({ path: "/sign-in" });
    }
    const id = this.$route.params.id;
    let result = await axios.get(`http://localhost:3000/restaurants/${id}`);

    this.name = result.data.name;
    this.cuisine = result.data.cuisine;
    this.location = result.data.location;
  },

  methods: {
    async handleUpdate() {
            const id = this.$route.params.id;

      try {
        let result = await axios.put(
          `http://localhost:3000/restaurants/${id}`,
          {
            name: this.name,
            cuisine: this.cuisine,
            location: this.location,
          }
        );

        if (result.status === 200) {
          alert("data has been updated");
          this.$router.push({ path: "/" });
        }
      } catch (error) {
        console.log("something went wrong" , error)
      }
    },
  },
};
</script>
