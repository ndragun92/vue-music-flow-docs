<template>
  <div class="w-full container mx-auto space-y-4">
    <h2 class="text-3xl font-semibold mb-4">Options</h2>
    <div
      class="bg-zinc-950 p-4 border border-zinc-800 rounded-lg text-zinc-400"
    >
      <strong class="text-white">vue-music-flow</strong> is built with
      <strong class="text-white">Tailwind CSS v4</strong>
    </div>
    <p>
      These are the exposed CSS variables that you can override to customize the
      player and adapt it to your own design needs. By modifying these
      variables, you can seamlessly integrate the player’s appearance to match
      your application's unique style and branding.
    </p>
    <h3 class="text-lg font-semibold mb-4">List of variables</h3>
    <ElPrism :code="code" :css="true">
      <template #file>./assets/css/main.css</template>
    </ElPrism>
    <div class="flex justify-between items-center">
      <nuxt-link
        :to="{
          name: 'customization',
        }"
        class="text-sm flex items-center gap-2 hover:underline"
      >
        <Icon name="mdi:arrow-left" size="20" />
        Navigate to customization
      </nuxt-link>
      <nuxt-link
        :to="{
          name: 'demo',
        }"
        class="text-sm flex items-center gap-2 hover:underline"
      >
        Click DEMO implementation
        <Icon name="mdi:arrow-right" size="20" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const code = `:root, :host {
  --breakpoint-phone: 40rem;
  --breakpoint-tablet: 80rem;

  --color-primary-dark: oklch(0.145 0 0);
  --color-primary: oklch(0.269 0 0);
  --color-primary-border: oklch(0.205 0 0);
  --color-primary-hover: oklch(0.75 0.183 55.934);
  --color-primary-active: oklch(0.837 0.128 66.29);
  --color-primary-typography: oklch(0.985 0 0);

  --color-secondary: oklch(0.371 0 0);
  --color-secondary-typography: oklch(0.708 0 0);

  --scroll-bar-background-light: oklch(0.269 0 0);
  --scroll-bar-background: oklch(0.269 0 0);
  --scroll-bar-slider: oklch(0.145 0 0);
  --scroll-bar-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  --scroll-bar-width: 6px;
}`;
</script>
