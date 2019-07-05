import { Movie } from "./Models/Movie.";
import { Play } from "./Models/Play";

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
    name: "SpiderMan Far From Home",
    image: "spiderman-far-from-home",
    releaseDate: "10/7/2019",
    likes: 114,
    ticketPrice: 100,
    percentage: 98,
    gerne: ["thriller"]
  },
  {
    id: 2,
    name: "The Star Wars",
    image: "the-star-wars",
    releaseDate: "10/7/2018",
    likes: 114,

    ticketPrice: 100,
    percentage: 98,
    gerne: ["sci-fi", "drama"]
  },
  {
    id: 3,
    name: "Thor The Dark World",
    image: "thor-the-dark-world",
    releaseDate: "10/7/2017",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama", "fiction"]
  },
  {
    id: 4,
    name: "Thor",
    image: "thor",
    releaseDate: "10/7/2017",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama", "fiction"]
  },
  {
    id: 5,
    name: "Infinity Wars",
    image: "infinity-wars",
    releaseDate: "12/4/2019",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["thriller", "drama", "fiction"]
  },
  {
    id: 6,
    name: "Bharat",
    image: "bharat",
    releaseDate: "20/6/2019",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama"]
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
    gerne: ["drama"]
  },
  {
    id: 8,
    name: "Beauty And The Beast",
    image: "beauty-and-the-beast",
    percentage: 98,
    releaseDate: "20/6/2019",
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama"]
  },
  {
    id: 9,
    name: "Black Swan",
    image: "black-swan",
    releaseDate: "20/6/2019",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama"]
  },
  {
    id: 10,
    name: "The Wizard of OZ",
    image: "the-wizard-of-oz",
    releaseDate: "20/6/2019",
    percentage: 98,
    likes: 114,
    ticketPrice: 100,
    gerne: ["drama"]
  }
];
