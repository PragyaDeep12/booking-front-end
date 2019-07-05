export interface Movie {
  id: number;
  name: String;
  image?: String;
  releaseDate?: String;
  likes?: number;
  ticketPrice?: number;
  percentage?: number;

  description?: String;
  trailerLink?: String;
  gerne?: string[];
}
