<template>
  <div class="w-full container mx-auto space-y-4">
    <h2 class="text-3xl font-semibold mb-4">Getting Started</h2>
    <p>
      Modern Vue 3 / Nuxt 3 audio player component with playlist and waveform
      visualization.
    </p>
    <h3 class="text-lg font-semibold mb-4">Compatibility</h3>
    <div
      class="bg-zinc-950 p-4 border border-zinc-800 rounded-lg text-zinc-400"
    >
      <a
        href="https://www.npmjs.com/package/vue-music-flow"
        target="_blank"
        class="font-bold text-white hover:underline"
        >vue-music-flow</a
      >
      works with version
      <a
        class="font-bold text-white hover:underline"
        href="https://vuejs.org/"
        target="_blank"
        >Vue 3+</a
      >
      or
      <a
        class="font-bold text-white hover:underline"
        href="https://nuxt.com/"
        target="_blank"
        >Nuxt 3+</a
      >
    </div>
    <div class="flex justify-between items-center">
      <nuxt-link
        :to="{
          name: 'index',
        }"
        class="text-sm flex items-center gap-2 hover:underline"
      >
        <Icon name="mdi:arrow-left" size="20" />
        Navigate to overview
      </nuxt-link>
      <nuxt-link
        :to="{
          name: 'installation',
        }"
        class="text-sm flex items-center gap-2 hover:underline"
      >
        Navigate to installation
        <Icon name="mdi:arrow-right" size="20" />
      </nuxt-link>
    </div>
  </div>
</template>
