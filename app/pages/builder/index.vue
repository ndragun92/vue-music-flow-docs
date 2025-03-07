<template>
  <div class="space-y-4 pb-16">
    <h2 class="text-4xl font-semibold">Live Builder</h2>
    <p class="text-lg text-zinc-300">
      Customize waveform options and player styles effortlessly using the
      interactive UI.
    </p>
    <h3 class="text-lg font-medium">Waveform Options</h3>
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

        <div class="mt-4">
          <button
            class="flex text-base items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-emerald-500"
            type="button"
            @click="onExportWaveformOptions"
          >
            Export Waveform Options
          </button>
        </div>
      </div>
    </div>
    <h3 class="text-lg font-medium">Player CSS (Styles)</h3>
    <div class="grid grid-cols-3 gap-8 text-xs">
      <div class="space-y-2">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="colorPrimaryDark"
              >Primary color dark</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="css.colorPrimaryDark = cssDefault.colorPrimaryDark"
            >
              Reset
            </button>
          </div>
          <input
            id="colorPrimaryDark"
            class="w-full"
            type="color"
            v-model="css.colorPrimaryDark"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="colorPrimary"
              >Primary color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="css.colorPrimary = cssDefault.colorPrimary"
            >
              Reset
            </button>
          </div>
          <input
            id="colorPrimary"
            class="w-full"
            type="color"
            v-model="css.colorPrimary"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="colorSecondary"
              >Secondary color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="css.colorSecondary = cssDefault.colorSecondary"
            >
              Reset
            </button>
          </div>
          <input
            id="colorSecondary"
            class="w-full"
            type="color"
            v-model="css.colorSecondary"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="colorPrimaryBorder"
              >Primary border color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="css.colorPrimaryBorder = cssDefault.colorPrimaryBorder"
            >
              Reset
            </button>
          </div>
          <input
            id="colorPrimaryBorder"
            class="w-full"
            type="color"
            v-model="css.colorPrimaryBorder"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="colorPrimaryHover"
              >Primary hover color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="css.colorPrimaryHover = cssDefault.colorPrimaryHover"
            >
              Reset
            </button>
          </div>
          <input
            id="colorPrimaryHover"
            class="w-full"
            type="color"
            v-model="css.colorPrimaryHover"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="colorPrimaryActive"
              >Primary active color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="css.colorPrimaryActive = cssDefault.colorPrimaryActive"
            >
              Reset
            </button>
          </div>
          <input
            id="colorPrimaryActive"
            class="w-full"
            type="color"
            v-model="css.colorPrimaryActive"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="colorPrimaryTypography"
              >Primary typography color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="
                css.colorPrimaryTypography = cssDefault.colorPrimaryTypography
              "
            >
              Reset
            </button>
          </div>
          <input
            id="colorPrimaryTypography"
            class="w-full"
            type="color"
            v-model="css.colorPrimaryTypography"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="colorSecondaryTypography"
              >Secondary typography color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="
                css.colorSecondaryTypography =
                  cssDefault.colorSecondaryTypography
              "
            >
              Reset
            </button>
          </div>
          <input
            id="colorSecondaryTypography"
            class="w-full"
            type="color"
            v-model="css.colorSecondaryTypography"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="scrollBarBackgroundLight"
              >Scroll bar light background color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="
                css.scrollBarBackgroundLight =
                  cssDefault.scrollBarBackgroundLight
              "
            >
              Reset
            </button>
          </div>
          <input
            id="scrollBarBackgroundLight"
            class="w-full"
            type="color"
            v-model="css.scrollBarBackgroundLight"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="scrollBarBackground"
              >Scroll bar background color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="css.scrollBarBackground = cssDefault.scrollBarBackground"
            >
              Reset
            </button>
          </div>
          <input
            id="scrollBarBackground"
            class="w-full"
            type="color"
            v-model="css.scrollBarBackground"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="scrollBarSlider"
              >Scroll bar slider color</label
            >
            <button
              type="button"
              class="flex items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-red-500"
              @click="css.scrollBarSlider = cssDefault.scrollBarSlider"
            >
              Reset
            </button>
          </div>
          <input
            id="scrollBarSlider"
            class="w-full"
            type="color"
            v-model="css.scrollBarSlider"
          />
        </div>
      </div>
      <div class="space-y-4">
        <button
          class="flex text-base items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-emerald-500"
          type="button"
          :disabled="reRender"
          @click="onResetToDefault"
        >
          Reset CSS
        </button>
        <button
          class="flex text-base items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-emerald-500"
          type="button"
          :disabled="reRender"
          @click="onRefreshPlayer"
        >
          {{ reRender ? "Refresing" : "Refresh" }} player
        </button>
        <button
          class="flex text-base items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-emerald-500"
          type="button"
          @click="onExportCSSConfig"
        >
          Export Player CSS Configuration
        </button>
      </div>
      <div />
    </div>
  </div>
  <client-only>
    <MusicFlow :style="returnCSS" v-if="!reRender" :options="playerOptions" />
  </client-only>
