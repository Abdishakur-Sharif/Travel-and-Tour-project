import React from 'react';
import HomeNav from './HomeNav';
import Masonry from './Masonry';
import CustomerComments from './CustomerComments';
import CountryWeatherInfo from './CountryWeatherInfo';
import useCountryWeather from '../context/useCountryWeather'

function DestinationContainer() {
  const { weather, countryInfo, error } = useCountryWeather('Germany'); // Example country

  return (
    <>
      <HomeNav />
      <div>
        <CountryWeatherInfo countryInfo={countryInfo} weather={weather} error={error} />
      </div>
      <Masonry />
      <CustomerComments />
    </>
  );
}

export default DestinationContainer;
