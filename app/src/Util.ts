import { movie, play } from "./AppConstants";
import { Movie } from "./Models/Movie.";
import { Play } from "./Models/Play";

export function searchMovie(keyword: String) {
  if (keyword && keyword.length > 0) {
    var tempList: Movie[] = [];
    movie.forEach(movieElem => {
      var movieName: String = movieElem.name;
      if (movieName.toUpperCase().includes(keyword.toUpperCase())) {
        tempList.push(movieElem);
      }
    });
    return tempList;
  } else {
    return movie;
  }
}

export function searchPlay(keyword: String) {
  if (keyword && keyword.length > 0) {
    var tempList: Play[] = [];
    play.forEach(playElem => {
      var playName: String = playElem.name;
      if (playName.toUpperCase().includes(keyword.toUpperCase())) {
        tempList.push(playElem);
      }
    });
    return tempList;
  } else {
    return play;
  }
}
