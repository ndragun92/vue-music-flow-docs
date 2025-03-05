<template>
  <NumberFlow :value="model" />
</template>

<script lang="ts" setup>
import NumberFlow from "@number-flow/vue";

const model = defineModel({ required: true, type: Number });
</script>
