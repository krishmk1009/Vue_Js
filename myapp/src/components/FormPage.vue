<template>
  <div class="formContainer">
    <form @submit.prevent="handleSubmit">
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="formData.name" />
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="formData.email" />
      <button :disabled="isFormInvalid" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {

computed:{
    isFormInvalid(){
      return this.formData.name === '' || this.formData.email === '';
    }
},

  data() {
    return {
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (!this.formData.name || !this.formData.email) {
        alert("please fill all the details");
        return;
      }
      console.log("Form data has been submitted", this.formData);
    },
  },
};
</script>

<style scoped>
.formContainer {
  margin-top: 20px;
}
</style>
