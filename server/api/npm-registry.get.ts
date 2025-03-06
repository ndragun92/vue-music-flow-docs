import type { TNpmRegistry } from "~/types/npm-registry.type";

export default defineCachedEventHandler(
  async () => {
    return await $fetch<TNpmRegistry>(
      `https://registry.npmjs.org/vue-music-flow`,
    );
  },
  {
    maxAge: 60 * 60 /* 1 hour */,
    name: "npmRegistry",
  },
);
