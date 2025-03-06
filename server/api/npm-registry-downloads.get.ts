import type { TNpmRegistryDownloads } from "~/types/npm-registry.type";

export default defineCachedEventHandler(
  async () => {
    return await $fetch<TNpmRegistryDownloads>(
      `https://api.npmjs.org/downloads/point/last-week/vue-music-flow`,
    );
  },
  {
    maxAge: 60 * 60 /* 1 hour */,
    name: "npmRegistryDownloads",
  },
);
