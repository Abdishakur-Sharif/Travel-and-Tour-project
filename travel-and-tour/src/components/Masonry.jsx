import React from "react";
import Cruises from '../assets/Images/Cruises.jpg'
import Museum from '../assets/Images/Museum.jpg'
import Beach from '../assets/Images/Beach.jpg'
import Food from '../assets/Images/Food.jpg'
import Hiking from '../assets/Images/Hiking.jpg'
import CityTour from '../assets/Images/CityTour.jpg'
import Thailand from '../assets/Images/Thailand.jpg'
import Turkey from '../assets/Images/Turkey.jpg'
import Europe from '../assets/Images/Europe.jpg'
import { CarouselTransition } from "./Carousel";

function Masonry(){
    const destinations = [
        {src:Cruises, label:"Cruises", size:'large'},
        {src:Museum, label:"Museum", size:'large'},
        {src:Beach, label:"Beach", size:'large'},
        {src:Food, label:"Food", size:'small'},
        {src:Hiking, label:"Hiking", size:'small'},
        {src:CityTour, label:"CityTour", size:'small'}

    ];
    return(
        <>
         <h1 className="text-3xl md:text-4xl ml-5 md:ml-20 mb-6 md:mb-9 mt-10 md:mt-20 text-purple-600 text-center md:text-left">
  Special Offers
</h1>
<div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center mb-10 md:mb-20 space-y-6 md:space-y-0 md:space-x-6 px-4">
  <div className="card w-full md:w-auto">
    <img className="card-image opacity-85 w-full h-auto" src={Thailand} alt="Thailand" />
    <div className="card-text-overlay">
      <p className="card-description font-bold text-center">
        Enjoy Upto 60% OFF On Your Booking
      </p>
    </div>
  </div>
  <div className="card w-full md:w-auto">
    <img className="card-image opacity-85 w-full h-auto" src={Turkey} alt="Turkey" />
    <div className="card-text-overlay">
      <p className="card-description text-center">
        80% OFF Are You Ready For Turkey Tour
      </p>
    </div>
  </div>
  <div className="card w-full md:w-auto">
    <img className="card-image opacity-85 w-full h-auto" src={Europe} alt="Europe" />
    <div className="card-text-overlay">
      <p className="card-description text-center">
        Discover The Wow Of Europe -50% OFF
      </p>
    </div>
  </div>
</div>

        <div className="masonry-container">
            <h2 className="masonry-title mt-11 text-purple-600">Trending Destinations</h2>
            <div className="masonry-grid">
                {destinations.map((destination, index) => (
                    <div key={index} className="masonry-item">
                        <img src={destination.src} alt={destination.label} className="masonry-image" />
                        <div className="masonry-label">{destination.label}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="text-5xl mt-16 text-center mb-11 text-purple-800">
            <h1>OUR CUSTOMERS GALLERY</h1>
        </div>
          
    <CarouselTransition />
        </>
    )
}


export default Masonry