<template>
  <div class="@container container mx-auto mt-8">
    <div class="space-y-2">
      <h1 class="text-xl font-semibold">{{ data?._id }}</h1>
      <div class="flex items-center gap-0.5 text-sm">
        <div>{{ data?.["dist-tags"]?.latest }}</div>
        <div><Icon name="mdi:dot" size="24" /></div>
        <div class="text-emerald-500">Public</div>
        <div><Icon name="mdi:dot" size="24" /></div>
        <div>last update was {{ updated }}</div>
      </div>
    </div>
    <div class="flex flex-col @6xl:!flex-row gap-8 mt-8">
      <div class="flex-1 min-w-0 space-y-4">
        <div
          class="markdown-container bg-zinc-950/50 px-4 py-8 rounded border border-zinc-800"
        >
          <div
            class="break-words whitespace-break-spaces"
            v-html="returnContent()"
          />
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">Keywords</h3>
          <div class="text-lg text-orange-400">
            {{ data?.keywords.join(" ") }}
          </div>
        </div>
        <div class="flex justify-end">
          <nuxt-link
            :to="{
              name: 'getting-started',
            }"
            class="text-sm flex items-center gap-2 hover:underline"
          >
            Navigate to get started
            <Icon name="mdi:arrow-right" size="20" />
          </nuxt-link>
        </div>
      </div>
      <div class="w-md space-y-4 lg:mt-0 max-w-full">
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">Install</h3>
          <client-only>
            <ElTerminal
              :commands="['npm i vue-music-flow']"
              code="npm i vue-music-flow"
            />
          </client-only>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">Repository</h3>
          <div class="flex items-center gap-2">
            <Icon name="mdi:github" size="24" />
            <a
              class="underline hover:text-emerald-500 transition-colors"
              :href="repositoryUrl"
              >{{ repositoryUrl.replace("https://", "") }}</a
            >
          </div>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">Homepage</h3>
          <div class="flex items-center gap-2">
            <Icon name="mdi:github" size="24" />
            <a
              class="underline inline-block hover:text-emerald-500 transition-colors truncate"
              :href="data?.homepage"
              >{{ data?.homepage }}</a
            >
          </div>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">Weekly Downloads</h3>
          <div class="flex items-center gap-2">
            <Icon name="mdi:download" size="24" />
            <div>
              {{ downloads?.downloads || 0 }}
            </div>
          </div>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">Latest Version</h3>
          <div>{{ data?.["dist-tags"]?.latest }}</div>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">Latest Publish</h3>
          <div>{{ updated }}</div>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">
            Dependencies ({{ Object.keys(dependencies).length }})
          </h3>
          <div>
            <ul class="flex items-center gap-2 flex-wrap">
              <li
                v-for="(dependencyValue, dependencyKey) in dependencies"
                :key="dependencyKey"
              >
                <a
                  :href="`https://www.npmjs.com/package/${encodeURIComponent(dependencyKey)}`"
                  target="_blank"
                  class="text-emerald-500 hover:text-emerald-600"
                  >{{ dependencyKey
                  }}<sup class="text-yellow-400">{{ dependencyValue }}</sup></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">
            Dev Dependencies ({{ Object.keys(devDependencies).length }})
          </h3>
          <div>
            <ul class="flex items-center gap-2 flex-wrap">
              <li
                v-for="(
                  devDependencyValue, devDependencyKey
                ) in devDependencies"
                :key="devDependencyKey"
              >
                <a
                  :href="`https://www.npmjs.com/package/${encodeURIComponent(devDependencyKey)}`"
                  target="_blank"
                  class="text-emerald-500 hover:text-emerald-600"
                  >{{ devDependencyKey
                  }}<sup class="text-yellow-400">{{
                    devDependencyValue
                  }}</sup></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-lg text-zinc-400">
            All Versions ({{ Object.keys(versions).length }})
          </h3>
          <div>
            <ul class="flex items-center gap-2 flex-wrap">
              <li
                v-for="(versionValue, versionKey) in versions"
                :key="versionValue._id"
              >
                <a
                  :href="`https://www.npmjs.com/package/vue-music-flow/v/${encodeURIComponent(versionKey)}`"
                  target="_blank"
                  class="text-emerald-500 hover:text-emerald-600"
                  >{{ versionKey }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import "prismjs/themes/prism-tomorrow.min.css";
const { data } = await useFetch("/api/npm-registry", {
  key: "npm-registry",
});

const { data: downloads } = await useFetch("/api/npm-registry-downloads", {
  key: "npm-registry-downloads",
});

const updated = useTimeAgo(data.value?.time?.modified || new Date());

const repositoryUrl = computed(
  () =>
    data.value?.repository?.url?.replace("git+", "").replace(".git", "") || "",
);

const versions = computed(() => Object(data.value?.versions));

const dependencies = computed(() =>
  Object(data.value?.versions[data.value?.["dist-tags"]?.latest]?.dependencies),
);

const devDependencies = computed(() =>
  Object(
    data.value?.versions[data.value?.["dist-tags"]?.latest]?.devDependencies,
  ),
);

const { $mdRenderer } = useNuxtApp();

const returnContent = () => $mdRenderer.render(data.value?.readme);
</script>

<style>
.markdown-container h1 {
  font-size: var(--text-5xl);
  border-bottom: 1px solid var(--color-zinc-700);
  padding-bottom: 0.5rem;
}
.markdown-container h2 {
  font-size: var(--text-3xl);
  border-bottom: 1px solid var(--color-zinc-700);
  padding-bottom: 0.5rem;
}
.markdown-container h3 {
  font-size: var(--text-xl);
}
.markdown-container h4 {
  font-size: var(--text-lg);
}
.markdown-container a {
  text-decoration: underline;
  color: var(--color-emerald-500);
}
.markdown-container a:hover {
  color: var(--color-emerald-600);
}

.markdown-container code {
  background-color: var(--color-zinc-700);
  border-radius: var(--radius-md);
  padding: 0.05rem 0.25rem;
}

.markdown-container code.hljs {
  background-color: var(--color-zinc-800);
  border: 1px solid var(--color-zinc-700);
}
</style>
