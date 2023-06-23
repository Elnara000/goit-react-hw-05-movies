import { useState } from 'react';
import PropTypes from 'prop-types';

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
InputForm.propTypes = {
  setSearchedToParams: PropTypes.func,
};
