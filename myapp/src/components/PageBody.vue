<template>
  <div id="content">
    <h1>{{ page.heading }}</h1>
  </div>
</template>

<script>
export default {
  props: ["page"],  
  //  this approch is useful when you have handled the unset props by binding method

   // props: {
  //   page: {
  //     type: String,
  //     default: "", // Default value for the 'page' prop with 'content' property
  //   },
  // },   this is how we can set the default props
};
</script>
