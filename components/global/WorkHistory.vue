<template>
  <div class="flex">
    <ul>
      <li v-for="work in works" :key="work.from">
        {{ work.org }}
        <div>{{ work.from }} -> {{ work.to }}</div>
        <p>{{ work.role }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: []
    };
  },
  async fetch() {
    this.works = await this.$http
      .$get("/_content/work")
      .catch(err => console.error(err));
  }
};
</script>
