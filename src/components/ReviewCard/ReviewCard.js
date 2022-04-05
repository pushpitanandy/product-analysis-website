import React from 'react';
import './ReviewCard.css';

const ReviewCard = (props) => {
    const { name, review, rating, image } = props.review;
    return (
        <div className='review-card'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p><small>{rating}</small></p>
            <p>{review}</p>
        </div>
    );
};

export default ReviewCard;