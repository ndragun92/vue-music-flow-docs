<template>
  <div class="w-full container mx-auto space-y-4">
    <h2 class="text-3xl font-semibold mb-4">Installation</h2>
    <div
      class="bg-zinc-950 p-4 border border-zinc-800 rounded-lg text-zinc-400"
    >
      Recommended Node.js version is
      <strong class="text-white">v22.x or higher</strong>
    </div>
    <ElTerminal :commands="['npm i vue-music-flow']">
      <template #file>Terminal</template>
    </ElTerminal>
    <div class="flex justify-between items-center">
      <nuxt-link
        :to="{
          name: 'getting-started',
        }"
        class="text-sm flex items-center gap-2 hover:underline"
      >
        <Icon name="mdi:arrow-left" size="20" />
        Navigate to getting started
      </nuxt-link>
      <nuxt-link
        :to="{
          name: 'usage',
        }"
        class="text-sm flex items-center gap-2 hover:underline"
      >
        Navigate to usage
        <Icon name="mdi:arrow-right" size="20" />
      </nuxt-link>
    </div>
  </div>
</template>
