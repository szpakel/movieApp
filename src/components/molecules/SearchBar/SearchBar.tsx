import { StyledLabel } from "./SearchBar.styles";
import { useMovies } from "../../../context/MovieContext";

export default function SearchBar() {
  const { handleQueryValue, query } = useMovies()

  return (
    <StyledLabel>
      <input value={query} onChange={handleQueryValue} type="text" placeholder="Search for movies..." />
      {/* <button onClick={() => handleSearchMovies(query)}>Search</button> */}
    </StyledLabel>
  );
}
