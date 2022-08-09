import { useState } from "react";
import { IMovie } from "../models/IMovie";
import { HandleMovies } from "./HandleMovies";
import { UserSearch } from "./UserSearch";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  function showMovies(movies: IMovie[]) {
    setMovies(movies);
  }

  return (
    <>
      <UserSearch showMovies={showMovies}></UserSearch>
      <HandleMovies movies={movies} showMovies={showMovies}></HandleMovies>
    </>
  );
};
