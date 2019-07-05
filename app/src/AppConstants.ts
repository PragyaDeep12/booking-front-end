import { Movie } from "./Models/Movie.";
import { Play } from "./Models/Play";
import { Seat } from "./Models/Seat";

export const popularCitiesConstant = [
  "chennai",
  "kolkata",
  "hyderabad",
  "bangalore",
  "mumbai",
  "delhi",
  "pune"
];

export const citiesConstant = [
  "AGARTALA",
  "AGRA",
  "AHMEDABAD",
  "AIZWAL",
  "AJMER",
  "ALLAHABAD",
  "ALLEPPEY",
  "ALIBAUG",
  "ALMORA",
  "ALSISAR",
  "ALWAR",
  "AMBALA",
  " AMLA",
  "AMRITSAR",
  "ANAND",
  "ANKLESHWAR",
  "    ASHTAMUDI",
  "AULI",
  "AURANGABAD",
  "BADDI",
  "BADRINATH",
  "	UTTARANCHAL",
  "BALASINOR",
  "BALRAMPUR",
  "BAMBORA",
  "BANDHAVGARH",
  "BANDIPUR",
  "BARBIL",
  "BAREILLY",
  "BEHROR",
  "BELGAUM",
  "BERHAMPUR",
  "BETALGHAT",
  "BHARATPUR",
  "BHANDARDARA",
  "BHARUCH",
  "BHAVANGADH",
  "BHAVNAGAR",
  "BHILAI",
  "BHIMTAL",
  "BHOPAL",
  "BHUBANESHWAR",
  "BHUJ",
  "BIKANER",
  "BINSAR",
  "BODHGAYA",
  "BUNDI"
  // CALICUT	KERALA	SOUTH INDIA
  // CANANNORE	KERALA	SOUTH INDIA
  // CHAIL	HIMACHAL PRADESH	NORTH INDIA
  // CHAMBA	UTTARANCHAL	NORTH INDIA
  // CHANDIGARH	PUNJAB	NORTH INDIA
  // CHENNAI	TAMIL NADU	SOUTH INDIA
  // CHIKMAGALUR	KARNATAKA	SOUTH INDIA
  // CHIPLUN	MAHARASHTRA	WEST INDIA
  // CHITRAKOOT	MADHYA PRADESH	CENTRAL INDIA
  // CHITTORGARH	RAJASTHAN
];
export const movie: Movie[] = [
  {
    id: 1,
    name: "Spider Man: Far From Home",
    image: "spiderman-far-from-home",
    releaseDate: "10/7/2019",
    likes: 114,
    ticketPrice: 100,
    percentage: 98,
    gerne: ["thriller"],
    trailerLink: "https://www.youtube.com/embed/AzKkTC0ZiXs",
    description:
      "In the latest chapter of MCU`s Spider-Man series, our friendly neighborhood superhero decides to join his best friends Ned, MJ and the rest of the gang on a European vacation. However, Peter`s plans to leave heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent!"
  },
  {
    id: 2,
    name: "Star Wars: The Force Awakens",
    image: "the-star-wars",
    releaseDate: "10/7/2018",
    likes: 114,
    description:
      "Star Wars: The Force Awakens is the seventh instalment in the glorious Star Wars saga. Lucasfilm and visionary director J.J. Abrams join forces to take you back again to a galaxy far, far away as Star Wars returns to the big screen with Star Wars: The Force Awakens. Years after the events of Episode VI, the learner is set to become the master, teaching others the ways of the force. But something dark lurks in the near future. Is this the return of the dark side?",
    trailerLink: "https://www.youtube.com/embed/sGbxmsDFVnE",
    ticketPrice: 100,
    percentage: 98,
    gerne: ["sci-fi", "drama"]
  },
  {
    id: 3,
    name: "Thor: The Dark World",
    image: "thor-the-dark-world",
    releaseDate: "10/7/2017",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama", "fiction"],
    description:
      "Thor battles to save all the Nine Realms from a mysterious enemy older than the universe itself. However, a shadowy race led by Malekith who is out for revenge, intends to descend the universe into darkness. Confronted by an enemy that even Odin and Asgard cannot overcome, Thor must reunite with Jane Foster and set out on a dangerous journey that will force him to make the ultimate sacrifice.\nThor battles an ancient race of Dark Elves led by the vengeful Malekith who threatens to plunge the universe back into darkness after the events of The Avengers.",
    trailerLink: "https://www.youtube.com/embed/npvJ9FTgZbM"
  },
  {
    id: 4,
    name: "Thor",
    image: "thor",
    releaseDate: "10/7/2017",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    description:
      "Thor battles to save all the Nine Realms from a mysterious enemy older than the universe itself. However, a shadowy race led by Malekith who is out for revenge, intends to descend the universe into darkness. Confronted by an enemy that even Odin and Asgard cannot overcome, Thor must reunite with Jane Foster and set out on a dangerous journey that will force him to make the ultimate sacrifice.\nThor battles an ancient race of Dark Elves led by the vengeful Malekith who threatens to plunge the universe back into darkness after the events of The Avengers.",
    trailerLink: "https://www.youtube.com/embed/npvJ9FTgZbM",
    gerne: ["drama", "fiction"]
  },
  {
    id: 5,
    name: "Avengers: Infinity Wars",
    image: "infinity-wars",
    releaseDate: "12/4/2019",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["thriller", "drama", "fiction"],
    trailerLink: "https://www.youtube.com/embed/6ZfuNTqbHE8",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
  },
  {
    id: 6,
    name: "Bharat",
    image: "bharat",
    releaseDate: "20/6/2019",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama"],
    description:
      "When he was eight years old, Bharat made a promise to his father: to keep the family together no matter what. It`s a promise he keeps over the next 60 years of his life, despite each decade throwing a new set of challenges at him: some humorous, some thrilling and a few even dangerous!\nThis is the journey of a man and a nation together, beginning at the cusp of India`s birth as an Independent nation. Starring Salman Khan in the title role, Bharat is an endearing film about a man`s sacrifices to fulfill a promise made to his father.",
    trailerLink: "https://www.youtube.com/embed/Ea_GKoe81GY"
  }
];
export const play: Play[] = [
  {
    id: 7,
    name: "Alice In Wonderland",
    image: "alice-in-wonderland",
    releaseDate: "20/6/2019",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama"],
    trailerLink: "https://www.youtube.com/embed/9POCgSRVvf0",
    description:
      "From Walt Disney Pictures and visionary director Tim Burton comes an epic fantasy adventure ALICE IN WONDERLAND, a magical and imaginative twist on some of the most beloved stories of all time. JOHNNY DEPP stars as the Mad Hatter and MIA WASIKOWSKA as 19-year-old Alice, who returns to the whimsical world she first encountered as a young girl, reuniting with her childhood friends: the White Rabbit, Tweedledee and Tweedledum, the Dormouse, the Caterpillar, the Cheshire Cat, and of course, the Mad Hatter. Alice embarks on a fantastical journey to find her true destiny and end the Red Queen’s reign of terror. The all-star cast also includes ANNE HATHAWAY, HELENA BONHAM CARTER and CRISPIN GLOVER."
  },
  {
    id: 8,
    name: "Beauty And The Beast",
    image: "beauty-and-the-beast",
    percentage: 98,
    releaseDate: "20/6/2019",
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama"],
    trailerLink: "https://www.youtube.com/embed/e3Nl_TCQXuw",
    description:
      "Disney’s “Beauty and the Beast” is a live-action re-telling of the studio’s animated classic which refashions the classic characters from the tale as old as time for a contemporary audience, staying true to the original music while updating the score with several new songs. “Beauty and the Beast” is the fantastic journey of Belle, a bright, beautiful and independent young woman who is taken prisoner by a beast in his castle. Despite her fears, she befriends the castle’s enchanted staff and learns to look beyond the Beast’s hideous exterior and realize the kind heart and soul of the true Prince within. The film stars: Emma Watson as Belle; Dan Stevens as the Beast; Luke Evans as Gaston, the handsome, but shallow villager who woos Belle; Oscar® winner Kevin Kline as Maurice, Belle’s eccentric, but lovable father; Josh Gad as Lefou, Gaston’s long-suffering aide-de-camp; Golden Globe® nominee Ewan McGregor as Lumiere, the candelabra; Oscar nominee Stanley Tucci as Maestro Cadenza, the harpsichord; Oscar nominee Ian McKellen as Cogsworth, the mantel clock; and two-time Academy Award® winner Emma Thompson as the teapot, Mrs. Potts."
  },
  {
    id: 9,
    name: "Black Swan",
    image: "black-swan",
    releaseDate: "20/6/2019",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama"],
    trailerLink: "https://www.youtube.com/embed/5jaI1XOB-bs",
    description:
      "A psychological thriller set in the world of New York City ballet, BLACK SWAN stars Natalie Portman as Nina, a featured dancer who finds herself locked in a web of competitive intrigue with a new rival at the company (Mila Kunis).  A Fox Searchlight Pictures release by visionary director Darren Aronofsky (THE WRESTLER), BLACK SWAN takes a thrilling and at times terrifying journey through the psyche of a young ballerina whose starring role as the duplicitous swan queen turns out to be a part for which she becomes frighteningly perfect."
  },
  {
    id: 10,
    name: "The Wizard of OZ",
    image: "the-wizard-of-oz",
    releaseDate: "20/6/2019",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama"],
    trailerLink: "https://www.youtube.com/embed/H_3T4DGw10U",
    description:
      "The Movieclips Trailers channel is your destination for hot new trailers the second they drop. Whether they are blockbusters, indie films, or that new comedy you've been waiting for, the Movieclips Trailers team is there day and night to make sure all the hottest new movie trailers are available whenever you need them, as soon as you can get them. All the summer blockbusters, Man of Steel, Oblivion, Pacific Rim, After Earth, The Lone Ranger, Star Trek Into Darkness and more! They are all available on Movieclips Trailers."
  }
];

