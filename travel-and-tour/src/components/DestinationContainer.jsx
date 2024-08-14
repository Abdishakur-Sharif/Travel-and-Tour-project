import React from 'react';
import DestinationCard from './DestinationCard';
import Search from './Search';
import HomeNav from './HomeNav';
import Masonry from './Masonry';
import CustomerComments from './CustomerComments';
import CountryWeatherInfo from './CountryWeatherInfo';


function DestinationContainer(prop){
    return(
        <>
        <HomeNav />
        <Search/>
        <div>
      <CountryWeatherInfo country="Germany" />
      <CountryWeatherInfo country="Japan" />
    </div>
        {/* <DestinationCard /> */}
        <Masonry/>
        <CustomerComments />
        </>
    )
}


export default DestinationContainer;