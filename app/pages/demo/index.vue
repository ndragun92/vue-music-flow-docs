<template>
  <Body class="scrollbar" />
  <main class="min-h-svh bg-primary-dark text-primary-typography">
    <div
      class="relative isolate flex items-center gap-x-6 overflow-hidden bg-primary-dark px-6 py-2.5 sm:before:flex-1 sm:px-3.5"
    >
      <div
        class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style="
            clip-path: polygon(
              74.8% 41.9%,
              97.2% 73.2%,
              100% 34.9%,
              92.5% 0.4%,
              87.5% 0%,
              75% 28.6%,
              58.5% 54.6%,
              50.1% 56.8%,
              46.9% 44%,
              48.3% 17.4%,
              24.7% 53.9%,
              0% 27.9%,
              11.9% 74.2%,
              24.9% 54.1%,
              68.6% 100%,
              74.8% 41.9%
            );
          "
        />
      </div>
      <div
        class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style="
            clip-path: polygon(
              74.8% 41.9%,
              97.2% 73.2%,
              100% 34.9%,
              92.5% 0.4%,
              87.5% 0%,
              75% 28.6%,
              58.5% 54.6%,
              50.1% 56.8%,
              46.9% 44%,
              48.3% 17.4%,
              24.7% 53.9%,
              0% 27.9%,
              11.9% 74.2%,
              24.9% 54.1%,
              68.6% 100%,
              74.8% 41.9%
            );
          "
        />
      </div>
      <p class="text-sm/6 text-primary-typography">
        This is <strong>DEMO</strong> implementation of
        <a
          href="https://www.npmjs.com/package/vue-music-flow"
          target="_blank"
          class="font-semibold hover:underline"
          >vue-music-flow</a
        >
        package
      </p>
      <div class="flex flex-1 justify-end text-sm/6 text-primary-typography">
        <nuxt-link
          :to="{ name: 'docs' }"
          class="whitespace-nowrap font-semibold hover:underline"
          >Click here to visit docs&nbsp;<span aria-hidden="true"
            >&rarr;</span
          ></nuxt-link
        >
      </div>
    </div>
    <section
      class="relative overflow-auto border-b h-[400px] lg:!h-[550px] border-primary-border"
    >
      <NuxtImg
        class="object-cover object-bottom size-full"
        src="/images/cover.jpg"
        alt="Hero Image"
        format="webp"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-primary-dark to-primary-dark/25"
      />
      <div
        class="absolute inset-0 z-10 mx-auto flex w-full items-center p-8 lg:p-12 max-w-[1920px]"
      >
        <div class="space-y-2 lg:space-y-4">
          <h1 class="text-lg lg:text-xl font-semibold">Top Album</h1>
          <p class="text-3xl lg:text-5xl uppercase">
            <strong>EDM Music</strong>
            changes the world <br />
            because it changes <strong>people</strong>
          </p>
          <p class="text-base lg:text-lg">
            We aim to achieve our goals by using creative music processes.
          </p>
          <div class="pt-6">
            <button
              type="button"
              class="cursor-pointer flex items-center gap-2 rounded-full bg-violet-600 px-8 py-3 text-sm lg:!text-xl font-semibold hover:bg-violet-500"
              @click="onPlayAlbum({ slug: 'edm' })"
            >
              {{
                routeQueryGenre === "edm"
                  ? "Playing All World Music Album"
                  : "Play All World Music Album"
              }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto p-6 space-y-6">
      <h2 class="text-lg font-semibold">Best albums of all time</h2>
      <div>
        <div
          class="flex snap-x items-start overflow-x-scroll pb-4 flex-no-wrap scrolling-touch scrollbar"
        >
          <button
            v-for="album in albums"
            :key="album.id"
            class="mr-2 flex-none snap-start space-y-2 rounded p-2 cursor-pointer group focus:ring-0 focus:outline-none"
            :class="{
              'bg-primary': routeQueryGenre === album.slug,
            }"
            type="button"
            @click="onPlayAlbum(album)"
          >
            <span class="block overflow-hidden rounded-lg size-64 relative">
              <NuxtImg
                class="rounded-lg border object-cover object-center size-full p-0.5 bg-primary border-primary-border"
                :src="album.artwork"
                :alt="album.album"
                format="webp"
              />
              <span
                class="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-primary-dark/75 flex items-center justify-center"
              >
                <Icon
                  v-show="isPlaying && routeQueryGenre === album.slug"
                  name="mdi:pause"
                  size="38"
                />
                <Icon
                  v-show="!(isPlaying && routeQueryGenre === album.slug)"
                  name="mdi:play"
                  size="38"
                />
              </span>
            </span>
            <span class="block w-64 text-left">
              <span
                class="block truncate text-lg font-semibold"
                :title="'Heaven or Las Vegas'"
                :aria-label="'Heaven or Las Vegas'"
              >
                {{ album.album }}
              </span>
              <span
                class="block truncate text-secondary-typography"
                :title="'Cocteau Twins Heaven'"
                :aria-label="'Cocteau Twins Heaven'"
              >
                {{ album.genre }}
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
    <section class="container mx-auto p-6 space-y-6">
      <div class="flex justify-between items-center gap-2">
        <h2 class="text-lg font-semibold">
          Album
          <strong class="text-primary-hover">{{ tracks[0]?.album }}</strong>
        </h2>
        <div class="text-secondary-typography">
          {{ tracks.length || 0 }} tracks
        </div>
      </div>
      <div>
        <ul class="space-y-4">
          <li
            v-for="(track, trackIndex) in tracks"
            :key="track.id"
            class="flex flex-col items-center gap-4 border p-4 px-5 border-primary-border bg-primary/50 lg:flex-row lg:gap-8 lg:border-none lg:bg-transparent lg:p-0"
            :class="{
              '!bg-secondary/50 lg:!bg-secondary/25':
                returnTrack?.id === track.id,
            }"
          >
            <div class="lg:w-8">#{{ trackIndex + 1 }}</div>
            <div class="size-16">
              <NuxtImg
                class="rounded-lg border object-cover object-center size-full border-primary-border bg-primary p-0.5"
                :src="track.artwork"
                :alt="track.title"
                format="webp"
              />
            </div>
            <div
              class="flex items-center gap-2 text-secondary-typography lg:w-8"
            >
              <button
                class="cursor-pointer hover:text-primary-hover flex items-center justify-center"
                type="button"
                :aria-label="isTrackPlaying(track.id) ? 'Pause' : 'Play'"
                :aria-pressed="isTrackPlaying(track.id) ? 'true' : 'false'"
                @click="onPlayTrack(tracks, track)"
              >
                <Icon
                  v-if="isTrackPlaying(track.id)"
                  name="mdi:pause"
                  size="24"
                />
                <Icon v-else name="mdi:play" size="24" />
              </button>
            </div>
            <div class="min-w-0 flex-1 text-center lg:!text-left">
              <h3
                class="truncate text-lg font-semibold"
                :title="track.title"
                :aria-label="track.title"
              >
                {{ track.title }}
              </h3>
              <h4
                class="truncate text-secondary-typography"
                :title="track.album"
                :aria-label="track.album"
              >
                {{ track.album }}
              </h4>
            </div>
            <div
              class="flex items-center gap-2 text-secondary-typography lg:w-80 text-sm"
            >
              <Icon name="mdi:user" size="20" />
              <span>{{ track.artist }}</span>
            </div>
            <div
              class="flex items-center gap-2 text-secondary-typography lg:w-40 text-sm"
            >
              <Icon name="mdi:headphones" size="20" />
              <span><ElNumberFlow v-model="track.original.plays" /></span>
            </div>
            <div
              class="flex items-center gap-2 text-secondary-typography lg:w-40 text-sm"
            >
              <Icon name="mdi:folder-music" size="20" />
              <span>{{ track.original.genre || "No genre" }}</span>
            </div>
            <div
              class="flex items-center gap-2 text-secondary-typography lg:w-20 text-sm"
            >
              <Icon name="mdi:clock" size="20" />
              <span>{{ track.original.duration || 0 }}</span>
            </div>
            <div class="flex items-center gap-2 text-secondary-typography">
              <button
                class="cursor-pointer hover:text-primary-hover flex items-center justify-center"
                type="button"
                :aria-label="`${track.original.isFavorite ? 'Add to favorites' : 'Remove from favorites'}`"
                @click="track.original.isFavorite = !track.original.isFavorite"
              >
                <Icon
                  name="mdi:heart"
                  size="20"
                  :class="{
                    'text-red-500': track.original.isFavorite,
                  }"
                />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <footer
      class="mt-48 lg:mt-24 border-t py-4 text-center text-sm bg-primary/25 border-primary-border text-secondary-typography"
    >
      This demo was created by
      <a
        class="text-primary-typography hover:text-primary-hover underline"
        target="_blank"
        href="https://nemanjadragun.com/"
        >Nemanja Dragun</a
      >
      with <Icon class="text-red-500" name="mdi:heart" size="18" />
    </footer>
    <client-only>
      <ElMusicFlow />
    </client-only>
  </main>
