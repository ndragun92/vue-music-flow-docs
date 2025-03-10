<template>
  <Body class="bg-zinc-900 text-white scrollbar-docs" />
  <div class="flex min-h-svh overflow-x-hidden relative">
    <aside
      class="sidebar border-r border-zinc-800 w-xs p-4 bg-zinc-950/98 lg:bg-zinc-950/50 transition-transform"
      :class="{
        'sidebar--open': showSidebar,
      }"
    >
      <div class="flex items-center gap-4 mb-8">
        <NuxtImg
          class="size-8"
          src="https://ik.imagekit.io/ltdassets/public/images/logo.png"
          alt="Vue Music Flow - NPM Package"
        />
        <h1 class="font-semibold text-xl">
          Vue Music Flow <sup class="text-emerald-500">Docs</sup>
        </h1>
        <button
          type="button"
          aria-label="Toggle sidebar"
          :aria-expanded="showSidebar"
          class="sidebar-toggle items-center justify-center hover:text-emerald-500 transition-colors cursor-pointer"
          @click="showSidebar = false"
        >
          <Icon name="solar:close-square-linear" size="34" />
        </button>
      </div>
      <h2 class="text-sm font-medium mb-4">Guide</h2>
      <ul>
        <li>
          <nuxt-link
            :to="{
              name: 'index',
            }"
            class="block border-l pl-4 py-1 border-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors"
            :class="{
              '!border-emerald-500 !text-white': routeName === 'index',
            }"
            >Overview</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            :to="{
              name: 'getting-started',
            }"
            class="block border-l pl-4 py-1 border-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors"
            :class="{
              '!border-emerald-500 !text-white':
                routeName === 'getting-started',
            }"
            >Getting Started</nuxt-link
          >
        </li>
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
        <li>
          <nuxt-link
            :to="{
              name: 'demo',
            }"
            class="block border-l pl-4 py-1 border-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors"
            :class="{
              '!border-emerald-500 !text-white': routeName === 'demo',
            }"
            >Demo page</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            :to="{
              name: 'builder',
            }"
            class="block border-l pl-4 py-1 border-zinc-800 text-sm text-zinc-400 hover:text-white transition-colors"
            :class="{
              '!border-emerald-500 !text-white': routeName === 'builder',
            }"
            >Player Builder</nuxt-link
          >
        </li>
      </ul>
    </aside>
    <main class="flex-1 min-w-0">
      <div
        class="absolute pointer-events-none top-0 left-1/2 ml-[-38rem] h-[25rem] w-[81.25rem] [mask-image:linear-gradient(white,transparent)]"
      >
        <div
          class="absolute inset-0 bg-linear-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-[#36b49f]/30 to-[#DBFF75]/30 opacity-100"
        >
          <svg
            aria-hidden="true"
            class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] mix-blend-overlay fill-white/2.5 stroke-white/5"
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
      </div>
      <nav
        class="border-b border-zinc-800 h-14 bg-zinc-950/50 flex justify-between items-center px-8"
      >
        <div>
          <button
            type="button"
            aria-label="Toggle sidebar"
            :aria-expanded="showSidebar"
            class="navbar-toggle items-center justify-center hover:text-emerald-500 transition-colors cursor-pointer"
            @click="showSidebar = true"
          >
            <Icon name="solar:hamburger-menu-linear" size="34" />
          </button>
        </div>
        <div class="space-x-4">
          <a
            class="hover:text-emerald-500 transition-colors hover:underline"
            href="https://www.npmjs.com/package/vue-music-flow"
            target="_blank"
            aria-label="NPM Link"
          >
            <Icon name="mdi:npm" size="24" />
          </a>
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
      <article class="p-6 pb-12">
        <slot />
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const routeName = computed(() => route.name as string);

const showSidebar = ref(false);

watch(routeName, () => {
  showSidebar.value = false;
});
</script>

<style scoped>
.sidebar {
  transform: translateX(0);
}
.sidebar--open {
  transform: translateX(0);
}
.sidebar-toggle {
  display: none;
}
.navbar-toggle {
  display: none;
}
@media only screen and (max-width: 1024px) {
  .sidebar-toggle {
    display: flex;
  }
  .navbar-toggle {
    display: flex;
  }
  .sidebar {
    position: fixed;
    inset: 0;
    transform: translateX(-100%);
  }
  .sidebar--open {
    transform: translateX(0);
  }
}
</style>
