import React from 'react';
import Thailand from '../assets/Images/Thailand.jpg'
import Turkey from '../assets/Images/Turkey.jpg'
import Europe from '../assets/Images/Europe.jpg'

function Search(prop){
    return(
        <>
        <div className="form-container mt-7 ">
                <form className="search-form">
                    <div className="form-group">
                        <label htmlFor="destination">Where</label>
                        <input type="text" id="destination" placeholder="Search destinations" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">When</label>
                        <input type="text" id="date" placeholder="February 05 ~ March 14" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tour-type">Tour Type</label>
                        <input type="text" id="tour-type" placeholder="All tour" />
                    </div>
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
            <h1 className='text-4xl ml-20 mb-9 mt-20 text-purple-600'>Special Offers</h1>
          <div className='flex flex-row justify-evenly mb-20'>
              <div className="card ">
                <img className="card-image opacity-85" src={Thailand} alt="Thailand" />
                <div className="card-text-overlay">
                    <p className="card-description font-bold">
                        Enjoy Upto 60% OFF On Your Booking
                    </p>
                </div>
            </div>
              <div className="card">
                <img className="card-image opacity-85" src={Turkey} alt="Turkey" />
                <div className="card-text-overlay">
                    <p className="card-description ">
                        80% OFF Are You Ready For Turkey Tour
                    </p>
                </div>
            </div>
              <div className="card">
                <img className="card-image opacity-85" src={Europe} alt="Europe" />
                <div className="card-text-overlay">
                    <p className="card-description">
                        Discover The Wow Of Europe -50% OFF
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}


export default Search;