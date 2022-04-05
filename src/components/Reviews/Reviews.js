import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {
    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch('fakereviews.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data));
    // }, [])

    const [reviews, setReviews] = useReviews();

    return (
        <div className='reviews'>
            <h1>Customer reviews: {reviews.length}</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;