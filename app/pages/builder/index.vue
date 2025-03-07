<template>
  <div>
    <div class="max-w-md space-y-4">
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
    </div>
    <pre>
      {{ state }}
    </pre>
    <iframe
      :src="returnURL"
      class="w-full h-[400px] border-none"
      frameborder="0"
      allowfullscreen="true"
      aria-label="Builder Preview"
    />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const route = useRoute();

const routeQuery = computed(() => route.query);

const returnQueryString = computed(() =>
  new URLSearchParams(Object(routeQuery.value)).toString(),
);

const returnURL = computed(
  () =>
    `/builder/preview${returnQueryString.value ? `?${returnQueryString.value}` : ""}`,
);

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
});

watchDebounced(
  state,
  async (_state) => {
    const data = JSON.parse(JSON.stringify(_state));
    // height
    if (data.heightDefault) {
      data.height = undefined;
    } else if ((data.height ?? 0) > 75) {
      data.height = 75;
    } else if ((data.height ?? 0) < 5) {
      data.height = 5;
    }

    // waveColor
    if (data.waveColorDefault) {
      data.waveColor = undefined;
    }

    // progressColor
    if (data.progressColorDefault) {
      data.progressColor = undefined;
    }

    // progressColor
    if (data.cursorColorDefault) {
      data.cursorColor = undefined;
    }

    // cursorWidth
    if (data.cursorWidthDefault) {
      data.cursorWidth = undefined;
    } else if ((data.cursorWidth ?? 0) > 10) {
      data.cursorWidth = 10;
    } else if ((data.height ?? 0) < 0) {
      data.cursorWidth = 0;
    }

    // barWidth
    if (data.barWidthDefault) {
      data.barWidth = undefined;
    } else if ((data.barWidth ?? 0) > 10) {
      data.barWidth = 10;
    } else if ((data.barWidth ?? 0) < 0) {
      data.barWidth = 0;
    }

    // barWidth
    if (data.barGapDefault) {
      data.barGap = undefined;
    } else if ((data.barGap ?? 0) > 10) {
      data.barGap = 10;
    } else if ((data.barGap ?? 0) < 0) {
      data.barGap = 0;
    }

    // Reset defaults
    data.heightDefault = undefined;
    data.waveColorDefault = undefined;
    data.progressColorDefault = undefined;
    data.cursorColorDefault = undefined;
    data.cursorWidthDefault = undefined;
    data.barWidthDefault = undefined;
    data.barGapDefault = undefined;
    const query = formatQueryData(data);
    await router.replace({
      query,
    });
  },
  {
    debounce: 1000,
    deep: true,
    immediate: true,
  },
);

const formatQueryData = (obj: Record<string, any>): Record<string, string> => {
  return Object.entries(obj)
    .filter(([_, value]) => value !== undefined) // Remove undefined values
    .reduce(
      (acc, [key, value]) => {
        acc[key] = String(value); // Convert each value to string
        return acc;
      },
      {} as Record<string, string>,
    );
};

// waveColor?: string | string[] | CanvasGradient;
// progressColor?: string | string[] | CanvasGradient;
// cursorColor?: string;
// cursorWidth?: number;
// barWidth?: number;
// barGap?: number;
// barRadius?: number;
// barHeight?: number;
// barAlign?: 'top' | 'bottom';
// minPxPerSec?: number;
// fillParent?: boolean;
// mediaControls?: boolean;
// autoplay?: boolean;
// interact?: boolean;
// dragToSeek?: boolean | {
//   debounceTime: number;
// };
// hideScrollbar?: boolean;
// audioRate?: number;
// autoScroll?: boolean;
// autoCenter?: boolean;
// normalize?: boolean;
// normalize?: boolean;
</script>
