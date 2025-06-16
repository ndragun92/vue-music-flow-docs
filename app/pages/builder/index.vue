<template>
  <div class="space-y-4 pb-16">
    <h2 class="text-4xl font-semibold">Live Builder</h2>
    <p class="text-lg text-zinc-300">
      Customize waveform options and player styles effortlessly using the
      interactive UI.
    </p>
    <h3 class="text-lg font-medium">Waveform Options</h3>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 text-xs">
      <div class="space-y-2">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="height"
              >The height of the waveform ({{ state.height }}px)</label
            >
          </div>
          <input
            id="height"
            v-model.number="state.height"
            class="w-full"
            type="range"
            min="5"
            max="75"
          />
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="cursorWidth"
              >The cursor width ({{ state.cursorWidth }}px)</label
            >
          </div>
          <input
            id="cursorWidth"
            v-model.number="state.cursorWidth"
            class="w-full"
            type="range"
            min="0"
            max="10"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="barWidth"
              >The bar width ({{ state.barWidth }}px)</label
            >
          </div>
          <input
            id="barWidth"
            v-model.number="state.barWidth"
            class="w-full"
            type="range"
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
          </div>
          <input
            id="barGap"
            v-model.number="state.barGap"
            class="w-full"
            type="range"
            min="0"
            max="10"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="barRadius"
              >Rounded borders for bars ({{ state.barRadius }}px)</label
            >
          </div>
          <input
            id="barRadius"
            v-model.number="state.barRadius"
            class="w-full"
            type="range"
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
          </div>
          <input
            id="barHeight"
            v-model.number="state.barHeight"
            class="w-full"
            type="range"
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
          </div>
          <input
            id="minPxPerSec"
            v-model.number="state.minPxPerSec"
            class="w-full"
            type="range"
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
          </div>
          <input
            id="waveColor"
            v-model="state.waveColor"
            class="w-full"
            type="color"
          />
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="progressColor"
              >The color of the progress mask</label
            >
          </div>
          <input
            id="progressColor"
            v-model="state.progressColor"
            class="w-full"
            type="color"
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block font-medium" for="cursorColor"
              >The color of the playpack cursor</label
            >
          </div>
          <input
            id="cursorColor"
            v-model="state.cursorColor"
            class="w-full"
            type="color"
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
                v-model="state.autoScroll"
                type="checkbox"
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
                v-model="state.autoCenter"
                type="checkbox"
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
                v-model="state.hideScrollbar"
                type="checkbox"
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
              <input id="interact" v-model="state.interact" type="checkbox" />
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between gap-4">
            <label class="block font-medium" for="autoplay"
              >Play the audio on load</label
            >
            <div class="flex items-center">
              <input id="autoplay" v-model="state.autoplay" type="checkbox" />
            </div>
          </div>
        </div>

        <div class="mt-4 space-y-4">
          <button
            class="flex text-base items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-emerald-500"
            type="button"
            :disabled="reRender"
            @click="onResetToWaveformOptions"
          >
            Reset Waveform Options
          </button>
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
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 text-xs">
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
            v-model="css.colorPrimaryDark"
            class="w-full"
            type="color"
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
            v-model="css.colorPrimary"
            class="w-full"
            type="color"
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
            v-model="css.colorSecondary"
            class="w-full"
            type="color"
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
            v-model="css.colorPrimaryBorder"
            class="w-full"
            type="color"
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
            v-model="css.colorPrimaryHover"
            class="w-full"
            type="color"
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
            v-model="css.colorPrimaryActive"
            class="w-full"
            type="color"
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
            v-model="css.colorPrimaryTypography"
            class="w-full"
            type="color"
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
            v-model="css.colorSecondaryTypography"
            class="w-full"
            type="color"
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
            v-model="css.scrollBarBackgroundLight"
            class="w-full"
            type="color"
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
            v-model="css.scrollBarBackground"
            class="w-full"
            type="color"
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
            v-model="css.scrollBarSlider"
            class="w-full"
            type="color"
          />
        </div>
      </div>
      <div class="space-y-4">
        <button
          class="flex text-base items-center justify-center py-1 px-2 bg-zinc-800 rounded cursor-pointer border border-zinc-700 hover:border-emerald-500"
          type="button"
          :disabled="reRender"
          @click="onResetToCSSConfig"
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
    <MusicFlow v-if="!reRender" :style="returnCSS" :options="playerOptions" />
  </client-only>
</template>

<script lang="ts" setup>
import { MusicFlow, useMusicFlow } from "vue-music-flow";
import { promiseTimeout } from "@vueuse/core";

