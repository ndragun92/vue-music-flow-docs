<template>
  <div class="w-full container mx-auto space-y-4">
    <h2 class="text-3xl font-semibold mb-4">Usage</h2>
    <h3 class="text-lg font-medium">Vue 3 simple implementation</h3>
    <ElPrism :code="vueCode">
      <template #file>./src/App.vue</template>
    </ElPrism>
    <h3 id="nuxt" class="text-lg font-medium">Nuxt 3 module implementation</h3>
    <ElTerminal
      :commands="['npx nuxi module add nuxt-music-flow']"
      code="npx nuxi module add nuxt-music-flow"
    >
      <template #file>Terminal</template>
    </ElTerminal>
    <!--    <h3 class="text-lg font-medium">or (non module) implementation</h3>-->
    <!--    <ElPrism :code="nuxtConfigCode" :ts="true">-->
    <!--      <template #file>./nuxt.config.ts</template>-->
    <!--    </ElPrism>-->
    <!--    <ElPrism :code="nuxtComponentCode">-->
    <!--      <template #file>./components/MusicFlow/index.vue</template>-->
    <!--    </ElPrism>-->
    <ElPrism :code="nuxtCode">
      <template #file>./app/pages/index.vue</template>
    </ElPrism>
    <div class="flex justify-between items-center">
      <nuxt-link
        :to="{
          name: 'usage',
        }"
        class="text-sm flex items-center gap-2 hover:underline"
      >
        <Icon name="mdi:arrow-left" size="20" />
        Navigate to usage
      </nuxt-link>
      <nuxt-link
        :to="{
          name: 'customization',
        }"
        class="text-sm flex items-center gap-2 hover:underline"
      >
        Navigate to customization
        <Icon name="mdi:arrow-right" size="20" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vueCode } from "public/example/vueCode.json";
// import { nuxtConfigCode } from "public/example/nuxtConfigCode.json";
// import { nuxtComponentCode } from "public/example/nuxtComponentCode.json";
import { nuxtCode } from "public/example/nuxtCode.json";
</script>
