import { useState } from 'react';

export default function InputForm({ setSearchedToParams }) {
  const [name, setName] = useState('');

  const onHandleChange = e => {
    setName(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchedToParams({ name });
    form.reset();
    //do not work
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input type="text" value={name} onChange={onHandleChange} />
      <button type="submit"></button>
    </form>
  );
}
// const Form = ({ setSearchParams }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();

//     setSearchParams({ query });
//   };

//   const handleSearchParams = ({ target: { value } }) => {
//     setQuery(value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <InputSearch
//         type="text"
//         placeholder="Name movie"
//         autoFocus
//         value={query}
//         onChange={handleSearchParams}
//       />
//       <ButtonSearch type="submit" disabled={!query}>
//         Search
//       </ButtonSearch>
//     </form>
//   );
// };
