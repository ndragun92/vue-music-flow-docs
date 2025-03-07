<template>
  <main>
    <client-only>
      <MusicFlow :options="Object(routeQuery)" />
    </client-only>
  </main>
</template>

<script lang="ts" setup>
import { MusicFlow, useMusicFlow } from "vue-music-flow";

definePageMeta({
  layout: "clean",
});

const route = useRoute();
const routeQuery = computed(() => route.query);

const tracks = [
  {
    id: 1,
    audio: "/audio/edm/all-world-music/dreamy-slow.mp3",
    title: "Dreamy Slow",
    artist: "Anoushka Rahman",
    artwork: "/images/edm.jpg",
    album: "All World Music",
    original: {
      genre: "Dreamy, Slow, EDM",
      plays: Math.floor(Math.random() * 999) + 1,
      duration: "04:00",
      isFavorite: Math.random() < 0.5,
    },
  },
  {
    id: 2,
    audio: "/audio/edm/all-world-music/electronic-mysterious-ambient-abyss.mp3",
    title: "Electronic Mysterious Ambient Abyss",
    artist: "Carlos Mendes",
    artwork: "/images/edm.jpg",
    album: "All World Music",
    original: {
      genre: "EDM, Electronic",
      plays: Math.floor(Math.random() * 999) + 1,
      duration: "02:09",
      isFavorite: Math.random() < 0.5,
    },
  },
  {
    id: 3,
    audio: "/audio/edm/all-world-music/epic-fast-bitwise.mp3",
    title: "Epic Fast Bitwise",
    artist: "Ayaka Saito",
    artwork: "/images/edm.jpg",
    album: "All World Music",
    original: {
      genre: "Epic, Fast, Bitwise, EDM",
      plays: Math.floor(Math.random() * 999) + 1,
      duration: "03:25",
      isFavorite: Math.random() < 0.5,
    },
  },
  {
    id: 4,
    audio: "/audio/edm/all-world-music/fast-glitchy.mp3",
    title: "Fast Glitchy",
    artist: "Kwame Biko",
    artwork: "/images/edm.jpg",
    album: "All World Music",
    original: {
      genre: "Fast, EDM, Glitchy, Music",
      plays: Math.floor(Math.random() * 999) + 1,
      duration: "01:20",
      isFavorite: Math.random() < 0.5,
    },
  },
  {
    id: 5,
    audio: "/audio/edm/all-world-music/high-energy.mp3",
    title: "High Energy",
    artist: "Elena Petrova",
    artwork: "/images/edm.jpg",
    album: "All World Music",
    original: {
      genre: "High-energy, EDM",
      plays: Math.floor(Math.random() * 999) + 1,
      duration: "03:24",
      isFavorite: Math.random() < 0.5,
    },
  },
  {
    id: 6,
    audio: "/audio/edm/all-world-music/lightning-pulse.mp3",
    title: "Lightning Pulse",
    artist: "Amara Mbaye",
    artwork: "/images/edm.jpg",
    album: "All World Music",
    original: {
      genre: "Music, Melody, EDM, Fast",
      plays: Math.floor(Math.random() * 999) + 1,
      duration: "01:44",
      isFavorite: Math.random() < 0.5,
    },
  },
];
const { onPlayAsPlaylist } = useMusicFlow();

onMounted(async () => {
  await nextTick();
  onPlayAsPlaylist(tracks, tracks[0]);
});
</script>
