import React from 'react';
import Tooltip from './Tooltip';

const ReviewHighlighter = ({ review }) => {
  // Extract the raw content and highlight indices
  let ReviewHighlighterString = review.raw_content;
  let topic = review?.topic
  let sentiment = review?.sentiment
  console.log(topic);
  console.log(sentiment);
  
  // Extract the indices and sentiment color code
  let index1 = review?.analytics[0]?.highlight_indices[0][0];
  let index2 = review?.analytics[0]?.highlight_indices[0][1];
  let colorCode = review?.analytics[0]?.highlight_indices[0][2];

  // Determine the background color based on the sentiment
  let backgroundColor = '';
  if (colorCode === 'Positive') {
    backgroundColor = '#D9F2DD';
  } else if (colorCode === 'Negative') {
    backgroundColor = '#F2DBD9';
  } else if (colorCode === 'Mixed') {
    backgroundColor = '#e8bd6d3d';
  } else if (colorCode === 'Neutral') {
    backgroundColor = '#eaf09b6b';
  }
  if(index1 == -1){
    let index = index2
    index2 = ReviewHighlighterString.length - 1
    index1 = index2 - index
  }
  // Split the string into three parts
  const beforeHighlight = ReviewHighlighterString.slice(0,index1);
  const highlightedText = ReviewHighlighterString.slice(index1, index2);
  const afterHighlight = ReviewHighlighterString.slice(index2);

  return (
    <div>
      <p className="font-medium text-gray-700"> Raw Content: </p>
      <p className="text-gray-600">
        {beforeHighlight}
        <span style={{ backgroundColor: backgroundColor }}>
          <Tooltip tooltip={`${topic} : ${sentiment}`} style={backgroundColor}>
          {highlightedText}
        </Tooltip>
          </span>
        {afterHighlight}
      </p>
    </div>
  );
};

export default ReviewHighlighter;
