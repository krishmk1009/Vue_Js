<template>
  <header class="navbar">
    <nav>
      <ul>
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/add" class="nav-link">Add Restaurant</router-link></li>
        <li><router-link to="/update" class="nav-link">Update Restaurant</router-link></li>

        <button @click.prevent="handleLogout">Logout</button>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",

  methods: {
    handleLogout() {
      localStorage.removeItem("user");
      this.$router.push({ path: "/sign-in" });
      alert("Logout succesfull");
    },
  },
};
</script>

<style>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  display: flex;
}

nav ul li {
  margin-right: 10px;
}

nav ul li button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

/* Style for router-link elements */
.nav-link {
  color: white;
  text-decoration: none;
}

/* Style for active router-link elements */
.nav-link.router-link-exact-active {
  font-weight: bold;
}
</style>
