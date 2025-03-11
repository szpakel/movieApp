import { StyledLabel } from "./SearchBar.styles";
import { useState } from "react";
import { searchForMovies } from "../../../services/api";
import { Search } from "../../../types/SearchTypes";

function SearchBar({ setMovies, setLoadingState }: Search) {
  const [query, setQuery] = useState('');

  const handleSearchMovies = async (queryValue: string) => {
    if (query) {
      setLoadingState(true);
      try {
        const searchedMovies = await searchForMovies(queryValue);
        setMovies(searchedMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingState(false)
        setQuery('');
      }
    }
  }

  const handleQueryValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <StyledLabel>
      <input value={query} onChange={handleQueryValue} type="text" placeholder="Search for movies..." />
      <button onClick={() => handleSearchMovies(query)}>Search</button>
    </StyledLabel>
  );
}

export default SearchBar;
