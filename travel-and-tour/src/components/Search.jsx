import React, { useState } from 'react';
import CountryWeatherInfo from './CountryWeatherInfo';
import useCountryWeather from '../context/useCountryWeather';

function Search() {
  const [searchQuery, setSearchQuery] = useState('France'); // Default country for initial render
  const { weather, countryInfo, error } = useCountryWeather(searchQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value.trim(); // Reference the correct input element
    if (country) {
      setSearchQuery(country); // Update the search query to trigger re-fetch
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-600 mt-10 mb-6 text-center">
        Search for a Country
      </h1>
      <div className="w-full max-w-md">
        <form className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg" onSubmit={handleSearch}>
          <div className="flex flex-col gap-2">
            <label htmlFor="country" className="text-lg font-medium text-gray-700">
              Where
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Search destinations"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>
      <div className="mt-6 w-full max-w-3xl">
        <CountryWeatherInfo countryInfo={countryInfo} weather={weather} error={error} />
      </div>
    </div>
  );
}

export default Search;
