import { ChangeEvent, useState } from "react";
import { IMovie } from "../models/IMovie";
import MovieService from "../services/MovieService";

interface ISearchMovieProps {
  showMovies(movies: IMovie[]): void;
}

export const UserSearch = (props: ISearchMovieProps) => {
  const [userInput, setUserInput] = useState("");

  const handleUserSearch = () => {
    if (userInput.length >= 1) {
      let service = new MovieService();
      service.getMoviesBySearch(userInput).then((movies) => {
        if (movies !== undefined) {
          props.showMovies(movies);
          setUserInput("");
        }
      });
    }
  };
  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={userInput}
        placeholder="Search"
        onChange={handleUserInput}
      ></input>
      <button onClick={handleUserSearch}>Search</button>
    </>
  );
};
