import { useState, useEffect } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch('fakeReviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return [reviews, setReviews];
}

export default useReviews;