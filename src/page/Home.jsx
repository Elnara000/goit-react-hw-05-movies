import { useEffect, useState } from 'react';
import { getTrending } from '../api';
import MoviesList from '../components/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}
