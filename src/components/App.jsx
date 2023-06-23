import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from './SharedLayout';

const MovieDetail = lazy(() => import('../page/MovieDetail'));
const Home = lazy(() => import('../page/Home'));
const Movies = lazy(() => import('../page/Movies'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route />
          </Route>
          <Route path="*" element={<div>not found asshole</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}