</template>

<script lang="ts" setup>
import { MusicFlow, useMusicFlow } from "vue-music-flow";
import { promiseTimeout } from "@vueuse/core";

const stateDefault = {
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
};

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
}>(JSON.parse(JSON.stringify(stateDefault)));

const cssDefault = {
  colorPrimaryDark: "#030712",
  colorPrimary: "#101828",
  colorSecondary: "#1e2939",
  colorPrimaryBorder: "#1e2939",
  colorPrimaryHover: "#8e51ff",
  colorPrimaryActive: "#a684ff",
  colorPrimaryTypography: "#fafafa",
  colorSecondaryTypography: "#a1a1a1",
  scrollBarBackgroundLight: "#f8fafc",
  scrollBarBackground: "#1d293d",
  scrollBarSlider: "#8e51ff",
};

const css = ref(JSON.parse(JSON.stringify(cssDefault)));

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
  async () => {
    await onRefreshPlayer();
  },
  {
    debounce: 1000,
    deep: true,
    immediate: true,
  },
);

const returnCSS = computed(() => {
  return {
    "--color-primary-dark": css.value.colorPrimaryDark,
    "--color-primary": css.value.colorPrimary,
    "--color-secondary": css.value.colorSecondary,
    "--color-primary-border": css.value.colorPrimaryBorder,
    "--color-primary-hover": css.value.colorPrimaryHover,
    "--color-primary-active": css.value.colorPrimaryActive,
    "--color-primary-typography": css.value.colorPrimaryTypography,
    "--color-secondary-typography": css.value.colorSecondaryTypography,
    "--scroll-bar-background-light": css.value.scrollBarBackgroundLight,
    "--scroll-bar-background": css.value.scrollBarBackground,
    "--scroll-bar-slider": css.value.scrollBarSlider,
  };
});

const onResetToDefault = async () => {
  css.value = JSON.parse(JSON.stringify(cssDefault));
};

const onRefreshPlayer = async () => {
  onClose();
  reRender.value = true;
  await promiseTimeout(1000);
  reRender.value = false;
  await nextTick();
  onPlayAsPlaylist(tracks, tracks[0]);
};

const onExportWaveformOptions = () => {
  exportAsJsonFile(
    JSON.parse(JSON.stringify(playerOptions.value)),
    "vue-music-flow_waveform-options",
  );
};

const onExportCSSConfig = () => {
  exportAsJsonFile(
    JSON.parse(JSON.stringify(returnCSS.value)),
    "vue-music-flow_player-css",
  );
};

const exportAsJsonFile = (data: object, fileName: string) => {
  const jsonData = JSON.stringify(data, null, 2); // Convert the object to a formatted JSON string
  const blob = new Blob([jsonData], { type: "application/json" }); // Create a Blob from the JSON string
  const url = URL.createObjectURL(blob); // Create a URL for the Blob

  const link = document.createElement("a"); // Create a temporary link element
  link.href = url;
  link.download = `${fileName}.json`; // Set the file name

  document.body.appendChild(link); // Append the link to the document
  link.click(); // Simulate a click to download the file
  document.body.removeChild(link); // Remove the link after download

  URL.revokeObjectURL(url); // Clean up the object URL
};
</script>
