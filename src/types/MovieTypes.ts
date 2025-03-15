export type Movie = {
  title: string;
  release_date: string;
  id: string | number;
  poster_path: string;
};

export type MoviesContextType = {
  movies: Movie[];
  isLoading: boolean;
  query: string;
  favorites: Movie[];
  handleSearchMovies: (queryValue: string) => Promise<void>;
  handleQueryValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddFavoriteMovies: (movie: Movie) => void;
  handleRemoveFavoriteMovies: (movieId: string | number) => void;
  isFavorite: (movieId: string | number) => boolean;
}

