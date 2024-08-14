import React from 'react';
import Mountain from '../assets/Images/Mountain.jpg';


function HomeNav(prop){
    return(
        <>
        <div id='image' style={{ 
                    backgroundImage: `url(${Mountain})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat',
                    height: '600px',
        }}>
        <div className='flex flex-row   text-cyan-50'>
            <span className="material-icons ml-4">spa</span>
            <h2 className='text-4xl font-bold mt-4 '>Xplore</h2>
            <ul className='flex flex-row gap-12 ml-52 mt-4 text-2xl '>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tour</a></li>
                <li><a href="#">Destination</a></li>
                <li><a href="#">Activities</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className='mt-44 ml-80 text-2xl  text-cyan-50'>
            <p>Search,Compare and Book 15,000+ multiday all over the World</p>
            <br></br>
            <h2 className='text-6xl text-balance'>Tours and Trip packages, Globally</h2>
            </div>
         
    </div>
        </>
    )
}


export default HomeNav;