<template>
  <div
    class="absolute pointer-events-none top-0 left-1/2 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]"
  >
    <div
      class="absolute inset-0 bg-linear-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"
    >
      <svg
        aria-hidden="true"
        class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
      >
        <defs>
          <pattern
            id=":S1:"
            width="72"
            height="56"
            patternUnits="userSpaceOnUse"
            x="-12"
            y="4"
          >
            <path d="M.5 56V.5H72" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#:S1:)" />
        <svg x="-12" y="4" class="overflow-visible">
          <rect stroke-width="0" width="73" height="57" x="288" y="168" />
          <rect stroke-width="0" width="73" height="57" x="144" y="56" />
          <rect stroke-width="0" width="73" height="57" x="504" y="168" />
          <rect stroke-width="0" width="73" height="57" x="720" y="336" />
        </svg>
      </svg>
    </div>
    <svg
      viewBox="0 0 1113 440"
      aria-hidden="true"
      class="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
    >
      <path
        d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"
      />
    </svg>
  </div>
  <main
    class="grid h-svh place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-zinc-950 text-white"
  >
    <div class="text-center">
      <p class="text-base font-semibold text-emerald-600">
        {{ props?.error?.statusCode || 404 }}
      </p>
      <h1
        class="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl"
      >
        {{ props?.error?.message || "Page not found" }}
      </h1>
      <p
        class="mt-6 text-pretty text-lg font-medium text-zinc-500 sm:text-xl/8"
      >
        Something went wrong
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <button
          type="button"
          class="rounded-md cursor-pointer bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          @click="handleError"
        >
          Go back home
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
defineOptions({
  name: "ErrorPage",
});

const props = defineProps<{
  error?: {
    statusCode: number;
    message: string;
  };
}>();

const handleError = () => clearError({ redirect: "/" });
</script>
