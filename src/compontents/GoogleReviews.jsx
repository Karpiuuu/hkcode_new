import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = "";

const GoogleReviews = ({ placeId, apiKey }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://www.google.pl/maps/place/HKCode+Agencja+Marketingowa+K%C5%82odzko/@50.4391924,16.6523615,17z/data=!3m1!4b1!4m6!3m5!1s0xae37285ee297dbf7:0xd5d2db3bb972bcb3!8m2!3d50.439189!4d16.6549364!16s%2Fg%2F11y2h3pv7c?entry=ttu`
        );
        setReviews(response.data.result.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [placeId, apiKey]);

  return (
    <div>
      <h2>Google Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>{review.author_name}</p>
            <p>{review.rating}</p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
