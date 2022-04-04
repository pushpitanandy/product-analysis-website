import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-content">
                <h1>Best Coffee Machine</h1>
                <p>The quality of a morning coffee can make or break your day. So for coffee lovers, it's crucial that you find a coffee maker or espresso machine that makes coffee just the way you like it. A reliable model feels like an investment, a terrible one like daylight robbery.</p>
            </div>
            <div className="product-picture">
                <img src="https://dam.delonghi.com/902x902/assets/113586" alt="" />
            </div>
        </div>
    );
};

export default Home;