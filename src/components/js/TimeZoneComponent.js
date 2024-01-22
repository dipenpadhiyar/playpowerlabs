// TimeZoneComponent.js
import React, { useState, useEffect } from 'react';
import { getTimezoneByLocation } from './TimeZoneServise';

const TimeZoneComponent = ({ onAddCity, onClearList }) => {
  const [location, setLocation] = useState('Oxford, United Kingdom');
  const [timezoneInfo, setTimezoneInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (timezoneInfo) {
      handleAddCity();
    }
  }, [timezoneInfo]);

  const handleSearch = async () => {
    try {
      if (location) {
        const data = await getTimezoneByLocation(location);
        setTimezoneInfo(data);
      } else {
        setErrorMessage('Please enter a location');
      }
    } catch (error) {
      console.error('Error fetching timezone information:', error);
      setErrorMessage('Error fetching timezone information');
    }
  };

  const handleAddCity = () => {
    if (timezoneInfo && timezoneInfo.datetime) {
      const timeOnly = {
        datetime: timezoneInfo.datetime,
        timezone_name: timezoneInfo.timezone_name,
        timezone_abbreviation: timezoneInfo.timezone_abbreviation,
        gmt_offset: timezoneInfo.gmt_offset,
      };

      const isCityInList = onAddCity(timeOnly);

      if (isCityInList) {
        setErrorMessage(`City ${isCityInList.timezone_name} already in the list`);
      } else {
        setLocation('');
        setErrorMessage('');
      }
    }
  };

  const handleClear = () => {
    onClearList();
    setErrorMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h2>Timezone Information</h2>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} onKeyPress={handleKeyPress} />
      </label>
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <button type="button" onClick={handleClear}>
        Clear List
      </button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default TimeZoneComponent;