<template>
  <div class="w-full container mx-auto space-y-4">
    <h2 class="text-3xl font-semibold mb-4">Usage</h2>
    <h3 class="text-lg font-medium">Vue 3 simple implementation</h3>
    <ElPrism :code="vueCode">
      <template #file>App.vue</template>
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
const vueCode = `<template>
  <div>
    <ul>
      <li v-for="track in tracks" :key="track.id">
        <button type="button" @click="onPlayAsPlaylist(tracks, track)">
          {{ isTrackPlaying(track.id) ? 'Pause' : 'Play' }}
        </button>
        {{ track.title }}
      </li>
    </ul>
  </div>
  <MusicFlow
    :options="{
      autoplay: true,
    }"
  />
</template>

<script setup lang="ts">
import 'vue-music-flow/dist/vue-music-flow.css'
import { MusicFlow, useMusicFlow, type TMusicFlow } from 'vue-music-flow'

const { onPlayAsPlaylist, isTrackPlaying } = useMusicFlow()

const tracks: TMusicFlow[] = [
  {
    id: 1,
    audio:
      'https://file-examples.com/storage/fefc0d228767c931e9c16ed/2017/11/file_example_MP3_700KB.mp3',
    title: 'Sample Audio 1#',
    artist: 'John Walkers',
    artwork: 'https://placehold.co/512x512',
    album: 'Free Audio',
    original: {
      source: 'https://file-examples.com/index.php/sample-audio-files/sample-mp3-download/',
    },
  },
  {
    id: 2,
    audio:
      'https://file-examples.com/storage/fefc0d228767c931e9c16ed/2017/11/file_example_MP3_1MG.mp3',
    title: 'Sample Audio 2#',
    artist: 'Steve Rooney',
    artwork: 'https://placehold.co/512x512',
    album: 'Free Audio',
    original: {
      source: 'https://file-examples.com/index.php/sample-audio-files/sample-mp3-download/',
    },
  },
  {
    id: 3,
    audio:
      'https://file-examples.com/storage/fefc0d228767c931e9c16ed/2017/11/file_example_MP3_2MG.mp3',
    title: 'Sample Audio 3#',
    artist: 'Julie Rock',
    artwork: 'https://placehold.co/512x512',
    album: 'Free Audio',
    original: {
      source: 'https://file-examples.com/index.php/sample-audio-files/sample-mp3-download/',
    },
  },
  {
    id: 4,
    audio:
      'https://file-examples.com/storage/fefc0d228767c931e9c16ed/2017/11/file_example_MP3_5MG.mp3',
    title: 'Sample Audio 4#',
    artist: 'Hans Broom',
    artwork: 'https://placehold.co/512x512',
    album: 'Free Audio',
    original: {
      source: 'https://file-examples.com/index.php/sample-audio-files/sample-mp3-download/',
    },
  },
]
<\/script>
`;
</script>
