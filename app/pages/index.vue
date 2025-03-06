<template>
  <pre class="text-xs">
      {{ data }}
    </pre
  >
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/npm-registry", {
  key: "npm-registry",
});
</script>
