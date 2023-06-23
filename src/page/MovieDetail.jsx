import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovieById } from '../api';
export default function MovieDetail() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovieById(movieId).then(setMovies);
  }, [movieId]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const { poster_path, original_title, release_date, popularity, overview } =
    movies;
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {poster_path && (
        <img src={IMG_URL + poster_path} alt={original_title} width={200} />
      )}
      <h1>
        {original_title} <span>{release_date}</span>
      </h1>
      <p>{popularity}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <div>
        {movies.genres?.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
}
