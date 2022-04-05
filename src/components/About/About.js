import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <h1>Nespresso Coffee Machine</h1>
            <div className='product-info'>
                <div className="product-picture">
                    <img src="https://dam.delonghi.com/902x902/assets/113586" alt="" />
                </div>
                <div className="product-detail">
                    <h2>Features:</h2>
                    <ul>
                        <li>25-second heat-up time using a Thermoblock system</li>
                        <li>Integrated manual milk frother with an included whisk</li>
                        <li>Pre-set functions to make various types of coffee</li>
                    </ul>
                    <h3>Price: $449</h3>
                </div>
            </div>
        </div>
    );
};

export default About;