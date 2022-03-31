import React, { useState } from 'react';

const Search = ({cb = Function.prototype}) => {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col-s12'>
        <input
          type='search'
          id='search-field'
          placeholder='search'
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className='btn'
          style={{ postion: 'absolute', top: 0, rigth: 0 }}
          onClick={handleSubmit}
        >
          Поиск
        </button>
      </div>
    </div>
  );
};

export default Search;