export const seats: Seat[] = [
  {
    row: "A",
    columns: [
      { column: 1, booked: false },
      { column: 2, booked: false },
      { column: 3, booked: false },
      { column: 4, booked: false },
      { column: 5, booked: false },
      { column: 6, booked: false },
      { column: 7, booked: false },
      { column: 8, booked: false },
      { column: 9, booked: false },
      { column: 10, booked: false }
    ]
  },
  {
    row: "B",
    columns: [
      { column: 1, booked: false },
      { column: 2, booked: false },
      { column: 3, booked: false },
      { column: 4, booked: false },
      { column: 5, booked: false },
      { column: 6, booked: false },
      { column: 7, booked: false },
      { column: 8, booked: false },
      { column: 9, booked: false },
      { column: 10, booked: false }
    ]
  },
  {
    row: "C",
    columns: [
      { column: 1, booked: false },
      { column: 2, booked: false },
      { column: 3, booked: false },
      { column: 4, booked: false },
      { column: 5, booked: false },
      { column: 6, booked: false },
      { column: 7, booked: false },
      { column: 8, booked: false },
      { column: 9, booked: false },
      { column: 10, booked: false }
    ]
  },
  {
    row: "D",
    columns: [
      { column: 1, booked: false },
      { column: 2, booked: false },
      { column: 3, booked: false },
      { column: 4, booked: false },
      { column: 5, booked: false },
      { column: 6, booked: false },
      { column: 7, booked: false },
      { column: 8, booked: false },
      { column: 9, booked: false },
      { column: 10, booked: false }
    ]
  }
];
