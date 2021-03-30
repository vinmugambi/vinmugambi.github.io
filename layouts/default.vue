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
