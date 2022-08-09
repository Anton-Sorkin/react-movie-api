import { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../services/service";

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }),
    [movies];

  const fetchMovies = async () => {
    const movieData = await getMovies();
    console.log(movieData);
    setMovies(movieData);
  };

  return <div className="movies">hej</div>;
};
