import { StyledLabel } from "./SearchBar.styles";
import { useMovies } from "../../../context/MovieContext";

function SearchBar() {
  const { handleQueryValue, handleSearchMovies, query } = useMovies()

  return (
    <StyledLabel>
      <input value={query} onChange={handleQueryValue} type="text" placeholder="Search for movies..." />
      <button onClick={() => handleSearchMovies(query)}>Search</button>
    </StyledLabel>
  );
}

export default SearchBar;
