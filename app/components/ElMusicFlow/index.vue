<template>
  <MusicFlow
    :options="{
      progressColor: '#a684ff',
      autoplay: true,
    }"
  >
    <template #actions="{ track }">
      <button
        type="button"
        class="flex size-10 cursor-pointer items-center justify-center rounded p-2 hover:text-red-500"
        aria-label="Mark as favorite"
        @click="onMarkTrackAsFavorite(track)"
      >
        <Icon class="text-red-500" name="mdi:heart" size="20" />
      </button>
    </template>
  </MusicFlow>
</template>
<script setup lang="ts">
import { MusicFlow, type TMusicFlow } from "vue-music-flow";

const onMarkTrackAsFavorite = (track: TMusicFlow | null) => {
  console.log(track);
  alert(`Market track ${track?.title} as favorite`);
};
</script>
