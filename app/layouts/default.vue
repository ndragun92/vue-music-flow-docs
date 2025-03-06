<template>
  <Body class="bg-zinc-900 text-white" />
  <div class="flex min-h-svh overflow-x-hidden relative">
    <aside class="border-r border-zinc-800 w-xs p-4 bg-zinc-950/50">
      <div class="flex items-center gap-4 mb-8">
        <NuxtImg
          class="size-8"
          src="/images/logo.png"
          alt="Vue Music Flow - NPM Package"
        />
        <h1 class="font-semibold text-xl">
          Vue Music Flow <sup class="text-emerald-500">Docs</sup>
        </h1>
      </div>
      <h2 class="text-sm font-medium mb-4">Getting Started</h2>
      <ul>
        <li>
          <nuxt-link
            :to="{
              name: 'installation',
            }"
            class="block border-l pl-4 py-1 border-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors"
            :class="{
              '!border-emerald-500 !text-white': routeName === 'installation',
            }"
            >Installation</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            :to="{
              name: 'usage',
            }"
            class="block border-l pl-4 py-1 border-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors"
            :class="{
              '!border-emerald-500 !text-white': routeName === 'usage',
            }"
            >Usage</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            :to="{
              name: 'customization',
            }"
            class="block border-l pl-4 py-1 border-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors"
            :class="{
              '!border-emerald-500 !text-white': routeName === 'customization',
            }"
            >Customization</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            :to="{
              name: 'options',
            }"
            class="block border-l pl-4 py-1 border-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors"
            :class="{
              '!border-emerald-500 !text-white': routeName === 'options',
            }"
            >Options</nuxt-link
          >
        </li>
      </ul>
    </aside>
    <main class="flex-1 min-w-0">
      <div
        class="absolute pointer-events-none top-0 left-1/2 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]"
      >
        <div
          class="absolute inset-0 bg-linear-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"
        >
          <svg
            aria-hidden="true"
            class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
          >
            <defs>
              <pattern
                id=":S1:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="-12"
                y="4"
              >
                <path d="M.5 56V.5H72" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#:S1:)"
            />
            <svg x="-12" y="4" class="overflow-visible">
              <rect stroke-width="0" width="73" height="57" x="288" y="168" />
              <rect stroke-width="0" width="73" height="57" x="144" y="56" />
              <rect stroke-width="0" width="73" height="57" x="504" y="168" />
              <rect stroke-width="0" width="73" height="57" x="720" y="336" />
            </svg>
          </svg>
        </div>
        <svg
          viewBox="0 0 1113 440"
          aria-hidden="true"
          class="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
        >
          <path
            d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"
          />
        </svg>
      </div>
      <nav
        class="border-b border-zinc-800 h-14 bg-zinc-950/50 flex justify-end items-center px-8"
      >
        <div>
          <a
            class="hover:text-emerald-500 transition-colors hover:underline"
            href="https://github.com/ndragun92/vue-music-flow"
            target="_blank"
            aria-label="Github Link"
          >
            <Icon name="mdi:github" size="24" />
          </a>
        </div>
      </nav>
      <article class="p-6">
        <slot />
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const routeName = computed(() => route.name as string);
</script>
