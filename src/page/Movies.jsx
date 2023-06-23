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

// export const Products = () => {
//     const products = getProducts();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const productName = searchParams.get('name') ?? '';

//   const visibleProducts = products.filter(product =>
//     product.name.toLowerCase().includes(productName.toLowerCase())
//   );

//   const updateQueryString = name => {
//     const nextParams = name !== '' ? { name } : {};
//     setSearchParams(nextParams);
//   };

//   return (
//     <main>
//       <SearchBox value={productName} onChange={updateQueryString} />
//       <ProductList products={visibleProducts} />
//     </main>
//   );
// };
