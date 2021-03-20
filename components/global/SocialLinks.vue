<template>
  <ul class="flex space-x-2 my-4">
    <li v-for="link in socialLinks" :key="link.name">
      <a :href="link.link">
        <img class="w-6 h-6" :src="link.icon" :alt="link.name" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: []
    };
  },
  async fetch() {
    const { social } = await this.$http
      .$get("/_content/contact")
      .catch(err => console.error(err));
    if (social) {
      this.socialLinks = social;
    }
  }
};
</script>
