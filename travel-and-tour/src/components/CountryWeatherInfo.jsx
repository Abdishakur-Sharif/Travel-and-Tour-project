import React from 'react';
import { FaTemperatureHigh, FaWind, FaCloudSun } from 'react-icons/fa';

const CountryWeatherInfo = ({ countryInfo, weather, error }) => {
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
    maxWidth: '90%',
    margin: '40px auto',
    padding: '20px',
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
    animation: 'fadeIn 1s ease-in-out',
    transition: 'padding 0.5s ease',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
    paddingBottom: '10px',
    fontWeight: '700',
    transition: 'font-size 0.5s ease',
  },
  infoSection: {
    marginBottom: '20px',
    fontSize: '1rem',
    transition: 'font-size 0.5s ease',
  },
  subHeading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.9)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    transition: 'font-size 0.5s ease',
  },
  weatherSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: '15px',
    borderRadius: '15px',
    transition: 'padding 0.5s ease',
  },
  weatherItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '300px',
    marginBottom: '15px',
    transition: 'flex-direction 0.5s ease, margin-bottom 0.5s ease',
  },
  icon: {
    fontSize: '2rem',
    marginRight: '10px',
    transition: 'font-size 0.5s ease',
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
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  '@media(min-width: 768px)': {
    container: {
      maxWidth: '700px',
      padding: '30px',
    },
    heading: {
      fontSize: '3rem',
    },
    infoSection: {
      fontSize: '1.2rem',
    },
    subHeading: {
      fontSize: '2.2rem',
    },
    weatherSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    weatherItem: {
      flexDirection: 'column',
      marginBottom: '0',
    },
    icon: {
      fontSize: '2.5rem',
    },
  },
};

export default CountryWeatherInfo;



