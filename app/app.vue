<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <Html lang="en" version="2" :data-route-path="$route?.path">
      <Head>
        <Title>{{ title }}</Title>
        <meta name="color-scheme" content="dark" />
        <Meta name="language" content="en" />
        <Meta property="og:title" :content="title" />
        <Meta name="twitter:title" :content="title" />
        <Meta name="description" :content="description" />
        <Meta property="og:description" :content="description" />
        <Meta name="twitter:description" :content="description" />
        <Meta
          property="og:image"
          :content="`${nuxtApp?.$app_origin}/social.jpg`"
        />
        <Meta
          name="twitter:image"
          :content="`${nuxtApp?.$app_origin}/twitter.jpg`"
        />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:site" content="@nemanjadragun" />
        <Meta name="twitter:creator" content="@nemanjadragun" />
        <Meta property="og:site_name" content="/favicon.png" />
        <Meta name="twitter:site" content="/favicon.png" />
        <Meta name="url" :content="`${nuxtApp?.$app_origin}${$route?.path}`" />
        <Meta
          property="og:url"
          :content="`${nuxtApp?.$app_origin}${$route?.path}`"
        />
        <Link
          rel="icon"
          type="image/x-icon"
          :href="`${nuxtApp?.$app_origin}/favicon.ico`"
        />
        <Link
          rel="apple-touch-icon"
          type="image/png"
          :href="`${nuxtApp?.$app_origin}/favicon.png`"
        />
        <Link
          rel="apple-touch-startup-image"
          :href="`${nuxtApp?.$app_origin}/favicon.ico`"
        />
      </Head>
    </Html>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();

const title = "Vue Music Flow";
const description =
  "Modern Vue 3 / Nuxt 3 audio player component with playlist and waveform visualization";
</script>
