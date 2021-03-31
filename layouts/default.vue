<template>
  <div class="max-w-4xl pt-8 mx-auto">
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
html * {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, Roboto,
    Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
