import React from "react";
import { Carousel } from "@material-tailwind/react";
import Cruises from '../assets/Images/Cruises.jpg'
import Museum from '../assets/Images/Museum.jpg'
import Beach from '../assets/Images/Beach.jpg'
import Food from '../assets/Images/Food.jpg'
import Hiking from '../assets/Images/Hiking.jpg'
import CityTour from '../assets/Images/CityTour.jpg'
import Denmark from '../assets/Images/Denmark.jpg'
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













