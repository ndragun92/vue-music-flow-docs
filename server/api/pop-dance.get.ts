export default defineEventHandler(() => {
  return [
    {
      id: 25,
      audio: "/audio/pop-dance/rhythm-radiance/electric-love.mp3",
      title: "Electric Love",
      artist: "Luna Voltage",
      artwork: "/images/pop-dance.jpg",
      album: "Rhythm Radiance",
      original: {
        genre: "Pop Dance, Upbeat, Pop",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "01:42",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 26,
      audio: "/audio/pop-dance/rhythm-radiance/dancing-hearts.mp3",
      title: "Dancing Hearts",
      artist: "Echo Nova",
      artwork: "/images/pop-dance.jpg",
      album: "Rhythm Radiance",
      original: {
        genre: "Pop Dance, Upbeat, Pop",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "01:56",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 27,
      audio: "/audio/pop-dance/rhythm-radiance/rhythm-of-us.mp3",
      title: "Rhythm of Us",
      artist: "Starlight Pulse",
      artwork: "/images/pop-dance.jpg",
      album: "Rhythm Radiance",
      original: {
        genre: "Pop Dance, Upbeat, Pop",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "01:25",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 28,
      audio: "/audio/pop-dance/rhythm-radiance/rhythm-of-the-night.mp3",
      title: "Rhythm of the Night",
      artist: "Velvet Frequency",
      artwork: "/images/pop-dance.jpg",
      album: "Rhythm Radiance",
      original: {
        genre: "Pop Dance, Upbeat, Pop",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "02:23",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 29,
      audio: "/audio/pop-dance/rhythm-radiance/glow-tonight.mp3",
      title: "Glow Tonight",
      artist: "Neon Reverie",
      artwork: "/images/pop-dance.jpg",
      album: "Rhythm Radiance",
      original: {
        genre: "Pop Dance, Upbeat, Pop",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "01:19",
        isFavorite: Math.random() < 0.5,
      },
    },
  ];
});
