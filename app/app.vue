<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <Html
      lang="en"
      version="8"
      :data-route-path="$route?.path"
      :data-app-origin="nuxtApp?.$app_origin"
    >
      <Head>
        <Title>{{ title }}</Title>
        <Meta name="color-scheme" content="dark" />
        <Meta name="language" content="en" />
        <Meta property="og:title" :content="title" />
        <Meta name="twitter:title" :content="title" />
        <Meta name="description" :content="description" />
        <Meta property="og:description" :content="description" />
        <Meta name="twitter:description" :content="description" />
        <Meta
          property="og:image"
          :content="`https://ik.imagekit.io/ltdassets/public/social.jpg?updatedAt=1741803287465`"
        />
        <Meta
          name="twitter:image"
          :content="`https://ik.imagekit.io/ltdassets/public/twitter.jpg?updatedAt=1741803407933`"
        />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:site" content="@nemanjadragun" />
        <Meta name="twitter:creator" content="@nemanjadragun" />
        <Meta property="og:site_name" content="Vue Music Flow" />
        <Meta name="twitter:site" content="@nemanjadragun" />
        <Meta name="url" :content="`${nuxtApp?.$app_origin}${$route?.path}`" />
        <Meta
          property="og:url"
          :content="`${nuxtApp?.$app_origin}${$route?.path}`"
        />
        <Link
          rel="icon"
          type="image/x-icon"
          href="https://ik.imagekit.io/ltdassets/public/favicon.ico?updatedAt=1741803477620"
        />
        <Link
          rel="apple-touch-icon"
          type="image/png"
          href="https://ik.imagekit.io/ltdassets/public/favicon.png?updatedAt=1741803436602"
        />
        <Link
          rel="apple-touch-startup-image"
          href="https://ik.imagekit.io/ltdassets/public/favicon.ico?updatedAt=1741803477620"
        />
      </Head>
    </Html>
    <NuxtPage />
    <Analytics />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Analytics } from "@vercel/analytics/nuxt";

const nuxtApp = useNuxtApp();

const title = "Vue Music Flow";
const description =
  "Modern Vue 3 / Nuxt 3 audio player component with playlist and waveform visualization";
</script>
