import React, { useState } from 'react';
import ReviewData from '../data/reviews_data.json';
import RawContent from './ReviewHighlighter';
import Content from './Content';

const ReviewList = () => {
  // Initialize visibility state for each review
  const [visibility, setVisibility] = useState(
    ReviewData.reduce((acc, review) => {
      acc[review.review_id] = false;
      return acc;
    }, {})
  );

  // Toggle visibility for a specific review
  const toggleVisibility = (review_id) => {
    setVisibility((prev) => ({
      ...prev,
      [review_id]: !prev[review_id],
    }));
  };

  return (
    <div className="p-4 space-y-4">
      {ReviewData.map((review) => (
        <div key={review.review_id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-4">
            <img src={review.source.icon} alt="Review Source Icon" className="w-12 h-12 rounded-full" />
            <div>
              <div className='flex'>
              <h2 className="text-lg font-semibold">{review.reviewer_name} </h2>
              <span className='mx-3 text-slate-400'> wrote a review at </span>
              <a href={review.review_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg font-semibold">{review.source.name}</a>

              </div>
              <div className='flex justify-between items-center'>
              <p className="text-yellow-500 font-bold">Rating: {review.rating_review_score} / 10</p>
              <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-medium text-gray-700">topic : <span className="text-gray-500">{review.topic}</span></p>
            <RawContent review={review} />
            <button
              onClick={() => toggleVisibility(review.review_id)}
              className="mt-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {visibility[review.review_id] ? 'Hide Translated Content' : 'See Translated Content'}
            </button>
            {visibility[review.review_id] && (
              <Content review={review} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
