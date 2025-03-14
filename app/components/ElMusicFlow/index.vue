<template>
  <MusicFlow
    :options="{
      progressColor: '#a684ff',
      autoplay: true,
    }"
  >
    <template #actions="{ track }">
      <button
        type="button"
        class="flex size-10 cursor-pointer items-center justify-center rounded p-2 hover:text-red-500"
        aria-label="Mark as favorite"
        @click="
          track?.original
            ? (track.original.isFavorite = !track.original.isFavorite)
            : null
        "
      >
        <Icon
          name="mdi:heart"
          size="20"
          :class="{
            'text-red-500': track?.original?.isFavorite,
          }"
        />
      </button>
    </template>
  </MusicFlow>
</template>
