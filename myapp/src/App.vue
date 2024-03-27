<template>
  <div id="main">
    <Navbar
      :pages="pages"
      :active-page="activePage"
      :set-page="(index) => (activePage = index)"
    ></Navbar>
    <PageBody 
    v-if="pages.length >0 "
    :page="pages[activePage]"></PageBody>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageBody from "./components/PageBody.vue";
import axios from "axios"; // Import Axios for HTTP requests
// import "./assets/page.json"

export default {
  data() {
    return {
      activePage: 0,
      pages: [], // Initialize pages as an empty array
    };
  },
  components: {
    Navbar,
    PageBody,
  },
  created() {
    this.fetchPageData(); // Call fetchPageData when the component is created
  },
  methods: {
    async fetchPageData() {
      try {
        const response = await fetch("page.json")
        console.log(response)

        this.pages =await response.json(); // Set pages data from the JSON response
        console.log(this.pages)
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    },
  },
};
</script>
