export default defineEventHandler(() => {
  return [
    {
      id: 30,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/metal/rage-reforged/psychedelic.mp3",
      title: "Psychedelic",
      artist: "Iron Revenant",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/metal.jpg",
      album: "Rage Reforged",
      original: {
        genre: "Psychedelic, Blues Rock",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "02:12",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 31,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/metal/rage-reforged/intense-thrash-metal.mp3",
      title: "Intense Thrash Metal",
      artist: "Obsidian Wrath",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/metal.jpg",
      album: "Rage Reforged",
      original: {
        genre: "Thrash Metal",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "02:09",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 32,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/metal/rage-reforged/old-school.mp3",
      title: "Old School",
      artist: "Steel Serpent",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/metal.jpg",
      album: "Rage Reforged",
      original: {
        genre: "Thrash Metal, Heavy Metal",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "01:23",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 33,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/metal/rage-reforged/epic.mp3",
      title: "Epic",
      artist: "Crucible Dominion",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/metal.jpg",
      album: "Rage Reforged",
      original: {
        genre: "Thrash Metal",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "02:06",
        isFavorite: Math.random() < 0.5,
      },
    },
  ];
});
