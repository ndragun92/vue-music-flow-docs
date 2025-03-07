<template>
  <div>
    <div class="grid grid-cols-3 gap-8 text-xs">
      <div class="space-y-2">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="height"
              >The height of the waveform ({{ state.height }}px)</label
            >
            <div class="flex items-center gap-2">
              <label for="heightDefault">Default</label>
              <input
                id="heightDefault"
                type="checkbox"
                v-model="state.heightDefault"
              />
            </div>
          </div>
          <input
            id="height"
            class="w-full"
            type="range"
            v-model.number="state.height"
            :disabled="state.heightDefault"
            min="5"
            max="75"
          />
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="cursorWidth"
              >The cursor width ({{ state.cursorWidth }}px)</label
            >
            <div class="flex items-center gap-2">
              <label for="cursorWidthDefault">Default</label>
              <input
                id="cursorWidthDefault"
                type="checkbox"
                v-model="state.cursorWidthDefault"
              />
            </div>
          </div>
          <input
            id="cursorWidth"
            class="w-full"
            type="range"
            v-model.number="state.cursorWidth"
            :disabled="state.cursorWidthDefault"
            min="0"
            max="10"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="barWidth"
              >The bar width ({{ state.barWidth }}px)</label
            >
            <div class="flex items-center gap-2">
              <label for="barWidthDefault">Default</label>
              <input
                id="barWidthDefault"
                type="checkbox"
                v-model="state.barWidthDefault"
              />
            </div>
          </div>
          <input
            id="barWidth"
            class="w-full"
            type="range"
            v-model.number="state.barWidth"
            :disabled="state.barWidthDefault"
            min="0"
            max="10"
            step="0.1"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="barGap"
              >Spacing between bars ({{ state.barGap }}px)</label
            >
            <div class="flex items-center gap-2">
              <label for="barGapDefault">Default</label>
              <input
                id="barGapDefault"
                type="checkbox"
                v-model="state.barGapDefault"
              />
            </div>
          </div>
          <input
            id="barGap"
            class="w-full"
            type="range"
            v-model.number="state.barGap"
            :disabled="state.barGapDefault"
            min="0"
            max="10"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="barRadius"
              >Rounded borders for bars ({{ state.barRadius }}px)</label
            >
            <div class="flex items-center gap-2">
              <label for="barRadiusDefault">Default</label>
              <input
                id="barRadiusDefault"
                type="checkbox"
                v-model="state.barRadiusDefault"
              />
            </div>
          </div>
          <input
            id="barRadius"
            class="w-full"
            type="range"
            v-model.number="state.barRadius"
            :disabled="state.barRadiusDefault"
            min="0"
            max="10"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="barHeight"
              >A vertical scaling factor for the waveform ({{
                state.barHeight
              }}x)</label
            >
            <div class="flex items-center gap-2">
              <label for="barHeightDefault">Default</label>
              <input
                id="barHeightDefault"
                type="checkbox"
                v-model="state.barHeightDefault"
              />
            </div>
          </div>
          <input
            id="barHeight"
            class="w-full"
            type="range"
            v-model.number="state.barHeight"
            :disabled="state.barHeightDefault"
            min="0"
            max="1"
            step="0.05"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="minPxPerSec"
              >Minimum pixels per second of audio (i.e. the zoom level) ({{
                state.minPxPerSec
              }}x)</label
            >
            <div class="flex items-center gap-2">
              <label for="minPxPerSecDefault">Default</label>
              <input
                id="minPxPerSecDefault"
                type="checkbox"
                v-model="state.minPxPerSecDefault"
              />
            </div>
          </div>
          <input
            id="minPxPerSec"
            class="w-full"
            type="range"
            v-model.number="state.minPxPerSec"
            :disabled="state.minPxPerSecDefault"
            min="0"
            max="100"
          />
        </div>
      </div>
      <div class="space-y-2">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="waveColor"
              >The color of the waveform</label
            >
            <div class="flex items-center gap-2">
              <label for="waveColorDefault">Default</label>
              <input
                id="waveColorDefault"
                type="checkbox"
                v-model="state.waveColorDefault"
              />
            </div>
          </div>
          <input
            id="waveColor"
            class="w-full"
            type="color"
            :disabled="state.waveColorDefault"
            v-model="state.waveColor"
          />
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="progressColor"
              >The color of the progress mask</label
            >
            <div class="flex items-center gap-2">
              <label for="progressColorDefault">Default</label>
              <input
                id="progressColorDefault"
                type="checkbox"
                v-model="state.progressColorDefault"
              />
            </div>
          </div>
          <input
            id="progressColor"
            class="w-full"
            type="color"
            :disabled="state.progressColorDefault"
            v-model="state.progressColor"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="cursorColor"
              >The color of the playpack cursor</label
            >
            <div class="flex items-center gap-2">
              <label for="cursorColorDefault">Default</label>
              <input
                id="cursorColorDefault"
                type="checkbox"
                v-model="state.cursorColorDefault"
              />
            </div>
          </div>
          <input
            id="cursorColor"
            class="w-full"
            type="color"
            :disabled="state.cursorColorDefault"
            v-model="state.cursorColor"
          />
        </div>
      </div>
      <div class="space-y-2">
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-4">
            <label class="block font-medium" for="autoScroll"
              >autoScroll - Automatically scroll the container to keep the
              current position in viewport</label
            >
            <div class="flex items-center">
              <input
                id="autoScroll"
                type="checkbox"
                v-model="state.autoScroll"
              />
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between gap-4">
            <label class="block font-medium" for="autoCenter"
              >If autoScroll is enabled, keep the cursor in the center of the
              waveform during playback</label
            >
            <div class="flex items-center">
              <input
                id="autoCenter"
                type="checkbox"
                v-model="state.autoCenter"
              />
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between gap-4">
            <label class="block font-medium" for="hideScrollbar"
              >Hide the scrollbar</label
            >
            <div class="flex items-center">
              <input
                id="hideScrollbar"
                type="checkbox"
                v-model="state.hideScrollbar"
              />
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between gap-4">
            <label class="block font-medium" for="interact"
              >Pass false to disable clicks on the waveform</label
            >
            <div class="flex items-center">
              <input id="interact" type="checkbox" v-model="state.interact" />
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between gap-4">
            <label class="block font-medium" for="autoplay"
              >Play the audio on load</label
            >
            <div class="flex items-center">
              <input id="autoplay" type="checkbox" v-model="state.autoplay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <client-only>
    <MusicFlow v-if="!reRender" :options="playerOptions" />
  </client-only>
