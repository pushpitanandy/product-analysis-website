import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';
import useReviews from '../../hooks/useReviews';

const Home = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='home'>
                <div className="home-content">
                    <h1>Best Coffee Machine</h1>
                    <p>The quality of a morning coffee can make or break your day. So for coffee lovers, it's crucial that you find a coffee maker or espresso machine that makes coffee just the way you like it. A reliable model feels like an investment, a terrible one like daylight robbery.</p>
                    <button onClick={() => navigate('/about')} className='show-more-btn'>Find Out More!</button>
                </div>
                <div className="product-picture">
                    <img src="https://dam.delonghi.com/902x902/assets/113586" alt="" />
                </div>
            </div>
            <div className='review-container'>
                <h1>Customer Reviews: {reviews.length} </h1>
                <div className='review-display'>
                    {
                        reviews.map(review => <ReviewCard
                            key={review.id}
                            review={review}
                        ></ReviewCard>).slice(0, 3)
                    }
                </div>
                <button onClick={() => navigate('/reviews')} className='show-more-btn'>Show All Reviews</button>
            </div>
        </div>
    );
};

export default Home;