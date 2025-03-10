import { StyledLabel } from "./SearchBar.styles";
import { useEffect, useState } from "react";
import { searchForMovies } from "../../../services/api";
import { Search } from "../../../types/SearchTypes";

function SearchBar({ setMovies, setLoadingState }: Search) {
  const [query, setQuery] = useState('');
  const [clicked, setClickState] = useState(false);
  
  useEffect(() => {
    setLoadingState(true);
    const handleSearchMovies = async (queryValue: string) => {
      try {
        const searchedMovies = await searchForMovies(queryValue);
        setLoadingState(false)
        setMovies(searchedMovies);
      } catch (err) {
        setLoadingState(false)
        console.log(err);
      }
    }
    handleSearchMovies(query);
  }, [clicked])

  return (
    <StyledLabel>
      <input value={query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} type="text" placeholder="Search for movies..." />
      <button onClick={() => setClickState((prev) => !prev)}>Search</button>
    </StyledLabel>
  );
}

export default SearchBar;
