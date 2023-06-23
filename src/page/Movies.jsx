import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
import InputForm from '../components/InputForm';
import { searchMovies } from '../api';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (movieName === '') return;

    searchMovies(movieName).then(setMovies);
  }, [movieName]);

  const updateQueryString = ({ name }) => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  return (
    <>
      <InputForm setSearchedToParams={updateQueryString} />
      <MoviesList movies={movies} />
    </>
  );
}
