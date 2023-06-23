import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from '../api';

export default function Cast() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviewsMovie(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      <div>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <span>Author:</span> {author}
            </p>
            <p>{content}</p>
          </li>
        ))}
      </div>
    </>
  );
  //   return (
  //     <>
  //       <div>
  //         {reviews.map(({ id, author, content }) => (
  //           <li key={id}>
  //             <p>
  //               <span>Author:</span> {author}
  //             </p>
  //             <p>{content}</p>
  //           </li>
  //         ))}
  //       </div>
  //     </>
  //   );
}
