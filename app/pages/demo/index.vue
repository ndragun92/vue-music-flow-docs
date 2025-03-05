<template>
  <Body class="scrollbar" />
  <div class="min-h-svh bg-primary-dark text-primary-typography">
    <section
      class="relative overflow-auto border-b h-[400px] border-primary-border"
    >
      <img
        class="object-cover object-bottom size-full"
        src="/images/cover.jpg"
        alt="Hero Image"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-primary-dark to-primary-dark/25"
      />
      <div
        class="absolute inset-0 z-10 mx-auto flex w-full items-center p-12 max-w-[1920px]"
      >
        <div class="space-y-4">
          <h1 class="text-xl font-semibold">Top Playlist</h1>
          <p class="text-5xl uppercase">
            <strong>NCS Music</strong>
            changes the world <br />
            because it changes <strong>people</strong>
          </p>
          <p class="text-lg">
            We aim to achieve our goals by using creative music processes.
          </p>
          <div class="pt-6">
            <button
              type="button"
              class="cursor-pointer rounded-full bg-violet-600 px-8 py-3 text-xl font-semibold hover:bg-violet-500"
              @click="onPlayAsPlaylist(tracks)"
            >
              Play Now
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
          <div
            v-for="n in 10"
            :key="n"
            class="mr-4 flex-none snap-start space-y-2"
          >
            <div class="overflow-hidden rounded-lg size-64">
              <img
                class="rounded-lg border object-cover object-center size-full p-0.5 bg-primary border-primary-border"
                src="https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/370/325x325/1597166013_j760lO0Sx4_Razihel.png"
                alt="Album"
              />
            </div>
            <div class="w-64">
              <h3 class="truncate text-lg font-semibold">
                Heaven or Las Vegas
              </h3>
              <h4 class="truncate text-secondary-typography">
                Cocteau Twins Heaven
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto p-6 space-y-6">
      <h2 class="text-lg font-semibold">This week's top #20</h2>
      <div>
        <ul class="space-y-4">
          <li
            v-for="(track, trackIndex) in tracks"
            :key="track.id"
            class="flex items-center gap-4 lg:gap-8 px-5 flex-col lg:flex-row border border-primary-border bg-primary/50 lg:bg-transparent lg:border-none p-4 lg:p-0"
            :class="{
              '!bg-secondary/50 lg:!bg-secondary/25':
                returnTrack?.id === track.id,
            }"
          >
            <div class="lg:w-8">#{{ trackIndex + 1 }}</div>
            <div class="size-16">
              <img
                class="rounded-lg border object-cover object-center size-full border-primary-border bg-primary p-0.5"
                :src="track.artwork"
                :alt="track.title"
              />
            </div>
            <div
              class="flex lg:w-8 items-center gap-2 text-secondary-typography"
            >
              <button
                class="cursor-pointer hover:text-primary-hover"
                type="button"
                @click="onPlayAsPlaylist(tracks, track)"
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
              <h3 class="truncate text-lg font-semibold">{{ track.title }}</h3>
              <h4 class="truncate text-secondary-typography">
                {{ track.album }}
              </h4>
            </div>
            <div
              class="flex lg:w-80 items-center gap-2 text-secondary-typography"
            >
              <Icon name="mdi:user" size="20" />
              <span>{{ track.artist }}</span>
            </div>
            <div
              class="flex lg:w-40 items-center gap-2 text-secondary-typography"
            >
              <Icon name="mdi:headphones" size="20" />
              <span>{{ track.original?.plays || 0 }}</span>
            </div>
            <div
              class="flex lg:w-40 items-center gap-2 text-secondary-typography"
            >
              <Icon name="mdi:folder-music" size="20" />
              <span>{{ track.original?.genre || "No genre" }}</span>
            </div>
            <div
              class="flex lg:w-20 items-center gap-2 text-secondary-typography"
            >
              <Icon name="mdi:clock" size="20" />
              <span>03:24</span>
            </div>
            <div class="flex items-center gap-2 text-secondary-typography">
              <button
                class="cursor-pointer hover:text-primary-hover"
                type="button"
                @click="
                  track.original!.isFavorite = !track.original!.isFavorite
                "
              >
                <Icon
                  name="mdi:heart"
                  size="20"
                  :class="{
                    'text-red-500': track.original!.isFavorite,
                  }"
                />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <footer
      class="mt-24 border-t py-4 text-center text-sm bg-primary/25 border-primary-border"
    >
      This demo was created by
      <a
        class="text-primary-active hover:text-primary-hover"
        target="_blank"
        href="https://nemanjadragun.com/"
        >Nemanja Dragun</a
      >
      with <Icon class="text-red-500" name="mdi:heart" size="18" />
    </footer>
    <client-only>
      <ElMusicFlow />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import "vue-music-flow/dist/vue-music-flow.css";
import { useMusicFlow, type TMusicFlow } from "vue-music-flow";

const tracks = ref<TMusicFlow[]>([
  {
    id: 1,
    audio:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/5bbf6dac65e26100130505c2_AM18_01_Tree%20of%20Life_lo.mp3",
    title: "Tree of Life",
    artist: "Kevin Rix",
    artwork:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/am18/5bbf5ddc65e261001304e9fe_awakenings.jpg",
    album: "Awakenings",
    original: {
      genre: "Country",
      plays: 3000,
      isFavorite: false,
    },
  },
  {
    id: 2,
    audio:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/5bbf6dac65e26100130505bc_AM18_03_Breaking Through_lo.mp3",
    title: "Breaking Through",
    artist: "Jeff Marsh",
    artwork:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/am18/5bbf5ddc65e261001304e9fe_awakenings.jpg",
    album: "Awakenings",
    original: {
      genre: "Hip-Hop / Rap",
      plays: 54645645,
      isFavorite: false,
    },
  },
  {
    id: 3,
    audio:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/5bbf6dac65e26100130505c5_AM18_04_The Fire Within_lo.mp3",
    title: "The Fire Within",
    artist: "Kevin Rix",
    artwork:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/am18/5bbf5ddc65e261001304e9fe_awakenings.jpg",
    album: "Awakenings",
    original: {
      genre: "Soundtrack",
      plays: 54645645,
      isFavorite: true,
    },
  },
  {
    id: 4,
    audio:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/am120/66c3c5107907a083490abcf1_AM120_01_Prologue%20The%20Way%20of%20Legends_lo.mp3",
    title: "Prologue: The Way of Legends",
    artist: "Paul Dinletir",
    artwork:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/Even%20Poets%20Go%20to%20War_1724106064076.jpg",
    album: "Even Poets Go to War",
    original: {
      genre: "Heavy Metal",
      plays: 100,
      isFavorite: false,
    },
  },
  {
    id: 5,
    audio:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/no_release_slug/6500dba394d0815e804d2251_AM106_02_Christmas%20Canon_lo.mp3",
    title: "Christmas Canon",
    artist: "Paul Dinletir & Noah Putrich",
    artwork:
      "https://storage.googleapis.com/cadenzabox-prod-bucket/audiomachine/Yuletide800x_1694555118506.jpg",
    album: "Yuletide",
    original: {
      genre: "Hip-Hop / Rap",
      plays: 0,
      isFavorite: false,
    },
  },
]);

const { onPlayAsPlaylist, isTrackPlaying, returnTrack } = useMusicFlow();
</script>
