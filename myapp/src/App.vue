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
    <FormPage></FormPage>
    <Counter></Counter>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageBody from "./components/PageBody.vue";
import axios from "axios"; // Import Axios for HTTP requests
// import "./assets/page.json"
import FormPage from "./components/FormPage.vue"
import Counter from "./components/Counter.vue"

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
    FormPage,
    Counter
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
