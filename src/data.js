const data = [
  {
    id: 1,
    title:
      "Lone Wolf and Cub: Sword of Vengeance (Kozure Ôkami: Kowokashi udekashi tsukamatsuru)",
    genre: "Action|Crime",
  },
  { id: 2, title: "Kummelin jackpot", genre: "Comedy" },
  { id: 3, title: "Arizona Raiders", genre: "Western" },
  {
    id: 4,
    title: "Adventures of Kitty O'Day (Kitty O'Day Comes Through)",
    genre: "Comedy|Crime|Mystery|Romance",
  },
  {
    id: 5,
    title: "Lethal Weapon 2",
    genre: "Action|Comedy|Crime|Drama",
  },
  { id: 6, title: "Mobsters", genre: "Crime|Drama" },
  {
    id: 7,
    title: "Border Feud",
    genre: "Action|Comedy|Western",
  },
  { id: 8, title: "American Vagabond", genre: "Documentary" },
  {
    id: 9,
    title: "Jönssonligan på Mallorca",
    genre: "Comedy",
  },
  { id: 10, title: "Friday the 13th", genre: "Horror" },
  {
    id: 11,
    title: "Mulan",
    genre: "Action|Adventure|Drama|Romance",
  },
  {
    id: 12,
    title: "Moebius Redux: A Life in Pictures",
    genre: "Documentary",
  },
  {
    id: 13,
    title: "Interview, The",
    genre: "Crime|Drama|Mystery|Thriller",
  },
  {
    id: 14,
    title: "That's What I Am",
    genre: "Children|Comedy",
  },
  { id: 15, title: "Valentine Road", genre: "Documentary" },
  {
    id: 16,
    title: "Empire of the Wolves (L'empire des loups)",
    genre: "Action|Drama|Thriller",
  },
  {
    id: 17,
    title: "Hava Nagila: The Movie",
    genre: "Comedy|Documentary|Musical",
  },
  {
    id: 18,
    title: "3 Sailors and a Girl (Three Sailors and a Girl)",
    genre: "Comedy|Musical",
  },
  { id: 19, title: "Purple Plain, The", genre: "Drama|War" },
  {
    id: 20,
    title: "Behind the Screen",
    genre: "Comedy|Romance",
  },
  { id: 21, title: "Skinwalkers", genre: "Horror|Thriller" },
  {
    id: 22,
    title: "Body Snatchers",
    genre: "Horror|Sci-Fi|Thriller",
  },
  { id: 23, title: "Little Nikita", genre: "Drama" },
  {
    id: 24,
    title: "Joseph and the Amazing Technicolor Dreamcoat",
    genre: "Musical",
  },
  { id: 25, title: "My Prairie Home", genre: "Documentary" },
  {
    id: 26,
    title:
      "Love and Sex under Nazi Occupation (Amour et sexe sous l'occupation) ",
    genre: "Documentary",
  },
  { id: 27, title: "Northwest", genre: "Action|Crime|Drama" },
  {
    id: 28,
    title: "Four Seasons (Seasons, The) (Vremena goda)",
    genre: "Documentary",
  },
  {
    id: 29,
    title: "Prisoner of the Mountains (Kavkazsky plennik)",
    genre: "War",
  },
  { id: 30, title: "Louis C.K.: Chewed Up", genre: "Comedy" },
  {
    id: 31,
    title: "Azumi 2: Death or Love",
    genre: "Action|Adventure",
  },
  {
    id: 32,
    title: "Born to Fight (Kerd ma lui)",
    genre: "Action|Adventure|Crime|Thriller",
  },
  {
    id: 33,
    title: "3 Sailors and a Girl (Three Sailors and a Girl)",
    genre: "Comedy|Musical",
  },
  { id: 34, title: "Slasher House", genre: "Horror" },
  { id: 35, title: "Stash House", genre: "Thriller" },
  {
    id: 36,
    title: "Dreamscape",
    genre: "Horror|Sci-Fi|Thriller",
  },
  {
    id: 37,
    title: "Antboy",
    genre: "Adventure|Children|Comedy",
  },
  {
    id: 38,
    title: "Room, The",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: 39,
    title: "Me You Them (Eu, Tu, Eles)",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: 40,
    title: "Mad Max",
    genre: "Action|Adventure|Sci-Fi",
  },
  {
    id: 41,
    title: "Stealing Harvard",
    genre: "Comedy|Crime",
  },
  { id: 42, title: "Michael", genre: "Drama" },
  {
    id: 43,
    title: "Final Destination 2",
    genre: "Horror|Thriller",
  },
  { id: 44, title: "Midnight Clear", genre: "Drama" },
  {
    id: 45,
    title: "Let's Not Keep in Touch!",
    genre: "Comedy",
  },
  {
    id: 46,
    title: "Life of Emile Zola, The",
    genre: "Drama",
  },
  {
    id: 47,
    title: "Jönssonligans största kupp",
    genre: "Comedy|Crime",
  },
  {
    id: 48,
    title: "Gold of Rome (L'oro di Roma)",
    genre: "Drama",
  },
  {
    id: 49,
    title: "Cat Soup (Nekojiru-so)",
    genre: "Adventure|Animation|Drama|Horror",
  },
  {
    id: 50,
    title: "Seagull's Laughter, The (Mávahlátur)",
    genre: "Comedy|Drama",
  },
  { id: 51, title: "My Foolish Heart", genre: "Drama" },
  {
    id: 52,
    title: "Terumae romae (Thermae Romae)",
    genre: "Comedy|Sci-Fi",
  },
  {
    id: 53,
    title: "Dr. Jekyll and Mr. Hyde",
    genre: "Drama|Horror|Sci-Fi|Thriller",
  },
  { id: 54, title: "Starlift", genre: "(no genres listed)" },
  {
    id: 55,
    title: "Dance, Girl, Dance",
    genre: "Comedy|Drama",
  },
  {
    id: 56,
    title: "Frightened City, The",
    genre: "Crime|Drama|Film-Noir",
  },
  { id: 57, title: "What's New, Pussycat", genre: "Comedy" },
  {
    id: 58,
    title: "Prom Queen: The Marc Hall Story",
    genre: "Comedy|Drama",
  },
  {
    id: 59,
    title: "Special 26",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: 60,
    title: "J.C. Chávez (a.k.a. Chavez)",
    genre: "Documentary",
  },
  {
    id: 61,
    title: "Chase, The",
    genre: "Action|Adventure|Comedy|Crime|Romance|Thriller",
  },
  {
    id: 62,
    title: "Who's Camus Anyway? (Kamyu nante shiranai)",
    genre: "Drama",
  },
  {
    id: 63,
    title: "God Grew Tired of Us",
    genre: "Documentary|Drama",
  },
  { id: 64, title: "Kanal", genre: "Drama|War" },
  { id: 65, title: "Garage, The", genre: "Comedy" },
  {
    id: 66,
    title: "Secret Glory, The",
    genre: "Documentary",
  },
  {
    id: 67,
    title: "Armwrestler From Solitude, The (Armbryterskan från Ensamheten)",
    genre: "Documentary",
  },
  { id: 68, title: "Primal", genre: "Horror|Thriller" },
  { id: 69, title: "Creepshow 2", genre: "Horror" },
  { id: 70, title: "Last Movie, The", genre: "Drama" },
  { id: 71, title: "Zen", genre: "Drama" },
  {
    id: 72,
    title: "Small Soldiers",
    genre: "Animation|Children|Fantasy|War",
  },
  {
    id: 73,
    title:
      "Monster X Strikes Back: Attack the G8 Summit, The (Girara no gyakushû: Tôya-ko Samitto kikiippatsu)",
    genre: "Comedy|Sci-Fi",
  },
  {
    id: 74,
    title: "Secretary",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: 75,
    title: "Intimate Lighting (Intimni osvetleni)",
    genre: "Comedy|Drama",
  },
  {
    id: 76,
    title: "Dr. Dolittle 3",
    genre: "Children|Comedy|Fantasy",
  },
  { id: 77, title: "Off the Black", genre: "Drama" },
  { id: 78, title: "Mud", genre: "Adventure|Crime|Drama" },
  {
    id: 79,
    title: "Sometimes They Come Back... Again",
    genre: "Horror",
  },
  {
    id: 80,
    title: "BloodRayne: Deliverance (BloodRayne II: Deliverance)",
    genre: "Action|Fantasy|Western",
  },
  { id: 81, title: "Cthulhu", genre: "Drama|Thriller" },
  { id: 82, title: "Air America", genre: "Action|Comedy" },
  { id: 83, title: "Holiday Spin", genre: "Drama|Romance" },
  {
    id: 84,
    title: "I Am Curious (Yellow) (Jag är nyfiken - en film i gult)",
    genre: "Documentary|Drama",
  },
  {
    id: 85,
    title: "Midnight Movie",
    genre: "Horror|Thriller",
  },
  {
    id: 86,
    title: "Adversary, The (L'adversaire)",
    genre: "Crime|Drama|Mystery|Thriller",
  },
  { id: 87, title: "To Rome with Love", genre: "Comedy" },
  {
    id: 88,
    title: "Rob Roy",
    genre: "Action|Drama|Romance|War",
  },
  { id: 89, title: "Fury", genre: "Drama|Film-Noir" },
  {
    id: 90,
    title: "Walking and Talking",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: 91,
    title: "Harvey Girls, The",
    genre: "Comedy|Musical|Western",
  },
  { id: 92, title: "This Is 40", genre: "Drama" },
  { id: 93, title: "Medium Cool", genre: "Drama|Romance" },
  {
    id: 94,
    title: "The Gallant Hours",
    genre: "(no genres listed)",
  },
  {
    id: 95,
    title: "Willow",
    genre: "Action|Adventure|Fantasy",
  },
  { id: 96, title: "White Elephant", genre: "Drama" },
  { id: 97, title: "Dream With the Fishes", genre: "Drama" },
  {
    id: 98,
    title: "Three Worlds (Trois mondes)",
    genre: "Drama",
  },
  {
    id: 99,
    title:
      "Strange Color Of Your Body's Tears, The (L'étrange couleur des larmes de ton corps)",
    genre: "Mystery|Thriller",
  },
  {
    id: 100,
    title: "Little Miss Marker",
    genre: "Comedy|Drama",
  },
];

export default data;
