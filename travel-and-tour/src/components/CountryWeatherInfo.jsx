import React, { useEffect, useState } from 'react';
import { FaTemperatureHigh, FaWind, FaCloudSun } from 'react-icons/fa';

const CountryWeatherInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (!countryResponse.ok) {
          throw new Error('Country not found');
        }
        const countryData = await countryResponse.json();
        setCountryInfo(countryData[0]);

        const capitalCity = countryData[0]?.capital?.[0];

        if (!capitalCity) {
          throw new Error('Capital city not found');
        }

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=9b5cc4aa57df9a1a72de33526c58e9c1`
        );
        if (!weatherResponse.ok) {
          throw new Error('Weather information not found');
        }
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCountryInfo();
  }, [country]);

  if (error) return <p style={styles.error}>{error}</p>;
  if (!countryInfo || !weather) return <p style={styles.loading}>Loading...</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{countryInfo.name.common}</h1>
      <div style={styles.infoSection}>
        <p><strong>Population:</strong> {countryInfo.population.toLocaleString()}</p>
        <p><strong>Capital:</strong> {countryInfo.capital[0]}</p>
        <p><strong>Currency:</strong> {Object.keys(countryInfo.currencies)[0]}</p>
        <p><strong>Languages:</strong> {Object.values(countryInfo.languages).join(', ')}</p>
      </div>
      
      <h2 style={styles.subHeading}>Weather in {countryInfo.capital[0]}</h2>
      <div style={styles.weatherSection}>
        <div style={styles.weatherItem}>
          <FaTemperatureHigh style={styles.icon} />
          <p><strong>Temperature:</strong> {(weather.main.temp - 273.15).toFixed(2)}°C</p>
        </div>
        <div style={styles.weatherItem}>
          <FaCloudSun style={styles.icon} />
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
        </div>
        <div style={styles.weatherItem}>
          <FaWind style={styles.icon} />
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '30px',
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
    animation: 'fadeIn 1s ease-in-out',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
    paddingBottom: '10px',
    fontWeight: '700',
  },
  infoSection: {
    marginBottom: '30px',
    fontSize: '1.2rem',
  },
  subHeading: {
    fontSize: '2.2rem',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.9)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
  weatherSection: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '1.1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: '20px',
    borderRadius: '15px',
  },
  weatherItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  error: {
    color: 'white',
    backgroundColor: '#d9534f',
    padding: '15px',
    borderRadius: '10px',
    fontWeight: 'bold',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center',
  },
  loading: {
    color: 'white',
    fontSize: '1.8rem',
    textAlign: 'center',
  },
};

export default CountryWeatherInfo;

