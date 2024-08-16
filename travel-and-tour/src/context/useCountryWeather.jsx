import { useState, useEffect } from 'react';

const useCountryWeather = (country) => {
  const [weather, setWeather] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!country) return; // Prevent fetching if no country is provided

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
          `https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=${apiKey}`
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
  }, [country]); // Re-fetch whenever 'country' changes

  return { weather, countryInfo, error };
};

export default useCountryWeather;
