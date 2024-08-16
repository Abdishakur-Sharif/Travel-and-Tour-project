import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomeNav from './components/HomeNav';
import Masonry from './components/Masonry';
import CustomerComments from './components/CustomerComments';
import CountryWeatherInfo from './components/CountryWeatherInfo';
import useCountryWeather from './context/useCountryWeather';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Search from './components/Search';

function App() {
  const { weather, countryInfo, error } = useCountryWeather('Germany'); // Example country

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <HomeNav />
            <div>
              <CountryWeatherInfo countryInfo={countryInfo} weather={weather} error={error} />
            </div>
            <Masonry />
            <CustomerComments />
          </>
        } />
        <Route path="Search" element={<Search />} />
        <Route path="LogIn" element={<LogIn />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

