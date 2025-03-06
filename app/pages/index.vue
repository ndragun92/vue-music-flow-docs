<template>
  <pre class="text-xs">
      {{ data }}
    </pre
  >
</template>

<script lang="ts" setup>
import type { TNpmRegistry } from "~/types/npm-registry.type";

const { data } = await useFetch<TNpmRegistry>(
  "https://registry.npmjs.org/vue-music-flow",
  {
    key: "npm-registry",
  },
);
</script>
