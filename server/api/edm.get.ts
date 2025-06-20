export default defineEventHandler(() => {
  return [
    {
      id: 1,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/dreamy-slow.mp3",
      title: "Dreamy Slow",
      artist: "Anoushka Rahman",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
      album: "All World Music",
      original: {
        genre: "Dreamy, Slow, EDM",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "04:00",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 2,
      audio:
        "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/electronic-mysterious-ambient-abyss.mp3",
      title: "Electronic Mysterious Ambient Abyss",
      artist: "Carlos Mendes",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
      album: "All World Music",
      original: {
        genre: "EDM, Electronic",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "02:09",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 3,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/epic-fast-bitwise.mp3",
      title: "Epic Fast Bitwise",
      artist: "Ayaka Saito",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
      album: "All World Music",
      original: {
        genre: "Epic, Fast, Bitwise, EDM",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "03:25",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 4,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/fast-glitchy.mp3",
      title: "Fast Glitchy",
      artist: "Kwame Biko",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
      album: "All World Music",
      original: {
        genre: "Fast, EDM, Glitchy, Music",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "01:20",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 5,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/high-energy.mp3",
      title: "High Energy",
      artist: "Elena Petrova",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
      album: "All World Music",
      original: {
        genre: "High-energy, EDM",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "03:24",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 6,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/lightning-pulse.mp3",
      title: "Lightning Pulse",
      artist: "Amara Mbaye",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/edm.jpg",
      album: "All World Music",
      original: {
        genre: "Music, Melody, EDM, Fast",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "01:44",
        isFavorite: Math.random() < 0.5,
      },
    },
  ];
});
