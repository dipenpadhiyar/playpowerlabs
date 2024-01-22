import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [cityName, setCityName] = useState('');

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = () => {
    if (cityName.trim() !== '') {
      onSearch(cityName.trim());
      setCityName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
