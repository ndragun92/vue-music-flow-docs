<template>
  <div class="hidden" data-clarity="true" />
</template>

<script lang="ts" setup>
import Clarity from "@microsoft/clarity";

onMounted(() => {
  Clarity.init("qko0ej55oc");
  console.info("Clarity loaded");
});
</script>
