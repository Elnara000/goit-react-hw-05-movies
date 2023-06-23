import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
