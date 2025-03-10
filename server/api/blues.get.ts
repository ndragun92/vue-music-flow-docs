export default defineEventHandler(() => {
  return [
    {
      id: 34,
      audio: "https://ik.imagekit.io/ltdassets/public/audio/blues/midnight-groans/gritty-kansas.mp3",
      title: "Gritty Kansas",
      artist: "Smokey Rivers",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/blues.jpg",
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
      audio: "https://ik.imagekit.io/ltdassets/public/audio/blues/midnight-groans/far-away.mp3",
      title: "Far Away",
      artist: "Velvet Mae",
      artwork: "https://ik.imagekit.io/ltdassets/public/images/blues.jpg",
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
