// App.js
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TimeZoneComponent from './components/js/TimeZoneComponent';
import Header from './components/js/Header';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

function App() {
  const [timeList, setTimeList] = useState([]);

  const handleAddCity = (timeOnly) => {
    const existingCityIndex = timeList.findIndex(
      (city) =>
        city.timezone_name === timeOnly.timezone_name &&
        city.timezone_abbreviation === timeOnly.timezone_abbreviation
    );

    if (existingCityIndex !== -1) {
      return timeList[existingCityIndex];
    } else {
      setTimeList([...timeList, timeOnly]);
      return null;
    }
  };

  const handleRemoveCity = (index) => {
    const updatedList = [...timeList];
    updatedList.splice(index, 1);
    setTimeList(updatedList);
  };

  const handleClearList = () => {
    setTimeList([]);
  };

  return (
    <div style={{ color: 'black' }}>
      <Header />
      <Container>
        <main>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Item>
                <Typography variant="h6">Time Zone Converter</Typography>
                <TimeZoneComponent onAddCity={handleAddCity} onClearList={handleClearList} />
              </Item>
            </Grid>
          </Grid>

          {timeList.length > 0 && (
            <div>
              <h2>Time List</h2>
              <ul>
                {timeList.map((timeOnly, index) => (
                  <li key={index}>
                    {timeOnly.datetime} - {timeOnly.timezone_name} ({timeOnly.timezone_abbreviation}) -{' '}
                    <FontAwesomeIcon
                      icon={faTimes}
                      style={{ cursor: 'pointer', color: 'red' }}
                      onClick={() => handleRemoveCity(index)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </Container>
    </div>
  );
}

export default App;