</template>

<script setup lang="ts">
import "vue-music-flow/dist/vue-music-flow.css";
import { useMusicFlow, type TMusicFlow } from "vue-music-flow";

type Data = Omit<TMusicFlow, "original"> & {
  original: {
    genre: string;
    plays: number;
    isFavorite: boolean;
    duration: string;
  };
};

type AlbumData = {
  id: number;
  artwork: string;
  genre: string;
  album: string;
  slug: string;
};

const albums: AlbumData[] = [
  {
    id: 1,
    artwork: "/images/edm.jpg",
    genre: "EDM",
    album: "All World Music",
    slug: "edm",
  },
  {
    id: 2,
    artwork: "/images/xmass.jpg",
    genre: "Christmas",
    album: "The Christmas Album",
    slug: "xmass",
  },
  {
    id: 3,
    artwork: "/images/chill.jpg",
    genre: "Chill",
    album: "Moonlit Vibes",
    slug: "chill",
  },
  {
    id: 4,
    artwork: "/images/pop-dance.jpg",
    genre: "Pop Dance",
    album: "Rhythm Radiance",
    slug: "pop-dance",
  },
  {
    id: 5,
    artwork: "/images/metal.jpg",
    genre: "Metal",
    album: "Rage Reforged",
    slug: "metal",
  },
  {
    id: 6,
    artwork: "/images/blues.jpg",
    genre: "Blues",
    album: "Midnight Groans",
    slug: "blues",
  },
];

const route = useRoute();

const routeQueryGenre = computed(() => (route.query.genre as string) || "edm");

const { data: tracks } = await useFetch<Data[]>(
  `/api/${routeQueryGenre.value}`,
  {
    default: () => [],
    deep: true,
  },
);

const { onPlayAsPlaylist, isTrackPlaying, returnTrack, isPlaying } =
  useMusicFlow();

const onPlayTrack = (tracks: Data[], track: Data) => {
  onPlayAsPlaylist(tracks, track);
  if (track.original?.plays) {
    (track.original.plays as number) += 1;
  }
};

const router = useRouter();
const onPlayAlbum = async (album: Pick<AlbumData, "slug">) => {
  tracks.value = await $fetch(`/api/${album.slug}`);
  await router.push({
    name: "demo",
    query: {
      genre: album.slug,
    },
  });
  await nextTick();
  if (tracks.value?.length) {
    onPlayTrack(tracks.value, tracks.value[0]!);
  }
};
</script>
