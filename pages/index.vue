<script>
import { formatDate } from "@/lib/utils";

export default {
  async asyncData({ $content }) {
    const articles = await $content("blog")
      .only(["title", "slug", "updatedAt", "tagline", "readingTime"])
      .sortBy("createdAt", "asc")
      .fetch();

    return { articles };
  },
  methods: {
    formatDate: formatDate,
  },
};
</script>

<template>
  <div>
    <aside class="flex space-x-4 my-24">
      <div>
        <img
          class="w-20 rounded-full bg-gray-50"
          src="/avatar.jpg"
          alt="Avatar of Vincent Mugambi"
        />
      </div>
      <dl class="self-center">
        <dt>
          Personal blog by
          <nuxt-link class="underline hover:text-blue-500" to="/about"
            >Vincent Mugambi</nuxt-link
          >
        </dt>
        <dd>Here, I share things I learn during work or play</dd>
      </dl>
    </aside>

    <main>
      <ul class="mt-8 space-y-8 max-w-prose">
        <li
          class="hover:bg-gray-100 rounded-xl cursor-pointer p-4 -m-4"
          v-for="article of articles"
          :key="article.slug"
        >
          <nuxt-link class="hover:text-gray-800" :to="`blog/${article.slug}`">
            <h3 class="font-bold text-3xl mb-2">{{ article.title }}</h3>
            <dl class="text-sm flex space-x-2 -ml-2">
              <dt class="hidden">Posted on</dt>
              <dd class="uppercase tracking-wide">
                {{ formatDate(article.updatedAt) }}
              </dd>
              <dt class="hidden">Reading time</dt>
              <dd>{{ article.readingTime }}</dd>
            </dl>
            <p>{{ article.tagline }}</p>
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>