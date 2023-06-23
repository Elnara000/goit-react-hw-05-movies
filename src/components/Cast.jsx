import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from '../api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCastMovie(movieId).then(setCast);
  }, [movieId]);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <div>
        {cast.map(({ id, profile_path, original_name, character }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={IMG_URL + profile_path}
                alt={original_name}
                width={200}
              />
            )}
            <p>
              <span> Actor:</span> {original_name}
            </p>
            <p>
              <span>Character:</span> {character}
            </p>
          </li>
        ))}
      </div>
    </>
  );
}
