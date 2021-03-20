<template>
  <div class="mx-auto max-w-4xl min-h-screen">
    <nuxt-content :document="bio"></nuxt-content>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const bio = await $content("index").fetch();
    const projects = await $content("projects").fetch();

    return { bio, projects };
  }
};
</script>
