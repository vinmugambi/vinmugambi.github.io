<template>
  <div class="mx-auto max-w-3xl px-4">
    <header class="">
      <nav class="mx-auto max-w-3xl flex">
        <nuxt-link to="/">
          <img
            class="w-16 rounded-full hover:bg-gray-100"
            src="/icon.png"
            alt="Avatar of Vincent Mugambi"
          />
        </nuxt-link>
      </nav>
    </header>
    <Nuxt />
    <footer class="pt-16 flex justify-between">
      <address class="inline-block">
        <a :href="'mailto:' + contacts.email">{{ contacts.email }}</a>
      </address>

      <div>
        <a
          v-for="social in contacts.social"
          class="inline-block pr-2"
          :key="social.name"
          :href="social.link"
        >
          <img class="w-6" :src="social.icon" :alt="`${social.name} icon`" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return { contacts: {} };
  },
  async fetch() {
    this.contacts = await this.$content("contacts").fetch();
  },
};
</script>

<style scoped>
html * {
  font-family: sans-serif;
  @apply text-lg;
}
</style>