</template>

<script lang="ts" setup>
import { MusicFlow, useMusicFlow } from "vue-music-flow";
import { promiseTimeout } from "@vueuse/core";

const state = ref<{
  height?: number;
  heightDefault?: boolean;
  waveColor?: string;
  waveColorDefault?: boolean;
  progressColor?: string;
  progressColorDefault?: boolean;
  cursorColor?: string;
  cursorColorDefault?: boolean;
  cursorWidth?: number;
  cursorWidthDefault?: boolean;
  barWidth?: number;
  barWidthDefault?: boolean;
  barGap?: number;
  barGapDefault?: boolean;
  barRadius?: number;
  barRadiusDefault?: boolean;
  barHeight?: number;
  barHeightDefault?: boolean;
  minPxPerSec?: number;
  minPxPerSecDefault?: boolean;
  autoScroll?: boolean;
  autoCenter?: boolean;
  hideScrollbar?: boolean;
  interact?: boolean;
  autoplay?: boolean;
}>({
  height: 50,
  heightDefault: false,
  waveColor: "#ffffff",
  waveColorDefault: false,
  progressColor: "#55da36",
  progressColorDefault: false,
  cursorColor: "#55da36",
  cursorColorDefault: false,
  cursorWidth: 1,
  cursorWidthDefault: false,
  barWidth: 4,
  barWidthDefault: false,
  barGap: 4,
  barGapDefault: false,
  barRadius: 4,
  barRadiusDefault: false,
  barHeight: 0.8,
  barHeightDefault: false,
  minPxPerSec: 10,
  minPxPerSecDefault: true,
  autoScroll: false,
  autoCenter: false,
  hideScrollbar: false,
  interact: true,
  autoplay: false,
});

const playerOptions = computed(() => {
  const data = JSON.parse(JSON.stringify(state.value));
  // height
  if (data.heightDefault) {
    data.height = undefined;
  } else if ((data.height ?? 0) > 75) {
    data.height = 75;
  } else if ((data.height ?? 0) < 5) {
    data.height = 5;
  }
  data.heightDefault = undefined;

  // waveColor
  if (data.waveColorDefault) {
    data.waveColor = undefined;
  }
  data.waveColorDefault = undefined;

  // progressColor
  if (data.progressColorDefault) {
    data.progressColor = undefined;
  }
  data.progressColorDefault = undefined;

  // cursorColor
  if (data.cursorColorDefault) {
    data.cursorColor = undefined;
  }
  data.cursorColorDefault = undefined;

  // cursorWidth
  if (data.cursorWidthDefault) {
    data.cursorWidth = undefined;
  } else if ((data.cursorWidth ?? 0) > 10) {
    data.cursorWidth = 10;
  } else if ((data.height ?? 0) < 0) {
    data.cursorWidth = 0;
  }
  data.cursorWidthDefault = undefined;

  // barWidth
  if (data.barWidthDefault) {
    data.barWidth = undefined;
  } else if ((data.barWidth ?? 0) > 10) {
    data.barWidth = 10;
  } else if ((data.barWidth ?? 0) < 0) {
    data.barWidth = 0;
  }

  data.barWidthDefault = undefined;

  // barGap
  if (data.barGapDefault) {
    data.barGap = undefined;
  } else if ((data.barGap ?? 0) > 10) {
    data.barGap = 10;
  } else if ((data.barGap ?? 0) < 0) {
    data.barGap = 0;
  }
  data.barGapDefault = undefined;

  // barRadius
  if (data.barRadiusDefault) {
    data.barRadius = undefined;
  } else if ((data.barRadius ?? 0) > 10) {
    data.barRadius = 10;
  } else if ((data.barRadius ?? 0) < 0) {
    data.barRadius = 0;
  }
  data.barRadiusDefault = undefined;

  // barHeight
  if (data.barHeightDefault) {
    data.barHeight = undefined;
  } else if ((data.barHeight ?? 0) > 1) {
    data.barHeight = 1;
  } else if ((data.barHeight ?? 0) < 0) {
    data.barHeight = 0;
  }
  data.barHeightDefault = undefined;

  // minPxPerSec
  if (data.minPxPerSecDefault) {
    data.minPxPerSec = undefined;
  } else if ((data.minPxPerSec ?? 0) > 100) {
    data.minPxPerSec = 100;
  } else if ((data.minPxPerSec ?? 0) < 0) {
    data.minPxPerSec = 0;
  }
  data.minPxPerSecDefault = undefined;

  return data;
});

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
const { onPlayAsPlaylist, onClose } = useMusicFlow();

const reRender = ref(false);

watchDebounced(
  playerOptions,
  async (_state) => {
    onClose();
    reRender.value = true;
    await promiseTimeout(1000);
    reRender.value = false;
    await nextTick();
    onPlayAsPlaylist(tracks, tracks[0]);
  },
  {
    debounce: 1000,
    deep: true,
    immediate: true,
  },
);
</script>