const stateDefault = {
  height: 50,
  waveColor: "#ffffff",
  progressColor: "#55da36",
  cursorColor: "#55da36",
  cursorWidth: 1,
  barWidth: 4,
  barGap: 4,
  barRadius: 4,
  barHeight: 0.8,
  minPxPerSec: 0,
  autoScroll: false,
  autoCenter: false,
  hideScrollbar: false,
  interact: true,
  autoplay: false,
};

const state = ref<{
  height?: number;
  waveColor?: string;
  progressColor?: string;
  cursorColor?: string;
  cursorWidth?: number;
  barWidth?: number;
  barGap?: number;
  barRadius?: number;
  barHeight?: number;
  minPxPerSec?: number;
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
  const data = state.value;
  // height
  if ((data.height ?? 0) > 75) {
    data.height = 75;
  } else if ((data.height ?? 0) < 5) {
    data.height = 5;
  }

  // cursorWidth
  if ((data.cursorWidth ?? 0) > 10) {
    data.cursorWidth = 10;
  } else if ((data.height ?? 0) < 0) {
    data.cursorWidth = 0;
  }

  // barWidth
  if ((data.barWidth ?? 0) > 10) {
    data.barWidth = 10;
  } else if ((data.barWidth ?? 0) < 0) {
    data.barWidth = 0;
  }

  // barGap
  if ((data.barGap ?? 0) > 10) {
    data.barGap = 10;
  } else if ((data.barGap ?? 0) < 0) {
    data.barGap = 0;
  }

  // barRadius
  if ((data.barRadius ?? 0) > 10) {
    data.barRadius = 10;
  } else if ((data.barRadius ?? 0) < 0) {
    data.barRadius = 0;
  }

  // barHeight
  if ((data.barHeight ?? 0) > 1) {
    data.barHeight = 1;
  } else if ((data.barHeight ?? 0) < 0) {
    data.barHeight = 0;
  }

  // minPxPerSec
  if ((data.minPxPerSec ?? 0) > 100) {
    data.minPxPerSec = 100;
  } else if ((data.minPxPerSec ?? 0) < 0) {
    data.minPxPerSec = 0;
  }

  return data;
});

const tracks = [
  {
    id: 1,
    audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/dreamy-slow.mp3",
    title: "Dreamy Slow",
    artist: "Anoushka Rahman",
    artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
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
    audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/electronic-mysterious-ambient-abyss.mp3",
    title: "Electronic Mysterious Ambient Abyss",
    artist: "Carlos Mendes",
    artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
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
    audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/epic-fast-bitwise.mp3",
    title: "Epic Fast Bitwise",
    artist: "Ayaka Saito",
    artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
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
    audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/fast-glitchy.mp3",
    title: "Fast Glitchy",
    artist: "Kwame Biko",
    artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
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
    audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/high-energy.mp3",
    title: "High Energy",
    artist: "Elena Petrova",
    artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
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
    audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/lightning-pulse.mp3",
    title: "Lightning Pulse",
    artist: "Amara Mbaye",
    artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
    album: "All World Music",
    original: {
      genre: "Music, Melody, EDM, Fast",
      plays: Math.floor(Math.random() * 999) + 1,
      duration: "01:44",
      isFavorite: Math.random() < 0.5,
    },
  },
];
const { onPlayAsPlaylist, onClose, wavesurfer } = useMusicFlow();

const reRender = ref(false);

watchDebounced(
  playerOptions,
  (_options) => {
    wavesurfer?.value?.setOptions(JSON.parse(JSON.stringify(_options)));
  },
  {
    debounce: 1000,
    deep: true,
  },
);

onMounted(async () => {
  await onRefreshPlayer();
});

const returnCSS = computed(() => {
  return {
    "--mw-color-mw-primary-dark": css.value.colorPrimaryDark,
    "--mw-color-mw-primary": css.value.colorPrimary,
    "--mw-color-mw-secondary": css.value.colorSecondary,
    "--mw-color-mw-primary-border": css.value.colorPrimaryBorder,
    "--mw-color-mw-primary-hover": css.value.colorPrimaryHover,
    "--mw-color-mw-primary-active": css.value.colorPrimaryActive,
    "--mw-color-mw-primary-typography": css.value.colorPrimaryTypography,
    "--mw-color-mw-secondary-typography": css.value.colorSecondaryTypography,
    "--scroll-bar-background-light": css.value.scrollBarBackgroundLight,
    "--scroll-bar-background": css.value.scrollBarBackground,
    "--scroll-bar-slider": css.value.scrollBarSlider,
  };
});

const onResetToWaveformOptions = async () => {
  for (const key of Object.keys(state.value)) {
    state.value[key] = stateDefault[key];
  }
};

const onResetToCSSConfig = async () => {
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
