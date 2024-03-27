<template>
  <div id="nav" :class="[`theme-${theme}`]">
    <ul>
      <li v-for="(page, index) in pages" :key="index">
        <a
          :class="{ active: activePage === index }"
          :href="page.links.url"
          :title="`This is a ${page.links.title}`"
          @click.prevent="setPage(index)"
        >
          {{ page.links.title }}
        </a>
      </li>
    </ul>
    <button @click="changeTheme()">Toggle Color</button>
  </div>
</template>

<script>
export default {
  props: ["pages", "activePage", "setPage"],

  data() {
    return {
      theme: "dark",
    };
  },

  created() {
    this.getThemeSetting();
  },
  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme === "light") {
        theme = "dark";
      }

      this.theme = theme;
      this.storeThemeSetting()
    },

    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");

      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
