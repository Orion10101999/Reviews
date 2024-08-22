import React from 'react';

const RawContent = ({ review }) => {

  return (
    <div>
      <p className="font-medium text-gray-700"> Raw Content : </p>
      <p className={`text-gray-600`}>{review.raw_content}</p>
    </div>
  );
};

export default RawContent;