export default defineEventHandler(() => {
  return [
    {
      id: 34,
      audio: "/audio/blues/midnight-groans/gritty-kansas.mp3",
      title: "Gritty Kansas",
      artist: "Smokey Rivers",
      artwork: "/images/blues.jpg",
      album: "Midnight Groans",
      original: {
        genre: "Blues, Gritty Blues",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "03:06",
        isFavorite: Math.random() < 0.5,
      },
    },
    {
      id: 35,
      audio: "/audio/blues/midnight-groans/far-away.mp3",
      title: "Far Away",
      artist: "Velvet Mae",
      artwork: "/images/blues.jpg",
      album: "Midnight Groans",
      original: {
        genre: "Blues, Harmonica",
        plays: Math.floor(Math.random() * 999) + 1,
        duration: "02:23",
        isFavorite: Math.random() < 0.5,
      },
    },
  ];
});
