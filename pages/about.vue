<template>
  <main class="py-8">
    <section>
      <div class="flex items-center">
        <div class="inline-block">
          <img
            class="w-64 rounded-xl bg-gray-50"
            src="/avatar.jpg"
            alt="Avatar of Vincent Mugambi"
          />
        </div>

        <div class="inline-block pl-4">
          <h1>Vincent Mugambi</h1>

          <div class="subtitle">Front-end Engineer</div>
        </div>
      </div>

      <nuxt-content class="pt-4" :document="about"></nuxt-content>

      <ul class="skills" v-for="(skills, lang) in about.skills" :key="lang">
        <li class="title">{{ lang }}</li>

        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>

    <div>
      <nav role="tablist">
        <button
          v-for="tab in tabList"
          :key="tab.id"
          class="
            inline-block
            pt-2
            pb-1
            px-2
            font-semibold
            opacity-90
            focus:outline-none
            hover:bg-gray-200
          "
          @click="selectedTabId = tab.id"
          role="tab"
          :aria-selected="selectedTabId === tab.id ? true : false"
          :aria-controls="tab.id"
          :id="`tab-${tab.id}`"
          :tabindex="selectedTabId === tab.id ? 0 : -1"
        >
          {{ tab.label }}
          <span
            class="block w-full mt-1 border"
            :class="
              selectedTabId === tab.id ? 'border-black' : 'border-transparent'
            "
          ></span>
        </button>
      </nav>

      <section
        id="work"
        role="tabpanel"
        v-show="selectedTabId == 'work-history'"
        tabindex="0"
        aria-labelledby="tab-work-history"
      >
        <h2>Previous employment</h2>

        <ul class="work" v-for="job in work" :key="job.title">
          <li class="title">
            <div>
              <strong class="inline-block pr-2">{{ job.title }}</strong>

              <i class="text-base">
                {{ formatDate(job.startDate) }} &mdash;
                {{ formatDate(job.endDate) }}
              </i>
            </div>

            <div class="opacity-90">
              <span class="">{{ job.org }}</span>

              <i>{{ job.address }}</i>
            </div>

            <!-- <pre>{{job}}</pre> -->
          </li>

          <li v-for="(duty, index) in job.duties" :key="`${index}-${job.slug}`">
            {{ duty }}
          </li>
        </ul>
      </section>

      <section
        id="portfolio"
        v-show="selectedTabId == 'portfolio'"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-portfolio"
      >
        <h2>Things I have built</h2>

        <ul class="pt-4">
          <li
            class="grid md:grid-cols-2 gap-4"
            v-for="project in projects"
            :key="project.slug"
          >
            <div class="project-image p-2 bg-gray-50">
              <img
                :src="project.screenshot"
                alt=""
                class="object-cover w-full"
              />
            </div>

            <div class="project-details flex flex-col">
              <h3>{{ project.title }}</h3>

              <span class="text-sm">
                Completed in {{ formatDate(project.date) }}
              </span>

              <p class="pt-2">{{ project.description }}</p>

              <div class="links pt-2">
                <a :href="project.link" target="_blank">visit</a>

                <a :href="project.repo" target="_blank">view repo</a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section
        id="education"
        v-show="selectedTabId == 'education'"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-education"
      >
        <h2>Education history</h2>

        <ul class="work">
          <li v-for="level in education" :key="level.from" class="title">
            <div>
              <strong class="inline-block pr-2">{{ level.course }}</strong>

              <i class="text-base">
                {{ formatDate(level.startDate) }} &mdash;
                {{ formatDate(level.endDate) }}
              </i>
            </div>

            <div class="opacity-90">
              <span class="">{{ level.org }}</span>

              <i>{{ level.address }}</i>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <section>
      <h2>Interests</h2>

      <ul class="skills text-lg">
        <li>Athletics (running)</li>

        <li>Travel</li>

        <li>Finance and Banking</li>
      </ul>

      <p>I hold in high regard the ideas and opinions of these people:</p>

      <ul class="influences">
        <li>
          <a href="https://twitter.com/adamwathan">Adam Wathan</a>
          the creator of Talwind Css
        </li>

        <li>
          <a href="https://twitter.com/debs_obrien">Debbie Obrien</a>
          an ambassador of Nuxt.js
        </li>

        <li>
          <a href="https://twitter.com/getify">Kyle Simpson</a>
          writer of You Dont Know JavaScript book series
        </li>

        <li><a href="https://twitter.com/kanyewest">Kanye West</a></li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const about = await $content("about").fetch();
    const projects = await $content("projects").fetch();
    const contacts = await $content("contacts").fetch();
    const work = await $content("work_history").fetch();
    const education = await $content("education").fetch();
    return { about, projects, contacts, work, education };
  },
  data() {
    return {
      tabList: [
        { id: "portfolio", label: "Portfolio" },
        { id: "work-history", label: "Employment" },
        { id: "education", label: "Education" },
      ],
      selectedTabId: "portfolio",
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-KE", {
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
h1 {
  @apply md:text-4xl pb-2 text-3xl;
}
section {
  @apply pb-8;
}
section h2 {
  @apply text-3xl md:text-4xl pb-6;
}
section h3 {
  @apply text-2xl;
}
section[role="tabpanel"] {
  @apply pt-8;
}
section[role="tabpanel"]:focus {
  @apply outline-none;
}
.subtitle {
  @apply text-2xl opacity-90;
}

.nuxt-content p,
section > p {
  @apply pt-4 pb-2 text-lg max-w-prose;
}

ul.skills {
  @apply flex flex-wrap pb-2;
}

ul.skills li {
  @apply mb-1 mr-2;
}

ul.skills li:not(.title)::before {
  content: "\025B9";
  @apply inline-block pr-1 pb-1 opacity-50;
}

ul.skills li.title {
  @apply font-semibold;
}
ul.work,
ul.influences {
  @apply list-inside pb-4 md:text-lg;
}
ul.work li.title {
  @apply pb-2;
}
ul.work li:not(.title),
.project-details .links {
  margin-block-start: auto;
}
.project-details .links a {
  @apply opacity-90 pr-2;
}
a[target="_blank"]::after {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
  margin: 0 3px 0 5px;
}

.project-details .links a:hover {
  text-decoration: underline;
}
</style>

