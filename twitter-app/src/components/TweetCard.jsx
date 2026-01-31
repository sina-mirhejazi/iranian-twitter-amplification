import React from 'react';

const TweetCard = ({ id, message, isDone, onTweet }) => {
  const handleTweetClick = () => {
    const url = `https://x.com/intent/post?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onTweet(id);
  };

  return (
    <div className={`tweet-card ${isDone ? 'done' : ''}`}>
      <p className="tweet-content">{message}</p>
      <button 
        className="tweet-btn" 
        onClick={handleTweetClick}
      >
        {isDone ? 'Posted' : 'Tweet This'}
      </button>
    </div>
  );
};

export default TweetCard;
