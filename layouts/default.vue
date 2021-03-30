<template>
  <div class="max-w-3xl pt-8 mx-auto">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar }
};
</script>

<style scoped>
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
