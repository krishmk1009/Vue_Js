<template>
  <div>
    <NavBar></NavBar>
    <h1>Welcome  {{ userName }}</h1>

    <table>
      <tr v-for="(item, index) in restroData" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.cuisine }}</td>
        <td>{{ item.location }}</td>
        <td @click.prevent="handleDelete(item.id)" class="delete-btn">
          <button>Delete</button>
        </td>
        <td>
<router-link :to="'/update/' + item.id">Update</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import NavBar from "./Navbar.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      userName: "",
      restroData: [],
    };
  },
  components: {
    NavBar,
  },
  async created() {
    let user = localStorage.getItem("user");
    if (user) {
      this.userName = JSON.parse(user).name;
      console.log(user);
    } else {
      this.$router.push({ path: "/sign-in" });
    }

    let result = await axios.get("http://localhost:3000/restaurants");

    this.restroData = result.data;
  },

  methods: {
    async handleDelete(id) {
      try {
        await axios.delete(`http://localhost:3000/restaurants/${id}`);
        this.restroData = this.restroData.filter((item) => item.id !== id);
        alert("Restaurant deleted successfully.");
      } catch (error) {
        console.error("Error deleting restaurant:", error);
        alert("Failed to delete restaurant.");
      }
    },
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}

.delete-btn {
  color: red;
}
</style>
