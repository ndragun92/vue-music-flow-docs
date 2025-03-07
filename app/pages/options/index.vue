<template>
  <Html class="scroll-smooth" />
  <div class="container mx-auto w-full space-y-4">
    <h2 class="mb-4 text-3xl font-semibold">Options</h2>
    <div>
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h3 class="mb-4 text-lg font-semibold">Props</h3>
          <p class="mt-2">List of available props</p>
        </div>
      </div>
      <div class="mt-4 flow-root">
        <div
          class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 scrollbar-docs min-w-0"
        >
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <table class="min-w-full divide-y divide-zinc-800">
              <thead class="bg-zinc-950">
                <tr class="divide-x divide-zinc-800">
                  <th
                    scope="col"
                    class="px-4 text-left text-sm font-semibold py-3.5"
                  >
                    Prop
                  </th>
                  <th
                    scope="col"
                    class="px-4 text-sm font-semibold py-3.5 text-center"
                  >
                    Required
                  </th>
                  <th
                    scope="col"
                    class="px-4 text-left text-sm font-semibold py-3.5"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    class="px-4 text-left text-sm font-semibold py-3.5"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-4 text-left text-sm font-semibold py-3.5 min-w-xl"
                  >
                    Default
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-800 bg-zinc-950/25">
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    options
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-center">
                    <Icon class="text-red-500" name="mdi:close" size="20" />
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm">
                    <a href="#interface" class="text-cyan-500 hover:underline"
                      >TOptions</a
                    >
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    WaveForm Options
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    <div
                      class="break-all whitespace-break-spaces text-yellow-400"
                    >
                      {<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;waveColor: '#e7e7e7'<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;progressColor: '#ffb86a'<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;barWidth: 3<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;barRadius: 2<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;barGap: 3<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;barHeight: 0.8<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;height: 50<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;dragToSeek: {
                      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;debounceTime:
                      1000 <br />&nbsp;&nbsp;&nbsp;&nbsp;} <br />}
                    </div>
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    grid
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-center">
                    <Icon class="text-red-500" name="mdi:close" size="20" />
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-red-400">
                    string
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Grid Class uses Tailwind CSS v4
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    <div
                      class="break-all whitespace-break-spaces text-yellow-400"
                    >
                      [grid-template-areas:'image_metadata_metadata_metadata'_'currentDuration_waveform_waveform_endDuration'_'controls_controls_volume_actions']
                      <br />
                      grid-cols-[auto_minmax(0,1fr)_auto_auto]
                      <br />
                      phone:[grid-template-areas:'image_metadata_controls_volume_actions'_'currentDuration_waveform_waveform_waveform_endDuration']
                      <br />
                      phone:grid-cols-[auto_minmax(0,1fr)_auto_auto_auto]
                      <br />
                      tablet:[grid-template-areas:'image_metadata_controls_currentDuration_waveform_endDuration_volume_actions']
                      <br />
                      tablet:grid-cols-[auto_auto_auto_auto_minmax(0,1fr)_auto_auto_auto_auto]
                    </div>
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    hidePlaylistPopup
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-center">
                    <Icon class="text-red-500" name="mdi:close" size="20" />
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-red-400">
                    boolean
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Hides playlist popup
                  </td>
                  <td
                    class="whitespace-nowrap py-4 px-4 text-sm text-yellow-400"
                  >
                    false
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <ElPrism id="interface" :code="waveSurferInterface" :ts="true">
      <template #file>TOptions.ts</template>
    </ElPrism>

    <div>
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h3 class="mb-4 text-lg font-semibold">Slots</h3>
          <p class="mt-2">List of available component slots</p>
        </div>
      </div>
      <div class="mt-4 flow-root">
        <div
          class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 scrollbar-docs"
        >
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <table class="min-w-full divide-y divide-zinc-800">
              <thead class="bg-zinc-950">
                <tr class="divide-x divide-zinc-800">
                  <th
                    scope="col"
                    class="px-4 text-left text-sm font-semibold py-3.5"
                  >
                    Slot name
                  </th>
                  <th
                    scope="col"
                    class="px-4 text-left text-sm font-semibold py-3.5 min-w-xl"
                  >
                    Available data
                  </th>
                  <th
                    scope="col"
                    class="px-4 text-left text-sm font-semibold py-3.5"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-800 bg-zinc-950/25">
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    image
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-left">
                    #image={ track }
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Lets you customize image (artwork)
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    metadata
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-left">
                    #metadata={ track }
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Lets you customize title and artist name
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    controls
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-left">
                    #controls={ togglePlayback, isPlaying, onPlayPreviousTrack,
                    onPlayNextTrack, onToggleRepeat, playlist, playlistOptions }
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Lets you customize player controls
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    currentDuration
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-left">
                    #currentDuration={ currentDuration }
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Lets you customize track current duration
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    waveform
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-left">
                    #waveform={ initializing }
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Lets you customize waveform slot
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    endDuration
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-left">
                    #endDuration={ endDuration }
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Lets you customize track total duration
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    volume
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-left">-</td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Lets you customize volume slot
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    actions
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-left">
                    #actions={ track }
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Ability to add custom actions to player such as "Add to
                    favorite"
                  </td>
                </tr>
                <tr class="divide-x divide-zinc-800">
                  <td class="whitespace-nowrap py-4 px-4 text-sm font-medium">
                    close
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm text-left">
                    #close={ onClosePlayer }
                  </td>
                  <td class="whitespace-nowrap py-4 px-4 text-sm">
                    Lets you customize close button
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <nuxt-link
        :to="{
          name: 'customization',
        }"
        class="flex items-center gap-2 text-sm hover:underline"
      >
        <Icon name="mdi:arrow-left" size="20" />
        Navigate to customization
      </nuxt-link>
      <nuxt-link
        :to="{
          name: 'demo',
        }"
        class="flex items-center gap-2 text-sm hover:underline"
      >
        Click DEMO implementation
        <Icon name="mdi:arrow-right" size="20" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const waveSurferInterface = `type TOptions = {
    /** The height of the waveform in pixels, or "auto" to fill the container height */
    height?: number | 'auto';
    /** The width of the waveform in pixels or any CSS value; defaults to 100% */
    width?: number | string;
    /** The color of the waveform */
    waveColor?: string | string[] | CanvasGradient;
    /** The color of the progress mask */
    progressColor?: string | string[] | CanvasGradient;
    /** The color of the playpack cursor */
    cursorColor?: string;
    /** The cursor width */
    cursorWidth?: number;
    /** If set, the waveform will be rendered with bars like this: ▁ ▂ ▇ ▃ ▅ ▂ */
    barWidth?: number;
    /** Spacing between bars in pixels */
    barGap?: number;
    /** Rounded borders for bars */
    barRadius?: number;
    /** A vertical scaling factor for the waveform */
    barHeight?: number;
    /** Vertical bar alignment */
    barAlign?: 'top' | 'bottom';
    /** Minimum pixels per second of audio (i.e. the zoom level) */
    minPxPerSec?: number;
    /** Stretch the waveform to fill the container, true by default */
    fillParent?: boolean;
    /** Pre-computed audio data, arrays of floats for each channel */
    peaks?: Array<Float32Array | number[]>;
    /** Pre-computed audio duration in seconds */
    duration?: number;
    /** Use an existing media element instead of creating one */
    media?: HTMLMediaElement;
    /** Whether to show default audio element controls */
    mediaControls?: boolean;
    /** Play the audio on load */
    autoplay?: boolean;
    /** Pass false to disable clicks on the waveform */
    interact?: boolean;
    /** Allow to drag the cursor to seek to a new position. If an object with \`debounceTime\` is provided instead
     * then \`dragToSeek\` will also be true. If \`true\` the default is 200ms
     */
    dragToSeek?: boolean | {
        debounceTime: number;
    };
    /** Hide the scrollbar */
    hideScrollbar?: boolean;
    /** Audio rate, i.e. the playback speed */
    audioRate?: number;
    /** Automatically scroll the container to keep the current position in viewport */
    autoScroll?: boolean;
    /** If autoScroll is enabled, keep the cursor in the center of the waveform during playback */
    autoCenter?: boolean;
    /** Decoding sample rate. Doesn't affect the playback. Defaults to 8000 */
    sampleRate?: number;
    /** Render each audio channel as a separate waveform */
    splitChannels?: Array<Partial<WaveSurferOptions> & {
        overlay?: boolean;
    }>;
    /** Stretch the waveform to the full height */
    normalize?: boolean;
    /** The list of plugins to initialize on start */
    plugins?: GenericPlugin[];
    /** Custom render function */
    renderFunction?: (peaks: Array<Float32Array | number[]>, ctx: CanvasRenderingContext2D) => void;
    /** Options to pass to the fetch method */
    fetchParams?: RequestInit;
    /** Playback "backend" to use, defaults to MediaElement */
    backend?: 'WebAudio' | 'MediaElement';
    /** Nonce for CSP if necessary */
    cspNonce?: string;
    /** Override the Blob MIME type */
    blobMimeType?: string;
};`;
</script>
