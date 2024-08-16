import React from 'react';
import Mountain from '../assets/Images/Mountain.jpg';
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

function HomeNav(prop) {
    return (
        <>
            <div
                id="image"
                style={{
                    backgroundImage: `url(${Mountain})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '600px',
                }}
            >
                <div className="flex flex-col md:flex-row items-center md:justify-between text-cyan-50 p-4 md:p-8">
                    <div className="flex flex-row items-center">
                        <span className="material-icons">spa</span>
                        <h2 className="text-3xl md:text-4xl font-bold ml-2">Xplore</h2>
                    </div>
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-12 mt-4 md:mt-0 text-xl md:text-2xl">
                        <Button className="bg-purple-800 w-full md:w-auto">
                            <Link to="/login">Log In</Link>
                        </Button>
                        <Button className="bg-purple-800 w-full md:w-auto">
                            <Link to="/signup">Sign Up</Link>
                        </Button>
                    </ul>
                </div>
                <div className="mt-20 md:mt-32 px-4 md:px-0 text-center md:text-left text-cyan-50">
                    <p className="text-xl md:text-xl">
                        Search, Compare and Book 15,000+ multiday trips all over the World
                    </p>
                    <br />
                    <h2 className="text-4xl md:text-6xl font-bold">
                        Tours and Trip packages, Globally
                    </h2>
                </div>
            </div>

            <div className="mt-10 px-4 md:px-0">
                <h1 className="text-3xl md:text-5xl text-center md:text-left mb-10 text-purple-600">
                    Know Before You Go
                </h1>
                <p className="text-base md:text-xl mb-10">
                    Understanding a country's population, currency, and language before visiting is
                    essential for a smooth and respectful trip. Knowing the population size gives insight
                    into the country's social dynamics and urbanization, helping travelers navigate busy
                    cities or rural areas. Familiarizing yourself with the local currency ensures you can
                    handle transactions confidently, avoiding potential financial misunderstandings.
                    Learning key phrases or basic language skills enhances communication and shows respect
                    for the local culture, making interactions with residents more enjoyable and
                    meaningful.
                </p>
                <Button className="bg-purple-800 w-full md:w-auto text-2xl md:text-3xl">
                    <Link to="/search">Search</Link>
                </Button>
            </div>
        </>
    );
}

export default HomeNav;
